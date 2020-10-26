## Defensive Coding
### Remove tags when content is empty
This reduces noise and improves performance - especially when markup is produced. 

``` css
main:empty{
  display: none;
}
```

### CSS Element-Class pairing helps enforce the right accessibility style
To enforce the right accessibility styles on the right elements, it is best to pair them in CSS even if it feels redundant. This will prevent wrong class usage on other elements. 

``` css
/* this will prevent .call-to-action be used on other elements like button */
a.call-to-action{}
```

## Tabindex
### Avoid setting a tabindex larger than 0
Explicit tabindex ordering is not good practice and creates issues long term. Focus order should follow source order for logical keyboard operation.

### Set tabindex="-1" for when you need javascript to focus
"-1" removes the element from the natural tab order and is best NOT to use on actual clickable element. Instead - these can be used on headers or elements where you need javascript to refocus the user due to dynamic content or a change in the UI.

## Test your layouts with dynamic content
Using a js library like [forceFeed.js](https://github.com/Heydon/forceFeed) - it allows you to feed the proposed layout with randomized arrays of content within certain parameters. 

## Use CSS to passively/actively show errors in markup
Example below, any tab interface needs to have the role="tablist". You can passively show errors in console or the UI if the developer implemented it wrong.
```css
.tab-interface ul:not([role="tablist"]){
  ERROR: The tab interface <ul> must have tablist WAI-ARIA role
  outline: .5em solid red;
}
```


