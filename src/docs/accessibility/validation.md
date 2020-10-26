## Best Practices

### Separate key messages as separate concerns
1. Something is broken (the form has errors)
2. What needs fixing (what will make the form valid)

#### Something broken
Set a live region above the button since that is where the user was last at. Some validation refocuses the user onto the first error but this is likely to be jarring. We should let the user navigate when they are ready.
```html
<div id="error" aria-live="assertive" role="alert"></div>
<button type="submit">Register</button>
``` 
#### What needs fixing
Provide two pieces of information
1. The field is invalid
2. What would make the field valid

##### 1. The field is invalid
Use aria-invalid to communicate this. This will announce "invalid" on screen readers. 
```html
<input aria-invalid="true">
```
Leveraging this properly - you can set up some CSS
``` css
[aria-invalid="true"]{
  border-color: red;
}
```
##### 2. What would make the field valid
Use aria-describedby to connect the invalid field to additional information.
``` html
<label for="password">Password</label>
<input type="password" id="password" aria-invalid="true" aria-describedby="password-hint">
<div id="password-hint">You password must be at least 6 characters long</div>
```

### When to send feedback to the user
Avoid interruptions and don't flag errors on the first run. It is best to present errors after the attempted submission. 