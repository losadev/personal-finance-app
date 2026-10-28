/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        finance: {
          white: 'var(--finance-white)',
          beige: { 100: 'var(--finance-beige-100)', 500: 'var(--finance-beige-500)' },
          grey: {
            100: 'var(--finance-grey-100)',
            300: 'var(--finance-grey-300)',
            500: 'var(--finance-grey-500)',
            900: 'var(--finance-grey-900)',
          },
          green: 'var(--finance-green)',
          yellow: 'var(--finance-yellow)',
          cyan: 'var(--finance-cyan)',
          navy: 'var(--finance-navy)',
          red: 'var(--finance-red)',
          purple: 'var(--finance-purple)',
          pink: 'var(--finance-pink)',
          turquoise: 'var(--finance-turquoise)',
          brown: 'var(--finance-brown)',
          magenta: 'var(--finance-magenta)',
          blue: 'var(--finance-blue)',
          'navy-grey': 'var(--finance-navy-grey)',
          'army-green': 'var(--finance-army-green)',
          gold: 'var(--finance-gold)',
          orange: 'var(--finance-orange)',
          background: 'var(--finance-background)',
          surface: 'var(--finance-surface)',
          foreground: 'var(--finance-foreground)',
          muted: 'var(--finance-muted)',
          border: 'var(--finance-border)',
          accent: 'var(--finance-accent)',
          danger: 'var(--finance-danger)',
        },
      },
      fontFamily: { sans: ['var(--finance-font-family)'] },
      fontSize: {
        'finance-1': ['var(--finance-text-1)', { lineHeight: 'var(--finance-leading-heading)', fontWeight: 'var(--finance-weight-bold)' }],
        'finance-2': ['var(--finance-text-2)', { lineHeight: 'var(--finance-leading-heading)', fontWeight: 'var(--finance-weight-bold)' }],
        'finance-3': ['var(--finance-text-3)', { lineHeight: 'var(--finance-leading-body)', fontWeight: 'var(--finance-weight-bold)' }],
        'finance-4': ['var(--finance-text-4)', { lineHeight: 'var(--finance-leading-body)', fontWeight: 'var(--finance-weight-regular)' }],
        'finance-4-bold': ['var(--finance-text-4)', { lineHeight: 'var(--finance-leading-body)', fontWeight: 'var(--finance-weight-bold)' }],
        'finance-5': ['var(--finance-text-5)', { lineHeight: 'var(--finance-leading-body)', fontWeight: 'var(--finance-weight-regular)' }],
        'finance-5-bold': ['var(--finance-text-5)', { lineHeight: 'var(--finance-leading-body)', fontWeight: 'var(--finance-weight-bold)' }],
      },
      spacing: Object.fromEntries(
        [50, 100, 150, 200, 250, 300, 400, 500, 600, 800, 1000, 1600].map(
          (step) => [`finance-${step}`, `var(--finance-space-${step})`],
        ),
      ),
      borderRadius: {
        'finance-control': 'var(--finance-radius-control)',
        'finance-card': 'var(--finance-radius-card)',
        'finance-sidebar': 'var(--finance-radius-sidebar)',
      },
    },
  },
  plugins: [],
};
