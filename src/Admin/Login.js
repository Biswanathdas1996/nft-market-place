import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";

import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import HeaderWrapper from "../components/shared/BackgroundUI";

const VendorSchema = Yup.object().shape({
  uid: Yup.string().required("Password is required"),
  username: Yup.string().required("username is required"),
});

const Register = () => {
  let history = useNavigate();

  const saveData = async ({ uid, username }) => {
    if (uid === "12345" && username === "admin") {
      history("/dashboard");
      sessionStorage.setItem("x-nft-auth", "12edf5gghj6yyhhh");
    } else {
      swal("Unauthorize!", "Please check your username/password", "error");
    }
  };

  return (
    <HeaderWrapper className="header-wrapper-create">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div style={{ margin: 20 }}>
            <Card
              style={{
                padding: "20px",
                margin: "6rem",
                background: "white",
                marginTop: 40,
              }}
            >
              <h4>Login</h4>
              <Formik
                initialValues={{
                  uid: "",
                  username: "",
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
                          <label htmlFor="username" className="my-2">
                            Username <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="text"
                            name="username"
                            autoComplete="flase"
                            placeholder="Enter username"
                            className={`form-control text-muted ${
                              touched.username && errors.username
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
                          <label htmlFor="title" className="my-2">
                            Password <span className="text-danger">*</span>
                          </label>
                          <Field
                            type="password"
                            name="uid"
                            autoComplete="flase"
                            placeholder="Enter password"
                            className={`form-control text-muted ${
                              touched.uid && errors.uid ? "is-invalid" : ""
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
                              value={"Login"}
                            />
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Card>
          </div>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
      </Grid>
    </HeaderWrapper>
  );
};
export default Register;
