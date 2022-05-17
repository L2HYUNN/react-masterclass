import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          type="text"
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
