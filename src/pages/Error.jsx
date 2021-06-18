import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(6),
  },
  text: {
    padding: theme.spacing(4),
  },
}));

export default function Error() {
  const classes = useStyles();
  const history = useHistory();

  function handlePageChange() {
    history.push("/");
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography className={classes.text} variant="h5" component="p">
        Opps! You may have lost your way.
      </Typography>
      <Button
        onClick={handlePageChange}
        variant="contained"
        size="large"
        color="secondary"
      >
        back home
      </Button>
    </Container>
  );
}
