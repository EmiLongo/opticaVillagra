import { Box } from "@mui/material"
import React from "react"
import BannerCategoria1 from '@img/home/BannerCategoria1.webp'
import BannerCategoria2 from '@img/home/BannerCategoria2.webp'
import BannerCategoria3 from '@img/home/BannerCategoria3.webp'
import BannerCategoria4 from '@img/home/BannerCategoria4.webp'
import { greyColor } from "@/theme/theme"
import { Title2 } from "@/theme/textStyles"

// TODO: Agregar las secciones de la home con el backend
const sections = [
  {
    title: 'Anteojos de Sol',
    image: BannerCategoria1,
  },
  {
    title: 'Armazones de Receta',
    image: BannerCategoria2,
  },
  {
    title: 'Clip-On',
    image: BannerCategoria3,
  },
  {
    title: 'Indestructibles',
    image: BannerCategoria4,
  }
]
export const Sections: React.FC = () => {
  return (
    <Box sx={{
      display: {xs: 'none', md: 'flex'},
    }}>
      {sections.map((section, index) => (
      <Box 
      key={`section-${index}-${section.title.toLowerCase().replace(/ /g, '-')}`}
      sx={{
        display: 'flex',
        alignItems: 'end',
        flex: 1,
        height: '120px',
        backgroundImage: `url(${section.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40px',
          width: '100%',
          backgroundImage: `linear-gradient(to top,rgba(255, 255, 255, 0.7), #FFFFFF00)`,
        }}>
          <Title2 sx={{ color: greyColor[950] }}>{section.title}</Title2>
        </Box>
      </Box>
      ))}
    </Box>
  )
}
