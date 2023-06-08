declare namespace HeaderLayout {
  export interface HeaderHook {
    anchorElNav: HTMLElement | null;
    anchorElLang: HTMLElement | null;
    valueTab: number;
    isShowModalBook: boolean;
    setValueTab: (value: number) => void;
    handleOpenNavMenu: (val: React.MouseEvent<HTMLElement>) => void;
    handleOpenLangMenu: (val: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    handleCloseLangMenu: () => void;
    handleChange: (event: React.SyntheticEvent, val: number) => void;
    switchLang: (val: string) => void;
    setIsShowModalBook: (val: boolean) => void;
  }
}
