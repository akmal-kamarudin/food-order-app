import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const LightButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  backgroundColor: grey[100],
  outline: `2px solid ${grey[100]}`,
  outlineOffset: "-1px",
  "&:hover": {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    outlineColor: grey[100],
  },
}));

export default LightButton;
