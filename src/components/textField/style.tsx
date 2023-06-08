import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

export const TextFieldStyle = styled(TextField)`
  &.MuiFormControl-root {
    width: 100%;

    .MuiInputBase-root {
      height: 42px;
      width: 100%;
    }

    .MuiFormHelperText-root {
      margin: 0;
    }
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;

  .MuiTypography-root {
    margin-bottom: 3px;
  }

  &.left {
    display: flex;
    align-items: center;

    .MuiTypography-root {
      margin-right: 15px;
    }
  }

  &.top-right {
    .MuiTypography-root {
      text-align: end;
    }
  }
`;
