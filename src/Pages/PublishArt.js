import React from "react";

import { Card, Grid } from "@mui/material";

import Button from "@mui/material/Button";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Mint = () => {
  let history = useNavigate();
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ height: 500 }}
      >
        <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div style={{ margin: 20 }}>
            <h4 style={{ margin: 20 }}>Create and publish NFT</h4>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <Card onClick={() => history(`/nft-mint`)}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        NFT
                      </Typography>
                      <Typography color="textSecondary">
                        Mint single NFT
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Create Now</Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div
                  style={{
                    padding: "20px",
                    background: "white",
                  }}
                >
                  <Card onClick={() => history(`/fractional-nft-mint`)}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Fractional NFT
                      </Typography>
                      <Typography color="textSecondary">
                        Mint fractional nft{" "}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Create Now</Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
      </Grid>
    </>
  );
};
export default Mint;
