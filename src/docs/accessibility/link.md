## Recomendations
### Link text purpose should be clear
Purpose of link should be determined by link text alone (AAA) or its surrounding context (A). 
``` html
<a href="google.com">Go to Google</a>
```

**WCAG Success Criteria 2.4.4 - Link Purpose (In Context) (A)**
> The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general. 

**WCAG Success Criteria 2.4.9 - Link Purpose (Link Only) (AAA)**
> A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general. 

### External links should be different than regular ones
When linking to an external resource on a separate domain, it's polite to inform the user that the link will take them out of the current context. You can automate this experience with css below.
``` css
[href^="http"]:not([href*="yourdomain.com"])::after{
  display: inline-block;
  width: 1em;
  height: 1em;
  background-image: url('path/to/external-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75% auto;
  content: '(external link)'; /*alt text for screen readers*/
  overflow: hidden;
  white-space: nowrap;
  text-indent: 1em; /*width of icon*/
}
```

### Linkjacking for smoothscroll should be recreated in javacript
If you're linkjacking using .preventDefault() so that you linking will instead scroll - make sure to re-apply the focus state to the correct spot as well as update the URL with the correct hash. 
Source: Inclusive Design Patterns Page 148

### Use visually hidden to provide unique descriptive text
In a list of items that have links "buy now", screen readers will will just read "buy now" with the risk of losing context. Use utility ".visually-hidden" so that they can be independent of context.
``` html
<a href="/product/cat-toy/">
Buy <span class="visually-hidden">Cat Toy</span> Now
</a>
```
**WCAG Success Criteria 2.4.9 - Link Purpose (Link Only) (AAA)**
> A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general. 

## Avoid
### Using links as buttons and vice versa
Creating a link with a role="button" will result in screen readers calling it a button and overrides any accessibility of link. Since link behavior is loading a new page, it is deceptive and confusing for users. 
``` html
<a href="/somwherenew" role="button">Buy Now</a>
```

### Block-level links
HTML5 allows block elements inside &lt;a> inline elements which can be useful in increasing the clickable area however there are many UX concerns. 

- Link doesn't have dedicated label and therefore users won't know what it will do until they interact with it
- May product unexpected screen reader behaviors due to the variety of possibilities within the link
- Focusing on the link will read ALL of its contents, which is verbose
- Accidental click due to lack of visual affordance

``` html
<a href="product/cat-toy">
  <img src="images/cat-toy.jpg">
  <dl>
    <dt>Price:</dt>
    <dd>$33.20</dd>
  </dl>
  <button>Buy Now</button>
</a>
```