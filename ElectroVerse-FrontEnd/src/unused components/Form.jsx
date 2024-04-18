// Denhär komponenten används ej.
import { FormInput } from "../components/FormInput"
import { IoIosWarning } from "react-icons/io";
import useForm from "../components/hooks/useForm";

export const Form = () => {

  const {
    form: formData,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

const onSubmit = e => {
  handleSubmit(e, async (values) => {
    console.log(values); // log values
    const res = await fetch('https://js2-ecommerce-api.vercel.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(values)
    })
    const data = await res.json(); // get response data
    console.log(data); // log response data
  })
}
  return (
    <form onSubmit={onSubmit} className="reg-form" noValidate>
      <FormInput
        label="First Name"
        id="firstName"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        errorMsg={errors.firstName}
        onBlur={handleBlur}
      />
      <FormInput
        label="Last Name"
        id="lastName"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        errorMsg={errors.lastName}
        onBlur={handleBlur}
      />
      <FormInput
        label="Email"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        errorMsg={errors.email}
        onBlur={handleBlur}
      />
      <FormInput
        label="Password"
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        errorMsg={errors.password}
        onBlur={handleBlur}
      />
      <FormInput
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        errorMsg={errors.confirmPassword}
        onBlur={handleBlur}
      />
      
      { errors.main && 
      <div className="main-error">
        <p>{ errors.main }</p>
        <IoIosWarning />
      </div>}

      <button className="btn btn-primary">Register</button>
      {/* <p>{JSON.stringify(formData)}</p> */}
    </form>
  )
}
export default Form;