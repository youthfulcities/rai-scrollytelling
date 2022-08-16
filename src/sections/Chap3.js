import { Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicContainer from '../components/BasicContainer';
import Receipt from '../components/Receipt';

const Chap3 = ({ setCurrentEl }, ref) => {
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
    <section id="chap3" ref={ref}>
      <Grid
        container
        direction="column"
        sx={{ minHeight: '100vh', backgroundColor: '#B8D98D' }}>
        <BasicContainer ref={sec1Ref}>
          <Typography variant="h2" align="center" mb="2vh">
            Chapter 3: Searching for balance
          </Typography>
          <Typography variant="body1">
            You are adjusting and budgeting for changes in the cost of living as
            you get settled in your urban life.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec2Ref}>
          <Typography variant="body1">
            Additional costs in Toronto include $1788 per month to rent a one
            bedroom apartment
            <sup>
              <Link
                href="https://www.rentseeker.ca/average-rent-prices-canada"
                target="_blank">
                [8]
              </Link>
            </sup>{' '}
            and $1537 annually for a transit pass.
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
            With these high costs it is harder to budget for the rising cost of
            food.
          </Typography>
          <Typography variant="h5">
            44% of Canadians in urban areas state that they are affected by the
            rise in the cost of groceries.
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/n1/daily-quotidien/220609/dq220609a-eng.htm"
                target="_blank">
                [9]
              </Link>
            </sup>{' '}
          </Typography>
          <Receipt />
          <Typography variant="body1">
            The costs of joy that are necessary to live a balanced life, provide
            more financial pressure that weighs heavily.
          </Typography>
          {/* Insert receipt graphic */}
        </BasicContainer>
        <BasicContainer ref={sec3Ref}>
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
