interface PaginationProps {
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageIndex,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-lg">
      <button
        type="button"
        disabled={!hasPreviousPage}
        onClick={() => onPageChange(pageIndex - 1)}
        className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Trước
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={
            page === pageIndex
              ? "w-10 h-10 rounded-lg bg-primary text-on-primary font-semibold"
              : "w-10 h-10 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors"
          }
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={!hasNextPage}
        onClick={() => onPageChange(pageIndex + 1)}
        className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sau
      </button>
    </div>
  );
}