import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Picture1 from '../../common/image/anh-nen-anime-cho-may-tinh-dep_095239016.jpg'
import ProductDetail from '../../components/ProductDetail'
import Contact from '../../components/Contact'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={Picture1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description : This is product !
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : 69696969 VND/Kg
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status : Sold On 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address : Ha Noi 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" ><Contact/></Button>
        <Button size="small"><ProductDetail/></Button>
      </CardActions>
    </Card>
  );
}
