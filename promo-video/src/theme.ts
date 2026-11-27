export const COLORS = {
  // Brand Blue
  blue50: '#E8F7FE',
  blue100: '#C7ECFD',
  blue500: '#29B6F6',
  blue600: '#1CA1DB',
  blue700: '#0277BD',
  blue800: '#015C94',

  // Success Green
  green50: '#F0FDE8',
  green100: '#D9FAC5',
  green500: '#64DD17',
  green600: '#52B813',
  green700: '#308510',
  green800: '#226309',

  // Gamification Purple
  purple50: '#F8EEFF',
  purple100: '#EED4FF',
  purple500: '#CE82FF',
  purple600: '#B561EB',
  purple700: '#8E33D6',
  purple800: '#6B21A8',
  purpleStage: '#7C22C7',

  // Amber & Red
  amber100: '#FEF3C7',
  amber500: '#F59E0B',
  amber700: '#92400E',
  red500: '#FF5252',
  red700: '#C62828',

  // Neutrals
  white: '#FFFFFF',
  canvas: '#F7F9FA',
  border: '#E2E8F0',
  gray: '#64748B',
  ink: '#1C2833',
} as const;

export const FONTS = {
  display: '"Nunito", -apple-system, BlinkMacSystemFont, sans-serif',
  body: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',
} as const;

export const SPRINGS = {
  bouncy: { damping: 12, stiffness: 210, mass: 0.85 },
  snappy: { damping: 16, stiffness: 260, mass: 0.8 },
  smooth: { damping: 22, stiffness: 160, mass: 1 },
  pop: { damping: 10, stiffness: 280, mass: 0.7 },
} as const;
