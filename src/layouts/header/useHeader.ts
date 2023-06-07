import { useState } from 'react';

import { ROUTER_PATH } from '@/src/constants/routers';

export const ITEM_TAB_HEADER = [
  { label: 'Home', url: ROUTER_PATH.HOME },
  { label: 'Introduction', url: ROUTER_PATH.INTRODUCTION },
  { label: 'Price list', url: ROUTER_PATH.PRICE_LIST },
  { label: 'Services', url: ROUTER_PATH.SERVICES },
  { label: 'Book', url: ROUTER_PATH.BOOK },
  { label: 'contact', url: ROUTER_PATH.CONTACT },
];

export const SETTINGS = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useHeader = (): HeaderLayout.HeaderHook => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [valueTab, setValueTab] = useState(0);

  const handleOpenNavMenu = (val): void => {
    setAnchorElNav(val.currentTarget);
  };
  const handleOpenUserMenu = (val): void => {
    setAnchorElUser(val.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleChange = (event: React.SyntheticEvent, newValueTab: number): void => {
    setValueTab(newValueTab);
  };

  return {
    anchorElNav,
    anchorElUser,
    valueTab,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    setValueTab,
    handleChange,
  };
};

export default useHeader;
