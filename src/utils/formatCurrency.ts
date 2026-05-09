export function formatCurrency(value?: number | null)
{
    if(value == null)  return "0 ₫";
    return new Intl.NumberFormat("vi-VN",
        {
            style: "currency",
            currency: "VND",
        }).format(value);
}