import styled, { css } from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';

import ResponsiveUI, { SIZE, SIZEH } from '@/src/constants/responsive';

const HeaderLayoutResponsive = css`
  ${ResponsiveUI.lessThanH(SIZEH.PAD3)} {
    content: 'PAD3';
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: 'PAD3 - XXL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'PAD3 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: 'PAD3 - XL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'PAD3 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: 'PAD3 - XL';
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'PAD3 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: 'PAD3 - MD';
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: 'PAD3 - SM';
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: 'PAD3 - XS';
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.PAD2)} {
    content: 'PAD2';
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: 'PAD2 - XXL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'PAD2 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: 'PAD2 - XL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'PAD2 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: 'PAD2 - XL';
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'PAD2 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: 'PAD2 - MD';
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: 'PAD2 - SM';
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: 'PAD2 - XS';
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.PAD1)} {
    content: 'PAD1';
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: 'PAD1 - XXL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'PAD1 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: 'PAD1 - XL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'PAD1 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: 'PAD1 - XL';
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'PAD1 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: 'PAD1 - MD';
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: 'PAD1 - SM';
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      .MuiStack-root {
        display: none;
      }
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.MAC16)} {
    content: 'MAC16';
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: 'MAC16 - XXL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'MAC16 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: 'MAC16 - XL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'MAC16 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: 'MAC16 - XL';
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'MAC16 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: 'MAC16 - MD';
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: 'MAC16 - SM';
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: 'MAC16 - XS';
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.MAC14)} {
    content: 'MAC14';
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: 'MAC14 - XXL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'MAC14 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: 'MAC14 - XL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'MAC14 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: 'MAC14 - XL';
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'MAC14 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: 'MAC14 - MD';
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: 'MAC14 - SM';
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: 'MAC14 - XS';
    }
  }
  ${ResponsiveUI.lessThanH(SIZEH.MAC13)} {
    content: 'MAC13';
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: 'MAC13 - XXL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'MAC13 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      content: 'MAC13 - XL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'MAC13 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      content: 'MAC13 - XL';
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'MAC13 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      content: 'MAC13 - MD';
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
      content: 'MAC13 - SM';
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
      content: 'MAC13 - XS';
    }
  }
`;

export const HeaderLayoutStyle = styled(AppBar)`
  position: fixed;
  z-index: 2;

  .container {
    max-width: 100%;

    .title-logo {
      font-family: 'monospace';
      font-weight: 700;
      letter-spacing: 4px;
      color: inherit;
    }

    .tab-pc {
      background-color: transparent;

      .MuiButtonBase-root {
        color: #ffffff;
      }

      .MuiTabs-indicator {
        background-color: #ffffff;
      }

      .MuiTabs-flexContainer {
        justify-content: flex-start;
      }
    }
  }

  ${HeaderLayoutResponsive}
`;

export const BoxEmpty = styled(Box)`
  height: 64px;

  @media only screen and (max-width: 768px) {
    height: 56px;
  }
`;
