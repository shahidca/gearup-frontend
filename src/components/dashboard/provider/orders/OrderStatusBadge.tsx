"use client";

interface OrderStatusBadgeProps {
  status: string;
}

export default function OrderStatusBadge({
  status,
}: OrderStatusBadgeProps) {
  const getStyles = () => {
    switch (status) {
      case "PLACED":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";

      case "CONFIRMED":
        return "bg-blue-100 text-blue-700 border-blue-300";

      case "PICKED_UP":
        return "bg-purple-100 text-purple-700 border-purple-300";

      case "RETURNED":
        return "bg-green-100 text-green-700 border-green-300";

      case "CANCELLED":
        return "bg-red-100 text-red-700 border-red-300";

      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStyles()}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}