import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { LuSun, LuMoon } from 'react-icons/lu';
import { Circle } from '../../styled-system/jsx';

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'd') {
        toggleColorMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [theme]); // Dependency on theme to ensure toggleColorMode has the latest value

  return (
    <button type="button" aria-label="toggle color mode" onClick={toggleColorMode}>
      <Circle bg="bg.muted" color="fg.default" rounded="full" size="10">
        {theme === 'light' ? <LuMoon /> : <LuSun />}
      </Circle>
    </button>
  );
}
