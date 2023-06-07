declare namespace HeaderLayout {
  export interface HeaderHook {
    anchorElNav: HTMLElement | null;
    anchorElUser: HTMLElement | null;
    valueTab: number;
    setValueTab: (value: number) => void;
    handleOpenNavMenu: (val: React.MouseEvent<HTMLElement>) => void;
    handleOpenUserMenu: (val: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    handleCloseUserMenu: () => void;
    handleChange: (event: React.SyntheticEvent, val: number) => void;
  }
}
