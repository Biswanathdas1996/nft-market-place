import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Toolbar } from "@mui/material";

import NftCard from "./NFT-Card";
import { _fetch } from "../../abi2/connect";

export default function HomePage() {
  const [tokens, setToken] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchAllPosts() {
    // setLoading(true);
    const getAllToken = await _fetch("getToken");
    // setLoading(false);
    setToken(getAllToken.slice(Math.max(getAllToken.length - 5, 0)));
  }

  return (
    <>
      <Toolbar style={{ padding: 0 }}>
        <Typography
          component="h3"
          variant="h7"
          textAlign="left"
          color="text.primary"
          style={{ fontSize: 17, fontWeight: "bold" }}
        >
          Recent Activity
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>

      <Grid container spacing={4}>
        {tokens?.map((item) => (
          <Grid item xs={12} sm={6} md={2.4}>
            <NftCard tokenId={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
