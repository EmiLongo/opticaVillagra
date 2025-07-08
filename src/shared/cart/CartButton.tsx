import React, { useState } from "react";
import { greyColor } from "@/theme/theme";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartDrawer } from "./CartDrawer";

export const CartButton: React.FC = () => {
  const [openCartDrawer, setOpenCartDrawer] = useState<boolean>(false)
  const closeCartDrawer = () => {
    setOpenCartDrawer(false)
  }
  const handleCartButton = () => {
    setOpenCartDrawer(!openCartDrawer)
  }
  return (
    <>
    <IconButton onClick={handleCartButton} sx={{border: {xs: "none", md:`1px solid ${greyColor[950]}`,} }}>
      {/* <Badge badgeContent={cartItems.length} color="primary"> */}
      <Badge badgeContent={"1"} color="primary">
        <ShoppingCartOutlinedIcon sx={{
          color: greyColor[950], 
          "&:hover":{ color: {xs: "primary.main", md: "unset"}}}
        }/>
      </Badge>
    </IconButton>
    <CartDrawer openCartDrawer={openCartDrawer} closeCartDrawer={closeCartDrawer} />
    </>
  )
}