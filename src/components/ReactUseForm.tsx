import { useForm } from "react-hook-form";

// Supported Validation List
// required, min value, max value, maxLength, minLength, pattern, validate

const ReactUseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center p-10">
      <form
        className=" flex gap-4 flex-col w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>First Name</label>
        <input
          className="outline-none border-[1px] border-black p-2"
          {...register("FirstName", {
            required: "First Name is required",
            maxLength: {
              value: 20,
              message: "First Name cannot exceed 20 characters",
            },
          })}
          placeholder="First Name"
        />
        {errors.FirstName && (
          <span className="text-red-400">{errors.FirstName.message}</span>
        )}
        <label>Last Name</label>
        <input
          className="outline-none border-[1px] border-black p-2"
          {...register("LastName", {
            required: "Last Name is required",
            maxLength: {
              value: 20,
              message: "Last Name cannot exceed 20 characters",
            },
          })}
          placeholder="Last Name"
        />
        {errors.LastName && (
          <span className="text-red-400">{errors.LastName.message}</span>
        )}
        <label>Email</label>
        <input
          className="outline-none border-[1px] border-black p-2"
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid Email",
            },
          })}
          placeholder="Email"
        />
        {errors.Email && (
          <span className="text-red-400">{errors.Email.message}</span>
        )}
        <label>Password</label>
        <input
          className="outline-none border-[1px] border-black p-2"
          {...register("Password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters",
            },
          })}
            placeholder="Password"
            type="password"
        />
        {errors.Password && (
          <span className="text-red-400">{errors.Password.message}</span>
        )}
        <label>Confirm Password</label>
        <input
          className="outline-none border-[1px] border-black p-2"
          {...register("ConfirmPassword", {
            required: "Confirm Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters",
            },
          })}
            placeholder="Confirm Password"
            type="password"
        />
        {errors.ConfirmPassword && (
          <span className="text-red-400">{errors.ConfirmPassword.message}</span>
        )}
        <label>Gender</label>
        <select
          className="outline-none border-[1px] border-black p-2"
          {...register("Gender")}
        >
          <option value="female">Female</option>
          <option value="male">Memale</option>
          <option value="others">Others</option>
        </select>
        <input {...register('Confirm', {
            required: 'Please Confirm That you are agree',
        })}
        placeholder="Confirm"
        type="checkbox"
        
        />
        {errors.Confirm && <span className="text-red-400">{errors.Confirm.message}</span>}
        <input
          className="outline-none border-[1px] border-black p-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ReactUseForm;
