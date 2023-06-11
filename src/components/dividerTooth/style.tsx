import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const DividerToothStyle = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;

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
`;
