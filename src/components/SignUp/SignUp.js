import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const handleAllData = (data) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-2 mx-36 mt-10">
      <div>
        <h3 className="text-center">Sign Up Form</h3>
      </div>
      <div className="bg-slate-50 rounded-lg">
        <form onSubmit={handleSubmit(handleAllData)} className="mx-auto">
          <div className="flex justify-evenly my-5">
            <div className="form-group ">
              <TextField
                size="small"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                {...register("first-name")}
              />
            </div>
            <div className="form-group ">
              <TextField
                size="small"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                {...register("last-name")}
              />
            </div>
          </div>
          <div className="form-group mx-14 mb-5">
            <TextField
              fullWidth
              type="email"
              size="small"
              id="outlined-basic"
              label="email"
              variant="outlined"
              {...register("email")}
            />
          </div>
          <button
            className="block mx-auto bg-sky-200 px-5 py-2 rounded mb-5"
            variant="contained"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
