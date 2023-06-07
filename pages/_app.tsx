import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import { FooterLayout, HeaderLayout } from '@/src/layouts';
import ContentLayout from '@/src/layouts/content';
import { store } from '@/src/stores';
import { I18n } from '@/src/configs/i18n/i18n';

import GlobalStyle from '@/src/assets/styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Hihi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <I18nextProvider i18n={I18n}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />

            <HeaderLayout />

            <ContentLayout>
              <Component {...pageProps} />
            </ContentLayout>

            <FooterLayout />
          </ThemeProvider>
        </I18nextProvider>
      </Provider>
    </>
  );
};

export default App;
