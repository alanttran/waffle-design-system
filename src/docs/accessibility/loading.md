## Best Practice
### Use aria-live
Live regions announce their content simply when that content changes. We can provide commentary to screen reader users without asking them to leave their location in the page. 
```html
<div aria-live="assertive" role="alert">
  Please wait. Loading products.
</div>
<div aria-live="assertive" role="alert">
  Loading complete. 23 products listed.
</div>
```
## Avoid
### Visual indicators alone
Image gif alone won't be acknowledged by a screen reader. 
