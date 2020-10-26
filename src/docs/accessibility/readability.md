## Test the readability of your product
[Flesch-Kincaid](https://goodcalculators.com/flesch-kincaid-calculator/) tests gives a score on the readability of your content. You want a score of 60+ or at least 8th/9th grade level for to be easy to read for your users. You can use a [TRAY Chrome browser extension](https://chrome.google.com/webstore/detail/tray-readability-tool/eccbjfaplogblgjpopbihpgfgmlgjamf?hl=en-GB) or install a [readability checker](https://www.npmjs.com/package/readability-checker) in your project. Products like [Tenon](https://tenon.io/) can prove useful for accessible end to end processes. 

## Set the dir
International audience where languages read right ot left - it is important to set the direction. 
```html
<html lang="ar" dir="rtl">
```
Since CSS is not affected by this - it is a good idea to reverse layout of floated content.
```css
.content{
  float: left;
}
[dir="rtl"] .content{
  float: right;
}
```



