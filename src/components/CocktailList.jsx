import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <>
      <Typography className={classes.heading} variant="h4" component="h2">
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
  );
}
