!function(){var e={875:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},202:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(o of t.entries())if(!n.has(o[0]))return!1;for(o of t.entries())if(!e(o[1],n.get(o[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(o of t.entries())if(!n.has(o[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(t[o]!==n[o])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;0!=o--;){var a=s[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},49:function(e,t,n){"use strict";var r=n(257);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},507:function(e,t,n){e.exports=n(49)()},257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.React,r=n.n(t),o=window.lodash,s=n(875),a=n.n(s),i=n(507),l=n.n(i);function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}function d(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var p=window.ReactDOM,f=n.n(p),m=r().createContext(null),h=function(e){return e.scrollTop},E="unmounted",g="exited",v="entering",b="entered",w="exiting",S=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,s=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(o=g,r.appearStatus=v):o=b:o=t.unmountOnExit||t.mountOnEnter?E:g,r.state={status:o},r.nextCallback=null,r}u(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===E?{status:g}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==v&&n!==b&&(t=v):n!==v&&n!==b||(t=w)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:f().findDOMNode(this);n&&h(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===g&&this.setState({status:E})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[f().findDOMNode(this),r],s=o[0],a=o[1],i=this.getTimeouts(),l=r?i.appear:i.enter;e||n?(this.props.onEnter(s,a),this.safeSetState({status:v},(function(){t.props.onEntering(s,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:b},(function(){t.props.onEntered(s,a)}))}))}))):this.safeSetState({status:b},(function(){t.props.onEntered(s)}))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:f().findDOMNode(this);t?(this.props.onExit(r),this.safeSetState({status:w},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:g},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:g},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:f().findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=o[0],a=o[1];this.props.addEndListener(s,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===E)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,d(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r().createElement(m.Provider,{value:null},"function"==typeof n?n(e,o):r().cloneElement(r().Children.only(n),o))},t}(r().Component);function C(){}S.contextType=m,S.propTypes={},S.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},S.UNMOUNTED=E,S.EXITED=g,S.ENTERING=v,S.ENTERED=b,S.EXITING=w;var y,O,x=S,N="out-in",A="in-out",R=function(e,t,n){return function(){var r;e.props[t]&&(r=e.props)[t].apply(r,arguments),n()}},k=((y={})[N]=function(e){var t=e.current,n=e.changeState;return r().cloneElement(t,{in:!1,onExited:R(t,"onExited",(function(){n(v,null)}))})},y[A]=function(e){var t=e.current,n=e.changeState,o=e.children;return[t,r().cloneElement(o,{in:!0,onEntered:R(o,"onEntered",(function(){n(v)}))})]},y),T=((O={})[N]=function(e){var t=e.children,n=e.changeState;return r().cloneElement(t,{in:!0,onEntered:R(t,"onEntered",(function(){n(b,r().cloneElement(t,{in:!0}))}))})},O[A]=function(e){var t=e.current,n=e.children,o=e.changeState;return[r().cloneElement(t,{in:!1,onExited:R(t,"onExited",(function(){o(b,r().cloneElement(n,{in:!0}))}))}),r().cloneElement(n,{in:!0})]},O),L=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={status:b,current:null},t.appeared=!1,t.changeState=function(e,n){void 0===n&&(n=t.state.current),t.setState({status:e,current:n})},t}u(t,e);var n=t.prototype;return n.componentDidMount=function(){this.appeared=!0},t.getDerivedStateFromProps=function(e,t){return null==e.children?{current:null}:t.status===v&&e.mode===A?{status:v}:!t.current||((n=t.current)===(o=e.children)||r().isValidElement(n)&&r().isValidElement(o)&&null!=n.key&&n.key===o.key)?{current:r().cloneElement(e.children,{in:!0})}:{status:w};var n,o},n.render=function(){var e,t=this.props,n=t.children,o=t.mode,s=this.state,a=s.status,i=s.current,l={children:n,current:i,changeState:this.changeState,status:a};switch(a){case v:e=T[o](l);break;case w:e=k[o](l);break;case b:e=i}return r().createElement(m.Provider,{value:{isMounting:!this.appeared}},e)},t}(r().Component);L.propTypes={},L.defaultProps={mode:N};var I=L;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function P(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var D=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=P(n.className,r):n.setAttribute("class",P(n.className&&n.className.baseVal||"",r)));var n,r}))},M=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),o=r[0],s=r[1];t.removeClasses(o,"exit"),t.addClass(o,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),o=r[0],s=r[1]?"appear":"enter";t.addClass(o,s,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),o=r[0],s=r[1]?"appear":"enter";t.removeClasses(o,s),t.addClass(o,s,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}u(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&o&&(r+=" "+o),"active"===n&&e&&h(e),r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,s=n.done;this.appliedClasses[t]={},r&&D(e,r),o&&D(e,o),s&&D(e,s)},n.render=function(){var e=this.props,t=(e.classNames,d(e,["classNames"]));return r().createElement(x,_({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(r().Component);M.defaultProps={classNames:""},M.propTypes={};var j=M,U=t=>{let{className:n,fillColor:r="black"}=t;return(0,e.createElement)("svg",{className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("g",{clipPath:"url(#clipThumbsUp)"},(0,e.createElement)("mask",{id:"maskThumbsUp","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"2",y:"-1",width:"20",height:"20"},(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.35 6.24998H13.5658L14.4366 2.06081L14.4641 1.76748C14.4641 1.39165 14.3083 1.04331 14.0608 0.795813L13.0891 -0.166687L7.05748 5.87415C6.71831 6.20415 6.51664 6.66248 6.51664 7.16665L2.84998 7.16665V16.425H6.51664V16.3333C6.51664 17.3416 7.34164 18.1666 8.34998 18.1666H16.6C17.3608 18.1666 18.0116 17.7083 18.2866 17.0483L21.055 10.5858C21.1375 10.375 21.1833 10.155 21.1833 9.91665V8.08331C21.1833 7.07498 20.3583 6.24998 19.35 6.24998ZM19.35 9.91665L16.6 16.3333H8.34998V7.16665L12.3283 3.18831L11.3108 8.08331H19.35V9.91665Z",fill:"white"})),(0,e.createElement)("g",{mask:"url(#maskThumbsUp)"},(0,e.createElement)("rect",{x:"0.999878",y:"-3.05176e-05",width:"22",height:"22",fill:r}))),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"clipThumbsUp"},(0,e.createElement)("rect",{width:"24",height:"24",fill:"white"}))))},V=t=>{let{className:n,fillColor:r="black"}=t;return(0,e.createElement)("svg",{className:n,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("g",{clipPath:"url(#clipThumbsDown)"},(0,e.createElement)("mask",{id:"maskThumbsDown","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"2",y:"5",width:"20",height:"20"},(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.65002 17.75H10.4342L9.56336 21.9392L9.53586 22.2325C9.53586 22.6083 9.69169 22.9567 9.93919 23.2042L10.9109 24.1667L16.9425 18.1258C17.2817 17.7958 17.4834 17.3375 17.4834 16.8333L21.15 16.8333L21.15 7.57499H17.4834V7.66666C17.4834 6.65832 16.6584 5.83332 15.65 5.83332H7.40003C6.63919 5.83332 5.98836 6.29165 5.71336 6.95166L2.94503 13.4142C2.86253 13.625 2.81669 13.845 2.81669 14.0833V15.9167C2.81669 16.925 3.64169 17.75 4.65002 17.75ZM4.65002 14.0833L7.40002 7.66666H15.65L15.65 16.8333L11.6717 20.8117L12.6892 15.9167H4.65002V14.0833Z",fill:"white"})),(0,e.createElement)("g",{mask:"url(#maskThumbsDown)"},(0,e.createElement)("rect",{x:"23.0001",y:"24",width:"22",height:"22",transform:"rotate(-180 23.0001 24)",fill:r}))),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"clipThumbsDown"},(0,e.createElement)("rect",{width:"24",height:"24",fill:"white"}))))};const F=n=>{const{attributes:r,voteCount:s,apiAnswerId:i,onVote:l,disabled:c,isVotedOn:u,hideCount:d,fallbackStyles:p,isInEditor:f}=n,{className:m,type:h}=r,[E,g]=(0,t.useState)(0),v=()=>{!c&&l&&(g(1),l(i))},b="up"===h?U:V,w=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return a()({"has-bg-color":e.backgroundColor,"has-text-color":e.textColor,"has-border-color":e.borderColor},n)}(r,"crowdsignal-forms-vote-item",m,{"is-voted-on":u,"is-disabled":c,"is-in-editor":f},`is-type-${h}`),S=((e,t)=>{const n=(0,o.isEmpty)(e.textColor)?t.textColor:e.textColor,r=(0,o.isEmpty)(e.backgroundColor)?t.backgroundColor:e.backgroundColor;return(0,o.mapKeys)({borderColor:e.borderColor,bgColor:r,textColor:n,votedColor:t.accentColor},((e,t)=>`--crowdsignal-forms-vote-${(0,o.kebabCase)(t)}`))})(r,p),C=s+E;return(0,e.createElement)("div",{className:w,onClick:v,onKeyPress:v,role:"button",style:S,tabIndex:0},(0,e.createElement)(b,{className:"crowdsignal-forms-vote-item__icon",fillColor:"currentColor"}),!d&&(0,e.createElement)(I,{mode:"in-out"},(0,e.createElement)(j,{key:E,classNames:"crowdsignal-forms-vote-item__count",timeout:300},(0,e.createElement)("div",{className:"crowdsignal-forms-vote-item__count"},(y=C)?y>=1e7?`${(0,o.round)(y/1e6)}M`:y>=1e6?`${(y/1e6).toFixed(1)}M`:y>=1e4?`${(0,o.round)(y/1e3)}K`:y>=1e3?`${(y/1e3).toFixed(1)}K`:y.toString():"0"))));var y};F.propTypes={apiAnswerId:l().number,className:l().string,disabled:l().bool,isVotedOn:l().bool,onVote:l().func,type:l().string.isRequired,voteCount:l().number.isRequired};var B=F;function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var $=function e(t,n){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=H({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in o)o[a]&&(s+="; "+a,!0!==o[a]&&(s+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+s}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var s=n[o].split("="),a=s.slice(1).join("=");try{var i=decodeURIComponent(s[0]);if(r[i]=t.read(a,i),e===i)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",H({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,H({},this.attributes,t))},withConverter:function(t){return e(H({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),W=(window.wp.apiFetch,window.wp.i18n);class z extends Error{}class G extends z{constructor(){super((0,W.__)("Server error. Please try again.","crowdsignal-forms"))}}const K=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{data:r,error:o,loading:s}=((r,o)=>{const[s,a]=(0,t.useState)(null),[i,l]=(0,t.useState)(null),[c,u]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{u(!0),l(null),a(null),async function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?null:window.fetch(`https://api.crowdsignal.com/v3/polls/${e}/results`,{method:"GET",headers:{"content-type":"application/json"}}).then((e=>{if(e.status>=200&&e.status<300)return e.json();throw e})).then((e=>{if(404===e.status)return{};if(e.error)throw new Error(e.message);return e.results.votes_by_answer}))}(e,n).then(a).catch(l).finally((()=>u(!1)))}),o),{data:s,error:i,loading:c}})(0,[e]);return{error:o,loading:s,results:r}};var q=n(202),Y=n.n(q),J=window.wp.compose;const Z=e=>{let t=window.getComputedStyle(e).backgroundColor;for(;"rgba(0, 0, 0, 0)"===t&&e.parentNode&&e.parentNode.nodeType===window.Node.ELEMENT_NODE;)e=e.parentNode,t=window.getComputedStyle(e).backgroundColor;return t},X=()=>(0,e.createElement)("div",{className:"crowdsignal-forms__style-probe"},(0,e.createElement)("p",null),(0,e.createElement)("h3",null,"Text"),(0,e.createElement)("div",{className:"wp-block-button"},(0,e.createElement)("div",{className:"wp-block-button__link"})),(0,e.createElement)("div",{className:"entry-content"},(0,e.createElement)("div",{className:"alignwide"}))),Q=e=>{if(null===e)return{};const t=e.querySelector(".wp-block-button__link"),n=e.querySelector("p"),r=e.querySelector("h3"),o=e.querySelector(".alignwide");let s=Z(t);const a=Z(n),i=window.getComputedStyle(n).color;if(s===a){s=(l=t,"0px"!==window.getComputedStyle(l).borderBlockStartWidth?window.getComputedStyle(l).borderBlockStartColor:null)||i}var l;return{accentColor:s,backgroundColor:a,textColor:i,textColorInverted:window.getComputedStyle(t).color,textFont:window.getComputedStyle(n).fontFamily,textSize:window.getComputedStyle(n).fontSize,headingFont:window.getComputedStyle(r).fontFamily,contentWideWidth:window.getComputedStyle(o).maxWidth}},ee=t=>{let{showBranding:n,referralCode:r}=t;return(0,e.createElement)("div",{className:"crowdsignal-forms__branding"},n&&(0,e.createElement)("a",{className:"crowdsignal-forms__branding-link with-external-icon",href:`https://crowdsignal.com?ref=${r}`,target:"blank",rel:"noopener noreferrer"},(0,W.__)("Powered by Crowdsignal","crowdsignal-forms")),!n&&(0,e.createElement)("span",{className:"crowdsignal-forms__branding-link"}," "))};ee.propTypes={showBranding:l().bool,referralCode:l().string.isRequired};var te=ee;window.wp.blocks,Object.freeze({THANK_YOU:"thank-you",CUSTOM_TEXT:"custom-text",REDIRECT:"redirect",RESULTS:"results"});const ne=Object.freeze({THEME_DEFAULT:"theme-default",GEORGIA:"georgia",PALATINO:"palatino",TIMES_NEW_ROMAN:"times-new-roman",ARIAL:"arial",IMPACT:"impact",LUCIDA:"lucida",TAHOMA:"tahoma",TREBUCHET:"trebuchet",VERDANA:"verdana",COURIER:"courier",CABIN:"Cabin",CHIVO:"Chivo",OPEN_SANS:"Open+Sans",FIRA_SANS:"Fira+Sans",ROBOTO:"Roboto",NUNITO:"Nunito",OVERPASS:"Overpass",LATO:"Lato",LIBRE_FRANKLIN:"Libre+Franklin",MONTSERRAT:"Montserrat",POPPINS:"Poppins",RUBIK:"Rubik",RALEWAY:"Raleway",JOSEFIN_SANS:"Josefin+Sans",ALEGREYA_SANS:"Alegreya+Sans",OSWALD:"Oswald"}),re=(Object.freeze([ne.CABIN,ne.CHIVO,ne.OPEN_SANS,ne.FIRA_SANS,ne.ROBOTO,ne.NUNITO,ne.OVERPASS,ne.LATO,ne.LIBRE_FRANKLIN,ne.MONTSERRAT,ne.POPPINS,ne.RUBIK,ne.RALEWAY,ne.JOSEFIN_SANS,ne.ALEGREYA_SANS,ne.OSWALD]),Object.freeze({[ne.THEME_DEFAULT]:null,[ne.GEORGIA]:"Georgia, serif",[ne.PALATINO]:'"Palatino Linotype", "Book Antiqua", Palatino, serif',[ne.TIMES_NEW_ROMAN]:'"Times New Roman", Times, serif',[ne.ARIAL]:"Arial, Helvetica, sans-serif",[ne.IMPACT]:"Impact, Charcoal, sans-serif",[ne.LUCIDA]:'"Lucida Sans Unicode", "Lucida Grande", sans-serif',[ne.TAHOMA]:"Tahoma, Geneva, sans-serif",[ne.TREBUCHET]:'"Trebuchet MS", Helvetica, sans-serif',[ne.VERDANA]:"Verdana, Geneva, sans-serif",[ne.COURIER]:'"Courier New", Courier, monospace',[ne.CABIN]:'"Cabin", sans-serif',[ne.CHIVO]:'"Chivo", sans-serif',[ne.OPEN_SANS]:'"Open Sans", sans-serif',[ne.FIRA_SANS]:'"Fira Sans", sans-serif',[ne.ROBOTO]:'"Roboto", sans-serif',[ne.NUNITO]:'"Nunito", sans-serif',[ne.OVERPASS]:'"Overpass", sans-serif',[ne.LATO]:'"Lato", sans-serif',[ne.LIBRE_FRANKLIN]:'"Libre Franklin", sans-serif',[ne.MONTSERRAT]:'"Montserrat", sans-serif',[ne.POPPINS]:'"Poppins", sans-serif',[ne.RUBIK]:'"Rubik", sans-serif',[ne.RALEWAY]:'"Raleway", sans-serif',[ne.JOSEFIN_SANS]:'"Josefin Sans", sans-serif',[ne.ALEGREYA_SANS]:'"Alegreya Sans", sans-serif',[ne.OSWALD]:'"Oswald", sans-serif'}),Object.freeze({OPEN:"open",CLOSED:"closed",CLOSED_AFTER:"closed-after"}));Object.freeze({SHOW_RESULTS:"show-results",SHOW_CLOSED_BANNER:"show-closed-banner",HIDDEN:"hidden"}),Object.freeze({RADIO:"radio",BUTTON:"button"}),Object.freeze({LIST:"list",INLINE:"inline"});var oe,se,ae=(oe=n=>{let{attributes:r,fallbackStyles:s,renderStyleProbe:i}=n;const l=r.apiPollData.id,[c,u]=(0,t.useState)(0),{hasVoted:d,vote:p,storedCookieValue:f}=function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=`cs-poll-${e}`,[s,a]=(0,t.useState)(!1),[i,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)("");return(0,t.useEffect)((()=>{n&&void 0!==$.get(o)&&(l(!0),u($.get(o)))}),[]),{hasVoted:i,isVoting:s,vote:async function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{a(!0);const i=await(async e=>{const t=(new Date).getTime(),n=await window.fetch(`https://poll.fm/n/5430eeac3911395001d731d9702fc38b/${e}?${t}&format=json`);if(!n.ok)throw new G;const r=await n.json();if(!r.nonce)throw new G;return r.nonce})(e);if(await(async(e,t,n,r)=>{const o=n.join(","),s=await window.fetch(`https://polls.polldaddy.com/vote-js.php?format=json&p=${t}&b=1&a=${o}&o=&va=16&cookie=0&n=${e}&url=${encodeURIComponent(window.location)}&vi=${r}`);if(!s.ok)throw new G;const a=await s.json();if("error"===a.status)throw new z(a.error)})(i,e,t,s),l(!0),n){const e=r?t.join(","):(new Date).getTime();$.set(o,e,{sameSite:"Strict",expires:365}),u(e)}}finally{a(!1)}},storedCookieValue:c}}(l,!0,!0),{results:m}=K(l,!r.hideResults);(0,t.useEffect)((()=>{""!==f&&u(parseInt(f.split(",")[0],10))}),[f]);const h=async e=>{u(e),await p([e])},E=a()("crowdsignal-forms-vote",r.className,`size-${r.size}`),g=(0,o.zipObject)((0,o.map)(r.apiPollData.answers,"client_id"),(0,o.map)(r.apiPollData.answers,"id")),v=(e=>(0,o.mapKeys)({borderRadius:`${e.borderRadius}px`,borderWidth:`${e.borderWidth}px`},((e,t)=>`--crowdsignal-forms-vote-${(0,o.kebabCase)(t)}`)))(r),b=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;return re.CLOSED===e||re.CLOSED_AFTER===e&&new Date(t)<n}(r.pollStatus,r.closedAfterDateTime);return(0,e.createElement)("div",{className:E,style:v},(0,e.createElement)("div",{className:"crowdsignal-forms-vote__items"},(0,o.map)(r.innerBlocks,(t=>{const n=g[t.answerId];return(0,e.createElement)(B,{attributes:t,fallbackStyles:s,key:t.answerId,apiAnswerId:n,onVote:h,disabled:d||0!==c||b,isVotedOn:n===c,voteCount:m?m[n]:0,hideCount:r.hideResults,type:t.type})}))),(0,e.createElement)(te,{showBranding:d&&!r.hideBranding,referralCode:"cs-forms-vote"}),i())},(se=e=>({fallbackStyles:Q(e.querySelector(".crowdsignal-forms__style-probe"))}),(0,J.createHigherOrderComponent)((t=>class extends e.Component{constructor(e){super(e),this.nodeRef=this.props.node,this.state={fallbackStyles:void 0,grabStylesCompleted:!1},this.bindRef=this.bindRef.bind(this)}bindRef(e){e&&(this.nodeRef=e)}componentDidMount(){this.grabFallbackStyles()}componentDidUpdate(){this.grabFallbackStyles()}grabFallbackStyles(){const{grabStylesCompleted:e,fallbackStyles:t}=this.state;if(this.nodeRef&&!e){const e=se(this.nodeRef,this.props);Y()(e,t)||this.setState({fallbackStyles:e,grabStylesCompleted:Object.values(e).every(Boolean)})}}render(){const n=(0,e.createElement)(t,_({},this.props,this.state.fallbackStyles));return this.props.node?n:(0,e.createElement)("div",{ref:this.bindRef}," ",n," ")}}),"withFallbackStyles"))((t=>{let{fallbackStyles:n,...r}=t;return(0,e.createElement)(oe,_({fallbackStyles:n||{},renderStyleProbe:()=>n?null:(0,e.createElement)(X,null)},r))})));const ie=(e,t)=>(0,o.forEach)(document.querySelectorAll(`div[${e}]`),(n=>{try{const r=JSON.parse(n.dataset[(0,o.camelCase)(e.substr(5))]),s=t(r,n);n.removeAttribute(e),(0,p.render)(s,n)}catch(t){console.error("Crowdsignal Forms: Failed to parse block data for: %s",e)}})),le=(e,t)=>{((0,o.isEmpty)(window.CrowdsignalMutationObservers)||!0!==window.CrowdsignalMutationObservers[e])&&(new window.MutationObserver((()=>ie(e,t))).observe(document.body,{attributes:!0,attributeFilter:[e],childList:!0,subtree:!0}),(0,o.isEmpty)(window.CrowdsignalMutationObservers)&&(window.CrowdsignalMutationObservers=[]),window.CrowdsignalMutationObservers[e]=!0,ie(e,t))};((e,t)=>{if("complete"===document.readyState)return le(e,t);window.addEventListener("load",(()=>le(e,t)))})("data-crowdsignal-vote",((t,n)=>{const r=[];(0,o.forEach)(n.children,(e=>{(0,o.isEmpty)(e.dataset.crowdsignalVoteItem)||r.push(JSON.parse(e.dataset.crowdsignalVoteItem))}));const s={...t,innerBlocks:r};return(0,e.createElement)(ae,{attributes:s})}))}()}();