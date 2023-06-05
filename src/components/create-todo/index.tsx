"use client";
import { useState } from "react";
import { todoType } from "@/server/api/routers/types/todoType";
import { api } from "@/utils/api";

export default function CreateTodo() {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = api.todoRouter.create.useMutation();
  return (
    <>
      <div>
        <h1>Create Todo</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const result = todoType.safeParse(newTodo);
            if (!result.success) {
              console.log("not valid");
            }
            mutate(newTodo);
          }}
        >
          <input
            type="text"
            placeholder="new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}
