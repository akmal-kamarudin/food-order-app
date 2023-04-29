import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const DarkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  "&:hover": {
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: grey[100],
    border: "1px solid",
    borderColor: grey[900],
  },
}));

export default DarkButton;
