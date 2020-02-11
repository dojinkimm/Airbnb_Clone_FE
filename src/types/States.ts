export interface BasicForm {
  title: string;
  capacity: number;
  bedroomNumber: number;
  bedNumber: number;
  bathNumber: number;
  price: number;
  checkin: string;
  checkout: string;
  houseType: string;
  convenience: {
    wifi: boolean;
    parking: boolean;
    kitchen: boolean;
    breakfast: boolean;
    tv: boolean;
    laundry: boolean;
    ac: boolean;
  }
}

export interface AddressForm {
  country: string;
  city: string;
  address: string;
  street1: string;
  street2: string;
}

export interface ImageForm{
    imagePreview: string[];
    imageFile: File[];
}

export interface AuthenticationState{
  isAuth: boolean;
  token: string;
}
