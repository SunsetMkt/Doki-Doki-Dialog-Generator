(function(e){function t(t){for(var i,o,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)o=s[d],r[o]&&h.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Doki-Doki-Dialog-Generator/beta/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3020:function(e,t,n){"use strict";var i=n("bc1d"),r=n.n(i);r.a},"38b8":function(e,t,n){"use strict";var i=n("bf0d"),r=n.n(i);r.a},"480f":function(e,t,n){"use strict";var i=n("7e74"),r=n.n(i);r.a},"4ec5":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(e,t,n){},"7e74":function(e,t,n){},"804e":function(e,t,n){},"8ea7":function(e,t,n){"use strict";var i=n("804e"),r=n.n(i);r.a},b33e:function(e,t,n){"use strict";var i=n("4ec5"),r=n.n(i);r.a},b367:function(e,t,n){"use strict";var i=n("ea81"),r=n.n(i);r.a},bc1d:function(e,t,n){},bf0d:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"container"}},[n("canvas",{ref:"sd",attrs:{id:"scaled_display",height:e.canvasHeight,width:e.canvasWidth},on:{click:e.onUiClick}},[e._v("\n\t\t\tHTML5 is required to use this\n\t\t\t"),n("strike",[e._v("shitpost")]),e._v("meme generator.\n\t\t")],1)]),n("div",{class:{vertical:e.vertical},attrs:{id:"panels"}},[n("div",{attrs:{id:"toolbar"}},[n("button",{class:{active:"add"===e.panel},on:{click:function(t){e.panel="add"===e.panel?"":"add"}}},[e._v("A")]),n("button",{class:{active:"backgrounds"===e.panel},on:{click:function(t){e.panel="backgrounds"===e.panel?"":"backgrounds"}}},[e._v("B")]),n("button",[e._v(" ")]),n("button",{on:{click:e.download}},[e._v("D")])]),n("keep-alive",[""===e.panel?n("general-panel",{attrs:{options:e.textbox,vertical:e.vertical,lqRendering:e.lqRendering},on:{"update:lqRendering":function(t){e.lqRendering=t},"update:lq-rendering":function(t){e.lqRendering=t}}}):e._e(),"add"===e.panel?n("add-panel",{attrs:{vertical:e.vertical},on:{chosen:e.onDokiChosen}}):e._e(),"backgrounds"===e.panel?n("backgrounds-panel",{attrs:{vertical:e.vertical},model:{value:e.currentBackground,callback:function(t){e.currentBackground=t},expression:"currentBackground"}}):e._e(),"doki"===e.panel?n("doki-panel",{attrs:{vertical:e.vertical,girl:e.selectedGirl},on:{shiftLayer:e.onDokiLayerShift,"invalidate-render":e.invalidateRender}}):e._e()],1)],1)])},a=[],o=n("768b"),s=(n("5df3"),n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),c=n("d225"),l=n("b0b4"),u=n("308d"),d=n("6bb5"),h=n("4e2b"),p=n("9ab4"),f=n("60a3"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},b=[],g=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),t}(f["c"]);g=p["a"]([Object(f["a"])({components:{}})],g);var k=g,m=k,y=(n("b367"),n("2877")),w=Object(y["a"])(m,v,b,!1,null,null,null),x=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v("General")]),n("toggle",{attrs:{label:"Low quality preview?",title:"Reduces the quality of the preview images to speed up the user experience and consume less data. Does not effect final render.",value:e.lqRendering},on:{input:function(t){return e.$emit("update:lqRendering",t)}}}),n("toggle",{attrs:{label:"Textbox visible?"},model:{value:e.options.display,callback:function(t){e.$set(e.options,"display",t)},expression:"options.display"}}),n("toggle",{attrs:{label:"Textbox corrupt?"},model:{value:e.options.corrupted,callback:function(t){e.$set(e.options,"corrupted",t)},expression:"options.corrupted"}}),n("div",[e._v("\n\t\tPerson talking:\n\t\t"),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:e.options.talking,expression:"options.talking"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.options,"talking",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[e._v("No-one")]),n("option",{attrs:{value:"Sayori"}},[e._v("Sayori")]),n("option",{attrs:{value:"Yuri"}},[e._v("Yuri")]),n("option",{attrs:{value:"Natsuki"}},[e._v("Natsuki")]),n("option",{attrs:{value:"Monika"}},[e._v("Monika")]),n("option",{attrs:{value:"other"}},[e._v("Other")])])]),n("div",[e._v("\n\t\tOther name:\n\t\t"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.customName,expression:"options.customName"}],domProps:{value:e.options.customName},on:{input:function(t){t.target.composing||e.$set(e.options,"customName",t.target.value)}}})]),n("toggle",{attrs:{label:"Controls visible?"},model:{value:e.options.showControls,callback:function(t){e.$set(e.options,"showControls",t)},expression:"options.showControls"}}),n("toggle",{attrs:{label:"Able to skip?"},model:{value:e.options.allowSkipping,callback:function(t){e.$set(e.options,"allowSkipping",t)},expression:"options.allowSkipping"}}),n("toggle",{attrs:{label:"Continue arrow?"},model:{value:e.options.showContinueArrow,callback:function(t){e.$set(e.options,"showContinueArrow",t)},expression:"options.showContinueArrow"}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.options.dialog,expression:"options.dialog"}],domProps:{value:e.options.dialog},on:{input:function(t){t.target.composing||e.$set(e.options,"dialog",t.target.value)}}})],1)},j=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{ref:"checkbox",attrs:{id:e._uid,type:"checkbox"},domProps:{checked:e.value},on:{change:e.onChange}}),n("label",{attrs:{for:e._uid}},[e._v(e._s(e.label))])])},P=[],_=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),Object(l["a"])(t,[{key:"onChange",value:function(e){this.$emit("input",!!this.$refs.checkbox.checked)}},{key:"checkbox",get:function(){return this.$refs.checkbox}}]),t}(f["c"]);p["a"]([Object(f["b"])({type:String})],_.prototype,"label",void 0),p["a"]([Object(f["b"])({type:Boolean,default:!1})],_.prototype,"value",void 0),_=p["a"]([Object(f["a"])({components:{}})],_);var R=_,S=R,A=(n("8ea7"),Object(y["a"])(S,C,P,!1,null,null,null)),$=A.exports,q=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),Object(l["a"])(t,[{key:"talkingChange",value:function(){this.options.talking="other"}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0})],q.prototype,"options",void 0),p["a"]([Object(f["b"])({required:!0,type:Boolean})],q.prototype,"vertical",void 0),p["a"]([Object(f["b"])({required:!0,type:Boolean})],q.prototype,"lqRendering",void 0),p["a"]([Object(f["d"])("options.customName")],q.prototype,"talkingChange",null),q=p["a"]([Object(f["a"])({components:{Toggle:$}})],q);var H,T=q,B=T,I=(n("b33e"),Object(y["a"])(B,O,j,!1,null,"d6cde16e",null)),D=I.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return void 0!==e.isWebPSupported?n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v("Add doki")]),e._l(e.dokis,function(t){return n("div",{key:t,staticClass:"doki",attrs:{title:t},on:{click:function(n){e.$emit("chosen",t.toLowerCase())}}},[n("img",{attrs:{src:e.assetPath(t),alt:t}})])})],2):e._e()},E=[],W=function(){function e(t,n){Object(c["a"])(this,e),this.name=n,this.path="/backgrounds/"+t}return Object(l["a"])(e,[{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,U(this.path,t.hq);case 3:e.t1=e.sent,e.t0.drawImage.call(e.t0,e.t1,0,0);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),M=new W("transparent","Transparent");function N(){return H||(H=new Promise(function(e,t){var n="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=",i=document.createElement("img");i.addEventListener("load",function(){e(2===i.width&&1===i.height)}),i.addEventListener("error",function(){e(!1)}),i.src=n})),H}M.render=function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.preview){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,W.prototype.render.call(this,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();var G={};function U(e){return z.apply(this,arguments)}function z(){return z=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,i,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],e.t0="/Doki-Doki-Dialog-Generator/beta/",e.t1="/assets/".concat(t).concat(n?"":".lq"),e.next=5,N();case 5:if(!e.sent){e.next=9;break}e.t2=".webp",e.next=10;break;case 9:e.t2=".png";case 10:return e.t3=e.t2,e.t4=e.t1.concat.call(e.t1,e.t3),i=e.t0+e.t4,G[i]||(G[i]=new Promise(function(e,t){var n=new Image;n.addEventListener("load",function(){e(n)}),n.addEventListener("error",function(){t('Failed to load "'.concat(i,'"'))}),n.src=i,n.style.display="none",document.body.appendChild(n)})),e.abrupt("return",G[i]);case 15:case"end":return e.stop()}},e)})),z.apply(this,arguments)}var F=[new W("club","Clubroom"),new W("closet","Closet"),new W("corridor","Corridor"),new W("class","Classroom"),new W("residential","Street"),new W("house","House"),new W("bedroom","Bedroom"),new W("kitchen","Kitchen"),new W("sayori_bedroom","Sayori's bedroom"),new W("club-skill","Clubroom with hanging Sayori poster"),new W("bsod","Blue screen of death"),new W("unused-house","Unused house found in game files"),M],Y={};function X(e,t){Y[e]=t}X("sayori",{name:"Sayori",folder:"sayori",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"],sideways:["a2","b2","c2","d2"]},poses:[{compatibleHeads:["straight"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["straight"],left:["1bl","2bl"],right:["1br","2br"]},{compatibleHeads:["sideways"],static:"3"}]}),X("yuri",{name:"Yuri",folder:"yuri",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y1","y2","y3","y4","y5","y6","y7","hisui"],sideways:["a2","b2","c2","d2","e2"]},poses:[{compatibleHeads:["straight"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["straight"],left:["1bl","2bl"],right:["1br","2br"]},{compatibleHeads:["sideways"],static:"3"},{compatibleHeads:["sideways"],static:"3b"}]}),X("natsuki",{name:"Natsuki",folder:"natsuki",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1t","scream","corrupt","crying"],sideways:["2t","2ta","2tb","2tc","2td","2te","2tf","2tg","2th","2ti","2bta","2btb","2btc","2btd","2bte","2btf","2btg","2bth","2bti"]},poses:[{compatibleHeads:["straight","sideways"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["straight","sideways"],left:["1bl","2bl"],right:["1br","2br"]},{compatibleHeads:["straight"],headAnchor:[18,22],static:"3"},{compatibleHeads:["straight"],headAnchor:[18,22],static:"3b"}]}),X("monika",{name:"Monika",folder:"monika",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r"],sideways:["a2","b2"]},poses:[{compatibleHeads:["straight"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["sideways"],static:"3"}]});var J=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.isWebPSupported=null,e.dokis=["Monika","Natsuki","Sayori","Yuri"],e}return Object(h["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:this.isWebPSupported=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"assetPath",value:function(e){return"".concat("/Doki-Doki-Dialog-Generator/beta/","/assets/chibis/").concat(e.toLowerCase(),".lq.").concat(this.isWebPSupported?"webp":"png")}},{key:"onClick",value:function(e){var t=this.$el,n=e.clientX-t.offsetLeft,i=n<123?"sayori":n<247?"yuri":n<370?"monika":"natsuki";this.$emit("chosen",i)}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0,type:Boolean})],J.prototype,"vertical",void 0),J=p["a"]([Object(f["a"])({components:{}})],J);var Q=J,K=Q,V=(n("38b8"),Object(y["a"])(K,L,E,!1,null,"a274a2d4",null)),Z=V.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v(e._s(e.captialize(e.girl.name)))]),n("fieldset",[n("legend",[e._v("Pose:")]),n("table",[n("tbody",[n("tr",[n("td",[n("button",{on:{click:function(t){return e.girl.posel()}}},[e._v("<")])]),n("td",[e._v("Pose")]),n("td",[n("button",{on:{click:function(t){return e.girl.poser()}}},[e._v(">")])])]),e._l(e.parts,function(t){return n("tr",{key:t},[n("td",[n("button",{on:{click:function(n){return e.girl.partl(t)}}},[e._v("<")])]),n("td",[e._v(e._s(e.captialize(t)))]),n("td",[n("button",{on:{click:function(n){return e.girl.partr(t)}}},[e._v(">")])])])})],2)])]),n("fieldset",[n("legend",[e._v("Position:")]),n("button",{on:{click:function(t){e.girl.pos=Math.max(1,e.girl.pos-1),e.$emit("invalidate-render")}}},[e._v("< left")]),n("button",{on:{click:function(t){e.girl.pos=Math.min(7,e.girl.pos+1),e.$emit("invalidate-render")}}},[e._v("> right")])]),n("fieldset",{attrs:{id:"layerfs"}},[n("legend",[e._v("Layer:")]),n("button",{attrs:{title:"Move to back"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Back"})}}},[e._v("⤓")]),n("button",{attrs:{title:"Move backwards"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Backward"})}}},[e._v("↓")]),n("button",{attrs:{title:"Move forwards"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Forward"})}}},[e._v("↑")]),n("button",{attrs:{title:"Move to front"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Front"})}}},[e._v("⤒")])]),n("toggle",{attrs:{label:"In front of textbox?"},on:{input:function(t){return e.$emit("invalidate-render")}},model:{value:e.girl.infront,callback:function(t){e.$set(e.girl,"infront",t)},expression:"girl.infront"}}),n("toggle",{attrs:{label:"Close up?"},on:{input:function(t){return e.$emit("invalidate-render")}},model:{value:e.girl.close,callback:function(t){e.$set(e.girl,"close",t)},expression:"girl.close"}}),n("button",{on:{click:function(t){e.$emit("shiftLayer",{girl:e.girl,move:"Delete"}),e.$emit("close")}}},[e._v("Delete")])],1)},te=[],ne=(n("7f7f"),n("75fc")),ie=n("01c8"),re=[null,208,256,500,640,790,1024,1094],ae=function(){function e(t,n){Object(c["a"])(this,e),this.name=t,this.invalidator=n,this.pos=4,this.infront=!1,this.close=!1,this.selected=!1,this.poseId=0,this.posePositions={variant:0,left:0,right:0,head:0,headType:0}}return Object(l["a"])(e,[{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"getParts",value:function(){var e=this.pose,t=this.pose.compatibleHeads.length>0?["head"]:[];return"variant"in e?[].concat(t,["variant"]):"left"in e?[].concat(t,["left","right"]):t}},{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,i,r,a,o,s,c,l,u,d,h,p,f,v,b,g,k,m,y,w,x,O,j,C,P,_;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.pose,i=[],r=this.getParts(),a=(this.doki.folder?this.doki.folder+"/":"")+(this.pose.folder?this.pose.folder+"/":""),o=(this.doki.folder?this.doki.folder+"/":"")+(this.currentHeads&&this.currentHeads.folder?this.currentHeads.folder+"/":""),!n.static){e.next=9;break}i.push(a+n.static),e.next=36;break;case 9:s=!0,c=!1,l=void 0,e.prev=12,u=r[Symbol.iterator]();case 14:if(s=(d=u.next()).done){e.next=22;break}if(h=d.value,"head"!==h){e.next=18;break}return e.abrupt("continue",19);case 18:i.push(a+n[h][this.posePositions[h]]);case 19:s=!0,e.next=14;break;case 22:e.next=28;break;case 24:e.prev=24,e.t0=e["catch"](12),c=!0,l=e.t0;case 28:e.prev=28,e.prev=29,s||null==u.return||u.return();case 31:if(e.prev=31,!c){e.next=34;break}throw l;case 34:return e.finish(31);case 35:return e.finish(28);case 36:return p=this.currentHeads?o+this.currentHeads.all[this.posePositions.head]:null,f=this.close?1440:720,v=re[this.pos]-f/2,b=this.close?-100:0,e.next=42,Promise.all([p?U(p,t.hq):Promise.resolve(null)].concat(Object(ne["a"])(i.map(function(e){return U(e,t.hq)}))));case 42:for(g=e.sent,k=Object(ie["a"])(g),m=k[0],y=k.slice(1),m&&(w=this.pose.headAnchor||[0,0],t.drawImage(m,v+w[0],b+("monika"===this.name?1:0)+w[1],f,f)),x=!0,O=!1,j=void 0,e.prev=50,C=y[Symbol.iterator]();!(x=(P=C.next()).done);x=!0)_=P.value,t.drawImage(_,v,b,f,f);e.next=58;break;case 54:e.prev=54,e.t1=e["catch"](50),O=!0,j=e.t1;case 58:e.prev=58,e.prev=59,x||null==C.return||C.return();case 61:if(e.prev=61,!O){e.next=64;break}throw j;case 64:return e.finish(61);case 65:return e.finish(58);case 66:this.selected&&t.drawRectOutline(v+f/3,50,f/3,620,"red",3);case 67:case"end":return e.stop()}},e,this,[[12,24,28,36],[29,,31,35],[50,54,58,66],[59,,61,65]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"headl",value:function(){this.currentHeads&&(--this.posePositions.head,this.posePositions.head<0&&(--this.posePositions.headType,this.posePositions.headType<0&&(this.posePositions.headType=this.pose.compatibleHeads.length-1),this.posePositions.head=this.currentHeads.all.length-1),this.invalidator())}},{key:"headr",value:function(){this.currentHeads&&(++this.posePositions.head,this.posePositions.head>=this.currentHeads.all.length&&(++this.posePositions.headType,this.posePositions.headType>=this.pose.compatibleHeads.length&&(this.posePositions.headType=0),this.posePositions.head=0),this.invalidator())}},{key:"partl",value:function(e){if("head"===e)return this.headl();this.pose[e]&&(--this.posePositions[e],this.posePositions[e]<0&&(this.posePositions[e]=this.pose[e].length-1),this.invalidator())}},{key:"partr",value:function(e){if("head"===e)return this.headr();this.pose[e]&&(++this.posePositions[e],this.posePositions[e]>=this.pose[e].length&&(this.posePositions[e]=0),this.invalidator())}},{key:"posel",value:function(){var e=this.pose.compatibleHeads[this.posePositions.headType];--this.poseId,this.poseId<0&&(this.poseId=this.doki.poses.length-1);var t=this.pose.compatibleHeads.indexOf(e);t>=0?this.posePositions.headType=t:(this.posePositions.headType=0,this.posePositions.head=0),this.posePositions.left=0,this.posePositions.right=0,this.posePositions.variant=0,this.invalidator()}},{key:"poser",value:function(){var e=this.pose.compatibleHeads[this.posePositions.headType];++this.poseId,this.poseId>=this.doki.poses.length&&(this.poseId=0);var t=this.pose.compatibleHeads.indexOf(e);t>=0?this.posePositions.headType=t:(this.posePositions.headType=0,this.posePositions.head=0),this.posePositions.left=0,this.posePositions.right=0,this.posePositions.variant=0,this.invalidator()}},{key:"doki",get:function(){return Y[this.name]}},{key:"pose",get:function(){return this.doki.poses[this.poseId]}},{key:"currentHeads",get:function(){if(!this.pose.compatibleHeads||0===this.pose.compatibleHeads.length)return null;var e=this.doki.heads[this.pose.compatibleHeads[this.posePositions.headType]];return e instanceof Array?{all:e}:e}}]),e}(),oe=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.isWebPSupported=null,e.dokis=["Monika","Natsuki","Sayori","Yuri"],e}return Object(h["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:this.isWebPSupported=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"captialize",value:function(e){return e.charAt(0).toUpperCase()+e.substring(1)}},{key:"assetPath",value:function(e){return"/assets/chibis/".concat(e.toLowerCase(),".lq.").concat(this.isWebPSupported?"webp":"png")}},{key:"onClick",value:function(e){var t=this.$el,n=e.clientX-t.offsetLeft,i=n<123?"sayori":n<247?"yuri":n<370?"monika":"natsuki";this.$emit("chosen",i)}},{key:"parts",get:function(){return this.girl.getParts()}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0,type:Boolean})],oe.prototype,"vertical",void 0),p["a"]([Object(f["b"])({type:ae,required:!0})],oe.prototype,"girl",void 0),oe=p["a"]([Object(f["a"])({components:{Toggle:$}})],oe);var se=oe,ce=se,le=(n("3020"),Object(y["a"])(ce,ee,te,!1,null,"912c405a",null)),ue=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return void 0!==e.isWebPSupported?n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v("Background")]),e._l(e.backgrounds,function(t){return n("div",{key:t.name,class:{background:!0,active:t===e.value},style:{backgroundImage:"url("+e.assetPath(t.path)+")"},attrs:{title:t.name},on:{click:function(n){return e.$emit("input",t)}}},[e._v(e._s(t.name))])})],2):e._e()},he=[],pe=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.isWebPSupported=null,e}return Object(h["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:this.isWebPSupported=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"assetPath",value:function(e){return"".concat("/Doki-Doki-Dialog-Generator/beta/","/assets/").concat(e.toLowerCase(),".lq.").concat(this.isWebPSupported?"webp":"png")}},{key:"onClick",value:function(e){var t=this.$el,n=e.clientX-t.offsetLeft,i=n<123?"sayori":n<247?"yuri":n<370?"monika":"natsuki";this.$emit("chosen",i)}},{key:"backgrounds",get:function(){return F}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0,type:Boolean})],pe.prototype,"vertical",void 0),p["a"]([Object(f["b"])({type:W,required:!0})],pe.prototype,"value",void 0),pe=p["a"]([Object(f["a"])({components:{}})],pe);var fe=pe,ve=fe,be=(n("480f"),Object(y["a"])(ve,de,he,!1,null,"8f63c3c4",null)),ge=be.exports,ke=(n("28a5"),function(){function e(){Object(c["a"])(this,e),this.display=!0,this.corrupted=!1,this.showControls=!0,this.allowSkipping=!0,this.showContinueArrow=!0,this.talking="",this.customName="",this.dialog=""}return Object(l["a"])(e,[{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.display){e.next=2;break}return e.abrupt("return");case 2:if(!this.corrupted){e.next=10;break}return e.t0=t,e.next=6,U("textbox_monika");case 6:e.t1=e.sent,e.t0.drawImage.call(e.t0,e.t1,190,565),e.next=15;break;case 10:return e.t2=t,e.next=13,U("textbox");case 13:e.t3=e.sent,e.t2.drawImage.call(e.t2,e.t3,232,565);case 15:if(n=this.talking,!n){e.next=24;break}return e.t4=t,e.next=20,U("namebox");case 20:e.t5=e.sent,e.t6=526,e.t4.drawImage.call(e.t4,e.t5,264,e.t6),t.drawText("other"===n?this.customName:n,348,555,"center",3,"white","#b59","24px riffic");case 24:if(this.renderText(t),this.showControls&&(t.drawText("Skip",566,700,"left",1,this.allowSkipping?"#522":"#a66",null,"13px aller"),t.drawText("History",512,700,"left",1,"#522",null,"13px aller"),t.drawText("Auto   Save   Load   Settings",600,700,"left",1,"#522",null,"13px aller")),!this.showContinueArrow){e.next=32;break}return e.t7=t,e.next=30,U("next");case 30:e.t8=e.sent,e.t7.drawImage.call(e.t7,e.t8,1020,685);case 32:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"renderText",value:function(e){var t=[],n=!1,i=!0,r=!1,a=void 0;try{for(var o,s=this.dialog.split("\n")[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value,l=void 0;t.push(l=[]);var u=!0,d=!1,h=void 0;try{for(var p,f=c[Symbol.iterator]();!(u=(p=f.next()).done);u=!0){var v=p.value;"["===v?n=!0:"]"===v?n=!1:l.push({l:v,b:n})}}catch(C){d=!0,h=C}finally{try{u||null==f.return||f.return()}finally{if(d)throw h}}}}catch(C){r=!0,a=C}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}for(var b=620,g=0,k=t;g<k.length;g++){var m=k[g],y=!1;if(m.length){var w=270,x=0;while(x<m.length){var O="",j=m[x].b;y=y||j;while(x<m.length&&m[x].b===j)O+=m[x].l,j&&(O+=" "),x++;e.drawText(O,w,b,"left",j?8:2,"#fff",j?"#000":"#523140","24px aller"),w+=e.measureText(O).width}}b+=26}}}]),e}()),me=(n("34ef"),function(){function e(t,n,i){Object(c["a"])(this,e),this.fsCtx=t,this.hq=n,this.preview=i}return Object(l["a"])(e,[{key:"drawText",value:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"white",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#533643",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"20px aller";this.fsCtx.fillStyle=a,o&&(this.fsCtx.strokeStyle=o),this.fsCtx.lineWidth=2*r,this.fsCtx.textAlign=i,this.fsCtx.font=s,this.fsCtx.lineJoin="round",o&&this.fsCtx.strokeText(e,t,n),this.fsCtx.fillText(e,t,n)}},{key:"drawImage",value:function(e,t,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.fsCtx.save(),a&&this.fsCtx.scale(-1,1),i&&r?this.fsCtx.drawImage(e,t,n,i,r):this.fsCtx.drawImage(e,t,n),this.fsCtx.restore()}},{key:"drawRectOutline",value:function(e,t,n,i,r,a){this.fsCtx.beginPath(),this.fsCtx.rect(e,t,n,i),this.fsCtx.strokeStyle=r,this.fsCtx.lineWidth=a,this.fsCtx.stroke()}},{key:"measureText",value:function(e){return this.fsCtx.measureText(e)}}]),e}()),ye=function(){function e(){Object(c["a"])(this,e),this.previewCanvas=document.createElement("canvas"),this.previewCanvas.width=1280,this.previewCanvas.height=720}return Object(l["a"])(e,[{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,i,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=!(r.length>1&&void 0!==r[1])||r[1],i=this.previewCanvas.getContext("2d"),i.clearRect(0,0,this.previewCanvas.width,this.previewCanvas.height),e.next=5,t(new me(i,n,!0));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"paintOnto",value:function(e,t,n,i,r){e.drawImage(this.previewCanvas,t,n,i,r)}},{key:"download",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var i,r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=document.createElement("canvas"),i.width=this.previewCanvas.width,i.height=this.previewCanvas.height,r=i.getContext("2d"),r.clearRect(0,0,this.previewCanvas.width,this.previewCanvas.height),e.next=7,t(new me(r,!0,!1));case 7:a=i.toDataURL(),void 0===window.navigator.msSaveOrOpenBlob?(o=document.createElement("a"),o.setAttribute("href",a),o.setAttribute("download",n),document.body.appendChild(o),o.click(),document.body.removeChild(o)):window.navigator.msSaveBlob(this.dataURItoBlob(a),n);case 9:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"dataURItoBlob",value:function(e){for(var t=atob(e.split(",")[1]),n=[],i=0;i<t.length;i++)n.push(t.charCodeAt(i));return new Blob([new Uint8Array(n)],{type:"image/png"})}},{key:"width",get:function(){return this.previewCanvas.width}},{key:"height",get:function(){return this.previewCanvas.height}}]),e}(),we=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.canvasWidth=0,e.canvasHeight=0,e.currentBackground=null,e.girls=[],e.selectedGirl=null,e.dokiSelectorOpen=!1,e.backgroundSelectorOpen=!1,e.editDialog=!1,e.vertical=!1,e.textbox=new ke,e.renderer=new ye,e.showUI=!0,e.loaded=!1,e.uiSize=192,e.lqRendering=!0,e.panel="",e.renderInProgress=!1,e.queuedRender=null,e}return Object(h["a"])(t,e),Object(l["a"])(t,[{key:"onSelectedGirlChange",value:function(e,t){t&&t.unselect(),e&&(e.select(),this.panel="doki"),this.invalidateRender()}},{key:"onPanel",value:function(e){"doki"!==e&&(this.selectedGirl=null)}},{key:"invalidateRender",value:function(){var e=this;this.queuedRender||(this.queuedRender=requestAnimationFrame(function(){return e.render_()}))}},{key:"render_",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.queuedRender&&(cancelAnimationFrame(this.queuedRender),this.queuedRender=null),this.renderInProgress&&this.invalidateRender(),this.renderInProgress=!0,e.prev=3,n=t||!this.lqRendering,e.next=7,this.renderer.render(this.renderCallback,n);case 7:this.display();case 8:return e.prev=8,this.renderInProgress=!1,e.finish(8);case 11:case"end":return e.stop()}},e,this,[[3,,8,11]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"renderCallback",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,i,r,a,o,s,c,l,u,d,h,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.loaded){e.next=4;break}t.drawText("Starting...",this.renderer.width/2,this.renderer.height/2,"center",5,"white","#b59","32px riffic"),e.next=63;break;case 4:if(!this.currentBackground){e.next=7;break}return e.next=7,this.currentBackground.render(t);case 7:n=!0,i=!1,r=void 0,e.prev=10,a=this.girls[Symbol.iterator]();case 12:if(n=(o=a.next()).done){e.next=20;break}if(s=o.value,s.infront){e.next=17;break}return e.next=17,s.render(t);case 17:n=!0,e.next=12;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](10),i=!0,r=e.t0;case 26:e.prev=26,e.prev=27,n||null==a.return||a.return();case 29:if(e.prev=29,!i){e.next=32;break}throw r;case 32:return e.finish(29);case 33:return e.finish(26);case 34:return e.next=36,this.textbox.render(t);case 36:c=!0,l=!1,u=void 0,e.prev=39,d=this.girls[Symbol.iterator]();case 41:if(c=(h=d.next()).done){e.next=49;break}if(p=h.value,!p.infront){e.next=46;break}return e.next=46,p.render(t);case 46:c=!0,e.next=41;break;case 49:e.next=55;break;case 51:e.prev=51,e.t1=e["catch"](39),l=!0,u=e.t1;case 55:e.prev=55,e.prev=56,c||null==d.return||d.return();case 58:if(e.prev=58,!l){e.next=61;break}throw u;case 61:return e.finish(58);case 62:return e.finish(55);case 63:case"end":return e.stop()}},e,this,[[10,22,26,34],[27,,29,33],[39,51,55,63],[56,,58,62]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){window.cats=this}},{key:"mounted",value:function(){var e=this,t=this.$refs.sd;this.sdCtx=t.getContext("2d")||void 0,this.updateArea(),window.addEventListener("resize",this.updateArea),window.addEventListener("keypress",function(t){27===t.keyCode&&(e.selectedGirl=null,e.panel="")}),this.currentBackground=F[0],this.invalidateRender(),Promise.all([U(this.currentBackground.path,!1),U("textbox"),U("namebox"),U("next")]).then(function(){e.loaded=!0,e.invalidateRender()}).catch(function(){alert("Error while loading. Sorry :/")})}},{key:"optimum",value:function(e,t){var n=e/(16/9),i=t*(16/9);return n>t?n=t:i=e,[i,n]}},{key:"optimizeWithMenu",value:function(e,t){var n=this.optimum(e,t-this.uiSize),i=this.optimum(e-this.uiSize,t);return n[0]*n[1]>i[0]*i[1]?[n[0],n[1],!1]:[i[0],i[1],!0]}},{key:"updateArea",value:function(){var e=this,t=this.optimizeWithMenu(window.innerWidth,window.innerHeight),n=Object(o["a"])(t,3),i=n[0],r=n[1],a=n[2];this.canvasWidth=i,this.canvasHeight=r,this.vertical=a,this.$nextTick(function(){e.display()})}},{key:"display",value:function(){this.sdCtx&&this.renderer.paintOnto(this.sdCtx,0,0,this.canvasWidth,this.canvasHeight)}},{key:"download",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.selectedGirl=null,this.renderer.download(this.renderCallback,"panel.png");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onDokiChosen",value:function(e){this.dokiSelectorOpen=!1,this.girls.push(new ae(e,this.invalidateRender)),this.invalidateRender()}},{key:"onUiClick",value:function(e){this.panel="";var t=this.$refs.sd,n=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop,r=n/t.width*1280,a=i/t.width*720,o=a>50&&a<550?this.girlAt(r):null;this.selectedGirl=o}},{key:"girlAt",value:function(e){for(var t=this.girls.length-1;t>=0;t--)if(Math.abs(re[this.girls[t].pos]-e)<120)return this.girls[t];return null}},{key:"onDokiLayerShift",value:function(e){var t=this.girls.indexOf(e.girl),n=t;switch(this.girls.splice(t,1),e.move){case"Forward":n+=1;break;case"Backward":n-=1;break;case"Back":n=0;break;case"Front":n=this.girls.length;break;case"Delete":return this.panel="",void this.invalidateRender()}n<=0?this.girls.unshift(e.girl):n>=this.girls.length-1?this.girls.push(e.girl):this.girls.splice(n,0,e.girl),this.invalidateRender()}}]),t}(f["c"]);p["a"]([Object(f["d"])("selectedGirl")],we.prototype,"onSelectedGirlChange",null),p["a"]([Object(f["d"])("panel")],we.prototype,"onPanel",null),p["a"]([Object(f["d"])("textbox",{deep:!0}),Object(f["d"])("lqRendering"),Object(f["d"])("currentBackground")],we.prototype,"invalidateRender",null),we=p["a"]([Object(f["a"])({components:{DokiButton:x,GeneralPanel:D,AddPanel:Z,DokiPanel:ue,BackgroundsPanel:ge}})],we);var xe=we,Oe=xe,je=(n("5c0b"),Object(y["a"])(Oe,r,a,!1,null,null,null)),Ce=je.exports,Pe=n("9483");Object(Pe["a"])("".concat("/Doki-Doki-Dialog-Generator/beta/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(Ce)}}).$mount("#app")},ea81:function(e,t,n){}});
//# sourceMappingURL=app.b6f9114e.js.map