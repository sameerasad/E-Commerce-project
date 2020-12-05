import React, { useState, useEffect } from "react";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import { commerce } from "./lib/Commerce";

const App = () => {
  const [products, setproducts] = useState([]);
  const fetchProdusts = async () => {
    const { data } = await commerce.products.list();
    setproducts(data);
  };
  useEffect(() => {
    fetchProdusts();
  }, []);
  console.log(products);
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
