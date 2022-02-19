---
date: 2022-2-19
tag: 
  - hyn
  - web
  - frontend
  - introduction
  - beginner
  - css
  - html
  - js
  - y2022
  - m2
  - d19
  - y2022/m2
author: hyn
# post
title: Introduction To Web Development
description: Simple introduction to web development for absolutely beginner
summary: Simple introduction to web development for absolutely beginner
thumb: https://res.cloudinary.com/hqe/image/upload/v1641481664/github-nguyenhy-hp/sky-4.jpg
thumbT: sky
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
    - js
  - name: author
    content: nguyen hy
  - name: location
    content: Vietnam 
    # og tag
  - name: og:type
    content: website
  - name: og:title
    content: Introduction To Web Development
  - name: og:description
    content: Simple introduction to web development for absolutely beginner
  - name: og:image
    content: https://res.cloudinary.com/hqe/image/upload/v1641481664/github-nguyenhy-hp/sky-4.jpg
---

As always, you should read [this](/2022/02/19/disclaimer/) before reading below article
#### Introduction
The final result we should point out is to have a basic understanding of what website development look like, or how can you create yourself simple website
#### To
those who:
- don't know or have no idea what web development look like
- is absolutely beginner and want to start develop some thing

#### Web
Saying i want a website has simple text with some style kind of like <span style="color: red">red</span> color text
and if i **click** on that text it turn from <span style="color: red">red</span> into <span style="color: blue">blue</span>
<br>
<br>
This's what i will do

------------
##### example 1

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="mdqxbOj" data-editable="true" data-user="nguyenhy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/nguyenhy/pen/mdqxbOj">
  Introduction To Web Development</a> by nguyen (<a href="https://codepen.io/nguyenhy">@nguyenhy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>

------------
**Question:** Wow wow wow! what's the hell is this?
<br>
<br>
**Answer:** the below `highlight` line is the only thing you should care about.
<br>
``` html{5}
<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
  <span style="color: red" onclick="this.style.color='blue'">hello world</span> 
</body>
</html>
```

Basically, above line saying:
- create me a [tag](https://www.digitalocean.com/community/tutorials/what-is-an-html-tag) with content of `hellow world`:
``` html
<span ...>hello world</span>
```

>Think of `tag` like a container, you will put your stuff into it, whatever it's. Whether it's a `text`, `image`, `video`, ...
>and you can direct [styling](https://developer.mozilla.org/en-US/docs/Web/CSS), control its behavior it with specific kind of input ([click](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click), [double click](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event), [scroll](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event) your mouse...), change it content, ...



For now just think `span` is a box, and `<span>` is top surface of the box and `</span>` is bottom of it.
We always do stuff on top surface which is `<span>` tag.


So tag's format will look like: 
<br>
``` html
<element attribute="value" attribute="value" ...>element content</element>
```
- color those text with red color
``` html
<span style="color: red">...</span>
```
> `<span style="">` mean "i want to change how this `span` tag look like"
> and it is `color: red`
 

This's what i call **inline style**. There're **external**, **internal** and **inline** style for you to know
. We can put many, many style on this inline style with format `style="property: value; property: value; ..."`

- and when i click on it
``` html
<span onclick="..."></span>
```
- turn its text style color into blue
``` js
this.style.color='blue'
```
> we'll later talk about `this`, `this.style`, `this.style.color = ...`

<br>

------------
**Question:** So... if the `span` thing can do all the job, why waste time writing down all other (non-highlight) things?
<br>

**Answer:** yes, you can do it, believe me go ahead to [example](#example-1) and delete all other line
. So it look like this and of course it's still work
``` html{5}
<span style="color: red" onclick="this.style.color='blue'">hello world</span> 
```
It look like waste, redundancy code but trust me we'll need it for [later]() development


#### Development
##### Where to start?
- online development
<br>
You could use some online editor like [codepen](https://codepen.io/trending),[jsbin](https://jsbin.com/), [stackblitz](https://stackblitz.com/), ... just paste some html code and start explore
- local development
  - raw file htmlt
    + create file `index.html`
    + paste below code and save it
      ``` html
      <!DOCTYPE html>
      <html lang="en">
      <head></head>
      <body>
        <span style="color: red" onclick="this.style.color='blue'">hello world</span> 
      </body>
      </html>
      ```
    + open file on any browser
  - localhost server:
    <br>
    For me, one fast, easy way is to start localhost, is to use extension [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)
    + install, open `Web Server for Chrome`
    + choose folder where you save your `index.html` file
    + check switch button so `Web Server: STARTED`
    + open your Web Server Url print on screen, eg: [http://127.0.0.1:3000](http://127.0.0.1:3000)
    + there we go
- or [website's inspect](https://www.browserstack.com/guide/inspect-element-in-chrome), [view page resourse](https://www.lifewire.com/view-html-source-in-chrome-3466725)
  + if you're using Safari you need [Enabling Web Inspector](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html) first. 

##### What's next
- The purpose of this article is introduce you to basic idea of web development. We'll later explore more about [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript), ...
- You could find more web frontend resource on [w3schools](https://www.w3schools.com/)