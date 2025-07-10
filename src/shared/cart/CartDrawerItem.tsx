import { Box } from "@mui/material";
import React, { useState } from "react";
import { ICartItem } from "./types";
import { BodyMEmph, BodyS } from "@theme/textStyles";
import { numberToPrice } from "@shared/utils/convertNumberToPrice";
import { WhiteButton } from "@shared/components/buttons/WhiteButton";
import { ProductCounter } from "./ProductCounter";

interface ICartDrawerItem {
  cartItem: ICartItem;
  index: number;
}
export const CartDrawerItem: React.FC<ICartDrawerItem> = ({cartItem, index}) => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(cartItem.quantity);

  const handleAdd = () => {
    setCounter(counter+1);
  }
  const handleSus = () => {
    if (counter === 1 ) return;
    setCounter(counter-1);
  }

  const handleDeleteCartItem = (idInput: number) =>{
    setIsFetching(true);
    console.log(idInput);
    setIsFetching(false);
  }
  return (
    <Box 
    key={`cart-item-${index}`}
    sx={{display: "flex", alignItems: "center", gap: "1rem", marginBottom: "16px"}}
    >
      <Box component="img" width={120} height={120}
      alt={`Foto del Producto ${index} del Carrito`}
      src={cartItem.product.urlPhoto}
      sx={{borderRadius: "8px"}}
      />
      <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
        <BodyS sx={{height: "2.5em"}}>{cartItem.product.title}</BodyS>
        <BodyMEmph>{numberToPrice(cartItem.product.price * counter)}</BodyMEmph>
        <Box sx={{display: "flex", alignItems: "center", gap: "8px"}}>
          <ProductCounter 
          index={index}
          counter={counter} 
          handleAdd={handleAdd}
          handleSus={handleSus}
          />
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