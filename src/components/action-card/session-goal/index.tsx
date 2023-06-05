import ListTodo from "@/components/list-todo";
import { useProtectPage } from "@/hooks/useProtectPage";

export default function SessionGoal() {
  const session = useProtectPage();
  return (
    <div className="flex w-80 flex-col items-center justify-center gap-1 rounded-xl bg-white py-4 drop-shadow-sd2">
      <h1 className="mb-2 font-medium text-slate-400">{session?.user.name}</h1>
      <ListTodo />
    </div>
  );
}
