export interface ProductApiResponse 
{
productId: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  cpu: string;
  ram: string;
  storage: string;
  screenSize: string;
  vga: string;
  createdAt: string; // DateTime trong C# khi sang JSON sẽ thành chuỗi string (ISO 8601)
  brandId: number;
  brandName: string;
  categoryId: number;
  categoryName: string;
  productImages: ProductImageDto[]; // Nên tạo thêm interface này để chứa Url ảnh
}

export interface Product {
  id: number | string;
  name: string;
  brand: string;
  price: number;
  oldPrice: number | null;
  image: string;
  description: string;
  stock: number;
}

export interface ProductQueryParams {
  pageIndex?: number;
  pageSize?: number;
  keyword?: string;
  categoryId?: number;
  brandId?: number;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}

export interface Pagination {
totalRecords: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
export interface ProductImageDto {
  id: number;
  imageUrl: string;
  isMain: boolean;
}
export interface PagedResult<T> {
  items: T[];
  pagination: Pagination | null;
}