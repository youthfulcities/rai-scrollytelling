import { Box, Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicContainer from '../components/BasicContainer';
import RaiGraphic from '../components/RaiGraphic';

const Chap5 = ({ setCurrentEl }, ref) => {
  const [sec1Ref, sec1InView, sec1Entry] = useInView({ threshold: 0.5 });
  const [sec2Ref, sec2InView, sec2Entry] = useInView({ threshold: 0.5 });
  const [sec3Ref, sec3InView, sec3Entry] = useInView({ threshold: 0.5 });
  const [sec4Ref, sec4InView, sec4Entry] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (sec1InView) {
      setCurrentEl(sec1Entry.target);
    }
    if (sec2InView) {
      setCurrentEl(sec2Entry.target);
    }
    if (sec3InView) {
      setCurrentEl(sec3Entry.target);
    }
    if (sec4InView) setCurrentEl(sec4Entry.target);
  }, [sec1InView, sec2InView, sec3InView, sec4InView]);

  return (
    <section ref={ref} id="chap5">
      <Grid
        direction="column"
        container
        sx={{
          minHeight: '100vh',
          backgroundColor: '#253D88',
          background:
            'linear-gradient(180deg, rgba(140,83,114,1) 0%, rgba(37,61,136,1) 20%, rgba(37,61,136,1) 49%, rgba(0,0,0,1) 100%)',
          color: '#fff',
        }}>
        <BasicContainer ref={sec1Ref} inView={sec1InView}>
          <Typography variant="h2" align="center" mb="2vh">
            Chapter 5: Searching for security
          </Typography>
          <img
            width="100%"
            src="/assets/images/chap5.gif"
            alt="A person thinking about expenses such as food."
          />
          <Typography variant="body1" mt={3}>
            Every month you feel as if you are scraping by. You are part of a
            generation of young people in a deficit of $750 per month.
            <sup>
              <Link
                sx={{ color: 'var(--red)' }}
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
            Minimum wage doesn’t keep up with the liveable wage making cities
            feel unlivable, yet you don’t have another option. You must live in
            an urban area in order to upskill and move away from the minimum
            wage bracket so that you can have future successes.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec2Ref} inView={sec2InView}>
          <Typography variant="body1">
            Whatever you do doesn’t feel like enough.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec3Ref} inView={sec3InView}>
          <Typography variant="body1">
            It feels like you are constantly searching for a sense of financial
            security that is just out of reach.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec4Ref} inView={sec4InView}>
          <Box
            style={{
              position: 'relative',
              minHeight: '100vh',
              width: '100%',
              height: '100%',
            }}>
            <RaiGraphic />
          </Box>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(Chap5);
