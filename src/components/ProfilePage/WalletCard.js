import React from "react";
import { Grid, Card, Typography, Tooltip } from "@material-ui/core";
import Wifi from "@material-ui/icons/Wifi";
import PermIdentity from "@material-ui/icons/PermIdentity";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Lock from "@material-ui/icons/Lock";
import Box from "@mui/material/Box";

const styles = {
  card: {
    height: "180px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    paddingLeft: "20px",
    paddingRight: "20px",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.08)",
    borderRadius: "5px",
  },
  typo2: {
    fontWeight: "bold",
    fontSize: "20px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "20rem",
  },
};

const WalledCard = (props) => {
  // const classes = useStyles();
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: '100%',
  //     maxWidth: 360,
  //     backgroundColor: theme.palette.background.paper,
  //   },
  // }));

  // const classes = {
  //   root: {
  //     width: "100%",
  //     maxWidth: 360,
  //   },
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card style={styles.card}>
            <Typography>Total Balance</Typography>
            <Typography style={styles.typo2}>{props.balance}</Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={styles.card}>
            <Typography>My Address</Typography>
            <Tooltip title={props.user}>
              <Typography style={styles.typo2}>{props.user}</Typography>
            </Tooltip>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={styles.card}>
            <Typography>Network Type</Typography>
            <Typography style={styles.typo2}>{props.networkType}</Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={styles.card}>
            <Typography>Network Id</Typography>
            <Typography style={styles.typo2}>{props.networkId}</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>

    //   <Card className={classes.root} variant="outlined">
    //   <CardContent>
    //   <Grid container direction="row" justify="center"  alignItems="center" spacing={6}>
    //     <Grid item xs={6} >
    //   <List  dense className={classes.root} aria-label="wallet">
    //     <ListItem >
    //       <ListItemIcon>
    //         <PermIdentity />
    //       </ListItemIcon>
    //       <ListItemText primary="My Address" secondary={props.user} />
    //     </ListItem>
    //     <ListItem >
    //     <ListItemIcon>
    //         <Wifi />
    //       </ListItemIcon>
    //     <ListItemText primary="NetworkId" secondary={props.networkId} />
    //     </ListItem>
    //   </List>
    //   </Grid>
    //   <Grid item xs={6} >
    //   <List  dense className={classes.root} aria-label="wallet">
    //     <ListItem >
    //     <ListItemIcon>
    //         <AccountBalance />
    //       </ListItemIcon>
    //     <ListItemText primary="Balance" secondary={props.balance}/>
    //     </ListItem>
    //     <ListItem >
    //     <ListItemIcon>
    //         <Lock />
    //       </ListItemIcon>
    //     <ListItemText primary="NetworkType" secondary={props.networkType} />
    //     </ListItem>
    //   </List>
    //   </Grid>
    //   <Grid item xs={5} >
    //   <List  dense className={classes.root} aria-label="wallet">
    //     <ListItem >
    //       <ListItemIcon>
    //         <PermIdentity />
    //       </ListItemIcon>
    //       <ListItemText primary="Mining" secondary={props.miningStatus} />
    //     </ListItem>
    //     <ListItem >
    //     <ListItemIcon>
    //         <Wifi />
    //       </ListItemIcon>
    //     <ListItemText primary="NetworkId" secondary={props.networkId} />
    //     </ListItem>
    //   </List>
    //   </Grid>

    //   </Grid>
    //   </CardContent>
    // </Card>
  );
};

export default WalledCard;
