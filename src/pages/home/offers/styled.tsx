import styled, { css } from 'styled-components';
import { Box, Grid } from '@mui/material';

import ResponsiveUI, { SIZE, SIZEH } from '@/src/constants/responsive';

const OffersResponsive = css`
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
      .grid-item-offers {
        margin-top: 20px;
        padding: 0 300px;
      }
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
      .grid-item-offers {
        margin-top: 20px;
        padding: 0 100px;
      }
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
      .grid-item-offers {
        margin-top: 20px;
        padding: 0 24px;

        .image-offers {
          height: 154px !important;
          width: 154px !important;
        }
      }
    }
    ${ResponsiveUI.lessThan(SIZE.SM)} {
    }
    ${ResponsiveUI.lessThan(SIZE.XS)} {
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

export const OffersStyle = styled(Grid)`
  position: relative;
  padding: 20px 0;
  visibility: visible;
  opacity: 1;
  background: linear-gradient(0deg, rgba(226, 242, 242, 1) 0%, rgba(17, 163, 193, 1) 100%);

  .grid-item {
    z-index: 1;
    padding: 0 24px;

    .text-title {
      font-size: 24px;
      font-weight: 700;
    }

    .text-2 {
      color: #ec1a23;
    }
  }

  .grid-item-offers {
    margin-top: 20px;
    padding: 0 300px;

    .item-offers {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      .image-offers {
        height: 264px;
        width: 264px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        box-shadow: 0 2px 3px 1px rgb(0 0 0 / 50%);
      }
    }
  }

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .text-affter,
    .text-before {
      height: 1px;
      width: 100px;
    }

    .text-affter {
      margin-left: 5px;
      background: linear-gradient(to left, #00efef 0%, #141e19 100%);
    }

    .text-before {
      margin-right: 5px;
      background: linear-gradient(to right, #00efef 0%, #141e19 100%);
    }

    .image-tooth {
      height: 30px;
      width: 30px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: rgb(255 255 255 / 75%);
  }

  ${OffersResponsive}
`;

export const BoxStyle = styled(Box)`
  padding: 10px;
  background-color: #fff;
  border-top: 3px solid #ec1a23;
  border-radius: 10px;
  margin-top: 10px;
  width: 264px;
  box-shadow: 0 2px 3px 1px rgb(0 0 0 / 50%);

  .title-offers {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 700;
  }

  .icon-arrow {
    font-size: 10px;
    color: red;
    margin-right: 5px;
  }

  .divider {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 768px) {
    width: 154px;
  }
`;
