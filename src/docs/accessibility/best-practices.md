## Defensive Coding
### Remove empty tags
This reduces noise and improves performance - especially when markup is produced. 

``` css
main:empty{
  display: none;
}
```

## Tabindex
### Avoid setting a tabindex larger than 0
Explicit tabindex ordering is not good practice and creates issues longterm. Focus order should follow source order for logical keyboard operation. 

