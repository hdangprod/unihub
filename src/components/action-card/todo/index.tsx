import { api } from "@/utils/api";
import { UseProtectPage } from "@/hooks/useProtectPage";
import TodoItem from "@/components/action-card/todo/todo-item";
import CreateTodo from "@/components/action-card/todo/create-todo";
import useScrollToBottom from "@/hooks/useScrollToBottom";

export default function Todo() {
  UseProtectPage();
  const { data: todos, isLoading, isError } = api.todoRouter.all.useQuery();
  const todoContainerRef = useScrollToBottom(todos);
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex max-h-[60vh] w-80 flex-col justify-center gap-1 rounded-xl bg-white p-4 drop-shadow-sd2">
      <h1 className="mb-2 text-center text-slate-400">Session Goals</h1>
      <div className="mt-3 flex flex-col gap-6">
        <div
          className="flex max-h-[40vh] flex-col gap-1 overflow-y-auto"
          ref={todoContainerRef}
          id="todoContainer"
        >
          {todos?.length ? (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                done={todo.done}
                id={todo.id}
              />
            ))
          ) : (
            <div className="select-none text-center text-slate-300">
              {isLoading ? "Loading..." : "Empty session goal!"}
            </div>
          )}
        </div>
        <CreateTodo />
      </div>
    </div>
  );
}
