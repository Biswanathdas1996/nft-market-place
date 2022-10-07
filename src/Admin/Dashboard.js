import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getConfigData } from "../getConfigaration";
import TransctionModal from "../components/shared/TransctionModal";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const VendorSchema = Yup.object().shape({
  EtherscanAPIKEY: Yup.string().required("EtherscanAPIKEY is required"),
  PolyscanscanAPIKEY: Yup.string().required("PolyscanscanAPIKEY is required"),
  awsAccessKeyId: Yup.string().required("awsAccessKeyId is required"),
  awsSecretAccessKey: Yup.string().required("awsSecretAccessKey is required"),
  web3StorageToken: Yup.string().required("web3StorageToken is required"),
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const [config, setConfig] = React.useState(null);
  const [start, setStart] = React.useState(false);

  let history = useNavigate();
  if (!sessionStorage.getItem("x-nft-auth")) {
    history("/admin-login");
  }

  React.useEffect(() => {
    const configData = getConfigData();
    setConfig(configData);
  }, []);

  const onChangeNetworkInfo = async (value) => {
    setStart(true);
    // await setConfigData({ ...config, networkId: value });
    window.location.reload();
  };

  const onChangeFileStorageInfo = async (value) => {
    setStart(true);
    // await setConfigData({ ...config, fileStorage: value });
    window.location.reload();
  };

  const saveData = async ({
    EtherscanAPIKEY,
    PolyscanscanAPIKEY,
    awsAccessKeyId,
    awsSecretAccessKey,
    web3StorageToken,
  }) => {
    setStart(true);
    // await setConfigData({
    //   ...config,
    //   EtherscanAPIKEY,
    //   PolyscanscanAPIKEY,
    //   awsAccessKeyId,
    //   awsSecretAccessKey,
    //   web3StorageToken,
    // });
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 10 }}>
      {start && <TransctionModal />}
      {config && (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  <h3>
                    <b>Choose Network</b>
                  </h3>
                </FormLabel>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={config?.networkId}
                  name="radio-buttons-group"
                  onChange={(e) => onChangeNetworkInfo(e.target.value)}
                >
                  <FormControlLabel
                    value="4"
                    control={<Radio />}
                    label="Ethereum (Rinkeby)"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio />}
                    label="Ethereum (Goerli)"
                  />
                  <FormControlLabel
                    value="80001"
                    control={<Radio />}
                    label="Polygon (Testnet mumbai)"
                  />
                </RadioGroup>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  <h3>
                    <b>Choose Asset Storage</b>
                  </h3>
                </FormLabel>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={config?.fileStorage}
                  name="radio-buttons-group"
                  onChange={(e) => onChangeFileStorageInfo(e.target.value)}
                >
                  <FormControlLabel
                    value="awss3"
                    control={<Radio />}
                    label="Amazon Web Services S3"
                    disabled
                  />
                  <FormControlLabel
                    value="ipfs"
                    control={<Radio />}
                    label="IPFS (web3.storage)"
                  />
                  <FormControlLabel
                    value="ipfs-infura"
                    control={<Radio />}
                    label="IPFS (INFURA)"
                    disabled
                  />
                </RadioGroup>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Formik
                initialValues={{
                  EtherscanAPIKEY: config?.EtherscanAPIKEY,
                  PolyscanscanAPIKEY: config?.PolyscanscanAPIKEY,
                  awsAccessKeyId: config?.awsAccessKeyId,
                  awsSecretAccessKey: config?.awsSecretAccessKey,
                  web3StorageToken: config?.web3StorageToken,
                }}
                validationSchema={VendorSchema}
                onSubmit={(values, { setSubmitting }) => {
                  saveData(values);
                  setSubmitting(false);
                }}
              >
                {({ touched, errors, isSubmitting, values }) => (
                  <Form>
                    <Grid container>
                      {/* // Title */}
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div
                          className="form-group"
                          style={{ marginLeft: 10, marginTop: 10 }}
                        >
                          <label htmlFor="EtherscanAPIKEY" className="my-2">
                            Etherscan API KEY{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="text"
                            name="EtherscanAPIKEY"
                            autoComplete="flase"
                            placeholder="Enter EtherscanAPIKEY"
                            className={`form-control text-muted ${
                              touched.EtherscanAPIKEY && errors.EtherscanAPIKEY
                                ? "is-invalid"
                                : ""
                            }`}
                            style={{ marginRight: 10, padding: 9 }}
                          />
                        </div>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div
                          className="form-group"
                          style={{ marginLeft: 10, marginTop: 10 }}
                        >
                          <label htmlFor="PolyscanscanAPIKEY" className="my-2">
                            Polyscanscan API KEY{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="text"
                            name="PolyscanscanAPIKEY"
                            autoComplete="flase"
                            placeholder="Enter PolyscanscanAPIKEY"
                            className={`form-control text-muted ${
                              touched.PolyscanscanAPIKEY &&
                              errors.PolyscanscanAPIKEY
                                ? "is-invalid"
                                : ""
                            }`}
                            style={{ marginRight: 10, padding: 9 }}
                          />
                        </div>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div
                          className="form-group"
                          style={{ marginLeft: 10, marginTop: 10 }}
                        >
                          <label htmlFor="awsAccessKeyId" className="my-2">
                            AWS S3 Access KeyId{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="text"
                            name="awsAccessKeyId"
                            autoComplete="flase"
                            placeholder="Enter awsAccessKeyId"
                            className={`form-control text-muted ${
                              touched.awsAccessKeyId && errors.awsAccessKeyId
                                ? "is-invalid"
                                : ""
                            }`}
                            style={{ marginRight: 10, padding: 9 }}
                            disabled
                          />
                        </div>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div
                          className="form-group"
                          style={{ marginLeft: 10, marginTop: 10 }}
                        >
                          <label htmlFor="awsSecretAccessKey" className="my-2">
                            AWS S3 Secret AccessKey{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="text"
                            name="awsSecretAccessKey"
                            autoComplete="flase"
                            placeholder="Enter awsSecretAccessKey"
                            className={`form-control text-muted ${
                              touched.awsSecretAccessKey &&
                              errors.awsSecretAccessKey
                                ? "is-invalid"
                                : ""
                            }`}
                            style={{ marginRight: 10, padding: 9 }}
                            disabled
                          />
                        </div>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div
                          className="form-group"
                          style={{ marginLeft: 10, marginTop: 10 }}
                        >
                          <label htmlFor="web3StorageToken" className="my-2">
                            Web3 Storage Token{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="text"
                            name="web3StorageToken"
                            autoComplete="flase"
                            placeholder="Enter web3StorageToken"
                            className={`form-control text-muted ${
                              touched.web3StorageToken &&
                              errors.web3StorageToken
                                ? "is-invalid"
                                : ""
                            }`}
                            style={{ marginRight: 10, padding: 9 }}
                          />
                        </div>
                      </Grid>

                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div
                          className="form-group"
                          style={{
                            marginLeft: 10,
                            marginTop: 10,
                            float: "right",
                          }}
                        >
                          <span className="input-group-btn">
                            <input
                              className="btn btn-default btn-primary float-right"
                              type="submit"
                              value={"Save"}
                            />
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Item>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
