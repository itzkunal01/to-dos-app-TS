import React, { useState } from "react";

interface MyButtonProps {
  text: string | number | boolean; // Here " | " is OR operater for string , number and boolean.
  onClick?: () => void; // Here " ? " mark means that  onClick is optional.
  something?: boolean;
}

interface Book {
  name: string;
  price: number;
}

// type props = { text: string };
// 1st approach
// const MyButton = (props: { text: string }) => {
// 2nd approach
const MyButton: React.FC<MyButtonProps> = (props) => {
  // const [value, setValue] = useState(1); // implicit casting
  // OR always give type to useState
  // const [value, setValue] = useState<string>("b"); // explicit casting , always prefer this casting
  const [value, setValue] = useState<Book>({
    name: "One",
    price: 10,
  });
  return (
    <>
      {/* <h3>{value}</h3> */}
      <h3>
        Name: {value.name} (Rs. {value.price})
      </h3>
      <button
        className="bg-[#c9c6c6] p-2 rounded-lg m-5"
        // onClick={props.onClick}
        // onClick={() => setValue(value + 1)}
        onClick={() => {
          // 1.
          // setValue("a");
          // console.log("value changed from b to a");

          // 2.
          // For personal interface (production-level-app)
          setValue({ name: "Two", price: 20 + 1 });
        }}
      >
        {props.text}
      </button>
    </>
  );
};

export default MyButton;
