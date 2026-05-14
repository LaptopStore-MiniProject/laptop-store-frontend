import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import ProductCard from "../../features/products/components/ProductCard";
import ProductFilter from "../../features/products/components/ProductFilter";
import Pagination from "../../components/ui/Pagination";
import { productApi } from "../../features/products/api/productApi";
import ProductSearchBar from "../../features/products/components/ProductSearchBar";
import ProductPromoCarousel from "../../features/products/components/ProductPromoCarousel";
import { mapProductFromApi } from "../../features/products/utils/productMapper";
import type {
  ApiResponse,
  PagedResult,
  PaginationInfo,
  Product,
  ProductApiResponse,
  ProductQueryParams,
} from "../../features/products/types/product.types";
import { MOCK_PRODUCTS } from "../../features/products/utils/mockData";

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
      console.log("[ProductListPage] Fetch products completed");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts({
      pageIndex: 1,
      pageSize: 8,
    });
  }, []);

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
      {/* Banner quảng cáo full width */}
      <ProductPromoCarousel />
      {/* Khu vực filter trái + content phải */}
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
        {/* CỘT PHẢI */}
        <div className="flex-grow flex flex-col gap-lg w-full">
          <div className="w-full flex justify-start">
            <ProductSearchBar
              keyword={keyword}
              onKeywordChange={setKeyword}
              onSubmit={() => {
                fetchProducts({
                  ...currentParams,
                  pageIndex: 1,
                  pageSize: 8,
                  keyword: keyword.trim() || undefined,
                });
              }}
              onClear={() => {
                setKeyword("");

                fetchProducts({
                  ...currentParams,
                  pageIndex: 1,
                  pageSize: 8,
                  keyword: undefined,
                });
              }}
            />
          </div>

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
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
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
    </div>
  );
}
