## Recommendations
### Use Alt text where descriptions aren't adjacent
Choosing precisely what text makes the difference between accessible and inaccessible, inclusive and exclusive. Ask "Does the image contribute meaning to the current page or context?". If so, then we can provide information beyond titles. 

``` html
<img src="/images/cat.jpg" alt="Smol kitty trying to sleep">

<!-- no need for alt text if adjacent text the descriptor -->
<div>
  <img src="/images/rating-4-5-stars.jpg" alt="">
  4 out of 5 stars
</div>
```

### Create performant images
1. **Compression** - If nothing else, make sure images are compressed. Automated tools like ImageOptim can help. 
2. **Lazy Loading** - No need to load images unless they are to be seen. 
3. **The &lt;picture> element** - allows you to tailor images to viewports
```html
<picture>
  <source media="(min-width:800px;)" srcset="/images/cat-large.jpg">
  <img src="/images/cat-smol.jpg" alt="cat trying to sleep">
</picture>
```