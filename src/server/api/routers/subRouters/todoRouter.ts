import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { todoType } from "@/server/api/routers/types/todoType";
import { z } from "zod";
// this is our data store, used to respond to incoming RPCs from the client

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    console.log(
      "todos returned from prisma",
      todos.map(({ id, text, done }) => ({ id, text, done }))
    );
    return [
      {
        id: "1",
        text: "Hello world",
        done: false,
      },
      {
        id: "2",
        text: "Hello world 2",
        done: false,
      },
    ];
  }),
  create: protectedProcedure
    .input(todoType)
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
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const todo = await ctx.prisma.todo.update({
        where: {
          id: input,
        },
        data: {
          done: true,
        },
      });
      return todo;
    }),
});
