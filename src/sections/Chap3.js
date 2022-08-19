import { Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicContainer from '../components/BasicContainer';
import Receipt from '../components/Receipt';

const Chap3 = ({ setCurrentEl }, ref) => {
  const [sec1Ref, sec1InView, sec1Entry] = useInView({ threshold: 0.5 });
  const [sec2Ref, sec2InView, sec2Entry] = useInView({ threshold: 0 });
  const [sec3Ref, sec3InView, sec3Entry] = useInView({ threshold: 0.5 });

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
  }, [sec1InView, sec2InView, sec3InView]);

  return (
    <section id="chap3" ref={ref}>
      <Grid
        container
        direction="column"
        sx={{
          minHeight: '100vh',
          backgroundColor: '#B8D98D',
          background:
            'linear-gradient(180deg, rgba(216,213,123,1) 0%, rgba(184,217,141,1) 20%, rgba(184,217,141,1) 80%, rgba(214,160,117,1) 100%)',
        }}>
        <BasicContainer ref={sec1Ref} inView={sec1InView}>
          <Typography variant="h2" align="center" mb="2vh">
            Chapter 3: Searching for balance
          </Typography>
          <Typography variant="body1">
            You are adjusting and budgeting for changes in the cost of living as
            you get settled in your urban life.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec2Ref} inView={sec2InView}>
          <Receipt inView={sec2InView} />
          <sub>
            Source:{' '}
            <a
              href="https://www.lowestrates.ca/resource-centre/personal-finance/cost-of-living-toronto"
              target="_blank"
              rel="noreferrer">
              https://www.lowestrates.ca/resource-centre/personal-finance/cost-of-living-toronto
            </a>
          </sub>
        </BasicContainer>
        <BasicContainer ref={sec3Ref} inView={sec3InView}>
          <Typography variant="h5">
            In July of 2020 only 44.3% of young men and 30% of young women
            reported having very good mental health,
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/n1/pub/42-28-0001/2021001/article/00001-eng.htm"
                target="_blank">
                [10]
              </Link>
            </sup>{' '}
            and youth continuously report lower levels of mental health than
            adults.
          </Typography>
          <Typography variant="body1">
            The pressure of finances, meeting societal expectations and
            continuously struggling to afford experiences that bring joy are all
            challenges that young people must overcome as they work to obtain a
            job that can lift them out of the minimum wage bracket.
          </Typography>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(Chap3);
