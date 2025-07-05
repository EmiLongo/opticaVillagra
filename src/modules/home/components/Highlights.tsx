// src/modules/home/components/Highlights.tsx
import { ProductCard } from "@shared/components/ProductCard"

import { Box } from "@mui/material"
import React from "react"
import productImageA from '@img/card/media.webp'
import productImageB from '@img/card/media.png'
import { SectionHeading } from "@/theme/textStyles"

export interface IProduct {
  name: string
  discount: number
  price: number
  priceDiscount: number
  priceTransfer: number
  plan: string
  imageA: string
  imageB: string
}

const products: IProduct[] = [{
  name: 'Anteojos de sol Vulk Worthwile C2 Polarizado',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  imageA: productImageA,
  imageB: productImageB,
},
{
  name: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  imageA: productImageA,
  imageB: productImageB,
},
{
  name: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  imageA: productImageA,
  imageB: productImageB,
},
]

export const Highlights: React.FC = () => {
  return (
    <Box sx={{
      marginBottom: "5rem",
      paddingX: {xs: "1rem", md: "3rem", lg: "4rem"},
    }}>
      <SectionHeading
      id= "section-highlights"
      sx={{
        width: "100%",
        textAlign: "center",
      }}
      >
        Destacados
      </SectionHeading>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: {xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)"},
        gap: {xs: "1rem", md: "1.5rem", lg: "2rem"},
      }}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Box>
    </Box>
  )
}