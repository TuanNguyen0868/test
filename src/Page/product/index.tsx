// import React from 'react'
import SearchProduct from "../../components/SearchProduct";
import Product from "./Product";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: 'solid 1px gray'
}));

export default function index() {
  return (
    <div className="session-product">
      <SearchProduct />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(9)).map((_, index) => (
            <Grid item xs={2} sm={2} md={3} key={index}>
              <Item>
                <Product />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
