"use client";
import { api } from "@/utils/api";
export default function ListTodo() {
  const { data: todos, isLoading, isError } = api.todoRouter.all.useQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <div>
        <h1>List Todo</h1>
        {todos.length
          ? todos.map((todo) => <div key={todo.id}>{todo.text}</div>)
          : "No todos"}
      </div>
    </>
  );
}
