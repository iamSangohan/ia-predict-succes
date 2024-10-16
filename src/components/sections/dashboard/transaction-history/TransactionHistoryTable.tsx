import { useEffect, useState } from 'react';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
// import { rows } from 'data/transactionHistory';
import { Typography } from '@mui/material';
import ActionMenu from './ActionMenu';
import { api } from 'services/api/api';

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import IconifyIcon from 'components/base/IconifyIcon';

interface StudentInfo {
  id: number;
  id_student: number;
  gender: string;
  region: string;

}

const columns: GridColDef<StudentInfo>[] = [
  {
    field: 'id_student',
    headerName: "Etudiant",
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 200,
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
    field: 'code_module',
    headerName: 'Module',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 120,
  },
  // {
  //   field: 'final_result',
  //   headerName: 'Résultat Final',
  //   headerAlign: 'center',
  //   editable: false,
  //   flex: 1,
  //   minWidth: 140,
  //   renderCell: (params) => {
  //     const color =
  //       params.value === 'Pass'
  //         ? 'success'
  //         : params.value === 'Fail'
  //           ? 'error'
  //           : 'info';
  //     return (
  //       <Stack direction="column" alignItems="center" justifyContent="center" height={1}>
  //         <Chip label={params.value} size="small" color={color} />
  //       </Stack>
  //     );
  //   },
  // },
  {
    field: 'region',
    headerName: 'Région',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 160,
  },
  {
    field: 'gender',
    headerName: 'Genre',
    editable: false,
    align: 'left',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'highest_education',
    headerName: 'Éducation la plus élevée',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 180,
  },
  {
    field: 'action',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    sortable: false,
    flex: 1,
    minWidth: 100,
    renderCell: (params) => <ActionMenu student={params.row} />,
  },
];

interface TaskOverviewTableProps {
  searchText: string;
  rows: StudentInfo[];
}


const TransactionHistoryTable = ({ searchText }: TaskOverviewTableProps, rows:StudentInfo[]) => {
  const apiRef = useGridApiRef<GridApi>();
  console.log("rowsTab", rows);
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

  useEffect(() => {
    // Faire les recherches dans la table en function de la valeur de searchText
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText]);

  return (
    <DataGrid
      apiRef={apiRef}
      density="standard"
      columns={columns}
      rows={student}
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
