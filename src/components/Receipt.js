import { Divider, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import uuid4 from 'uuid4';

const Receipt = ({ inView }) => {
  const total = 1000;

  const expenses = [
    { name: 'Food', value: 832 },
    { name: 'Rent', value: 1788 },
    { name: 'Student Loans', value: 838 },
    { name: 'Transit Pass', value: 140 },
    { name: 'Fun', value: 22 },
  ];
  return (
    <div className="receipt-container">
      <motion.div className="receipt">
        <Grid p={3} container justifyContent="space-between">
          <Grid item>
            <Typography variant="h3">Checking</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">${total}</Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ borderStyle: 'dashed' }} />
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
                -${expense.value}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </motion.div>
    </div>
  );
};

export default Receipt;
