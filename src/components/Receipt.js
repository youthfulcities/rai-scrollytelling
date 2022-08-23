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
  { name: 'Rent', value: 2057.99 },
  { name: 'Dining out', value: 392.0 },
  { name: 'Groceries', value: 302.36 },
  { name: 'Phone & internet', value: 192.63 },
  { name: 'Entertainment', value: 132.29 },
  { name: 'Health and fitness', value: 61.59 },
  { name: 'Transportation', value: 279.0 },
  { name: 'Subscriptions', value: 75.12 },
];

const startingTotal = 1000.0;

const Receipt = () => {
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
      (prev, expense, i) => (i <= currentItem ? prev - expense.value : prev),
      [startingTotal]
    );

    setTotal(newTotal);
  }, [currentItem]);

  return (
    <>
      {/* <div className="receipt-placeholder" /> */}
      <div className="receipt-container" ref={ref}>
        <div className="sticky-container">
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
          <motion.div
            className="receipt"
            style={{
              backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/images/receipt.png`})`,
            }}>
            <Grid
              p={3}
              container
              justifyContent="space-between"
              sx={{ mixBlendMode: 'multiply' }}>
              <Grid item>
                <Typography variant="h3">Checking</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" color={total >= 0 ? '#000' : 'error'}>
                  ${Number.parseFloat(total).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <Divider variant="middle" sx={{ borderStyle: 'dashed' }} />
            {expenses.map((expense, i) => (
              <Grid
                key={uuid4()}
                px={3}
                py={1.5}
                container
                sx={{ mixBlendMode: 'multiply' }}
                justifyContent="space-between"
                spacing={1}>
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
