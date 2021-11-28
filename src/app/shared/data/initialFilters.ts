import Filters from "../model/filters/Filters";

const initialFilters: Filters = {
  blur: {
    label: "Blur",
    initial: 0,
    unit: "px",
    min: 0,
    max: 100
  },
  brightness: {
    label: "Brightness",
    initial: 100,
    unit: "%",
    min: 0,
    max: 300
  },
  contrast: {
    label: "Contrast",
    initial: 100,
    unit: "%",
    min: 0,
    max: 300
  },
  grayScale: {
    label: "Gray scale",
    initial: 0,
    unit: "%",
    min: 0,
    max: 100
  },
  hueRotate: {
    label: "Hue",
    initial: 0,
    unit: "deg",
    min: 0,
    max: 360
  },
  invert: {
    label: "Invert",
    initial: 0,
    unit: "%",
    min: 0,
    max: 100
  },
  opacity: {
    label: "Opacity",
    initial: 100,
    unit: "%",
    min: 0,
    max: 100
  },
  saturation: {
    label: "Saturation",
    initial: 100,
    unit: "%",
    min: 0,
    max: 300
  },
  sepia: {
    label: "Sepia",
    initial: 0,
    unit: "%",
    min: 0,
    max: 100
  }
};

export default initialFilters;
