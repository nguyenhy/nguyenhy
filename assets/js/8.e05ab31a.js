(window.webpackJsonp=window.webpackJsonp||[]).push([[8,11],{341:function(t,s,i){},342:function(t,s,i){"use strict";i(341)},343:function(t,s,i){"use strict";i.r(s);var a={props:{title:String,subtitle:String,background:{type:String,default:""}}},n=(i(342),i(50)),e=Object(n.a)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"layout has-background-dark has-text-light"},[i("header",{staticClass:"header mb-6"},[t._m(0),t._v(" "),i("section",{staticClass:"hero is-link is-fullheight-with-navbar",class:{"background-image":t.background},style:{"background-image":t.background?"url("+t.background+")":"","background-color":t.background?"":"inherit"}},[i("div",{staticClass:"\n          container\n          is-max-desktop\n          is-flex\n          is-flex-direction-column\n          is-justify-content-center\n          py-6\n        "},[t._t("header",(function(){return[i("div",{staticClass:"\n              hero-body\n              is-justify-content-center is-flex-direction-column\n            "},[i("p",{staticClass:"title is-size-1 has-text-weight-bold"},[t._v(t._s(t.title))]),t._v(" "),i("p",{staticClass:"subtitle is-size-6"},[t._v(t._s(t.subtitle))])])]}))],2)])]),t._v(" "),i("main",{staticClass:"main"},[i("div",{staticClass:"container px-1 is-max-desktop"},[t._t("default")],2)]),t._v(" "),t._m(1)])}),[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"navbar level is-flex is-flex-direction-row p-2"},[i("div",{staticClass:"level-left is-flex is-flex-direction-row"},[i("a",{staticClass:"title",attrs:{href:"/"}},[i("span",{staticClass:"has-text-white"},[t._v("$ cd /home/")])])]),t._v(" "),i("div",{staticClass:"level-right m-0"},[i("a",{staticClass:"button is-white has-text-light",attrs:{href:"/blog/"}},[i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"hyni-book"})]),t._v(" "),i("span",[t._v("blog")])]),t._v(" "),i("a",{staticClass:"button is-white has-text-light",attrs:{href:"/tag/"}},[i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"hyni-tag"})]),t._v(" "),i("span",[t._v("tags")])]),t._v(" "),i("a",{staticClass:"button is-white has-text-light",attrs:{href:"https://github.com/nguyenhy/nguyenhy.github.io"}},[i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"hyni-github"})]),t._v(" "),i("span",[t._v("github")])]),t._v(" "),i("button",{staticClass:"button is-white has-text-light"},[i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"hyni-search"})]),t._v(" "),i("span",[t._v("search")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footer p-2 has-background-grey-dark"},[s("div",{staticClass:"content has-text-centered"},[s("p",[this._v("\n        Power by\n        "),s("strong",[s("a",{staticClass:"has-text-primary",attrs:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}},[this._v("Power")])])])])])}],!1,null,"e8156f7c",null);s.default=e.exports},350:function(t,s,i){},359:function(t,s,i){"use strict";i(350)},370:function(t,s,i){"use strict";i.r(s);i(7),i(17),i(23);var a={components:{Layout:i(343).default,BlogCard:function(){return Promise.all([i.e(0),i.e(1)]).then(i.bind(null,374))},Pagination:function(){return i.e(2).then(i.bind(null,375))}},data:function(){return{offset:0}},computed:{pages:function(){return this.pagination.pages},pagination:function(){return this.$pagination}},mounted:function(){}},n=(i(359),i(50)),e=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",{staticClass:"half",attrs:{title:"blog",subtitle:"mostly coding things",background:"https://res.cloudinary.com/hqe/image/upload/c_scale,h_500/v1645229306/github-nguyenhy-hp/sky-1.jpg"}},[s("div",{staticClass:"main is-flex is-flex-direction-column"},[s("div",{staticClass:"container-fluid is-flex-grow-1"},this._l(this.pages,(function(t,i){return s("BlogCard",{key:i,attrs:{item:t}})})),1),this._v(" "),s("Pagination",{attrs:{data:this.pagination}})],1)])}),[],!1,null,"5a16fec2",null);s.default=e.exports}}]);