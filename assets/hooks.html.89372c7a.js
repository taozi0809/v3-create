import{r as t,o,c,a as n,b as a,F as p,e as s,d as l}from"./app.e536b1c5.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"hooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hooks","aria-hidden":"true"},"#"),s(" Hooks")],-1),d=n("p",null,"Hooks \u662F\u4E00\u4E2A\u57FA\u4E8E Composition API \u7684\u5B9E\u7528\u51FD\u6570\u96C6\u5408\uFF0C\u4F7F\u7528 typescript \u5F00\u53D1\uFF0C\u6709\u7740\u826F\u597D\u7684\u4EE3\u7801\u63D0\u793A\u4F53\u9A8C\u3002",-1),h=s("\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u4EEC\u5047\u8BBE\u60A8\u5DF2\u7ECF\u719F\u6089 "),_={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},k=s("Vue 3 Composition API"),b=s(" \u7684\u57FA\u672C\u601D\u60F3\u3002\u5982\u679C\u4F60\u638C\u63E1 React \u53CA React Hooks \u57FA\u7840\u7528\u6CD5\u3002\u90A3\u4E48\u8FD9\u5BF9\u4F60\u6765\u8BF4\u662F\u5341\u5206\u53CB\u597D\u7684\u3002"),m=n("h2",{id:"\u5185\u7F6E-hooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5185\u7F6E-hooks","aria-hidden":"true"},"#"),s(" \u5185\u7F6E Hooks")],-1),f=n("h3",{id:"state",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#state","aria-hidden":"true"},"#"),s(" State")],-1),v=n("thead",null,[n("tr",null,[n("th",null,"Hook"),n("th",null,"\u8BF4\u660E"),n("th",null,"API")])],-1),g=n("td",null,"useDevice",-1),y=n("td",null,"\u67E5\u8BE2\u8BBE\u5907\u4FE1\u606F\uFF0C\u53EF\u7528\u4E8EPC\u3001\u79FB\u52A8\u7B49\u9002\u914D",-1),x={href:"/docs/hooks/state/useDevice.md",target:"_blank",rel:"noopener noreferrer"},w=s("\u8BE6\u60C5"),V=n("td",null,"useClipboard",-1),C=n("td",null,"\u5FEB\u6377\u6587\u672C\u590D\u5236\u529F\u80FD",-1),D={href:"/docs/hooks/ui/useClipboard.md",target:"_blank",rel:"noopener noreferrer"},H=s("\u8BE6\u60C5"),I=n("td",null,"useFullscreen",-1),E=n("td",null,"\u6D4F\u89C8\u5668\u5168\u5C4F\u7684\u5F00\u5173\u63A7\u5236",-1),F={href:"/docs/hooks/ui/useFullscreen.md",target:"_blank",rel:"noopener noreferrer"},N=s("\u8BE6\u60C5"),O=l(`<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>Hooks \u4E2D\u7684\u5927\u591A\u6570\u51FD\u6570\u90FD\u8FD4\u56DE\u4E00\u4E2A refs \u5BF9\u8C61\u6216\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ES6 \u7684\u89E3\u6784\u8BED\u6CD5\u6765\u83B7\u53D6\u4F60\u9700\u8981\u7684\u5185\u5BB9\u3002</p><p>\u4F60\u53EA\u9700\u8981\u5728 <code>@/hooks</code> \u4E2D\u5F15\u5165\u5B83\u5373\u53EF\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> useDevice <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useDevice&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5BF9\u8C61\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7528\u6CD5" aria-hidden="true">#</a> \u5BF9\u8C61\u7528\u6CD5</h2><p>\u5982\u679C\u60A8\u66F4\u559C\u6B22\u5C06\u5B83\u4EEC\u7528\u4F5C\u5BF9\u8C61\u5C5E\u6027\u6837\u5F0F\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528reactive(). \u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> device <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2>`,8),P=s("\u63A8\u8350\u4F7F\u7528 "),T={href:"https://github.com/vueuse/vueuse",target:"_blank",rel:"noopener noreferrer"},A=s("vueuse"),B=s("\uFF1A"),S=n("ul",null,[n("li",null,"\u4EA4\u4E92\u5F0F\u6587\u6863\u548C\u6F14\u793A"),n("li",null,"\u65E0\u7F1D\u8FC1\u79FB\uFF0C\u652F\u6301 Vue 2 \u4E0E Vue 3"),n("li",null,"tree shakable"),n("li",null,"\u4F7F\u7528 Typescript \u7F16\u5199")],-1);function L(R,j){const e=t("ExternalLinkIcon");return o(),c(p,null,[u,d,n("blockquote",null,[n("p",null,[h,n("a",_,[k,a(e)]),b])]),m,f,n("table",null,[v,n("tbody",null,[n("tr",null,[g,y,n("td",null,[n("a",x,[w,a(e)])])]),n("tr",null,[V,C,n("td",null,[n("a",D,[H,a(e)])])]),n("tr",null,[I,E,n("td",null,[n("a",F,[N,a(e)])])])])]),O,n("p",null,[P,n("a",T,[A,a(e)]),B]),S],64)}var G=r(i,[["render",L]]);export{G as default};