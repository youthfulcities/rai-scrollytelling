import { Divider, Grid, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import uuid4 from 'uuid4';

const Receipt = ({ inView }) => {
  const expenses = [
    { name: 'Food', value: 832 },
    { name: 'Rent', value: 1788 },
    { name: 'Student Loans', value: 838 },
    { name: 'Transit Pass', value: 140 },
    { name: 'Fun', value: 22 },
  ];
  return (
    <AnimatePresence>
      <div className="receipt-container">
        <motion.div
          initial={{ opacity: 0, y: 1000, scale: 0.1 }}
          className="receipt"
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0,
            y: 0,
          }}
          transition={{ duration: 2, ease: 'backInOut' }}
          exit={{ opacity: 0, scale: 0.1 }}>
          <Grid p={3} container justifyContent="space-between">
            <Grid item>
              <Typography variant="h3">Checking</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">$832</Typography>
            </Grid>
          </Grid>
          <Divider />
          {expenses.map((expense) => (
            <Grid
              key={uuid4()}
              p={3}
              container
              justifyContent="space-between"
              spacing={3}>
              <Grid item>
                <Typography variant="h3">{expense.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" color="error">
                  ${expense.value}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Receipt;
