import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

interface StudentInfoProps {
  id: number | string;
  label: string;
  value: string;
  icon: string;
  color: string;
}

const StudentInfos: StudentInfoProps[] = [
  {
    id: 1,
    label: 'Nom complet',
    value: 'John Doe',
    icon: 'ic:outline-person',
    color: 'primary.main',
  },
  {
    id: 2,
    label: 'Date de naissance',
    value: '15 Mars 1998',
    icon: 'ic:outline-event',
    color: 'success.main',
  },
  {
    id: 3,
    label: 'Adresse',
    value: '123 Rue de l\'Université, Paris',
    icon: 'ic:outline-home',
    color: 'warning.main',
  },
  {
    id: 4,
    label: 'Email',
    value: 'johndoe@example.com',
    icon: 'ic:outline-email',
    color: 'error.main',
  },
  {
    id: 5,
    label: 'Numéro de téléphone',
    value: '+33 6 12 34 56 78',
    icon: 'ic:outline-phone',
    color: 'secondary.main',
  },
  {
    id: 6,
    label: 'Filière',
    value: 'Informatique',
    icon: 'ic:outline-school',
    color: 'info.main',
  },
];

const StudentInfo = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography mb={3} variant="h5">
        Informations personnelles de l'étudiant
      </Typography>

      <Grid container spacing={2}>
        {StudentInfos.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Stack mb={3} spacing={2} justifyContent="flex-start" alignItems="center">
              <Stack
                alignItems="center"
                justifyContent="center"
                height={48}
                width={48}
                bgcolor="info.dark"
                borderRadius="50%"
              >
                <IconifyIcon icon={item.icon} color={item.color} fontSize="h4.fontSize" />
              </Stack>
              <Stack direction="column" alignItems="left">
                <Typography variant="body1" fontWeight={700}>
                  {item.label}
                </Typography>
                <Typography variant="caption" color="text.disabled" fontWeight={500}>
                  {item.value}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Stack justifyContent="flex-end" alignItems="center">
        <Button
          variant="text"
          size="medium"
          sx={{ color: 'primary.main', fontWeight: 700 }}
          endIcon={<IconifyIcon icon="ic:baseline-east" />}
        >
          Modifier les informations
        </Button>
      </Stack>
    </Paper>
  );
};

export default StudentInfo;