import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
// import {colors} from "../theme"

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      // backgroundColor: colors.light_yellow.main,
    }
  }
}))

export default function Cocktail({ image, name, id, info, glass }) {
  
  const history = useHistory();
  const classes = useStyles();

  function handlePageChange() {
    history.push(`/cocktail/${id}`);
  }

  return (
    <Card>
      <CardActionArea component={Link} to={`/cocktail/${id}`}>
          <CardMedia component="img" alt={name} image={image} title={name} />
          <CardContent>
            <Typography variant="h4" gutterBottom component="h3">
              {name}
            </Typography>
            <Typography variant="h5" gutterBottom component="p" color="textSecondary">
              {`Glass: ${glass}`}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {info}
            </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" className={classes.button} onClick={handlePageChange}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
