import styled, { css } from 'styled-components';
import { Grid } from '@mui/material';

import ResponsiveUI, { SIZE, SIZEH } from '@/src/constants/responsive';

const recommendStyle = css`
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
      .content {
        padding: 20px;
        height: auto;

        .grid-slide {
          padding: 0;
          margin-bottom: 20px;
          height: 300px;
        }

        .grid-card {
          .grid-card-container {
            .item-card {
              max-width: calc(100% / 2 - 12px);
            }
          }
        }
      }

      .text-sub-title {
        padding: 0 50px;
      }
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
      content: 'PAD1 - XS';
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

export const WrapperStyle = styled(Grid)`
  padding: 20px 0;
  background: #ffffff;

  .text-title {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
  }

  .grid-sub-title {
    display: flex;
    justify-content: center;

    .text-sub-title {
      font-size: 16px;
      font-weight: 300;
      width: 560px;
    }
  }

  .content {
    padding: 20px 200px;
    height: 370px;

    .grid-slide {
      padding: 0 20px;
      padding-bottom: 18px;

      div {
        height: 100%;
      }

      .image-slider {
        border: 2px solid #1976d2;
        width: 100%;
      }
    }

    .grid-card {
      display: flex;

      .grid-card-container {
        justify-content: space-between;

        .bg-blue {
          background: #1976d2;
        }

        .item-card {
          border: 2px solid #1976d2;
          max-width: calc(100% / 3 - 12px);
          margin-bottom: 18px;
          padding: 10px;

          .image-card {
            height: 85px;
            width: 85px;
          }

          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .color-blue {
            color: #1976d2;
          }

          .color-white {
            color: #ffffff;
          }
        }
      }
    }
  }

  ${recommendStyle}
`;
