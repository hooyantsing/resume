(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],p=0,u=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/resume/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"15c8":function(t,e,s){"use strict";s("dcda")},"1a5b":function(t){t.exports=JSON.parse('{"light":{"backgroundColor":"#fafafa","textColor":"rgba(0, 0, 0, 0.87)","sectionTitleColor":"#0a7074"},"dark":{"backgroundColor":"#121212","textColor":"rgba(255, 255, 255, 0.87)","sectionTitleColor":"#48ccd2"}}')},"2d27":function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e("router-view")],1)])])},a=[],o=(s("b198"),s("2877")),c={},r=Object(o["a"])(c,i,a,!1,null,null,null),l=r.exports,d=s("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"resume"},[e("div",{staticClass:"left-column"},[t._m(0),e("div",{staticClass:"left-column-content"},[e("div",{staticClass:"left-column-head"},[e("div",{staticClass:"headline-txt"},[e("span",{staticClass:"headline-name"},[t._v(" "+t._s(t.person.name.first)+" "+t._s(t.person.name.middle)+" ")]),e("span",{staticClass:"headline-name uppercase"},[t._v(" "+t._s(t.person.name.last)+" ")]),e("p",[e("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.position)+" ")])])])]),e("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.about)+" ")]),e("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.knowledge)+" ")]),e("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.welfare)+" ")]),e("div",{staticClass:"multi-line-txt"},[t._v(" "+t._s(t.person.schoolwork)+" ")]),e("div",{staticClass:"social-container"},[e("div",{staticClass:"block-marged left-column-items"},[e("i",{staticClass:"fas fa-phone-alt contact-icon"}),e("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.contact.phone)+" ")])]),e("a",{staticClass:"block-marged left-column-items",attrs:{href:t.contactLinks.email}},[e("i",{staticClass:"fas fa-envelope contact-icon"}),e("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.contact.email)+" ")])]),t.person.contact.website?e("a",{staticClass:"block-marged left-column-items",attrs:{href:t.person.contact.website}},[e("i",{staticClass:"fas fa-blog contact-icon"}),e("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.contact.website)+" ")])]):t._e(),t.person.contact.github?e("a",{staticClass:"block-marged left-column-items",attrs:{href:t.contactLinks.github}},[e("i",{staticClass:"fab fa-github contact-icon"}),e("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.contact.github)+" ")])]):t._e(),t.person.contact.codefights?e("a",{staticClass:"block-marged left-column-items",attrs:{href:t.contactLinks.codefights}},[e("svg",{staticClass:"contact-icon-svg",attrs:{width:"20",height:"20",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 15.2L9.2 4.8 0 3.2l1.7 2.6 5.7.7.7 2.3-3.7-.4 1.3 2 3 .3L12 20.8l3.3-10.1 3-.3 1.3-2-3.7.4.7-2.3 5.7-.7L24 3.2l-9.2 1.6"}})]),e("span",{staticClass:"txt-full-white"},[t._v(" "+t._s(t.person.contact.codefights)+" ")])]):t._e(),t.person.contact.medium?e("a",{staticClass:"left-column-items",attrs:{href:t.contactLinks.medium}},[e("i",{staticClass:"fab fa-medium contact-icon"}),e("span",{staticClass:"block-marged txt-full-white"},[t._v(" "+t._s(t.person.contact.medium)+" ")])]):t._e()]),e("div",{staticClass:"actions-container"},[!1===t.exportMode?e("a",{staticClass:"block-marged left-column-items",on:{click:t.switchThemeMode}},[e("i",{staticClass:"mdi contact-icon",class:"light"===t.themeMode?"mdi-weather-night":"mdi-weather-sunny",staticStyle:{"font-size":"1.4em"}}),e("span",{staticClass:"txt-full-white",staticStyle:{"margin-left":"-0.1em"}},[t._v(" "+t._s("light"===t.themeMode?t.lang.darkMode:t.lang.lightMode)+" ")])]):t._e(),!1===t.exportMode?e("router-link",{staticClass:"block-marged left-column-items",staticStyle:{"margin-top":"-10px"},attrs:{to:"cn"===t.language?"/en":"/cn"}},[e("i",{staticClass:"mdi mdi-translate contact-icon",staticStyle:{"font-size":"1.4em"}}),e("span",{staticClass:"txt-full-white",staticStyle:{"margin-left":"-0.1em"}},[t._v(" "+t._s(t.lang.translate)+" ")])]):t._e()],1)])]),e("div",{staticClass:"right-column"},[e("div",{staticClass:"experience-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-briefcase font-awesome-icons"}),e("span",{staticClass:"section-headline"},[t._v(t._s(t.lang.experience))])]),e("div",{staticClass:"section-content"},t._l(t.person.experience,(function(s,n){return e("div",{key:n,staticClass:"section-content__item",class:s.website?"":"un-clickable",on:{click:function(e){return t.openWindow(s.website)}}},[e("div",{staticClass:"section-content__header section-content__header-flex"},[t._v(" "+t._s(s.company)+" "),s.internship?e("span",{staticClass:"chip chip-secondary"},[t._v(" "+t._s(t.lang.internship)+" ")]):t._e()]),e("div",{staticClass:"section-content__subheader"},[t._v(" "+t._s(s.position)+" ")]),e("div",{staticClass:"section-content__text"},[t._v(" "+t._s(s.timeperiod)+" ")]),e("div",{staticClass:"section-content__text"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"section-content__text--light"},[t._v(" "+t._s(s.website)+" ")])])})),0)]),e("div",{staticClass:"education-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-graduation-cap font-awesome-icons"}),e("span",{staticClass:"section-headline"},[t._v(t._s(t.lang.education))])]),e("div",{staticClass:"section-content"},t._l(t.person.education,(function(s,n){return e("div",{key:n,staticClass:"section-content__item",class:s.website?"":"un-clickable",on:{click:function(e){return t.openWindow(s.website)}}},[e("div",{staticClass:"section-content__header"},[t._v(" "+t._s(s.school)+" ")]),e("div",{staticClass:"section-content__subheader"},[t._v(" "+t._s(s.major)+" "+t._s(s.degree)+" ")]),e("div",{staticClass:"section-content__text"},[t._v(" "+t._s(s.timeperiod)+" ")]),e("div",{staticClass:"section-content__text"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"section-content__text--light"},[t._v(" "+t._s(s.website)+" ")])])})),0)]),t.person.projects?e("div",{staticClass:"projects-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-code font-awesome-icons"}),e("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.projects)+" ")])]),e("div",{staticClass:"section-content"},t._l(t.person.projects,(function(s,n){return e("div",{key:n,staticClass:"section-content__item",class:s.url?"":"un-clickable",on:{click:function(e){return t.openWindow(s.url)}}},[e("div",{staticClass:"section-content__header section-content__header-flex"},[t._v(" "+t._s(s.name)+" "),s.platform?e("span",{staticClass:"chip"},[t._v(" "+t._s(s.platform)+" ")]):t._e(),s.dev?e("span",{staticClass:"chip chip-secondary"},[t._v(" "+t._s(t.lang.underDev)+" ")]):t._e()]),e("div",{staticClass:"section-content__subheader"},[t._v(" "+t._s(s.shortIntro)+" ")]),e("div",{staticClass:"section-content__text"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"section-content__text--light"},[t._v(" "+t._s(s.url)+" ")])])})),0)]):t._e(),t.person.contributions?e("div",{staticClass:"contributions-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-heart font-awesome-icons"}),e("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.contributions)+" ")])]),e("div",{staticClass:"section-content"},t._l(t.person.contributions,(function(s,n){return e("div",{key:n,staticClass:"section-content__item",class:s.url?"":"un-clickable",on:{click:function(e){return t.openWindow(s.url)}}},[e("div",{staticClass:"section-content__header section-content__header-flex"},[t._v(" "+t._s(s.name)+" "),s.platform?e("span",{staticClass:"chip"},[t._v(t._s(s.platform))]):t._e()]),e("div",{staticClass:"section-content__subheader"},[t._v(" "+t._s(s.shortIntro)+" ")]),e("div",{staticClass:"section-content__text"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"section-content__text--light"},[t._v(" "+t._s(s.url)+" ")])])})),0)]):t._e(),t.person.awards?e("div",{staticClass:"contributions-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-trophy font-awesome-icons"}),e("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.awards)+" ")])]),e("div",{staticClass:"section-content-grid"},t._l(t.person.awards,(function(s,n){return e("div",{key:n,staticClass:"section-content__item-grid",class:s.url?"":"un-clickable",on:{click:function(e){return t.openWindow(s.url)}}},[e("div",{staticClass:"section-content__header"},[t._v(t._s(s.name))]),e("div",{staticClass:"section-content__subheader"},[t._v(" "+t._s(s.award)+" ")]),e("div",{staticClass:"section-content__text"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"section-content__text--light"},[t._v(" "+t._s(s.grade)+" ")])])})),0)]):t._e(),t.person.skills?e("div",{staticClass:"skills-section section"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-coffee font-awesome-icons"}),e("span",{staticClass:"section-headline"},[t._v(" "+t._s(t.lang.skills)+" ")])]),e("div",{staticClass:"section-content-grid section-content-grid-skills"},t._l(t.person.skills,(function(s,n){return e("span",{key:n,staticClass:"grid-item"},[e("div",{staticClass:"squarred-grid-item",class:s.url?"":"un-clickable",on:{click:function(e){return t.openWindow(s.url)}}},[s.iconClass?e("i",{class:"mdi "+s.iconClass}):t._e(),t._v(" "+t._s(s.name)+" ")])])})),0)]):t._e()])])},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"headline-photo"},[e("img",{staticClass:"headline-photo-img",attrs:{src:"photo.jpg",alt:"Absolutely myself"}})])}],h=s("6ccb");const m="\nname:\n  first: 胡\n  middle:\n  last: 燕卿\nabout: \nposition: Java 开发工程师\n\nschoolwork: 大学期间作为主力完成了若干项目的后端开发，参与多个项目的前端设计；开发中通常担当项目组长，具有不错的统筹安排、合作沟通能力。参加过青年志愿者协会公益团体，担任网编部部长一职。\n\ncontact:\n  city: 北京\n  street: 北京市\n  phone: +86 13135040380\n  email: hooyantsing@foxmail.com\n  website: https://hooyantsing.github.io\n  github: hooyantsing\n\neducation:\n- school: 湖南工学院\n  website: https://www.hnit.edu.cn\n  degree: 工学学士\n  major: 网络工程\n  timeperiod: 2017.09 — 2021.06\n\nexperience:\n- company: 东信北邮\n  website: https://www.e-byte.com\n  position: 项目研发工程师\n  internship: false\n  timeperiod: 2022.04 — 2023.09\n  description: 「分布式数据采集平台」和「头雁政企」项目开发\n\nprojects:\n- name: mgdcmp\n  shortIntro: 分布式数据采集平台\n  platform: Java\n  description: 我主导平台 1.0 版本的开发，架构包括调度中心、配置中心和爬虫执行器。通过编辑站点、链接和锚点配置数据，后将其编组任务，最后拉起调度定时执行\n\n- name: touyan\n  shortIntro: 头雁政企，旨在信息化在线教育的方式培育新一代农业劳动者\n  platform: Java\n  description: 我主要负责在线课程库、课程打卡、个人中心和个人展示功能模块的开发任务\n\n- name: hnit-accoj\n  shortIntro: 陌上实训-会计学实训\n  url: https://accoj.hnit.edu.cn\n  description: 在校期间计算机学院与经管学院合作项目，实现的一套在线做题系统，帮助授课教师更高效的布置作业和评判学生成绩\n\ncontributions:\n- name: npk-api\n  shortIntro: 提供对《地下城与勇士》（DNF、DFO）游戏资源 NPK 文件基础操作能力\n  platform: Java\n  url: https://github.com/hooyantsing/npk-api\n\n- name: webmagic-job\n  shortIntro: 基于 springboot 底座、webmagic 爬虫内核、xxl-job 任务定时调度实现的分布式爬虫平台\n  platform: Java\n  url: https://github.com/hooyantsing/webmagic-job\n\n- name: webmagic\n  shortIntro: 一个可扩展的 Java 网络爬虫框架\n  platform: Java\n  url: https://github.com/code4craft/webmagic\n  description: 贡献 webmagic-saxon 组件源码，解决 Xsoup 依赖不支持 Xpath2.0 的问题\n\nawards:\n- name: ApsaraClouder 基础技能认证-阿里巴巴编码规范\n\n- name: 计算机技术与软件专业技术资格-网络工程师（中级）\n\n- name: 2019 年新华三杯全国大学生数字技术大赛\n  award: 湖南赛区二等奖\n  grade: 省区级\n\n- name: 2020 年湖南省大学生计算机作品赛\n  award: 二等奖\n  grade: 省区级\n\n- name: 湖南工学院第十四届计算机科技文化节系列活动之网页设计大赛\n  award: 二等奖\n  grade: 校级\n\nskills:\n  - name: SpringBoot\n  - name: SpringWeb\n  - name: SpringSecurity\n  - name: SpringData\n  - name: SpringCloudNetflix\n  - name: SpringCloudAlibaba\n  - name: Zookeeper\n  - name: Dubbo\n  - name: Mybatis\n  - name: Hibernate\n  - name: RocketMQ\n  - name: MySQL\n  - name: Redis\n  - name: Git\n  - name: SVN\n  - name: Docker\n\nlang: cn\n";var _=s("2d27");const f={contact:"Contact",born:"Born",bornIn:"in",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",contributions:"Contributions",about:"About me",awards:"Awards / Certificates",internship:"INTERNSHIP",underDev:"DEV",translate:"中文简历",lightMode:"Light Mode",darkMode:"Dark Mode"};var v=f;const g={contact:"联系方式",born:"出生",bornIn:"于",experience:"工作经历",education:"教育经历",skills:"技能专长",projects:"项目经历",contributions:"开源贡献",about:"自我介绍",awards:"获奖 / 证书",internship:"实习",underDev:"开发中",translate:"English resume",lightMode:"日间模式",darkMode:"夜间模式"};var C=g;const b={en:v,cn:C},w=s("e2c1"),k=s("cdfc"),x=s("1a5b");var y={data(){return{person:void 0,language:"cn",exportMode:!1,themeMode:"light",terms:b}},watch:{$route(t){this.setResumeData(t)}},computed:{lang(){const t=this.terms.cn,e=this.terms[this.person.lang];return Object.keys(t).filter(t=>!e[t]).forEach(s=>{e[s]=t[s]}),e},contactLinks(){const t={};return this.person.contact.github&&(t.github="https://github.com/"+this.person.contact.github),this.person.contact.codefights&&(t.codefights="https://codefights.com/profile/"+this.person.contact.codefights),this.person.contact.medium&&(t.medium="https://medium.com/@"+this.person.contact.medium),this.person.contact.email&&(t.email="mailto:"+this.person.contact.email),this.person.contact.linkedin&&(t.linkedin="https://linkedin.com/in/"+this.person.contact.linkedin),this.person.contact.phone&&(t.phone="tel:"+this.person.contact.phone),t}},methods:{mergePerson(t,...e){let s=w.load(t);return e.forEach(t=>{s=k.merge(s,w.load(t))}),s},setResumeData(t){const e=t.params.language||"cn",s=t.query.exportMode||!1;let n;switch(e){case"en":n=this.mergePerson(h["personDefault"],_["personEN"]);break;default:n=this.mergePerson(h["personDefault"],m)}this.language=e,this.exportMode=s,this.person=n},switchThemeMode(){this.setThemeMode("light"===this.themeMode?"dark":"light")},setThemeMode(t){this.themeMode=t,localStorage.preferredThemeMode=t,document.documentElement.style.setProperty("--theme-background-color",x[t].backgroundColor),document.documentElement.style.setProperty("--theme-text-color",x[t].textColor),document.documentElement.style.setProperty("--theme-section-title-color",x[t].sectionTitleColor)},getPreferredThemeMode(){const t=void 0!==localStorage.preferredThemeMode?localStorage.preferredThemeMode:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";return"dark"===t?"dark":"light"},openWindow(t){t&&window.open(t,"_blank")}},created(){this.setResumeData(this.$route),!0===this.exportMode?this.setThemeMode("light"):this.setThemeMode(this.getPreferredThemeMode())}},M=y,j=(s("15c8"),Object(o["a"])(M,p,u,!1,null,null,null)),S=j.exports;n["a"].use(d["a"]);const P=[{path:"/:language",name:"resume",component:S},{path:"*",redirect:"/cn"}],T=new d["a"]({base:"/resume/",routes:P});T.beforeEach((t,e,s)=>{"/cn"===t.path||"/en"===t.path?s():s({path:"/cn"})});var O=T;n["a"].config.productionTip=!1,new n["a"]({router:O,render:t=>t(l)}).$mount("#app")},"6ccb":function(t,e){},9913:function(t,e,s){},b198:function(t,e,s){"use strict";s("9913")},dcda:function(t,e,s){}});
//# sourceMappingURL=app.9db07f44.js.map