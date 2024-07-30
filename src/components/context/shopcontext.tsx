import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { products } from '../../utlis/variable';
import {toast} from "react-hot-toast" 
// Define types for context
interface CartItem {
  [key: number]: number;
}

interface GlobalContextType {
  cartItem: CartItem;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clear: (id: number) => void;
  clearAll: () => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

const getDefaultCart = () => {
  const cart: CartItem = {};
  for (let i = 0; i < products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [cartItem, setCartItem] = useState<CartItem>(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (id: number) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    toast(`product added to cart`,{
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
    })
  };

  const removeFromCart = (id: number) => {
    setCartItem((prev) => ({ ...prev, [id]: Math.max(prev[id] - 1, 0) }));
    toast(`product removed from  cart`,{
      style: {
        border: '1px solid #954535',
        padding: '16px',
        color: '#DE3163',
      },
      })
  };

  const clear = (id: number) => {
    setCartItem((prev) => ({ ...prev, [id]: 0 }));
    toast(`product removed from  cart`,{
      style: {
        border: '1px solid #954535',
        padding: '16px',
        color: '#DE3163',
      },
      })
  };

  const clearAll = () => {
    setCartItem(getDefaultCart());
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }
    return totalAmount + 2.50; // Assuming 2.50 is some fixed additional charge
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  };

  return (
    <GlobalContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        clear,
        clearAll,
        getTotalCartAmount,
        getTotalCartItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
