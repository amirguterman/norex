# Table of Contents
- [Table of Contents](#table-of-contents)
- [Summary](#summary)
- [Table of Norex Expressions](#table-of-norex-expressions)
- [Examples](#examples)
- [Installation](#installation)

# Summary

`norex` is a user-friendly syntax for regular expressions, designed to be more accessible and intuitive for non-programmers or those with minimal technical skills. With `norex`, you can create and understand regex patterns using simple, human-readable expressions.

# Table of Norex Expressions


| Norex Expression             | Regex Equivalent | Description                |
|------------------------------|------------------|----------------------------|
| `"chars"`                    | `chars`          | Exact characters           |
| `(digit)`                    | `\d`             | Digit                      |
| `(non-digit)`                | `\D`             | Non-digit                  |
| `(word-char)`                | `\w`             | Word character             |
| `(non-word-char)`            | `\W`             | Non-word character         |
| `(whitespace)`               | `\s`             | Whitespace                 |
| `(non-whitespace)`           | `\S`             | Non-whitespace             |
| `word "chars"`               | `\bchars`        | Word boundary + characters |
| `non-word "chars"`           | `\Bchars`        | Non-word boundary + chars  |
| `starts-with "chars"`        | `^chars`         | Starts with characters     |
| `ends-with "chars"`          | `chars$`         | Ends with characters       |
| `is-within "chars"`          | `^chars$`        | Is within characters       |
| `optional "chars"`           | `chars*`         | Optional characters        |
| `at-least-once "chars"`      | `chars+`         | At least once characters   |
| `once-at-most "chars"`       | `chars?`         | Once at most characters    |
| `with "chars"`               | `[chars]`        | With characters            |
| `without "chars"`            | `[^chars]`       | Without characters         |
| `group "chars"`              | `(chars)`        | Group characters           |
| `will-occure "chars"`        | `(?=chars)`      | Will occur characters      |
| `will-not-occure "chars"`    | `(?!chars)`      | Will not occur characters  |
| `has-occured "chars"`        | `(?<=chars)`     | Has occurred characters    |
| `has-not-occured "chars"`    | `(?<!chars)`     | Has not occurred characters|

*Additional expressions available, see package documentation for details.

# Examples

Search for `http://` or `https://`:
```
# Norex
starts-with "http"
optional "s"
"://"

# Regex
^http(?:s)?://
```

Search for `hello world`:
```
# Norex
"hello"
any (whitespace) (non-whitespace)
"world"

# Regex
hello[\s\S]*?world
```

# Installation

Install the `norex` package using npm:
```
npm install norex
```
