import {
  Grid,
  Link,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Tooltip,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";

const DetailsHead = [
  "Contract Address:",
  "Token ID:",
  "Token Standard:",
  "BlockChain:",
];

const useStyles = makeStyles({
  image: {
    minWidth: 100,
    minHeight: 100,
    borderRadius: "30px",
    maxHeight: 577,
    padding: 20,
  },
});

export default function LeftConrent({ nftData, tokenId }) {
  const { description, image } = nftData;
  const classes = useStyles();

  return (
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
        image={image}
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

        <Typography variant="subtitle2" paragraph marginBottom="30px">
          {description}
        </Typography>
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
                #{tokenId}
              </Typography>
            </Tooltip>
            <Typography variant="body2" paragraph item fontWeight="600">
              ERC-721
            </Typography>
            <Typography variant="body2" paragraph item fontWeight="600">
              Ethereum
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
