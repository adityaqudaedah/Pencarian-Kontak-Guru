import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeProvider,extendTheme} from "@chakra-ui/react";
import { Fonts } from "./Fonts";

const theme = extendTheme({
  fonts: {
    heading: 'Poppins,sans-serif',
    body: 'Poppins,sans-serif',
  },
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
