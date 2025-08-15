import { ThemeProvider } from 'next-themes';
import { Box, Stack, Circle, Center } from '../styled-system/jsx';
import { ColorModeToggle } from './components/color-mode-toggle';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Center h="100vh" bg="gray.100">
        <Stack
          direction="row"
          alignItems="center"
          px="6"
          py="4"
          rounded="xl"
          shadow="lg"
          bg="white"
          gap="4"
        >
          <Circle size="5rem" overflow="hidden">
            <img src="https://picsum.photos/id/64/150" alt="avatar" />
          </Circle>
          <Stack direction="column" gap="0">
            <Box fontSize="xl" fontWeight="semibold">
              Priscilla Simpson
            </Box>
            <Box fontSize="sm" color="gray.600">
              priscilla.simpson@gmail.com
            </Box>
          </Stack>
        </Stack>
      </Center>
      <Box position="fixed" bottom="4" right="4">
        <ColorModeToggle />
      </Box>
    </ThemeProvider>
  );
}

export default App;
