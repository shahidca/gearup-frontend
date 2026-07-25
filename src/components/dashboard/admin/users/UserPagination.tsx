interface UserPaginationProps {
  meta: {
    page: number;
    totalPage: number;
  };

  page: number;

  setPage: (page: number) => void;
}

export default function UserPagination({
  meta,
  page,
  setPage,
}: UserPaginationProps) {
  return (
    <div className="flex items-center justify-between">

      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className="rounded-md border px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <p className="text-sm">
        Page {meta.page} of {meta.totalPage}
      </p>

      <button
        disabled={page >= meta.totalPage}
        onClick={() => setPage(page + 1)}
        className="rounded-md border px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}