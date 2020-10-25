## Best Practice
### Don't infinite scroll
Specifically automatic infinite scroll which will automatically load new content at the current content's end. 

Negative user experiences
- Mouse users dragging the scrollbar down and having the scrollbar change shape & position when new content loads
- Keyboard users cannot get to footer content if the main area keeps adding interactive elements
- Tends to be missing status updates

### Replace automatic infinite scrolling with "Load more" button
This gives control back to the users where they can choose to load more or proceed to other parts of the UI. 

1. User clicks the "Load more" button
2. Button's text changes to "Loading.." and doesn't take more clicks
3. Hidden live region announces "Loading more items"
4. On success, content is rendered
5. Live region announces "Items loaded"
6. Focus is moved from the button to the first of the newly loaded items - smooth scroll to reposition.
6. Note: Good to focus on header of new item by setting tabindex="-1" so it can be focused by javascript 
7. The "Load more" button is moved below
8. Optional - after a few times - prompt them to see if they would like auto-loading
