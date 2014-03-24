Simple repo to repoduce a bug, where a helper passed as parameter to a #with block looses its reactivity,
when the #with block was set to false.

You can see a text because ab Session was set to TRUE.
When you press the re-run button, the with helper will rerun, as can be seen in the console.
When you press the FALSE button, the text will disappear (as expected),
but the helper passed to the #with block will also loose is reactivity!