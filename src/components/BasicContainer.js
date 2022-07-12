import { Container, Grid } from '@mui/material';

const BasicContainer = ({ children, width }) => (
  <Container maxWidth={width === undefined ? 'xs' : width}>
    <Grid
      sx={{ minWidth: '100%', minHeight: '100%' }}
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      pb="5vh">
      <Grid
        sx={{ minHeight: '59vh', minWidth: '100%' }}
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        pt="5vh"
        pb="5vh"
        spacing={0}>
        {children}
      </Grid>
    </Grid>
  </Container>
);

export default BasicContainer;
