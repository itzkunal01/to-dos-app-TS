import React from "react";

interface MyButtonProps {
  text: string | number | boolean; // Here " | " is OR operater for string , number and boolean.
  onClick?: () => void; // Here " ? " mark means that  onClick is optional.
  something?: boolean;
}

// type props = { text: string };
// 1st approach
// const MyButton = (props: { text: string }) => {
// 2nd approach
const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <>
      <button
        className="bg-[#c9c6c6] p-2 rounded-lg m-5"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
};

export default MyButton;
