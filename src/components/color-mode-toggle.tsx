import { useTheme } from 'next-themes';

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button type="button" aria-label="toggle color mode" onClick={toggleColorMode}>
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
}
