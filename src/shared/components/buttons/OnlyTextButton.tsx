// src/shared/components/buttons/OnlyTextButton.jsx
import {
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { greyColor, blueColor, orangeColor } from "@/theme/theme";

type OnlyTextButtonProps = {
  id: string;
  type: "greenButton" | "blueButton";
  onClick: () => void;
  text: string;
  fetchingText?: string;
  isFetching: boolean;
  icon?: React.ReactNode;
  disabled: boolean;
  sx?: object;
};

export const OnlyTextButton: React.FC<OnlyTextButtonProps> = ({
  id,
  onClick = () => {},
	type = "blueButton",
  text = "",
  fetchingText = "",
  isFetching = false,
  icon = null,
  disabled = false,
  sx = {},
}) => {


  return (
    <Button
      id={id}
      variant="contained"
      size="small"
      onClick={onClick}
      disabled={disabled || isFetching}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        boxShadow: "none",
        color: greyColor[900],
        backgroundColor: "transparent",
        padding: 0,
        "&:hover": {
          boxShadow: "none",
          color: type === "blueButton" ? blueColor[600] : orangeColor[400],
        },
        ...sx,
      }}
    >
      {icon && (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
          {icon}
        </Box>
      )}
      <Typography
        sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" }, margin: 0, padding: 0 }}
      >
        {isFetching && fetchingText ? fetchingText : text}
      </Typography>
      {isFetching && <CircularProgress size={20} sx={{ color: "inherit" }} />}
    </Button>
  );
};
