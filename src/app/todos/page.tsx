import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import { TodoHeader } from "../../components/todos/todo-header";
import { TodoList } from "@/components/todos/todo-list";

export default function TodosPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto py-6 space-y-6">
        <TodoHeader />
        <TodoList />
      </div>
    </DashboardLayout>
  );
}
