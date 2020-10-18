## Use the &lt;nav> tag
Or if you are repurposing old code then use **role="navigation"**. It is expected that in a navigation component - that there would be links. 
``` html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

## Describing the current page
Use **aria-described-by** to allow screen readers to read information that is hidden visually. Despite being hidden, because it has a relationship to the link, the link still has access to "Current page" and it will be announced on focusing the link. 

``` html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/" aria-describedby="current">About</a></li>
  </ul>
  <div hidden id="current">Current Page</div>
</nav>
```
## Use aria-labelledby or aria-label to describe multiple &lt;nav>
Unlike headings and links, landmarks do not constitute their own labels, they are simply identified by their role. To avoid "Navigation, Navigation" - use **aria-labelledby** and relate it to the heading element. 

``` html
<nav class="toc" aria-labelledby="contents-heading">
  <h2 id="contents-heading">Contents</h2>
  <ul>
    <li><a href="#heading">Heading</a></li>
    <li>...</li>
  </ul>
</nav>
```

If lacking a header - you can use **aria-label** instead. 
``` html
<nav class="toc" aria-label="contents">
  <ul>
    <li><a href="#heading">Heading</a></li>
    <li>...</li>
  </ul>
</nav>
```

In either implementation, the screen reader will read the landmark as "Contents navigation". For each focusable link it will read "Contents navigation landmark, list, one of four items, our history, link". 
