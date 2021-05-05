import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  const [carts, setCarts] = useState({
    cart: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
    itemCount: 0,
  });

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cart = [...carts.cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...cart[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount = getItemCount(cart);
    // state'i güncelle
    setCarts({ cart, itemCount });
  };

  const handleDecrement = (product) => {
    const cart = [...carts.cart];
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    const itemCount = getItemCount(cart);
    setCarts({ cart, itemCount });
  };

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);
    return itemCount;
  };

  return (
    <div className="App">
      <Navbar totalItems={carts.itemCount} />
      <ProductsGrid
        products={products}
        cart={carts.cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default App;
