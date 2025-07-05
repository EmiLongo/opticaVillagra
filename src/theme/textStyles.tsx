// src/theme/textStyles.tsx
import { styled, Theme, Typography, TypographyProps } from '@mui/material';
import { greyColor } from './theme';

export const defaultFonts = {
  letter: {
    wide: 1.3,
    normal: 0.3,
  },
  family: {
    titulos: "Plus Jakarta Sans, arial, calibri, sans-serif",
    textos: "Inter, arial, calibri, sans-serif",
  },
};

export const customFonts = {
  space: {
    small: "1rem",
    medium: {xs: "1.5rem", md: "2rem"},
    large: "3rem",
  },
  shadow: {
    titulos: "4px 4px 4px rgba(0, 0, 0, 0.6)",
  },
}

export const defaultParagraph = () => ({
  fontFamily: defaultFonts.family.textos,
  fontWeight: "normal",
  letterSpacing: defaultFonts.letter.normal,
  color: greyColor[950],
  lineHeight: 1.3,
});

export const defaultCTA = () => ({
  fontFamily: defaultFonts.family.textos,
  fontWeight: "normal",
  letterSpacing: defaultFonts.letter.wide,
  color: greyColor[950],
});

export const defaultHeading = () => ({
  fontFamily: defaultFonts.family.titulos,
  letterSpacing: defaultFonts.letter.normal,
  fontWeight: 500,
  color: greyColor[950],
  // lineHeight: 1.2,
});

export const inputAdvice = () => ({
  fontFamily: defaultFonts.family.textos,
  fontSize: "0.75rem", // 12px
  color: greyColor[950],
});

// Helper para recibir sx extra

const responsiveFontSize = (fontSizes: { xxl?: string; xl?: string; lg?: string; md?: string; sm?: string, xs?: string }) => (theme: Theme) => ({
  fontSize: fontSizes.xl,

  [theme.breakpoints.up(2000)]: { fontSize: fontSizes.xxl },
  [theme.breakpoints.down('xl')]: { fontSize: fontSizes.lg },
  [theme.breakpoints.down('lg')]: { fontSize: fontSizes.md },
  [theme.breakpoints.down('md')]: { fontSize: fontSizes.sm },
  [theme.breakpoints.down('sm')]: { fontSize: fontSizes.xs },
});

// TITLES
export const  HeadingHero = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({ xxl: '6rem', xl: '4.75rem', lg: '4.2rem', md: '4rem', sm: '3.75rem', xs: '3.75rem' })(theme), // 60px
  fontWeight: 600,
  lineHeight: 1.1,
  textShadow: customFonts.shadow.titulos,
}))
export const  HeadingHero2 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({ xxl: '3.27rem', xl: '2.45rem', lg: '2.23rem', md: '2.12rem', sm: '2rem', xs: '2rem' })(theme), // 60px
  fontWeight: 600,
  // lineHeight: 1.1,
}))

export const HeadingXL = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({ xxl: '3rem', xl: '2.25rem', lg: '2.05rem', md: '1.95rem', sm: '1.85rem', xs: '1.85rem' })(theme), // 36px
  textTransform: "uppercase",
}));

export const Heading1 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({  xxl: '52px', xl: '40px', lg: '36px', md: '34px', sm: '32px', xs: '32px'  })(theme),
  textWrap: "wrap",

}));

export const Heading2 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({  xxl: '42px', xl: '32px', lg: '28px', md: '26px', sm: '24px', xs: '24px' })(theme),
  textWrap: "wrap",

}));

export const Heading3 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({  xxl: '36px', xl: '28px', lg: '24px', md: '22px', sm: '20px', xs: '20px'  })(theme),
  fontWeight: 'normal',
  textWrap: "wrap",
}));
export const Heading4 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({  xxl: '34px', xl: '26px', lg: '22px', md: '20px', sm: '18px', xs: '18px'  })(theme),
  fontWeight: 'normal',
  textWrap: "wrap",
}));
export const Heading5 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultHeading(),
  ...responsiveFontSize({  xxl: '30px', xl: '24px', lg: '20px', md: '18px', sm: '16px', xs: '16px'  })(theme),
  fontWeight: 'normal',
  textWrap: "wrap",
}));

// CTA
export const CallToAction = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultCTA(),
  ...responsiveFontSize({ xl: '1.25rem', lg: '1.15rem', md: '1.105rem', sm: '1.07rem', xs: '1.07rem' })(theme), // 20px
  fontWeight: 600,
  textTransform: "uppercase",
}));
// SUBTITLES

