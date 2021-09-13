import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 80,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: '100%',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    width: "30%",
    top: 10,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline /> 
      <AppBar position="fixed" color="'#485D84' " style={{ backgroundColor: 'transparent'}} 
      variant="contained" className={classes.appBar}>
        <Toolbar>
          <Button variant="contained" color="primary" disableElevation
                      style={{ backgroundColor: '#485D84' }} className={classes.fabButton}>
          {props.save}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}