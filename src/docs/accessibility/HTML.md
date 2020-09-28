## Set the doctype 
Prevents the browser from going into quirks mode and rending your content wrong
``` html
<!DOCTYPE html>
```

## Set a language
``` html
<html lang="en">
```
**WCAG Success Criteria 3.1.1 - Language of the Page (A)**
> The default human language of each Web page can be programmatically determined. 

## Set the viewport meta tag
Allows user to zoom into content
``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Set the title tag
``` html
<title>Lorem </title>
```
**WCAG Success Criteria 2.4.2 - Page Titled (A)**
> Web pages have titles that describe topic or purpose

## Set up non-blocking stylesheets
Prevents FOIT (Flash of Invisible Text)
``` html
<link rel="stylesheet" href="main.css" media="none" onload="if(media!='all')media='all'">
<noscript><link rel="stylesheet" href="main.css"></noscript>
```

## Set the main tag & skip link
``` html
<a href="#main">Skip link to main content</a>
<main id="main">Lorem </main>
```
**WCAG Success Criteria 2.4.1 - Bypass Blocks (A)**
> A mechanism is available to bypass blocks of content that are repeated on multiple Web pages. 

**WCAG Success Criteria 1.3.1 - Info and Relationships (A)**
> Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 

# Inclusive Document
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">

    <!-- viewport declaration that does not disable zooming-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- non-blocking base64-encoded font resource -->
    <link rel="stylesheet" href="fonts.css" media="none" onload="if(media!='all')media='all'">
    <noscript><link rel="stylesheet" href="fonts.css"></noscript>

    <!-- non-blocking stylesheet -->
    <link rel="stylesheet" href="main.css" media="none" onload="if(media!='all')media='all'">
    <noscript><link rel="stylesheet" href="main.css"></noscript>

    <!-- descriptive label for the page -->
    <title>Inclusive Design Template</title>
  </head>
  <body>
    <a href="#main">Skip link to main content</a>

    <main id="main">Lorem </main>

    <!-- non-blocking javascript resource -->
    <script src=scripts.js"></scipt>
  </body>
</html>
```