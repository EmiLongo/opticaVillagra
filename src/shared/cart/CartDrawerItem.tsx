import { Box } from "@mui/material";
import React, { useState } from "react";
import { ICartItem } from "./types";
import { BodyMEmph, BodyS } from "@theme/textStyles";
import { numberToPrice } from "@shared/utils/convertNumberToPrice";
import { WhiteButton } from "@shared/components/buttons/WhiteButton";

interface ICartDrawerItem {
  cartItem: ICartItem;
  index: number;
}
export const CartDrawerItem: React.FC<ICartDrawerItem> = ({cartItem, index}) => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const handleDeleteCartItem = (idInput: number) =>{
    setIsFetching(true);
    console.log(idInput);
    setIsFetching(false);
  }
  return (
    <Box sx={{display: "flex", alignItems: "center", gap: "1rem"}}>
      <Box component="img" width={100} height={100}
      alt={`Foto del Producto ${index} del Carrito`}
      src={cartItem.product.urlPhoto}
      sx={{}}
      />
      <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
        <BodyS>{cartItem.product.title}</BodyS>
        <BodyMEmph>{numberToPrice(cartItem.product.price)}</BodyMEmph>
        <Box sx={{display: "flex", alignItems: "center", gap: "8px"}}>
          <WhiteButton
          id={`delete-cart-item-${index}`}
          text="BORRAR"
          onClick={() => handleDeleteCartItem(cartItem.id)}
          fetchingText={"borrando"}
          isFetching={isFetching}
          disabled={isFetching}
          sx={{width: "85px"}}
          />
        </Box>
      </Box>
    </Box>
  )
}