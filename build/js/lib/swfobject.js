define([],function(){var e=function(){function t(){if(!J&&document.getElementsByTagName("body")[0]){try{var e,t=g("span");t.style.display="none",e=P.getElementsByTagName("body")[0].appendChild(t),e.parentNode.removeChild(e),e=null,t=null}catch(e){return}J=!0;for(var n=D.length,i=0;i<n;i++)D[i]()}}function n(e){J?e():D[D.length]=e}function i(e){if(typeof U.addEventListener!=O)U.addEventListener("load",e,!1);else if(typeof P.addEventListener!=O)P.addEventListener("load",e,!1);else if(typeof U.attachEvent!=O)b(U,"onload",e);else if("function"==typeof U.onload){var t=U.onload;U.onload=function(){t(),e()}}else U.onload=e}function a(){var e=P.getElementsByTagName("body")[0],t=g(x);t.setAttribute("style","visibility: hidden;"),t.setAttribute("type",$);var n=e.appendChild(t);if(n){var i=0;!function a(){if(typeof n.GetVariable!=O)try{var o=n.GetVariable("$version");o&&(o=o.split(" ")[1].split(","),Q.pv=[w(o[0]),w(o[1]),w(o[2])])}catch(e){Q.pv=[8,0,0]}else if(i<10)return i++,void setTimeout(a,10);e.removeChild(t),n=null,r()}()}else r()}function r(){var e=H.length;if(e>0)for(var t=0;t<e;t++){var n=H[t].id,i=H[t].callbackFn,a={success:!1,id:n};if(Q.pv[0]>0){var r=m(n);if(r)if(!E(H[t].swfVersion)||Q.wk&&Q.wk<312)if(H[t].expressInstall&&l()){var f={};f.data=H[t].expressInstall,f.width=r.getAttribute("width")||"0",f.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(f.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(f.align=r.getAttribute("align"));for(var c={},u=r.getElementsByTagName("param"),p=u.length,v=0;v<p;v++)"movie"!=u[v].getAttribute("name").toLowerCase()&&(c[u[v].getAttribute("name")]=u[v].getAttribute("value"));s(f,c,n,i)}else d(r),i&&i(a);else A(n,!0),i&&(a.success=!0,a.ref=o(n),a.id=n,i(a))}else if(A(n,!0),i){var y=o(n);y&&typeof y.SetVariable!=O&&(a.success=!0,a.ref=y,a.id=y.id),i(a)}}}function o(e){var t=null,n=m(e);return n&&"OBJECT"===n.nodeName.toUpperCase()&&(t=typeof n.SetVariable!==O?n:n.getElementsByTagName(x)[0]||n),t}function l(){return!X&&E("6.0.65")&&(Q.win||Q.mac)&&!(Q.wk&&Q.wk<312)}function s(e,t,n,i){var a=m(n);if(n=h(n),X=!0,k=i||null,B={success:!1,id:n},a){"OBJECT"==a.nodeName.toUpperCase()?(T=f(a),N=null):(T=a,N=n),e.id=M,(typeof e.width==O||!/%$/.test(e.width)&&w(e.width)<310)&&(e.width="310"),(typeof e.height==O||!/%$/.test(e.height)&&w(e.height)<137)&&(e.height="137");var r=Q.ie?"ActiveX":"PlugIn",o="MMredirectURL="+encodeURIComponent(U.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+r+"&MMdoctitle="+encodeURIComponent(P.title.slice(0,47)+" - Flash Player Installation");if(typeof t.flashvars!=O?t.flashvars+="&"+o:t.flashvars=o,Q.ie&&4!=a.readyState){var l=g("div");n+="SWFObjectNew",l.setAttribute("id",n),a.parentNode.insertBefore(l,a),a.style.display="none",v(a)}u(e,t,n)}}function d(e){if(Q.ie&&4!=e.readyState){e.style.display="none";var t=g("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(f(e),t),v(e)}else e.parentNode.replaceChild(f(e),e)}function f(e){var t=g("div");if(Q.win&&Q.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(x)[0];if(n){var i=n.childNodes;if(i)for(var a=i.length,r=0;r<a;r++)1==i[r].nodeType&&"PARAM"==i[r].nodeName||8==i[r].nodeType||t.appendChild(i[r].cloneNode(!0))}}return t}function c(e,t){var n=g("div");return n.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+e+"'>"+t+"</object>",n.firstChild}function u(e,t,n){var i,a=m(n);if(n=h(n),Q.wk&&Q.wk<312)return i;if(a){var r,o,l,s=g(Q.ie?"div":x);typeof e.id==O&&(e.id=n);for(l in t)t.hasOwnProperty(l)&&"movie"!==l.toLowerCase()&&p(s,l,t[l]);Q.ie&&(s=c(e.data,s.innerHTML));for(r in e)e.hasOwnProperty(r)&&(o=r.toLowerCase(),"styleclass"===o?s.setAttribute("class",e[r]):"classid"!==o&&"data"!==o&&s.setAttribute(r,e[r]));Q.ie?W[W.length]=e.id:(s.setAttribute("type",$),s.setAttribute("data",e.data)),a.parentNode.replaceChild(s,a),i=s}return i}function p(e,t,n){var i=g("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function v(e){var t=m(e);t&&"OBJECT"==t.nodeName.toUpperCase()&&(Q.ie?(t.style.display="none",function e(){if(4==t.readyState){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}else setTimeout(e,10)}()):t.parentNode.removeChild(t))}function y(e){return e&&e.nodeType&&1===e.nodeType}function h(e){return y(e)?e.id:e}function m(e){if(y(e))return e;var t=null;try{t=P.getElementById(e)}catch(e){}return t}function g(e){return P.createElement(e)}function w(e){return parseInt(e,10)}function b(e,t,n){e.attachEvent(t,n),G[G.length]=[e,t,n]}function E(e){e+="";var t=Q.pv,n=e.split(".");return n[0]=w(n[0]),n[1]=w(n[1])||0,n[2]=w(n[2])||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]}function C(e,t,n,i){var a=P.getElementsByTagName("head")[0];if(a){var r="string"==typeof n?n:"screen";if(i&&(I=null,L=null),!I||L!=r){var o=g("style");o.setAttribute("type","text/css"),o.setAttribute("media",r),I=a.appendChild(o),Q.ie&&typeof P.styleSheets!=O&&P.styleSheets.length>0&&(I=P.styleSheets[P.styleSheets.length-1]),L=r}I&&(typeof I.addRule!=O?I.addRule(e,t):typeof P.createTextNode!=O&&I.appendChild(P.createTextNode(e+" {"+t+"}")))}}function A(e,t){if(z){var n=t?"visible":"hidden",i=m(e);J&&i?i.style.visibility=n:"string"==typeof e&&C("#"+e,"visibility:"+n)}}function S(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=O?encodeURIComponent(e):e}var T,N,k,B,I,L,O="undefined",x="object",F="Shockwave Flash",$="application/x-shockwave-flash",M="SWFObjectExprInst",j="onreadystatechange",U=window,P=document,R=navigator,V=!1,D=[],H=[],W=[],G=[],J=!1,X=!1,z=!0,Z=!1,Q=function(){var e=typeof P.getElementById!=O&&typeof P.getElementsByTagName!=O&&typeof P.createElement!=O,t=R.userAgent.toLowerCase(),n=R.platform.toLowerCase(),i=/win/.test(n?n:t),a=/mac/.test(n?n:t),r=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),o="Microsoft Internet Explorer"===R.appName,l=[0,0,0],s=null;if(typeof R.plugins!=O&&typeof R.plugins[F]==x)(s=R.plugins[F].description)&&typeof R.mimeTypes!=O&&R.mimeTypes[$]&&R.mimeTypes[$].enabledPlugin&&(V=!0,o=!1,s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=w(s.replace(/^(.*)\..*$/,"$1")),l[1]=w(s.replace(/^.*\.(.*)\s.*$/,"$1")),l[2]=/[a-zA-Z]/.test(s)?w(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0);else if(typeof U.ActiveXObject!=O)try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");d&&(s=d.GetVariable("$version"))&&(o=!0,s=s.split(" ")[1].split(","),l=[w(s[0]),w(s[1]),w(s[2])])}catch(e){}return{w3:e,pv:l,wk:r,ie:o,win:i,mac:a}}();!function(){Q.w3&&((typeof P.readyState!=O&&("complete"===P.readyState||"interactive"===P.readyState)||typeof P.readyState==O&&(P.getElementsByTagName("body")[0]||P.body))&&t(),J||(typeof P.addEventListener!=O&&P.addEventListener("DOMContentLoaded",t,!1),Q.ie&&(P.attachEvent(j,function e(){"complete"==P.readyState&&(P.detachEvent(j,e),t())}),U==top&&function e(){if(!J){try{P.documentElement.doScroll("left")}catch(t){return void setTimeout(e,0)}t()}}()),Q.wk&&function e(){if(!J)return/loaded|complete/.test(P.readyState)?void t():void setTimeout(e,0)}()))}();D[0]=function(){V?a():r()};!function(){Q.ie&&window.attachEvent("onunload",function(){for(var t=G.length,n=0;n<t;n++)G[n][0].detachEvent(G[n][1],G[n][2]);for(var i=W.length,a=0;a<i;a++)v(W[a]);for(var r in Q)Q[r]=null;Q=null;for(var o in e)e[o]=null;e=null})}();return{registerObject:function(e,t,n,i){if(Q.w3&&e&&t){var a={};a.id=e,a.swfVersion=t,a.expressInstall=n,a.callbackFn=i,H[H.length]=a,A(e,!1)}else i&&i({success:!1,id:e})},getObjectById:function(e){if(Q.w3)return o(e)},embedSWF:function(e,t,i,a,r,o,d,f,c,p){var v=h(t),y={success:!1,id:v};Q.w3&&!(Q.wk&&Q.wk<312)&&e&&t&&i&&a&&r?(A(v,!1),n(function(){i+="",a+="";var n={};if(c&&typeof c===x)for(var h in c)n[h]=c[h];n.data=e,n.width=i,n.height=a;var m={};if(f&&typeof f===x)for(var g in f)m[g]=f[g];if(d&&typeof d===x)for(var w in d)if(d.hasOwnProperty(w)){var b=Z?encodeURIComponent(w):w,C=Z?encodeURIComponent(d[w]):d[w];typeof m.flashvars!=O?m.flashvars+="&"+b+"="+C:m.flashvars=b+"="+C}if(E(r)){var S=u(n,m,t);n.id==v&&A(v,!0),y.success=!0,y.ref=S,y.id=S.id}else{if(o&&l())return n.data=o,void s(n,m,t,p);A(v,!0)}p&&p(y)})):p&&p(y)},switchOffAutoHideShow:function(){z=!1},enableUriEncoding:function(e){Z=typeof e===O||e},ua:Q,getFlashPlayerVersion:function(){return{major:Q.pv[0],minor:Q.pv[1],release:Q.pv[2]}},hasFlashPlayerVersion:E,createSWF:function(e,t,n){return Q.w3?u(e,t,n):void 0},showExpressInstall:function(e,t,n,i){Q.w3&&l()&&s(e,t,n,i)},removeSWF:function(e){Q.w3&&v(e)},createCSS:function(e,t,n,i){Q.w3&&C(e,t,n,i)},addDomLoadEvent:n,addLoadEvent:i,getQueryParamValue:function(e){var t=P.location.search||P.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return S(t);for(var n=t.split("&"),i=0;i<n.length;i++)if(n[i].substring(0,n[i].indexOf("="))==e)return S(n[i].substring(n[i].indexOf("=")+1))}return""},expressInstallCallback:function(){if(X){var e=m(M);e&&T&&(e.parentNode.replaceChild(T,e),N&&(A(N,!0),Q.ie&&(T.style.display="block")),k&&k(B)),X=!1}},version:"2.3"}}();return{swfobject:e}});