const norexToRegexMap = {
  "(char)": () => ".",
  "starts-with": (expr) => `^${expr}`,
  "ends-with": (expr) => `${expr}$`,
  "is-within": (expr) => `^${expr}$`,
  "optional": (expr) => `${expr}*`,
  "at-least-once": (expr) => `${expr}+`,
  "once-at-most": (expr) => `${expr}?`,
  "repeat-n-times": (expr, n) => `${expr}{${n}}`,
  "repeat-n-or-more": (expr, n) => `${expr}{${n},}`,
  "repeat-n-to-m": (expr, n, m) => `${expr}{${n},${m}}`,
  "with": (chars) => `[${chars}]`,
  "without": (chars) => `[^${chars}]`,
  "either-or": (expr, alt) => `${expr}|${alt}`,
  "group": (expr) => `\\(${expr}\\)`,
  "escape-symbol": () => "\\\\",
  "(digit)": () => "\\d",
  "(non-digit)": () => "\\D",
  "(word-char)": () => "\\w",
  "(non-word-char)": () => "\\W",
  "(whitespace)": () => "\\s",
  "(non-whitespace)": () => "\\S",
  "word": (expr) => `\\b${expr}`,
  "non-word": (expr) => `\\B${expr}`,
  "will-occur": (expr) => `(?=${expr})`,
  "will-not-occur": (expr) => `(?!${expr})`,
  "has-occurred": (expr) => `(?<=${expr})`,
  "has-not-occurred": (expr) => `(?<!${expr})`,
  "non-capture-group": (expr) => `(?:${expr})`,
  "all-of": (exprs) => exprs.map(expr => `(?=${expr})`).join(''),
  "one-of": (exprs) => exprs.join('|'),
  "some-of": (exprs) => `(${exprs.map(expr => `(?=${expr})`).join('|')})`,
}

function norexToRegex(expression, ...args) {
  const regexBuilder = norexToRegexMap[expression];

  if (!regexBuilder) {
      throw new Error(`Unknown Norex expression: ${expression}`);
  }

  return regexBuilder(...args);
}

function buildRegexFromNorex(expression, ...args) {
  const regexString = norexToRegex(expression, ...args);
  return regexString;
}

function norexSearch(input, expression, ...args) {
  const regexString = buildRegexFromNorex(expression, ...args);
  const regex = new RegExp(regexString, 'g');
  const matches = input.match(regex);
  return matches;
}

module.exports = { norexToRegex, buildRegexFromNorex, norexSearch };
