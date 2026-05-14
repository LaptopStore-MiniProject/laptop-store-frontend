import { Search } from "lucide-react";

interface ProductSearchBarProps {
    keyword: string;
    onKeywordChange: (value: string) => void;
    onSubmit: () => void;
    onClear: () => void;
}

export default function ProductSearchBar({
  keyword,
  onKeywordChange,
  onSubmit,
  onClear,
}: ProductSearchBarProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="w-full max-w-[520px] flex items-center gap-3 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 shadow-sm"
    >
      <Search className="w-5 h-5 text-on-surface-variant shrink-0" />

      <input
        type="text"
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
        placeholder="Tìm kiếm sản phẩm..."
        className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-outline"
      />

      {keyword.trim() && (
        <button
          type="button"
          onClick={onClear}
          className="text-sm font-semibold text-on-surface-variant hover:text-primary"
        >
          Xóa
        </button>
      )}

      <button
        type="submit"
        className="bg-primary text-on-primary font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition-all"
      >
        Tìm kiếm
      </button>
    </form>
  );
}
