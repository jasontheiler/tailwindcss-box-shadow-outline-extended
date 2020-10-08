const Color = require("color")

module.exports = ({ addUtilities, e, theme, variants }) => {
  const shadow = theme("boxShadowOutline.shadow") || "0 0 0 3px"
  const colors = theme("boxShadowOutline.colors") || theme("colors")

  const generateBoxShadowOutlineUtilities = (colors, prevKeys = []) =>
    Object.entries(colors).reduce((acc, [key, value]) => {
      const keys = [...prevKeys]

      if (key !== "default") keys.push(key)

      let newBoxShadowOutlineUtilities = {}

      if (typeof value === "object")
        newBoxShadowOutlineUtilities = generateBoxShadowOutlineUtilities(
          value,
          keys
        )

      if (typeof value === "string") {
        const css = { boxShadow: `${shadow} ${value}` }

        if (
          value !== "transparent" &&
          value !== "currentColor" &&
          !value.match(/^var\(.+?\)$/)
        ) {
          const { r, g, b } = Color(value).object()

          css["--shadow-outline-opacity"] = "0.5"
          css[
            "box-shadow"
          ] = `${shadow} rgba(${r}, ${g}, ${b}, var(--shadow-outline-opacity))`
        }

        newBoxShadowOutlineUtilities[
          `.${e(`shadow-outline-${keys.join("-")}`)}`
        ] = css
      }

      return { ...acc, ...newBoxShadowOutlineUtilities }
    }, {})

  addUtilities(
    generateBoxShadowOutlineUtilities(colors),
    variants("boxShadowOutline") || ["responsive", "hover", "focus"]
  )

  const opacities = theme("boxShadowOutlineOpacity") || theme("opacity")

  const generateBoxShadowOutlineOpacityUtilities = (opacities) =>
    Object.entries(opacities).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [`.${e(
          `shadow-outline-opacity${key !== "default" ? `-${key}` : ""}`
        )}`]: {
          "--shadow-outline-opacity": `${value}`,
        },
      }),
      {}
    )

  addUtilities(
    generateBoxShadowOutlineOpacityUtilities(opacities),
    variants("boxShadowOutlineOpacity") || ["responsive", "hover", "focus"]
  )
}
