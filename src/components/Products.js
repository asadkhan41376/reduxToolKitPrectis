import { addTocart } from "@/redux/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
const products = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Jeans", price: 50 },
  { id: 3, name: "Sneakers", price: 80 },
];
const Products = () => {
  const Dispatch = useDispatch();
  const handleAddToCart = (products) => {
    Dispatch(addTocart(products));
  };
  return (
    <>
      <div className="flex gap-3 justify-center p-6">
        {products.map((e, index) => {
          return (
            <div
              className="card bg-gray-500 w-[300px] p-6 text-center"
              key={index}
            >
              <div className="conatant" key={e.id}>
                <h1>{e.name}</h1>
                <h2>{e.price}</h2>
                <button
                  onClick={handleAddToCart}
                  className="btn bg-red-500 py-1 px-5 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
