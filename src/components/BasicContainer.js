import { Container, Grid } from '@mui/material';
import { forwardRef } from 'react';
import FadeInUp from './FadeInUp';

const BasicContainer = (
  { children, inView = false, width, align = 'flex-start', height = '100vh' },
  ref
) => (
  <Container
    ref={ref}
    maxWidth={width === undefined ? 'sm' : width}
    sx={{
      paddingLeft: '30px',
      paddingRight: '30px',
      width: '100%',
      height: '100%',
      margin: 'auto',
    }}>
    <FadeInUp inView={inView}>
      <Grid
        sx={{ width: '100%', height: '100%', minHeight: height }}
        item
        container
        direction="column"
        justifyContent="center"
        flexWrap="nowrap"
        alignItems={align}
        spacing={0}>
        {children}
      </Grid>
    </FadeInUp>
  </Container>
);

export default forwardRef(BasicContainer);
