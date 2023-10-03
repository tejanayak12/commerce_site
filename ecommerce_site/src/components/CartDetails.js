import React, { Component } from "react";
import { AppContext } from "../ProductContext/AppProvider";
import Cartitem from "./Cartitem";

export class CartDetails extends Component {
  goTOCheckOut = () => {
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <div className="bg-slate-800 bg-repeat relative flex min-h-screen justify-centre container mx-auto px-4 py-6 ">
        <section className="container mx-auto py-4  flex-1 w-100%">
          <h2 className="text-2xl font-semi-bold mb-4 text-white p-5rem flex justify-center">
            Cart Details
          </h2>
          <AppContext.Consumer>
            {({ cartProducts }) => {
              const products = Object.values(cartProducts);
              let total = 0;
              products.forEach(({ quantity, price }) => {
                total = total + quantity * price;
              });
              return products.length > 0 ? (
                <div>
                  {products.map((product) => (
                    <Cartitem key={product.id} product={product} />
                  ))}
                  <h4 className="text-white">Total Price Is : $ {total}</h4>
                  <button
                    onClick={this.goTOCheckOut}
                    className="flex max-w-xs justify-center rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
                  >
                    Proceed To Check Out
                  </button>
                </div>
              ) : (
                <p className="text-white">Your Cart Is Empty...</p>
              );
            }}
          </AppContext.Consumer>
        </section>
      </div>
    );
  }
}

export default CartDetails;
