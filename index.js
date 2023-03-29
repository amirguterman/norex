const norexToRegex = function (norex) {
  const norexToRegexMap = {
    "(char)": ".",
    "starts-with(expr)": "^expr",
    "ends-with(expr)": "expr$",
    "is-within(expr)": "^expr$",
    "optional(expr)": "expr*",
    "at-least-once(expr)": "expr+",
    "once-at-most(expr)": "expr?",
    "with(chars)": "[chars]",
    "without(chars)": "[^chars]",
    "either-or(expr, alt)": "expr|alt",
    "group(expr)": "(expr)",
    "escape-symbol": "\\\\",
    "(digit)": "\\d",
    "(non-digit)": "\\D",
    "(word-char)": "\\w",
    "(non-word-char)": "\\W",
    "(whitespace)": "\\s",
    "(non-whitespace)": "\\S",
    "word(expr)": "\\bexpr",
    "non-word(expr)": "\\Bexpr",
    "non-capture-group(expr)": "(?:expr)"
  };

  let regex = norex;

  for (const [key, value] of Object.entries(norexToRegexMap)) {
    regex = regex.replace(new RegExp(key, 'g'), value);
  }

  // Custom handling for the new Norex expressions and decoupled expressions
  regex = regex.replace(/all-of\((.*?)\)/g, (_, expr) => {
    const parts = expr.split(',').map(s => s.trim());
    return parts.map(p => `(?=${p})`).join('');
  });

  regex = regex.replace(/one-of\((.*?)\)/g, (_, expr) => {
    const parts = expr.split(',').map(s => s.trim());
    return parts.join('|');
  });

  regex = regex.replace(/some-of\((.*?)\)/g, (_, expr) => {
    const parts = expr.split(',').map(s => s.trim());
    return parts.map(p => `(?=${p})`).join('|');
  });

  regex = regex.replace(/none-of\((.*?)\)/g, (_, expr) => {
    const parts = expr.split(',').map(s => s.trim());
    return `(?!(?:${parts.map(p => `(?=${p})`).join('|')}))`;
  });

  regex = regex.replace(/all-of-by-this-order\((.*?)\)/g, (_, expr) => {
    const parts = expr.split(',').map(s => s.trim());
    return parts.map(p => `${p}(?=.*`).join('') + parts.slice(1).join(')(?=.*') + ')';
  });

  regex = regex.replace(/will-occur\((.*?)\)/g, (_, expr) => {
    return `(?=${expr})`;
  });

  regex = regex.replace(/will-not-occur\((.*?)\)/g, (_, expr) => {
    return `(?!${expr})`;
  });

  regex = regex.replace(/has-occurred\((.*?)\)/g, (_, expr) => {
    return `(?<=${expr})`;
  });

  regex = regex.replace(/has-not-occurred\((.*?)\)/g, (_, expr) => {
    return `(?<!${expr})`;
  });
}

export default {
  norexToRegex
}
