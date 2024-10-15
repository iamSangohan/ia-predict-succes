import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import IconifyIcon from 'components/base/IconifyIcon';
import Typography from '@mui/material/Typography';

interface TasksProps {
  id: number | string;
  task: string;
  schedule: string;
}

const tasks: TasksProps[] = [
  {
    id: 1,
    task: 'Introduction to React',
    schedule: '09:00 AM - 10:00 AM',
  },
  {
    id: 2,
    task: 'Advanced TypeScript',
    schedule: '10:30 AM - 11:30 AM',
  },
  {
    id: 3,
    task: 'GraphQL Basics',
    schedule: '01:00 PM - 02:00 PM',
  },
  {
    id: 4,
    task: 'State Management with Redux',
    schedule: '02:30 PM - 03:30 PM',
  },
  {
    id: 5,
    task: 'Building REST APIs with Node.js',
    schedule: '04:00 PM - 05:00 PM',
  },
];

const CourseHistory = () => {
  return (
    <Paper sx={{ height: 'auto' }}>
      <Typography mb={3.5} variant="h2">
        Historique des cours
      </Typography>

      {tasks.map((item) => {
        return (
          <Stack key={item.id} mb={2.5} spacing={3} alignItems="center">
            <Box height={70} width={4} bgcolor="primary.main" borderRadius={2} />

            <Stack direction="column">
              <Typography variant="body1" fontWeight={700}>
                {item.task}
              </Typography>
              <Typography variant="caption" fontWeight={500} color="text.disabled">
                {item.schedule}
              </Typography>
            </Stack>
          </Stack>
        );
      })}

      {/* <Stack justifyContent="flex-end">
        <Button
          variant="text"
          size="medium"
          sx={{ mt: 0.65, mr: -1, color: 'primary.main', fontWeight: 700 }}
          endIcon={<IconifyIcon icon="ic:baseline-east" />}
        >
          View all Tasks
        </Button>
      </Stack> */}
    </Paper>
  );
};

export default CourseHistory;
