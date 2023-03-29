# Table of Contents
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Install the `norex` package using npm:](#install-the-norex-package-using-npm)
- [Summary](#summary)
  - [Norex is a user-friendly, intuitive syntax for working with regular expressions, designed to make it easier for non-programmers and those with minimal technical skills to create, read, and understand regex patterns.](#norex-is-a-user-friendly-intuitive-syntax-for-working-with-regular-expressions-designed-to-make-it-easier-for-non-programmers-and-those-with-minimal-technical-skills-to-create-read-and-understand-regex-patterns)
- [Why Norex](#why-norex)
- [Features](#features)
- [Usage](#usage)
  - [The Norex package provides two main functions for converting between Norex and regex expressions:](#the-norex-package-provides-two-main-functions-for-converting-between-norex-and-regex-expressions)
  - [NorEx-to-RegEx](#norex-to-regex)
    - [`norexToRegex()` Converts a Norex expression to a regex pattern.](#norextoregex-converts-a-norex-expression-to-a-regex-pattern)
  - [RegEx-to-NorEx](#regex-to-norex)
    - [`regexToNorex()` Converts a regex pattern to a Norex expression.](#regextonorex-converts-a-regex-pattern-to-a-norex-expression)
  - [These functions can be used to seamlessly integrate Norex into your existing codebase and simplify the process of working with regular expressions.](#these-functions-can-be-used-to-seamlessly-integrate-norex-into-your-existing-codebase-and-simplify-the-process-of-working-with-regular-expressions)
    - [`Available Expressions`](#available-expressions)
- [Examples](#examples)
- [Table of Expressions](#table-of-expressions)
- [Contributing](#contributing)

# Installation
## Install the `norex` package using npm:
```
npm install norex
```

# Summary
## Norex is a user-friendly, intuitive syntax for working with regular expressions, designed to make it easier for non-programmers and those with minimal technical skills to create, read, and understand regex patterns.

# Why Norex
- ## `Regular expressions` can be quite powerful, but their syntax is often considered cryptic and hard to grasp, especially for beginners. The purpose of the Norex package is to provide a more accessible alternative to regex, using a simplified and descriptive syntax.
- ## `Norex expressions` can be easily translated to regular expressions and vice versa using the provided functions, making it simple to integrate Norex into your existing projects or learn regex patterns from their Norex counterparts.
- 
- ## By using Norex, you can harness the power of regular expressions without getting lost in their complex syntax.

# Features
- ## Intuitive, human-readable syntax for defining regular expressions
- ## Bi-directional conversion between Norex and regex expressions
- ## Compatibility with existing JavaScript regex patterns

# Usage
## The Norex package provides two main functions for converting between Norex and regex expressions:

## NorEx-to-RegEx
### `norexToRegex()` Converts a Norex expression to a regex pattern.
## RegEx-to-NorEx
### `regexToNorex()` Converts a regex pattern to a Norex expression.

## These functions can be used to seamlessly integrate Norex into your existing codebase and simplify the process of working with regular expressions.

### `Available Expressions`
For a complete list of available Norex expressions and their corresponding regex patterns, please refer to the Norex Expressions Table.

# Examples

Search for `http://` or `https://`:
```
# Norex

// Syntax #1

line-start:
  "http"
  optional "s"
  "://"


// Syntax #2

line-start:
  "http"
  optional("s")
  "://"


// Syntax #3

line-start("http" optional("s") "://")
```
```
# Regex

^http(?:s)?://
```

Search for `hello world`:
```
# Norex

// Syntax #1

"hello"
any:
  whitespace
  non-whitespace
"world"


// Syntax #2

"hello"
any whitespace non-whitespace
"world"


// Syntax #3
"hello" any(whitespace non-whitespace) "world"
```
```
# Regex

hello[\s\S]*?world
```

# Table of Expressions
|Regex Expression|Norex Expression|Description|
|--- |--- |--- |
|`.`|`(char)`|Any character|
|`^`exp|`starts-with(`exp`)`|Starts with expression|
|exp`$`|`ends-with(`exp`)`|Ends with expression|
|`^`exp`$`|`is-within(`exp`)`|Is within expression|
|exp`*`|`optional(`exp`)`|Zero or more repetitions|
|exp`+`|`at-least-once(`exp`)`|One or more repetitions|
|exp`?`|`once-at-most(`exp`)`|Zero or one repetition|
|`{`n`}`|`repeat-`n`-times(`exp`)`|Repeat n times|
|`{`n`,}`|`repeat-`n`-or-more(`exp`)`|Repeat n or more times|
|`{`n`,`m`}`|`repeat-`n`-to-`m`(`exp`)`|Repeat n to m times|
|`[`chars`]`|`with(`chars`)`|Any character in set|
|`[^`chars`]`|`without(`chars`)`|Any character not in set|
|exp`\|`alt|`either-or(`exp`, `alt`)`|Either expression or alternative|
|`\(`exp`\)`|`group(`exp`)`|Group expression|
|`\\`|`escape-symbol`|Escape symbol|
|`\d`|`(digit)`|Digit character|
|`\D`|`(non-digit)`|Non-digit character|
|`\w`|`(word-char)`|Word character|
|`\W`|`(non-word-char)`|Non-word character|
|`\s`|`(whitespace)`|Whitespace character|
|`\S`|`(non-whitespace)`|Non-whitespace character|
|`\b`exp|`word(`exp`)`|Word boundary expression|
|`\B`exp|`non-word(`exp`)`|Non-word boundary expression|
|`(?=`exp`)`|`will-occur(`exp`)`|Positive lookahead|
|`(?!`exp`)`|`will-not-occur(`exp`)`|Negative lookahead|
|`(?<=`exp`)`|`has-occurred(`exp`)`|Positive lookbehind|
|`(?<!`exp`)`|`has-not-occurred(`exp`)`|Negative lookbehind|
|`(?:`exp`)`|`non-capture-group(`exp`)`|Non-capturing group|
|`(?=`exp-1`)(?=`exp-2`)`...`(?=`exp-n`)`|all-of(exp-1, ..., exp-n)|All expressions occur|
|exp-1`\|`exp-2`\|`...`\|`exp-n|`one-of(`exp-1`,` ...`,` exp-n`)`|One of the expressions occurs|
|`(?=`exp-1`) (?=`exp-2`) (?!(?=`exp-1`) (?=`exp-2`)`|`some-of(`exp-1`,` ...`,` exp-n`)`|Some of the expressions occur|
|exp-1`(?=.*`exp-2`)(?=.*`exp-3`)`...|all-of-by-this-order(exp-1, ..., exp-n)|All expressions occur in order|
|Custom implementation|`js-symbol(`exp`)`|Any JS symbol with name returned from expression|
|Custom implementation|`js-class(`exp`)`|Any JS class with name returned from expression|
|Custom implementation|`js-function(`exp`)`|Any JS function with name returned from expression|
|Custom implementation|`js-interface(`exp`)`|Any JS interface with name returned from expression|
|Custom implementation|`js-arg(`exp`)`|Any JS argument with a name described as expression|

* Additional expressions available, see package documentation for details.

# Contributing
We welcome contributions to improve and expand the Norex package. If you have ideas for new expressions or improvements to the syntax, please feel free to submit a pull request or open an issue on the project's GitHub repository.