import { IoPeopleCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiFillHome,
  AiFillShop,
  AiFillYoutube,
  AiOutlinePlus,
  AiFillCaretDown,
} from "react-icons/ai";

import facebookLogo from "./images/social-network.png";
import HiddenNavBar from "./HiddenNavBar";

const NavBar = ({ users, isNavBarActive, setIsNavBarActive }) => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="list">
            <img className="logo" src={facebookLogo} alt="fb-logo" />
            <AiOutlineSearch className="icon circle" />
          </li>
          <li className="list center-list">
            <AiFillHome className="icon current" />
            <AiFillYoutube className="icon unnecessary" />
            <AiFillShop className="icon unnecessary" />
            <IoPeopleCircleOutline className="icon unnecessary" />
            <GiHamburgerMenu
              className="icon"
              onClick={() => setIsNavBarActive(!isNavBarActive)}
            />
          </li>
          <li className="list">
            <AiOutlinePlus className="icon circle unnecessary" />
            <FaFacebookMessenger className="icon circle unnecessary" />
            <FaBell className="icon circle unnecessary" />
            <AiFillCaretDown className="icon circle " />
          </li>
        </ul>
      </nav>
      {isNavBarActive && <HiddenNavBar users={users} />}
    </>
  );
};

export default NavBar;
