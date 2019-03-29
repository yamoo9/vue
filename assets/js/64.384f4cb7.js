(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{306:function(t,r,e){"use strict";e.r(r);var a=e(0),s=Object(a.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ssr-vs-csr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssr-vs-csr","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("abbr",{attrs:{title:"Server Side Routing"}},[t._v("SSR")]),t._v(" vs "),e("abbr",{attrs:{title:"Client Side Routing"}},[t._v("CSR")])]),t._v(" "),e("h2",{attrs:{id:"서버-사이드-라우팅-ssr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#서버-사이드-라우팅-ssr","aria-hidden":"true"}},[t._v("#")]),t._v(" 서버 사이드 라우팅(SSR)")]),t._v(" "),e("p",[t._v("전통적인 라우팅(Routing) 방법으로 사용자로부터 요청(Request) 받아 서버(Server)에서 페이지를 제작한 후,\n클라이언트(Client)로 전송합니다. 사용자와의 인터랙션으로 페이지를 변경할 때 마다 서버에 요청/응답 받는 과정을 되풀이합니다.\n요청이 오면 서버는 그 때 마다 페이지를 빌드한 후, 클라이언트로 보냅니다. 이 방법은 서버에서 라우팅을 하므로 서버 사이드 라우팅("),e("abbr",{attrs:{title:"Server Side Routing"}},[t._v("SSR")]),t._v(")으로 불립니다.")]),t._v(" "),e("base-img",{staticStyle:{border:"none"},attrs:{url:"MPA.jpg"}}),t._v(" "),e("h3",{attrs:{id:"vue-js-서버-사이드-라우팅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-서버-사이드-라우팅","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue.js 서버 사이드 라우팅")]),t._v(" "),e("p",[t._v("서버에서 페이지를 빌드(build)한 후, 클라이언트로 전송합니다. (서버 환경에서 Vue → HTML 처리)")]),t._v(" "),e("base-img",{staticStyle:{"max-width":"400px","margin-left":"0"},attrs:{url:"server-side-routing.jpg"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"클라이언트-사이드-라우팅-csr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트-사이드-라우팅-csr","aria-hidden":"true"}},[t._v("#")]),t._v(" 클라이언트 사이드 라우팅(CSR)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://ko.wikipedia.org/wiki/Ajax",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ajax"),e("OutboundLink")],1),t._v(" + JavaScript 기술이 발전하면서 등장한 방법으로 클라이언트 환경(예: 웹 브라우저)에서\n사용자의 요청에 받아 페이지를 빌드해 서비스 합니다. 실제로 서버에 페이지를 요청하는 것은 초기 1회뿐 입니다. 이후부터는 서버에 요청/응답 받을 필요 없이\n클라이언트에서 페이지를 만들어 서비스 합니다. 이 방법은 클라이언트에서 라우팅 하므로 클라이언트 사이드 라우팅("),e("abbr",{attrs:{title:"Client Side Routing"}},[t._v("CSR")]),t._v(")으로 불립니다.")]),t._v(" "),e("base-img",{staticStyle:{border:"none"},attrs:{url:"SPA.jpg"}}),t._v(" "),e("h3",{attrs:{id:"vue-js-클라이언트-사이드-라우팅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-클라이언트-사이드-라우팅","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue.js 클라이언트 사이드 라우팅")]),t._v(" "),e("p",[t._v("클라이언트에서 페이지를 빌드(build) 합니다. (클라이언트 환경에서 Vue → HTML 처리)")]),t._v(" "),e("base-img",{staticStyle:{"max-width":"400px","margin-left":"0"},attrs:{url:"client-side-routing.jpg"}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"라우팅-방법-비교"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#라우팅-방법-비교","aria-hidden":"true"}},[t._v("#")]),t._v(" 라우팅 방법 비교")]),t._v(" "),e("p",[t._v("서버 사이드 라우팅과 클라이언트 사이드 라우팅은 각각 장단점이 있습니다. 검색엔진 최적화("),e("a",{attrs:{href:"https://goo.gl/z9Oez5",target:"_blank",rel:"noopener noreferrer"}},[t._v("SEO"),e("OutboundLink")],1),t._v("), 초기 페이지 로딩 속도가 중요한 서비스의 경우\n서버 사이드 라우팅 방법을 사용하는 것이 좋습니다. 하지만 소형 애플리케이션, 초기 로딩 속도 보다 전환 속도가 중요한 서비스는 클라이언트\n사이드 라우팅 방법이 보다 효과적입니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("span",{staticStyle:{color:"transparent"}},[t._v("∙")])]),t._v(" "),e("th",[t._v("라우팅 환경")]),t._v(" "),e("th",[t._v("서버 요청/응답 빈도")]),t._v(" "),e("th",[t._v("초기 로딩 속도")]),t._v(" "),e("th",[t._v("전환 속도(체감)")]),t._v(" "),e("th",[t._v("검색엔진 최적화")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("SSR")])]),t._v(" "),e("td",[t._v("Back-End")]),t._v(" "),e("td",[t._v("URL이 변경될 때 마다 ("),e("abbr",{attrs:{title:"Multi Page Application"}},[t._v("MPA")]),t._v(")")]),t._v(" "),e("td",[t._v("빠름")]),t._v(" "),e("td",[t._v("느림")]),t._v(" "),e("td",[t._v("✔")])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("CSR")])]),t._v(" "),e("td",[t._v("Front-End")]),t._v(" "),e("td",[t._v("초기 1회︎ ("),e("a",{attrs:{href:"https://goo.gl/V6WeWT",target:"_blank",rel:"noopener noreferrer"}},[e("abbr",{attrs:{title:"Single Page Application"}},[t._v("SPA")]),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("td",[t._v("느림")]),t._v(" "),e("td",[t._v("빠름")]),t._v(" "),e("td",[t._v("✘")])])])]),t._v(" "),e("base-img",{attrs:{url:"ssr-vs-csr.jpg"}})],1)},[],!1,null,null,null);r.default=s.exports}}]);