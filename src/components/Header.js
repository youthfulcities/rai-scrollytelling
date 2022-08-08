import { Container, Grid } from '@mui/material';

const Header = () => (
  <header>
    <Grid
      sx={{ height: '5vh', width: '100%', position: 'relative', zIndex: '10' }}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center">
      <Container maxWidth="lg">
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
        {/* add RAI Affordability Index + GO TO YOUTHFUL CITIES Button! */}
      </Container>
    </Grid>
  </header>
);

export default Header;
