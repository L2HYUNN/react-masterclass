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

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("firstName", { required: true })}
          type="text"
          placeholder="firstName"
        />
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="lastName"
        />
        <input
          {...register("Email", {
            required: "Email is required",
            minLength: {
              value: 5,
              message: "Your Email is too short.",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <input
          {...register("password1", { required: true })}
          type="text"
          placeholder="password1"
        />
        <input
          {...register("password2", { required: true })}
          type="text"
          placeholder="password2"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
