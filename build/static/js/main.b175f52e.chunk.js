(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var c=a(5),s=a(2),n=a.n(s),i=a(21),r=a.n(i);a(67),a(68),a(69);var o=function(e){var t=e.active,a=e.text,s=e.Icon;return Object(c.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),children:[Object(c.jsx)(s,{}),Object(c.jsx)("h2",{children:a})]})},j=a(41),l=a.n(j),d=a(46),b=a.n(d),p=a(33),u=a.n(p),x=a(47),O=a.n(x),h=a(48),m=a.n(h),f=a(49),v=a.n(f),g=a(50),w=a.n(g),_=a(51),N=a.n(_),A=a(52),I=a.n(A),T=a(97);var z=function(){return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)(l.a,{className:"sidebar__twitterIcon"}),Object(c.jsx)(o,{active:!0,Icon:b.a,text:"Home"}),Object(c.jsx)(o,{Icon:u.a,text:"Explore"}),Object(c.jsx)(o,{Icon:O.a,text:"Notifications"}),Object(c.jsx)(o,{Icon:m.a,text:"Messages"}),Object(c.jsx)(o,{Icon:v.a,text:"Bookmarks"}),Object(c.jsx)(o,{Icon:w.a,text:"Lists"}),Object(c.jsx)(o,{Icon:N.a,text:"Profile"}),Object(c.jsx)(o,{Icon:I.a,text:"More"}),Object(c.jsx)(T.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0,children:"Tweet"})]})},k=a(31),F=(a(75),a(98)),P=a(59).a.initializeApp({apiKey:"AIzaSyCaBb0CYDOkr0R3k-L-mH9pByQrMDVclrI",authDomain:"twitter-5dead.firebaseapp.com",databaseURL:"https://twitter-5dead.firebaseio.com",projectId:"twitter-5dead",storageBucket:"twitter-5dead.appspot.com",messagingSenderId:"223206160409",appId:"1:223206160409:web:ce67bea0d5eaeba4101288",measurementId:"G-D297RMP5C7"}).firestore();var E=function(){var e=Object(s.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),r=Object(k.a)(i,2),o=r[0],j=r[1];return Object(c.jsx)("div",{className:"tweetBox",children:Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"tweetBox__input",children:[Object(c.jsx)(F.a,{src:"https://lh3.googleusercontent.com/-CRGXw8--1MY/XiAmcbTpO2I/AAAAAAAAApw/QcHqvMT8STkL9zLkmEjVqWJQCuFn5e1CgCEwYBhgLKtQDAL1OcqzMf2EwdRTca6r7NJKzeVxlWPqA0ZwUZTa7RhHIP07RD6Y_XUFypItVcbywvRvkDHJie0otmn1kGNzevU_8sP7OZNKlEnR4w6XvgKEgTmKd57lb-KbMb5wg1tjIRSTsDPTgrA8998AUufUnzOE0r7RKtnn_vIysOvp5t8a8-MnAPuNbEcHUu1okHwffkDeaU4LrLuKaxLb39oTpSkkaKIo6FFaIqDfzb-l8E-vgz3qNaHygGWreLc08Jsl-1chK4F8GsZ3jUsJOlG8OsFuD_gdcOkI6XtE_Q7zeb1FuMHxFOQDfWpACaSAp8Qr0-S1QoUo4josluPq3Phgawp3qtfDxfmowVpAFkGV92htwS-p3xwVi760Mk1iT3Q9QPCdElbIh_JllUG79aFEjEnfFxqmPdeH81q7yHT4FojOIVkYxLV7tZbT6ZMQCli4V3dQUdijcrY5yZ2ppKtl_CbTUaHAnNTab8v_F---4Hs33zz58eWdUz6OMomP8YMWpT-1dp3r-dU2xkL_7pB67vA8LPV3cMgPrelbzQ9PnbOEjzdP6n8k7oSMaoYytTF-VKDlfS0lGNu0v6LQz2fLY141n25d3brpJE2pz-mdjd6JSeizNMODlvf0F/w280-h280-p/2020-01-16.jpg"}),Object(c.jsx)("input",{onChange:function(e){return n(e.target.value)},value:a,placeholder:"What's happening?",type:"text"})]}),Object(c.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),Object(c.jsx)(T.a,{onClick:function(e){e.preventDefault(),P.collection("posts").add({displayName:"Natalia Haronitou",username:"haronitou",verified:!0,text:a,image:o,avatar:"https://lh3.googleusercontent.com/-CRGXw8--1MY/XiAmcbTpO2I/AAAAAAAAApw/QcHqvMT8STkL9zLkmEjVqWJQCuFn5e1CgCEwYBhgLKtQDAL1OcqzMf2EwdRTca6r7NJKzeVxlWPqA0ZwUZTa7RhHIP07RD6Y_XUFypItVcbywvRvkDHJie0otmn1kGNzevU_8sP7OZNKlEnR4w6XvgKEgTmKd57lb-KbMb5wg1tjIRSTsDPTgrA8998AUufUnzOE0r7RKtnn_vIysOvp5t8a8-MnAPuNbEcHUu1okHwffkDeaU4LrLuKaxLb39oTpSkkaKIo6FFaIqDfzb-l8E-vgz3qNaHygGWreLc08Jsl-1chK4F8GsZ3jUsJOlG8OsFuD_gdcOkI6XtE_Q7zeb1FuMHxFOQDfWpACaSAp8Qr0-S1QoUo4josluPq3Phgawp3qtfDxfmowVpAFkGV92htwS-p3xwVi760Mk1iT3Q9QPCdElbIh_JllUG79aFEjEnfFxqmPdeH81q7yHT4FojOIVkYxLV7tZbT6ZMQCli4V3dQUdijcrY5yZ2ppKtl_CbTUaHAnNTab8v_F---4Hs33zz58eWdUz6OMomP8YMWpT-1dp3r-dU2xkL_7pB67vA8LPV3cMgPrelbzQ9PnbOEjzdP6n8k7oSMaoYytTF-VKDlfS0lGNu0v6LQz2fLY141n25d3brpJE2pz-mdjd6JSeizNMODlvf0F/w280-h280-p/2020-01-16.jpg"}),n(""),j("")},type:"submit",className:"tweetBox__tweetButton",children:"Tweet"})]})})},L=(a(80),a(53)),S=a.n(L),M=a(54),U=a.n(M),y=a(55),D=a.n(y),Q=a(56),C=a.n(Q),H=a(57),K=a.n(H),V=Object(s.forwardRef)((function(e,t){var a=e.displayName,s=e.username,n=e.verified,i=e.text,r=e.image,o=e.avatar;return Object(c.jsxs)("div",{className:"post",ref:t,children:[Object(c.jsx)("div",{className:"post__avatar",children:Object(c.jsx)(F.a,{src:o})}),Object(c.jsxs)("div",{className:"post__body",children:[Object(c.jsxs)("div",{className:"post__header",children:[Object(c.jsx)("div",{className:"post__headerText",children:Object(c.jsxs)("h3",{children:[a," ",Object(c.jsxs)("span",{className:"post__headerSpecial",children:[n&&Object(c.jsx)(S.a,{className:"post__badge"})," @",s]})]})}),Object(c.jsx)("div",{className:"post__headerDescription",children:Object(c.jsx)("p",{children:i})})]}),Object(c.jsx)("img",{src:r,alt:""}),Object(c.jsxs)("div",{className:"post__footer",children:[Object(c.jsx)(U.a,{fontSize:"small"}),Object(c.jsx)(D.a,{fontSize:"small"}),Object(c.jsx)(C.a,{fontSize:"small"}),Object(c.jsx)(K.a,{fontSize:"small"})]})]})]})})),R=(a(81),a(58));var q=function(){var e=Object(s.useState)([]),t=Object(k.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){P.collection("posts").onSnapshot((function(e){return n(e.docs.map((function(e){return e.data()})))}))}),[]),Object(c.jsxs)("div",{className:"feed",children:[Object(c.jsx)("div",{className:"feed__header",children:Object(c.jsx)("h2",{children:"Home"})}),Object(c.jsx)(E,{}),Object(c.jsx)(R.a,{children:a.map((function(e){return Object(c.jsx)(V,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image},e.text)}))})]})},J=(a(82),a(34));var G=function(){return Object(c.jsxs)("div",{className:"widgets",children:[Object(c.jsxs)("div",{className:"widgets__input",children:[Object(c.jsx)(u.a,{className:"widgets__searchIcon"}),Object(c.jsx)("input",{placeholder:"Search Twitter",type:"text"})]}),Object(c.jsxs)("div",{className:"widgets__widgetContainer",children:[Object(c.jsx)("h2",{children:"What's happening"}),Object(c.jsx)(J.c,{tweetId:"1295943937262325761"}),Object(c.jsx)(J.b,{sourceType:"profile",screenName:"haronitou",options:{height:400}}),Object(c.jsx)(J.a,{url:"https://www.youtube.com/haronitouharonitou",options:{text:"I su*k at Premiere Pro! Wah!",via:"haronitou"}})]})]})};a(83);var Y=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(z,{}),Object(c.jsx)(q,{}),Object(c.jsx)(G,{})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root")),W()}},[[84,1,2]]]);
//# sourceMappingURL=main.b175f52e.chunk.js.map