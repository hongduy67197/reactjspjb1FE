import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Admin/Home/home";
import Xacnhan from "./Pages/Admin/Donhang/Xacnhan";
import Tongket from "./Pages/Admin/Donhang/Tongket";
import Hoanthanh from "./Pages/Admin/Donhang/Hoanthanh";
import Danggiao from "./Pages/Admin/Donhang/Danggiao";
import Chinhsua from "./Pages/Admin/Sanpham/Chinhsua";
import Khohang from "./Pages/Admin/Sanpham/Khohang";
import Spmoi from "./Pages/Admin/Sanpham/Spmoi";
import Trenke from "./Pages/Admin/Sanpham/Trenke";
import Chinhanh from "./Pages/Admin/Thongtin/Chinhanh";
import About from "./Pages/Admin/Thongtin/About";
import { useState } from "react";

function App() {
  const [productList, setproductList] = useState([
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Xiaomi Note 10 Chinh hang VN",
      price: 12000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Xiaomi",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Nokia Note 10 Chinh hang VN",
      price: 13000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Nokia",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Vivo Note 10 Chinh hang VN",
      price: 18500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Vivo",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Oneplus Note 10 Chinh hang VN",
      price: 21000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "OnePlus",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Realme Note 10 Chinh hang VN",
      price: 19000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Realme",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "IPhone 11 64GB I Chính hãng VN/A",
      price: 10000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Iphone",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Oppo 11 64GB I Chính hãng VN/A",
      price: 11000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Oppo",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Samsung A53 128G Chính hãng VN",
      price: 10500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink", "purple"],
      ram: "4GB",
      rom: "16GB",
      brand: "Samsung",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Samsung A72 256G Chính hãng VN",
      price: 11500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink", "purple"],
      ram: "4GB",
      rom: "16GB",
      brand: "Samsung",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
  ]);
  const [brand, setbrand] = useState([
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Xiaomi Note 10 Chinh hang VN",
      price: 12000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Xiaomi",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Nokia Note 10 Chinh hang VN",
      price: 13000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Nokia",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Vivo Note 10 Chinh hang VN",
      price: 18500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Vivo",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Oneplus Note 10 Chinh hang VN",
      price: 21000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "OnePlus",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Realme Note 10 Chinh hang VN",
      price: 19000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Realme",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "IPhone 11 64GB I Chính hãng VN/A",
      price: 10000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Iphone",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Oppo 11 64GB I Chính hãng VN/A",
      price: 11000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Oppo",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Samsung A53 128G Chính hãng VN",
      price: 10500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink", "purple"],
      ram: "4GB",
      rom: "16GB",
      brand: "Samsung",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Samsung A72 256G Chính hãng VN",
      price: 11500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink", "purple"],
      ram: "4GB",
      rom: "16GB",
      brand: "Samsung",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
  ]);
  const [origin, setorigin] = useState([
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Xiaomi Note 10 Chinh hang VN",
      price: 12000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Xiaomi",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Nokia Note 10 Chinh hang VN",
      price: 13000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Nokia",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Vivo Note 10 Chinh hang VN",
      price: 18500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Vivo",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Oneplus Note 10 Chinh hang VN",
      price: 21000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "OnePlus",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Realme Note 10 Chinh hang VN",
      price: 19000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Realme",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "IPhone 11 64GB I Chính hãng VN/A",
      price: 10000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Iphone",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Oppo 11 64GB I Chính hãng VN/A",
      price: 11000000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink"],
      ram: "4GB",
      rom: "16GB",
      brand: "Oppo",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Samsung A53 128G Chính hãng VN",
      price: 10500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink", "purple"],
      ram: "4GB",
      rom: "16GB",
      brand: "Samsung",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
    {
      idProductCode: 1234325,
      idCategory: 12355,
      ProductName: "Samsung A72 256G Chính hãng VN",
      price: 11500000,
      storage: 12,
      productPic:
        "https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",

      color: ["red", "blue", "pink", "purple"],
      ram: "4GB",
      rom: "16GB",
      brand: "Samsung",
      typePhone: "Iphone(iOS)",
      performance: "chơi game/cấu hình cao",
      camera: "chụp cận cảnh(macro)",
      special_features: "Tràn viền",
      design: "Mỏng nhẹ",
      panel: "nhỏ gọn dễ cầm",
      Category: "Apple",
      Sale: "15%",
      countSold: "15",
    },
  ]);
  const [sign, setsign] = useState([0]);
  function changesign() {
    setsign(sign + 1);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/Xacnhan" element={<Xacnhan />} />
          <Route path="/admin/Tongket" element={<Tongket />} />
          <Route path="/admin/Hoanthanh" element={<Hoanthanh />} />
          <Route path="/admin/Danggiao" element={<Danggiao />} />
          <Route path="/admin/Chinhsua" element={<Chinhsua />} />
          <Route path="/admin/Khohang" element={<Khohang />} />
          <Route path="/admin/Spmoi" element={<Spmoi />} />
          <Route
            path="/admin/Trenke"
            element={
              <Trenke
                productList={productList}
                setproductList={setproductList}
                brand={brand}
                setbrand={setbrand}
                sign={sign}
                changesign={changesign}
                origin={origin}
                setorigin={setorigin}
              />
            }
          />
          <Route path="/admin/Chinhanh" element={<Chinhanh />} />
          <Route path="/admin/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
