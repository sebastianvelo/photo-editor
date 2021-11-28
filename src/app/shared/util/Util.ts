namespace Utils {
  export const isUpperCase = (letter: string): boolean =>
    letter === letter.toUpperCase();

  export const camelCaseToKebabCase = (camelCase: string): string =>
    camelCase
      .split("")
      .map((letter) =>
        isUpperCase(letter) ? `-${letter.toLowerCase()}` : letter
      )
      .join("");
}

export default Utils;
