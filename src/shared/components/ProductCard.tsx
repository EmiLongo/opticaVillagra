import React from "react"
import { Box, Card } from "@mui/material"
import { Text3, Title3 } from "@/theme/textStyles"

interface Product {
  name: string
  discount: number
  imageA: string
  imageB: string
}

export const ProductCard: React.FC<{
  product: Product
}> = ({ product }) => {
  return (
    <Card 
    elevation={3}
    sx={{
      width: '100%',
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
        top: "1rem",
        left: "1rem",
        width: 'auto',
        height: 'auto',
        padding: '0.5rem',
        backgroundColor: "secondary.main",
        borderRadius: '12px',
      }}>
        <Text3>{product.discount}%</Text3>
      </Box>
      <Box sx={{ width: "100%", height: "50%"}}>
        <Box component="picture" display="block" sx={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source srcSet={product.imageA} type="image/webp" />
          <Box
            component="img"
            src={product.imageB}
            alt="Foto descriptiva"
            loading="lazy"
            sx={{
              width: '100%',
              height: '100%',
              display: 'block',
            }}
          />
        </Box>
      </Box>
      <Title3>product.name</Title3>

    </Card>
  )
}