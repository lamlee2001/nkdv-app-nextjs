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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import useHeader, { ITEM_LANGUAGE, ITEM_TAB_HEADER } from './useHeader';
import BookPage from '@/src/pages/book';

import { HeaderLayoutStyle } from './styled';

const HeaderLayout: React.FC = () => {
  const {
    anchorElNav,
    valueTab,
    anchorElLang,
    isShowModalBook,
    handleOpenNavMenu,
    handleOpenLangMenu,
    handleCloseNavMenu,
    handleCloseLangMenu,
    handleChange,
    setValueTab,
    switchLang,
    setIsShowModalBook,
  } = useHeader();

  const router = useRouter();

  const { t } = useTranslation();

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
                    {t(item.label.toLocaleLowerCase())}
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
            sx={{ flexGrow: 1, ml: 3, display: { xs: 'none', md: 'flex' } }}>
            {ITEM_TAB_HEADER.map((item, index) => (
              <Tab
                key={index}
                label={t(item.label.toLocaleLowerCase())}
                onClick={() => {
                  void router.push(item.url);
                }}
              />
            ))}
          </Tabs>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open lang">
              <IconButton onClick={handleOpenLangMenu} sx={{}}>
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="https://freesvg.org/img/tobias-Flag-of-the-United-Kingdom.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}>
              {ITEM_LANGUAGE.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    switchLang(item.value);
                    handleCloseLangMenu();
                  }}>
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Stack spacing={2} direction="row" sx={{ ml: '20px' }}>
            <Button variant="contained" className="btn-booking" onClick={() => setIsShowModalBook(true)}>
              <BookIcon className="book-icon" />
              {t('book')}
            </Button>
          </Stack>
        </Toolbar>
      </Container>

      <BookPage open={isShowModalBook} closable={() => setIsShowModalBook(false)} />
    </HeaderLayoutStyle>
  );
};

export default HeaderLayout;
