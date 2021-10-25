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
  border: "solid 1px gray",
}));

export default function ListItem() {
  return (
    <div style={{padding: 20}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {itemData.map((pro) => (
            <Grid item xs={2} sm={2} md={3} key={pro.id}>
              <Item>
                <img
                  src={`${pro.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${pro.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt={pro.title}
                  loading="lazy"   
                />
                <p>Name :{pro.itemName}</p>
                <p>Price : {pro.itemPrice}</p>
                <button style={{borderRadius: 5, backgroundColor: 'rgb(223 219 219)', height: 33, width:60,marginRight: 10}}>Buy</button>
                <button style={{borderRadius: 5, backgroundColor: 'rgb(223 219 219)', height: 33, width:60}}>Detail</button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    itemName: "Khai Nguyen",
    itemPrice: "100000",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    itemName: "Khai Nguyen2",
    itemPrice: "200000",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    itemName: "Khai Nguyen 3",
    itemPrice: "300000",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    itemName: "Khai Nguyen 4",
    itemPrice: "400000",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    itemName: "Khai Nguyen 5",
    itemPrice: "500000",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    itemName: "Khai Nguyen 6",
    itemPrice: "600000",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    itemName: "Khai Nguyen 7",
    itemPrice: "700000",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    itemName: "Khai Nguyen 8",
    itemPrice: "800000",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    itemName: "Khai Nguyen 9",
    itemPrice: "900000",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    itemName: "Khai Nguyen 10",
    itemPrice: "110000",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    itemName: "Khai Nguyen 11",
    itemPrice: "140000",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    itemName: "Khai Nguyen 12",
    itemPrice: "190000",
  },
];
