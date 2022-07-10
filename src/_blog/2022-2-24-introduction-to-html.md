---
date: 2022-2-24
tag: 
  - hyn
  - web
  - frontend
  - introduction
  - beginner
  - css
  - html
  - y2022
  - m2
  - d24
  - y2022/m2
author: hyn
# post
title: Introduction To HTML
description: Simple introduction to HTML for absolutely beginner
summary: Simple introduction to HTML for absolutely beginner
thumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1645714015/github-nguyenhy-hp/sky-5.jpg
bigThumb: https://res.cloudinary.com/hqe/image/upload/c_scale,h_600/v1645714015/github-nguyenhy-hp/sky-5.jpg
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
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_300/v1645714015/github-nguyenhy-hp/sky-5.jpg
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
    content: https://res.cloudinary.com/hqe/image/upload/c_scale,h_800/v1641481664/github-nguyenhy-hp/sky-5.jpg
---

The following article will guide you through some basic concept about HTML.
We'll look into below **HTML** code and try to understand what each line of code does, and how can we expand it for our personal use case.
``` html
<!doctype html>
<html lang="en">
  <head></head>
  <body>
    <span>hello world</span> 
  </body>
</html>
```

#### HTML?
> [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) (**H**yperText **M**arkup **L**anguage) is a descriptive language that specifies webpage structure.

HTML is a series of [elements](https://developer.mozilla.org/en-US/docs/Glossary/Element), which you use to enclose, wrap, markup, ... different parts of the content in a certain way. It can be simple or complicated as the web developer wants it to be.
<br>
<br>
For example: 
if we want some part of text to stand by itself, we can enclose it inside paragraph element [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
, and if we want some other part of text to be bold, we can use [`<strong>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong) element.
<br>
``` html
<p>the <strong>quick</strong> brown fox jumps over the <strong>lazy</strong> dog</p>
```
<br> will output:
><p>the <strong>quick</strong> brown fox jumps over the <strong>lazy</strong> dog</p>

#### HTML element
- tag

  > - [Tags](https://html.spec.whatwg.org/multipage/syntax.html#elements-2) are used to delimit the **start** and **end** of **elements** in the markup.
  In `<span></span>`, `<span>` is start tag and `</span>` is end tag

- elements

  > - An [element](https://developer.mozilla.org/en-US/docs/Glossary/Element) is a part of a webpage. In [XML](https://developer.mozilla.org/en-US/docs/Glossary/XML) and [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML), an element may contain a data item or a chunk of text or an image, or perhaps nothing.
  ><br>
  > A typical element includes an opening tag with some attributes, enclosed text content, and a closing tag.

  There's are 6 kind of HTML elements, which is:
    + void (empty) elements: only have a start tag, end tags must not be specified for void elements.
      <br>
      `area`, `base`, `br`, `col`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `param`, `source`, `track`, `wbr`
      <br>
      Eg: 
      ``` html
      <img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

      <map name="workmap">
        <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
        <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
        <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
      </map>
      ```

    + template elements: `template`
      <br>
      Eg:
      ``` html
      <template id="row">
        <tr>
          <td>content</td>
        </tr>
      </template>
      ```

    + raw text elements: `style`, `script`
      <br>
      Eg:
      ``` html
      <style>body { background-color: grey; }</style>
      <script>document.body.style.backgroundColor = 'grey';</script>
      ```

    + escapable raw text elements: `textarea`, `title`
      <br>
      Eg:
      ``` html
      <!DOCTYPE html>
      <html lang="en">
      <head>
      	<title>this's browser tab title</title>
      </head>
      </html>
      ```
    + foreign elements: `math`
    + normal elements: all other [HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

- anatomy:
  ``` html
            start tag
               |                                    
          -----------|                                         end tag
          |          |                                             |
          <p attribute>the quick brown fox jumps over the lazy dog</p>
          |          |                                             |  |
          |          |                                             |  |
          |          |---------------------------- content --------|  |
          |------------------------------------- element -------------|
  ```
  + **start tag**: marks where the elements begin to take effect. This consists of the name of elements and its attribute (optional).
  Read more about start tag format [here](https://html.spec.whatwg.org/multipage/syntax.html#start-tags)
  <br>

  + **tag attribute**: attributes has a name and a value. Attribute names must consist of more than one character and attribute value is mixture of text and character reference;
  <br>
    Eg:  `style` is attribute name of element `<p>` and `"color: red; text-transform: capitalize"` is its **double-quoted** value
    ``` html
    <p style="color: red; text-transform: capitalize">
    ```

  + **content**: this's content of element. It could contains some other tag inside of it but in this case, it contains text.
  <br>
  
  + **end tag**: this marks where elements ends. Not include, fail to provide ending tags at right position might produce strange, unexpected behavior.
   Read more about start tag format [here](https://html.spec.whatwg.org/multipage/syntax.html#end-tags)
  <br>

- 

#### doctype
<br>

**DOCTYPEs** (`<!doctype html>`) are required for legacy reasons. When omitted, browsers tend to use a different rendering mode that is incompatible with some specifications. 

#### html
Also referred to as the ***root element*** is the root (top-level element) of an HTML document, all other elements must be descendant of this element.
<br>

#### head
the `<head>` element is the part of HTML document that does not display through web page.
It primarily holds:
- website's metadata - machine readable information:
  - data of author
  - browser tab title
  - website's important description, keywords for other people to lookup using google, bing, duckduckgo,...)
  - information for machine processing
- external link to [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- internal css style
- web browsers might also use metadata provided in `<head>` to render HTML documents correctly.
- ...

HTML5-compliant browsers automatically create a `<head>` element if its tags are omitted in the markup
<br>

#### body
This's where all fun begin. The `<body>` element represent the content of HTML document and there's only one `<body>` element in document.

It's hard to tell what to do with `<body>` cause it's really depend on the design and layout of the website, but we have some option for basic use case:
- media element: `<img>`, `<figure>`, `<source>`, `<video>`, `<audio>`, ...
- paragraph: `<p>`, `<blockquote>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<u>`, ...
- heading: `<h1>`, `<h2>`, ..., `<h6>`
- table: `<table>`, `<thead>`, `<tbody>`, `<th>`, `<tr>`
- list: `<ol>`, `<ul>`, `<li>`
- content division: `<br>`, `<hr>`, `<div>`
- general inline container: `<span>`
- menu: `<select>`, `<option>`
- hyperlink: `<a>`
- user input: `<input>`, `<textarea>`, `<div contenteditable></div>`
- .....

You can find much more of HTML elements and its feature [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). We have a lot of tags but in real world using, `div`, `span`, `img`, `a`, `video`, `audio`, `input`, `textarea`,... are the lost using tag. Most of the time, we can replace most of the other tag using `div`
<br>

#### summary
Below is basic format of a website: 
``` html
<!doctype html> <!-- you don't really need to worry about this tag -->
<html lang="en">  <!-- and this tag -->
  <head>
    <!-- website's metadata, external content -->
  </head>
  <body>
    <!-- this's where we create website content -->
  </body>
</html>
```
