import type { Metadata } from "next";
import ListUsers from "@/components/list-user";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <>
      <div>
        <h1>My Page</h1>
        <ListUsers />
      </div>
    </>
  );
}
