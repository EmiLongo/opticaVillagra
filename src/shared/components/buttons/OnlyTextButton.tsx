// src/shared/components/buttons/OnlyTextButton.jsx
import {
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { greyColor, blueColor } from "@theme/theme";
import { ButtonL, ButtonM, ButtonS } from "@theme/textStyles";

type OnlyTextButtonProps = {
  id: string;
  type?: "greyButton" | "blueButton";
  size?: "S" | "M" | "L";
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
  size = "S",
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
        color: type === "blueButton" ? blueColor[950] : greyColor[950],
        backgroundColor: "transparent",
        padding: 0,
        "&:hover": {
          boxShadow: "none",
          color: type === "blueButton" ? blueColor[950] : blueColor[700],
          fontWeight: 800,
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

      {size === "S" && 
        <ButtonS sx={{color: "inherit", fontWeight: "inherit"}}>
          {isFetching && fetchingText ? fetchingText : text}
        </ButtonS>
      }
      {size === "M" && 
        <ButtonM>
          {isFetching && fetchingText ? fetchingText : text}
        </ButtonM>
      }
      {size === "L" && 
        <ButtonL>
          {isFetching && fetchingText ? fetchingText : text}
        </ButtonL>
      }
      {isFetching && <CircularProgress size={20} sx={{ color: "inherit" }} />}
    </Button>
  );
};
