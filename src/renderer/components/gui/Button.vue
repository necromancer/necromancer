<template>
<a class="download-button" role="button" href="#">
    <span class="download-text">
        <span class="download-big">{{buttonText}}</span>
    </span>
</a>
</template>

<script>
export default {
    props: [
    'buttonText'
  ]
}
</script>

<style scoped>
a {
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

.download-button {
    -webkit-transition: 120ms;
    -moz-transition: 120ms;
    -o-transition: 120ms;
    transition: 120ms;
}

::-moz-selection {
    background: #25a;
    color: #fff;
    text-shadow: none;
}

::selection {
    background: #25a;
    color: #fff;
    text-shadow: none;
}

a::-moz-selection {
    color: #ff0;
}

a:hover::-moz-selection {
    color: #f60;
}

a::selection {
    color: #ff0;
}

a:hover::selection {
    color: #f60;
}

a:link,
a:visited {
    color: #25a;
    text-decoration: none;
}

a:hover,
a:active {
    color: #36f;
    text-decoration: underline;
}

.download-button {
    display: inline-block;
    outline: none;
    font-size: 1.6em;
    line-height: 1.2;
    text-align: left;
    width: 11em;
    margin: 0 auto;
    padding: .6em;
    border-radius: 4px;
}

.download-button {
    background: #03141e;
    background: linear-gradient(to right, #03141e, #082739 80%);
    border: 2px solid #b48648;
    box-shadow: 0px 0px 2px 1px #000, inset -1px 1px 0px 1px #082739, inset 1px -1px 0px 1px #03141e, inset -2px 2px 0px 2px #1c5179;
}

.download-button:link,
.download-button:visited,
.download-button:active {
    text-shadow: 0px -1px 0px #000;
    color: #bcb088;
    text-decoration: none;
}

.download-button:hover,
.download-button:focus {
    text-shadow: 0px -1px 0px #000, 0px 0px 8px #8ef;
    color: #ddd;
    background: #04223b;
    background: linear-gradient(to right, #021321, #093547, #063757, #04223b);
    border: 2px solid #c49e6b;
    box-shadow: 0px 0px 2px 1px #000, inset -1px 1px 0px 1px #021321, inset 1px -1px 0px 1px #04223b, inset -2px 2px 0px 2px #0d608e;
}

.download-button:active {
    box-shadow: 0px 0px 2px 1px #000, inset -1px 1px 3px 3px #000;
}

.download-text,
.download-big {
    display: block;
    text-align: center;
}

.download-arrow {
    float: left;
    margin: 0 0.2em 0 0;
    line-height: 1.2;
}

.download-big {
    font-family: 'Lucida Grande', 'Trebuchet MS', 'DejaVu Sans Condensed', Arial, sans-serif;
    font-weight: bold;
}

/*! CSS Used fontfaces */

@font-face {
    font-family: 'FontAwesome';
    src: url(https://www.wesnoth.org/wesmere/fonts/fontawesome-webfont-min-1.1.1.eot?v=4.7.0);
    src: url(https://www.wesnoth.org/wesmere/fonts/fontawesome-webfont-min-1.1.1.eot#iefix&v=4.7.0) format("embedded-opentype"), url(https://www.wesnoth.org/wesmere/fonts/fontawesome-webfont-min-1.1.1.woff2?v=4.7.0) format("woff2"), url(https://www.wesnoth.org/wesmere/fonts/fontawesome-webfont-min-1.1.1.woff?v=4.7.0) format("woff"), url(https://www.wesnoth.org/wesmere/fonts/fontawesome-webfont-min-1.1.1.ttf?v=4.7.0) format("truetype"), url(https://www.wesnoth.org/wesmere/fonts/fontawesome-webfont-min-1.1.1.svg?v=4.7.0#fontawesomeregular) format("svg");
    font-weight: normal;
    font-style: normal;
}

</style>
