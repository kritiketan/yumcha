<h1 align="center">
    <br>Yumcha ☕️ 💻<br>
</h1>
<h2 align="center">One useless website at a time</h2>

The following module was developed as part of this [tutorial blog](https://kritiketan.co). Each call to the module responds with one useless website for you to browse.
## Installation Instructions


This is a [Node.js](https://nodejs.org/en/download/) module available through the npm registry.

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 10 or higher is required.

Installation is done using the [npm install command](https://docs.npmjs.com/downloading-and-installing-packages-locally)

```console
$ npm install yumcha
```

### API

Example:

```console
const yumcha = require('yumcha')

console.log(yumcha.sip())
// https://trypap.com/
```

### Command Line

Example:

```console
$ yumcha
// https://trypap.com/
```

### Story

Yumcha is a chinese tradition involving tea and snacks (usually dimsum).
  The western world equivalent of a coffee break.
  When life was not just a bridge from one lockdown to another,
  I for one used to enjoy coffee breaks with colleagues a LOT.
  Those breaks now involve, browsing through deep recesses of the internet
  which in most cases are useless.
  So here are some of the most useless websites for your coffee (Productivity) breaks


### Suggested folder structure

The folder structure and functionality of the package has been kept to a minimum
for a quick start up. A better folder structure would be as follows:

```console

Yumcha
    +bin
        - yumcha-bin.js
    +src
        - index.js
        - util.js
        - *any other files to extend the functionality*
        + data
            - site-list.js
            - *Other DB/API connections*
        
```



