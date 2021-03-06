import { Grid, Typography } from '@mui/material';
import BarGraph from '../components/BarGraph';
import BasicContainer from '../components/BasicContainer';
import Decoration from '../components/Decoration';
import DoughnutGraph from '../components/DoughnutGraph';
import LineGraph from '../components/LineGraph';
import Map from '../components/Map';

const Home = () => (
  <div>
    <Decoration />
    <BasicContainer width="lg">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        spacing={2}
        justifyContent="center">
        <Typography color="#000" variant="h1" align="center" mb="2vh">
          Affordability
        </Typography>
        <Typography variant="h5">This is some text</Typography>
        <Map />
        <BarGraph />
        <DoughnutGraph />
        <LineGraph />
      </Grid>
    </BasicContainer>
  </div>
);

export default Home;
