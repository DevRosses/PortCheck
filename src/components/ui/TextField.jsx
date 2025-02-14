import { TextField } from "@mui/material";

const CustomTextField = ({ ...props }) => {
  return <TextField variant="outlined" margin="normal" fullWidth {...props} />;
};

export default CustomTextField;
