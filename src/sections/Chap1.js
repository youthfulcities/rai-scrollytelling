import { Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicContainer from '../components/BasicContainer';
import Car from '../components/Car';

const Chap1 = ({ setCurrentEl }, ref) => {
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
    if (sec4InView) {
      setCurrentEl(sec4Entry.target);
    }
  }, [sec1InView, sec2InView, sec3InView, sec4InView]);

  return (
    <section id="chap1" ref={ref}>
      <Grid
        container
        direction="column"
        sx={{ minHeight: '100vh', height: '100%', backgroundColor: '#F6D9D7' }}>
        <BasicContainer ref={sec1Ref}>
          <Typography variant="h3" mb="2vh">
            Searching for next steps
          </Typography>
          <Typography variant="body1">
            Imagine that you are a recent highschool graduate living through the
            pandemic. You have been forced to decide whether you will continue
            living with your family, or move to an urban centre to pursue work
            or education opportunities amidst great uncertainty.
          </Typography>
          <Typography variant="body1">
            By eventually moving to an urban centre, you will become part of the
            70% of Canadian youth that leave rural areas for urban ones.{' '}
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410032701"
                target="_blank">
                [1]
              </Link>
            </sup>{' '}
            But the pandemic has complicated this path. With virtual learning
            and continuous lockdowns that disrupt work environments, you decide
            to continue living at home until there is more certainty about the
            pandemic.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec2Ref}>
          <Typography variant="body1">
            You work a minimum wage job in your hometown and are part of the 35%
            of Canadian youth that are employed in the service sector,
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
            but it is challenging to maintain employment because of the
            continuous lockdowns.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec3Ref}>
          <Typography variant="h5" mb="2vh">
            During this time, youth unemployment was higher than during the
            Great Recession and 15 to 24 year olds were unemployed for an
            average of 12.6 weeks.
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/n1/pub/36-28-0001/2022003/article/00003-eng.htm"
                target="_blank">
                [3]
              </Link>
            </sup>
          </Typography>
          {/* insert graph */}
        </BasicContainer>
        <BasicContainer ref={sec4Ref}>
          <Typography variant="body1">
            As your hours decrease, you continue to experience a monthly deficit
            when realistic living costs are subtracted from your income.
          </Typography>
          <Typography variant="body1">
            Realistic costs are measured by the extra costs that can bring joy
            to your life, like a meal at your favourite restaurant or the
            ability to take an uber home late at night. These extra expenses
            recognize the humanity of young people who are too often expected to
            get by on bare necessities.
          </Typography>
          <Typography variant="body1">
            The deficit that you fall into monthly represents that minimum wage
            is <strong>not</strong> a liveable wage.
          </Typography>
          <Typography variant="h5">
            Young Canadians across the country experience a $2 and $10 gap
            between minimum and liveable wage.
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>
          </Typography>
          <Typography variant="body1">
            Like the other young people across Canada who experience a monthly
            deficit, you must make changes to break even.
          </Typography>
          <Typography variant="body1">
            This means moving to the nearest urban centre to look for upskilling
            opportunities to move out of the minimum wage bracket.
          </Typography>
        </BasicContainer>
        <Car el={sec4Entry && sec4Entry.target} />
      </Grid>
    </section>
  );
};

export default forwardRef(Chap1);
