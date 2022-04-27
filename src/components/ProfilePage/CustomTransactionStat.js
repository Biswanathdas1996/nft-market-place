import { Typography } from "@mui/material";

const CustomTransactionStat = ({ txtType }) => {
  let txtColor = "";
  let txtName = "";

  if (txtType === "Completed") {
    txtName = "Completed";
    txtColor = "#379353";
  } else if (txtType === "Pending") {
    txtName = "Pending";
    txtColor = "#F81E11";
  } else {
    txtName = "Cancelled";
    txtColor = "#999999";
  }
  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "14px",
          width: "6rem",
          color: txtColor,
        }}
      >
        {txtName}
      </Typography>
    </>
  );
};

export default CustomTransactionStat;
