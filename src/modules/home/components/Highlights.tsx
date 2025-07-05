import { ProductCard } from "@/shared/components/ProductCard"
import { Title2 } from "@/theme/textStyles"
import { Box } from "@mui/material"
import React from "react"
import productImageA from '@img/card/media.webp'
import productImageB from '@img/card/media.png'

const products = [{
  name: 'Anteojos de Sol',
  discount: 50,
  imageA: productImageA,
  imageB: productImageB,
},
{
  name: 'Anteojos de Sol',
  discount: 50,
  imageA: productImageA,
  imageB: productImageB,
},
{
  name: 'Anteojos de Sol',
  discount: 50,
  imageA: productImageA,
  imageB: productImageB,
},
]

export const Highlights: React.FC = () => {
  return (
    <Box sx={{
      maxWidth: "1280px",
      marginX: "auto",
      paddingX: {xs: "1rem", md: "3rem"},
    }}>
      <Title2 sx={{
        width: "100%",
        textAlign: "center"
      }}>Destacados</Title2>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: {xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)"},
        gap: "1rem",
      }}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Box>
    </Box>
  )
}