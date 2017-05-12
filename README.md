# Why web components?

So you can organize all of the HTML, CSS and Javascript required for a section of the web app into a single unit.

Other libraries offer componentization but achieving just by following the W3C standard gives our code more longevity. We can use the plain web components we develop alone or with different libraries and aren't tying our code to a specific version of an underlying framework.

# Can I use them now

The most important part of web components: custom elements is well supported now. Creating an npm package out of your web component and its dependencies gives you an easily distributable module that can be reused with a require statement and custom element placement.

# Custom Tag Example

Create your own tags like:

```<my-component></my-component>```

And have its content driven by your javascript, templated HTML and CSS. This code refers to web components v1 which is supported by a large percentage of browsers today and looks like it will eventually get support everywhere but IE11. These examples take advantage of the custom component part of the web component standard, and a small polyfill to use that everywhere but do not attempt to use HTML imports or shadow DOM as those have less browser support and larger polyfills. The capabilities those offer as far as encapsulating CSS and allowing use of HTML template are achieved through ES6 templates and inserting CSS through sheetify.

## Boilerplate

A web component requires your classname to extend HTMLElement, a constructor referencing super and a definition line tying your custom tag name to your classname:

```
class MyComponent extends HTMLElement {
  constructor() {
    super();
  }
}

window.customElements.define('my-component', MyComponent);
```

## Lifecycle callbacks

Any functionality for your component will be added in a lifecycle callback.

- connectedCallback
- disconnectedCallback
- adoptedCallback
- attributeChangedCallback

The connectedCallback is executed when the custom tag is inserted into the DOM so you can add that method right before the end of your component class:

```
connectedCallback() {
  this.innerHTML = 'hello world';
}
```

The attributeChangedCallback is what allows your component to dynamically react. In order to use this you must declare the attribute to watch for changes in the observedAttributes array

```
static get observedAttributes() {
  return ['greeting'];
}
```

Then add the callback:

```
attributeChangedCallback(attrName, oldVal, newVal) {
  this.innerHTML = 'hello '+newVal;
}
```

Then the following code executed on the page outside your component would trigger the update:

```
document.querySelector('my-component').setAttribute('greeting','dood')
```

## Nesting Components

Using a custom component inside another component is fine, if you have an initial component that writes another custom tag the browser will pick that up and execute the lifecycle callbacks of the nested custom elements as the new custom element hits the DOM.

## Using with templates

Use template literals for your templating language in order to transform JSON to HTML. Reference a template file in your web component folder like:

```
html = require('./template.js')(data);
```

sample template.js file using map to loop and function for executing additional code inside returned string:

```
module.exports = function(schools) {
  return `
    <ul class="schools">
      ${schools.map(function(school) {
        return `<li class="schools__nearby-result">
          <span class="schools__rating">
            <span class="rating-display ${ratingClass(school.rating)}">${school.rating!=null?school.rating:'-'}</span>
          </span>
          <span class="schools__dist font-heavier">${school.distance}</span>
          ${(function () {
            if(school.sazId == search.sazId) {
              return `<span class="assigned font-heavier">Assigned</span>`;
            } else {
              return '';
            }
          }())}
        </li>`
      }).join('\n      ')}
    </ul>`;
}
```

## Including CSS

You can use <a href="https://www.npmjs.com/package/sheetify">sheetify</a> to insert CSS specific to your module into the page as the element is rendered, first

```const css = require('sheetify')```

Then in your createdCallback pass your in local CSS file and it will inject it into the page:

```css('./index.css')```

Alternatively just include the CSS file in your component directory as part of you sitewide CSS concatenated file.

## Polyfills

```require('document-register-element')```

This <a href="https://www.npmjs.com/package/document-register-element">polyfill</a> from <a href="https://github.com/WebReflection">@webreflection</a> works very nicely in the browsers that don't support custom elements yet which are IE, Edge and FF as of 4/17

### Transpiling

Template literals are supported everywhere except IE11 <a href="http://caniuse.com/#search=template">http://caniuse.com/#search=template</a> so you probably want to transpile when using template literals just for that browser.

## Initializing a custom tag with HTML

Your custom tag is ignored by browser rendering and internal HTML is displayed

```
<my-component>
  <ul>
    <li>one</li>
    <li>two</li>
  </ul>
</my-component>
```

## Examples

### Hello world

[hello world sample](examples/hello-world/)

### Nested Hello world

[nested hello world sample](examples/nested/)

### Browserified

[browserified](examples/browserified) This version of a hello world component has a separate template file included with a require statement and it is packaged via the browserify command:

```
browserify my-component.js > dist.js
```

This creates the distribution file by packaging all the required files into a single file so we don't have to retrieve any more templates or compile them before transforming the content.  

### Real World

[sample widget site](https://aaronhans.github.io/sample-web-component/examples/real/)


## Additional Web Components Resources

<a href="https://w3c.github.io/webcomponents/spec/custom/">W3C specification</a>

<a href="https://developers.google.com/web/fundamentals/getting-started/primers/customelements">Google developers: Custom Elements v1</a>
