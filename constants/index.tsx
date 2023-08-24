export type SIGN_TYPE = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
export interface ISchema {
  base?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
  "2xl"?: any;
}

export const WINDOW_SIZE = {
  base: 575,
  sm: 767,
  md: 991,
  lg: 1200,
  xl: 1600,
};

export const calcWindowSizeSign = (windowWidth) => {
  if (windowWidth <= WINDOW_SIZE.base) {
    return "base";
  } else if (windowWidth <= WINDOW_SIZE.sm) {
    return "sm";
  } else if (windowWidth <= WINDOW_SIZE.md) {
    return "md";
  } else if (windowWidth <= WINDOW_SIZE.lg) {
    return "lg";
  } else if (windowWidth <= WINDOW_SIZE.xl) {
    return "xl";
  } else {
    return "2xl";
  }
};

export const getValueBySignSchema = (sign: SIGN_TYPE, schema: ISchema) => {
  const SIGN_ARR: SIGN_TYPE[] = ["base", "sm", "md", "lg", "xl", "2xl"];

  let value = schema[sign];

  if (value) {
    return value;
  }

  const startIndex = SIGN_ARR.indexOf(sign) - 1;

  for (let i = startIndex; i >= 0; i--) {
    const tempSign = SIGN_ARR[i];
    if (schema[tempSign]) {
      return schema[tempSign];
    }
  }

  return "";
};
