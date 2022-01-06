"use strict";(self.webpackChunksrs_docs=self.webpackChunksrs_docs||[]).push([[933],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=a(r),k=l,f=d["".concat(u,".").concat(k)]||d[k]||s[k]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3706:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return p},default:function(){return d}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Git",sidebar_label:"Git",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:null},u=void 0,a={unversionedId:"doc/git",id:"doc/git",title:"Git",description:"Git",source:"@site/docs/doc/git.md",sourceDirName:"doc",slug:"/doc/git",permalink:"/srs-docs/zh-cn/docs/doc/git",editUrl:null,tags:[],version:"current",frontMatter:{title:"Git",sidebar_label:"Git",hide_title:!0,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"docsSidebar",next:{title:"Build",permalink:"/srs-docs/zh-cn/docs/doc/build"}},p=[{value:"Git",id:"git",children:[{value:"Fast checkout",id:"fast-checkout",children:[],level:3},{value:"Checkout Branch",id:"checkout-branch",children:[],level:3},{value:"SRS Branches",id:"srs-branches",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"git"},"Git"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: \u5982\u679c\u89c9\u5f97Github\u7684Wiki\u8bbf\u95ee\u592a\u6162\uff0c\u53ef\u4ee5\u8bbf\u95ee Gitee \u955c\u50cf\u3002")),(0,o.kt)("p",null,"\u5982\u4f55\u9009\u62e9SRS\u7684\u7a33\u5b9a\u7248\u672c\uff1f\u5982\u4f55\u66f4\u65b0\u4ee3\u7801\uff1f"),(0,o.kt)("h3",{id:"fast-checkout"},"Fast checkout"),(0,o.kt)("p",null,"\u5f88\u591a\u4eba\u5e0c\u671b\u7f29\u51cf\u4ed3\u5e93\u5927\u5c0f\uff0c\u5f88\u591adoc\u548c3rdparty\u4e2d\u7684\u7b2c\u4e09\u65b9\u4ee3\u7801\u538b\u7f29\u5305\u3002\u6211\u5728\u8fd9\u91cc\u96c6\u4e2d\u8bf4\u660e\u4e00\u6b21\uff0c\u4e3a\u4f55\u9700\u8981\u628adoc\u6536\u96c6\u90a3\u4e48\u5168\uff1f\u8fd9\u4e2a\u4e0d\u8a00\u81ea\u660e\uff0csrs\u4e2d23%\u7684\u4ee3\u7801\u90fd\u662f\u6ce8\u91ca\uff0c\u6ce8\u91ca\u4f1a\u8bf4\u660e\u662f\u54ea\u4e2a\u6587\u6863\u7684\u54ea\u4e00\u9875\uff0c\u96be\u9053\u8fd8\u9700\u8981\u518d\u4e0b\u8f7d\u4e00\u6b21\u8fd9\u4e2a\u6587\u6863\u5417\uff1f\u4e3a\u4f55\u9700\u8981\u628a\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u4ee3\u7801\u653e\u8fdb\u6765\uff0c\u8b6c\u5982ffmpeg\u548cnignx\u8fd8\u6709openssl\uff1f\u518d\u53bb\u4e0b\u8f7d\u8fd9\u4e9b\u76f8\u5173\u7684\u7a0b\u5e8f\u4f1a\u6bd4\u8f83\u9ebb\u70e6\uff0c\u800c\u4e14\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\uff0c\u4e0b\u8f7d\u6b63\u786e\u7684\u7248\u672c\u548c\u7f16\u8bd1\u90fd\u662f\u6bd4\u8f83\u590d\u6742\u7684\u95ee\u9898\u3002\u4e3a\u4e86\u597d\u7528\uff0c\u5927\u4e00\u70b9\u7684\u4ed3\u5e93\u6211\u89c9\u5f97\u800c\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\u3002"),(0,o.kt)("p",null,"\u4e3a\u4f55\u4e0d\u505a\u8fd9\u4e9b\u6539\u53d8\uff1f\u8fd9\u4e9b\u662f\u6b21\u8981\u590d\u6742\u5ea6\uff0c\u4ed3\u5e93\u591a\u5927\u5bf9\u4e8e\u4ee3\u7801\u8d28\u91cf\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\u3002\u800c\u4e14\u66f4\u91cd\u8981\u7684\u662f\uff0c\u56fd\u5185\u5f88\u591agit\u955c\u50cf\u7ad9\u70b9\uff0cSRS\u662f\u540c\u6b65\u66f4\u65b0\u7684\uff0c\u963f\u91cc\u4e91\u63d0\u4f9b\u670d\u52a1\u7684oschina\uff0c\u6211git clone\u4e00\u6b21\u662f40\u79d2\u5de6\u53f3\u3002\u8fd9\u4e2a\u95ee\u9898\u5c31\u53d8\u6210\u4e00\u4e2a\u5c0f\u95ee\u9898\u4e86\u3002"),(0,o.kt)("p",null,"\u5982\u4f55\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u7ad9\u70b9clone\uff0c\u7136\u540e\u628a\u670d\u52a1\u5668\u8bbe\u7f6e\u4e3agithub\u4e0a\uff1f\u8fd9\u6837\u548c\u76f4\u63a5\u4ecegithub\u4e0aclone\u4e00\u6a21\u4e00\u6837\u4e86\u3002\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5c31\u53ef\u4ee5\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone -b 4.0release https://gitee.com/ossrs/srs.git &&\ncd srs && git remote set-url origin https://github.com/ossrs/srs.git\n")),(0,o.kt)("p",null,"\u5176\u4ed6\u56fd\u5185\u955c\u50cf\u53c2\u8003\uff1adevelop#mirrors"),(0,o.kt)("h3",{id:"checkout-branch"},"Checkout Branch"),(0,o.kt)("p",null,"\u6709\u4e9b\u529f\u80fd\u53ea\u6709SRS2.0\u6709\uff0cSRS1.0\u6ca1\u6709\uff0c\u8bf7\u6ce8\u610f\u770bwiki\u662fv1\u8fd8\u662fv2\u7684\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u662f1.0\u7684\u529f\u80fd\uff0c\u66f4\u65b0\u4ee3\u7801\u540e\u8981\u6539\u53d8\u52301.0\u5206\u652f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull && git checkout 1.0release\n")),(0,o.kt)("p",null,"\u5982\u679c\u662f2.0\u7684\u529f\u80fd\uff0c\u66f4\u65b0\u4ee3\u7801\u540e\u8981\u6539\u53d8\u52302.0\u5206\u652f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull && git checkout 2.0release\n")),(0,o.kt)("p",null,"\u5982\u679c\u662f3.0\u7684\u529f\u80fd\uff0c\u66f4\u65b0\u4ee3\u7801\u540e\u8981\u6539\u53d8\u52303.0\u5206\u652f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull && git checkout 2.0release\n")),(0,o.kt)("p",null,"\u5982\u679c\u662f4.0\u7684\u529f\u80fd\uff0c\u66f4\u65b0\u4ee3\u7801\u540e\u8981\u6539\u53d8\u52304.0\u5206\u652f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull && git checkout 4.0release\n")),(0,o.kt)("p",null,"\u5982\u679c\u662f5.0\u7684\u529f\u80fd\uff0c\u66f4\u65b0\u4ee3\u7801\u540e\u8981\u6539\u53d8\u52305.0\u5206\u652f\uff08\u6ca1\u6709\u5355\u72ec\u76845.0release\u5206\u652f\u5c31\u662fdevelop\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull && git checkout develop\n")),(0,o.kt)("h3",{id:"srs-branches"},"SRS Branches"),(0,o.kt)("p",null,"release\u5206\u652f\u4f1a\u6bd4develop\u7a33\u5b9a\uff0c\u4e0d\u8fc7\u53ea\u6709\u6b63\u5f0f\u53d1\u5e03\u7684\u7248\u672c\u624d\u6bd4\u8f83\u7a33\u5b9a\uff0c\u53d1\u5e03\u4e2d\u7684\u7248\u672c\u4e5f\u4f1a\u6709release\u5206\u652f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3.0release\uff0c\u7a33\u5b9a\u53d1\u5e03\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},"4.0release\uff0c\u6b63\u5728\u53d1\u5e03\u4e2d\u7684\u7248\u672c\uff0c\u8fd8\u4e0d\u591f\u7a33\u5b9a\u3002"),(0,o.kt)("li",{parentName:"ul"},"develop\uff0c\u5f00\u53d1\u7248\u672c\uff0c\u6ca1\u6709\u7a33\u5b9a\u6027\u4fdd\u969c\u3002")),(0,o.kt)("p",null,"\u6240\u8c13\u7a33\u5b9a\u6027\uff0c\u5f00\u6e90\u9879\u76ee\u548c\u5546\u4e1a\u4ea7\u54c1\u7684\u5b9a\u4e49\u662f\u4e0d\u540c\u7684\u3002\u5f00\u6e90\u4ea7\u54c1\u6ca1\u6709\u660e\u786e\u7684\u7a33\u5b9a\u6027\u5b9a\u4e49\uff0c\u4e5f\u6ca1\u6709SLA\u5b9a\u4e49\uff0c\u80af\u5b9a\u662f\u4f1a\u78b0\u5230\u95ee\u9898\uff0c\u5c31\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u80fd\u89e3\u51b3\u3002 \u6bd5\u7adf\u4ee3\u7801\u90fd\u6709\u4e86\uff0c\u5982\u679c\u89e3\u51b3\u4e0d\u4e86\u95ee\u9898\uff0c\u90a3\u8fd8\u662f\u5efa\u8bae\u7528\u5546\u4e1a\u7684\u4e91\u670d\u52a1\u5427\u3002"),(0,o.kt)("p",null,"SRS\u7684\u7a33\u5b9a\u6027\u4fdd\u969c\uff0c\u4e3b\u8981\u4f9d\u9760\u51e0\u4e2a\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u8fdb\u5165Release\u9636\u6bb5\uff0c\u53d8\u66f4\u4f1a\u8003\u8651\u7a33\u5b9a\u6027\uff0c\u4e0d\u4f1a\u65b0\u589e\u529f\u80fd\uff0c\u57fa\u672c\u4e0a\u53ea\u6539\u5584\u4ee3\u7801\u548c\u89e3\u51b3bug\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u65ad\u5b8c\u5584UTest\u548cRegressionTest\uff0c\u9632\u6b62\u5f15\u5165\u95ee\u9898\uff0c\u63d0\u524d\u53d1\u73b0\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u9760\u793e\u533a\u7684\u53cd\u9988\uff0c\u4e00\u822cRelease\u5206\u652f\u4f1a\u63d0\u4ea4\u4e00\u4e9bCommit\u4f46\u4e0d\u4e00\u5b9a\u4f1a\u6253\u7248\u672c\uff0c\u5982\u679c\u8fc7\u6bb5\u65f6\u95f4\u6ca1\u6709\u7a33\u5b9a\u6027\u95ee\u9898\u53cd\u9988\u624d\u4f1a\u53d1\u7248\u672c\u3002")),(0,o.kt)("p",null,"Winlin 2014.3"))}d.isMDXComponent=!0}}]);