import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";
import { TabPanel } from "@mui/lab";

const Loader = ({ text }) => {
  return (
    <TabPanel value="3" sx={{ width: "100%", height: "auto" }}>
      <Stack
        direction="Column"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "Center",
          p: 5,
        }}
      >
        <div
          style={{
            color: "#ABB2B9",
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          <CircularProgress />
        </div>
      </Stack>
    </TabPanel>
  );
};

export default Loader;
