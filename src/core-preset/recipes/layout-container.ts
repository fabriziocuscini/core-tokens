import { defineRecipe } from '../def';

export const layoutContainerRecipe = defineRecipe({
  className: 'layout-container',
  base: {
    position: 'relative',
    maxWidth: '8xl',
    w: '100%',
    mx: 'auto',
    px: {
      base: '4',
      md: '6',
      lg: '8',
    },
  },
  variants: {
    centerContent: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    fluid: {
      true: {
        maxWidth: 'full',
      },
    },
  },
});
