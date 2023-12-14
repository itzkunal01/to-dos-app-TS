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
  // const [value, setValue] = useState<Book>({
  //   name: "One",
  //   price: 10,
  // });
  // ==================== LET'S HANDLE FORMS ====================
  const [value, setValue] = useState<string | undefined>();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <div>
        {/* <h3>{value}</h3> */}
        {/* <h3>
          Name: {value.name} (Rs. {value.price})
        </h3> */}
        {/* <button
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
        </button> */}

        {/* =============== Lets handle forms now =============== */}
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#e8e1e1] focus-visible:outline-none focus:unset p-2 rounded-lg m-5"
              onChange={handleNameChange}
              type="text"
              placeholder="Enter Your Name"
              value={value}
            />
            <button type="submit">Submit</button>
          </form>
          <h1>{value}</h1>
        </div>
      </div>
    </>
  );
};

export default MyButton;
