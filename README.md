# portal

( project name is subject to change )

Remove elements that are not near visible regions while maintain the scroll bar height and position.


## Why

Reflow is expensive especially when there are too many elements in webpage. By only inserting elements in visible ranges, we can effectively limit the amount of elements.

This is designed to be an alternative or replacement for `Clusterize.js`. The reason for making an alternative is because `Clusterize.js` uses GPL License and you have to purchase license for commercial use, thus is not suitable as a fundamental dependency of other open source projects.


## Install

    npm install --save portal

## Usage

include required js file:

    <script src="path-to-portal.js"></script>


initialize by passing the container element:

    new portal({root: mycontainer});


Please note that we expect the container to be limited in height and scrollable.


## License

MIT
