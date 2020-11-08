## Best practice
### Set type for your buttons
#### type="submit"
This lets the browser know that this is the button to submit the form. It is important to set this explicitly, otherwise the browser will have to guess. 

#### type="button"
When it is not a submit type, then set it to be type="button". This may seem redundant but this guarantees that the browser will not confuse it for a submit type. 

### Toggle buttons
When you set an aria-pressed attribute on your buttons, screen readers will identify them as "toggle button" or "push button". The presence of the state attribute changes the button's identity. 
``` html
<button type="button" aria-pressed="true">Send</button>
```
Screen reader: "<i>Send, toggle button, pressed/not pressed</i>".

#### Styling
Using box-shadow is reasonable to give a pressed state
``` css
[aria-pressed='true']{
  box-shadow: inset 0 0 0 0.15rem;
}
```