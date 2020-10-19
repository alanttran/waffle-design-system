## Recommendations

### Use aria-expanded to communicate state

Screen readers listen for changes and update each time it takes place. For menus, it is important to communicate whether it has 'collapsed' (false) or 'expanded' (true). When focusing on the menu button, screen readers should read "Site navigation, menu button, collapsed".

```html
<!-- Hamburger site menu mobile -->
<nav arial-label="site">
  <button aria-expanded="false">
    <svg><use xlink:href="#navicon"></use></svg>
    Menu
  </button>
  <ul hidden>
    <li>...</li>
  </ul>
</nav>
```

#### Switching state of menu requires javascript

Having this as a crucial vanilla JS in your document separate from your libraries should allow your site to be usable even if Javascript fails or is switched off.

- No CSS dependency on menu system due to switching state via hidden attribute
- Emerges as part of document flow, scrollable into view
- Hidden attribute on parent makes childen unfocusable, setting height:0 for animation can have users tab through invisible elements

```javascript
(function() {
  // get button and menu nodes
  var button = document.querySelector('[aria-label="site"]button');
  var menu = document.nextElementSibling;
  // set initial (closed menu) states
  button.setAttribute("aria-expanded", "false");
  button.hidden = false;
  menu.hidden = true;
  button.addEventListener("click", function() {
    // toggle menu visibility
    var expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = !expanded;
  });
})();
```
