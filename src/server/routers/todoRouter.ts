import { createTRPCRouter, protectedProcedure } from "@/server/lib/trpc";
import { createTodoInputSchema } from "@/server/validations/todoInputSchema";
import { type inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
// this is our data store, used to respond to incoming RPCs from the client

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return todos.map(({ id, text, done }) => ({ id, text, done }));
  }),
  create: protectedProcedure
    .input(createTodoInputSchema)
    .mutation(async ({ ctx, input }) => {
      const todo = await ctx.prisma.todo.create({
        data: {
          text: input,
          done: false,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
      return todo;
    }),
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const todo = await ctx.prisma.todo.delete({
        where: {
          id: input,
        },
      });
      return todo;
    }),
  toggle: protectedProcedure
    .input(z.object({ id: z.string(), done: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const { id, done } = input;
      const todo = await ctx.prisma.todo.update({
        where: {
          id,
        },
        data: {
          done,
        },
      });
      return todo;
    }),
});
type RouterOutputs = inferRouterOutputs<typeof todoRouter>;
type allTodosOutput = RouterOutputs["all"];
export type Todo = allTodosOutput[number];
