import { makeStyles, Typography, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100%",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    backgroundColor: "#F8F8F8",
  },
  label: {
    textTransform: "uppercase",
    fontWeight: 300,
    paddingRight: theme.spacing(1),
  },
  infoText: {
    fontWeight: 400,
  },
  text: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    overflow: "hidden",
  },
}));

export default function CocktailInfo({ item, index, cocktailInfo }) {
  const classes = useStyles();

  return (
      <Paper elevation={0} className={classes.root}>
        <Typography className={classes.infoText} variant="h6" component="p">
          <span className={classes.label}>{`${item}: `}</span>
          {cocktailInfo.data[index]}
        </Typography>
      </Paper>
  );
}
