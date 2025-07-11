// src/shared/cart/ProductConfirm.tsx
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { numberToPrice } from "@shared/utils/convertNumberToPrice";
import { WhiteButton } from "@shared/components/buttons/WhiteButton";
import { BodyMEmph, BodyS } from "@theme/textStyles";
import { blueColor, greyColor } from "@theme/theme";
import { navBar1DesktopHeight, navBarMobileHeight } from "../Layout/utils/info";
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from "@/store/useCartStore";
import { IProduct } from "../components/types";

interface IProductConfirm {
  handleCartOpen: ()=>void;
  lastAddedProduct: IProduct;
  lastAddedAt: string | null | undefined;
}
export const ProductConfirm: React.FC<IProductConfirm> = ({ handleCartOpen, lastAddedProduct, lastAddedAt }) => {
  const { clearLastAdded } = useCart();

  if(lastAddedAt) console.log(lastAddedAt);
  //TODO: que pasa si hay mas de un producto que se carga en el carrito???
  useEffect(() => {
    if (lastAddedProduct && lastAddedProduct) {
      const timeout = setTimeout(() => {
        clearLastAdded(); // Limpiar el ultimo producto agregado
      }, 5000);
      return () => clearTimeout(timeout); // Limpia si se desmonta antes
    }
  }, [lastAddedProduct]);

  return (
    <Box sx={{
      width: "260px",
      height: "270px",
      backgroundColor: greyColor[50],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      border: `1px ${greyColor[950]} solid`,
      borderRadius: "8px",
      position: "fixed",
      right:{xs: "1rem", sm: "2rem", md: "4rem", lg:"5rem", xl:"8rem"},
      top: {xs: navBarMobileHeight, md: navBar1DesktopHeight},
      zIndex: 1200,
    }}>
      {/* Foto y detalle */}
      <Box 
      sx={{
        width: "100%",
        display: "flex", 
        // alignItems: "center", 
        // justifyContent: "start", 
        gap: "8px", 
        marginBottom: "16px",
        position: "relative",
      }}
      >
        <CloseIcon sx={{width: "24px", position: "absolute", top: 0, right: "-4px", color: greyColor[950]}} />
        <Box component="img" width={50} height={50}
        alt={`Foto del Producto ${lastAddedProduct.title}`}
        src={lastAddedProduct.urlThumbnail}
        sx={{borderRadius: "8px"}}
        />
        <Box sx={{
          width: "145px",
          display: "flex", 
          flexDirection: "column", 
          gap: "8px"
        }}>
          <BodyS sx={{height: "2.5em"}}>{lastAddedProduct.title}</BodyS>
          <BodyS>1 x {numberToPrice(lastAddedProduct.price)}</BodyS>
        </Box>
      </Box>

      <BodyMEmph sx={{color: blueColor[700]}}>¡Agregado al carrito!</BodyMEmph>
      <Box sx={{display: "flex", flexDirection:"column", alignItems: "center"}}>
        <BodyMEmph>TOTAL (1 producto):</BodyMEmph>
        <BodyMEmph>{numberToPrice(lastAddedProduct.price)}</BodyMEmph>
      </Box>

      <WhiteButton
      id={`confirm-cart-item`}
      text="VER CARRITO"
      onClick={handleCartOpen}
      fetchingText={"borrando"}
      isFetching={false}
      disabled={false}
      sx={{width: "100%"}}
      />
    </Box>
  )
}