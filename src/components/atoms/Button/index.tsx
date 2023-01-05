import React, { FC } from "react";
import ButtonType from "./Button.type";
import useButton from "./Button";

const Button: FC<ButtonType> = ({ text, type, status }) => {
  const { data } = useButton();
  return (
    <button
      type={type ?? "button"}
      className={`${
        status === "success"
          ? `bg-twilight hover:bg-twilightHover`
          : status === "light"
          ? `bg-white drop-shadow-2xl border-gray-300 border-2`
          : `bg-angry hover:bg-angryHover`
      } rounded-button px-5 py-2`}
    >
      <span
        className={`${
          status === "light" ? `text-[color:black]` : `text-[color:white]`
        } font-sans`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
