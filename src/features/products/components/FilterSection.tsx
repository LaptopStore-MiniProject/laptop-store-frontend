import { ChevronDown, ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";

export interface FilterOption {
  id: number | string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedValues: Array<number | string>;
  onChange: (values: Array<number | string>) => void;
  defaultVisibleCount?: number;
  defaultOpen?: boolean;
}

export default function FilterSection({
  title,
  options,
  selectedValues,
  onChange,
  defaultVisibleCount = 4,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showAll, setShowAll] = useState(false);

  const visibleOptions = useMemo(() => {
    if (showAll) return options;
    return options.slice(0, defaultVisibleCount);
  }, [options, showAll, defaultVisibleCount]);

  function handleToggleValue(value: number | string) {
    const isSelected = selectedValues.includes(value);

    if (isSelected) {
      onChange(selectedValues.filter((item) => item !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  }

  return (
    <div className="border-b border-outline-variant pb-6">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-3"
      >
        <h3 className="font-semibold text-sm text-on-surface">{title}</h3>

        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-on-surface-variant" />
        ) : (
          <ChevronDown className="w-4 h-4 text-on-surface-variant" />
        )}
      </button>

      {isOpen && (
        <div className="mt-3 flex flex-col gap-3">
          {visibleOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(option.id)}
                onChange={() => handleToggleValue(option.id)}
                className="w-4 h-4 text-primary border-outline rounded focus:ring-primary"
              />

              <span className="text-sm text-on-surface group-hover:text-primary transition-colors">
                {option.label}
              </span>
            </label>
          ))}

          {options.length > defaultVisibleCount && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-left text-sm font-semibold text-primary hover:underline mt-1"
            >
              {showAll ? "Thu gọn" : `Xem thêm (${options.length - defaultVisibleCount})`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}