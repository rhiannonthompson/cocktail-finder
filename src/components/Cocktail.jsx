import React from "react";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Cocktail({ image, name, id, info, glass }) {
  

  return (
    <Card>
      <CardActionArea>
        <Link to={`/cocktail/${id}`}>
        <CardMedia
          component="img"
          alt={name}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component="h3">
            {name}
          </Typography>
          <Typography variant="h6" component="h4" color="textSecondary">
            {`Glass: ${glass}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info}
          </Typography>
          </CardContent>
          </Link>
      </CardActionArea>
      <CardActions>
        <Button>
          <Link to={`/cocktail/${id}`}>
            Learn more
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
