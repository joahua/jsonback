jsonback
========

Brings native JSON object back if clobbered

Discovered the hard way that libraries can unhelpfully overwrite the native JSON object for their own nefarious purposes when dealing with a legacy site using MooTools circa 2009.

This is a little script to reinstate it.

## Changelog

v0.0.1 - No regard for JSON2/JSON3 polyfills, just get `window.JSON` back to its native state (or lack thereof)