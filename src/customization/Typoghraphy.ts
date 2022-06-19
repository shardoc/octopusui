export {}
declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        logo: true;
    }
}
