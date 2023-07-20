"use client";
import { useState } from "react";
import { createTodoInputSchema } from "@/server/validations/todoInputSchema";
import { api } from "@/utils/api";
import Input from "@/components/input";

export default function CreateTodo() {
  const [newTodo, setNewTodo] = useState("");

  const trpc = api.useContext();

  const { mutate } = api.todoRouter.create.useMutation({
    onMutate: async (newTodo) => {
      // cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await trpc.todoRouter.all.cancel();
      // snapshot the previous value
      const previousTodos = trpc.todoRouter.all.getData();
      // optimistically update to the new value
      trpc.todoRouter.all.setData(undefined, (prev) => {
        const optimisticTodo = {
          id: "optimistic-todo-id",
          text: newTodo,
          done: false,
        };
        if (!prev) {
          return [optimisticTodo];
        }
        return [...prev, optimisticTodo];
      });

      setNewTodo("");
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      console.log("an error occurred when creating todo");
      setNewTodo(newTodo);
      trpc.todoRouter.all.setData(undefined, () => context?.previousTodos);
    },
    onSettled: async () => {
      setNewTodo("");
      await trpc.todoRouter.all.invalidate();
    },
  });

  const handleOnKeyDown = () => {
    const result = createTodoInputSchema.safeParse(newTodo);
    if (!result.success) {
      console.log("not valid");
    }
    mutate(newTodo);
  };
  return (
    <>
      <Input
        id="task"
        label="Add new task"
        className="w-full"
        error="Enter to submit"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        handleOnKeyDown={handleOnKeyDown}
      />
    </>
  );
}
