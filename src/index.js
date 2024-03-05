import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import CheckboxesTags from './main';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StyledEngineProvider injectFirst>
    <CheckboxesTags />
  </StyledEngineProvider>
);