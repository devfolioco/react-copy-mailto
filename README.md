## react-copy-mailto

[![npm version](https://badge.fury.io/js/react-copy-mailto.svg)](https://badge.fury.io/js/react-copy-mailto) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-copy-mailto)

A fully customizable React component for copying email from `mailto` links.

## Motivation
The one thing we all can agree on that we hate it when the default mail app pops up after clicking on the `mailto` links. Most of the time we just want to copy the email address and that's where this module comes into play. Big shout out to [Kuldar](https://twitter.com/kkuldar) whose tweet [thread](https://twitter.com/kkuldar/status/1270736717939716097) inspired us to build this.


## Demo

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
| email  	|  string 	|  none 	|  The email to be copied 	|
| children  	|  ReactNode  	|  null 	|  Use this if you want to use some custom component inside the anchor tag. 	|
| defaultTooltip  	|   string	|   "Copy email address"	|   Text shown in the tooltip when the user hovers over the link.	|
| copiedTooltip 	|   string	|   "Copied to clipboard!"	|   Text shown in the tooltip when the user clicks on the link and the text is copied to clipboard.	|
| containerStyles  	|   style object	|   none	|   The styles to be applied to the container	|
| tooltipStyles  	|   style object	|   none	|   The styles to be applied to the tooltip	|
| anchorStyles  	|   style object	|   none	|   The styles to be applied to the anchor	|

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

