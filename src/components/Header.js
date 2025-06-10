import "./Header.css";
import { CiSearch, CiUser, CiMenuBurger } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiFediverseLogoLight } from "react-icons/pi";
import SortMenu from "./SortMenu";

export default function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <PiFediverseLogoLight fontSize={"40px"} className="logo_size" />
      </div>
      <div className="hide_for_desktop">
        <SortMenu
          customOptions={["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"]}
          customIcon={<CiMenuBurger />}
        />
      </div>

      <div className="header_center">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>

      <div className="header_right">
        <span title="Search">
          <CiSearch />
        </span>
        <span title="Wishlist">
          <MdFavoriteBorder />
        </span>
        <span title="Cart">
          <MdOutlineShoppingBag />
        </span>
        <span title="Profile" className="hide_for_mobile">
          <CiUser />
        </span>
        <div className="hide_for_mobile">ENG ▼</div>
      </div>
    </header>
  );
}
