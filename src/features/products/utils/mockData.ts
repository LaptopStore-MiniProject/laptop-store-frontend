import type { Product } from "../types/product.types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "ASUS ROG Strix G16",
    brand: "ASUS",
    price: 45990000,
    oldPrice: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdl2Buw3UYprEQs6w5xIzzOcpi0oKIyiRHkFQDvf64l_PfanQ-75iB9tCg3zEaJYenQJyh-VR_U14eSrpgtzx9BoJcFHUGZiXfSFvCVNY7C3KU74a-FxbNhpAeyxlExVyLgn0WquKFzQR37lejzy6y3qRPVzbAU8K86lmi92Z49g_LdeMCTNGlyZnLQmk6nhsZKLN9J-_Ce2vieOXFBg6p6hjF3zG0BQCWlBWwYcTo0pJNI-aAb1pqNqN7nAjpe0iTzyxbLyoCXM4",
    description: "Laptop gaming hiệu năng cao.",
    stock: 10,

    cpu: "Core i7",
    ram: "32GB RAM",
    storage: "1TB SSD",
    screenSize: '16"',
    vga: "RTX 4070",
  },
  {
    id: "p2",
    name: "MacBook Air M3",
    brand: "Apple",
    price: 27990000,
    oldPrice: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv-TtK49iZA6hRJgNMRsR0xXDRfEO9p_N8ueTW3JWTCH0skvotQw5ktaXJbacq5qYK4ZoqObDm6Y5k_vxcvYt1cIPl85y229Lr0-gOEQ3tOK3ClbGAJzScCmGJJ-IaiNHE1HogoEKf5hx9HXR6iMDfTKivXUr2V7gM04JCtekQS1D9SQ5w4g8eQ0AQ4QIGXugsMM1pzXaZBuvVEzK98s6i13TLgjHxd3DC2WkKPZFC7kvJ8AHKfKE5bpEvMtlVHjmCpDlK5ZjlQzQ",
    description: "Laptop mỏng nhẹ cho học tập và làm việc.",
    stock: 8,

    cpu: "Apple M3",
    ram: "16GB RAM",
    storage: "512GB SSD",
    screenSize: '13.6"',
    vga: "Integrated GPU",
  },
];