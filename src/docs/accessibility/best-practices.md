## Defensive Coding
### Remove tags when content is empty
This reduces noise and improves performance - especially when markup is produced. 

``` css
main:empty{
  display: none;
}
```

### CSS Element-Class pairing helps enforce the right accessibility style
To enforce the right accessibility styles on the right elements, it is best to pair them in CSS even if it feels redundant. This will prevent wrong class usage on other elements. 

``` css
/* this will prevent .call-to-action be used on other elements like button */
a.call-to-action{}
```

## Tabindex
### Avoid setting a tabindex larger than 0
Explicit tabindex ordering is not good practice and creates issues longterm. Focus order should follow source order for logical keyboard operation. 



