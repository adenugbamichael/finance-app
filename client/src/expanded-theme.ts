// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string
  }

  interface Palette {
    tertiary: PaletteColor
  }
}

// Extend color prop on components
declare module "@mui/material/Chip" {
  export interface ChipPropsColorOverrides {
    tertiary: PaletteColor
    [key: number]: string
  }
}
