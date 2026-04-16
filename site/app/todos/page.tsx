import TodoList from "./todo-list";

export const metadata = {
  title: "Todos",
};

export default function TodosPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-lg px-6 py-16" style={{ backgroundColor: 'red' }}>
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Todo List
        </h1>
        <TodoList />
      </main>
    </div>
  );
}
