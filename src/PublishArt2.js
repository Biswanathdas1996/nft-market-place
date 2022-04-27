import React, { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";

import { _transction } from "../src/abi2/connect";
import { create } from "ipfs-http-client";
// import { useNavigate } from "react-router-dom";
import Web3 from "web3";
const web3 = new Web3(window.ethereum);

const client = create("https://ipfs.infura.io:5001/api/v0");

const VendorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  authorname: Yup.string().required("Authorname is required"),
  text: Yup.string().required("Text is required"),
  price: Yup.string().required("Price is required"),
  royelty: Yup.string().required("Royelty amount is required"),
});

const Mint = () => {
  const [start, setStart] = useState(false);
  const [response, setResponse] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
//   let history = useNavigate();

  const saveData = async ({ name, text, attributes, price, royelty }) => {
    setStart(true);
    let responseData;
    if (file) {
      const results = await await client.add(file);
      console.log("--img fingerpring-->", results.path);
      const metaData = {
        name: name,
        image: `https://ipfs.infura.io/ipfs/${results.path}`,
        description: text,
        attributes: attributes,
      };

      const resultsSaveMetaData = await await client.add(
        JSON.stringify(metaData)
      );
      console.log("---metadta-->", resultsSaveMetaData.path);

      responseData = await _transction(
        "mintNFT",
        `https://ipfs.infura.io/ipfs/${resultsSaveMetaData.path}`,
        web3.utils.toWei(price.toString(), "ether"),
        royelty
      );
    }
    setResponse(responseData);
    // history("/nft-market");
    console.log("responseData", responseData);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

 

  return (
    <>

      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div style={{ margin: 20 }}>
              <Card>
                <Grid container>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div
                      style={{
                        padding: "20px",
                        background: "white",
                      }}
                    >
                      <h4>Create NFT</h4>
                      <Formik
                        initialValues={{
                        authorname:"",
                          name: "",
                          text: "",
                          royelty: "",
                          price: "",
                          attributes: [
                            {
                              trait_type: "",
                              value: "",
                            },
                          ],
                        }}
                        validationSchema={VendorSchema}
                        onSubmit={(values, { setSubmitting }) => {
                          console.log("values=======>", values);
                          saveData(values);
                          setSubmitting(false);
                        }}
                      >
                        {({ touched, errors, isSubmitting, values }) => (
                          <Form>
                               <div
                              className="form-group"
                              style={{ marginLeft: 10, marginTop: 10 }}
                            >
                              <Field
                                type="text"
                                name="authorname"
                                autoComplete="flase"
                                placeholder="Enter Author name"
                                className={`form-control text-muted ${
                                  touched.authorname && errors.authorname
                                    ? "is-invalid"
                                    : ""
                                }`}
                                style={{ marginRight: 10, padding: 9 }}
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ marginLeft: 10, marginTop: 10 }}
                            >
                              <Field
                                type="text"
                                name="name"
                                autoComplete="flase"
                                placeholder="Enter name"
                                className={`form-control text-muted ${
                                  touched.name && errors.name
                                    ? "is-invalid"
                                    : ""
                                }`}
                                style={{ marginRight: 10, padding: 9 }}
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ marginLeft: 10, marginTop: 10 }}
                            >
                              <Field
                                type="text"
                                name="text"
                                autoComplete="flase"
                                placeholder="Enter description"
                                className={`form-control text-muted ${
                                  touched.text && errors.text
                                    ? "is-invalid"
                                    : ""
                                }`}
                                style={{ marginRight: 10, padding: 9 }}
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ marginLeft: 10, marginTop: 10 }}
                            >
                              <Field
                                type="number"
                                name="price"
                                autoComplete="flase"
                                placeholder="Enter price in ETH"
                                className={`form-control text-muted ${
                                  touched.price && errors.price
                                    ? "is-invalid"
                                    : ""
                                }`}
                                style={{ marginRight: 10, padding: 9 }}
                              />
                            </div>
                            <div
                              className="form-group"
                              style={{ marginLeft: 10, marginTop: 10 }}
                            >
                              <Field
                                type="number"
                                name="royelty"
                                autoComplete="flase"
                                placeholder="Enter royelty amount (%)"
                                className={`form-control text-muted ${
                                  touched.royelty && errors.royelty
                                    ? "is-invalid"
                                    : ""
                                }`}
                                style={{ marginRight: 10, padding: 9 }}
                              />
                            </div>
                            <div className="form-group">
                              <span className="input-group-btn">
                                <div style={{ marginLeft: 10, marginTop: 10 }}>
                                  <input type="file" onChange={onFileChange} />
                                </div>

                                {selectedFile && (
                                  <center>
                                    <img
                                      src={preview}
                                      alt="img"
                                      style={{
                                        marginTop: 20,
                                        height: 300,
                                        width: "auto",
                                      }}
                                    />
                                  </center>
                                )}
                              </span>
                            </div>

                            <div className="form-group">
                              <FieldArray
                                name="attributes"
                                render={(arrayHelpers) => (
                                  <div>
                                    {values.attributes &&
                                    values.attributes.length > 0 ? (
                                      values.attributes.map(
                                        (attribut, index) => (
                                          <div
                                            style={{
                                              border: "1px solid #c7c9cc",
                                              borderRadius: 5,
                                              padding: 12,
                                              marginTop: 15,
                                            }}
                                            key={index}
                                          >
                                            <button
                                              type="button"
                                              className="btn btn-default btn-danger"
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                              style={{
                                                marginBottom: 10,
                                                float: "right",
                                              }}
                                            >
                                              Remove
                                            </button>

                                            <Field
                                              name={`attributes.${index}.trait_type`}
                                              autoComplete="flase"
                                              placeholder="Enter Properties name"
                                              className={`form-control text-muted `}
                                              style={{
                                                marginTop: 10,
                                                padding: 9,
                                              }}
                                            />
                                            <Field
                                              name={`attributes.${index}.value`}
                                              autoComplete="flase"
                                              placeholder="Enter value"
                                              className={`form-control text-muted`}
                                              style={{
                                                marginTop: 10,
                                                padding: 9,
                                              }}
                                            />
                                          </div>
                                        )
                                      )
                                    ) : (
                                      <button
                                        type="button"
                                        className="btn btn-default btn-primary"
                                        onClick={() => arrayHelpers.push("")}
                                      >
                                        {/* show this when user has removed all attributes from the list */}
                                        Add attributes
                                      </button>
                                    )}
                                    {values.attributes.length !== 0 && (
                                      <button
                                        type="button"
                                        className="btn btn-default btn-success"
                                        onClick={() =>
                                          arrayHelpers.insert(
                                            values.attributes.length + 1,
                                            ""
                                          )
                                        }
                                        style={{
                                          marginTop: 10,
                                        }}
                                      >
                                        + Add
                                      </button>
                                    )}
                                  </div>
                                )}
                              />
                            </div>
                            <div className="form-group">
                              <span className="input-group-btn">
                                <input
                                  className="btn btn-default btn-primary"
                                  type="submit"
                                  value={"Submit"}
                                />
                              </span>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
        </Grid>
      </div>
    </>
  );
};
export default Mint;
