import { useState } from "react";
import { useForm } from "react-hook-form";

const AuthorForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="flex justify-center items-center h-screen w-full mb-96">
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
    </div>
  );
}

export default AuthorForm;