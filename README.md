![MIT License](https://img.shields.io/apm/l/mit?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dw/@vthechamp/templately?style=for-the-badge)
![NPM Bundle Size](https://img.shields.io/bundlephobia/min/@vthechamp/templately?style=for-the-badge)
![NPM version](https://img.shields.io/npm/v/@vthechamp/templately?style=for-the-badge)

# TemplatelyJS

This is an extremely small and lightweight package to enable the usage of custom templates in static HTML websites.

## Usage/Examples

### `index.html`
```html
<!DOCTYPE html>
<html>
<head>
    ...
    <!-- Include the TemplatelyJS package -->
    <script src="/templately.js"></script>
</head>
<body>
    <!-- Use a custom template -->
    <custom-template src="/templates/navbar.html"></custom-template>
</body>
</html>
```

### `templates/navbar.html`
```html
<!-- Define a custom template -->
<nav class="nav">
    <h1 class="logo"><a href="#">Flexbox</a></h1>
    <ul class="main-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav> 
```