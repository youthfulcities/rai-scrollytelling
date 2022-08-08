import { Container, Grid } from '@mui/material';

const Header = () => (
  <header>
    <Container maxWidth="lg">
      <Grid
        sx={{ minHeight: '14vh', maxHeight: '14vh' }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Grid item container spacing="1vh" direction="column">
              <Grid item>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://youthfulcities.com/">
                  <img
                    src="./assets/images/YC_BnW_ALT_black_RGB.png"
                    height="50vh"
                    alt="Youthful Cities logo"
                  />
                </a>
              </Grid>
                  {/* add RAI Affordability Index + GO TO YOUTHFUL CITIES Button! */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </header>
);

export default Header;