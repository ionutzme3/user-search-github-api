(this["webpackJsonpgithub-user-search"]=this["webpackJsonpgithub-user-search"]||[]).push([[0],[,,,function(e,c,t){e.exports={grid__header:"GridHeader_grid__header__1dZsK",image:"GridHeader_image__12Rvu",user__name:"GridHeader_user__name__1BzU4",data:"GridHeader_data__8lZOJ","text-content":"GridHeader_text-content__2DZSs"}},function(e,c,t){e.exports={social:"Social_social__uAWK7","social-item":"Social_social-item__jJE1M"}},function(e,c,t){e.exports={card__info:"CardInfo_card__info__2ou5h",num:"CardInfo_num__S1b6w"}},,,,,function(e,c,t){e.exports={wrapper:"App_wrapper__jNuOU"}},function(e,c,t){e.exports={header:"Header_header__141c9"}},function(e,c,t){e.exports={"search-bar":"SearchBar_search-bar__3F5Fs"}},function(e,c,t){},function(e,c,t){e.exports={user__info:"UserInfo_user__info__20uTB"}},,,,,function(e,c,t){},,,function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(8),i=t.n(n),r=(t(19),t(7)),o=t.n(r),l=t(9),j=t(2),d=t(10),b=t.n(d),h=t(11),u=t.n(h),x=t.p+"static/media/icon-moon.cce754ce.svg",O=t.p+"static/media/icon-sun.f28a8996.svg",m=t(0),p=function(){var e=Object(s.useState)(!0),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){document.body.classList.toggle("dark",t)}),[t]),Object(m.jsxs)("header",{className:u.a.header,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"devFinder"})}),Object(m.jsxs)("button",{onClick:function(){return a(!t)},children:[Object(m.jsx)("span",{children:t?"light":"dark"}),Object(m.jsx)("span",{children:Object(m.jsx)("img",{src:t?O:x,alt:""})})]})]})},_=t(12),f=t.n(_),g=t.p+"static/media/icon-search.0cc0c984.svg",v=function(e){var c=Object(s.useRef)("");return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s=c.current.value;e.onSearchUser(s)},className:f.a["search-bar"],children:[Object(m.jsx)("img",{src:g,alt:""}),Object(m.jsx)("input",{ref:c,type:"search",name:"search",id:"search",placeholder:"Search GitHub username..."}),Object(m.jsx)("button",{children:"Search"})]})},w=t(3),N=t.n(w),S=function(e){return Object(m.jsxs)("div",{className:N.a.grid__header,children:[Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:N.a.image,children:Object(m.jsx)("img",{src:e.image,alt:""})})}),Object(m.jsxs)("div",{className:N.a.user__name,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsx)("a",{href:"#x",children:Object(m.jsxs)("h3",{children:["@",e.login]})})]}),Object(m.jsx)("div",{className:N.a.data,children:Object(m.jsxs)("p",{children:["Joined ",Object(m.jsx)("span",{children:new Date(e.created).toLocaleDateString()})]})}),Object(m.jsx)("p",{className:N.a["text-content"],children:e.bio?e.bio:"This profile has no bio."})]})]})},k=t(13),y=t.n(k),F=t(5),H=t.n(F),G=function(e){return Object(m.jsxs)("div",{className:H.a.card__info,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Repo"}),Object(m.jsx)("div",{className:H.a.num,children:e.repos})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Followers"}),Object(m.jsx)("div",{className:H.a.num,children:e.followers})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Following"}),Object(m.jsx)("div",{className:H.a.num,children:e.following})]})]})},E=t(4),J=t.n(E),U=t.p+"static/media/icon-location.f11c5487.svg",B=t.p+"static/media/icon-twitter.f6a2a695.svg",C=t.p+"static/media/icon-website.b7923f6c.svg",D=t.p+"static/media/icon-company.6f78ffb3.svg",I=function(e){return Object(m.jsxs)("div",{className:J.a.social,children:[Object(m.jsxs)("div",{className:J.a["social-item"],children:[Object(m.jsx)("img",{src:U,alt:""}),e.location?Object(m.jsx)("p",{children:e.location}):Object(m.jsx)("p",{children:"Not available!"})]}),Object(m.jsxs)("div",{className:J.a["social-item"],children:[Object(m.jsx)("img",{src:B,alt:""}),e.twitter?Object(m.jsx)("p",{children:e.twitter}):Object(m.jsx)("p",{children:"Not available!"})]}),Object(m.jsxs)("div",{className:J.a["social-item"],children:[Object(m.jsx)("img",{src:C,alt:""}),e.blog?Object(m.jsx)("p",{children:e.blog}):Object(m.jsx)("p",{children:"Not available!"})]}),Object(m.jsxs)("div",{className:J.a["social-item"],children:[Object(m.jsx)("img",{src:D,alt:""}),e.company?Object(m.jsx)("p",{children:e.company}):Object(m.jsx)("p",{children:"Not available!"})]})]})},R=t(14),Z=t.n(R),A=function(e){return Object(m.jsxs)("div",{className:Z.a.user__info,children:[Object(m.jsx)(G,{repos:e.repos,followers:e.followers,following:e.following}),Object(m.jsx)(I,{location:e.location,twitter:e.twitter_username,blog:e.blog,company:e.company})]})},K=function(e){return Object(m.jsx)("section",{className:y.a.section,children:e.users.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{name:e.name,login:e.login,created:e.created_at,bio:e.bio,image:e.avatar_url},e.id),Object(m.jsx)(A,{repos:e.public_repos,followers:e.followers,following:e.following,location:e.location,twitter:e.twitter_username,blog:e.blog,company:e.company})]})}))})};var L=function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(!1),i=Object(j.a)(n,2),r=i[0],d=i[1],h=Object(s.useState)(null),u=Object(j.a)(h,2),x=u[0],O=u[1],_=Object(s.useCallback)(Object(l.a)(o.a.mark((function e(){var c,t,s,n,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.length>0&&void 0!==i[0]?i[0]:"octocat",d(!0),O(null),e.prev=3,e.next=6,fetch("https://api.github.com/users/".concat(c));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("Something went wrong!");case 9:return e.next=11,t.json();case 11:s=e.sent,(n=[]).push(s),a(n),console.log(n),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),O(e.t0.message);case 21:d(!1);case 22:case"end":return e.stop()}}),e,null,[[3,18]])}))),[]);return Object(s.useEffect)((function(){_()}),[_]),Object(m.jsxs)("div",{className:b.a.wrapper,children:[Object(m.jsx)(p,{}),Object(m.jsx)(v,{onSearchUser:_}),!r&&t.length>0&&Object(m.jsx)(K,{users:t}),!r&&0===t.length&&!x&&Object(m.jsx)("p",{children:"Found no movies."}),!r&&x&&Object(m.jsx)("p",{children:x})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.cb9bf772.chunk.js.map