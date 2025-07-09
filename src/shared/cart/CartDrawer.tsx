import React from "react";
import { Box, Divider, Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BodyS, Heading2, Heading4 } from "@/theme/textStyles";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ICart } from "./types";
import { CartDrawerItem } from "./CartDrawerItem";
import { greyColor } from "@/theme/theme";
import { numberToPrice } from "../utils/convertNumberToPrice";
import { ColorButton } from "../components/buttons/ColorButton";
import { useNavigate } from "react-router-dom";

interface ICartDrawerProps {
  openCartDrawer: boolean
  closeCartDrawer: () => void
}

const mockCart: ICart = {
  id: 1,
  userId: 42,
  sessionId: 'session_abc123',
  email: 'usuario@example.com',
  status: 'active',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  lastActivity: new Date().toISOString(),
  emailSent: false,
  cartItems: [
    {
      id: 101,
      cartId: 1,
      articuloId: 501,
      quantity: 2,
      addedAt: new Date().toISOString(),
      product: {
        id: 501,
        sectionId: 10,
        isValid: true,
        title: 'Auriculares Bluetooth',
        description: 'Auriculares inalámbricos con cancelación de ruido',
        urlPhoto: 'https://mundoadaptogenos.netlify.app/assets/img/thumbnail/frasco_melena_de_leon.jpg',
        price: 91999,
        priceDiscount: 1999,
        discount: 20,
        priceTransfer: 1799,
        plan: "1899",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 102,
      cartId: 1,
      articuloId: 502,
      quantity: 1,
      addedAt: new Date().toISOString(),
      product: {
        id: 502,
        sectionId: 12,
        isValid: true,
        title: 'Teclado Mecánico',
        description: 'Teclado mecánico RGB con switches rojos',
        urlPhoto: 'https://mundoadaptogenos.netlify.app/assets/img/thumbnail/frasco_reishi.jpg',
        price: 93499,
        priceDiscount: 3499,
        discount: 300,
        priceTransfer: 3199,
        plan: "3299",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 103,
      cartId: 1,
      articuloId: 502,
      quantity: 1,
      addedAt: new Date().toISOString(),
      product: {
        id: 502,
        sectionId: 12,
        isValid: true,
        title: 'Teclado Mecánico',
        description: 'Teclado mecánico RGB con switches rojos',
        urlPhoto: 'https://mundoadaptogenos.netlify.app/assets/img/thumbnail/frasco_reishi.jpg',
        price: 93499,
        priceDiscount: 3499,
        discount: 300,
        priceTransfer: 3199,
        plan: "3299",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 103,
      cartId: 1,
      articuloId: 502,
      quantity: 1,
      addedAt: new Date().toISOString(),
      product: {
        id: 502,
        sectionId: 12,
        isValid: true,
        title: 'Teclado Mecánico',
        description: 'Teclado mecánico RGB con switches rojos',
        urlPhoto: 'https://mundoadaptogenos.netlify.app/assets/img/thumbnail/frasco_reishi.jpg',
        price: 93499,
        priceDiscount: 3499,
        discount: 300,
        priceTransfer: 3199,
        plan: "3299",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 105,
      cartId: 1,
      articuloId: 502,
      quantity: 1,
      addedAt: new Date().toISOString(),
      product: {
        id: 502,
        sectionId: 12,
        isValid: true,
        title: 'Teclado Mecánico',
        description: 'Teclado mecánico RGB con switches rojos',
        urlPhoto: 'https://mundoadaptogenos.netlify.app/assets/img/thumbnail/frasco_reishi.jpg',
        price: 93499,
        priceDiscount: 3499,
        discount: 300,
        priceTransfer: 3199,
        plan: "3299",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 106,
      cartId: 1,
      articuloId: 502,
      quantity: 1,
      addedAt: new Date().toISOString(),
      product: {
        id: 502,
        sectionId: 12,
        isValid: true,
        title: 'Teclado Mecánico',
        description: 'Teclado mecánico RGB con switches rojos',
        urlPhoto: 'https://mundoadaptogenos.netlify.app/assets/img/thumbnail/frasco_reishi.jpg',
        price: 93499,
        priceDiscount: 3499,
        discount: 300,
        priceTransfer: 3199,
        plan: "3299",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 107,
      cartId: 1,
      articuloId: 502,
      quantity: 1,
      addedAt: new Date().toISOString(),
      product: {
        id: 502,
        sectionId: 12,
        isValid: true,
        title: 'Teclado Mecánico',
        description: 'Teclado mecánico RGB con switches rojos',
        urlPhoto: 'https://mundoadaptogenos.netlify.app/assets/img/thumbnail/frasco_reishi.jpg',
        price: 93499,
        priceDiscount: 3499,
        discount: 300,
        priceTransfer: 3199,
        plan: "3299",
        createdAt: new Date().toISOString(),
      },
    },
  ],
};


// TODO
// si está logueado buscar el carrito por userId y sino por sessionId

export const CartDrawer: React.FC<ICartDrawerProps> = ({openCartDrawer = false, closeCartDrawer = () => {}}) => {
  console.log(mockCart)
  const navigate = useNavigate();
  const cartSubtotal= 100000
  const cartTotal=200000
  const handleStartCheckout = () => {
    closeCartDrawer();
    navigate("./cart");
  }
  return(
    <Drawer
      variant="temporary"
      anchor="right"
      open={openCartDrawer}
      onClose={closeCartDrawer}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box'},
      }}
    >
      <Box sx={{
        position: 'relative', 
        height: '100%', 
        width: "min(100vw, 420px)", 
        padding: "12px", 
        display: "flex",
        flexDirection:"column",
      }}>
        {/* Boton cierre */}
        <Box
          sx={{ position: 'absolute', top: "1rem", right: "1rem" }}
          onClick={closeCartDrawer}
        >
          <CloseIcon />
        </Box>

        {/* Titulo */}
        <Box>
          <Heading2 sx={{marginBottom: "8px"}}>Carrito de compras</Heading2>
          <Box sx={{
            display: "flex", 
            alignItems: "center", 
            gap: "10px", 
            marginBottom: "24px"
          }}>
            <AccountCircleOutlinedIcon sx={{color: greyColor[950]}}/>
            <BodyS>maildeejemplo@gmail.com</BodyS>
          </Box>
        </Box>

        {/* Productos de carrito */}
        <Box sx={{flexGrow:1, overflowY: "auto"}}>
          {mockCart.cartItems.map((cartItem, index)=>(
            <CartDrawerItem cartItem={cartItem} index={index} />
          ))}
        </Box>

        {/* Subtotal Carrito */}
        <Box sx={{display: "flex", flexDirection: "column", gap: "16px"}}>
          <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <Divider sx={{height: "8px", backgroundColor: "secondary.dark", borderRadius: "15px"}} />
            <BodyS sx={{width: "100%", textAlign: "center", color: "secondary.dark"}}>¡Genial! Tenés envío gratis.</BodyS>
          </Box>
          
          <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <Box sx={{display: "flex", alignItems:"center", justifyContent:"space-between" }}>
              <Heading4>Subtotal (sin envío):</Heading4>
              <Heading4>{numberToPrice(cartSubtotal)}</Heading4>
            </Box>
            <Box sx={{display: "flex", alignItems:"center", justifyContent:"space-between" }}>
              <Heading4>Envío:</Heading4>
              <Heading4 sx={{color: "secondary.dark"}}>GRATIS</Heading4>
            </Box>
          </Box>  
          <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
            <Box sx={{display: "flex", alignItems:"center", justifyContent:"space-between"}}>
              <Heading2>TOTAL:</Heading2>
              <Heading2>{numberToPrice(cartTotal)}</Heading2>
            </Box>
            <Box sx={{display: "flex", alignItems:"center", justifyContent:"end" }}>
              <BodyS sx={{color: "secondary.dark"}}>{`o ${numberToPrice(cartTotal * 0.9)} con Transferencia o depósito`}</BodyS>
            </Box>
          </Box>
          <ColorButton
          id="bt-cart-drawer-begin"
          type="blueButton"
          onClick={handleStartCheckout}
          text="Iniciar compra"
          fetchingText=""
          isFetching={false}
          disabled={false}
          sx={{width: "100%"}}
          />
        </Box>
      </Box>
    </Drawer>
  )
}