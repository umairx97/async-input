<h1 align="center" style="font-size: 50px; border:none;">React Async Input</h1>

<div align="center" style="border: transparent">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub issues open](https://img.shields.io/github/issues/umairx97/async-input)](https://github.com/umairx97/async-input/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/umairx97/async-input)](https://github.com/umairx97/async-input/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## 📝 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🚀 Installation <a name="installation"></a>

You can install the package using yarn or npm

### npm
```
npm install async-input
```

### yarn
```
yarn add async-input
```

## 💡 Usage <a name="usage"></a>

```javascript
import React from 'react'
import AsyncInput from 'async-input'

 <AsyncInput
    value={this.state.text}
    nativeProps={{
      type: "text",
      placeholder: "wow",
    }}
    onChange={(text) => this.setState({ text })}
    debounceTime={1000}
/>
```

## Props

Prop | Type | Description | Default
------------ | ------------- | ------------ | -------------
elementType | string | constructs the element from the type given eg. `input` or `textArea` | input
onChange | function | onChange handler function to receive the input value | null 
debounceTime | number | time to wait for the return value from input | 0.5s
nativeProps | object | native properties that can be passed to html input or text area, e.g. `style`, `className` etc | {}


## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Frontend Library
- [Babel](https://babeljs.io/) - Use next generation JavaScript, today.
- [Webpack](https://webpack.js.org/) - Javascript Bundler


## ✍️ Authors <a name = "authors"></a>

- [@umairx97](https://github.com/umairx97) - Idea & Initial work