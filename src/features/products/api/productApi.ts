import axiosClient from "../../../lib/axiosClient";


export const productApi = 
{
    getProducts:   (params? : IProductsParams) => {
        // Mẹo: Bỏ chữ 'async' và 'await' ở đây đi vì axiosClient.get bản thân nó đã trả về 1 Promise rồi.
        // Viết return axiosClient.get(...) sẽ sạch và chuẩn tối ưu hơn.
        return  axiosClient.get("/products", { params });
    },

    getProductById:  (id: string | number) => {
        return  axiosClient.get(`/products/${id}`);
    }
}