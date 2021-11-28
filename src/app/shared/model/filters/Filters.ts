import Filter from "../filter/Filter";

export type FilterKeys =
  | "blur"
  | "brightness"
  | "contrast"
  | "dropShadow"
  | "grayScale"
  | "hueRotate"
  | "invert"
  | "opacity"
  | "saturation"
  | "sepia";

interface Filters {
  blur: Filter;
  brightness: Filter;
  contrast: Filter;
  dropShadow: Filter;
  grayScale: Filter;
  hueRotate: Filter;
  invert: Filter;
  opacity: Filter;
  saturation: Filter;
  sepia: Filter;
}

export default Filters;
