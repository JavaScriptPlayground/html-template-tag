# HTML \<template\> tag script

Create an HTML template and include it everywhere on your website using the `<template>` tag.

## HTML

This is the main HTML page where we want to use the `<template>` tag. Use the `src` attribute to specify the source for the template.

```html
<!-- index.html (before template replace) -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>HTML-template</title>

        <!-- include template.js script -->
        <script src="./template.js" type="module" defer></script>
    </head>
    <body>
        <template src="./template.html"></template>
    </body>
</html>
```

## Template

This is the HTML template. Everything inside the `<head>` tag will later be replaced into the `<head>` tag of the actual page. The same is applied to the `<body>` tag.

`<script>` tags are **not** executed!

```html
<!-- template.html -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```

## Replace

This is the final version of the HTML page after the templates have been replaced.

```html
<!-- index.html (after template replace) -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>HTML-template</title>

        <!-- include script -->
        <script src="./js/template.js" type="module" defer></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```
