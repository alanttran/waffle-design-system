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

