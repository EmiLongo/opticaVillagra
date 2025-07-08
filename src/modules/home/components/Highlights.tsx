// src/modules/home/components/Highlights.tsx
import { ProductCard } from "@/shared/cart/ProductCard"

import { Box } from "@mui/material"
import React from "react"
import productImageA from '@img/card/media.webp'
import { SectionHeading } from "@/theme/textStyles"
import { IProduct } from "@/shared/components/types"


const products: IProduct[] = [{
  id: 123,
  sectionId: 3,
  title: 'Anteojos de sol Vulk Worthwile C2 Polarizado',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  urlPhoto: productImageA,
  isValid: true,
},
{
  id: 124,
  sectionId: 3,
  title: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  urlPhoto: productImageA,
  isValid: true,
},
{
  id: 125,
  sectionId: 3,
  title: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  urlPhoto: productImageA,
  isValid: true,
},
{
  id: 126,
  sectionId: 3,
  title: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  urlPhoto: productImageA,
  isValid: true,
},
{
  id: 127,
  sectionId: 3,
  title: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  urlPhoto: productImageA,
  isValid: true,
},
{
  id: 128,
  sectionId: 3,
  title: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  urlPhoto: productImageA,
  isValid: true,
},
{
  id: 129,
  sectionId: 3,
  title: 'Anteojos de Sol',
  discount: 20,
  price: 100000,
  priceDiscount: 80000,
  priceTransfer: 72000,
  plan: "6 x $18.150,00 sin interés",
  urlPhoto: productImageA,
  isValid: true,
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
        gridTemplateColumns: {xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)"},
        gap: {xs: "1rem", md: "1.5rem", lg: "2rem"},
      }}>
        {products.map((product, index) => (
          <ProductCard product={product} index={index} />
        ))}
      </Box>
    </Box>
  )
}