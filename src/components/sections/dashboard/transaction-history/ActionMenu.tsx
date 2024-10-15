// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
// import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';

interface ActionMenuProps {
  student_id: string | number; // or the appropriate type
}

const ActionMenu: React.FC<ActionMenuProps> = ({ student_id }) => {
  // const navigate = useNavigate();

  const handleIconClick = () => {
    console.log(student_id);

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