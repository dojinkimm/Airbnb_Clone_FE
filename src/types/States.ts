export interface BasicForm {
  name: string;
  capacity: number;
  bedroom: number;
  bed: number;
  bath: number;
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
