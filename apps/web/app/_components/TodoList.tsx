"use client";

import { trpc } from "../_trpc/client";
import styles from "../styles.module.css";

export default function TodoList() {
  const todosQuery = trpc.todos.all.useQuery();

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
        return (
          <div className={styles.todoCard} key={todo.id}>
            <p>{todo.task}</p>
            <p>{todo.status}</p>
          </div>
        );
      })}
    </div>
  );
}
