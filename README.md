<h1 align="center">Tailwind CSS Box Shadow Outline Extended</h1>

<h3 align="center">
  A Tailwind CSS plugin that generates extended box shadow outline utilities with color and opacity options.
</h3>

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/tailwindcss-box-shadow-outline-extended">
    <img src="https://img.shields.io/npm/v/tailwindcss-box-shadow-outline-extended?style=for-the-badge&logo=npm&label=version" alt="version" />
  </a>

  <a href="https://www.npmjs.com/package/tailwindcss-box-shadow-outline-extended">
    <img src="https://img.shields.io/npm/dw/tailwindcss-box-shadow-outline-extended?style=for-the-badge&logo=docusign&logoColor=FFFFFF" alt="downloads" />
  </a>
</p>

<br />

## Installation

Add the `tailwindcss-box-shadow-outline-extended` dependency to your project:

```bash
npm install tailwindcss-box-shadow-outline-extended

# OR

yarn add tailwindcss-box-shadow-outline-extended
```

Then register the plugin in the `plugins` section of your `tailwind.config.js`:

```js
module.exports = {
  plugins: [require("tailwindcss-box-shadow-outline-extended")],
}
```

## Usage

The plugin generates `shadow-outline-{color}` and `shadow-outline-opacity-{amount}` utilities, which can be used like this:

```html
<!-- Using default opacity: -->
<button class="focus:outline-none focus:shadow-outline-indigo-700">
  Click me!
</button>

<!-- Using lower opacity: -->
<button
  class="focus:outline-none focus:shadow-outline-indigo-700 focus:shadow-outline-opacity-25"
>
  Click me!
</button>
```

## Customization

### Shadow and color palette

By default the plugin uses Tailwind's color palette to generate the `shadow-outline-{color}` utilities, including any customizations you have made to it in your `tailwind.config.js`.

> For more information on Tailwind's color palette and how to customize it, check out their documentation on [Customizing Colors](https://tailwindcss.com/docs/customizing-colors).

If you want to customize the box shadow outline itself or its color palette independently from Tailwind's color palette, use the `boxShadowOutline.shadow` and `boxShadowOutline.colors` properties in the `theme` section of your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    boxShadowOutline: {
      shadow: "0 0 0 0.2em",
      colors: {
        primary: {
          500: "#667EEA",
          600: "#5A67D8",
          700: "#4C51BF",
        },
      },
    },
  },
}
```

### Opacity scale

By default the plugin uses Tailwind's opacity scale to generate the `shadow-outline-opacity-{amount}` utilities, including any customizations you have made to it in your `tailwind.config.js`.

> For more information on Tailwind's opacity scale and how to customize it, check out their documentation on [Opacity](https://tailwindcss.com/docs/opacity).

If you want to customize the box shadow outline opacity scale independently from Tailwind's opacity scale, use the `boxShadowOutlineOpacity` property in the `theme` section of your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    boxShadowOutlineOpacity: {
      0: "0",
      33: "0.33",
      67: "0.67",
      100: "1",
    },
  },
}
```

### Responsive and pseudo-class variants

By default the plugin only generates responsive, hover and focus variants of the `shadow-outline-{color}` and `shadow-outline-opacity-{amount}` utilities.

> For more information on Tailwind's responsive and pseudo-class variants, check out their documentation on [Responsive Design](https://tailwindcss.com/docs/responsive-design) and [Pseudo-Class Variants](https://tailwindcss.com/docs/pseudo-class-variants).

If you want to customize which variants are generated for the `shadow-outline-{color}` and `shadow-outline-opacity-{amount}` utilities, use the `boxShadowOutline` and `boxShadowOutlineOpacity` properties in the `variants` section of your `tailwind.config.js`:

```js
module.exports = {
  variants: {
    boxShadowOutline: ["responsive", "hover", "focus", "focus-within"],
    boxShadowOutlineOpacity: ["responsive", "hover", "focus", "focus-within"],
  },
}
```

## Caveats

The plugin and its generated `shadow-outline-opacity-{amount}` utilities can't adjust the opacity of CSS variables like `currentColor` and CSS custom properties in `var()` functions, since they are incompatible with the `rgba()` function. For now they will just keep their initial opacity.

If there is a way to adjust the opacity of them, that I don't know about, please create an issue or a pull request to help me out!

## License

[MIT License](/LICENSE)

Copyright © 2020 [Jason Theiler](https://github.com/jasontheiler)
