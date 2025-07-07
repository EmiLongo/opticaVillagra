import React, { useState } from "react";
import { TextBox } from "@/theme/textStyles";
import { greyColor } from "@/theme/theme";
import { Badge, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";

export const CartButton: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [openCartDrawer, setOpenCartDrawer] = useState(false)
  const closeCartDrawer = () => {
    setOpenCartDrawer(false)
  }
  const handleCartButton = () => {
    if (isMobile) {
      navigate("/cart")
    } else {
      setOpenCartDrawer(!openCartDrawer)
    }
  }
  return (
    <>
    <IconButton onClick={handleCartButton} sx={{ width: "100px" }}>
      {/* <Badge badgeContent={cartItems.length} color="primary"> */}
      <Badge badgeContent={"1"} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
      <TextBox sx={{ color: greyColor[600] }}>Carrito</TextBox>
    </IconButton>
    <CartDrawer openCartDrawer={openCartDrawer} closeCartDrawer={closeCartDrawer} />
    </>
  )
}