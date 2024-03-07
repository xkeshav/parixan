---
marp: true
theme: default
class: invert
transition: pivot
paginate: true
author: Keshav Mohta
---

<style>
footer {
color: mediumseagreen;
font-size: 0.85rem;
font-style: italic;
}

footer::first-letter {
color: purple;
}
</style>

<!-- markdownlint-disable-file MD001 MD041 -->

<!-- _backgroundColor: whitesmoke -->
<!--  _paginate: skip -->
<!-- _class: lead  -->

# **Regex is not your ex.** 🫤

---

# What is Regex

- Regular expression aka Regex.
- whenever we valid and email, it's regex which check it.
- regex belongs to `RegExp` family.

> hints

yes that `//` `/s` `/g` `/i` syntax and have `.match` `.test` `.exec` method

---

# Syntax

2 Variations

### Literal notation

it takes a pattern between two slashes `/`, followed by **optional flags**

eg.

```js
const rx1 = /[a-zA-Z0-9]*/gi;
// here `/i` is unnecessary as we already wrote a-zA-Z in the pattern; onwards we will keep it mind
```

---

### Constructor notation

```js
new RegExp();
```

here are few variation of this notation

- we can write without `new` keyword.
- it takes 2 parameters, both are optional
  - first parameter takes either string or literal syntax which is `RegExp` object
  - second parameter is optional and it is known as _optional flags_

---

## Constructor notation ...continue

```ts
/
* @param first: string | RegExp;
* @param second?: string;
*/

const pattern = '([a-z0-9]*)';
const flags = 'gi';
const rx2 = new RegExp(pattern, flags);
const rx3 = new RegExp(/(a-zA-Z0-9)*/, 'gi');
const rx4 = RegExp(/[a-zA-Z0-9]*/, 'gi'); // without `new`
```

Note: although all are same but not equal in javascript.

---

# Multiple Pattern are joined with `|`

```js
const one = /[a-z]/;
const two = /[0-9]/;
const one_or_two = new RegExp('(' + one.source + ')|(' + two.source + ')');
// join 2 regex
```

## <!-- EXAMPLE: console.log(rx === rx2) // false  -->

---

# Flags

| Flag | Meaning                     | corresponding property |
| ---- | --------------------------- | ---------------------- |
| d    | index                       | `hasIndices`           |
| g    | global                      | `global`               |
| i    | case insensitive            | `ignoreCase`           |
| m    | multiline                   | `multiline`            |
| s    | allow `.` to match new line | `dotAll`               |
| u    | unicode                     | `unicode`              |
| v    | upgraded 'u'                | `unicodeSets`          |
| y    | sticky                      | `sticky`               |

---
