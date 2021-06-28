import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  loadContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(20),
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.loadContainer}>
        <CircularProgress size="6rem" />
      </div>
    </Container>
  );
}
