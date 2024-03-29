"use client";

import React, { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Domů", href: "#home" },
  { name: "Služby", href: "#services" },
  { name: "Reference", href: "#testimonial" },
  { name: "O Mně", href: "#team" },
  { name: "Kontakty", href: "#contactus" },
];
const NavBar = () => {
  const [active, setActive] = useState("Domů");

  return (
    <div className="fixed top-16 left-0 right-0 mx-auto z-50 flex justify-center py-4">
      <div className="flex max-w-xs rounded-full bg-secondary py-0 shadow-2xl outline outline-base-content/5 backdrop-blur md:max-w-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    key={item.name}
                    href={`/poradenstvi/${item.href}`}
                    className=""
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center mx-10 hidden lg:flex">
          {navigation.map((item, index) => (
            <nav key={index} className="menu menu-horizontal px-1">
              <a
                key={item.name}
                href={`/poradenstvi/${item.href}`}
                className={`btn btn-ghost rounded-full  text-sm font-light ${
                  active === item.name ? "bg-base-300" : ""
                }`}
                onClick={() => setActive(item.name)}
              >
                {item.name}
              </a>
            </nav>
          ))}
        </div>

        {/* <div className="navbar-end h-10 scale-75">
          <Toggle />
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
