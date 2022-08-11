import { Container, Grid } from '@mui/material';

const BasicContainer = ({ children, width, align = 'flex-start' }) => (
  <Container
    maxWidth={width === undefined ? 'sm' : width}
    sx={{
      paddingLeft: '70px',
      paddingRight: '70px',
      height: '100%',
      margin: 'auto',
    }}>
    <Grid
      sx={{ width: '100%', height: '100%' }}
      item
      container
      direction="column"
      justifyContent="center"
      alignItems={align}
      spacing={0}>
      {children}
    </Grid>
  </Container>
);

export default BasicContainer;
