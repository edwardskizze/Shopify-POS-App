import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = { apiKey: '46a2d98b1bca7209b13aac51331a688c', shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };

    return (
      <React.Fragment>
        <Head>
          <title>Frontflip POS Scanner</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
            <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
