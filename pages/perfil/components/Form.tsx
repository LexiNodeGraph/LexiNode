import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
  };
  
  
const Form = () => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <div className="flex justify-center">
        <form onSubmit={onSubmit}>
          <label>First Name</label>
          <input {...register("firstName")} />
          <label>Last Name</label>
          <input {...register("lastName")} />
          <button
            type="button"
            onClick={() => {
              setValue("lastName", "luo"); // ✅
            }}
          >
            SetValue
          </button>
        </form>
        </div>
      );
    

}

export default Form;