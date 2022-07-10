---
date: 2022-3-5
tag: 
  - hyn
  - web
  - frontend
  - introduction
  - beginner
  - css
  - html
  - y2022
  - m3
  - d5
  - y2022/m3
author: hyn
# post
title: Introduction To CSS
description: Simple introduction to CSS for absolutely beginner
summary: Simple introduction to CSS for absolutely beginner
thumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1646454274/github-nguyenhy-hp/sky-6.jpg
bigThumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_600/v1646454274/github-nguyenhy-hp/sky-6.jpg
thumbAlt: sky
# meta
meta:
  - name: keywords
    content:
    - hyn
    - web
    - blog
    - me
    - hyn
    - frontend
    - introduction
    - beginner
    - web development
    - HTML
  - name: author
    content: nguyen hy
  - name: location
    content: Vietnam 
  - name: title
    content: Introduction To HTML
  - name: description
    content: Simple introduction to HTML for absolutely beginner

    # og tag
  - name: og:type
    content: website
  - name: og:title
    content: Introduction To HTML
  - name: og:description
    content: Simple introduction to HTML for absolutely beginner
  - name: og:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1646454274/github-nguyenhy-hp/sky-6.jpg
  - name: og:url
    content: https://nguyenhy.github.io/2022/02/24/introduction-to-html/

    # twitter tag
  - property: twitter:url
    content: https://nguyenhy.github.io/2022/02/24/introduction-to-html/
  - property: twitter:title
    content: Introduction To Web Development
  - property: twitter:description
    content: Simple introduction to web development for absolutely beginner
  - property: twitter:image
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_800/v1646454274/github-nguyenhy-hp/sky-6.jpg
---

#### What is CSS for?
CSS is a language for specifying how documents are presented to endpoint users, it allows us to create good-looking, less-boring, readable web pages. We can define rules specifying groups of styles that should be applied to particular elements or groups of elements on documents.
#### starting with some HTML
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="xxPBKNW" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/xxPBKNW">
  Introduction To CSS - hello world - plain</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>

Saying, "i need the **hello worlds** is in the middle of page, horizontally", the below rules of style will help me out.
``` css
span {
  text-align: center;
}
```

<br>

CSS can be used for very basic document text styling - changing font style, text color, highlight text,... It can also be used to create complex layouts with animation. We'll explore more and more of CSS later in this series but for now:

> <p style="text-align: center;">we use CSS for styling things</p>

<br>

#### CSS syntax
CSS rules always start with a selector. this's the part of a CSS rule to specify what elements in a document will take rules effects.

``` css
/* "span" is a selector to indicate that all "span" elements will be styled by the following rules*/
span {
  /* the property "color" following by "red" value indicate that */
  /* text inside "span" element in the document will have red color */
  color: red;

  /* we can write as much style inside the bracket "{ ... }" as we need */
  ...
}
```

<br> 

#### class-based CSS selector

So far, we have styled elements based on their HTML element names. This works as long as we need all elements on the page to have the same style, 
but this's not the case most of the time. In this section, we will look into some other ways of writing selectors for CSS rules.

##### basic selectors
``` html
<!doctype html>
<html lang="en">
  <head></head>
  <body>
    <span class="class-a" id="span-a">hello</span>  
    <div class="class-b">
      <span class="class-b">my</span> 
      <span class="class-a class-b">world</span> 
    </div>
  </body>
</html>
```

<br>

It's a good idea not to skip the below section but to be honest, all you need to do is try to remember all syntax with the symbols we have, which is
`*`, `element`, `.class-name`, `#element-id`, `[attribute]`, `,`, `A B`, `A>B`, `A+B`, `A~B`, `A:<...>`, `A::<...>`

<br>

- universal selector: 
  - select all elements in document
  - syntax: `*`
  - example: `* { property: value }` will match all elements, which is: `html`, `body`, `span`, `div`

- type selector:
  - select all elements match node name in selector
  - syntax: `elementname`
  - example: 
    - `span { property: value }` will match all `span`
    - `div { property: value }` will match all `div`

