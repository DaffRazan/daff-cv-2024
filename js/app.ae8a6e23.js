(function(e){function t(t){for(var a,r,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},o=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"755182d2"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}s[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/daff-cv-2024/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3dfd":function(e,t,n){"use strict";var a=n("7a23"),s=Object(a["h"])("head",null,[Object(a["h"])("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}),Object(a["h"])("link",{href:"https://unpkg.com/aos@2.3.1/dist/aos.css",rel:"stylesheet"})],-1),o={id:"app",class:"\n      container\n      mx-auto\n      bg-green-800\n      leading-normal\n      tracking-normal\n      md:px-32\n      px-6\n    "},r={class:"\n        flex\n        items-center\n        justify-between\n        flex-wrap\n        pt-6\n        w-full\n        z-10\n        nav-scroll\n      "},i={class:"flex items-center flex-shrink-0 mr-6"},l=Object(a["h"])("a",{class:"\n              text-white\n              no-underline\n              hover:no-underline\n              md:text-4xl\n              text-2xl\n              font-bold\n            ",href:""},[Object(a["g"])("Daff"),Object(a["h"])("span",{class:"text-green-500"},"Raz.")],-1),c={class:"block lg:hidden"},d={class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},p={key:0,"fill-rule":"evenodd",d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"},m={key:1,"fill-rule":"evenodd",d:"M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"},u={class:"\n            list-reset\n            lg:flex\n            justify-center\n            md:justify-end\n            flex-1\n            items-center\n          "},f=Object(a["h"])("a",{class:"\n                md:pr-5\n                md:text-3xl\n                font-bold\n                md:inline-block\n                block\n                py-2\n                px-4\n                no-underline\n                text-white\n                hover:bg-green-500\n                hover:rounded-lg\n              "},"Home",-1),g=Object(a["h"])("a",{class:"\n                md:pr-5\n                md:text-3xl\n                font-bold\n                md:inline-block\n                block\n                py-2\n                px-4\n                no-underline\n                text-white\n                hover:bg-green-500\n                hover:rounded-lg\n              "},"Projects",-1),h=Object(a["h"])("a",{class:"\n                md:pr-5\n                md:text-3xl\n                font-bold\n                md:inline-block\n                block\n                py-2\n                px-4\n                no-underline\n                text-white\n                hover:bg-green-500\n                hover:rounded-lg\n              "},"Contact",-1),b=Object(a["h"])("div",{id:"footer",class:"md:py-10 py-5"},[Object(a["h"])("p",{class:"text-center text-white text-sm md:text-xl"},[Object(a["g"])(" Made with ❤️ by Daff"),Object(a["h"])("span",{class:"text-green-500"},"Raz"),Object(a["g"])(" in 2024 ")])],-1);function v(e,t,n,v,x,w){var j=Object(a["u"])("router-link"),y=Object(a["u"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[s,Object(a["h"])("div",o,[Object(a["h"])("nav",r,[Object(a["h"])("div",i,[Object(a["h"])(j,{tag:"li",to:"/"},{default:Object(a["y"])((function(){return[l]})),_:1})]),Object(a["h"])("div",c,[Object(a["h"])("button",{onClick:t[1]||(t[1]=function(e){return x.isOpen=!x.isOpen}),id:"nav-toggle",class:"\n            flex\n            items-center\n            px-3\n            py-2\n            border\n            rounded\n            text-purple-300\n            border-green-500\n            hover:text-white\n            hover:border-white\n          "},[(Object(a["q"])(),Object(a["d"])("svg",d,[x.isOpen?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("path",p)),x.isOpen?(Object(a["q"])(),Object(a["d"])("path",m)):Object(a["e"])("",!0)]))])]),Object(a["h"])("div",{class:[x.isOpen?"block":"hidden","\n          mx-auto\n          w-full\n          flex-grow\n          lg:flex\n          lg:items-center\n          lg:w-auto\n          pt-6\n          lg:pt-0\n          items-center\n          text-green-500\n          border-green-500\n          text-center\n          bg-transparent\n        "],id:"nav-content"},[Object(a["h"])("ul",u,[Object(a["h"])(j,{tag:"li",to:"/","exact-active-class":"exact-active"},{default:Object(a["y"])((function(){return[f]})),_:1}),Object(a["h"])(j,{tag:"li",to:"/projects","exact-active-class":"exact-active"},{default:Object(a["y"])((function(){return[g]})),_:1}),Object(a["h"])(j,{tag:"li",to:"/contact","exact-active-class":"exact-active"},{default:Object(a["y"])((function(){return[h]})),_:1})])],2)]),Object(a["h"])(y),b])],64)}var x=n("f5af"),w=n.n(x),j=n("1157"),y=n.n(j),O={name:"app",mounted:function(){y()(window).scroll((function(){y()(this).scrollTop()>50?y()(".nav-scroll").addClass("p-5 sticky top-0 rounded-xl bg-gray-800 animate__fadeIn animate__animated"):y()(".nav-scroll").removeClass("p-5 sticky top-0 rounded-xl bg-gray-800 animate__fadeIn animate__animated")}))},created:function(){w.a.init()},data:function(){return{isOpen:!1}},watch:{$route:function(){this.isOpen=!1}}};O.render=v;t["a"]=O},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("7a23"),a=n("3dfd"),s=(n("d940"),n("a18c")),o=(n("e829"),n("1157")),r=n.n(o);e.jQuery=r.a,e.$=r.a,Object(t["c"])(a["a"]).use(s["a"]).mount("#app")}.call(this,n("c8ba"))},a18c:function(e,t,n){"use strict";n("b0c0"),n("d3b7");var a=n("6c02"),s=n("7a23"),o={class:"md:py-10 py-52 text-white"},r=Object(s["f"])('<div class="flex justify-center mx-auto animate__animated animate__fadeIn"><img src="profile_pic.jpg" class="md:w-1/4 md:h-1/2 w-2/5 h-7/8 rounded-full" alt="Daffa&#39;s Profile Picture"></div><div class="flex justify-center pt-5 pb-2 animate__animated animate__fadeIn"><h1 class="md:text-5xl font-medium">Muhammad Daffa Razan</h1></div><div class="flex justify-center animate__animated animate__fadeIn"><h1 class="md:text-xl text-sm font-medium"> Flutter Mobile Engineer </h1></div><div id="arrow"><a href="#introduction"><img src="down-arrow.svg" class="\n            flex\n            mx-auto\n            md:py-16\n            pt-24\n            pb-52\n            md:w-1/12\n            md:h-1/12\n            w-2/12\n            h-2/12\n            animate-bounce\n          " alt="arrowdown"></a></div><div id="introduction" class="md:py-10 pt-16"><h1 class="text-green-500 md:text-5xl text-xl pb-10" data-aos="fade-up"> Intro </h1><h1 class="md:text-xl text-sm aos-init aos-animate mb-5" data-aos="fade-up"> Hello everyone! I&#39;m <span class="text-green-500">Muhammad Daffa Razan</span>, a passionate Mobile Developer with 3 years of hands-on experience crafting engaging and efficient Flutter apps. Over the past 4+ years in mobile development, I&#39;ve honed my skills, focusing primarily on Flutter. I&#39;ve built apps using Clean Architecture, making use of BLoC, Provider, and GetX to ensure clean, scalable code and top-notch performance. </h1><h1 class="md:text-xl text-sm aos-init aos-animate mb-5" data-aos="fade-up"> I’ve successfully launched apps on both the Playstore and App Store, reaching users around the globe. Alongside mobile development, I have an advanced certificate in Kotlin and enjoy diving into iOS development during my spare time. My expertise also extends to web development, where I&#39;ve worked with frameworks like Laravel, CodeIgniter, React, and Vue. </h1><h1 class="md:text-xl text-sm aos-init aos-animate mb-5" data-aos="fade-up"> I&#39;m always excited to connect with like-minded professionals, so feel free to reach out—whether it’s to collaborate or explore opportunities together! </h1></div><div class="mb-12" data-aos="fade-up"><a href="https://docs.google.com/document/d/10QG-N5_X_YgFflXU3A970p7OFIrb85j7XfnXuVh7_yw/edit?usp=sharing" target="_blank" class="\n          md:w-2/12\n          w-1/4\n          md:text-xl\n          text-sm\n          md:py-2\n          md:px-4\n          py-1\n          px-2\n          font-semibold\n          flex\n          justify-center\n          rounded-full\n          bg-green-500\n          hover:bg-green-700\n          text-white\n          transform\n          transition\n          duration-500\n          hover:scale-125\n        " type="submit"> See CV </a></div><div class=""><h1 class="text-green-500 md:text-5xl text-xl md:pb-10 pb-5" data-aos="fade-up"> Expertise </h1><div id="webexpertise"><h1 class="text-green-500 md:text-3xl text-md md:pb-5 pb-5" data-aos="fade-up"> Web Dev </h1><div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left"><img class="md:w-2/5 w-6/12" src="expertise/html.svg" alt="html logo"><img class="md:w-2/5 w-6/12" src="expertise/css.svg" alt="css logo"><img class="md:w-2/5 w-6/12" src="expertise/js.svg" alt="js logo"><img class="md:w-2/5 w-6/12" src="expertise/bootstrap.svg" alt="bootstrap logo"></div><div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left"><img class="md:w-2/5 w-6/12" src="expertise/laravel.svg" alt="laravel logo"><img class="md:w-2/5 w-6/12" src="expertise/ci.svg" alt="code igniter logo"><img class="md:w-2/5 w-6/12" src="expertise/django.svg" alt="django logo"><img class="md:w-2/5 w-6/12" src="expertise/vue.svg" alt="vue logo"></div><div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left"><img class="md:w-2/5 w-6/12" src="expertise/nextjs.svg" alt="next js logo"><img class="md:w-2/5 w-6/12" src="expertise/tailwind.svg" alt="tailwind css logo"></div></div><div id="mobile_expertise"><h1 class="text-green-500 md:text-3xl text-md md:pb-5 pb-5" data-aos="fade-up"> Mobile Dev </h1><div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left"><img class="md:w-2/5 w-6/12" src="expertise/kotlin.png" alt="kotlin logo"><img class="md:w-2/5 w-6/12" src="expertise/flutter.png" alt="bootstrap logo"></div></div><div id="designexpertise"><h1 class="text-green-500 md:text-3xl text-md md:pb-5 pb-5" data-aos="fade-up"> Design </h1><div class="grid grid-cols-4 gap-5 md:py-10 py-5" data-aos="flip-left"><img class="md:w-2/5 w-6/12" src="expertise/ai.svg" alt="adobe illustrator logo"><img class="md:w-2/5 w-6/12" src="expertise/ps.svg" alt="adobe photoshop logo"><img class="md:w-2/5 w-6/12" src="expertise/xd.svg" alt="adobe xd logo"><img class="md:w-2/5 w-6/12" src="expertise/figma.svg" alt="figma logo"></div></div><div id="languageexpertise"><h1 class="text-green-500 md:text-3xl text-md md:pb-5 pb-5" data-aos="fade-up"> Programming Language </h1><div class="grid grid-cols-4 gap-5 md:py-10 pt-5 pb-2" data-aos="flip-left"><img class="md:w-2/5 w-6/12" src="expertise/python.svg" alt="python logo"><img class="md:w-2/5 w-6/12" src="expertise/java.svg" alt="java logo"></div></div></div>',7);function i(e,t,n,a,i,l){return Object(s["q"])(),Object(s["d"])("div",o,[r])}var l={name:"Home",components:{}};l.render=i;var c=l,d=[{path:"/",name:"Home",component:c},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/projects",name:"Projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}}],p=Object(a["a"])({history:Object(a["b"])("/daff-cv-2024/"),routes:d});p.beforeEach((function(e,t,n){document.title="Daffa Razan - "+e.name,n()}));t["a"]=p},d940:function(e,t,n){}});
//# sourceMappingURL=app.ae8a6e23.js.map