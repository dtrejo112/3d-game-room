import '@/styles/globals.css'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
       <Component {...pageProps} />
    </ThemeProvider>
  )
}
