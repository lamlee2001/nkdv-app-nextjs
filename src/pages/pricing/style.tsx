import styled, { css } from 'styled-components';
import Grid from '@mui/material/Grid';

import ResponsiveUI, { SIZE, SIZEH } from '@/src/constants/responsive';

import IMAGE_PRICE from 'src/assets/image/pricing_image.jpg';
import PRICING_IMAGE from 'src/assets/image/image_pricing.png';

const pricingResponsive = css`
  ${ResponsiveUI.lessThanH(SIZEH.PAD3)} {
    content: 'PAD3';
    ${ResponsiveUI.lessThan(SIZE.XXL2)} {
      content: 'PAD3 - XXL2';
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'PAD3 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
      .content {
        padding: 20px 150px;
      }
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'PAD3 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
      .content {
        padding: 20px 100px;
      }
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'PAD3 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
      .content {
        padding: 20px;
      }
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
    }
    ${ResponsiveUI.lessThan(SIZE.XXL)} {
      content: 'PAD2 - XXL';
    }
    ${ResponsiveUI.lessThan(SIZE.XL2)} {
    }
    ${ResponsiveUI.lessThan(SIZE.XL1)} {
      content: 'PAD2 - XL1';
    }
    ${ResponsiveUI.lessThan(SIZE.XL)} {
    }
    ${ResponsiveUI.lessThan(SIZE.LG)} {
      content: 'PAD2 - LG';
    }
    ${ResponsiveUI.lessThan(SIZE.MD)} {
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
      .banner-pricing {
        height: 200px;
      }

      .content {
        padding: 20px;

        .grid-left {
          .grid-image {
            height: 150px;
          }
        }

        .grid-right {
          display: none;
        }
      }
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

export const PricingPageStyle = styled(Grid)`
  .banner-pricing {
    height: 500px;
    background-image: url(${PRICING_IMAGE.src});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .title {
      position: absolute;
      color: #ffffff;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      display: flex;
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: 1px 1px 3px rgb(0 0 0 / 50%);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      background-color: rgb(41 41 41 / 59%);
    }
  }

  .content {
    padding: 20px 300px;

    .grid-left {
      padding-right: 20px;

      .grid-image {
        background-image: url(${IMAGE_PRICE.src});
        height: 300px;
        background-size: 100% 100%;
      }

      .text-1 {
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 600;
      }

      .text-2 {
        margin-bottom: 20px;
      }

      .title-content {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 500;
      }

      .divider {
        border-width: 1px;
        border-color: #1976d2;
        margin-bottom: 20px;
      }

      .table {
        margin-top: 10px;
      }
    }

    .grid-right {
      box-shadow: 0 0 3px 1px rgb(0 0 0 / 25%);
      height: fit-content;

      .title-right {
        color: red;
        text-align: center;
        text-transform: uppercase;
        margin-top: 10px;
        padding-bottom: 5px;
        border-bottom: 2px solid #ff0000;
      }

      .container-right {
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .phone {
          font-size: 22px;
          font-weight: 600;
          margin-left: 5px;
        }

        .grid-icon {
          display: flex;
          justify-content: center;

          .icon {
            margin-right: 10px;
          }
        }
      }
    }
  }

  ${pricingResponsive}
`;
