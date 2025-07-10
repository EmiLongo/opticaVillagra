import React from "react";
import { greyColor } from "@/theme/theme";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartDrawer } from "./CartDrawer";

interface ICartButton {
  openCartDrawer: boolean;
  closeCartDrawer: ()=>void;
  handleCartButton: ()=>void;
}
export const CartButton: React.FC<ICartButton> = ({openCartDrawer, closeCartDrawer, handleCartButton}) => {

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