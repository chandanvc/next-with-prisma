"use client";
import { useRef } from "react";
import { createTodoAction } from "@/app/_actions";

export default function NewTodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const title = data.get("title");
    if (!title || typeof title !== "string") return;

    // call a server action to create a todo
    await createTodoAction(title);
    // reset the form
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className="mb-2 font-medium">Create a New Todo</h2>
      <input
        type="text"
        name="title"
        id=""
        className="rounded border border-slate-200 px-2 py-0.5"
      />
      <button
        type="submit"
        className="ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white"
      >
        Add Todo
      </button>
    </form>
  );
}
