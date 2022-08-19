import { Grid, Link, Typography } from '@mui/material';
import { forwardRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BasicContainer from '../components/BasicContainer';
import InflationGraph from '../components/InflationGraph';
import WageGraph from '../components/WageGraph';

const Chap2 = ({ setCurrentEl }, ref) => {
  const [sec1Ref, sec1InView, sec1Entry] = useInView({ threshold: 0.5 });
  const [sec2Ref, sec2InView, sec2Entry] = useInView({ threshold: 0.5 });
  const [sec3Ref, sec3InView, sec3Entry] = useInView({ threshold: 0.5 });
  const [sec4Ref, sec4InView, sec4Entry] = useInView({ threshold: 0.5 });
  const [sec5Ref, sec5InView, sec5Entry] = useInView({ threshold: 0.5 });
  const [sec6Ref, sec6InView, sec6Entry] = useInView({ threshold: 0.5 });
  const [sec7Ref, sec7InView, sec7Entry] = useInView({ threshold: 0.5 });

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
    if (sec7InView) {
      setCurrentEl(sec7Entry.target);
    }
  }, [
    sec1InView,
    sec2InView,
    sec3InView,
    sec4InView,
    sec5InView,
    sec6InView,
    sec7InView,
  ]);

  return (
    <section id="chap2" ref={ref}>
      <Grid
        container
        direction="column"
        sx={{
          minHeight: '100vh',
          backgroundColor: '#FBD166',
          background:
            'linear-gradient(180deg, rgba(246,217,215,1) 0%, rgba(251,209,102,1) 20%, rgba(251,209,102,1) 80%, rgba(216,213,123,1) 100%)',
        }}>
        <BasicContainer ref={sec1Ref} inView={sec1InView}>
          <Typography variant="h2" align="center" mb="2vh">
            Chapter 2: Searching for work
          </Typography>
          <Typography variant="body1">
            It has now been several months since the last lockdown and you take
            the moment of stability to move to the urban centre near you.
            Toronto.
          </Typography>
          <Typography variant="body1">
            As you adjust to the city the pressure of inflation with increased
            living costs, mounts.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec2Ref} inView={sec2InView}>
          <Typography variant="body1">
            The price of goods has increased 8.1% over the past year across
            Canada.
            <sup>
              <Link
                href="https://www150.statcan.gc.ca/n1/daily-quotidien/220720/dq220720a-eng.htm"
                target="_blank">
                [4]
              </Link>
            </sup>{' '}
            This increased cost of living makes it difficult to continue working
            in the service industry.
          </Typography>
          <InflationGraph />
        </BasicContainer>
        <BasicContainer ref={sec3Ref} inView={sec3InView}>
          <Typography variant="h5">
            Toronto has an estimated 35% to 36% of young people working in the
            service sector,
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
            which is notorious for paying the lowest wages.
          </Typography>
          <Typography variant="body1">
            The minimum wage in Toronto is $15.50 an hour, but a liveable wage
            is $23.62 an hour.
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec4Ref} inView={sec4InView}>
          <Typography variant="body1">
            To keep up with the cost of living in your new city, you begin to
            consider transitioning to working in the trade sector, as you
            realize it might be the only feasible option for you if you want to
            increase your monthly income. The trade industry is male dominated
            across Canada.
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
            This is reflected in the physical environment with many work sites
            without bathrooms.
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec5Ref} inView={sec5InView}>
          <Typography variant="body1">
            This isn’t the only factor that perpetuates affordability
            differences between genders. People who menstruate average spending
            $6000 in their lifetime on menstruation products
            <sup>
              <Link
                href="https://www.cpha.ca/period-poverty-canada-and-around-globe"
                target="_blank">
                [5]
              </Link>
            </sup>{' '}
            resulting in 21% of Canadians stating that they have trouble
            affording period products.
            <sup>
              <Link
                href="https://www.multivu.com/players/English/9052951-menstrual-health-day-2022/"
                target="_blank">
                [6]
              </Link>
            </sup>{' '}
            Women also average spending $35.65 more per month than men on
            similar products.
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
          </Typography>
        </BasicContainer>
        <BasicContainer ref={sec6Ref} inView={sec6InView}>
          <Typography variant="h5">
            Gender pay equity is also not a reality in Canadian cities. Young
            men continue to earn a higher income than young women in every
            Canadian city.
            <sup>
              <Link
                href="https://youthfulcities.com/urban-indexes/rai-2022/"
                target="_blank">
                [2]
              </Link>
            </sup>{' '}
          </Typography>

          <Typography variant="body1">
            The different wage opportunities available to our young people
            reveal the sexist and racial biases embedded in our culture.
          </Typography>
          <WageGraph />
        </BasicContainer>
        <BasicContainer ref={sec7Ref} inView={sec7InView}>
          <Typography variant="h5">
            Canada has racial gaps varying from 8.1% to 19.7% in all provinces.
            <sup>
              <Link
                href="https://www.conferenceboard.ca/hcp/provincial/society/racial-gap.aspx"
                target="_blank">
                [7]
              </Link>
            </sup>{' '}
          </Typography>
          <Typography variant="body1">
            These statistics represent the extent that youth in the role of a
            visible minority are disadvantaged financially at the very start of
            their adult life.
          </Typography>
        </BasicContainer>
      </Grid>
    </section>
  );
};

export default forwardRef(Chap2);
