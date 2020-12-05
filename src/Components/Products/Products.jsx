import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const stuff = [
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
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 3,
    name: "laptop",
    description: "dell computer",
    price: "$100",
    image:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 4,
    name: "shoes",
    description: "running jogers",
    price: "$10",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg",
  },
  {
    id: 5,
    name: "shoes",
    description: "running jogers",
    price: "$10",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg",
  },
  {
    id: 6,
    name: "laptop",
    description: "dell computer",
    price: "$100",
    image:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 7,
    name: "laptop",
    description: "dell computer",
    price: "$100",
    image:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 8,
    name: "shoes",
    description: "running jogers",
    price: "$10",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {stuff.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
