## &lt;header>

**Landmark: Banner** * unless child of  &lt;aside>, &lt;article>, &lt;main>, &lt;nav>, or &lt;section> or different role attribute.

The header element is used to <span style="text-decoration: underline">**contain the content that appears at the top**</span> of every page of your website: the logo, tagline, search prompt, and possibly a navigational menu. In most cases, the header element is best positioned as a direct descendant of the body element, but it’s also ok to place it inside the main element if you prefer.
### Examples
#### Page Header
``` html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header> 
<main>lorem</main>
```
#### Article Header
``` html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by Jane Smith</p>
  </header>
  <p>We live on a planet that's blue and green, with so many things still unseen.</p>
  <p><a href="https://janesmith.com/the-planet-earth/">Continue reading....</a></p>
</article>
```

## &lt;main>

**Landmark: Main**

Represents the <span style="text-decoration: underline">**dominant content**</span> of the &lt;body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

**A document mustn't have more than one &lt;main> element** that doesn't have the hidden attribute specified.
``` html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

## &lt;nav>

**Landmark: Navigation**

Represents a section of a page whose purpose is to <span style="text-decoration: underline">**provide navigation links**</span>, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

- It's not necessary for all links to be contained in a &lt;nav> element. &lt;nav> is intended only for major block of navigation links; typically the &lt;footer> element often has a list of links that don't need to be in a &lt;nav> element.
- A document may have several &lt;nav> elements, for example, one for site navigation and one for intra-page navigation. aria-labelledby can be used in such case to promote accessibility.
- User agents, such as screen readers targeting disabled users, can use this element to determine whether to omit the initial rendering of navigation-only content.

``` html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```
## &lt;article>

**Document Structure: Article**

Represents a <span style="text-decoration: underline">**self-contained composition in a document, page, application, or site**</span>, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.

- Each &lt;article> should be identified, typically by including a heading (&lt;h1>-&lt;h6> element) as a child of the &lt;article> element.
- When an &lt;article> element is nested, the inner element represents an article related to the outer element. For example, the comments of a blog post can be &lt;article> elements nested in the &lt;article> representing the blog post.
- Author information of an &lt;article> element can be provided through the &lt;address> element, but it doesn't apply to nested <article> elements.

``` html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="user_reviews">
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>...</footer>
    </article>
  </section>
  <footer>
    ...
  </footer>
</article>
```

## &lt;section>

**Landmark: Region** * if given an acccessible name via aria-labelledby or aria-label

Represents a <span style="text-decoration: underline">**standalone section**</span>  — which doesn't have a more specific semantic element to represent it — contained within an HTML document. Typically, but not always, sections have a heading.

- Use a &lt;div> if you’re wrapping up some content purely to make it easier to style the content or to make it easier for some JavaScript to get ahold of it.
- Use a &lt;section> if you would list the content as an item when writing out an outline of the document.

``` html
<section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```

## &lt;aside>

**Landmark: Complementary**

Represents a portion of a document whose <span style="text-decoration: underline">**content is only indirectly related to the document's main content**</span>. Asides are frequently presented as sidebars or call-out boxes.

``` html
<article>
  <p>The Disney movie <cite>The Little Mermaid</cite> was
   first released to theatres in 1989.</p>
  <aside>
    <p>The movie earned $87 million during its initial release.</p>
  </aside>
  <p>More info about the movie...</p>
</article>
```

## &lt;address>

Indicates that the enclosed HTML provides contact information for a person or people, or for an organization.

``` html
<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```

## &lt;footer>

**Landmark: ContentInfo** * unless child of  &lt;aside>, &lt;article>, &lt;main>, &lt;nav>, or &lt;section> or different role attribute.

Represents a <span style="text-decoration: underline">**footer for its nearest sectioning content or sectioning root element**</span> . A footer typically contains information about the author of the section, copyright data or links to related documents.

### Examples
#### Footer in article
``` html
<article>
  <h1>How to be a wizard</h1>
  <ol>
      <li>Grow a long, majestic beard.</li>
      <li>Wear a tall, pointed hat.</li>
      <li>Have I mentioned the beard?</li>
  </ol>
  <footer>
      <p>© 2018 Gandalf</p>
  </footer>
</article>
```

#### Footer main page
``` html
<body>
  <header>...</header>
  <a href="#main">Skip link to main content</a>

  <main id="main">Lorem </main>

  <footer>...</footer>
</body>
```

## Sources
- [MDN Content Sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)