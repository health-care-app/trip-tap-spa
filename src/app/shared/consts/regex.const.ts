interface Regex {
  name: RegExp;
  password: RegExp;
}

export const REGEX: Regex = {
  name: /^[A-Za-z\\u0621-\\u064A][A-Za-z \\u0621-\\u064A]{2,17}$/,
  password: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/,
};
