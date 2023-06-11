import React from 'react';
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import ButtonBooking from '@/src/components/buttonBooking';
import useWindowSize from '@/src/hooks/useWindowSize/useWindowSize';
import useHeader, { ITEM_LANGUAGE, ITEM_TAB_HEADER } from './useHeader';
import BookPage from '@/src/pages/book';
import { useAppSelector } from '@/src/stores';

import NKDV_LOGO from 'src/assets/image/nkdv_image.png';
import UNITED_IMAGE from 'src/assets/image/united-image.png';
import VIETNAM_IMAGE from 'src/assets/image/quoc-ky-viet-nam.jpg';
import { BoxEmpty, HeaderLayoutStyle } from './styled';
import { LANGUAGE } from '@/src/constants/config';

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

  const { isMobile } = useWindowSize();

  const { language } = useAppSelector(state => state.app.i18n);

  return (
    <>
      <HeaderLayoutStyle position="static">
        <Container maxWidth="xl" className="container">
          <Toolbar disableGutters>
            <Avatar
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
              className="logo-image"
              variant="square"
              alt="Remy Sharp"
              src={NKDV_LOGO.src}
            />

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
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                      setValueTab(index);
                      void router.push(item.url);
                    }}>
                    <Typography>{t(item.label.toLocaleLowerCase())}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Avatar
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
              }}
              className="logo-image"
              variant="square"
              alt="Remy Sharp"
              src={NKDV_LOGO.src}
            />

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
                <IconButton onClick={handleOpenLangMenu}>
                  <Avatar
                    className="avt-language"
                    variant="square"
                    alt="Remy Sharp"
                    src={language === LANGUAGE.VI ? VIETNAM_IMAGE.src : UNITED_IMAGE.src}
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

            <Stack spacing={2} direction="row" sx={{ ml: '20px', display: { xs: 'none', md: 'flex' } }}>
              <ButtonBooking buttonProps={{ onClick: () => setIsShowModalBook(true) }} />
            </Stack>
          </Toolbar>
        </Container>

        <BookPage open={isShowModalBook} closable={() => setIsShowModalBook(false)} />
      </HeaderLayoutStyle>

      <BoxEmpty className="empty" />
      {isMobile ? <ButtonBooking buttonProps={{ onClick: () => setIsShowModalBook(true) }} /> : <React.Fragment />}
    </>
  );
};

export default HeaderLayout;
