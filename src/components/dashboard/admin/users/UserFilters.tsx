"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserFiltersProps {
  role: string;
  status: string;
  onRoleChange: (value: string | null) => void;
  onStatusChange: (value: string | null) => void;
}

export default function UserFilters({
  role,
  status,
  onRoleChange,
  onStatusChange,
}: UserFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Select
        value={role}
        onValueChange={(value) => onRoleChange(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Role" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">
            All Roles
          </SelectItem>

          <SelectItem value="CUSTOMER">
            Customer
          </SelectItem>

          <SelectItem value="PROVIDER">
            Provider
          </SelectItem>

          <SelectItem value="ADMIN">
            Admin
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={status}
       onValueChange={(value) =>
  onRoleChange(value)
}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">
            All Status
          </SelectItem>

          <SelectItem value="ACTIVE">
            Active
          </SelectItem>

          <SelectItem value="SUSPENDED">
            Suspended
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}