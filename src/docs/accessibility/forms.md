## Consider using fieldsets to group
For radio buttons and checkboxes - fieldsets + legends are definitely recommended for context.

1. If there is more than one distinct set of fields in total, in the same form or context. 
2. You need more than one field in this set
3. Can a legend be used to aid comprehension of the fields, if not, don't use a fieldset
```html
<fieldset>
  <legend>Legend</legend>
</fieldset>
```