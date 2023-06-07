declare namespace HeaderLayout {
  export interface HeaderHook {
    anchorElNav: HTMLElement | null;
    anchorElUser: HTMLElement | null;
    anchorElLang: HTMLElement | null;
    valueTab: number;
    setValueTab: (value: number) => void;
    handleOpenNavMenu: (val: React.MouseEvent<HTMLElement>) => void;
    handleOpenUserMenu: (val: React.MouseEvent<HTMLElement>) => void;
    handleOpenLangMenu: (val: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    handleCloseUserMenu: () => void;
    handleCloseLangMenu: () => void;
    handleChange: (event: React.SyntheticEvent, val: number) => void;
    switchLang: (val: string) => void;
  }
}
