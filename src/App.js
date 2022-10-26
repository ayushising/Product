import "./App.css";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function App() {
  const [date, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    ).then((response) => {
      response.json().then((data) => {
        // console.log(data);
        const product = [];
        for (const key in data) {
          product.push({
            id: key,
            newPrice: data[key].newPrice,
            oldPrice: data[key].oldPrice,
            productImage: data[key].productImage,
            productName: data[key].productName,
          });
        }
        console.log(product);
        setData(product);
      });
    });
  });
  console.log(date);

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="product">
        {date.map((date) => (
          <ProductCard
            id={date.id}
            image={date.productImage}
            name={date.productName}
            oldPrice={date.oldPrice}
            newPrice={date.newPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
