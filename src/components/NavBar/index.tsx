import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';

interface Pages {
  title: string,
  link: string
}

const pages = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Service',
    link: '/service'
  },
  {
    title: 'Projects',
    link: '/projects'
  },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const ButtonStyle = {
    backgroundColor: 'white', color: 'black', fontWeight: 700,
    transition: 'background-color color 0.8s ease',
    '&:hover': {
      backgroundColor: 'gray',
      color: 'white'
    },
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Toolbar >
        <PersonIcon sx={{ display: { xs: 'flex' } }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          VASEEKARAN
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
          {pages.map((page: Pages) => (
            <Button
              key={page.title}
              href={page.link}
              sx={{ my: 2, color: 'white', display: 'block', ":hover": { color: 'gray' } }}
            >
              {page.title}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Button href='/contact' variant="contained" sx={ButtonStyle} >
            Contact Me
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page: Pages) => (
              <MenuItem key={page.title} href={page.link}>
                <Typography textAlign="center">{page.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}