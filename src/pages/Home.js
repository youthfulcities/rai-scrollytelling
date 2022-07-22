import { Grid, Typography } from '@mui/material';
import BasicContainer from '../components/BasicContainer';
import Decoration from '../components/Decoration';
import Map from '../components/Map';
import MapButtons from '../components/MapButtons';

const Home = () => (
  <div style={{ backgroundColor: 'var(--blue)' }}>
    <Decoration />
    <BasicContainer width="lg">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        spacing={2}
        justifyContent="center">
        <Typography color="#FFF" variant="h1" align="center" mb="2vh">
          Affordability
        </Typography>
        <MapButtons />
        <Map />
      </Grid>
    </BasicContainer>
  </div>
);

export default Home;
