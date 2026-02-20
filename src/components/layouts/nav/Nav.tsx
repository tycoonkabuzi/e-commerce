import { Icon } from "@iconify/react";
import logo from "../../../assets/icons/toni-black-full.png";
import style from "./Nav.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import ShoppingCard from "../shoppingCard";
import { useState } from "react";
const Nav: React.FC = () => {
  const navigate = useNavigate();
  const [toggleCard, setToggleCard] = useState(false);
  return (
    <div>
      <div className={style.nav}>
        <div className={style.logo}>
          <img src={logo} />
        </div>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li>Blog</li>
        </ul>

        <ul>
          <li>
            <Icon icon="line-md:search" width={25} height={25} />
            Search
          </li>
          <li>
            <Icon icon="line-md:account" width={25} height={25} />
          </li>
          <li>
            <Icon icon="line-md:heart" width={25} height={25} />
          </li>
          <li>
            <Icon
              icon="material-symbols:shopping-cart-outline"
              width={25}
              height={25}
            />
          </li>
        </ul>
      </div>
      <Outlet />
      <ShoppingCard />
    </div>
  );
};

export default Nav;
