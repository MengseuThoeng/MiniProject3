"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
    selectProducts,
    selectTotalPrice,
    selectTotalQuantity
} from "@/redux/features/cart/cartSlice";
import CartProduct from "@/components/card/CartProduct";

export default function Cart() {
    const products = useAppSelector((state) => state.cart.products);
    const totalPrice = useAppSelector(selectTotalPrice);
    const totalQuantity = useAppSelector(selectTotalQuantity);

    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container mx-auto mt-10 px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="col-span-1">
                    <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
                    {products.length !== 0 ? (
                        <div className="space-y-6">
                            {products.map((product) => (
                                <CartProduct
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                />
                            ))}
                        </div>
                    ) : (
                        <h2 className="text-xl">Your cart is empty!</h2>
                    )}
                </div>
                <div className="col-span-1">
                    {products.length !== 0 && (
                        <div className="bg-gray-100 rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
                            <p className="mb-2">
                                Total Products: <span className="font-semibold">{products.length}</span>
                            </p>
                            <p className="mb-4">
                                Total Price: <span className="font-semibold text-red-500">${totalPrice}</span>
                            </p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>

        </>
    );
}
