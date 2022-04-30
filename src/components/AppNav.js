import React from "react";
// import "../App.css";

import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const AppNav = (props) => {
  const classes = {
    toolbar: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
      // color="indigo700"
    >
      <Toolbar style={classes.toolbar} component="nav">
        <Typography color="primary" noWrap className={classes.toolbarTitle}>
          <strong>
            <i className="fa fa-coins"></i>NFT Market Place
          </strong>
        </Typography>
        <Link
          variant="button"
          color="textPrimary"
          to="/"
          className={classes.link}
        >
          Explore Arts
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          to="/publishArt"
          className={classes.link}
        >
          Create Your NFT
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          to="/profile"
          className={classes.link}
        >
          My Profile
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="/myTransactions"
          className={classes.link}
        >
          My Transactions
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="/UploadtoIPFS"
          className={classes.link}
        >
          Uploadto IPFS
        </Link>

        <Link
          variant="button"
          color="textPrimary"
          href="/loadIPFS"
          className={classes.link}
        >
          Load IPFS
        </Link>

        {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>  */}
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;
