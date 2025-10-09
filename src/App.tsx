import { ThemeProvider } from 'next-themes';
import { Box } from '../styled-system/jsx';
import { ColorModeToggle } from './components/color-mode-toggle';
import { css } from '../styled-system/css';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Box
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(24, 1fr)',
          gridTemplateRows: 'repeat(24, 1fr)',
          gap: '2',
          height: '100vh',
          padding: '4',
        })}
      >
        {/* Widget 1 */}
        <Box
          bg="bg.muted"
          rounded="xl"
          p="4"
          className={css({
            // Base: 24x8 (cols 1-24, rows 1-8)
            gridColumn: '1 / 25',
            gridRow: '1 / 9',
            // LG: 12x12 (cols 1-12, rows 1-12)
            lg: {
              gridColumn: '1 / 13',
              gridRow: '1 / 13',
            },
            // 3XL: 8x24 (cols 1-8, rows 1-24)
            '3xl': {
              gridColumn: '1 / 9',
              gridRow: '1 / 25',
            },
          })}
        >
          <Box fontSize="2xl" fontWeight="bold" mb="2">
            1
          </Box>
          <Box fontSize="sm" color="fg.muted">
            <Box>Base: 24x8</Box>
            <Box>LG: 12x12</Box>
            <Box>3XL: 8x24</Box>
          </Box>
        </Box>

        {/* Widget 2 */}
        <Box
          bg="bg.muted"
          rounded="xl"
          p="4"
          className={css({
            // Base: 24x8 (cols 1-24, rows 9-16)
            gridColumn: '1 / 25',
            gridRow: '9 / 17',
            // LG: 12x12 (cols 13-24, rows 1-12)
            lg: {
              gridColumn: '13 / 25',
              gridRow: '1 / 13',
            },
            // 3XL: 8x24 (cols 9-16, rows 1-24)
            '3xl': {
              gridColumn: '9 / 17',
              gridRow: '1 / 25',
            },
          })}
        >
          <Box fontSize="2xl" fontWeight="bold" mb="2">
            2
          </Box>
          <Box fontSize="sm" color="fg.muted">
            <Box>Base: 24x8</Box>
            <Box>LG: 12x12</Box>
            <Box>3XL: 8x24</Box>
          </Box>
        </Box>

        {/* Widget 3 */}
        <Box
          bg="bg.muted"
          rounded="xl"
          p="4"
          className={css({
            // Base: 24x8 (cols 1-24, rows 17-24)
            gridColumn: '1 / 25',
            gridRow: '17 / 25',
            // LG: 24x12 (cols 1-24, rows 13-24)
            lg: {
              gridColumn: '1 / 25',
              gridRow: '13 / 25',
            },
            // 3XL: 8x24 (cols 17-24, rows 1-24)
            '3xl': {
              gridColumn: '17 / 25',
              gridRow: '1 / 25',
            },
          })}
        >
          <Box fontSize="2xl" fontWeight="bold" mb="2">
            3
          </Box>
          <Box fontSize="sm" color="fg.muted">
            <Box>Base: 24x8</Box>
            <Box>LG: 24x12</Box>
            <Box>3XL: 8x24</Box>
          </Box>
        </Box>
      </Box>
      {/* <Center h="100vh">
        <Stack
          direction="row"
          alignItems="center"
          px="6"
          py="4"
          rounded="xl"
          shadow="lg"
          bg="bg.panel"
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
      </Center> */}
      <Box position="fixed" top="4" right="4">
        <ColorModeToggle />
      </Box>
    </ThemeProvider>
  );
}

export default App;
