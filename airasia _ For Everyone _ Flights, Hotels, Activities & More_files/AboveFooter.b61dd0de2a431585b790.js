(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{BBqv:function(e,t,r){"use strict";var n=r("TqRt"),o=r("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("pVnL")),i=b(r("q1tI")),c=b(r("vOnD")),l=n(r("NP27")),u=n(r("01J8")),d=n(r("/PCd")),s=n(r("S85t")),f=n(r("47re")),p=n(r("oiR8")),m=n(r("21oO")),y=n(r("CCxc")),h=r("uwjc");function O(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var r=O(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}var g=c.default.div.withConfig({displayName:"AboveFooter__AboveFooterContainer",componentId:"sc-1e6cdwk-0"})(["display:flex;flex-direction:column;background-color:",";padding:0 ",";border-top:1px solid ",";"],(function(e){var t=e.backgroundColor;return e.theme.backgroundColor[t]}),(function(e){return e.theme.space.semiXXLarge}),(function(e){return e.theme.colors.greyLight})),v=c.default.div.withConfig({displayName:"AboveFooter__AboveFooterSection",componentId:"sc-1e6cdwk-1"})(["display:flex;flex-direction:row;padding:"," 0;&:not(:last-child){border-bottom:1px solid ",";}",""],(function(e){return e.theme.space.semiLarge}),(function(e){return e.theme.colors.greyLight}),(function(e){return e.isHeading&&(0,c.css)(["padding:"," 0;"],(function(e){return e.theme.space.standard}))})),E=c.default.div.withConfig({displayName:"AboveFooter__SectionItem",componentId:"sc-1e6cdwk-2"})(["display:flex;flex:1;flex-direction:",";flex-wrap:wrap;justify-content:",";&:not(:first-child){padding-left:",";}"],(function(e){var t=e.displayType;return h.DISPLAY_TYPE[t]}),(function(e){return function(e){switch(e){case"right":return"flex-end";case"center":return"center";default:return"flex-start"}}(e.position)}),(function(e){return e.theme.space.standard})),_=c.default.div.withConfig({displayName:"AboveFooter__ItemHeadline",componentId:"sc-1e6cdwk-3"})(["width:100%;margin-bottom:",";"],(function(e){return e.theme.space.tiny})),C=c.default.div.withConfig({displayName:"AboveFooter__Item",componentId:"sc-1e6cdwk-4"})(["",""],(function(e){return"vertical"===e.displayType?(0,c.css)(["margin-bottom:",";"],(function(e){return e.theme.space.tiny})):(0,c.css)(["&:not(:last-child){margin-right:",";}"],(function(e){return e.theme.space.small}))})),L=function(e){var t=e.data,r=e.backgroundColor,n=e.headerColor,o=e.headlineColor,y=e.linkColor,O=e.theme,b=e.accessible,L=e.customProperties,A=function(e,t){return i.default.createElement(v,{key:"abf-section-".concat(t)},e.data.map((function(e,n){return i.default.createElement(E,{position:e.position,displayType:e.displayType,key:"abf-sectionitem-".concat(t,"-").concat(n)},e.headline&&i.default.createElement(_,null,i.default.createElement(u.default,{theme:O,type:"small",bold:!0,display:"block",textAlign:e.position,color:o,accessible:b,customProperties:{id:"title-abf-sectionitem-".concat(t,"-").concat(n)}},e.headline)),e.data.map((function(o,a){return(o.imageUrl||o.text)&&i.default.createElement(C,{key:"abf-item-".concat(t,"-").concat(n,"-").concat(a),displayType:e.displayType},i.default.createElement(d.default,{href:o.url,theme:O,color:y,hoverUnderlined:!1,size:"XSmall",target:"false"===o.newTab.toLowerCase()?"parent":"tab",accessible:b,customProperties:{id:"link-abf-item-".concat(t,"-").concat(n,"-").concat(a)}},(c=o).text&&""!==c.text?c.text:c.imageUrl&&""!==c.imageUrl?Object.prototype.hasOwnProperty.call(p.default,c.imageUrl)?i.default.createElement(f.default,{accessible:!1,color:y,fontsize:"titleMedium",icon:c.imageUrl,theme:O}):i.default.createElement(s.default,{height:"40px",accessible:!1,centerFocus:!1,placeHolderBackground:r,src:c.imageUrl,theme:O,alt:c.altText}):void 0));var c})))})))},T=function(e){return i.default.createElement(g,(0,a.default)({id:"airasia-above-footer",role:"complementary",backgroundColor:r},L),e.map((function(e,t){return e.type===h.HEADER?function(e,t){return i.default.createElement(v,{key:"abf-section-".concat(t),isHeading:!0},e.map((function(e,r){return i.default.createElement(E,{position:e.position,displayType:e.displayType,key:"abf-sectionitem-".concat(t,"-").concat(r)},i.default.createElement(m.default,{type:"h1",color:n},e.headline))})))}(e.data,t):A(e,t)})))};return(0,i.useContext)(c.ThemeContext)?T(t):i.default.createElement(l.default,{theme:O},T(t))};L.propTypes=y.default.PropTypes,L.defaultProps=y.default.DefaultProps;var A=L;t.default=A},CCxc:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("17x9"),o=r("T9dM"),a=r("uwjc"),i={altText:n.string,imageUrl:n.string,newTab:n.string,text:n.string,url:n.string},c={data:(0,n.arrayOf)((0,n.shape)(i)),displayType:(0,n.oneOf)(Object.keys(a.DISPLAY_TYPE)),headline:n.string,position:n.string},l={type:n.string,data:(0,n.arrayOf)((0,n.shape)(c))},u={PropTypes:{data:(0,n.arrayOf)((0,n.shape)(l)).isRequired,backgroundColor:(0,n.oneOf)(o.ARR_BACKGROUND_COLORS),headlineColor:(0,n.oneOf)(o.ARR_COLORS),linkColor:(0,n.oneOf)(o.ARR_COLORS),theme:n.string,accessible:n.bool,customProperties:n.object},DefaultProps:{backgroundColor:a.DEFAULT_BG_COLOR,headerColor:a.DEFAULT_HEADER_COLOR,headlineColor:a.DEFAULT_HEADLINE_COLOR,linkColor:a.DEFAULT_LINK_COLOR,theme:o.DEFAULT_THEME,accessible:!0}};t.default=u},myou:function(e,t,r){"use strict";r.r(t);var n=r("1OyB"),o=r("vuIU"),a=r("Ji7U"),i=r("md7G"),c=r("foSv"),l=r("q1tI"),u=r("BBqv"),d=r.n(u),s=l.createElement;function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(i.a)(this,r)}}var p=function(e){Object(a.a)(r,e);var t=f(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.theme;return s(d.a,{data:t,theme:r})}}]),r}(l.PureComponent);t.default=p},uwjc:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HEADER=t.DISPLAY_TYPE=t.DEFAULT_LINK_COLOR=t.DEFAULT_HEADLINE_COLOR=t.DEFAULT_HEADER_COLOR=t.DEFAULT_BG_COLOR=void 0;t.DISPLAY_TYPE={horizontal:"row",vertical:"column"};t.DEFAULT_BG_COLOR="primary";t.DEFAULT_HEADER_COLOR="greyDarker";t.DEFAULT_HEADLINE_COLOR="greyDarker";t.DEFAULT_LINK_COLOR="greyDark";t.HEADER="header"}}]);