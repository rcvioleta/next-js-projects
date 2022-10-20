import { Provider } from "react-redux";
import store from "../store";

import HeaderLayout from "../components/layouts/header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </Provider>
  );
}

export default MyApp;
