import { create } from "zustand";

type useCartProps = {
  cart: string[];
  product: {
    name: string;
    description: string;
    cost: number;
    price_id: string;
    productInformation: {
      images: string[];
    };
  };
  openModal: boolean;
  setOpenModal: () => void;
  setProduct: (params: any) => void;
  addItemToCart: (params: any) => void;
  removeItemFromCart: (params: any) => void;
  emptyCart: (params: any) => void;
};

const useCart = create<useCartProps>((set, get) => ({
  cart: [],
  product: {
    name: "",
    description: "",
    cost: 0,
    price_id: "",
    productInformation: {
      images: [],
    },
  },
  openModal: false,
  setOpenModal: () => {
    set((state) => {
      return {
        ...state,
        openModal: !state.openModal,
      };
    });
  },
  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return {
        ...state,
        product: newProduct,
      };
    });
  },
  addItemToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const newCart = { ...state.cart, newItem };
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((_, eachCartIndex) => {
        return eachCartIndex !== itemIndex;
      });

      return {
        ...state,
        cart: newCart,
      };
    });
  },
  emptyCart: () => {
    set((state) => {
      const newCart: [] = [];

      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
