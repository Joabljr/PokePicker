import React from "react";
import Link from "next/link";
import Image from "next/image";
import pokeMart from "../Images/Pokemart_Exterior.png";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Pokemon</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <Image src={pokeMart} alt="Cart Img" width={40} height={40} />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
