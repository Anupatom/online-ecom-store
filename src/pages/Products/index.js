import React, { useEffect, useState } from "react";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { Grid, Box, Typography } from "@mui/material";
import ProductCarousel from "../../components/ProductCarousel";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let response = await fetch("https://fakestoreapi.com/products");
      response = await response.json();
      setProducts(response);
      console.log(response);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Typography variant="h5" align="center" mt={4}>
        ALL PRODUCTS
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
          mt={2}
        >
          {products.length > 0 &&
            products.map((product, index) => (
              <Grid item key={index}>
                <ProductDetailsCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Typography variant="h5" align="center" mt={4}>
        ALL PRODUCTS CAROUSEL
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <ProductCarousel products={products} />
      </Box>
    </>
  );
};

export default Products;
