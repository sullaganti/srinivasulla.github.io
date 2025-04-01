"use strict";(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[643],{3861:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=a(6540),l=a(4586),n=a(5241),i=a(9178),s=a(4676),m=a(4798);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.A,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.A,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(9937),d=a(3155);const g=function(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:m}}=(0,l.A)(),{blogDescription:g,blogTitle:p,permalink:u}=t,b="/"===u?m:p;return r.createElement(n.A,{title:b,description:g,wrapperClassName:d.GN.wrapper.blogPages,pageClassName:d.GN.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(c.A,{sidebar:s})),r.createElement("main",{className:"col col--7"},a.map((e=>{let{content:t}=e;return r.createElement(i.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t})))))}},6458:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(6540),l=a(4798),n=a(8168),i=a(53);const s="iconEdit_mS5F",m=e=>{let{className:t,...a}=e;return r.createElement("svg",(0,n.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function o(e){let{editUrl:t}=e;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(m,null),r.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7288:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(6540);function l(e){let{children:t,color:a}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},8506:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var r=a(3053),l=a(7288);const n={...r.A,highlight:l.A}},9178:(e,t,a)=>{a.d(t,{A:()=>b});var r=a(6540),l=a(53),n=a(5680),i=a(4798),s=a(4676),m=a(3155),o=a(8506),c=a(8139),d=a(6458);const g="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n";const b=function(e){const t=function(){const{selectMessage:e}=(0,m.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,i.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:b,metadata:E,truncated:h,isBlogPostPage:v=!1}=e,{date:_,formattedDate:A,permalink:N,tags:k,readingTime:f,title:T,editUrl:w}=E,{author:I,image:L,keywords:x}=b,P=b.author_url||b.authorURL,y=b.author_title||b.authorTitle,C=b.author_image_url||b.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(c.A,{keywords:x,image:L}),r.createElement("article",{className:v?void 0:"margin-bottom--xl"},(()=>{const e=v?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:g},v?T:r.createElement(s.A,{to:N},T)),r.createElement("div",{className:(0,l.A)(p,"margin-vert--md")},r.createElement("time",{dateTime:_},A),f&&r.createElement(r.Fragment,null," \xb7 ",t(f))),r.createElement("div",{className:"avatar margin-vert--md"},C&&r.createElement(s.A,{className:"avatar__photo-link avatar__photo",href:P},r.createElement("img",{src:C,alt:I})),r.createElement("div",{className:"avatar__intro"},I&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(s.A,{href:P},I)),r.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.createElement("div",{className:"markdown"},r.createElement(n.xA,{components:o.A},a)),(k.length>0||h)&&r.createElement("footer",{className:(0,l.A)("row docusaurus-mt-lg",{[u]:v})},k.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((e=>{let{label:t,permalink:a}=e;return r.createElement(s.A,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&w&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.A,{editUrl:w})),!v&&h&&r.createElement("div",{className:"col text--right"},r.createElement(s.A,{to:E.permalink,"aria-label":`Read more about ${T}`},r.createElement("b",null,r.createElement(i.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},9937:(e,t,a)=>{a.d(t,{A:()=>m});var r=a(6540),l=a(53),n=a(4676);const i={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var s=a(4798);function m(e){let{sidebar:t}=e;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.A)(i.sidebar,"thin-scrollbar"),"aria-label":(0,s.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.A)(i.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:i.sidebarItemList},t.items.map((e=>r.createElement("li",{key:e.permalink,className:i.sidebarItem},r.createElement(n.A,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))))}}}]);