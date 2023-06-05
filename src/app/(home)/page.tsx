import type { Metadata } from "next";
import ListTodo from "@/components/list-todo";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <>
      <div>
        <h1>My Page</h1>
        <ListTodo />
      </div>
    </>
  );
}
