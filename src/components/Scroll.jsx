import React, { useEffect, useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import { colors } from '../theme';

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "4vh",
    backgroundColor: colors.light_yellow.main,
    color: colors.dark_gray,
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: colors.light_yellow.main,
      backgroundColor: colors.mid_gray,
    },
    right: "5%",
  }
}))


export default function Scroll({ showBellow }) {
  
  const classes = useStyles();
  const [show, setShow] = useState(showBellow ? false : true);

  function handleScroll() {
    if (window.pageYOffset > showBellow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  function handleClick() {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  
  useEffect(() => {
    if (showBellow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
  
  
  
  return (
    <>
      {show &&
        <IconButton onClick={handleClick} className={classes.toTop}>
          <ExpandLessRoundedIcon/>
        </IconButton>
      }
      
    </>
  )
}
