(this["webpackJsonpcrypto-currency-app"]=this["webpackJsonpcrypto-currency-app"]||[]).push([[0],{74:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(24),o=t.n(r),a=t(13),s=t(14),l=t(23),d=t(4),b=t(9),j=t(19),u=t(8),h="https://api.coinpaprika.com/v1";function p(){return fetch("".concat(h,"/coins")).then((function(n){return n.json()}))}function x(n){return fetch("".concat(h,"/tickers/").concat(n)).then((function(n){return n.json()}))}var O,f=t(6),g=t(35),m=Object(s.b)({key:"isDark",default:!0});!function(n){n[n.LINE=0]="LINE",n[n.CANDLESTICK=1]="CANDLESTICK"}(O||(O={}));var v,y,k,w,C=Object(s.b)({key:"chartTypes",default:O.CANDLESTICK}),D=t(1),S=u.c.label(v||(v=Object(b.a)(["\n  width: 130px;\n  display: block;\n  position: absolute;\n  left: 0;\n"]))),L=u.c.input(y||(y=Object(b.a)(["\n  position: relative;\n  top: 0;\n  opacity: 0;\n"]))),I=u.c.div(k||(k=Object(b.a)(["\n  height: 32px;\n  width: 65px;\n  background: ",';\n  transition: background-color 1s ease-out;\n  border-radius: 20px;\n  padding: 6px;\n  position: relative;\n  cursor: pointer;\n  ::before {\n    content: "";\n    display: block;\n    height: 20px;\n    width: 20px;\n    border-radius: 15px;\n    background: ',";\n    position: absolute;\n    z-index: 2;\n    transform: ",";\n    transition: transform 0.5s ease;\n  }\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.white}),(function(n){return n.isEnabled?"translateX(32px)":"translateX(4)"})),q=u.c.div(w||(w=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  margin: 0 2px;\n  svg {\n    fill: ",";\n    z-index: 0;\n  }\n"])),(function(n){return n.theme.white}));var _,z,F,N=function(){var n=Object(s.c)(m),e=Object(f.a)(n,2),t=e[0],c=e[1];return Object(D.jsx)(S,{htmlFor:"toggle",children:Object(D.jsxs)(I,{isEnabled:t,children:[Object(D.jsxs)(q,{children:[Object(D.jsx)(g.a,{}),Object(D.jsx)(g.b,{})]}),Object(D.jsx)(L,{type:"checkbox",id:"toggle",checked:t,onChange:function(){c((function(n){return!n}))}})]})})},T=u.c.header(_||(_=Object(b.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),P=u.c.h1(z||(z=Object(b.a)(["\n  font-size: 2em;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),E=u.c.button(F||(F=Object(b.a)(["\n  position: absolute;\n  right: 0;\n  bottom: 20px;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 7px;\n  border-radius: 10px;\n  color: ",';\n  font-family: "Source Sans Pro";\n  font-weight: 300;\n'])),(function(n){return n.theme.textColor}));var Q=function(n){var e=n.infoDataName,t=n.loading,c=Object(d.g)(),i=Object(d.e)().state,r=Object(d.f)("/");return Object(D.jsxs)(T,{children:[Object(D.jsx)(P,{children:r?"Coins":i?i.name:t?"loading...":e}),r?null:Object(D.jsx)(E,{onClick:function(){c("/")},children:"Back to Coins"}),Object(D.jsx)(N,{})]})},A=t(34),M=t.n(A);var U=function(n){var e=n.data,t=n.isDark;return Object(D.jsx)(M.a,{type:"candlestick",series:[{name:"Price",data:null===e||void 0===e?void 0:e.map((function(n){return{x:n.time_close.substring(0,10),y:[n.open.toFixed(3),n.high.toFixed(3),n.low.toFixed(3),n.close.toFixed(3)]}}))}],options:{theme:{mode:t?"dark":"light"},chart:{height:300,width:500,background:"transparent",toolbar:{show:!1}},grid:{show:!1},yaxis:{tooltip:{enabled:!1}},xaxis:{type:"datetime",labels:{show:!0},axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!0},categories:null===e||void 0===e?void 0:e.map((function(n){return n.time_close.slice(0,10)}))},tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(0))}}}}})};var B=function(n){var e=n.data,t=n.isDark;return Object(D.jsx)(M.a,{type:"line",series:[{name:"Price",data:null===e||void 0===e?void 0:e.map((function(n){return n.close}))}],options:{theme:{mode:t?"dark":"light"},chart:{height:300,width:500,background:"transparent",toolbar:{show:!1}},grid:{show:!1},stroke:{curve:"smooth",width:3},yaxis:{labels:{show:!1}},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1},categories:null===e||void 0===e?void 0:e.map((function(n){return n.time_close.slice(0,10)}))},fill:{colors:["#0fbcf9"],type:"gradient",gradient:{type:"Horizontal",gradientToColors:["#0be881"],stops:[0,100]}},tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(3))}}}}})},H=function(n){var e=n.data,t=n.isDark;return{0:Object(D.jsx)(B,{data:e,isDark:t}),1:Object(D.jsx)(U,{data:e,isDark:t})}};var $,K,J,X,R,V,G,W,Y=function(n){var e=n.coinId,t=Object(s.c)(C),c=Object(f.a)(t,2),i=c[0],r=c[1],o=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(h,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)})),l=o.isLoading,d=o.data,b=Object(s.d)(m);return Object(D.jsxs)("div",{children:[Object(D.jsx)("select",{onChange:function(n){r(+n.currentTarget.value)},value:i,defaultValue:i,children:function(){var n,e=[];for(var t in n=O,Object.keys(n).filter((function(n){return Number.isNaN(+n)})))e.push(Object(D.jsx)("option",{value:t,children:O[t]},t));return e}()}),l?"Loading chart...":H({data:d,isDark:b})[i]]})},Z=u.c.div($||($=Object(b.a)(["\n  max-width: 480px;\n  margin: 0 auto;\n"]))),nn=u.c.header(K||(K=Object(b.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),en=u.c.h1(J||(J=Object(b.a)(["\n  font-size: 2em;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),tn=u.c.div(X||(X=Object(b.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 15px;\n  padding: 15px 20px;\n  margin-bottom: 10px;\n\n  span:first-child {\n    font-size: 10px;\n    font-weight: 900;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),cn=u.c.div(R||(R=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),rn=u.c.span(V||(V=Object(b.a)(["\n  text-align: center;\n  display: block;\n"]))),on=u.c.span(G||(G=Object(b.a)(["\n  color: ",";\n"])),(function(n){return n.value>0?"#3498db":"#e74c3c"})),an=u.c.div(W||(W=Object(b.a)([""])));var sn,ln,dn,bn,jn,un,hn,pn=function(n){var e=n.coinId,t=Object(a.useQuery)(["tickers",e],(function(){return x(e)})),c=t.isLoading,i=t.data,r=[null===i||void 0===i?void 0:i.quotes.USD.percent_change_1h,null===i||void 0===i?void 0:i.quotes.USD.percent_change_6h,null===i||void 0===i?void 0:i.quotes.USD.percent_change_12h,null===i||void 0===i?void 0:i.quotes.USD.percent_change_24h];return Object(D.jsxs)(Z,{children:[Object(D.jsx)(j.b,{children:Object(D.jsx)(j.a,{children:Object(D.jsx)("title",{children:"Price"})})}),Object(D.jsx)(nn,{children:Object(D.jsx)(en,{children:"Price"})}),c?Object(D.jsx)(rn,{children:"Loading..."}):Object(D.jsxs)(an,{children:[Object(D.jsxs)(tn,{children:[Object(D.jsxs)(cn,{children:[Object(D.jsxs)("span",{children:["ATH Price ( ",null===i||void 0===i?void 0:i.quotes.USD.ath_date.toString().substring(0,10)," )"]}),Object(D.jsxs)("span",{style:{color:"#3498db"},children:["$",null===i||void 0===i?void 0:i.quotes.USD.ath_price.toLocaleString("ko-kr",{maximumSignificantDigits:11})]})]}),Object(D.jsxs)(cn,{children:[Object(D.jsx)("span",{children:"Max rate"}),Object(D.jsxs)(on,{style:{fontSize:26},value:Math.max(r[0],r[1],r[2],r[3]),children:[Math.max(r[0],r[1],r[2],r[3]),"%"]})]})]}),Object(D.jsxs)(tn,{children:[Object(D.jsxs)(cn,{children:[Object(D.jsx)("span",{children:"1 hours percent change"}),Object(D.jsxs)(on,{value:r[0],children:[r[0],"%"]})]}),Object(D.jsxs)(cn,{children:[Object(D.jsx)("span",{children:"6 hours percent change"}),Object(D.jsxs)(on,{value:r[1],children:[r[1],"%"]})]})]}),Object(D.jsxs)(tn,{children:[Object(D.jsxs)(cn,{children:[Object(D.jsx)("span",{children:"12 hours percent change"}),Object(D.jsxs)(on,{value:r[2],children:[r[2],"%"]})]}),Object(D.jsxs)(cn,{children:[Object(D.jsx)("span",{children:"24 hours percent change"}),Object(D.jsxs)(on,{value:r[3],children:[r[3],"%"]})]})]})]})]})},xn=u.c.div(sn||(sn=Object(b.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),On=u.c.span(ln||(ln=Object(b.a)(["\n  text-align: center;\n  display: block;\n"]))),fn=u.c.div(dn||(dn=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 15px;\n  padding: 15px 20px;\n\n  span:first-child {\n    font-size: 10px;\n    font-weight: 900;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),gn=u.c.div(bn||(bn=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),mn=u.c.p(jn||(jn=Object(b.a)(["\n  margin: 20px 5px;\n"]))),vn=u.c.div(un||(un=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),yn=u.c.span(hn||(hn=Object(b.a)(["\n  color: ",";\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 7px 0;\n  border-radius: 10px;\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var kn,wn,Cn,Dn,Sn,Ln=function(){var n=Object(d.h)().coinId,e=Object(d.e)().state,t=Object(d.f)("/:coinId/price"),c=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(h,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),i=c.isLoading,r=c.data,o=Object(a.useQuery)(["tickers",n],(function(){return x(n)}),{refetchInterval:1e4}),s=o.isLoading,b=o.data,u=i||s;return Object(D.jsxs)(xn,{children:[Object(D.jsx)(j.b,{children:Object(D.jsx)(j.a,{children:Object(D.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===r||void 0===r?void 0:r.name})})}),Object(D.jsx)(Q,{infoDataName:null===r||void 0===r?void 0:r.name,loading:u}),u?Object(D.jsx)(On,{children:"Loading..."}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(fn,{children:[Object(D.jsxs)(gn,{children:[Object(D.jsx)("span",{children:"rank:"}),Object(D.jsx)("span",{children:null===r||void 0===r?void 0:r.rank})]}),Object(D.jsxs)(gn,{children:[Object(D.jsx)("span",{children:"symbol:"}),Object(D.jsx)("span",{children:null===r||void 0===r?void 0:r.symbol})]}),Object(D.jsxs)(gn,{children:[Object(D.jsx)("span",{children:"Price:"}),Object(D.jsxs)("span",{children:["$",null===b||void 0===b?void 0:b.quotes.USD.price]})]})]}),Object(D.jsx)(mn,{children:null===r||void 0===r?void 0:r.description}),Object(D.jsxs)(fn,{children:[Object(D.jsxs)(gn,{children:[Object(D.jsx)("span",{children:"total supply:"}),Object(D.jsx)("span",{children:null===b||void 0===b?void 0:b.total_supply})]}),Object(D.jsxs)(gn,{children:[Object(D.jsx)("span",{children:"max supply:"}),Object(D.jsx)("span",{children:null===b||void 0===b?void 0:b.max_supply})]})]}),Object(D.jsxs)(vn,{children:[Object(D.jsx)(yn,{isActive:!t,children:Object(D.jsx)(l.b,{to:"chart",children:"chart"})}),Object(D.jsx)(yn,{isActive:!!t,children:Object(D.jsx)(l.b,{to:"price",children:"price"})})]}),Object(D.jsxs)(d.c,{children:[Object(D.jsx)(d.a,{index:!0,element:Object(D.jsx)(Y,{coinId:n})}),Object(D.jsx)(d.a,{path:"chart",element:Object(D.jsx)(Y,{coinId:n})}),Object(D.jsx)(d.a,{path:"price",element:Object(D.jsx)(pn,{coinId:n})})]})]})]})},In=u.c.div(kn||(kn=Object(b.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),qn=u.c.ul(wn||(wn=Object(b.a)([""]))),_n=u.c.li(Cn||(Cn=Object(b.a)(["\n  background-color: ",";\n  color: black;\n  border-radius: 15px;\n  margin-bottom: 10px;\n  ::before {\n    opacity: 0;\n  }\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n  @keyframes Fadein {\n    from {\n      opacity: 0;\n      margin-bottom: 100vh;\n    }\n    to {\n      opacity: 1;\n      margin-bottom: 10px;\n    }\n  }\n"])),(function(n){return n.theme.boardColor}),(function(n){return n.theme.accentColor})),zn=u.c.span(Dn||(Dn=Object(b.a)(["\n  text-align: center;\n  display: block;\n"]))),Fn=u.c.img(Sn||(Sn=Object(b.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 1em;\n"])));var Nn=function(){var n=Object(a.useQuery)("allCoins",p),e=n.isLoading,t=n.data;return Object(D.jsxs)(In,{children:[Object(D.jsx)(j.b,{children:Object(D.jsx)(j.a,{children:Object(D.jsx)("title",{children:"COINS"})})}),Object(D.jsx)(Q,{}),e?Object(D.jsx)(zn,{children:"Loading..."}):Object(D.jsx)(qn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n,e){return Object(D.jsx)(_n,{style:{animation:"2s ease .".concat(e,"s 1 normal none running Fadein")},children:Object(D.jsxs)(l.b,{to:"/".concat(n.id),state:{name:n.name,rank:n.rank},children:[Object(D.jsx)(Fn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase()),alt:n.name}),n.name," \u2192"]})},n.id)}))})]})};var Tn,Pn=function(){return Object(D.jsx)(l.a,{basename:"/crypto-currency-app",children:Object(D.jsxs)(d.c,{children:[Object(D.jsx)(d.a,{path:"/:coinId/*",element:Object(D.jsx)(Ln,{})}),Object(D.jsx)(d.a,{path:"/",element:Object(D.jsx)(Nn,{})})]})})},En=Object(u.b)(Tn||(Tn=Object(b.a)(["    \n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, menu, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  main, menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, main, menu, nav, section {\n    display: block;\n  }\n  /* HTML5 hidden-attribute fix for newer browsers */\n  *[hidden] {\n      display: none;\n  }\n  body {\n    line-height: 1;\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    transition: background-color .5s ease-out;\n    color: ",";\n  }  \n  menu, ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }  \n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  button {\n    border-style: none;\n    cursor: pointer;\n  }\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),Qn=t(52),An={bgColor:"#2c3e50",textColor:"#ecf0f1",accentColor:"#9b59b6",boardColor:"#ffffff",black:"#bdc3c7",white:"#2c3e50"},Mn={bgColor:"#ecf0f1",textColor:"#2c3e50",accentColor:"#8e44ad",boardColor:"#bdc3c7",black:"#2c3e50",white:"#bdc3c7"};t(74);var Un=function(){var n=Object(s.d)(m);return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(u.a,{theme:n?An:Mn,children:[Object(D.jsx)(En,{}),Object(D.jsx)(Pn,{}),Object(D.jsx)(Qn.ReactQueryDevtools,{initialIsOpen:!0})]})})},Bn=new a.QueryClient;o.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(s.a,{children:Object(D.jsx)(a.QueryClientProvider,{client:Bn,children:Object(D.jsx)(Un,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.9457a8f5.chunk.js.map