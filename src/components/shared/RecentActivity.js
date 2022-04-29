import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Toolbar, ButtonGroup } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import NftCard from "./NFT-Card";
import { _fetch } from "../../abi2/connect";

export default function HomePage() {
  const [tokens, setToken] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchAllPosts() {
    setLoading(true);
    const getAllToken = await _fetch("getToken");
    setLoading(false);
    setToken(getAllToken);
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
          <NftCard tokenId={item} />
        ))}
      </Grid>
    </>
  );
}
