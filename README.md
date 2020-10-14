## react-copy-mailto
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![npm version](https://badge.fury.io/js/react-copy-mailto.svg)](https://badge.fury.io/js/react-copy-mailto) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-copy-mailto)

A fully customizable React component for copying email from `mailto` links.

## Motivation
The one thing we all can agree on that we hate it when the default mail app pops up after clicking on the `mailto` links. Most of the time we just want to copy the email address and that's where this module comes into play. Big shout out to [Kuldar](https://twitter.com/kkuldar) whose tweet [thread](https://twitter.com/kkuldar/status/1270736717939716097) inspired us to build this.


## Demo
[Go to Hosted Demo](https://devfolioco.github.io/react-copy-mailto)
<br/>
![here](https://media.giphy.com/media/MEYN4oO6FZan5wXQ3w/giphy.gif)


## Installation and Usage

The easiest way to use this library is to install it via yarn or npm

```
yarn add react-copy-mailto
```

or

```
npm install react-copy-mailto
```

Then just use it in your app:

```jsx
import React from "react";
import CopyMailTo from "react-copy-mailto";

const YourComponent = () => (
    <div>
        <CopyMailTo email="email@domain.com" />
    </div>
);
```

## Props

You can customize almost every aspect of this component using the below props, out of which **email is the only required prop**.

|  Name 	|   Type	|  Default 	|   Description	|
|:-:	|---	|---	|---	|
| email  	|  string 	|  none 	|  The email to be copied. 	|
| theme  	|  string 	|  dark 	|  Use "light" for light background. 	|
| children  	|  ReactNode  	|  null 	|  Use this if you want to use some custom component inside the anchor tag. 	|
| defaultTooltip  	|   string	|   "Copy email address"	|   Text shown in the tooltip when the user hovers over the link.	|
| copiedTooltip 	|   string	|   "Copied to clipboard!"	|   Text shown in the tooltip when the user clicks on the link and the text is copied to clipboard.	|
| containerStyles  	|   style object	|   none	|   The styles to be applied to the container.	|
| tooltipStyles  	|   style object	|   none	|   The styles to be applied to the tooltip.	|
| anchorStyles  	|   style object	|   none	|   The styles to be applied to the anchor.	|

## Development

- Install the dependencies

```
yarn
```

- Run the example on the development server

```
yarn demo:dev
```

## Contributing

[![GitHub issues](https://img.shields.io/github/issues-raw/devfolioco/react-copy-mailto?logo=github)](https://github.com/devfolioco/react-copy-mailto/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/devfolioco/react-copy-mailto?logo=git)](https://github.com/devfolioco/react-copy-mailto/pulls)

Feel free to open [issues](https://github.com/devfolioco/react-copy-mailto/issues/new/choose) and [pull requests](https://github.com/devfolioco/react-copy-mailto/pulls)!

## License

[![NPM](https://img.shields.io/npm/l/react-copy-mailto)](https://github.com/devfolioco/react-copy-mailto/blob/master/LICENSE)


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://prateeksurana.me"><img src="https://avatars3.githubusercontent.com/u/21277179?v=4" width="100px;" alt=""/><br /><sub><b>Prateek Surana</b></sub></a><br /><a href="https://github.com/devfolioco/react-copy-mailto/commits?author=prateek3255" title="Code">💻</a> <a href="#design-prateek3255" title="Design">🎨</a> <a href="#content-prateek3255" title="Content">🖋</a> <a href="https://github.com/devfolioco/react-copy-mailto/commits?author=prateek3255" title="Documentation">📖</a></td>
    <td align="center"><a href="http://ankiiitraj.github.io"><img src="https://avatars2.githubusercontent.com/u/48787278?v=4" width="100px;" alt=""/><br /><sub><b>Ankit Raj</b></sub></a><br /><a href="#tool-ankiiitraj" title="Tools">🔧</a> <a href="https://github.com/devfolioco/react-copy-mailto/commits?author=ankiiitraj" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
