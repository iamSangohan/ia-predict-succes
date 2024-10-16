import { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import TransactionHistoryTable from './TransactionHistoryTable';
import { StudentInfo } from 'services/modele/modele';

interface TransactionHistoryProps {
  rows: StudentInfo[];
}

const TransactionHistory = ({ rows }: TransactionHistoryProps) => {
  const [searchText, setSearchText] = useState('');
  console.log("rows", rows);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Paper sx={{ px: 0 }}>
      <Stack
        px={3.5}
        mb={5}
        spacing={{ xs: 2, sm: 0 }}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4" minWidth={200}>
          Liste des étudiants
        </Typography>
        <TextField
          variant="filled"
          size="small"
          placeholder="Search Task"
          value={searchText}
          onChange={handleInputChange}
          sx={{ width: 1, maxWidth: 250 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="eva:search-fill" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box mt={2} width={1000} margin="auto">
        <TransactionHistoryTable searchText={searchText} rows={rows} />
      </Box>
    </Paper>
  );
};

export default TransactionHistory;
