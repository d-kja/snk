import { config as base } from "@tamagui/config"
import { createTamagui } from 'tamagui'
import { createAnimations } from "@tamagui/animations-moti"

const config = createTamagui({
  ...base,
  animations: createAnimations({
    fast: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: 'spring',
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: 'spring',
      damping: 20,
      stiffness: 60,
    },
  }),
});

export default config;
export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf { }
}
