import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../constants/ValidationError";
import {
  EMAIL_REGEX,
  DEFAULT_VALUES,
  SKILLS,
} from "../../constants/registration";
import Select from "react-select";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("please enter your name minmum 3 character")
    .min(3),
  lastName: yup
    .string()
    .required("please enter your name minmum 4 character")
    .min(4)
    .max(20),
  email: yup
    .string()
    .required("Please enter your email")
    .matches(EMAIL_REGEX, "Your email is not valid"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function MyForm() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, errors, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    // you would normally do a POST or PUT request here
    // set submitted to true so that the Alert displays
    setSubmitted(true);
    // we need to provide a default values object to clear the React Select value
    // https://react-hook-form.com/api/#reset
    reset(DEFAULT_VALUES);
  }
  return (
    <>
      {submitted && <h3 variant="success">Your registration was successful</h3>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input ref={register({ required: true })} name="firstName" />
        <br></br>
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <br></br>
        <input
          type="lastName"
          name="lastName"
          ref={register({ required: true })}
        />
        <br></br>
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <br></br>
        <input name="email" placeholder="Email" ref={register} />
        <br></br>
        {errors.email && (
          <ValidationError>{errors.email.message}</ValidationError>
        )}
        <br></br>
        <textarea name="message" ref={register}></textarea>
        {errors.message && <span>{errors.message.message}</span>}
        <br></br>
        <Controller
          as={Select}
          name="skills"
          options={SKILLS}
          isMulti
          control={control}
        />
        <button>Send</button>
      </form>
    </>
  );
}
