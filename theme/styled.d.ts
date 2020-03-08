import 'styled-components';
import { Borders } from './fields/borders';
import { Colors } from './fields/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    borders: Borders;
    colors: Colors;
    letterSpacings: number[];
    radii: number[];
    sizes: number[];
    space: number[];
    fontSizes: any;
  }
}
