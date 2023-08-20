import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-center main-header p-2">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="website-logo text-white text-xl font-semibold">
            Elevate Writing
          </h1>
        </Link>
        <div className="nav-links flex gap-3 ">
          <Link href="/authentication/login" className="Login-btn text-sm text-white">
            Login
          </Link>
          <Link
            href="/component/auth/form"
            className="Login-btn text-sm text-white"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
