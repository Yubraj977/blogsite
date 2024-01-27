import React from "react";
import img from "../assets/react.svg";
function Nav() {
  return (
    <div className="flex justify-between items-center  py-2 pr-6 font-poppi pl-6 fixed top-0 w-full navBg">
      <div className="left flex items-center gap-4">
        <div className="logo">Logo</div>
        <div class="flex items-center">
          <input
            type="text"
            class="border p-2 rounded-lg focus:outline-none "
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="right flex gap-6 justify-center items-center opacity-80">
        <div className="write font-serief text-2xl">
          {" "}
          <button>
            <p className="flex">
              {" "}
              <ion-icon name="create-outline"></ion-icon> <p>post</p>
            </p>{" "}
          </button>
        </div>
        <div className="notification text-2xl">
          <p>
            <ion-icon name="notifications-outline"></ion-icon>
          </p>
        </div>
        <div className="Profile text-2xl">
          <div className="profile border h-6 w-6 rounded-full border-brown-200 text-2xl">
            <p>
              <img src={img} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
