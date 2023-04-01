# HTML \<template\> tag

Create an HTML template and include it everywhere on your website.

## HTML

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>HTML-template</title>

        <!-- include script -->
        <script src="./js/template.js" type="module" defer></script>
    </head>
    <body>
        <template src="./template.html"></template>
    </body>
</html>
```

## Template

This is the HTML template. Everything inside the `<head>` tag will later be replaced into the `<head>` tag of the actual page.

```html
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
