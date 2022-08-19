import { Divider, Grid, Link, Typography } from '@mui/material';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import uuid4 from 'uuid4';

const expenses = [
  { name: 'Food', value: 832 },
  { name: 'Rent', value: 1788 },
  { name: 'Student Loans', value: 838 },
  { name: 'Transit Pass', value: 140 },
  { name: 'Fun', value: 22 },
];

const startingTotal = 1000;

const Receipt = ({ el }) => {
  const ref = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);
  const [total, setTotal] = useState(startingTotal);

  // console.log(currentItem);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const item = useTransform(scrollYProgress, [0, 1], [-5, expenses.length + 2]);

  useEffect(() => {
    item.onChange((v) => {
      setCurrentItem(Math.floor(v));
    });
  }, [item]);

  useEffect(() => {
    const newTotal = expenses.reduce(
      (prev, expense, i) => (i < currentItem ? prev - expense.value : prev),
      [startingTotal]
    );

    setTotal(newTotal);
  }, [currentItem]);

  return (
    <>
      {/* <div className="receipt-placeholder" /> */}
      <div className="receipt-container" ref={ref}>
        <div className="sticky-container">
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
          <Typography variant="body1">
            The costs of joy that are necessary to live a balanced life, provide
            more financial pressure that weighs heavily.
          </Typography>
          <motion.div className="receipt">
            <Grid p={3} container justifyContent="space-between">
              <Grid item>
                <Typography variant="h3">Checking</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" color={total >= 0 ? '#000' : 'error'}>
                  ${total}
                </Typography>
              </Grid>
            </Grid>
            <Divider variant="middle" sx={{ borderStyle: 'dashed' }} />
            {expenses.map((expense, i) => (
              <Grid
                key={uuid4()}
                p={3}
                container
                justifyContent="space-between"
                spacing={3}>
                <AnimatePresence>
                  {i >= currentItem ? (
                    <>
                      <Grid
                        key={uuid4()}
                        item
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i === currentItem ? 1 : 0 }}
                        exit={{ opacity: 0 }}>
                        <Typography variant="h3">{expense.name}</Typography>
                      </Grid>
                      <Grid
                        key={uuid4()}
                        item
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i === currentItem ? 1 : 0 }}
                        exit={{ opacity: 0 }}>
                        <Typography variant="h3" color="error">
                          -${expense.value}
                        </Typography>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid key={uuid4()} item component={motion.div}>
                        <Typography variant="h3">{expense.name}</Typography>
                      </Grid>
                      <Grid key={uuid4()} item component={motion.div}>
                        <Typography variant="h3" color="error">
                          -${expense.value}
                        </Typography>
                      </Grid>
                    </>
                  )}
                </AnimatePresence>
              </Grid>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
