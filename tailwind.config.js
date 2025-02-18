const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/shared/components/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "bendo-primary": "#032944",
        "bendo-secondary": "#4497D2",
      },
      spacing: {
        5.5: "1.375rem",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
};
