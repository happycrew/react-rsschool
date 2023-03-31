export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  image?: string;
  rating: string;
  stock: string;
  rules?: boolean;
}

export interface IProducts {
  products: IProduct[];
}

export interface IModal {
  [props: string]: never;
}

export interface IForm {
  onAddProduct: (ev: IProduct) => void;
}

export type FormValidation = {
  validateName: boolean;
  validatePrice: boolean;
  validateStock: boolean;
  validateCategory: boolean;
  validateImage: boolean;
  validateChecked: boolean;
  errorMessage: boolean;
  prodId: number;
};

export type HeaderProps = {
  checkHomeBtn: boolean;
  checkAboutBtn: boolean;
};

export type InputTypes = {
  title: string;
  price: string;
  stock: string;
  category: string;
  image: FileList;
  rating: string;
  rules: boolean;
  errorMessage: string;
};
