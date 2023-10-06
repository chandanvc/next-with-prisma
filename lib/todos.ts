import prisma from "./prisma";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: "asc" },
    });
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.todo.create({ data: { title } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}
