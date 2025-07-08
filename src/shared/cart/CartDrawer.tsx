import React from "react";
import { Box, Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BodyS, Heading2 } from "@/theme/textStyles";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ICart } from "./types";
import { CartDrawerItem } from "./CartDrawerItem";

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
        urlPhoto: 'https://example.com/images/auriculares.jpg',
        price: 1999,
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
        urlPhoto: 'https://example.com/images/teclado.jpg',
        price: 3499,
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
        width: {xs: "100vw", md:"30vw"}, 
        minWidth: {xs: "unset", md: "420px"}, 
        padding: "12px" 
      }}>
        <Box
          sx={{ position: 'absolute', top: "1rem", right: "1rem" }}
          onClick={closeCartDrawer}
        >
          <CloseIcon />
        </Box>
        <Heading2>Carrito de compras</Heading2>
        <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
          <AccountCircleOutlinedIcon />
          <BodyS>maildeejemplo@gmail.com</BodyS>
        </Box>
        {mockCart.cartItems.map((cartItem, index)=>(
          <CartDrawerItem cartItem={cartItem} index={index} />
        ))
        }
      </Box>
    </Drawer>
  )
}