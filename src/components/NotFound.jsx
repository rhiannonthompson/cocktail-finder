import React from "react";
import {Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: theme.spacing(6),
  },
}));

export default function NotFound() {
  
  const classes = useStyles();
  
  return (
    <Typography variant="h5" component="p" className={classes.root}>
      Sorry, we don't have this cocktail listed.
    </Typography>
  );
}
