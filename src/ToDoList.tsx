import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       setToDoError("Too short...");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  password1: string;
  password2: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError("password1", { message: "Password are not the same." });
    }
    setError(
      "extraError",
      { message: "Server offline." },
      { shouldFocus: true }
    );
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("firstName", {
            required: "firstName is required",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "Not Allowed Nico" : true,
              noNick: (value) =>
                value.includes("nick") ? "Not Allowed Nico" : true,
            },
          })}
          type="text"
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "lastName is required" })}
          type="text"
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver Only",
            },
            minLength: {
              value: 5,
              message: "Your Email is too short.",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password1", { required: "password1 is required" })}
          type="text"
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("password2", { required: "password2 is required" })}
          type="text"
          placeholder="password2"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
