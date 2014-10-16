React Primer
============

This little repo is designed to gently introduce developers into the wonderful world of React. Each demo's source is annotated with comments and can be read basically top-to-bottom.

View the Demos
--------------

The demos are [available online](http://binarymuse.github.io/react-primer/build/).

Running Locally
---------------

Clone the repository and open `build/index.html` in your browser; the demos are pre-built and checked in to the repo.

Building
--------

Requires Node.js.

    npm install && npm start

Then open `build/index.html` in your browser. The Node process will automatically recompile the demos on any change; check your console output for syntax errors.

Further Reading
---------------

The [React site](http://facebook.github.io/react/) has a ton of info, and I recommend checking it out. It also contains more in-depth API documentation.

The "Top-Down Data Flow & shouldComponentUpdate" demo introduces the idea of a top-level data store that causes an application-wide re-render whenever its data changes; this is a nice stepping stone to the [flux architecture](http://facebook.github.io/flux/docs/overview.html), including flux libraries like [Fluxxor](http://fluxxor.com/).
