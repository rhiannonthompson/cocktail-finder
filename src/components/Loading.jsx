import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "43%",
  },
  icon: {
    width: 200,
    height: 200,
  }
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CircularProgress style={{height: 200, width: 200}} />
    </Container>
  );
}

