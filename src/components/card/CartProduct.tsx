import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  removeFromCart,
  increment,
  decrement,
} from "@/redux/features/cart/cartSlice";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const handleRemoveCart = () => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(increment(id));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      dispatch(decrement(id));
    } else {
      handleRemoveCart();
    }
  };

  return (
    <section>
      <li className="flex items-center gap-4">
        <img src={image} alt={name} className="size-28 rounded object-cover" />
        <div>
          <h3 className="text-xl text-gray-900">{name}</h3>
          <dl className="mt-0.5 space-y-px text-[15px] text-gray-600">
            <div>
              <dt className="inline">Quantity:</dt>
              <dd className="inline">{quantity}</dd>
            </div>
            <div>
              <dt className="inline">Price:</dt>
              <dd className="inline">£{price}</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <button
            onClick={handleDecrement}
            className="text-gray-600 transition hover:text-red-600"
          >
            <span className="sr-only">Decrease Quantity</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <button
            onClick={handleIncrement}
            className="text-gray-600 transition hover:text-red-600"
          >
            <span className="sr-only">Increase Quantity</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            onClick={handleRemoveCart}
            className="text-gray-600 transition hover:text-red-600"
          >
            <span className="sr-only">Remove Item</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </li>
    </section>
  );
};

export default CartItem;
