import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';

interface ActionMenuProps {
  student: {
    id_student: string | number;
  };
}

const ActionMenu: React.FC<ActionMenuProps> = ({ student }) => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate(`/students/${student.id_student}`, { state: { student } });
  };

  return (
    <Box pr={2}>
      <IconButton
        onClick={handleIconClick}
        sx={{ p: 0.75, border: 'none', bgcolor: 'transparent !important' }}
        size="medium"
      >
        <IconifyIcon icon="solar:eye-bold" color="text.primary" />
      </IconButton>
    </Box>
  );
};

export default ActionMenu;
