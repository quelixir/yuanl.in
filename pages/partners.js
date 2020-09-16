import Head from 'next/head';
import { Box, Container, CssBaseline, Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default function Partners() {
  const theme = createMuiTheme({
    palette: {
      background: {
        default: grey[900],
      },
      text: {
        primary: '#ffffff',
        secondary: grey[500],
      },
    },
    typography: {
      fontFamily: [
        'Noto Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Yuanlin Partners</title>
      </Head>
      <Container maxWidth="lg">
        <main>
          <Box pt={5}>
            <Typography variant="h1" component="h2" gutterBottom>
              Yuanlin Partners
            </Typography>
          </Box>
          <Typography variant="h2" gutterBottom>
            boutique corporate services firm
          </Typography>
          <Typography variant="body1" color="initial">
            Yuanlin has expertise in a vast array of professional services,
            including accounting, financial statement preparation, graphic
            design, website creation, and worldwide corporate structure
            consulting.
          </Typography>
        </main>
        <footer>
          <Box pt={5}>
            <Typography variant="h6" color="textSecondary">
              园林资产持有限公司
            </Typography>
          </Box>
        </footer>
      </Container>
    </MuiThemeProvider>
  );
}
