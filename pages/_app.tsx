import type { AppProps } from "next/app";
import {
  ChakraProvider,
  ColorModeProvider,
  extendTheme,
} from "@chakra-ui/react";
import { Fonts } from "./Fonts";
import { Provider } from "react-redux";
import store from "../redux/store/index";

const theme = extendTheme({
  fonts: {
    heading: "Poppins,sans-serif",
    body: "Poppins,sans-serif",
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <ColorModeProvider
          options={{
            initialColorMode: "light",
            useSystemColorMode: true,
          }}
        ></ColorModeProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;
