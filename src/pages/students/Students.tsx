import Grid from '@mui/material/Grid';
// import TopCards from 'components/sections/dashboard/top-cards';
// import AvatarCard from 'components/sections/dashboard/avatar-card';
// import TotalSpent from 'components/sections/dashboard/total-spent';
// import Balance from 'components/sections/dashboard/balance';
// import SpentThisMonth from 'components/sections/dashboard/spent-this-month';
// import Transactions from 'components/sections/dashboard/transactions';
// import Tasks from 'components/sections/dashboard/tasks';
// import Earnings from 'components/sections/dashboard/earnings';
// import CreditBalance from 'components/sections/dashboard/credit-balance';
import TransactionHistory from 'components/sections/dashboard/transaction-history';
import { useEffect, useState } from 'react';
import { StudentInfo } from "../../services/modele/modele"
import { api } from 'services/api/api';
const Students = () => {
  const [student, setStudent] = useState<StudentInfo[]>([]); // Initialize as an empty array

  const fetchStudent = async () => {
    try {
      const response = await api.getAllStudent();
      console.log(response.data);
      setStudent(response.data); // Make sure response.data is an array of StudentInfo
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchStudent();
  }, []);
  
  return (
    <Grid container spacing={2.5}>
      {/* <Grid item xs={12}>
        <TopCards />
      </Grid>

      <Grid item xs={12} md={8}>
        <TotalSpent />
      </Grid>

      <Grid item xs={12} md={4}>
        <AvatarCard />
      </Grid>

      <Grid item xs={12} md={8}>
        <Balance />
      </Grid>

      <Grid item xs={12} md={4}>
        <SpentThisMonth />
      </Grid>

      <Grid item xs={12} md={4}>
        <Transactions />
      </Grid>

      <Grid item xs={12} md={4}>
        <Tasks />
      </Grid>

      <Grid item xs={12} md={4}>
        <Earnings />
      </Grid>

      <Grid item xs={12} md={4}>
        <CreditBalance />
      </Grid> */}

      <Grid item xs={12}>
        <TransactionHistory  rows={student} />
      </Grid>
    </Grid>
  );
};

export default Students;
