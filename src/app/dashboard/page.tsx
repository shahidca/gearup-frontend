import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-10">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

      </div>
    </ProtectedRoute>
  );
}