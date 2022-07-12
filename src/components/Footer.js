import { Container, Grid } from '@mui/material';

const Footer = () => (
  <footer>
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
                    src="./assets/images/yc-logo.png"
                    height="60vh"
                    alt="Youthful Cities logo"
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </footer>
);

export default Footer;
