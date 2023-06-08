import { useState } from 'react';

import { ROUTER_PATH } from '@/src/constants/routers';
import { useAppDispatch } from '@/src/stores';
import { changeLanguage } from '@/src/stores/app/i18n/i18n.action';

export const ITEM_TAB_HEADER = [
  { label: 'Home', url: ROUTER_PATH.HOME },
  { label: 'Introduction', url: ROUTER_PATH.INTRODUCTION },
  { label: 'Pricing', url: ROUTER_PATH.PRICE_LIST },
  { label: 'Services', url: ROUTER_PATH.SERVICES },
  { label: 'Book', url: ROUTER_PATH.BOOK },
  { label: 'Contact', url: ROUTER_PATH.CONTACT },
];

export const SETTINGS = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const ITEM_LANGUAGE = [
  { label: 'Vietnamese', value: 'vi' },
  { label: 'English', value: 'en' },
];

const useHeader = (): HeaderLayout.HeaderHook => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const [valueTab, setValueTab] = useState(0);

  const dispatch = useAppDispatch();

  const handleOpenNavMenu = (val): void => {
    setAnchorElNav(val.currentTarget);
  };
  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (val): void => {
    setAnchorElUser(val.currentTarget);
  };
  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleOpenLangMenu = (val): void => {
    setAnchorElLang(val.currentTarget);
  };
  const handleCloseLangMenu = (): void => {
    setAnchorElLang(null);
  };

  const handleChange = (event: React.SyntheticEvent, newValueTab: number): void => {
    setValueTab(newValueTab);
  };

  const switchLang = (val: string): void => {
    void dispatch(changeLanguage(val));
  };

  return {
    anchorElNav,
    anchorElUser,
    valueTab,
    anchorElLang,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    setValueTab,
    handleChange,
    handleOpenLangMenu,
    handleCloseLangMenu,
    switchLang,
  };
};

export default useHeader;
