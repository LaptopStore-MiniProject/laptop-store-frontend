import axiosClient from "../../../lib/axiosClient";
import type { ProductQueryParams } from "../types/product.types";

export const productApi = 
{
    getProducts:   (params? : ProductQueryParams) => {
        // Mẹo: Bỏ chữ 'async' và 'await' ở đây đi vì axiosClient.get bản thân nó đã trả về 1 Promise rồi.
        // Viết return axiosClient.get(...) sẽ sạch và chuẩn tối ưu hơn.
        return  axiosClient.get("/Products/query", { params });
    },

    getProductById:  (id: string | number) => {
        return  axiosClient.get(`/Products/${id}`);
    }
}