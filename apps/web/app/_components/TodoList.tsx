"use client";

import { trpc } from "../_trpc/client";
import TodoCard from "./TodoCard";
import { RouterOutputs } from "@repo/api";

export default function TodoList({
  initialTodos,
}: {
  initialTodos: RouterOutputs["todos"]["all"];
}) {
  const todosQuery = trpc.todos.all.useQuery(undefined, {
    initialData: initialTodos,
  });

  if (todosQuery.isLoading) {
    return (
      <div>
        <h4>loading...</h4>
      </div>
    );
  }

  if (todosQuery.isError) {
    return (
      <div>
        <h4>error...</h4>
      </div>
    );
  }

  return (
    <div>
      {todosQuery.data.map((todo) => {
        return <TodoCard todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
