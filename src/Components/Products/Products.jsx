import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const Products = [
  {
    id: 1,
    name: "shoes",
    description: "running jogers",
    price: "$10",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg",
  },
  {
    id: 2,
    name: "laptop",
    description: "dell computer",
    price: "$100",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fhnewman%2F2019%2F09%2F01%2Flaptop-review-dell-inspiron-vs-dell-xps%2F&psig=AOvVaw2gPZkTHpdnJQNshdoEXXr8&ust=1607188925789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCo7bzrtO0CFQAAAAAdAAAAABAP",
  },
];

import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
