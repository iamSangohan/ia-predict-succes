import { MenuItem } from 'routes/sitemap';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconifyIcon from 'components/base/IconifyIcon';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ListItem = ({ subheader, icon, path }: MenuItem) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname === path);
  }, [location.pathname, path]);

  return (
    <ListItemButton
      component={Link}
      href={path}
      sx={{
        mb: 2.5,
        bgcolor: active ? 'primary.main' : null,
        '&:hover': {
          bgcolor: active ? 'primary.main' : null,
        },
      }}
    >
      <ListItemIcon>
        {icon && (
          <IconifyIcon
            icon={icon}
            fontSize="h4.fontSize"
            sx={{
              color: active ? 'info.light' : null,
            }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        primary={subheader}
        sx={{
          '& .MuiListItemText-primary': {
            color: active ? 'info.light' : null,
          },
        }}
      />
    </ListItemButton>
  );
};

export default ListItem;
