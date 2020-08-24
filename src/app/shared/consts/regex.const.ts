interface Regex {
  password: RegExp;
}

export const REGEX: Regex = {
  password: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/,
};
