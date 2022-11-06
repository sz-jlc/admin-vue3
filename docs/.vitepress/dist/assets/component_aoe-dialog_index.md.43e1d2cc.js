import{_ as t,o as d,c as e,a as r}from"./app.63c98814.js";const g=JSON.parse('{"title":"AoeDialog \u65B0\u589E\u6216\u7F16\u8F91\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","link":"#\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","children":[]},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027","link":"#\u5C5E\u6027","children":[]},{"level":2,"title":"FilterItem","slug":"filteritem","link":"#filteritem","children":[]},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6","link":"#\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD","link":"#\u63D2\u69FD","children":[]}],"relativePath":"component/aoe-dialog/index.md","lastUpdated":1667746042000}'),a={name:"component/aoe-dialog/index.md"},l=r('<h1 id="aoedialog-\u65B0\u589E\u6216\u7F16\u8F91\u5F39\u7A97" tabindex="-1">AoeDialog \u65B0\u589E\u6216\u7F16\u8F91\u5F39\u7A97 <a class="header-anchor" href="#aoedialog-\u65B0\u589E\u6216\u7F16\u8F91\u5F39\u7A97" aria-hidden="true">#</a></h1><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F" aria-hidden="true">#</a></h2><ul><li>\u91C7\u7528JS\u914D\u7F6E\u65B9\u5F0F\u751F\u6210\u7B5B\u9009\u8868\u5355\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4F1A\u6BD4\u5199html\u7A0D\u5FAE\u65B9\u4FBF\u4E00\u70B9\u70B9</li><li>\u81EA\u52A8\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u9075\u5FAA\u5F53\u524DERP<strong>\u6BCF\u884C5\u4E2A\u8868\u5355\u5143\u7D20</strong>\u7684\u89C4\u5219\uFF0C\u540C\u65F6<strong>\u63D0\u4F9B\u4E86\u53C2\u6570\u914D\u7F6E\u8BE5\u9879</strong></li><li>\u63D0\u4F9B\u4E86<code>trim</code>\u914D\u7F6E\uFF0C\u8F93\u5165\u6846\u9ED8\u8BA4\u4F1A\u88ABtrim\u5904\u7406</li><li>\u63D0\u4F9B\u4E86<code>transofrm</code>\u914D\u7F6E\uFF0C\u6709\u65F6\u8868\u5355\u5143\u7D20\u7ED1\u5B9A\u7684\u503C\u5E76\u4E0D\u662F\u641C\u7D22\u7684\u503C\uFF0C\u6BD4\u5982\u65E5\u671F\u9009\u62E9\u5668</li><li>\u63D0\u4F9B\u4E86<code>enterQuery</code>\u914D\u7F6E\uFF08\u56DE\u8F66\u89E6\u53D1\u641C\u7D22\uFF09\uFF0C\u9ED8\u8BA4\u5F00\u542F</li><li>\u8868\u5355\u5143\u7D20\u63D0\u4F9B\u4E86\u7F3A\u7701\u7684<code>placeholder</code></li><li>\u8868\u5355\u5143\u7D20\u9ED8\u8BA4\u4F20\u9012\u4E86<code>clearable</code></li><li>\u963B\u6B62\u4E86\u8868\u5355\u7684\u9ED8\u8BA4\u4E8B\u4EF6\uFF0C\u907F\u514D\u5F53\u53EA\u6709\u4E00\u4E2A\u8868\u5355\u5143\u7D20\uFF0C\u56DE\u8F66\u65F6\u5BFC\u81F4\u9875\u9762\u5237\u65B0</li></ul><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table class="base-table props-table"><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td>filters</td><td>\u7B5B\u9009\u9879\u5217\u8868</td><td>FilterItem[]</td><td>-</td><td>-</td><td>\u662F</td></tr><tr><td>columnCount</td><td>\u6BCF\u884C\u591A\u5C11\u4E2A\u8868\u5355\u5143\u7D20</td><td>number</td><td>-</td><td>5</td><td>\u5426</td></tr></tbody></table><h2 id="filteritem" tabindex="-1">FilterItem <a class="header-anchor" href="#filteritem" aria-hidden="true">#</a></h2><table class="base-table props-table"><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td>component</td><td>\u7EC4\u4EF6</td><td>string</td><td>-</td><td>el-input</td><td>\u5426</td></tr><tr><td>key</td><td> \u7ED1\u5B9A\u5B57\u6BB5</td><td>string | string[]</td><td>-</td><td>-</td><td>\u662F</td></tr><tr><td>value</td><td> \u521D\u59CB\u503C</td><td>any</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>label</td><td>\u8868\u5355label</td><td>string</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u5F53\u524D\u4EC5\u6709\u4E00\u4E2ArangeTime</td><td>string</td><td>rangeTime</td><td>-</td><td>\u5426</td></tr><tr><td>attrs</td><td>\u7EC4\u4EF6\u5C5E\u6027</td><td>object</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>events</td><td>\u7EC4\u4EF6\u4E8B\u4EF6</td><td>object</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>slot</td><td>\u63D2\u69FD</td><td>string</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>trim</td><td>\u662F\u5426\u5BF9\u67E5\u8BE2\u503C\u8FDB\u884Ctrim\u5904\u7406</td><td>boolean</td><td>-</td><td>true</td><td>\u5426</td></tr><tr><td>transform</td><td>\u67E5\u8BE2\u503C\u8F6C\u6362\u51FD\u6570</td><td>(value: any) =&gt; any</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>flatTransform</td><td>\u662F\u5426\u62C9\u5E73\u8F6C\u6362\u67E5\u8BE2\u503C\uFF0C\u5F53transform\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u65F6\u6709\u7528</td><td>boolean</td><td>-</td><td>false</td><td>\u5426</td></tr><tr><td>enterQuery</td><td>\u56DE\u8F66\u65F6\u662F\u5426\u89E6\u53D1\u67E5\u8BE2</td><td>boolean</td><td>-</td><td>true</td><td>\u5426</td></tr><tr><td>clearable</td><td>\u8868\u5355\u503C\u662F\u5426\u53EF\u6E05\u9664</td><td>boolean</td><td>-</td><td>true</td><td>\u5426</td></tr><tr><td>children</td><td>\u5B50\u5143\u7D20\uFF0C\u901A\u5E38\u53EF\u7528\u6765\u5E94\u5BF9select\u7EC4\u4EF6</td><td>object</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>children.component</td><td> \u5B50\u5143\u7D20\u7684\u7EC4\u4EF6\u540D</td><td>string</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>children.content</td><td>\u5B50\u5143\u7D20\u7684\u5185\u5BB9</td><td>string</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>children.render</td><td>\u5B50\u5143\u7D20\u7684render\u51FD\u6570\uFF0C\u9700\u8981\u8FD4\u56DE\u4E00\u4E2AVNode</td><td>(bindForm?: object) =&gt; VNode</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>children.attrs</td><td>\u5B50\u5143\u7D20\u7684\u5C5E\u6027</td><td>object</td><td>-</td><td>-</td><td>\u5426</td></tr><tr><td>children.events</td><td>\u5B50\u5143\u7D20\u7684\u4E8B\u4EF6</td><td>object</td><td>-</td><td>-</td><td>\u5426</td></tr></tbody></table><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><table class="base-table methods-table"><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>query</td><td>\u67E5\u8BE2</td><td><ul class="m-0"><li>queryNow(\u662F\u5426\u6267\u884C\u67E5\u8BE2\uFF0C\u4F1A\u4F20\u9012\u7ED9query\u4E8B\u4EF6\u4F5C\u4E3A\u56DE\u8C03\u53C2\u6570)</li></ul></td></tr><tr><td>reset</td><td>\u91CD\u7F6E</td><td><ul class="m-0"><li>queryNow(\u662F\u5426\u6267\u884C\u67E5\u8BE2\uFF0C\u4F1A\u4F20\u9012\u7ED9reset\u4E8B\u4EF6\u4F5C\u4E3A\u56DE\u8C03\u53C2\u6570)</li></ul></td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table class="base-table events-table"><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>query</td><td>\u89E6\u53D1\u67E5\u8BE2\u65F6\uFF0C\u4F1A\u5728\u8F93\u5165\u6846\u56DE\u8F66\u3001\u70B9\u51FB\u67E5\u8BE2\u3001\u5916\u90E8\u8C03\u7528query\u65B9\u6CD5\u65F6\u89E6\u53D1</td><td><ul class="m-0"><li>queryParams(\u67E5\u8BE2\u53C2\u6570)</li><li>queryNow(\u662F\u5426\u6267\u884C\u67E5\u8BE2\uFF0C\u901A\u8FC7query\u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570)</li></ul></td></tr><tr><td>reset</td><td>\u89E6\u53D1\u91CD\u7F6E\u65F6\uFF0C\u4F1A\u5728\u70B9\u51FB\u91CD\u7F6E\u3001\u5916\u90E8\u8C03\u7528reset\u65B9\u6CD5\u65F6\u89E6\u53D1</td><td><ul class="m-0"><li>queryParams(\u67E5\u8BE2\u53C2\u6570)</li><li>queryNow(\u662F\u5426\u6267\u884C\u67E5\u8BE2\uFF0C\u901A\u8FC7reset\u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570)</li></ul></td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h2><table class="base-table slots-table"><thead><tr><th>\u63D2\u69FD</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>-</td></tr></tbody></table>',14),i=[l];function h(n,o,s,c,b,u){return d(),e("div",null,i)}const y=t(a,[["render",h]]);export{g as __pageData,y as default};
