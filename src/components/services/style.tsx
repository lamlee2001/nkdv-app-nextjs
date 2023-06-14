import { Grid } from '@mui/material';
import styled, { css } from 'styled-components';

import ResponsiveUI, { SIZE, SIZEH } from '@/src/constants/responsive';

const ServicesResponsive = css`
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
      .grid-container {
        padding: 0 20px;
        margin-top: 30px;

        .grid-item {
          max-width: 100%;

          .image-item {
            width: 45%;
          }
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

export const WrapperStyle = styled(Grid)`
  padding: 20px 100px;
  justify-content: space-between;

  .grid-item {
    display: flex;
    overflow: hidden;
    height: 260px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 30px;
    max-width: calc(100% / 2 - 16px);
    box-shadow: 0 0 3px 1px rgb(0 0 0 / 25%);
    position: relative;

    .image-item {
      height: 100%;
      width: 40%;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        border: 5px solid #fff;
        opacity: 50%;
      }
    }

    .icon-tooth {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 75px;
      height: 57px;
    }

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 0 3px 1px rgb(0 0 0 / 50%);
    }
  }

  ${ServicesResponsive}
`;

export const WrapperContent = styled.div`
  padding: 15px;

  .title {
    display: block;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
    transition: all 0.25s ease 0s;
    margin-bottom: 10px;

    &:hover {
      color: #1976d2;
    }
  }

  .text {
    margin-bottom: 15px;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
  }

  .see-more {
    border: 1px solid #777;
    width: 148px;
    height: 42px;
    color: #000;
    z-index: 1;

    &:hover {
      &::before {
        transform: translate3d(0, 0, 0);
      }
    }

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      margin: auto;
      background-color: #ec1a23;
      transform: translate3d(5px, 5px, 0);
      opacity: 50%;
      transition: all 0.25s ease 0s;
      border-radius: 4px;
    }
  }
`;
