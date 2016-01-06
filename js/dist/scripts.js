/* Riot v2.3.12, @license MIT, (c) 2015 Muut Inc. + contributors */
(function(e,t){"use strict";var n={version:"v2.3.12",settings:{}},r=0,i=[],o={},f="riot-",u=f+"tag",a="string",s="object",c="undefined",l="function",p=/^(?:opt(ion|group)|tbody|col|t[rhd])$/,d=["_item","_id","_parent","update","root","mount","unmount","mixin","isMounted","isLoop","tags","parent","opts","trigger","on","off","one"],g=(e&&e.document||{}).documentMode|0;n.observable=function(e){e=e||{};var t={},n=function(e,t){e.replace(/\S+/g,t)},r=function(t,n){Object.defineProperty(e,t,{value:n,enumerable:false,writable:false,configurable:false})};r("on",function(r,i){if(typeof i!="function")return e;n(r,function(e,n){(t[e]=t[e]||[]).push(i);i.typed=n>0});return e});r("off",function(r,i){if(r=="*")t={};else{n(r,function(e){if(i){var n=t[e];for(var r=0,o;o=n&&n[r];++r){if(o==i)n.splice(r--,1)}}else delete t[e]})}return e});r("one",function(t,n){function r(){e.off(t,r);n.apply(e,arguments)}return e.on(t,r)});r("trigger",function(r){var i=arguments.length-1,o=new Array(i);for(var f=0;f<i;f++){o[f]=arguments[f+1]}n(r,function(n){var r=(t[n]||[]).slice(0);for(var i=0,f;f=r[i];++i){if(f.busy)return;f.busy=1;try{f.apply(e,f.typed?[n].concat(o):o)}catch(u){e.trigger("error",u)}if(r[i]!==f){i--}f.busy=0}if(t.all&&n!="all")e.trigger.apply(e,["all",n].concat(o))});return e});return e};(function(t){if(!e)return;var n=/^.+?\/+[^\/]+/,r="EventListener",i="remove"+r,o="add"+r,f="hasAttribute",u="replace",a="popstate",s="hashchange",c="trigger",l=3,p=e,d=document,g=p.history.location||p.location,h=O.prototype,v=d&&d.ontouchstart?"touchstart":"click",m=false,y=t.observable(),b=false,w,x,_,N,L,T=[],C=0;function M(e){return e.split(/[\/?#]/)}function E(e,t){var n=new RegExp("^"+t[u](/\*/g,"([^/?#]+?)")[u](/\.\./,".*")+"$"),r=e.match(n);if(r)return r.slice(1)}function S(e,t){var n;return function(){clearTimeout(n);n=setTimeout(e,t)}}function A(e){w=S(j,1);p[o](a,w);p[o](s,w);d[o](v,I);if(e)j(true)}function O(){this.$=[];t.observable(this);y.on("stop",this.s.bind(this));y.on("emit",this.e.bind(this))}function $(e){return e[u](/^\/|\/$/,"")}function H(e){return typeof e=="string"}function R(e){return(e||g.href)[u](n,"")}function k(e){return x[0]=="#"?(e||g.href).split(x)[1]||"":R(e)[u](x,"")}function j(e){var t=C==0;if(l<=C)return;C++;T.push(function(){var t=k();if(e||t!=_){y[c]("emit",t);_=t}});if(t){while(T.length){T[0]();T.shift()}C=0}}function I(e){if(e.which!=1||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)return;var t=e.target;while(t&&t.nodeName!="A")t=t.parentNode;if(!t||t.nodeName!="A"||t[f]("download")||!t[f]("href")||t.target&&t.target!="_self"||t.href.indexOf(g.href.match(n)[0])==-1)return;if(t.href!=g.href){if(t.href.split("#")[0]==g.href.split("#")[0]||x!="#"&&R(t.href).indexOf(x)!==0||!F(k(t.href),t.title||d.title))return}e.preventDefault()}function F(e,t){t=t||d.title;history.pushState(null,t,x+$(e));d.title=t;b=false;j();return b}h.m=function(e,t){if(H(e)&&(!t||H(t)))F(e,t);else if(t)this.r(e,t);else this.r("@",e)};h.s=function(){this.off("*");this.$=[]};h.e=function(e){this.$.concat("@").some(function(t){var n=(t=="@"?N:L)($(e),$(t));if(typeof n!="undefined"){this[c].apply(null,[t].concat(n));return b=true}},this)};h.r=function(e,t){if(e!="@"){e="/"+$(e);this.$.push(e)}this.on(e,t)};var B=new O;var K=B.m.bind(B);K.create=function(){var e=new O;e.m.stop=e.s.bind(e);return e.m.bind(e)};K.base=function(e){x=e||"#";_=k()};K.exec=function(){j(true)};K.parser=function(e,t){if(!e&&!t){N=M;L=E}if(e)N=e;if(t)L=t};K.query=function(){var e={};g.href[u](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r});return e};K.stop=function(){if(m){p[i](a,w);p[i](s,w);d[i](v,I);y[c]("stop");m=false}};K.start=function(e){if(!m){if(document.readyState=="complete")A(e);else p[o]("load",function(){setTimeout(function(){A(e)},1)});m=true}};K.base();K.parser();t.route=K})(n);var h=function(e){var t="g",r=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,i=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,o=i.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,f="{ }",u={"(":RegExp("([()])|"+o,t),"[":RegExp("([[\\]])|"+o,t),"{":RegExp("([{}])|"+o,t)};var a=e,s,c=[];function l(e){return e}function p(e,n){if(!n)n=c;return new RegExp(e.source.replace(/{/g,n[2]).replace(/}/g,n[3]),e.global?t:"")}function d(e){var n,r=e.split(" ");if(e===f){r[2]=r[0];r[3]=r[1];n=l}else{if(r.length!==2||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(e)){throw new Error('Unsupported brackets "'+e+'"')}r=r.concat(e.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" "));n=p}r[4]=n(r[1].length>1?/{[\S\s]*?}/:/{[^}]*}/,r);r[5]=n(/\\({|})/g,r);r[6]=n(/(\\?)({)/g,r);r[7]=RegExp("(\\\\?)(?:([[({])|("+r[3]+"))|"+o,t);r[8]=e;return r}function g(e){if(!e)e=f;if(e!==c[8]){c=d(e);s=e===f?l:p;c[9]=s(/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/);c[10]=s(/(^|[^\\]){=[\S\s]*?}/);h._rawOffset=c[0].length}a=e}function h(e){return e instanceof RegExp?s(e):c[e]}h.split=function y(e,t,n){if(!n)n=c;var r=[],i,o,f,a,s=n[6];o=f=s.lastIndex=0;while(i=s.exec(e)){a=i.index;if(o){if(i[2]){s.lastIndex=p(i[2],s.lastIndex);continue}if(!i[3])continue}if(!i[1]){l(e.slice(f,a));f=s.lastIndex;s=n[6+(o^=1)];s.lastIndex=f}}if(e&&f<e.length){l(e.slice(f))}return r;function l(e){if(t||o)r.push(e&&e.replace(n[5],"$1"));else r.push(e)}function p(t,n){var r,i=u[t],o=1;i.lastIndex=n;while(r=i.exec(e)){if(r[1]&&!(r[1]===t?++o:--o))break}return r?i.lastIndex:e.length}};h.hasExpr=function b(e){return h(4).test(e)};h.loopKeys=function w(e){var t=e.match(h(9));return t?{key:t[1],pos:t[2],val:c[0]+t[3].trim()+c[1]}:{val:e.trim()}};h.array=function x(e){return d(e||a)};var v;function m(e){var t;e=e||{};t=e.brackets;Object.defineProperty(e,"brackets",{set:g,get:function(){return a},enumerable:true});v=e;g(t)}Object.defineProperty(h,"settings",{set:m,get:function(){return v}});h.settings=typeof n!=="undefined"&&n.settings||{};h.set=g;h.R_STRINGS=i;h.R_MLCOMMS=r;h.S_QBLOCKS=o;return h}();var v=function(){var t={};function n(e,n){if(!e)return e;return(t[e]||(t[e]=i(e))).call(n,r)}n.isRaw=function(e){return e[h._rawOffset]==="="};n.haveRaw=function(e){return h(10).test(e)};n.hasExpr=h.hasExpr;n.loopKeys=h.loopKeys;n.errorHandler=null;function r(e,t){if(n.errorHandler){e.riotData={tagName:t&&t.root&&t.root.tagName,_riot_id:t&&t._riot_id};n.errorHandler(e)}}function i(e){var t=u(e);if(t.slice(0,11)!=="try{return ")t="return "+t;return new Function("E",t+";")}var o=RegExp(h.S_QBLOCKS,"g"),f=/\x01(\d+)~/g;function u(e){var t=[],n,r=h.split(e.replace(/\u2057/g,'"'),1);if(r.length>2||r[0]){var i,o,u=[];for(i=o=0;i<r.length;++i){n=r[i];if(n&&(n=i&1?c(n,1,t):'"'+n.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"'))u[o++]=n}n=o<2?u[0]:"["+u.join(",")+'].join("")'}else{n=c(r[1],0,t)}if(t[0])n=n.replace(f,function(e,n){return t[n].replace(/\r/g,"\\r").replace(/\n/g,"\\n")});return n}var a=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/,s=/,|([[{(])|$/g;function c(e,t,n){if(e[0]==="=")e=e.slice(1);e=e.replace(o,function(e,t){return e.length>2&&!t?""+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1");if(e){var r=[],i=0,f;while(e&&(f=e.match(a))&&!f.index){var u,s,c=/,|([[{(])|$/g;e=RegExp.rightContext;u=f[2]?n[f[2]].slice(1,-1).trim().replace(/\s+/g," "):f[1];while(s=(f=c.exec(e))[1])l(s,c);s=e.slice(0,f.index);e=RegExp.rightContext;r[i++]=d(s,1,u)}e=!i?d(e,t):i>1?"["+r.join(",")+'].join(" ").trim()':r[0]}return e;function l(t,n){var r,i=1,o=t==="("?/[()]/g:t==="["?/[[\]]/g:/[{}]/g;o.lastIndex=n.lastIndex;while(r=o.exec(e)){if(r[0]===t)++i;else if(!--i)break}n.lastIndex=i?e.length:o.lastIndex}}var l='"in this?this:'+(typeof e!=="object"?"global":"window")+").";var p=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g;function d(e,t,n){var r;e=e.replace(p,function(e,t,n,i,o){if(n){i=r?0:i+e.length;if(n!=="this"&&n!=="global"&&n!=="window"){e=t+'("'+n+l+n;if(i)r=(o=o[i])==="."||o==="("||o==="["}else if(i)r=!/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/.test(o.slice(i))}return e});if(r){e="try{return "+e+"}catch(e){E(e,this)}"}if(n){e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""'}else if(t){e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'}return e}n.parse=function(e){return e};return n}();v.version=h.version="v2.3.19";var m=function(e){var t={tr:"tbody",th:"tr",td:"tr",tbody:"table",col:"colgroup"},n="div";e=e&&e<10;function r(r){var o=r&&r.match(/^\s*<([-\w]+)/),f=o&&o[1].toLowerCase(),u=t[f]||n,a=W(u);a.stub=true;if(e&&f&&(o=f.match(p)))i(a,r,f,!!o[1]);else a.innerHTML=r;return a}function i(e,t,r,i){var o=W(n),f=i?"select>":"table>",u;o.innerHTML="<"+f+t+"</"+f;u=te(r,o);if(u)e.appendChild(u)}return r}(g);function y(e,t,n){var r={};r[e.key]=t;if(e.pos)r[e.pos]=n;return r}function b(e,t){var n=t.length,r=e.length;while(n>r){var i=t[--n];t.splice(n,1);i.unmount()}}function w(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n];if(U(r))A(r,function(e){F(e,n,t)});else F(r,n,t)})}function x(e,t,n){var r=e._root;e._virts=[];while(r){var i=r.nextSibling;if(n)t.insertBefore(r,n._root);else t.appendChild(r);e._virts.push(r);r=i}}function _(e,t,n,r){var i=e._root;for(var o=0;o<r;o++){var f=i.nextSibling;t.insertBefore(i,n._root);i=f}}function N(e,t,n){$(e,"each");var r=typeof R(e,"no-reorder")!==a||$(e,"no-reorder"),i=D(e),f=o[i]||{tmpl:e.outerHTML},u=p.test(i),s=e.parentNode,c=document.createTextNode(""),l=j(e),d=/option/gi.test(i),g=[],h=[],m,N=e.tagName=="VIRTUAL";n=v.loopKeys(n);s.insertBefore(c,e);t.one("before-mount",function(){e.parentNode.removeChild(e);if(s.stub)s=t.root}).on("update",function(){var a=v(n.val,t),p=document.createDocumentFragment();if(!U(a)){m=a||false;a=m?Object.keys(a).map(function(e){return y(n,e,a[e])}):[]}a.forEach(function(a,c){var d=r&&a instanceof Object,v=h.indexOf(a),b=~v&&d?v:c,L=g[b];a=!m&&n.key?y(n,a,c):a;if(!d&&!L||d&&!~v||!L){L=new C(f,{parent:t,isLoop:true,hasImpl:!!o[i],root:u?s:e.cloneNode(),item:a},e.innerHTML);L.mount();if(N)L._root=L.root.firstChild;if(c==g.length){if(N)x(L,p);else p.appendChild(L.root)}else{if(N)x(L,s,g[c]);else s.insertBefore(L.root,g[c].root);h.splice(c,0,a)}g.splice(c,0,L);b=c}else L.update(a);if(b!==c&&d){if(N)_(L,s,g[c],e.childNodes.length);else s.insertBefore(L.root,g[c].root);if(n.pos)L[n.pos]=c;g.splice(c,0,g.splice(b,1)[0]);h.splice(c,0,h.splice(b,1)[0]);if(!l)w(L,c)}L._item=a;q(L,"_parent",t)},true);b(a,g);if(d)s.appendChild(p);else s.insertBefore(p,c);if(l)t.tags[i]=g;h=a.slice()})}function L(e,t,n,r){Q(e,function(e){if(e.nodeType==1){e.isLoop=e.isLoop||(e.parentNode&&e.parentNode.isLoop||R(e,"each"))?1:0;if(n){var i=j(e);if(i&&!e.isLoop)n.push(B(i,{root:e,parent:t},e.innerHTML,t))}if(!e.isLoop||r)ie(e,t,[])}})}function T(e,t,n){function r(e,t,r){if(v.hasExpr(t)){var i={dom:e,expr:t};n.push(P(i,r))}}Q(e,function(e){var n=e.nodeType;if(n==3&&e.parentNode.tagName!="STYLE")r(e,e.nodeValue);if(n!=1)return;var i=R(e,"each");if(i){N(e,t,i);return false}A(e.attributes,function(t){var n=t.name,i=n.split("__")[1];r(e,t.value,{attr:i||n,bool:i});if(i){$(e,n);return false}});if(j(e))return false})}function C(e,o,f){var u=n.observable(this),l=ne(o.opts)||{},p=m(e.tmpl),g=o.parent,h=o.isLoop,y=o.hasImpl,b=Z(o.item),w=[],x=[],_=o.root,N=e.fn,C=_.tagName.toLowerCase(),M={},E=[];if(N&&_._tag)_._tag.unmount(true);this.isMounted=false;_.isLoop=h;_._tag=this;q(this,"_riot_id",++r);P(this,{parent:g,root:_,opts:l,tags:{}},b);A(_.attributes,function(e){var t=e.value;if(v.hasExpr(t))M[e.name]=t});if(p.innerHTML&&!/^(select|optgroup|table|tbody|tr|col(?:group)?)$/.test(C))p.innerHTML=J(p.innerHTML,f);function R(){var e=y&&h?u:g||u;A(_.attributes,function(t){l[H(t.name)]=v(t.value,e)});A(Object.keys(M),function(t){l[H(t)]=v(M[t],e)})}function j(e){for(var t in b){if(typeof u[t]!==c&&V(u,t))u[t]=e[t]}}function I(){if(!u.parent||!h)return;A(Object.keys(u.parent),function(e){var t=!z(d,e)&&z(E,e);if(typeof u[e]===c||t){if(!t)E.push(e);u[e]=u.parent[e]}})}q(this,"update",function(e){e=Z(e);I();if(e&&typeof b===s){j(e);b=e}P(u,e);R();u.trigger("update",e);S(w,u);ue(function(){u.trigger("updated")});return this});q(this,"mixin",function(){A(arguments,function(e){var t;e=typeof e===a?n.mixin(e):e;if(O(e)){t=new e;e=e.prototype}else t=e;A(Object.getOwnPropertyNames(e),function(e){if(e!="init")u[e]=O(t[e])?t[e].bind(u):t[e]});if(t.init)t.init.bind(u)()});return this});q(this,"mount",function(){R();if(N)N.call(u,l);T(p,u,w);F(true);if(e.attrs||y){Y(e.attrs,function(e,t){k(_,e,t)});T(u.root,u,w)}if(!u.parent||h)u.update(b);u.trigger("before-mount");if(h&&!y){u.root=_=p.firstChild}else{while(p.firstChild)_.appendChild(p.firstChild);if(_.stub)u.root=_=g.root}if(h)L(u.root,u.parent,null,true);if(!u.parent||u.parent.isMounted){u.isMounted=true;u.trigger("mount")}else u.parent.one("mount",function(){if(!G(u.root)){u.parent.isMounted=u.isMounted=true;u.trigger("mount")}})});q(this,"unmount",function(e){var n=_,r=n.parentNode,o;u.trigger("before-unmount");i.splice(i.indexOf(u),1);if(this._virts){A(this._virts,function(e){e.parentNode.removeChild(e)})}if(r){if(g){o=K(g);if(U(o.tags[C]))A(o.tags[C],function(e,t){if(e._riot_id==u._riot_id)o.tags[C].splice(t,1)});else o.tags[C]=t}else while(n.firstChild)n.removeChild(n.firstChild);if(!e)r.removeChild(n);else $(r,"riot-tag")}u.trigger("unmount");F();u.off("*");u.isMounted=false;_._tag=null});function F(e){A(x,function(t){t[e?"mount":"unmount"]()});if(g){var t=e?"on":"off";if(h)g[t]("unmount",u.unmount);else g[t]("update",u.update)[t]("unmount",u.unmount)}}L(p,this,x)}function M(t,n,r,i){r[t]=function(t){var o=i._parent,f=i._item,u;if(!f)while(o&&!f){f=o._item;o=o._parent}t=t||e.event;if(V(t,"currentTarget"))t.currentTarget=r;if(V(t,"target"))t.target=t.srcElement;if(V(t,"which"))t.which=t.charCode||t.keyCode;t.item=f;if(n.call(i,t)!==true&&!/radio|check/.test(r.type)){if(t.preventDefault)t.preventDefault();t.returnValue=false}if(!t.preventUpdate){u=f?K(o):i;u.update()}}}function E(e,t,n){if(e){e.insertBefore(n,t);e.removeChild(t)}}function S(e,t){A(e,function(e,n){var r=e.dom,i=e.attr,o=v(e.expr,t),a=e.dom.parentNode;if(e.bool)o=o?i:false;else if(o==null)o="";if(a&&a.tagName=="TEXTAREA"){o=(""+o).replace(/riot-/g,"");a.value=o}if(e.value===o)return;e.value=o;if(!i){r.nodeValue=""+o;return}$(r,i);if(O(o)){M(i,o,r,t)}else if(i=="if"){var c=e.stub,l=function(){E(c.parentNode,c,r)},p=function(){E(r.parentNode,r,c)};if(o){if(c){l();r.inStub=false;if(!G(r)){Q(r,function(e){if(e._tag&&!e._tag.isMounted)e._tag.isMounted=!!e._tag.trigger("mount")})}}}else{c=e.stub=c||document.createTextNode("");if(r.parentNode)p();else(t.parent||t).one("updated",p);r.inStub=true}}else if(/^(show|hide)$/.test(i)){if(i=="hide")o=!o;r.style.display=o?"":"none"}else if(i=="value"){r.value=o}else if(oe(i,f)&&i!=u){if(o)k(r,i.slice(f.length),o)}else{if(e.bool){r[i]=o;if(!o)return}if(o&&o!=0&&typeof o!==s)k(r,i,o)}})}function A(e,t){for(var n=0,r=(e||[]).length,i;n<r;n++){i=e[n];if(i!=null&&t(i,n)===false)n--}return e}function O(e){return typeof e===l||false}function $(e,t){e.removeAttribute(t)}function H(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function R(e,t){return e.getAttribute(t)}function k(e,t,n){e.setAttribute(t,n)}function j(e){return e.tagName&&o[R(e,u)||e.tagName.toLowerCase()]}function I(e,t,n){var r=n.tags[t];if(r){if(!U(r))if(r!==e)n.tags[t]=[r];if(!z(n.tags[t],e))n.tags[t].push(e)}else{n.tags[t]=e}}function F(e,t,n){var r=e.parent,i;if(!r)return;i=r.tags[t];if(U(i))i.splice(n,0,i.splice(i.indexOf(e),1)[0]);else I(e,t,r)}function B(e,t,n,r){var i=new C(e,t,n),o=D(t.root),f=K(r);i.parent=f;i._parent=r;I(i,o,f);if(f!==r)I(i,o,r);t.root.innerHTML="";return i}function K(e){var t=e;while(!j(t.root)){if(!t.parent)break;t=t.parent}return t}function q(e,t,n,r){Object.defineProperty(e,t,P({value:n,enumerable:false,writable:false,configurable:false},r));return e}function D(e){var t=j(e),n=R(e,"name"),r=n&&!v.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return r}function P(e){var t,n=arguments;for(var r=1;r<n.length;++r){if(t=n[r]){for(var i in t){if(V(e,i))e[i]=t[i]}}}return e}function z(e,t){return~e.indexOf(t)}function U(e){return Array.isArray(e)||e instanceof Array}function V(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===c||n&&n.writable}function Z(e){if(!(e instanceof C)&&!(e&&typeof e.trigger==l))return e;var t={};for(var n in e){if(!z(d,n))t[n]=e[n]}return t}function Q(e,t){if(e){if(t(e)===false)return;else{e=e.firstChild;while(e){Q(e,t);e=e.nextSibling}}}}function Y(e,t){var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;while(n=r.exec(e)){t(n[1].toLowerCase(),n[2]||n[3]||n[4])}}function G(e){while(e){if(e.inStub)return true;e=e.parentNode}return false}function W(e){return document.createElement(e)}function X(e,t){var n=W(e);n.innerHTML=t||"";return n}function J(e,t){var n=X("div",e);if(n.querySelector&&n.querySelector("yield[from]")){A(X("div",t).childNodes,function(e){if(e.nodeType==1&&e.tagName=="YIELD"&&e.getAttribute("to")){A(ee('yield[from="'+e.getAttribute("to")+'"]',n),function(t){t.outerHTML=e.innerHTML})}});return n.innerHTML}else return e.replace(/<yield\s*(?:\/>|>\s*<\/yield\s*>)/gi,t||"")}function ee(e,t){return(t||document).querySelectorAll(e)}function te(e,t){return(t||document).querySelector(e)}function ne(e){function t(){}t.prototype=e;return new t}function re(e){return R(e,"id")||R(e,"name")}function ie(e,t,n){var r=re(e),i=function(i){if(z(n,r))return;var o=U(i);if(!i)t[r]=e;else if(!o||o&&!z(i,e)){if(o)i.push(e);else t[r]=[i,e]}};if(!r)return;if(v.hasExpr(r))t.one("updated",function(){r=re(e);i(t[r])});else i(t[r])}function oe(e,t){return e.slice(0,t.length)===t}var fe=function(){if(!e)return;var t=W("style"),n=te("style[type=riot]");k(t,"type","text/css");if(n){n.parentNode.replaceChild(t,n);n=null}else document.getElementsByTagName("head")[0].appendChild(t);return t.styleSheet?function(e){t.styleSheet.cssText+=e}:function(e){t.innerHTML+=e}}();var ue=function(e){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(e||{});function ae(e,t,n){var r=o[t],f=e._innerHTML=e._innerHTML||e.innerHTML;e.innerHTML="";if(r&&e)r=new C(r,{root:e,opts:n},f);if(r&&r.mount){r.mount();if(!z(i,r))i.push(r)}return r}n.util={brackets:h,tmpl:v};n.mixin=function(){var e={};return function(t,n){if(!n)return e[t];e[t]=n}}();n.tag=function(e,t,n,r,i){if(O(r)){i=r;if(/^[\w\-]+\s?=/.test(n)){r=n;n=""}else r=""}if(n){if(O(n))i=n;else if(fe)fe(n)}o[e]={name:e,tmpl:t,attrs:r,fn:i};return e};n.tag2=function(e,t,n,r,i,f){if(n&&fe)fe(n);o[e]={name:e,tmpl:t,attrs:r,fn:i};return e};n.mount=function(e,t,n){var r,i,f=[];function c(e){var t="";A(e,function(e){t+=", *["+u+'="'+e.trim()+'"]'});return t}function l(){var e=Object.keys(o);return e+c(e)}function p(e){var r;if(e.tagName){if(t&&(!(r=R(e,u))||r!=t))k(e,u,t);var i=ae(e,t||e.getAttribute(u)||e.tagName.toLowerCase(),n);if(i)f.push(i)}else if(e.length)A(e,p)}if(typeof t===s){n=t;t=0}if(typeof e===a){if(e==="*")e=i=l();else e+=c(e.split(","));r=e?ee(e):[]}else r=e;if(t==="*"){t=i||l();if(r.tagName)r=ee(t,r);else{var d=[];A(r,function(e){d.push(ee(t,e))});r=d}t=0}if(r.tagName)p(r);else A(r,p);return f};n.update=function(){return A(i,function(e){e.update()})};n.Tag=C;if(typeof exports===s)module.exports=n;else if(typeof define===l&&typeof define.amd!==c)define(function(){return e.riot=n});else e.riot=n})(typeof window!="undefined"?window:void 0);
/*
 * Controls the setup and JSON loading of each feed.
	* @param {Function} feedLoader
* @param {Function} feedLoader.init (Required)
*
* @param {String} selector: ID or class that will contain the feed
* @param {String} user: The user name to fetch top albums for.
* @param {String} api_key: Your Last.fm API key.
* @param {String} method: The type of API to call to be made. (e.g: user.gettopalbums|user.getrecenttracks)
*
* @param {Object} options: Options object (Optional) 
* @param {Number} options.limit: The number of results to fetch per page. Defaults to 10.
* @param {Number} options.size: The size of the albumb art to return.
* @param {String} options.period: The time period over which to retrieve top albums for (e.g: overall|7day|1month|3month|6month|12month)
* @param {Boolean} options.cover: Toggles the rendering of the cover image
* @param {Boolean} options.album: Toggles the rendering of the album name
* @param {Boolean} options.artist: Toggles the rendering of the artist name
* @param {Boolean} options.plays: Toggles the rendering of the play count
* @param {Boolean} options.date: Toggles the rendering of the date played
* @param {Boolean} options.playing: Toggles the rendering of the current playing track (note: user.getrecenttracks only)
*/

function gigwave() {}

gigwave.prototype = {

	init: function( data ){
		console.log("hello");
	},

};
String.prototype.cleanup = function() {
	return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};

Array.prototype.clean = function(del) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] === del) {
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

function setClassesArray(item, key, limit) {
	var first = (key === 0) ? 'first' : '';
	var last = (key === limit-1) ? 'last' : '';
	var classes_array = [item, first, last];
	var classes = classes_array.clean('').join(' ').trim();

	return classes;
}

function timeAgo(date){
	var m = 60;
	var h = m * 60;
	var d = new Date();
	var n = d.getTime();
	var now = String(n).substr(0,date.uts.length);
	var elapsed = now - date.uts;
	var elapsed_string = (elapsed/m < 60) ? Math.round(elapsed/m) + ' minute' : (elapsed/h < 24) ? Math.round(elapsed/h) + ' hour' : null;
	var plural = (elapsed > 1) ? 's' : '';

	var when = (elapsed_string) ? elapsed_string + plural + ' ago' : date['#text'];
	return when;
}

/**
* Helper function for iterating over a collection
*
* @param list
* @param fn
*/
function each(list, fn) {
	for (var key in list) {
		if( list.hasOwnProperty(key) ) {
			cont = fn(key, list[key]);
			if(cont === false) {
				break; //allow early exit
			}
		}
	}
}

/**
* Helper function for turning object into a string of params
*
* @param obj
*/
function objToParams(obj) {
	var str = "";
	for (var key in obj) {
		if (str !== "") {
			str += "&";
		}
		str += key + "=" + obj[key];
	}
	return str;
}

/**
 * CustomEvent polyfill
 */
if (typeof window.CustomEvent !== 'function') {
  (function() {
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
     }

    window.CustomEvent = CustomEvent;

    CustomEvent.prototype = window.CustomEvent.prototype;
  })();
}/*
 * Controls the setup and JSON loading of each feed.
	* @param {Function} feedLoader
* @param {Function} feedLoader.init (Required)
*
* @param {String} selector: ID or class that will contain the feed
*/



function loader( element, settings ) {
	this.element = element;
	this.settings = settings;
	this.status = null;
}

loader.prototype = {

	loadfeed: function( url, params ){
		var self = this;
		var data;

		// GET the JSON feed using XMLHttpRequest
		try {
			var xhr = new XMLHttpRequest();
			var prm = objToParams(params); // Convert our param object into a string
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					data = JSON.parse(xhr.response); // The response comes as a string so we convert it to JSON
					console.log(data);
					return data;
				}
			};
			xhr.open("GET", url + prm, true); // Async is true
			xhr.send(null);
		} catch (e) {
			console.log( 'Gigwave: Error loading feed.' );
			console.log(e);
		}
	}

};
(function(root, factory) {
	if (typeof(define) === 'function' && define.amd) {
		define(['riot'], function(riot) {
			factory(riot);
		});
	}
	else if (typeof(module) !== 'undefined' && typeof module.exports !== 'undefined') {
		var riot = require('riot');

		factory(riot);
	}
	else {
		factory(root.riot);
	}
})(this, function(riot) {
	
	riot.tag('todo', '<h1>{opts.title}</h1><ul><li each="{items.filter(whatShow)}"><label class="{completed: done}"><input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label></li></ul><form onsubmit="{add}"><input name="input" onkeyup="{edit}"><button __disabled="{!text}">Add #{items.filter(whatShow).length + 1}</button><button __disabled="{items.filter(onlyDone).length == 0}" onclick="{removeAllDone}"> X{items.filter(onlyDone).length} </button></form> ', function(opts) {
	    this.items = opts.items
	
	    this.edit = function(e) {
	      this.text = e.target.value
	    }.bind(this);
	
	    this.add = function(e) {
	      if (this.text) {
	        this.items.push({ title: this.text })
	        this.text = this.input.value = ''
	      }
	    }.bind(this);
	
	    this.removeAllDone = function(e) {
	      this.items = this.items.filter(function(item) {
	        return !item.done
	      })
	    }.bind(this);
	
	    this.whatShow = function(item) {
	      return !item.hidden
	    }.bind(this);
	
	    this.onlyDone = function(item) {
	     return item.done
	   }
	
	    this.toggle = function(e) {
	      var item = e.item
	      item.done = !item.done
	      return true
	    }.bind(this);
	  
	});
	
	

});