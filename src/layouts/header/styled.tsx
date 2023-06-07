import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const HeaderLayoutStyle = styled(AppBar)`
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
`;
