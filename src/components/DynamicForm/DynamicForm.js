import { TextField } from "@mui/material";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import loginImg from "../../image/login.webp";

const DynamicForm = () => {
  const { control, register, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "users", // unique name for your Field Array
  });
  const handleData = (data) => {
    console.log(data);
  };
  return (
    <div
      className="md:flex md:justify-between mt-10 mx-10"
      style={{ width: "100vw - 20px" }}
    >
      <div className="text-center hidden md:block md:w-6/12">
        <div className="">
          <img src={loginImg} alt="loginImage" />
        </div>
      </div>
      <div className="md:border-l-2 md:w-6/12 md:pt-36">
        <h4 className="text-xl mb-4 text-center text-green-400">
          DYNAMIC FORM
        </h4>
        {fields.map((field, index) => (
          <form
            key={field.id}
            className=""
            onSubmit={handleSubmit(handleData)}
          >
            <div className="md: flex justify-evenly mb-5 w-full mx-5">
              <TextField
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
                className="w-6/12"
                {...register(`users.${index}.firstName`)}
              />
              <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                className="w-6/12"
                {...register(`users.${index}.lastName`)}
              />
            </div>
            <div>
              <div className="w-full mx-5 mb-5">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  className="w-full"
                  {...register(`users.${index}.email`)}
                />
              </div>
              <div className="md: flex justify-evenly mb-5 w-full mx-5">
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  type="number"
                  variant="outlined"
                  className="w-6/12"
                  {...register(`users.${index}.phone`)}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  className="w-6/12"
                  {...register(`users.${index}.password`)}
                />
              </div>
            </div>
            <div className="mx-5 mb-5">
              <button
                type="submit"
                className="bg-green-300 px-5 py-3 mx-auto rounded shadow-md hover:bg-green-400 hover:shadow-xl mr-10"
              >
                SUBMIT
              </button>
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded shadow-md text-white"
              >
                DELETE
              </button>
            </div>
          </form>
        ))}
        <div className="ml-10">
          <button
            className="block bg-green-300 px-5 py-3 mx-auto rounded shadow-md hover:bg-green-400 hover:shadow-xl mb-5"
            onClick={() =>
              append({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
              })
            }
          >
            ADD NEW USER
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
