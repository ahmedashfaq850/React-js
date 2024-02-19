import { useFormik } from "formik";
import * as Yup from "yup";

// React formic and yup steps
// 1. import useFormik and YUP
// 2. Create a validation schema
// 3. Create initial Values array
// 4. Create a formik object
// 5. Create a form with input fields

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .required("Age is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  dob: Yup.date().nullable().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  interests: Yup.array().min(1, "Select at least one interest"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  age: "",
  password: "",
  confirmPassword: "",
  dob: "", // Change null to ""
  gender: "",
  interests: [],
};

const genderOptions = ["Male", "Female", "Other"];
const interestOptions = ["Coding", "Traveling", "Watching Movies"];

const ReactYUPForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      try {
        console.log("Form submitted successfully");
        console.log(values);
      } catch (error) {
        console.error("Error submitting form", error);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/*         <InputField
          label="First Name"
          type="text"
          id="firstname"
          name="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstname && formik.errors.firstname}
        />

        <InputField
          label="Last Name"
          type="text"
          id="lastname"
          name="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastname && formik.errors.lastname}
        />

        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />

        <InputField
          label="Age"
          type="number"
          id="age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && formik.errors.age}
        />

        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />

        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <InputField
          label="Date of Birth"
          type="date"
          id="dob"
          name="dob"
          value={formik.values.dob}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.dob && formik.errors.dob}
        /> */}

        {/*         <SelectField
          label="Gender"
          id="gender"
          name="gender"
          options={genderOptions}
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gender && formik.errors.gender}
        /> */}

        {/*         <CheckboxField
          label="Interest 1"
          id="interests[0]"
          name="interests[0]"
          checked={formik.values.interests.includes(interestOptions[0])}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.interests && formik.errors.interests}
        />

        <CheckboxField
          label="Interest 2"
          id="interests[1]"
          name="interests[1]"
          checked={formik.values.interests.includes(interestOptions[1])}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.interests && formik.errors.interests}
        />

        <CheckboxField
          label="Interest 3"
          id="interests[2]"
          name="interests[2]"
          checked={formik.values.interests.includes(interestOptions[2])}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.interests && formik.errors.interests}
        /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const InputField = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
}: any) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

const SelectField = ({
  label,
  id,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
}: any) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    >
      <option value="">Select...</option>
      {options.map((option: any) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

const CheckboxField = ({
  label,
  id,
  name,
  checked,
  onChange,
  onBlur,
  error,
}: any) => (
  <div>
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
      />
      {label}
    </label>
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

export default ReactYUPForm;
