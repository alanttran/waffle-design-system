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
