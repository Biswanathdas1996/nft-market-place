import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Toolbar, ButtonGroup } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import NftCard from "../components/shared/NFT-Card";
import RecentActivity from "../components/shared/RecentActivity";
import { _fetch } from "../abi2/connect";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const [tokens, setToken] = useState([]);
  // const [loading, setLoading] = useState(false);
  const { category } = useParams();
  console.log("---category====>", category);
  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchAllPosts() {
    // setLoading(true);
    const getAllToken = await _fetch("getToken");
    console.log("========>", getAllToken);
    // setLoading(false);
    setToken(getAllToken);
  }

  return (
    <Container>
      <Box
        sx={{
          pt: 4,
          pb: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h7"
          align="left"
          color="text.primary"
          fontSize="40px"
        >
          Top Selling Art on our Art Gallery
        </Typography>
      </Box>
      <Toolbar style={{ padding: 0 }}>
        <Box sx={{ flexGrow: 1 }} />
        <ButtonGroup size="small">
          <Button>
            <FilterAltOutlinedIcon />
          </Button>
          <Button
            sx={{
              textTransform: "none",
              color: "black",
              fontWeight: 500,
              pt: "5px",
            }}
          >
            Filter & Sort
          </Button>
        </ButtonGroup>
      </Toolbar>

      <Grid container spacing={4}>
        {tokens?.map((item) => (
          <NftCard tokenId={item} />
        ))}
      </Grid>

      <RecentActivity />
    </Container>
  );
}
