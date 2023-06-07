import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';

import useHeader, { ITEM_TAB_HEADER, SETTINGS } from './useHeader';

import { HeaderLayoutStyle } from './styled';

const HeaderLayout: React.FC = () => {
  const {
    anchorElNav,
    anchorElUser,
    valueTab,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleChange,
    setValueTab,
  } = useHeader();

  const router = useRouter();

  return (
    <HeaderLayoutStyle position="static">
      <Container maxWidth="xl" className="container">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="title-logo"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}>
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
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
              }}>
              {ITEM_TAB_HEADER.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={item.url} onClick={() => setValueTab(index)}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            className="title-logo"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}>
            LOGO
          </Typography>
          <Tabs
            className="tab-pc"
            value={valueTab}
            onChange={handleChange}
            centered
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {ITEM_TAB_HEADER.map((item, index) => (
              <Tab
                key={index}
                label={item.label}
                onClick={() => {
                  void router.push(item.url);
                }}
              />
            ))}
          </Tabs>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://tapchilamdep.com/wp-content/uploads/2019/10/Rose-887x1024.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {SETTINGS.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </HeaderLayoutStyle>
  );
};

export default HeaderLayout;
