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

  cpu?: string;
  ram?: string;
  storage?: string;
  screenSize?: string;
  vga?: string;
}

export interface ProductQueryParams {
  pageIndex?: number;
  pageSize?: number;
  keyword?: string;

  categoryId?: number;
  brandId?: number;

  // chuẩn bị sẵn cho backend sau này
  brandIds?: number[];
  categoryIds?: number[];
  cpus?: string[];
  rams?: string[];
  storages?: string[];
  vgas?: string[];
  screenSizes?: string[];

  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}

export interface ProductImageDto {
  id: number;
  imageUrl: string;
  isMain: boolean;
}
export interface PagedResult<T> {
  items: T[];
  totalRecords: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PaginationInfo {
  totalRecords: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}