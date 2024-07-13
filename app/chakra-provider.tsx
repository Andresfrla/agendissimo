import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
      heading: 'Be Vietnam Pro',
      body: 'Be Vietnam Pro',
    },
  });

const ChakraProviderComponent = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraProviderComponent;