import React from "react";
import { NavLink } from "react-router-dom";
import { FaBlackTie } from "react-icons/fa";
import Cookies from "js-cookie";

const Header = () => {
    const isLoggedIn = () => {
        if (Cookies.get("token") !== undefined) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <div className="navbar px-4 lg:px-28">
            <div className="navbar-start">
                <NavLink
                    to="/"
                    className="normal-case text-xl font-bold flex items-center"
                >
                    <i>
                        <FaBlackTie className="text-primary mr-1" />
                    </i>
                    CO-LINGO
                </NavLink>
            </div>

            <div className="navbar-end">
                {!isLoggedIn() ? (
                    <NavLink to="login" className="btn btn-secondary bg-green-500">
                        Login
                    </NavLink>
                ) : (
                    <NavLink
                        to="dashboard"
                        className="btn btn-secondary btn-outline"
                    >
                        Dashboard
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Header;
