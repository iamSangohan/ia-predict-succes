import { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
import { rows } from 'data/transactionHistory';
import { Typography } from '@mui/material';
import ActionMenu from './ActionMenu';

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import IconifyIcon from 'components/base/IconifyIcon';

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'id',
    headerName: "Etudiant",
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 300,
    renderHeader: () => (
      <Typography variant="body2" fontWeight={600} ml={1}>
        Etudiant
      </Typography>
    ),
    renderCell: (params) => (
      <Stack ml={1} height={1} direction="column" alignSelf="center" justifyContent="center">
        <Typography variant="body2" fontWeight={500}>
          {params.value}
        </Typography>
      </Stack>
    ),
  },
  {
    field: 'category',
    headerName: 'Category',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 120,
  },
  {
    field: 'date',
    headerName: 'Date',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 120,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    editable: false,
    flex: 1,
    minWidth: 140,
    renderCell: (params) => {
      const color =
        params.value === 'Pending'
          ? 'warning'
          : params.value === 'Completed'
            ? 'success'
            : params.value === 'Failed'
              ? 'error'
              : 'info';
      return (
        <Stack direction="column" alignItems="center" justifyContent="center" height={1}>
          <Chip label={params.value} size="small" color={color} />
        </Stack>
      );
    },
  },
  {
    field: 'action',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    sortable: false,
    flex: 1,
    minWidth: 100,
    
    renderCell: (params) => <ActionMenu student_id={params.row.id} />, // Passer l'ID de la ligne comme paramètre par défaut
  },
];

interface TaskOverviewTableProps {
  searchText: string;
}

const TransactionHistoryTable = ({ searchText }: TaskOverviewTableProps) => {
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    // Faire les recherches dans la table en function de la valeur de searchText
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText]);

  return (
    <DataGrid
      apiRef={apiRef}
      density="standard"
      columns={columns}
      rows={rows}
      rowHeight={60}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      autosizeOptions={{
        includeOutliers: true,
        includeHeaders: false,
        outliersFactor: 1,
        expand: true,
      }}
      slots={{
        pagination: DataGridFooter,
      }}
      // checkboxSelection
      pageSizeOptions={[5]}
    />
  );
};

export default TransactionHistoryTable;