export const SubHeadingXL = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({ xl: "1.5rem", lg: "1.375rem", md: "1.32rem", sm: "1.27rem", xs: "1.27rem"})(theme), // 24px
  textWrap: "wrap",
}));

export const SubHeadingBold = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  fontWeight: 600,
  ...responsiveFontSize({ xl: '0.89rem', lg: '0.8125rem', md: '0.78rem', sm: '0.75rem', xs: '0.75rem' })(theme), // 14px
}));
export const SubHeading = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({ xl: '0.89rem', lg: '0.8125rem', md: '0.78rem', sm: '0.75rem', xs: '0.75rem' })(theme), // 14px
  textWrap: "wrap",
}));

// BUTTON MINI
export const ButtonMini = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({ xl: '0.687rem', lg: '0.625rem', md: '0.5625rem', sm: '0.5rem' })(theme), // 10px
}));

// PARAGRAPHS
export const BodyL = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '36px', xl: '28px', lg: '24px', md: '22px', sm: '20px', xs: '20px'})(theme),
  textWrap: "wrap",
}));
export const BodyLEmph = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '36px', xl: '28px', lg: '24px', md: '22px', sm: '20px', xs: '20px'})(theme),
  textWrap: "wrap",
  fontWeight: 800,
}));

export const BodyM = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '30px', xl: '24px', lg: '20px', md: '18px', sm: '16px', xs: '16px'})(theme),
  textWrap: "wrap",
}));
export const BodyMEmph = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '30px', xl: '24px', lg: '20px', md: '18px', sm: '16px', xs: '16px'})(theme),
  textWrap: "wrap",
  fontWeight: 800,
}));

export const BodyS = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '26px', xl: '20px', lg: '18px', md: '16px', sm: '14px', xs: '14px'})(theme),
  textWrap: "wrap",
}));
export const BodySEmph = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '26px', xl: '20px', lg: '18px', md: '16px', sm: '14px', xs: '14px'})(theme),
  textWrap: "wrap",
  fontWeight: 800,
}));

export const Caption = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '20px', xl: '16px', lg: '14px', md: '13px', sm: '12px', xs: '12px'})(theme),
  textWrap: "wrap",
}));
export const CaptionAlt = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({xxl: '18px', xl: '14px', lg: '12px', md: '11px', sm: '10px', xs: '10px'})(theme),
  textWrap: "wrap",
  fontWeight: 800,
}));

export const ParagraphLight = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  color: theme.palette.background.paper,
  textWrap: "wrap",
}));

export const ParagraphDetails = styled((props: TypographyProps) => <Typography {...props} />)(() => ({
  ...defaultParagraph(),
  fontSize: "0.625rem", // 10px
  textWrap: "wrap",
}));

export const TextBoxFill = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(),
  ...responsiveFontSize({ xl: '0.89rem', lg: '0.8125rem', md: '0.78rem', sm: '0.75rem', xs: '0.75rem' })(theme), // 14px
}));

export const TextBox = styled((props: TypographyProps) => <Typography {...props} />)(() => ({
  ...defaultParagraph(),
  fontSize: "0.812rem", // 13px
}));

// INPUTS
export const InputAdvice = styled((props: TypographyProps) => <Typography {...props} />)(() => ({
  ...inputAdvice(),
}));

export const InputError = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...inputAdvice(),
  color: theme.palette.error.main,
}));




import React from "react";

interface Props {
  children: React.ReactNode
  sx?: object
  id: string
}
export const SectionHeading: React.FC<Props> = ({ children, sx, id }) => {
  return (
    <Heading2
      id={id}
      sx={{
        marginTop: {xs:customFonts.space.large, lg:customFonts.space.large},
        marginBottom: customFonts.space.medium,
        textAlign: "center",
      ...sx }}>
      { children }
    </Heading2>
  )
};

export const SectionSubHeading: React.FC<Props> = ({ children, sx, id }) => {
  return (
    <BodyM
    id={id}
    sx={{
      textAlign: "center", 
      marginBottom: "2rem",
      paddingX: {xs: "2rem", md: "unset"}, 
      maxWidth: {xs: "unset", md: "600px"}, 
      textWrap: "balance",
      ...sx}}
    >
      { children }
    </BodyM>
  )
}