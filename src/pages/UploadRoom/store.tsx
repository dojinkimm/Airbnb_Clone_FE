import React, {
  useState,
  SetStateAction,
  createContext,
  useReducer,
  Dispatch,
  useEffect
} from 'react';
import { useHistory } from 'react-router-dom';
import { BasicForm, AddressForm, ImageForm } from 'src/types/States';
import { ActionParams } from 'src/types/Actions';
import { UseStateReducer } from 'src/types/CustomHooks';
import { createRoom } from 'src/apis/room';

export function useStateReducer<T>(state: T, action: ActionParams<T>): T {
  const { type, value } = action;

  return {
    ...state,
    [type]: value
  };
}

const convertKeyWithObject = (key: string, object?: string): string =>
  object ? `${object}[${key}]` : key;
const appendStatesToFormData = (
  formData: FormData,
  states: BasicForm | AddressForm | ImageForm,
  object?: string,
): void => {
  for (const [key, state] of Object.entries(states)) {
    const stateValue = state.value;
    if (key === 'mainImg' || typeof stateValue !== 'object')
      formData.append(convertKeyWithObject(key, object), stateValue);
    else
      for (const [key, value] of Object.entries<string>(stateValue))
        formData.append(convertKeyWithObject(key, object), value);
  }
};


const createFormData = (basicFormState: BasicForm, addressFormState: AddressForm, imageFormState: ImageForm): FormData => {
  const formData = new FormData();
  appendStatesToFormData(formData, basicFormState);
  appendStatesToFormData(formData, addressFormState);
  appendStatesToFormData(formData, imageFormState);
  return formData;
};

const BasicFormDefault: BasicForm = {
  name: '',
  capacity: 0,
  bedroom: 0,
  bed: 0,
  bath: 0,
  price: 0,
  checkin: '14:00',
  checkout: '11:00',
  houseType: '',
  convenience: {
    wifi: false,
    parking: false,
    kitchen: false,
    breakfast: false,
    tv: false,
    laundry: false,
    ac: false,
  }
};

const AddressFormDefault: AddressForm = {
  country: '',
  city: '',
  address: '',
  street1: '',
  street2: ''
};

const ImageFormDefault: ImageForm = {
  imagePreview: [],
  imageFile: []
};

export const BasicFormState = createContext<BasicForm>(BasicFormDefault);
export const BasicFormDispatch = createContext<
  Dispatch<ActionParams<BasicForm>>
>(() => {});

export const AddressFormState = createContext<AddressForm>(AddressFormDefault);
export const AddressFormDispatch = createContext<
  Dispatch<ActionParams<AddressForm>>
>(() => {});

export const ImageFormState = createContext<ImageForm>(ImageFormDefault);
export const ImageFormDispatch = createContext<
  Dispatch<ActionParams<ImageForm>>
>(() => {});

export const SubmitDispatch = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {}
);

export default function StoreProvider({
  children
}: {
  children: React.ReactElement;
}): JSX.Element {
  const history = useHistory();
  const [submit, setSubmit] = useState<boolean>(false);
  const [basicFormState, basicFormDispatcher] = useReducer<
    UseStateReducer<BasicForm>
  >(useStateReducer, BasicFormDefault);

  const [addressFormState, addressFormDispatcher] = useReducer<
    UseStateReducer<AddressForm>
  >(useStateReducer, AddressFormDefault);

  const [imageFormState, imageFormDispatcher] = useReducer<
    UseStateReducer<ImageForm>
  >(useStateReducer, ImageFormDefault);

  useEffect(() => {
    if (!submit) return;
    
    // const formData = createFormData(basicFormState, addressFormState, imageFormState);
    // console.log(formData);
    const formData = new FormData();
    formData.append('image', imageFormState.imageFile[0]);
    console.log(imageFormState.imageFile[0]);

    createRoom(formData).then((res)=>{
      
      return history.push('/');
    }).catch(e=>console.log(e));

  }, [basicFormState, addressFormState, imageFormState, submit, history]);

  return (
    <BasicFormDispatch.Provider value={basicFormDispatcher}>
      <BasicFormState.Provider value={basicFormState}>
        <AddressFormDispatch.Provider value={addressFormDispatcher}>
          <AddressFormState.Provider value={addressFormState}>
            <ImageFormDispatch.Provider value={imageFormDispatcher}>
              <ImageFormState.Provider value={imageFormState}>
                <SubmitDispatch.Provider value={setSubmit}>
                  {children}
                </SubmitDispatch.Provider>
              </ImageFormState.Provider>
            </ImageFormDispatch.Provider>
          </AddressFormState.Provider>
        </AddressFormDispatch.Provider>
      </BasicFormState.Provider>
    </BasicFormDispatch.Provider>
  );
}
