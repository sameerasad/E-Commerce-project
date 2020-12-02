import React from "react";
import Grid from "@material-ui/core";

const Products = [
  { id: 1, name: "shoes", description: "running jogers" },
  { id: 2, name: "laptop", description: "dell computer" },
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {Products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Products />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Products;
