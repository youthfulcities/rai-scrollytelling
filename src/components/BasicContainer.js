import { Container, Grid } from '@mui/material';

const BasicContainer = ({ children, width }) => (
  <Container maxWidth={width === undefined ? 'md' : width}>
    <Grid
      sx={{ width: '100%', height: '100%' }}
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}>
      {children}
    </Grid>
  </Container>
);

export default BasicContainer;
