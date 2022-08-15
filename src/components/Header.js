import {
  Button,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <header>
      <Container maxWidth="lg">
        <Grid
          sx={{
            height: '5vh',
            width: '100%',
            position: 'relative',
            zIndex: '10',
          }}
          container
          direction="row"
          justifyContent="space-between"
          flexWrap="nowrap"
          alignItems="center"
          mt={2}>
          <Grid
            item
            container
            sx={{ width: '100%' }}
            alignItems="center"
            justifyContent="flex-start"
            spacing={1}>
            <Grid item>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://youthfulcities.com/">
                <img
                  src="./assets/images/YC_BnW_ALT_black_RGB.png"
                  height="50px"
                  alt="Youthful Cities logo"
                />
              </a>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item>
              <Typography variant="body1">Real Affordability Index</Typography>
            </Grid>
          </Grid>
          {!smallScreen && (
            <Grid item sx={{ textDecoration: 'none' }}>
              <Button
                component={Link}
                href="https://youthfulcities.us7.list-manage.com/subscribe?u=ad93cdfc178e6d9bc7646844f&id=453e06e908"
                target="_blank"
                rel="noreferrer"
                variant="contained"
                color="error"
                sx={{
                  color: '#000',
                  padding: '14px 35px',
                  textAlign: 'center',
                }}>
                Subscribe to our newsletter
              </Button>
            </Grid>
          )}
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
