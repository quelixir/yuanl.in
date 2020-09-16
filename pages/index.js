import Head from 'next/head';
import {
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    minWidth: 20,
    background: grey[800],
  },
});

export default function Home() {
  const classes = useStyles();
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
        <title>Yuanlin</title>
      </Head>
      <Container maxWidth="md">
        <main>
          <Box pt={5}>
            <Typography variant="h1" component="h2">
              Yuanlin Partners
            </Typography>
          </Box>

          <Box pb={5}>
            <Typography variant="h3" color="textSecondary">
              private financial group
            </Typography>
          </Box>

          <Container maxWidth="lg">
            <Grid container spacing={1}>
              {/* Partners */}
              <Grid item xs={6}>
                <Link href="/partners" style={{ textDecoration: 'none' }}>
                  <Card className={classes.card} variant="outlined">
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Partners / 合股人
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>

              {/* Holdings */}
              <Grid item xs={6}>
                <Link href="/holdings" style={{ textDecoration: 'none' }}>
                  <Card className={classes.card} variant="outlined">
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        Holdings / 资产持
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            </Grid>
          </Container>
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
