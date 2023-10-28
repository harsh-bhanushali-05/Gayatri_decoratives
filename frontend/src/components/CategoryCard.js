import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CategoryCardStyles.css";
import { Link } from 'react-router-dom';
export default function CategoryCard(props) {
  return (
    <Link to={"/Cat/" + props.title} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textDecoration: 'none' }}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ textDecoration: 'none' }}>
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
