import { Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicContainer from '../components/BasicContainer';
import Map from '../components/Map';

const Chap4 = ({ setCurrentEl }, ref) => {
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
    <section ref={ref} id="chap4">
      <Grid
        container
        direction="column"
        sx={{ minHeight: '100vh', backgroundColor: '#F2695D' }}
        justifyContent="center">
        <BasicContainer ref={sec1Ref} inView={sec1InView}>
          <Typography variant="h2" align="center" mb="2vh">
            Chapter 4: Searching for skills
          </Typography>
          <Typography variant="body1">
            The next stage of setting up your urban life is to find an
            education. Due to your high living costs you have to take out a
            loan.
          </Typography>
          <Typography variant="h5">
            Although 73% of young people in Canada attend post secondary
            education,
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/n1/daily-quotidien/211004/dq211004c-eng.htm"
                target="_blank">
                [11]
              </Link>
            </sup>{' '}
            49% of college graduates owe money to an external source for their
            education, and this is the same for 54% of Bachelor’s students, 46%
            of Master’s students and 36% of Doctorate students.
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710003601"
                target="_blank">
                [12]
              </Link>
            </sup>
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec2Ref} inView={sec2InView}>
          <Typography variant="body1">
            The tuition costs vary by province, with Sakatchewan having the most
            affordable tuition and Ontario having the highest tuition at $9,743
            on average.
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/n1/daily-quotidien/210908/dq210908a-eng.htm"
                target="_blank">
                [13]
              </Link>
            </sup>
          </Typography>
          <Map />
        </BasicContainer>
        <BasicContainer ref={sec3Ref} inView={sec3InView}>
          <Typography variant="body1">
            You don’t want to move to another province for school even though
            the average tuition in another province would be $6,700,
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/n1/daily-quotidien/210908/dq210908a-eng.htm"
                target="_blank">
                [13]
              </Link>
            </sup>{' '}
            significantly less that what you would have to pay annually for
            attending university in Ontario.
          </Typography>
          <Typography variant="body1">
            But your community and family are nearby in Ontario. It is difficult
            to put a price on that.
          </Typography>
          <Typography variant="body1">
            Cheaper tuition and cost of living isn’t the only variable that
            should be considered in a cross-country move.
          </Typography>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(Chap4);
