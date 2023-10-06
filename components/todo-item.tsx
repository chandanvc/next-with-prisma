"use client";

import { Todo } from "@prisma/client";
import { useTransition } from "react";
import { updateTodoAction } from "@/app/_actions";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <li className="flex items-center gap-3">
      <input
        type="checkbox"
        name=""
        id={todo.id}
        defaultChecked={todo.isCompleted}
        onChange={(e) =>
          startTransition(() => {
            updateTodoAction(todo.id, e.target.checked);
          })
        }
        className="peer h-4 w-4 cursor-pointer rounded border-green-300 text-slate-800"
      />
      <label
        htmlFor={todo.id}
        className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through"
      >
        {todo.title}
      </label>
      <span className="ml-auto text-sm text-slate-500 peer-checked:line-through">
        {todo.updatedAt.toUTCString()}
      </span>
    </li>
  );
}
