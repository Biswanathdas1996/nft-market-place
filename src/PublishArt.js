import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { Alert } from "@material-ui/lab";
import { useCreateTokenAndSellArt } from "./hooks/DigitalArtHooks";
// import { create } from "ipfs-http-client";

// const client = create("https://ipfs.infura.io:5001/api/v0");
// const ipfsClient = require("ipfs-http-client");
// const ipfs = ipfsClient({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
// });

// const pinataApiKey="4c42129aa5330e2e6776";
// const pinataSecretApiKey="883bda353160c34abfd2d34dbbd347d535987e0988a96652e4099f0c854f5e56";
import { create } from "ipfs-http-client";
// import console from 'console';
// const client = create('http://127.0.0.1:5002')
// const client = create("https://ipfs.infura.io:5001/api/v0");

const PublishArt = (props) => {
  const { response: createTokenAndSellArtResponse, createTokenAndSellArt } =
    useCreateTokenAndSellArt();
  const [file, setFile] = useState("");
  const [buffer, setBuffer] = useState("");
  const [state, setState] = useState({
    isFetching: false,
    imageValue: "",
    description: "",
    title: "",
    authorName: "",
    price: 0,
    date: "",
    error: undefined,
  });
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    // const client = create("https://ipfs.infura.io:5001/api/v0");
    const client = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
    });
    try {
      const uploadResult = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${uploadResult.path}`;
      console.log(url);
      setState({ ...state, imageValue: url });
    } catch (e) {
      console.log(e);
      // toast.error(e.message)
      return;
    }
    // client.add(event.target.files[0], (err, res) => {
    //     console.log("errorandresponse",err,res);
    //     console.log("res");
    //     if (err ) {
    //         console.error('ipfs add error', err)
    //         return
    //     }
    //     console.log('added', res[0].hash)
    //     setState(prevState => ({ ...prevState, imageValue: res[0].hash }));
    // })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { imageValue, description, title, authorName, price, date } = state;
    if (
      isNotEmpty(title) &&
      isNotEmpty(description) &&
      isNotEmpty(authorName) &&
      isNotEmpty(date) &&
      isNotEmpty(price)
    ) {
      publishArt({ title, description, date, authorName, price, imageValue });
    } else {
      setState((prevState) => ({
        ...prevState,
        error: "Input data incorrect.",
      }));
    }
  };

  // const handleimageupload = (e) => {
  //     console.log("files",e.target.files[0]);

  //     const formData = new FormData();
  //      formData.append('file', e.target.files[0]);
  //      ipfs.add(formData, (err, result) => {
  //         if (err) {
  //             console.error(err);
  //             return;
  //         }
  //         console.log("imageuplaod",result);
  //         setState(prevState => ({ ...prevState, imageValue: result.data.IpfsHash }));
  //     }
  //     );

  // };

  // const handleimageupload = (e) => {

  //     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  //     const formData = new FormData();
  //     formData.append('file', e.target.files[0]);

  // return  axios.post(url, formData, {
  //         headers: {
  //             pinata_api_key: "4c42129aa5330e2e6776",
  //             pinata_secret_api_key: "883bda353160c34abfd2d34dbbd347d535987e0988a96652e4099f0c854f5e56"
  //         }
  //     })
  //     .then(res => {
  //         console.log("imageuplaod",res);
  //         setState(prevState => ({ ...prevState, imageValue: res.data.IpfsHash }));
  //     }
  //     )
  //     .catch(err => {
  //         console.log(err);
  //     }
  //     );

  // };

  const isNotEmpty = (val) => val && val.length > 0;
  const handleFormChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const publishArt = async (tokenArt) => {
    await createTokenAndSellArt(tokenArt);
    props.history.push(`/home`);
    window.location.reload();
  };
  // style={{ marginTop: '20px'}}

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <section className="text-center">
        <Typography
          component="h5"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Create Your Ar
        </Typography>
        <Container maxWidth="md">
          {!!createTokenAndSellArtResponse?.error && (
            <Alert severity="error">
              {" "}
              {createTokenAndSellArtResponse?.error}
            </Alert>
          )}
          {!!state.error && <Alert severity="error"> {state.error}</Alert>}
          <form
            className="text-center border border-light p-5"
            noValidate
            onSubmit={handleSubmit}
          >
            <Card>
              <CardContent>
                <CardHeader
                  // title="Submit your digital art today"
                  // subheader={`TokenId: ${props.tokenId}`}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  // action={"Pro" === "Pro" ? "StarIcon" : null}
                  //  className={classes.cardHeader}
                ></CardHeader>
                {/* className={classes.form}  */}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="title"
                      name="title"
                      label="Title"
                      placeholder="Title"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.title}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="authorName"
                      name="authorName"
                      label="Author Name"
                      placeholder="Author Name"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.authorName}
                    />
                  </Grid>
                  <Grid item xs={24} sm={12}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="description"
                      name="description"
                      label="Description"
                      placeholder="Description"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.description}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="price"
                      name="price"
                      label="Price (ether)"
                      placeholder="Price (ether)"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.price}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="date"
                      margin="dense"
                      required
                      fullWidth
                      id="date"
                      name="date"
                      label="Date"
                      placeholder="Date"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.date}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* <Button onClick={() => {
        document.getElementById('file').click()
        pinFileToIPFS(pinataApiKey, pinataSecretApiKey)
        .then(res => {
            setState(prevState => ({ ...prevState, imageValue: res.data.IpfsHash }));
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
        
    }}>
        Upload Image
    </Button> */}

                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </Grid>

                {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <FormControl margin="dense"  fullWidth>
                <InputLabel id="image-select-label">Art</InputLabel>
                <Select
                labelId="image-select-label"
                id="image-select"
                onChange={handleImageChange} value={state.imageValue}>
                <MenuItem value="images/a-moment-of-silence.png">a-moment-of-silence.png</MenuItem>
                <MenuItem value="images/Finchwing.png">Finchwing.png</MenuItem>
                <MenuItem value="images/girl-and-bird.png">girl-and-bird.png</MenuItem>
                <MenuItem value="images/kitty.png">kitty.png</MenuItem>
                <MenuItem value="images/margay-cat.png">margay-cat.png</MenuItem>
                <MenuItem value="images/Nighthill.png">Nighthill.png</MenuItem>
                <MenuItem value="images/storm.png">storm.png</MenuItem> 
                <MenuItem value="images/monalisa.jpg">monalisa.jpg</MenuItem>               
                <MenuItem value="images/downloadgirl.jpg">downloadgirl.jpg</MenuItem>     
                <MenuItem value="images/vangogh1.jpg">vangoghl.jpg</MenuItem>     
                <MenuItem value="images/vangogh2.jpg">vangogh2.jpg</MenuItem>     
                <MenuItem value="images/vangogh3.jpg">vangogh3.jpg</MenuItem>     
                <MenuItem value="images/vangogh4.jpg">vangogh4.jpg</MenuItem>         




            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
    
          <CardMedia
              // className={classes.media}
              className="img-fluid"
              image={state.imageValue} 
              title={"Art"}
            />
            </Grid>
        </Grid> */}
                <input
                  type="file"
                  name="imageValue"
                  onChange={handleImageChange}
                />

                {/* <img className="imgBox z-depth-4 rounded" alt="art" src={state.imageValue} /> */}
                {/* <button className="btn btn-info btn-block" type="submit">Publish</button>                                     */}
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  //   onClick={(e) => {
                  //     e.preventDefault();
                  //     props.onBuyArt(props.tokenId, props.price);
                  //   }}
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </form>
        </Container>
      </section>
    </div>
  );
};

export default PublishArt;
// import React, { useState } from "react";
// import "./App.css";
// import {
//   Container,
//   Typography,
//   Grid,
//   Button,
//   Card,
//   CardMedia,
//   CardActions,
//   CardContent,
//   CardHeader,
//   TextField,
//   Select,
//   FormControl,
//   MenuItem,
//   InputLabel,
// } from "@material-ui/core";
// import axios from "axios";
// import fs from "fs";
// import FormData from "form-data";
// import { Alert } from "@material-ui/lab";
// import { useCreateTokenAndSellArt } from "./hooks/DigitalArtHooks";
// import { create } from "ipfs-http-client";
// const client = create("https://ipfs.infura.io:5001/api/v0");

// // const ipfsClient = require("ipfs-http-client");
// // const ipfs = ipfsClient({
// //   host: "ipfs.infura.io",
// //   port: 5001,
// //   protocol: "https",
// // });

// // const pinataApiKey = "4c42129aa5330e2e6776";
// // const pinataSecretApiKey =
// //   "883bda353160c34abfd2d34dbbd347d535987e0988a96652e4099f0c854f5e56";

// const PublishArt = (props) => {
//   const { response: createTokenAndSellArtResponse, createTokenAndSellArt } =
//     useCreateTokenAndSellArt();
//   const [file, setFile] = useState("");
//   const [state, setState] = useState({
//     isFetching: false,
//     imageValue: "images/a-moment-of-silence.png",
//     description: "",
//     title: "",
//     authorName: "",
//     price: 0,
//     date: "",
//     error: undefined,
//   });
//   const handleImageChange = (event) =>
//     setState((prevState) => ({ ...prevState, imageValue: event.target.value }));
//   const handleSubmit = async (
//     imageValue,
//     description,
//     title,
//     authorName,
//     price,
//     date,
//     event
//   ) => {
//     event.preventDefault();
//     if (file) {
//       const results = await await client.add(file);
//       console.log("--img fingerpring-->", results.path);
//       publishArt({ title, description, date, authorName, price, imageValue });
//     }

//     // const { imageValue, description, title, authorName, price, date } = state;
//     // if (
//     //   isNotEmpty(title) &&
//     //   isNotEmpty(description) &&
//     //   isNotEmpty(authorName) &&
//     //   isNotEmpty(date) &&
//     //   isNotEmpty(imageValue) &&
//     //   isNotEmpty(price)
//     // ) {
//     //   publishArt({ title, description, date, authorName, price, imageValue });
//     // } else {
//     //   setState((prevState) => ({
//     //     ...prevState,
//     //     error: "Input data incorrect.",
//     //   }));
//     // }
//   };

//   const onFileChange = (event) => {
//     setFile(event.target.files[0]);
//     // setSelectedFile(event.target.files[0]);
//   };
//   //   const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
//   //     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
//   //     const formData = new FormData();
//   //     formData.append("file", file);

//   //     return axios.post(url, formData, {
//   //       headers: {
//   //         pinata_api_key: pinataApiKey,
//   //         pinata_secret_api_key: pinataSecretApiKey,
//   //       },
//   //     });
//   //   };

//   const isNotEmpty = (val) => val && val.length > 0;
//   const handleFormChange = (event) => {
//     setState((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }));
//   };
//   const publishArt = async (tokenArt) => {
//     await createTokenAndSellArt(tokenArt);
//     props.history.push(`/home`);
//     window.location.reload();
//   };
//   // style={{ marginTop: '20px'}}

//   const handleFile = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <div>
//       <section className="text-center">
//         <Typography
//           component="h5"
//           variant="h2"
//           align="center"
//           color="textPrimary"
//         >
//           Create Your Art
//         </Typography>
//         <Container maxWidth="md">
//           {!!createTokenAndSellArtResponse?.error && (
//             <Alert severity="error">
//               {" "}
//               {createTokenAndSellArtResponse?.error}
//             </Alert>
//           )}
//           {!!state.error && <Alert severity="error"> {state.error}</Alert>}
//           <form
//             className="text-center border border-light p-5"
//             noValidate
//             onSubmit={handleSubmit}
//           >
//             <Card>
//               <CardContent>
//                 <CardHeader
//                   // title="Submit your digital art today"
//                   // subheader={`TokenId: ${props.tokenId}`}
//                   titleTypographyProps={{ align: "center" }}
//                   subheaderTypographyProps={{ align: "center" }}
//                   // action={"Pro" === "Pro" ? "StarIcon" : null}
//                   //  className={classes.cardHeader}
//                 ></CardHeader>
//                 {/* className={classes.form}  */}
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="dense"
//                       required
//                       fullWidth
//                       id="title"
//                       name="title"
//                       label="Title"
//                       placeholder="Title"
//                       autoComplete="off"
//                       autoFocus
//                       onChange={handleFormChange}
//                       value={state.title}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="dense"
//                       required
//                       fullWidth
//                       id="authorName"
//                       name="authorName"
//                       label="Author Name"
//                       placeholder="Author Name"
//                       autoComplete="off"
//                       autoFocus
//                       onChange={handleFormChange}
//                       value={state.authorName}
//                     />
//                   </Grid>
//                   <Grid item xs={24} sm={12}>
//                     <TextField
//                       margin="dense"
//                       required
//                       fullWidth
//                       id="description"
//                       name="description"
//                       label="Description"
//                       placeholder="Description"
//                       autoComplete="off"
//                       autoFocus
//                       onChange={handleFormChange}
//                       value={state.description}
//                     />
//                   </Grid>
//                 </Grid>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       margin="dense"
//                       required
//                       fullWidth
//                       id="price"
//                       name="price"
//                       label="Price (ether)"
//                       placeholder="Price (ether)"
//                       autoComplete="off"
//                       autoFocus
//                       onChange={handleFormChange}
//                       value={state.price}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       type="date"
//                       margin="dense"
//                       required
//                       fullWidth
//                       id="date"
//                       name="date"
//                       label="Date"
//                       placeholder="Date"
//                       autoComplete="off"
//                       autoFocus
//                       onChange={handleFormChange}
//                       value={state.date}
//                       InputLabelProps={{
//                         shrink: true,
//                       }}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <input
//                     type="file"
//                     id="file"
//                     style={{ display: "none" }}
//                     onChange={handleImageChange}
//                   />
//                 </Grid>

//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl margin="dense" fullWidth>
//                       <InputLabel id="image-select-label">Art</InputLabel>
//                       <Select
//                         labelId="image-select-label"
//                         id="image-select"
//                         onChange={handleImageChange}
//                         value={state.imageValue}
//                       >
//                         <MenuItem value="images/a-moment-of-silence.png">
//                           a-moment-of-silence.png
//                         </MenuItem>
//                         <MenuItem value="images/Finchwing.png">
//                           Finchwing.png
//                         </MenuItem>
//                         <MenuItem value="images/girl-and-bird.png">
//                           girl-and-bird.png
//                         </MenuItem>
//                         <MenuItem value="images/kitty.png">kitty.png</MenuItem>
//                         <MenuItem value="images/margay-cat.png">
//                           margay-cat.png
//                         </MenuItem>
//                         <MenuItem value="images/Nighthill.png">
//                           Nighthill.png
//                         </MenuItem>
//                         <MenuItem value="images/storm.png">storm.png</MenuItem>
//                         <MenuItem value="images/monalisa.jpg">
//                           monalisa.jpg
//                         </MenuItem>
//                         <MenuItem value="images/downloadgirl.jpg">
//                           downloadgirl.jpg
//                         </MenuItem>
//                         <MenuItem value="images/vangogh1.jpg">
//                           vangoghl.jpg
//                         </MenuItem>
//                         <MenuItem value="images/vangogh2.jpg">
//                           vangogh2.jpg
//                         </MenuItem>
//                         <MenuItem value="images/vangogh3.jpg">
//                           vangogh3.jpg
//                         </MenuItem>
//                         <MenuItem value="images/vangogh4.jpg">
//                           vangogh4.jpg
//                         </MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <CardMedia
//                       // className={classes.media}
//                       className="img-fluid"
//                       image={state.imageValue}
//                       title={"Art"}
//                     />
//                   </Grid>
//                 </Grid>
//                 {/* <img className="imgBox z-depth-4 rounded" alt="art" src={state.imageValue} /> */}
//                 {/* <button className="btn btn-info btn-block" type="submit">Publish</button>                                     */}
//               </CardContent>
//               <CardActions>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   //   onClick={(e) => {
//                   //     e.preventDefault();
//                   //     props.onBuyArt(props.tokenId, props.price);
//                   //   }}
//                 >
//                   Submit
//                 </Button>
//               </CardActions>
//             </Card>
//             <div className="form-group">
//               <span className="input-group-btn">
//                 <div style={{ marginLeft: 10, marginTop: 10 }}>
//                   <input type="file" onChange={onFileChange} />
//                 </div>
//               </span>
//             </div>
//           </form>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default PublishArt;
