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
      keyframes: {
        gradient: {
          "0%": {
            "background-position": "0% 50%",
            "backgroundPosition": "0% 50%",
          },
          "100%": {
            "background-position": "100% 50%",
            "backgroundPosition": "100% 50%",
          },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      colors: {
        "todo-primary": "#032944",
        "todo-secondary": "#4497D2",
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
