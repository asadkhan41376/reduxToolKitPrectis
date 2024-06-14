import { getData } from "@/redux/cartSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const itemCart = useSelector((state) => state.cart);

  console.log(itemCart, "itemkdjf");

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="bg-gray-800 p-3 text-center">
      <h2>Shopping Cart</h2>
      <ul>
        {itemCart?.data?.products?.length > 0 ? (
          itemCart?.data?.products.map(
            (item, index) => (
              console.log(item, "itemkmf"),
              (
                <li key={index}>
                  {item.title} - ${item.price}
                </li>
              )
            )
          )
        ) : (
          <li>No items in cart</li>
        )}
      </ul>
    </div>
  );
};

export default ShoppingCart;
