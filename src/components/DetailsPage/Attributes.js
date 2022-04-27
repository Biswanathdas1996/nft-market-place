import React from "react";
import { TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";

const boxes = [1, 2, 3, 4, 5, 6, 7, 8];

const Attributes = () => {
  return (
    <TabPanel
      value="2"
      sx={{
        backgroundColor: "#F0F6FF",
        width: "100%",
        height: 380,
        padding: 0,
        paddingTop: 2,
      }}
    >
      <Box
        sx={{
          // backgroundColor: "red",
          // height: 50,
          // width: 50,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignContent: "center",
        }}
      >
        {boxes.map((box) => (
          <Stack
            key={box}
            sx={{
              backgroundColor: "white",
              height: 70,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "Center",
              width: "26%",
              marginX: 2,
              marginBottom: 3,
              padding: 5,
              borderRadius: 1,
            }}
          >
            <Typography sx={{ color: "#797979", fontSize: 13 }}>
              Eye Color
            </Typography>
            <Typography sx={{ fontSize: 15, fontWeight: "bold", mt: 1 }}>
              Purple
            </Typography>
          </Stack>
        ))}
      </Box>
    </TabPanel>
  );
};

export default Attributes;
