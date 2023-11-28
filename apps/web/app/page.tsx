import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";

export default async function Page() {
  const todos = await serverClient.todos.all();

  return (
    <main>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList initialTodos={todos} />
    </main>
  );
}
