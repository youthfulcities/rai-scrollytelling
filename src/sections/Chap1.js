import { Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TypeWriterEffect from 'react-typewriter-effect';
import BasicContainer from '../components/BasicContainer';
import Car from '../components/Car';
import EmploymentChart from '../components/EmploymentGraph';

const Chap1 = ({ setCurrentEl }, ref) => {
  const [sec1Ref, sec1InView, sec1Entry] = useInView({ threshold: 0.5 });
  const [sec2Ref, sec2InView, sec2Entry] = useInView({ threshold: 0.5 });
  const [sec3Ref, sec3InView, sec3Entry] = useInView({ threshold: 0.5 });
  const [sec4Ref, sec4InView, sec4Entry] = useInView({ threshold: 0.5 });
  const [sec5Ref, sec5InView, sec5Entry] = useInView({ threshold: 0.5 });

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
  }, [sec1InView, sec2InView, sec3InView, sec4InView, sec5InView]);

  return (
    <section id="chap1" ref={ref}>
      <Grid
        container
        direction="column"
        sx={{
          minHeight: '100vh',
          height: '100%',
          backgroundColor: '#F6D9D7',
          background:
            'linear-gradient(180deg, rgba(214,217,177,1) 0%, rgba(246,217,215,1) 20%, rgba(246,217,215,1) 80%, rgba(246,217,215,1) 100%)',
        }}>
        <BasicContainer ref={sec1Ref} inView={sec1InView}>
          <Grid item sx={{ margin: 'auto', width: '40vw' }}>
            <img
              width="100%"
              src="/assets/images/Character_Question2.gif"
              alt="Person thinking with question marks above head."
            />
          </Grid>
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
        <BasicContainer ref={sec2Ref} inView={sec2InView}>
          <Typography variant="body1" pt={30}>
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
          <Grid
            container
            item
            pb={30}
            sx={{ margin: 'auto', width: '370px', position: 'relative' }}>
            <img
              width="100%"
              src="/assets/images/Char_Barista.png"
              alt="Person dressed as a barista with a speech bubble."
            />
            <Typography
              variant="h3"
              sx={{
                position: 'absolute',
                right: 0,
                top: '5px',
                textAlign: 'center',
                width: '200px',
                height: '100px',
                padding: '20px',
                boxSizing: 'border-box',
              }}>
              <TypeWriterEffect
                startDelay={2000}
                textStyle={{
                  fontSize: '1.25rem',
                  lineHeight: '1.5rem',
                  fontFamily: 'inherit',
                  fontWeight: 'inherit',
                }}
                multiText={[
                  'Hi there, how may I help you today?',
                  '',
                  'Is that almond or soy milk?',
                  '',
                  'For here or to go?',
                  '',
                  'Do you need a tray?',
                  '',
                  'Thank you, see you next time.',
                ]}
                scrollArea={sec2Entry && sec2Entry.target}
                multiTextDelay={1000}
              />
            </Typography>
          </Grid>
        </BasicContainer>
        <BasicContainer ref={sec3Ref} inView={sec3InView}>
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
          <EmploymentChart />
        </BasicContainer>
        <BasicContainer ref={sec4Ref} inView={sec4InView}>
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
        <Grid
          ref={sec5Ref}
          inView={sec5InView}
          sx={{ minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
          {sec5Entry && <Car el={sec5Entry.target} />}
        </Grid>
      </Grid>
    </section>
  );
};

export default forwardRef(Chap1);
