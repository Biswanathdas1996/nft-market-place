// import React,{useState,useHistory} from 'react'
// import './App.css';
// import {  Container, Typography, Grid ,   Button,
//     Card,
//     CardMedia,
//     CardActions,
//     CardContent,
//     CardHeader,
//     TextField,Select, FormControl,  MenuItem,InputLabel,
    
//     } from "@material-ui/core";
//     import { FormGroup } from '@mui/material';

// import { Alert } from "@material-ui/lab";
// import axios from 'axios';
// import fs  from 'fs';
// import FormData from 'form-data';
// import {useCreateTokenAndSellArt} from "./hooks/DigitalArtHooks";


// const pinataApiKey="4c42129aa5330e2e6776";
// const pinataSecretApiKey="883bda353160c34abfd2d34dbbd347d535987e0988a96652e4099f0c854f5e56";

// const  UploadIPFS=((props)=> {
    
//     const {response: createTokenAndSellArtResponse, createTokenAndSellArt } = useCreateTokenAndSellArt();
//      const [file, setFile] = useState('');
//   const [image, setImageURLs] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [imageValue,setImageValue]= useState('');

//   const [description,setDescription]= useState('');
//     const [title,setTitle]= useState('');
//     const [authorName,setAuthorName]= useState('');
//     const [price,setPrice]= useState('');
//     const [date,setDate]= useState('');
//     const [error,setError]= useState('');

//     const history = useHistory();

//     const handleImageChange = (event) => {
//         setFile(event.target.files[0]);
//         setImageValue(URL.createObjectURL(event.target.files[0]));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if(isNotEmpty(title) &&isNotEmpty(description) &&isNotEmpty(authorName)
//             &&isNotEmpty(date)&&isNotEmpty(imageValue) && isNotEmpty(price)) {
//             publishArt({title, description, date, authorName, price, imageValue});
//         }else{
//             setError("Input data incorrect.");
//         }
//     };

//     const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {

//         const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
//         const formData = new FormData();
//         formData.append('file', file);

//         return  axios.post(url, formData, {
//             headers: {
//                 'pinata_api_key': pinataApiKey,
//                 'pinata_secret_api_key': pinataSecretApiKey
//             }
//         });
//     };

//     const publishArt = async (art) => {
//         setLoading(true);
//         const pinataApiKey = "4c42129aa5330e2e6776";
//         const pinataSecretApiKey = "883bda353160c34abfd2d34dbbd347d535987e0988a96652e4099f0c854f5e56";
//         const { data: { ipfsHash } } = await pinFileToIPFS(pinataApiKey, pinataSecretApiKey);   
//         const { data: { tokenId } } = await createTokenAndSellArt({
//             title: art.title,
//             description: art.description,
//             date: art.date,
//             authorName: art.authorName,
//             price: art.price,
//             imageValue: art.imageValue,
//             ipfsHash: ipfsHash
//         });
//         setLoading(false);
//         history.push(`/art/${tokenId}`);
//     };

//     const isNotEmpty = (value) => {
//         if (value && value !== '') {
//             return true;
//         }
//         return false;
//     };

//     return (
//         <Container maxWidth="sm">
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <Typography variant="h4" gutterBottom>
//                         Upload Art
//                     </Typography>
//                 </Grid>

//                 <Grid item xs={12}>
//                     <Card>
//                         <CardHeader title="Upload Art" />
//                         <CardContent>
//                             <form onSubmit={handleSubmit}>
//                                 <Grid container spacing={3}>
//                                     <Grid item xs={12}>
//                                         <TextField
//                                             id="title"
//                                             label="Title"
//                                             fullWidth
//                                             value={title}
//                                             onChange={(e) => setTitle(e.target.value)}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField
//                                             id="description"
//                                             label="Description"
//                                             fullWidth
//                                             value={description}
//                                             onChange={(e) => setDescription(e.target.value)}

//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField

//                                             id="authorName"
//                                             label="Author Name"
//                                             fullWidth
//                                             value={authorName}
//                                             onChange={(e) => setAuthorName(e.target.value)}
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12}>
























  
// {/* 

//     const getFileAndUploadONPinata = async event => {
//         try{
//           const file = event.target.files[0];
    
//           let formData = new FormData();
//           formData.append('file', file);
      
//           const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
//             maxContentLength: "Infinity",
//             headers: {
//               "Content-Type": 'multipart/form-data',
//               pinata_api_key: pinataApiKey, 
//               pinata_secret_api_key: pinataSecretApiKey,
//             }
//           })
//           console.log(res);
//           setState(prevState => ({ ...prevState, imageurl: res.data.IpfsHash }));
//         } catch(err) {
//           console.error(err);
//         }
//       }

//      */}
    

    








// export default UploadIPFS
