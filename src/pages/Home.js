import { Grid, Typography } from '@mui/material';
import BasicContainer from '../components/BasicContainer';
import Decoration from '../components/Decoration';
import PhotoBackground from '../components/PhotoBackground';

const Home = ({}) => {
  return (
    <>
      <Decoration />
      <PhotoBackground />
      <BasicContainer width="xs">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center">
          <Typography color="#FFF" variant="h1" align="center" mx="2vh">
            Media Creator
          </Typography>
        </Grid>
        <Grid item mt="2vh" mb="5vh">
          <Typography color="#FFF" variant="h4" align="center">
            An app for creating media
          </Typography>
        </Grid>
        <Grid item mt="2vh" mb="5vh">
          <Typography color="#FFF" variant="h5" align="center">
            Hello world
          </Typography>
        </Grid>
      </BasicContainer>
    </>
  );
};

export default Home;
