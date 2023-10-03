import React, { useState } from "react";
import UITextField from "./UITextField";
import { useUser } from "../ProductContext/UserProvider";
import { AppContext } from "../ProductContext/AppProvider";

function CheckOut() {
  const { user } = useUser();
  const { allCartProducts } = AppContext;
  const [address, setAddress] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(":: CheckOut -> handelSubmit ::", {
      allCartProducts,
      user,
      address
    });

    const products = allCartProducts ? allCartProducts.map(product => {
      return {
        id : product.id,
        quantity : product.quantity,
        title : product.title,
        price : product.price,
        totalPrice : product.totalPrice,
      };
    }) : [];

    const totalAmount = products.reduce((acc,product) => {
      return acc + (product.totalPrice || 0);
    },0)


    const SaveOrder = {
      userId : user.uid,
      userEmail : user.email,
      address,
      totalAmount,
      products
    }
    console.log(":: check Out  -> handelSubmit -> save Order -> ::" , SaveOrder)
  };

  return (
    <div className="bg-slate-800 min-h-screen container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semi-bold mb-4 text-white p-5rem">
        Check-Out
      </h2>
      <form onSubmit={handelSubmit}>
        <UITextField placeholder="Email" value={user.email} readOnly />
        <UITextField
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          disabled={!address || address.length < 10}
          className="flex max-w-xs justify-center rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3 disabled:bg-slate-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
