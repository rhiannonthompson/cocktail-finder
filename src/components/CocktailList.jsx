import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { useGlobalContext } from "../context";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6),
    textAlign: "center",
    border: "2px solid black",
    padding: theme.spacing(1),
  },
  gridArea: {
    flexGrow: 1,
  },
  heading: {
    textAlign: "center",
    margin: theme.spacing(6),
  },
}));

export default function CocktailList() {
  const classes = useStyles();
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {cocktails.length < 1 ? (
        <NotFound />
      ) : (
        <>
          <Typography className={classes.heading} variant="h2" component="h2" color="textSecondary">
            Cocktails
          </Typography>
          <div className={classes.gridArea}>
            <Grid container spacing={5}>
              {cocktails.map((item) => (
                <Grid key={item.id} item lg={4} md={6} sm={12}>
                  <Cocktail {...item} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}
    </>
  );
}
