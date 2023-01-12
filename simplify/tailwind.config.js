/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html, js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        blue: "#001F83",
        yellow: "#FFB400",
        "blue-light": "#EDEFFD",
      },
      borderWidth: {
        thin: "0.05px",
      },
    },
  },
  plugins: [],
};
