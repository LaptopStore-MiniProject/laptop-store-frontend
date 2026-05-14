import { useState } from "react";
import type { ProductQueryParams } from "../types/product.types";
import FilterSection from "./FilterSection";
import { formatCurrency } from "../../../utils/formatCurrency";

interface ProductFilterProps {
  onApplyFilter: (params: ProductQueryParams) => void;
  onResetFilter: () => void;
}

const brandOptions = [
  { id: 1, label: "ASUS" },
  { id: 2, label: "Acer" },
  { id: 3, label: "Dell" },
  { id: 4, label: "Apple" },
  { id: 5, label: "HP" },
  { id: 6, label: "Lenovo" },
  { id: 7, label: "MSI" },
  { id: 8, label: "Gigabyte" },
  { id: 9, label: "Huawei" },
  { id: 10, label: "Microsoft" },
];

const categoryOptions = [
  { id: 1, label: "Laptop Gaming" },
  { id: 2, label: "Laptop Văn phòng - Sinh viên" },
  { id: 3, label: "Laptop Cao cấp - Doanh nhân" },
  { id: 4, label: "Laptop Đồ họa - Sáng tạo nội dung" },
  { id: 5, label: "Laptop 2 trong 1 - Cảm ứng" },
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

const vgaOptions = [
  { id: "Intel Iris Xe", label: "Intel Iris Xe" },
  { id: "Intel UHD Graphics", label: "Intel UHD Graphics" },
  { id: "RTX 3050", label: "RTX 3050" },
  { id: "RTX 3060", label: "RTX 3060" },
  { id: "RTX 4050", label: "RTX 4050" },
  { id: "RTX 4060", label: "RTX 4060" },
  { id: "RTX 4070", label: "RTX 4070" },
  { id: "RTX 4080", label: "RTX 4080" },
  { id: "RX 6800S", label: "RX 6800S" },
  { id: "Apple GPU", label: "Apple GPU" },
];

const storageOptions = [
  { id: "256GB SSD", label: "256GB SSD" },
  { id: "512GB SSD", label: "512GB SSD" },
  { id: "1TB SSD", label: "1TB SSD" },
  { id: "2TB SSD", label: "2TB SSD" },
  { id: "128GB SSD", label: "128GB SSD" },
  { id: "HDD", label: "HDD" },
];

const screenSizeOptions = [
  { id: "13 inch", label: "13 inch" },
  { id: "13.3 inch", label: "13.3 inch" },
  { id: "14 inch", label: "14 inch" },
  { id: "15.6 inch", label: "15.6 inch" },
  { id: "16 inch", label: "16 inch" },
  { id: "17.3 inch", label: "17.3 inch" },
];

export default function ProductFilter({
  onApplyFilter,
  onResetFilter,
}: ProductFilterProps) {
  const [maxPrice, setMaxPrice] = useState(50000000);

  const [selectedBrandIds, setSelectedBrandIds] = useState<
    Array<number | string>
  >([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<
    Array<number | string>
  >([]);
  const [selectedCpus, setSelectedCpus] = useState<Array<number | string>>([]);
  const [selectedRams, setSelectedRams] = useState<Array<number | string>>([]);
  const [selectedVgas, setSelectedVgas] = useState<Array<number | string>>([]);
  const [selectedStorages, setSelectedStorages] = useState<
    Array<number | string>
  >([]);
  const [selectedScreenSizes, setSelectedScreenSizes] = useState<
    Array<number | string>
  >([]);

  const hasFilter =
    maxPrice !== 50000000 ||
    selectedBrandIds.length > 0 ||
    selectedCategoryIds.length > 0 ||
    selectedCpus.length > 0 ||
    selectedRams.length > 0 ||
    selectedVgas.length > 0 ||
    selectedStorages.length > 0 ||
    selectedScreenSizes.length > 0;

  function handleApplyFilter() {
    const params: ProductQueryParams = {
      pageIndex: 1,
      pageSize: 12,
      minPrice: 0,
      maxPrice,
    };

    if (selectedBrandIds.length > 0) {
      params.brandIds = selectedBrandIds.map(Number);
    }

    if (selectedCategoryIds.length > 0) {
      params.categoryIds = selectedCategoryIds.map(Number);
    }
    if (selectedCpus.length > 0) {
      params.cpus = selectedCpus.map(String);
    }
    if (selectedRams.length > 0) {
      params.rams = selectedRams.map(String);
    }
    if (selectedVgas.length > 0) {
      params.vgas = selectedVgas.map(String);
    }
    if (selectedStorages.length > 0) {
      params.storages = selectedStorages.map(String);
    }
    if (selectedScreenSizes.length > 0) {
      params.screenSizes = selectedScreenSizes.map(String);
    }

    onApplyFilter(params);
  }

  function handleResetFilter() {
    setMaxPrice(50000000);
    setSelectedBrandIds([]);
    setSelectedCategoryIds([]);
    setSelectedCpus([]);
    setSelectedRams([]);
    setSelectedVgas([]);
    setSelectedStorages([]);
    setSelectedScreenSizes([]);

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
        defaultOpen={false}
      />

      <FilterSection
        title="RAM"
        options={ramOptions}
        selectedValues={selectedRams}
        onChange={setSelectedRams}
        defaultVisibleCount={4}
        defaultOpen={false}
      />
      <FilterSection
        title="VGA"
        options={vgaOptions}
        selectedValues={selectedVgas}
        onChange={setSelectedVgas}
        defaultVisibleCount={4}
        defaultOpen={false}
      />
      <FilterSection
        title="Storage"
        options={storageOptions}
        selectedValues={selectedStorages}
        onChange={setSelectedStorages}
        defaultVisibleCount={4}
        defaultOpen={false}
      />

      <FilterSection
        title="Screen Size"
        options={screenSizeOptions}
        selectedValues={selectedScreenSizes}
        onChange={setSelectedScreenSizes}
        defaultVisibleCount={4}
        defaultOpen={false}
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
