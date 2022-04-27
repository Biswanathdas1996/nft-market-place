import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, Toolbar, ButtonGroup, Tooltip } from "@mui/material";
import Avatars from "../../../shared/Avatars";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CustomBreadCrumbs from "../../../shared/CustomBreadcrumbs";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const theme = createTheme();

export default function ArtExplore() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            pt: 4,
            pb: 2,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h7"
              align="center"
              color="text.primary"
              fontSize="40px"
            >
              Buy & Sell Digital Art NFT
            </Typography>
          </Container>
        </Box>

        <Container>
          <Toolbar>
            <Typography
              component="h3"
              variant="h7"
              textAlign="left"
              color="text.primary"
              // gutterBottom
            >
              <CustomBreadCrumbs title="Art" />
            </Typography>
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
        </Container>

        <Container
          sx={{ py: 1 }}
          // maxWidth="md"
        >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={2.4}>
                <Card
                  sx={{
                    height: "100%",
                    // width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    border: "0.01px solid rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <Tooltip title="Nefrofeel by Pablo Picasso">
                    <div
                      style={{
                        backgroundImage: `url(https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_960_720.png)`,
                        height: "150px",
                        borderRadius: 5,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        margin: "15px 15px 0px 15px",
                      }}
                    >
                      <Grid container>
                        <Grid xs={2}>
                          <IconButton>
                            <FavoriteBorderRoundedIcon
                              style={{
                                color: "#FD6412",
                                backgroundColor: "white",
                                borderRadius: "50%",
                                padding: "5px",
                                //   fontSize: "15px",
                              }}
                            />
                          </IconButton>
                        </Grid>
                        <Grid xs={10} sx={{ textAlign: "right" }}>
                          <IconButton>
                            <MoreVertIcon
                              style={{
                                color: "#0578EC",
                                backgroundColor: "white",
                                borderRadius: "50%",
                                padding: "5px",
                                //   fontSize: "15px",
                              }}
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </div>
                  </Tooltip>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Avatars />
                    <Typography gutterBottom variant="h7" component="h4">
                      Cube Rubber #2332
                    </Typography>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Tooltip title="Ethereum">
                        <img
                          alt="nft"
                          width="10px"
                          height="20px"
                          src={`https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/cdbe4/eth-diamond-purple.webp`}
                          style={{
                            color: "black",
                            marginTop: 12,
                            marginRight: 8,
                          }}
                        ></img>
                      </Tooltip>
                      <p>
                        Price <strong>1.116 ETH</strong>
                      </p>
                    </div>
                  </CardContent>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      marginX: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    Buy Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }}></Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
