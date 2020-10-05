Custom elements allow you to tie custom style and behavior to an alement of your own conception but you will need to add accessibility features manually. 

## Toggle Button Example
Script below registers your custom element but it does not have the behavior of &lt;button>.
``` javascript
// Custom Elements v1 syntax
customElements.define('toggle-button', toggleButton);

```

### Extend HTML Button Prototype
Piggybacking the **HTMLButtonElement**, that allows the button to get the accessibility for free. 
``` javascript
class ToggleButton extends HTMLButtonElement{
  constructor(){
    super();
  
    this.setAttribute('aria-pressed', 'false');

    this.toggle = () => {
      var isPressed = this.getAttribute('aria-pressed') === 'true';
      this.setAttribute('aria-pressed', String(!isPressed));
    };

    this.addEventListener("click", () => {
      this.toggle();
    });
  }

  customElements.define('toggle-button', ToggleButton, {
    extends: 'button'});
}

```