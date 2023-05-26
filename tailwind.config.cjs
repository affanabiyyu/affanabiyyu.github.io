/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used

    // extend: {
    textColor: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        fill: withOpacity("--color-fill"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-text-base"),
        card: withOpacity("--color-card"),
        "card-muted": withOpacity("--color-card-muted"),
      },
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: withOpacity("--color-border"),
        fill: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
    },
    fill: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
      transparent: "transparent",
    },
    fontFamily: {
      'mono': ['IBM Plex Mono', 'monospace'],
      'sans' : ['rajdhani', 'ui-sans-serif', 'system-ui', "Segoe UI", "Helvetica Neue", 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'paraf' : ["Segoe UI", "Helvetica Neue", 'Arial', 'sans-serif'],
    },
    fontWeight: {
      extralight: '300',
      light: '400',
      normal: '500',
      medium: '600',
      semibold: '700',
      bold: '900',
    },
    fontSize: {
      sm: '0.8rem',
      md: '1rem',
      base: '1.2rem',
      lg: '1.4rem',
      xl: '1.7rem',
      '2xl': '2rem',
      '3xl': '2.391rem',
      '4xl': '2.702rem',
      '5xl': '3.202rem',
    },
  },
  plugins: [require("@tailwindcss/typography")], 
};