- class selector:
  - select all elements that have given `class` attribute in selector
  - syntax: `.classname`
  - example: 
    - `.class-a { property: value }` will match first `span`
    - `.class-b { property: value }` will match 2nd, 3rd `span` and `div`
    - `.class-a.class-b { property: value }` will match only 3rd `span`

- id selector:
  - select all elements that have given `id` attribute in selector
  - syntax: `#id`
  - example: `#span-a { property: value }` will match first `span`

- attribute selector:
  - select all elements that have the given attribute.
  - syntax: `[attr]` `[attr=value]` `[attr~=value]` `[attr|=value]` `[attr^=value]` `[attr$=value]`
  - example: 
    - `[class="class-a"] { property: value }` will match first `span`
    - `[id="span-a"] { property: value }` will match first `span`


##### grouping selectors

This's the same as [basic selector](#basic-selectors) but we separate them using `,` to group the same set of elements that take rules style
``` css
div, .class-b {
  /* all `div` in documents and also all element has class "class-b" */
  /* will have text color of red */
  color: red;
}
```

##### combinator
``` html
<!doctype html>
<html lang="en">
  <head></head>
  <body>
    <span class="class-a" id="span-a">hello</span>  <!-- 1 -->
    <div class="class-b">
      <span class="class-b">my</span>               <!-- 2 -->
      <span class="class-a class-b">world</span>    <!-- 3 --> 
      <p>
        <span>here</span>                           <!-- 4 -->
      </p>
      <span>and here</span>                         <!-- 5 -->
    </div>
  </body>
</html>
```

- descendant combinator:
  - select nodes that are descendants of the first elements
  - syntax: `A B` where `A`, `B` are [basic selector](#basic-selector)
  - example:
    - `div span { ... }` will match all `span` that are child of `div`, which is 2nd and 3rd `span`
    - `div .class-a {}` will match `span` that has class `class-a` and the span must be child of a `div`
, which is 3rd `span`
    - we can apply all kind of [basic selector](#basic-selector) into descendant combinator to make CSS work the way we need.

- child combinator:
  - selects nodes that are direct children of the first element
  - syntax: `A > B`
  - example:
    - `div > span` will match all `span` that are **direct** child of a `div`, which is 2nd, 3rd and 5th `span`
    the 4th `span` will not match because it is direct child of a `p`

- general sibling combinator
  - select nodes that are siblings of the first element that are share same direct parent
  - syntax: `A ~ B`
  - example:
    `span ~ span` will match 3rd, 5th `span`, the 4th `span` will not be match because it doesn't share same parent
    `span ~ p` will match `p`

- adjacent sibling combinator
  - same as general sibling combinator but the siblings must be immediately follows the first element
  - syntax: `A + B`
  - example:
    `span + span` will match 3rd `span`, the 5th `span` will not match because it's not immediately after the 2nd `span`
    `span + p` will match `p`


##### pseudo selector
- pseudo classes
  - select elements based on state information
  - syntax: `A:pseudo { ... }`
  - example: `a:visited` will match all `a` elements that have been visited by the user.

- pseudo elements
  - select a specific part of the selected element
  - syntax: `A::pseudo { ... }`
  - example: `div span:first-child` will match 2nd `span`


#### example
Most of the time, we use selector to answer the question "how to style that specific element", this section is for demonstrating this.

Your jobs is to figure it out why elements has such style, browser devtools can help. Checkout this [article](https://developer.chrome.com/docs/devtools/css/) to learn more about how to inspect web page.

<br>

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="popWBEr" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/popWBEr">
  Introduction To CSS - selector example</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>

If I need to style the "third span", there are several ways to do it:
- by class: 
  - either `.a`, `.b`, `.c` work but `.a`, `.b` will all so style the "first span" and "second span"
  - `.a.b.c` is better idea
- by id: `#c` will work 
- by position: `div:nth-child(2) span:nth-child(1)`, learn more about [:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
- or all of above:
  ``` css
  .a.b,
  .a.b.c, 
  #c, 
  .c#c, 
  div:nth-child(2) span:nth-child(1) {}
  ```