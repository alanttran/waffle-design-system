## Set a max-width for readability
Recommendation is between 45-75 characters in a line. 60rem is about 60 characters wide. 
``` css
main{
  max-width: 60rem;
}
```
**WCAG Success Criteria 1.4.8 - Visual Presentation (AAA)**
> Width is no more than 80 characters or glyphs

## Set unitless line-height
Paragraph is a good indicator of written text and should get a line-height property compared to other tags.
``` css
p{
  line-height: 1.5;
}
```
**WCAG Success Criteria 1.4.8 - Visual Presentation (AAA)**
> Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

## Heading 1
Logically should only have one per page. Both NVDA and JAWS users can press 1 to transport them directly to h1.
``` html
<main id="main">
  <h1>Heading 1</h1>
</main>
```
**WCAG Success Criteria 1.3.1 - Info and Relationships (A)**
> Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 