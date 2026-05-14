import { useEffect, useState } from "react";
import { Filter, Search } from "lucide-react";
import ProductCard from "../../features/products/components/ProductCard";
import ProductFilter from "../../features/products/components/ProductFilter";
import Pagination from "../../features/products/components/Pagination";
import { productApi } from "../../features/products/api/productApi";
import { mapProductFromApi } from "../../features/products/utils/productMapper";
import type {
  ApiResponse,
  PagedResult,
  PaginationInfo,
  Product,
  ProductApiResponse,
  ProductQueryParams,
} from "../../features/products/types/product.types";
import { MOCK_PRODUCTS } from "../../lib/mockData";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentParams, setCurrentParams] = useState<ProductQueryParams>({
    pageIndex: 1,
    pageSize: 8,
  });

  async function fetchProducts(params?: ProductQueryParams) {
    try {
      setLoading(true);

      const finalParams: ProductQueryParams = {
        pageIndex: params?.pageIndex ?? 1,
        pageSize: params?.pageSize ?? 8,
        ...params,
      };

      setCurrentParams(finalParams);

      const response = await productApi.getProducts(finalParams);

      const apiResponse = response as unknown as ApiResponse<
        PagedResult<ProductApiResponse>
      >;

      const result = apiResponse.data;

      setProducts(result.items.map(mapProductFromApi));

      setPagination({
        totalRecords: result.totalRecords,
        pageIndex: result.pageIndex,
        pageSize: result.pageSize,
        totalPages: result.totalPages,
        hasPreviousPage: result.hasPreviousPage,
        hasNextPage: result.hasNextPage,
      });
    } catch (error) {
      console.error("[ProductListPage] Fetch products failed:", error);
      setProducts(MOCK_PRODUCTS);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts({
      pageIndex: 1,
      pageSize: 8,
    });
  }, []);


  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>)
  {
    event.preventDefault();
    const trimmedKeyword = keyword.trim();

    fetchProducts({
      ...currentParams,
      pageIndex: 1,
      pageSize: 8,
      keyword: trimmedKeyword || undefined,
    });
  }

  return (
    <div className="w-full max-w-container-max mx-auto px-gutter py-xl flex flex-col gap-xl h-full flex-grow">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface">
          Tất cả sản phẩm
        </h1>

        <p className="text-on-surface-variant mt-2">
          Khám phá các mẫu laptop phù hợp với nhu cầu của bạn.
        </p>
      </div>
      <form
        onSubmit={handleSearchSubmit}
        className="w-full max-w-2xl flex items-center gap-3 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 shadow-sm"
      >
        <Search  className="w-5 h-5 text-on-surface-variant shrink-0" />
        <input
          type="text"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Tìm laptop theo tên, CPU, RAM, VGA..."
          className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-outline"
        />

        {keyword.trim() && (
          <button
            type="button"
            onClick={() => {
              setKeyword("");
              fetchProducts({
                ...currentParams,
                pageIndex: 1,
                pageSize: 8,
                keyword: undefined,
              });
            }}
            className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            Xóa
          </button>
        )}

        <button
          type="submit"
          className="bg-primary text-on-primary font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition-all">
          Tìm kiếm
        </button>
      </form>

      <div className="flex flex-col lg:flex-row gap-lg items-start">
        <ProductFilter
          onApplyFilter={(params) =>
            fetchProducts({
              pageIndex: 1,
              pageSize: 8,
              ...params,
            })
          }
          onResetFilter={() =>
            fetchProducts({
              pageIndex: 1,
              pageSize: 8,
            })
          }
        />

        <div className="flex-grow flex flex-col gap-lg w-full">
          <button className="lg:hidden w-full bg-surface-container border border-outline-variant text-on-surface py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
            <Filter className="w-5 h-5" />
            Lọc sản phẩm
          </button>

          {loading && (
            <div className="text-center text-on-surface-variant py-10">
              Đang tải sản phẩm...
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center text-on-surface-variant py-10">
              Không tìm thấy sản phẩm nào.
            </div>
          )}

          {!loading && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {pagination && (
            <Pagination
              pageIndex={pagination.pageIndex}
              totalPages={pagination.totalPages}
              hasPreviousPage={pagination.hasPreviousPage}
              hasNextPage={pagination.hasNextPage}
              onPageChange={(page) => {
                fetchProducts({
                  ...currentParams,
                  pageIndex: page,
                  pageSize: 8,
                });

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
