import { Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicContainer from '../components/BasicContainer';

const Chap5 = ({ setCurrentEl }, ref) => {
  const [sec1Ref, sec1InView, sec1Entry] = useInView({ threshold: 0.5 });
  const [sec2Ref, sec2InView, sec2Entry] = useInView({ threshold: 0.5 });
  const [sec3Ref, sec3InView, sec3Entry] = useInView({ threshold: 0.5 });
  const [sec4Ref, sec4InView, sec4Entry] = useInView({ threshold: 0.5 });
  const [sec5Ref, sec5InView, sec5Entry] = useInView({ threshold: 0.5 });
  const [sec6Ref, sec6InView, sec6Entry] = useInView({ threshold: 0.5 });

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
    if (sec4InView) {
      setCurrentEl(sec4Entry.target);
    }
    if (sec5InView) {
      setCurrentEl(sec5Entry.target);
    }
    if (sec6InView) {
      setCurrentEl(sec6Entry.target);
    }
  }, [sec1InView, sec2InView, sec3InView, sec4InView, sec5InView, sec6InView]);

  return (
    <section ref={ref} id="chap5">
      <Grid
        direction="column"
        container
        sx={{ minHeight: '100vh', backgroundColor: '#253D88', color: '#fff' }}>
        <BasicContainer ref={sec1Ref}>
          <Typography variant="h2" align="center" mb="2vh">
            Chapter 5: Searching for security
          </Typography>
          <Typography variant="body1">
            Every month you feel as if you are scraping by. You are part of a
            generation of young people in a deficit of $750 per month.
            <sup>
              <Link
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
        <BasicContainer ref={sec2Ref}>
          <Typography variant="body1">
            Whatever you do doesn’t feel like enough.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec3Ref}>
          <Typography variant="body1">
            It feels like you are constantly searching for a sense of financial
            security that is just out of reach.
          </Typography>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(Chap5);
