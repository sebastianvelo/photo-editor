import Filter from "../filter/Filter";

export type FilterKeys =
  | "blur"
  | "brightness"
  | "contrast"
  | "grayscale"
  | "hueRotate"
  | "invert"
  | "opacity"
  | "saturate"
  | "sepia";

interface Filters {
  blur: Filter;
  brightness: Filter;
  contrast: Filter;
  grayscale: Filter;
  hueRotate: Filter;
  invert: Filter;
  opacity: Filter;
  saturate: Filter;
  sepia: Filter;
}

export default Filters;
