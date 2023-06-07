import HeroIcon from "@/components/heroIcon";
import { type Todo } from "@/server/api/routers/types/todoType";
import { api } from "@/utils/api";

export default function TodoItem({ text, id, done }: Todo) {
  const trpc = api.useContext();

  const { mutate: deleteMutation } = api.todoRouter.delete.useMutation({
    onMutate: async (deleteId) => {
      // Cancel any outgoing refetches so they don't overwrite our optimistic update
      await trpc.todoRouter.all.cancel();

      // Snapshot the previous value
      const previousTodos = trpc.todoRouter.all.getData();

      // Optimistically update to the new value
      trpc.todoRouter.all.setData(undefined, (prev) => {
        if (!prev) return previousTodos;
        return prev.filter((todo) => todo.id !== deleteId);
      });

      // Return a context object with the snapshotted value
      return { previousTodos };
    },

    onSuccess: () => {
      if (done) {
        console.log("Todo completed 🎉");
      }
    },

    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, done, context) => {
      console.log(`An error occurred when deleting todo with id: ${id}`);
      if (!context) return;
      trpc.todoRouter.all.setData(undefined, () => context.previousTodos);
    },
    // Always refetch after error or success:
    onSettled: async () => {
      await trpc.todoRouter.all.invalidate();
    },
  });

  const { mutate: doneMutation } = api.todoRouter.toggle.useMutation({
    onMutate: async ({ id, done }) => {
      // Cancel any outgoing refetches so they don't overwrite our optimistic update
      await trpc.todoRouter.all.cancel();

      // Snapshot the previous value
      const previousTodos = trpc.todoRouter.all.getData();

      // Optimistically update to the new value
      trpc.todoRouter.all.setData(undefined, (prev) => {
        if (!prev) return previousTodos;
        return prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              done: !done,
            };
          }
          return todo;
        });
      });

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    onSuccess: (err, { done }) => {
      if (done) {
        console.log("Todo completed 🎉");
      }
    },
    onError: (err, done, context) => {
      console.log(`An error occurred when toggling todo with id: ${id}`);
      if (!context) return;
      trpc.todoRouter.all.setData(undefined, () => context.previousTodos);
    },
    // Always refetch after error or success:
    onSettled: async () => {
      await trpc.todoRouter.all.invalidate();
    },
  });

  return (
    <div className="group flex items-center rounded-2xl py-1">
      <label className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="absolute h-0 w-0 opacity-0"
            checked={done}
            onChange={(e) => {
              doneMutation({ id, done: e.target.checked });
            }}
          />
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-400 ${
              done ? "bg-slate-400" : "bg-white"
            }`}
          >
            {done && <HeroIcon icon="check" className="h-4 w-4 text-white" />}
          </div>
        </div>
        <p
          className={`ml-3 cursor-pointer select-none ${
            done ? "text-slate-400 line-through" : "text-slate-600"
          } ${text.split(" ").length > 1 ? "" : "whitespace-normal break-all"}`}
        >
          {text}
        </p>
      </label>
      <button
        className="ml-auto hidden pl-3 group-hover:block"
        onClick={() => {
          deleteMutation(id);
        }}
      >
        <HeroIcon
          icon="trash"
          className="h-5 w-5 text-slate-400 hover:text-yellow-500"
        />
      </button>
    </div>
  );
}
