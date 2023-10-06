import NewTodoForm from "@/components/new-todo-form";
import TodoItem from "@/components/todo-item";
import { getTodos } from "@/lib/todos";

export default async function Home() {
  const { todos } = await getTodos();

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-10 w-fit bg-slate-50 px-2 py-2 text-black text-2xl font-bold">
          Todos
        </h1>

        <NewTodoForm />

        <h2 className="mt-10 border-b pb-2 text-xl font-bold">
          Previous Todos:{" "}
        </h2>
        <ul className="mt-4 flex flex-col gap-1">
          {todos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
