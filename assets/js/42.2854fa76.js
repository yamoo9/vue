(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{319:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive","aria-hidden":"true"}},[t._v("#")]),t._v(" keep-alive")]),t._v(" "),s("h2",{attrs:{id:"keep-alive-요소"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-요소","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("<keep-alive>")]),t._v(" 요소")]),t._v(" "),s("p",[t._v("앞서 "),s("router-link",{attrs:{to:"/guidebook/using-component.html#is-속성"}},[t._v("is 속성")]),t._v("을 활용해 "),s("router-link",{attrs:{to:"/guidebook/using-component.html#동적-컴포넌트"}},[t._v("동적 컴포넌트")]),t._v("를 공부했었습니다.")],1),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currentComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("동적 컴포넌트란? "),s("code",[t._v("is")]),t._v(" 속성에 설정된 컴포넌트를, 메타 컴포넌트인 <component> 요소를 통해 렌더링 하는 것을 말합니다.")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"상태-제거-기본"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상태-제거-기본","aria-hidden":"true"}},[t._v("#")]),t._v(" 상태 제거 (기본)")]),t._v(" "),s("p",[t._v("이벤트 발생으로 컴포넌트가 교체 시, 성능 상의 이유로 컴포넌트의 상태("),s("code",[t._v("data")]),t._v(")를 유지(keep)하는 것이 좋지 않습니다.\n그래서 기본적으로 컴포넌트가 제거(destory) 되면 상태를 유지하지 않습니다. (상태 유지 ≒ 캐싱)")]),t._v(" "),s("p",[t._v("예를 들어 아래 탭 메뉴 중 "),s("code",[t._v("Home")]),t._v("을 선택하면 Home 컴포넌트가 동적으로 화면에 렌더링 됩니다.\nHome 컴포넌트는 로컬 데이터로 "),s("code",[t._v("isActive")]),t._v(" 상태를 가지고 있습니다. 사용자가 "),s("code",[t._v("panel")]),t._v(" 텍스트를 클릭하면,\n컴포넌트 상태 "),s("code",[t._v("isActive")]),t._v(" 값이 변경되고 화면에 텍스트가 표시됩니다. 하지만 다른 탭을 선택한 후 다시\nHome 탭을 클릭하면 이전 상태는 유지되지 않는 것을 볼 수 있습니다.")]),t._v(" "),s("example",[s("tabs")],1),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"상태-유지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상태-유지","aria-hidden":"true"}},[t._v("#")]),t._v(" 상태 유지")]),t._v(" "),s("p",[s("code",[t._v("<keep-alive>")]),t._v(" 요소로 동적 컴포넌트를 감싸면 컴포넌트 상태를 유지(캐싱) 합니다. 즉, 컴포넌트를\n메모리에서 제거하지 않아 다시 컴포넌트를 렌더링하지 않습니다. 말 그대로 살아있는 상태(alive)를 유지(keep) 합니다.")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currentComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("상태 유지가 설정된 컴포넌트 예시를 살펴보면 Home 탭에서 panel 텍스트를 클릭해 화면에 표시된 상태 메시지는 다른 탭을\n클릭했다가 다시 Home 탭을 클릭해도 상태를 유지합니다.")]),t._v(" "),s("example",[s("tabs",{attrs:{keep:!0}})],1),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("주의!")]),t._v(" "),s("p",[s("code",[t._v("<keep-alive>")]),t._v(" 요소는 각 컴포넌트의 상태를 유지하기 위해 컴포넌트 "),s("code",[t._v("name")]),t._v(" 속성 설정을 필요로 합니다.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'고유한_컴포넌트_이름'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("특정 컴포넌트만 캐싱하거나, 캐싱에서 제외하고자 한다면 "),s("code",[t._v("include")]),t._v(", "),s("code",[t._v("exclude")]),t._v(" 속성을 사용할 수 있습니다.\n주의할 점은 컴포넌트의 "),s("code",[t._v("name")]),t._v(" 속성과 일치해야 정상적으로 작동한다는 점입니다.")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Home,Works"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currentComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("code",[t._v("max")]),t._v(" 속성을 설정하면 캐싱할 인스턴스 개수를 제한할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":max")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currentComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고","aria-hidden":"true"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),s("p",[t._v("보다 자세한 내용은 "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("동적 컴포넌트와 keep-alive"),s("OutboundLink")],1),t._v(" 문서를 참고하세요.")]),t._v(" "),s("iframe-wrapper",{attrs:{src:"https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components",ratio:"16:6.1"}})],1)},[],!1,null,null,null);a.default=n.exports}}]);