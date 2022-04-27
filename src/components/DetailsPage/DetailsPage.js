import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ButterImg from "../../assets/images/butter.png";
import React, { useState } from "react";
import { useFindArtTokens } from "../../hooks/DigitalArtHooks";
import { styled } from "@mui/material/styles";
import ethIcon from "../../assets/icons/eth_icon.svg";
import {
  CssBaseline,
  Container,
  Grid,
  Link,
  Button,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardHeader,
  Tooltip,
  Tab,
  Tabs,
  tabsClasses,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import RightContent from "./RightContent";
// import CustomCard from "../../Components/Card/CustomCard";
import CustomCard from "../Body/CustomCard";

const theme = createTheme();
const DetailsHead = [
  "Contract Address:",
  "Token ID:",
  "Token Standard:",
  "BlockChain:",
  "MetaData:",
];

const useStyles = makeStyles({
  image: {
    minWidth: 100,
    minHeight: 100,
    borderRadius: "30px",
    maxHeight: 577,
    // objectFit: "cover",
    padding: 20,
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default function DetailsPage({ match }) {
  const artTokens = useFindArtTokens({ filter: "pending" });

  const [data, setData] = useState([]);

  // console.log(data);

  // console.log(artTokens);

  const id = match.params.id;

  let filteredData = artTokens.filter((item) => item.id === id);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {filteredData.map((item, index) => (
        <Container>
          <main style={{ marginBottom: 30 }}>
            <Grid
              justifyContent="space-between"
              // sx={{ backgroundColor: "red" }}
              container
              spacing={4}
              marginY="50px"
              // paddingTop="50px"
              // marginBottom="100px"
            >
              <Grid item xs={12} md={5}>
                <Card
                  sx={{
                    border: "0.01px solid rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <CardHeader
                    title={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          disabled
                          sx={{
                            borderRadius: "15px",
                            borderColor: "#D9D4D2",
                            maxWidth: "60px",
                            maxHeight: "30px",
                            minWidth: "60px",
                            minHeight: "30px",
                          }}
                          color="inherit"
                          variant="outlined"
                          startIcon={<FavoriteBorderIcon />}
                        >
                          30
                        </Button>

                        <Button
                          disabled
                          color="inherit"
                          variant="outlined"
                          sx={{
                            borderRadius: "15px",
                            borderColor: "#D9D4D2",
                            maxWidth: "40px",
                            maxHeight: "30px",
                            minWidth: "40px",
                            minHeight: "30px",
                          }}
                        >
                          <MoreHorizIcon />
                        </Button>
                      </div>
                    }
                  ></CardHeader>
                  <CardMedia
                    className={classes.image}
                    component="img"
                    image={`${item.image}`}
                    alt="Loading"
                    height="370"
                    width="100%"
                    sx={{ backgroundSize: "cover" }}
                  />
                  <CardContent sx={{ pl: 3 }}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      fontWeight="bold"
                      gutterBottom
                    >
                      Description
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      paragraph
                      marginBottom="30px"
                    >
                      {item.title} by {item.authorName}
                    </Typography>
                    {/* ==================================================================================================== */}
                    <Grid container spacing={1} marginX="1px">
                      <Grid xs={5}>
                        {DetailsHead.map((heading) => (
                          <Typography
                            variant="body2"
                            paragraph
                            item
                            key={heading}
                            fontWeight="600"
                          >
                            {heading}
                          </Typography>
                        ))}
                      </Grid>
                      <Grid xs={7}>
                        <Tooltip title="Contrct Address">
                          <Link
                            href="https://rinkeby.etherscan.io/address/0xdfc34335664a0c2c548cf0c837e9b0a9315eeda2"
                            target="_blank"
                            sx={{ textDecoration: "none" }}
                          >
                            <Typography
                              variant="body2"
                              paragraph
                              item
                              fontWeight="600"
                              sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                width: "11rem",
                              }}
                            >
                              0xdfc34335664a0c2c548cf0c837e9b0a9315eeda2
                            </Typography>
                          </Link>
                        </Tooltip>
                        <Tooltip title="Author Name">
                          <Typography
                            variant="body2"
                            paragraph
                            item
                            fontWeight="600"
                            sx={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              width: "11rem",
                            }}
                          >
                            {item.author}
                          </Typography>
                        </Tooltip>
                        <Typography
                          variant="body2"
                          paragraph
                          item
                          fontWeight="600"
                        >
                          ERC-721
                        </Typography>
                        <Typography
                          variant="body2"
                          paragraph
                          item
                          fontWeight="600"
                        >
                          Ethereum
                        </Typography>
                        <Typography
                          variant="body2"
                          paragraph
                          item
                          fontWeight="600"
                        >
                          Editable
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* REOPEN======================== */}

              {/* Right Portion-------------------------------------------------------------------------- */}
              <Grid item xs={12} md={7}>
                <RightContent rightitem={item} />
              </Grid>
            </Grid>
            {/* =========================NextItem================================================================== */}
            {/* <Typography
              component="h3"
              variant="h7"
              textAlign="left"
              color="text.primary"
              sx={{ marginBottom: 2 }}
            >
              Recent Views
            </Typography>
           */}

            {/* REOPEN======================== */}
            {/* <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              TabScrollButtonProps={{ direction: "left" | "right" }}
              scrollButtons="true"
              indicatorColor="none"
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              {cards.map((item) => (
                <Tab label={<CustomCard item={item} />} />
              ))}
            </Tabs> */}
          </main>
        </Container>
      ))}
    </ThemeProvider>
  );
}
