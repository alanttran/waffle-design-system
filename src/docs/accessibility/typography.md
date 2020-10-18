## Recomendations
### Set a max-width for readability
Recommendation is between 45-75 characters in a line. 60rem is about 60 characters wide. 
``` css
main{
  max-width: 60rem;
}
```
**WCAG Success Criteria 1.4.8 - Visual Presentation (AAA)**
> Width is no more than 80 characters or glyphs

### Set unitless line-height
Paragraph is a good indicator of written text and should get a line-height property compared to other tags. However - for other situations, line-height: 1 is more useful to get the visual alignment and accurate spacing around elements.  

``` css
p{
  line-height: 1.5;
}
```
**WCAG Success Criteria 1.4.8 - Visual Presentation (AAA)**
> Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

### Heading 1
Logically should only have one per page. Both NVDA and JAWS users can press 1 to transport them directly to h1.
``` html
<main id="main">
  <h1>Heading 1</h1>
</main>
```
**WCAG Success Criteria 1.3.1 - Info and Relationships (A)**
> Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 

### Heading 2 is a good title for table of contents
If you have a table of contents - it is a good idea to have the title be an h2 as the next logical step in the heading order. 
``` html
<nav class="toc">
  <h2>Contents</h2>
  <ul>
    <li><a href="#heading">Content</a></li>
    <li>...</li>
  </ul>
</nav>
```

## Avoid

### Justification impairs readability
Justification makes each line the same length which can make them look neater but impair readability. 