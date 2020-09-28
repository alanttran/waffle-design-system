Useful code snippets to achieve certain use cases while satisfying accessibility requirements. 

## Visually Hidden
To hide the element visually without becoming silenced in screen reader software. It is best to avoid 'display: none, visibility: hidden, height: 0, width: 0'.
``` css
.visually-hidden{
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
```