import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";

export default async function Page() {
  const todos = await serverClient.todos.all();

  return (
    <main className="max-w-screen-md m-auto p-2">
      <div className="flex">
        <h1 className="text-3xl font-bold underline">Todo List</h1>
        <TodoForm />
        <TodoList initialTodos={todos} />
      </div>
    </main>
  );
}
