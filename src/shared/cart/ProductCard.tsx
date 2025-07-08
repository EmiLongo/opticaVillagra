import React from "react"
import { Box, Card } from "@mui/material"
import { BodyS, Caption, Heading3, Heading5 } from "@/theme/textStyles"
import { WhiteButton } from "@shared/components/buttons/WhiteButton"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { blueColor, greyColor, orangeColor } from "@/theme/theme";
import { IProduct } from "../components/types";
import { numberToPrice } from "../utils/convertNumberToPrice";

interface IProductCard {
  product: IProduct;
  index: number;
}

export const ProductCard: React.FC<IProductCard> = ({ product, index }) => {
  return (
    <Card 
    elevation={4}
    sx={{
      width: '250px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <Box sx={{
        position: 'absolute',
        top: "10px",
        left: "10px",
        width: '62px',
        height: '32px',
        padding: '0.5rem',
        backgroundColor: orangeColor[800],
        borderRadius: '8px',
      }}>
        <Caption sx={{color: greyColor[50], width: "100%", textAlign: "center"}}>-{product.discount}%</Caption>
      </Box>
      <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center", overflow: 'hidden',}}>
        <Box component="picture" display="block" sx={{ minWidth: '100%', minHeight: '100%' }}>
          <source srcSet={product.urlPhoto} type="image/webp" />
          <Box
            component="img"
            src={product.urlPhoto}
            alt="Foto descriptiva"
            loading="lazy"
            sx={{
              minWidth: '100%',
              minHeight: '100%',
              display: 'block',
            }}
          />
        </Box>
      </Box>
      <Box sx={{
        width: "100%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem"
      }}>
        <Heading5 sx={{height: "2.5em"}}>{product.title}</Heading5>
        <Box sx={{display: "flex", alignItems: "center", gap: "16px"}}>
          <Heading3>{numberToPrice(product.priceDiscount)}</Heading3>
          <BodyS sx={{color: greyColor[700], textDecoration: "line-through"}}>{numberToPrice(product.price)}</BodyS>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", gap: "5px"}}>
          <Box sx={{display: "flex", alignItems: "center", gap: "8px"}}>
            <BodyS sx={{color: blueColor[700]}}>{numberToPrice(product.priceTransfer)}</BodyS>
            <BodyS sx={{color: greyColor[700]}}>Transf./ Depósito</BodyS>
          </Box>
          <BodyS sx={{color: blueColor[700]}}>{product.plan}</BodyS>
        </Box>
        <WhiteButton
          id={`add-cart-${index}`}
          text="AÑADIR AL CARRITO"
          fetchingText="AÑADIENDO..."
          onClick={() => console.log(`se quizo añadir ${product.title}`)}
          isFetching={false}
          icon={<ShoppingCartOutlinedIcon />}
          disabled={false}
          sx={{borderRadius: "30px", width: "100%"}}
        />
      </Box>
    </Card>
  )
}