# Accessibility
- ARIA "role=form" on a &lt;form> turns the widget into a region making it navigable in screen readers using shortcuts. 
- The &lt;form> contains a single &lt;fieldset> to group radio options under the label "Sort by" followed by the submit button. 
  - When &lt;input> is focused, the &lt;legend> content ("Sort by...") is announced followed by the &lt;input>'s&lt;label> ("...most recent").
  - Full phrase when focused on first option: "Sort by most recent, selected, radio button, one of four."
    - "one out of four" is the count based on matching "name = sort-method"