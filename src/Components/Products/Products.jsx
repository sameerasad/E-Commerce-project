import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const Products = [
  {
    id: 1,
    name: "shoes",
    description: "running jogers",
    price: "$10",
    image: "",
  },
  {
    id: 2,
    name: "laptop",
    description: "dell computer",
    price: "$100",
    image: "",
  },
];

const products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
