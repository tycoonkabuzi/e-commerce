import { Icon } from "@iconify/react";
import logo from "../../../assets/icons/toni-black-full.png";
import style from "./Nav.module.scss";
import { Outlet } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <img src={logo} />
      </div>
      <ul>
        <li>Home</li>
        <li>Shop</li>
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
      <Outlet />
    </div>
  );
};

export default Nav;
