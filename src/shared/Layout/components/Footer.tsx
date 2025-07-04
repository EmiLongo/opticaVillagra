import React from "react";
import {
  Box,
  List,
  ListItem,
  Container,
  Link,
  useTheme,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import inpulseLogo from "@img/inpulse_design_logo_blanco.svg";
import logoContraste from "@img/mundo_adaptogenos.svg";
import { menuItems } from "../utils/info";
import {
  Text2,
  Title2,
} from "@/theme/textStyles";
import { toast } from "react-toastify";

export const Footer: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;
  // Estilos personalizados
  const StyledFooter = styled("footer")({
    backgroundColor: palette.primary[900],
    color: palette.primary.light,
    paddingTop: "2rem",
    paddingBottom: "1rem",
  });

  const FooterList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  // gap: "1.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
    gap: "2rem",
  },
  }));

  const FooterListItem = styled(ListItem)(({ theme }) => ({
    flex: 1,
      margin: 0,
    paddingRight: "0.5rem",
    [theme.breakpoints.up('md')]: {
      paddingRight: "1rem",
    },
  }));

  const FooterLink = styled(Link)({
    textDecoration: "none",
    color: palette.primary.light,
    "&:hover": {
      color: palette.primary[400],
    },
  });

  // Función para compartir URL
  const shareURL = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Mundo Adaptógenos",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => toast.success("¡URL copiada al portapapeles!"))
        .catch(() => toast.error("No se pudo copiar la URL"));
    }
  };

  return (
    <StyledFooter id="footer" sx={{ paddingX: {xs: "1rem", md: "2rem", lg: "unset"},}}>
      <Container maxWidth="lg">
        <Box
          id="footerContainer"
          sx={{
            display: "flex",
            justifyContent: {xs: "space-around", md: "space-between"},
            flexWrap: "wrap",
            gap: { xs: 4 },
          }}
        >
          <Box
            id="footerLeft"
            sx={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                component={"img"}
                src={logoContraste}
                alt="Mundo Adaptógenos Blanco y Negro"
                decoding="async"
                loading="lazy"
                sx={{
                  height: {xs: "40px", md: "70px"},
                }}
              />
              <Box
                id="shareURL"
                onClick={shareURL}
                sx={{
                  cursor: "pointer",
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShareOutlinedIcon
                  width={24}
                  height={24}
                  sx={{ verticalAlign: "middle", marginRight: 1 }}
                />
                <Text2 sx={{ color: palette.primary[100], fontWeight: 400 }}>
                  Compartir página
                </Text2>
              </Box>
            </Box>
          </Box>
            <Box id="footerRight" sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <Title2 sx={{ color: palette.primary[100], textAlign: "center", textTransform: "none", marginBottom: {xs: "1rem", sm: "unset"} }}>Nuestra Web:</Title2>
              <Box>
                <FooterList>
                  <FooterListItem id="footerListItem-home">
                    <FooterLink href="#hero">
                      <Text2 sx={{ color: "inherit" }}>Home</Text2>
                    </FooterLink>
                  </FooterListItem>
                  {menuItems.map((item) => (
                    <FooterListItem
                      key={item.text}
                      id={`footerListItem-${item.text}`}
                    >
                      <FooterLink href={item.path}>
                        <Text2 sx={{ color: "inherit", textAlign: "center" }}>{item.text}</Text2>
                      </FooterLink>
                    </FooterListItem>
                  ))}
                </FooterList>
              </Box>
            </Box>
        </Box>
        <Divider
        component="hr"
        variant="fullWidth"
        aria-hidden="true"
        sx={{ 
          marginTop: "2rem", 
          marginBottom: "1rem", 
          backgroundColor: palette.primary[100] 
        }} 
        />
        <Box
          id="footerBottom"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
          }}
        >
          <Text2 sx={{ color: "inherit",textAlign: "center" }}>
            Derechos reservados © {new Date().getFullYear()}.
          </Text2>
          <Box
            component={"a"}
            href="https://inpulse.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <Text2 sx={{ color: "inherit",textAlign: "center" }}>
              Desarrollado por
            </Text2>
            <Box
              component={"img"}
              src={inpulseLogo}
              alt="Logo Inpulse Design"
              width={100}
              decoding="async"
              loading="lazy"
            />
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};
