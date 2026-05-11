import type {
  Product,
  ProductApiResponse,
} from "../types/product.types";

export function mapProductFromApi(item: ProductApiResponse): Product {
  const mainImage = item.productImages?.find((image) => image.isMain);
  const firstImage = item.productImages?.[0];
  return {

    id: item.productId,// Giờ ta biết chắc chắn nó tên là productId
    name: item.name,
    brand: item.brandName,
    price: item.price,
    oldPrice: null,// DTO hiện tại của em chưa có trường này, tạm để null
    // Lấy ảnh đầu tiên trong mảng ProductImages làm ảnh đại diện, nếu không có thì dùng ảnh mặc định
    image: mainImage?.imageUrl || firstImage?.imageUrl || "/placeholder.png",
    description: item.description,
    stock: item.stockQuantity,

    cpu: item.cpu,
    ram: item.ram,
    storage: item.storage,
    screenSize: item.screenSize,
    vga: item.vga,
  };
}