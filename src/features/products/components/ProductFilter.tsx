import { useState } from "react";
import type { ProductQueryParams } from "../types/product.types";
import FilterSection from "./FilterSection";
import { formatCurrency } from "../../../utils/formatCurrency";

interface ProductFilterProps {
  onApplyFilter: (params: ProductQueryParams) => void;
  onResetFilter: () => void;
}

const brandOptions = [
  { id: 1, label: "Apple" },
  { id: 2, label: "ASUS" },
  { id: 3, label: "Dell" },
  { id: 4, label: "HP" },
  { id: 5, label: "Lenovo" },
  { id: 6, label: "MSI" },
  { id: 7, label: "Acer" },
  { id: 8, label: "Gigabyte" },
];

const categoryOptions = [
  { id: 1, label: "Gaming" },
  { id: 2, label: "Văn phòng" },
  { id: 3, label: "Đồ họa" },
  { id: 4, label: "Mỏng nhẹ" },
  { id: 5, label: "Sinh viên" },
  { id: 6, label: "Lập trình" },
];

const cpuOptions = [
  { id: "i3", label: "Intel Core i3" },
  { id: "i5", label: "Intel Core i5" },
  { id: "i7", label: "Intel Core i7" },
  { id: "i9", label: "Intel Core i9" },
  { id: "r5", label: "AMD Ryzen 5" },
  { id: "r7", label: "AMD Ryzen 7" },
  { id: "m2", label: "Apple M2" },
  { id: "m3", label: "Apple M3" },
];

const ramOptions = [
  { id: "8gb", label: "8GB" },
  { id: "16gb", label: "16GB" },
  { id: "32gb", label: "32GB" },
  { id: "64gb", label: "64GB" },
];

export default function ProductFilter({
  onApplyFilter,
  onResetFilter,
}: ProductFilterProps) {
  const [maxPrice, setMaxPrice] = useState(50000000);

  const [selectedBrandIds, setSelectedBrandIds] = useState<Array<number | string>>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<Array<number | string>>([]);
  const [selectedCpus, setSelectedCpus] = useState<Array<number | string>>([]);
  const [selectedRams, setSelectedRams] = useState<Array<number | string>>([]);

  const hasFilter =
    maxPrice !== 50000000 ||
    selectedBrandIds.length > 0 ||
    selectedCategoryIds.length > 0 ||
    selectedCpus.length > 0 ||
    selectedRams.length > 0;

  function handleApplyFilter() {
    onApplyFilter({
      pageIndex: 1,
      pageSize: 12,
      minPrice: 0,
      maxPrice,

      // Tạm thời nếu backend chỉ nhận 1 brandId/categoryId,
      // mình lấy cái đầu tiên.
      brandId:
        selectedBrandIds.length > 0 ? Number(selectedBrandIds[0]) : undefined,

      categoryId:
        selectedCategoryIds.length > 0
          ? Number(selectedCategoryIds[0])
          : undefined,
    });
  }

  function handleResetFilter() {
    setMaxPrice(50000000);
    setSelectedBrandIds([]);
    setSelectedCategoryIds([]);
    setSelectedCpus([]);
    setSelectedRams([]);

    onResetFilter();
  }

  return (
    <aside className="hidden lg:flex flex-col gap-6 p-6 bg-white border border-outline-variant rounded-xl shadow-sm w-72 shrink-0 h-fit">
      <div>
        <h2 className="text-xl font-bold text-primary">Bộ lọc</h2>
        <p className="text-sm text-on-surface-variant">Lọc theo nhu cầu</p>
      </div>

      <div className="flex flex-col gap-3 border-b border-outline-variant pb-6">
        <h3 className="font-semibold text-sm text-on-surface">Mức giá</h3>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={formatCurrency(0)}
            readOnly
            className="w-full bg-surface border border-outline text-on-surface text-sm rounded-md px-2 py-1"
          />

          <span className="text-on-surface-variant">-</span>

          <input
            type="text"
            value={formatCurrency(maxPrice)}
            readOnly
            className="w-full bg-surface border border-outline text-on-surface text-sm rounded-md px-2 py-1"
          />
        </div>

        <input
          type="range"
          min="0"
          max="50000000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-1 mt-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>

      <FilterSection
        title="Hãng sản xuất"
        options={brandOptions}
        selectedValues={selectedBrandIds}
        onChange={setSelectedBrandIds}
        defaultVisibleCount={4}
      />

      <FilterSection
        title="Nhu cầu"
        options={categoryOptions}
        selectedValues={selectedCategoryIds}
        onChange={setSelectedCategoryIds}
        defaultVisibleCount={4}
      />

      <FilterSection
        title="CPU"
        options={cpuOptions}
        selectedValues={selectedCpus}
        onChange={setSelectedCpus}
        defaultVisibleCount={4}
      />

      <FilterSection
        title="RAM"
        options={ramOptions}
        selectedValues={selectedRams}
        onChange={setSelectedRams}
        defaultVisibleCount={4}
      />

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleApplyFilter}
          className="w-full bg-primary text-on-primary font-semibold py-3 rounded-lg hover:brightness-110 transition-all"
        >
          Áp dụng lọc
        </button>

        {hasFilter && (
          <button
            type="button"
            onClick={handleResetFilter}
            className="w-full border border-outline-variant text-on-surface font-semibold py-3 rounded-lg hover:bg-surface-container transition-all"
          >
            Đặt lại
          </button>
        )}
      </div>
    </aside>
  );
}