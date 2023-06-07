(function(){"use strict";var A=(e=>(e.Clockwise="clockwise",e.CounterClockwise="counter-clockwise",e))(A||{}),p=(e=>(e.Relative="relative",e.Absolute="absolute",e))(p||{});const re=(e,t)=>e in t;var ie=typeof global=="object"&&global&&global.Object===Object&&global,oe=ie,ae=typeof self=="object"&&self&&self.Object===Object&&self,se=oe||ae||Function("return this")(),I=se,ce=I.Symbol,d=ce,L=Object.prototype,le=L.hasOwnProperty,ue=L.toString,w=d?d.toStringTag:void 0;function fe(e){var t=le.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch{}var o=ue.call(e);return r&&(t?e[w]=n:delete e[w]),o}var he=Object.prototype,pe=he.toString;function de(e){return pe.call(e)}var ge="[object Null]",ye="[object Undefined]",U=d?d.toStringTag:void 0;function F(e){return e==null?e===void 0?ye:ge:U&&U in Object(e)?fe(e):de(e)}function N(e){return e!=null&&typeof e=="object"}var me="[object Symbol]";function G(e){return typeof e=="symbol"||N(e)&&F(e)==me}function _e(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var be=Array.isArray,x=be,ve=1/0,Q=d?d.prototype:void 0,k=Q?Q.toString:void 0;function q(e){if(typeof e=="string")return e;if(x(e))return _e(e,q)+"";if(G(e))return k?k.call(e):"";var t=e+"";return t=="0"&&1/e==-ve?"-0":t}function P(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function we(e){return e}var xe="[object AsyncFunction]",Ce="[object Function]",Se="[object GeneratorFunction]",Oe="[object Proxy]";function Pe(e){if(!P(e))return!1;var t=F(e);return t==Ce||t==Se||t==xe||t==Oe}var Ee=I["__core-js_shared__"],M=Ee,X=function(){var e=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Te(e){return!!X&&X in e}var $e=Function.prototype,ze=$e.toString;function Ae(e){if(e!=null){try{return ze.call(e)}catch{}try{return e+""}catch{}}return""}var Ie=/[\\^$.*+?()[\]{}|]/g,Fe=/^\[object .+?Constructor\]$/,Ne=Function.prototype,Ge=Object.prototype,Me=Ne.toString,Re=Ge.hasOwnProperty,je=RegExp("^"+Me.call(Re).replace(Ie,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function De(e){if(!P(e)||Te(e))return!1;var t=Pe(e)?je:Fe;return t.test(Ae(e))}function He(e,t){return e==null?void 0:e[t]}function R(e,t){var n=He(e,t);return De(n)?n:void 0}function Le(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var Ue=800,Qe=16,ke=Date.now;function qe(e){var t=0,n=0;return function(){var r=ke(),o=Qe-(r-n);if(n=r,o>0){if(++t>=Ue)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Xe(e){return function(){return e}}var Je=function(){try{var e=R(Object,"defineProperty");return e({},"",{}),e}catch{}}(),E=Je,Ke=E?function(e,t){return E(e,"toString",{configurable:!0,enumerable:!1,value:Xe(t),writable:!0})}:we,Be=Ke,Ye=qe(Be),Ze=Ye,We=9007199254740991,Ve=/^(?:0|[1-9]\d*)$/;function J(e,t){var n=typeof e;return t=t??We,!!t&&(n=="number"||n!="symbol"&&Ve.test(e))&&e>-1&&e%1==0&&e<t}function et(e,t,n){t=="__proto__"&&E?E(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function K(e,t){return e===t||e!==e&&t!==t}var tt=Object.prototype,nt=tt.hasOwnProperty;function rt(e,t,n){var r=e[t];(!(nt.call(e,t)&&K(r,n))||n===void 0&&!(t in e))&&et(e,t,n)}var B=Math.max;function it(e,t,n){return t=B(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,s=B(r.length-t,0),c=Array(s);++o<s;)c[o]=r[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=r[o];return a[t]=n(c),Le(e,this,a)}}var ot=9007199254740991;function at(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ot}var st="[object Arguments]";function Y(e){return N(e)&&F(e)==st}var Z=Object.prototype,ct=Z.hasOwnProperty,lt=Z.propertyIsEnumerable,ut=Y(function(){return arguments}())?Y:function(e){return N(e)&&ct.call(e,"callee")&&!lt.call(e,"callee")},W=ut,ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ht=/^\w*$/;function pt(e,t){if(x(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||G(e)?!0:ht.test(e)||!ft.test(e)||t!=null&&e in Object(t)}var dt=R(Object,"create"),C=dt;function gt(){this.__data__=C?C(null):{},this.size=0}function yt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var mt="__lodash_hash_undefined__",_t=Object.prototype,bt=_t.hasOwnProperty;function vt(e){var t=this.__data__;if(C){var n=t[e];return n===mt?void 0:n}return bt.call(t,e)?t[e]:void 0}var wt=Object.prototype,xt=wt.hasOwnProperty;function Ct(e){var t=this.__data__;return C?t[e]!==void 0:xt.call(t,e)}var St="__lodash_hash_undefined__";function Ot(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=C&&t===void 0?St:t,this}function y(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}y.prototype.clear=gt,y.prototype.delete=yt,y.prototype.get=vt,y.prototype.has=Ct,y.prototype.set=Ot;function Pt(){this.__data__=[],this.size=0}function T(e,t){for(var n=e.length;n--;)if(K(e[n][0],t))return n;return-1}var Et=Array.prototype,Tt=Et.splice;function $t(e){var t=this.__data__,n=T(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Tt.call(t,n,1),--this.size,!0}function zt(e){var t=this.__data__,n=T(t,e);return n<0?void 0:t[n][1]}function At(e){return T(this.__data__,e)>-1}function It(e,t){var n=this.__data__,r=T(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function b(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}b.prototype.clear=Pt,b.prototype.delete=$t,b.prototype.get=zt,b.prototype.has=At,b.prototype.set=It;var Ft=R(I,"Map"),Nt=Ft;function Gt(){this.size=0,this.__data__={hash:new y,map:new(Nt||b),string:new y}}function Mt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function $(e,t){var n=e.__data__;return Mt(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Rt(e){var t=$(this,e).delete(e);return this.size-=t?1:0,t}function jt(e){return $(this,e).get(e)}function Dt(e){return $(this,e).has(e)}function Ht(e,t){var n=$(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function m(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}m.prototype.clear=Gt,m.prototype.delete=Rt,m.prototype.get=jt,m.prototype.has=Dt,m.prototype.set=Ht;var Lt="Expected a function";function j(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Lt);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],s=n.cache;if(s.has(o))return s.get(o);var c=e.apply(this,r);return n.cache=s.set(o,c)||s,c};return n.cache=new(j.Cache||m),n}j.Cache=m;var Ut=500;function Qt(e){var t=j(e,function(r){return n.size===Ut&&n.clear(),r}),n=t.cache;return t}var kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qt=/\\(\\)?/g,Xt=Qt(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(kt,function(n,r,o,s){t.push(o?s.replace(qt,"$1"):r||n)}),t}),Jt=Xt;function Kt(e){return e==null?"":q(e)}function z(e,t){return x(e)?e:pt(e,t)?[e]:Jt(Kt(e))}var Bt=1/0;function D(e){if(typeof e=="string"||G(e))return e;var t=e+"";return t=="0"&&1/e==-Bt?"-0":t}function Yt(e,t){t=z(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[D(t[n++])];return n&&n==r?e:void 0}function Zt(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var V=d?d.isConcatSpreadable:void 0;function Wt(e){return x(e)||W(e)||!!(V&&e&&e[V])}function ee(e,t,n,r,o){var s=-1,c=e.length;for(n||(n=Wt),o||(o=[]);++s<c;){var a=e[s];t>0&&n(a)?t>1?ee(a,t-1,n,r,o):Zt(o,a):r||(o[o.length]=a)}return o}function Vt(e){var t=e==null?0:e.length;return t?ee(e,1):[]}function en(e){return Ze(it(e,void 0,Vt),e+"")}function tn(e,t){return e!=null&&t in Object(e)}function nn(e,t,n){t=z(t,e);for(var r=-1,o=t.length,s=!1;++r<o;){var c=D(t[r]);if(!(s=e!=null&&n(e,c)))break;e=e[c]}return s||++r!=o?s:(o=e==null?0:e.length,!!o&&at(o)&&J(c,o)&&(x(e)||W(e)))}function rn(e,t){return e!=null&&nn(e,t,tn)}function on(e,t,n,r){if(!P(e))return e;t=z(t,e);for(var o=-1,s=t.length,c=s-1,a=e;a!=null&&++o<s;){var f=D(t[o]),i=n;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(o!=c){var u=a[f];i=r?r(u,f,a):void 0,i===void 0&&(i=P(u)?u:J(t[o+1])?[]:{})}rt(a,f,i),a=a[f]}return e}function an(e,t,n){for(var r=-1,o=t.length,s={};++r<o;){var c=t[r],a=Yt(e,c);n(a,c)&&on(s,z(c,e),a)}return s}function sn(e,t){return an(e,t,function(n,r){return rn(e,r)})}var cn=en(function(e,t){return e==null?{}:sn(e,t)}),te=cn,ne={};(function(e){class t{constructor(r){this.i=0,this.string=r,this.whitespace=` 	\r
`,this.quotes=`'"`,this.escapes="\\",this.escapedQuotes='"',this.ansiCQuotes=!0,this.localeQuotes=!0,this.debug=!1}readChar(){return this.string.charAt(this.i++)}processEscapes(r,o,s){if(!s&&!this.escapedQuotes.includes(o))return r;const c="["+this.escapes.replace(/(.)/g,"\\$1")+"]";if(!s&&this.escapedQuotes.includes(o)){const a=new RegExp(c+"("+c+"|\\"+o+")","g");return r.replace(a,"$1")}if(s){const a={"([\\\\'\"?])":i=>i,a:()=>"\x07",b:()=>"\b","e|E":()=>"\x1B",f:()=>"\f",n:()=>`
`,r:()=>"\r",t:()=>"	",v:()=>"\v","([0-7]{1,3})":i=>String.fromCharCode(parseInt(i,8)),"x([0-9a-fA-F]{1,2})":i=>String.fromCharCode(parseInt(i,16)),"u([0-9a-fA-F]{1,4})":i=>String.fromCharCode(parseInt(i,16)),"U([0-9a-fA-F]{1,8})":i=>String.fromCharCode(parseInt(i,16)),"c(.)":i=>i==="?"?"":i==="@"?"\0":String.fromCharCode(i.charCodeAt(0)&31)},f=new RegExp(c+"("+Object.keys(a).join("|")+")","g");return r.replace(f,function(i,u){for(const g in a){const S=new RegExp("^"+g+"$").exec(u);if(S!==null)return a[g].apply(null,S.slice(1))}})}}*[Symbol.iterator](){let r=!1,o=!1,s=!1,c=-2,a;for(this.debug&&console.log("full input:",">"+this.string+"<");;){const f=this.i,i=this.readChar();if(this.debug&&console.log("position:",f,"input:",">"+i+"<","accumulated:",a,"inQuote:",r,"inDollarQuote:",o,"lastDollar:",c,"escaped:",s),i===""){if(r)throw new Error("Got EOF while in a quoted string");if(s)throw new Error("Got EOF while in an escape sequence");a!==void 0&&(yield a);return}if(s){i===`
`||(r?a=(a||"")+s+i:a=(a||"")+i),s=!1;continue}if(this.escapes.includes(i)&&(!r||o!==!1||this.escapedQuotes.includes(r))){s=i;continue}if(r!==!1){if(i===r){a=this.processEscapes(a,r,o==="'"),r=!1,o=!1;continue}a=(a||"")+i;continue}if(this.quotes.includes(i)){r=i,c===f-1&&(i==="'"&&!this.ansiCQuotes||i==='"'&&!this.localeQuotes||(o=i)),a=a||"",o!==!1&&(a=a.slice(0,-1));continue}if(r===!1&&i==="$"&&(c=f),this.whitespace.includes(i)){a!==void 0&&(yield a),a=void 0;continue}a=(a||"")+i}}}e.split=function(n){return Array.from(new t(n))},e.quote=function(n){return n===""?"''":/[^\w@%\-+=:,./]/.test(n)?("'"+n.replace(/('+)/g,`'"$1"'`)+"'").replace(/^''|''$/g,""):n},e.join=function(n){if(!Array.isArray(n))throw new TypeError("args should be an array");return n.map(e.quote).join(" ")}})(ne);const ln=e=>{const t={};for(const[,n,r]of e.matchAll(/([a-z])[ \t]*(-?(?:\d+(?:\.\d+)?|\.\d+))/ig))t[n.toLowerCase()]=Number(r);return t},un=e=>{const t={};for(const n of ne.split(e)){const r=n.indexOf("="),o=n.substring(0,r),s=n.substring(r+1);t[o.toLowerCase()]=s}return t},fn=e=>{const t=e.trim().split(";",2)[0],[,n,r=""]=t.split(/^([gm][0-9]+)\s*/i);if(n)return{type:"gcode",command:n.toUpperCase(),args:ln(r)};const[,o,s=""]=t.split(/^(SET_PRINT_STATS_INFO|EXCLUDE_OBJECT_DEFINE)\s+/i);return o?{type:"macro",command:o.toUpperCase(),args:un(s)}:{type:"other"}},_=e=>Math.round(e*1e4)/1e4,hn=(e,t)=>{const n=[],r=[],o=[],s=e.split(`
`);let c=!1,a=p.Relative,f=p.Absolute;const i={x:0,y:0,z:0,e:0,filePosition:0},u={length:1,extrudeExtra:0,z:0};for(let g=0;g<s.length;g++){const{type:S,command:H,args:h}=fn(s[g])??{};let l=null;if(S==="macro")switch(H){case"SET_PRINT_STATS_INFO":"current_layer"in h&&(c=!0);break;case"EXCLUDE_OBJECT_DEFINE":if("polygon"in h&&h.polygon){const v={polygon:JSON.parse(h.polygon).map(([gn,yn])=>({x:gn,y:yn}))};o.push(Object.freeze(v))}break}else if(S==="gcode"){switch(H){case"G0":case"G1":l={...te(h,["x","y","z","e"]),filePosition:i.filePosition};break;case"G2":case"G3":l={...te(h,["x","y","z","e","i","j","k","r"]),direction:H==="G2"?A.Clockwise:A.CounterClockwise,filePosition:i.filePosition};break;case"G10":l={e:-u.length,filePosition:0},u.z!==0&&(l.z=_(i.z+u.z));break;case"G11":l={e:_(u.length+u.extrudeExtra),filePosition:i.filePosition},u.z!==0&&(l.z=_(i.z-u.z));break;case"G90":f=p.Absolute;case"M82":a=p.Absolute,i.e=0;break;case"G91":f=p.Relative;case"M83":a=p.Relative;break;case"G92":a===p.Absolute&&(i.e=h.e??i.e),f===p.Absolute&&(i.x=h.x??i.x,i.y=h.y??i.y,i.z=h.z??i.z);break;case"M207":u.length=h.s??u.length,u.extrudeExtra=h.s??u.extrudeExtra,u.z=h.z??u.z;break}if(l){if(a===p.Absolute&&l.e!==void 0){const O=_(l.e-i.e);i.e=l.e,l.e=O}if(f===p.Relative&&(l.x!==void 0&&(l.x=_(l.x+i.x)),l.y!==void 0&&(l.y=_(l.y+i.y)),l.z!==void 0&&(l.z=_(l.z+i.z))),c&&l.e&&l.e>0){const O=l;if(["x","y","i","j"].some(v=>re(v,O)&&O[v]!==0)){const v={z:i.z,move:n.length-1,filePosition:i.filePosition};r.push(Object.freeze(v)),c=!1}}i.x=l.x??i.x,i.y=l.y??i.y,i.z=l.z??i.z,n.push(Object.freeze(l))}}g%Math.floor(s.length/100)===0&&t(i.filePosition),i.filePosition+=s[g].length+1}return t(i.filePosition),{moves:n,layers:r,parts:o}},pn=e=>{const t={action:"progress",filePosition:e};self.postMessage(t)},dn=(e,t,n)=>{const r={action:"result",moves:e,layers:t,parts:n};self.postMessage(r)};self.onmessage=e=>{const t=e.data;switch(t.action){case"parse":{const{moves:n,layers:r,parts:o}=hn(t.gcode,pn);dn(n,r,o);break}}}})();