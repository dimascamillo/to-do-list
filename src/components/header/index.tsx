import { Link } from "react-router-dom";
import {
  House,
  SignOut,
  User,
} from "@phosphor-icons/react";

import logo from "../../../public/logo.svg";
import "./style.css";

interface HeaderProps {
  logged: boolean;
}

export function Header({ logged }: HeaderProps) {
  return (
    <header id="container-header">
      <nav id="menu-header">
        <ul className="menu-header-list">
          <li className="menu-header-list-item">
            <Link to={"/"}>
              <House size={16} />
            </Link>
          </li>

          <li className="menu-header-list-item">
            <Link to={"/login"}>
              {logged ? (
                <SignOut size={16} />
              ) : (
                <User size={16} />
              )}
            </Link>
          </li>
        </ul>
      </nav>

      <img src={logo} />
    </header>
  );
}
