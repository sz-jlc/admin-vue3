import{d as A,o as r,b as E,w as i,f as d,t as b,u as D,j as u,g as f,c as m,k as q,e as c,E as v,i as j,a as F}from"./app.63c98814.js";const S=A({__name:"base-use",setup(y){const n=[{name:"\u5C0F\u660E",gender:1,age:25,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u539F\u751FJS\uFF0C\u719F\u6089\u8BBE\u8BA1\u6A21\u5F0F\u3002"},{name:"\u5C0F\u7EA2",gender:0,age:28,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\uFF0C6\u5E74\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002"},{name:"\u5C0F\u519B",gender:1,age:32,job:"Java\u5DE5\u7A0B\u5E08",introduction:"\u8D44\u6DF1\u67B6\u6784\u5E08\uFF0C\u89E3\u51B3\u8FC7\u65E0\u6570\u7591\u96BE\u6742\u75C7\uFF0C\u64C5\u957F\u7CFB\u7EDF\u8BBE\u8BA1\u3002"}],a={0:"\u5973",1:"\u7537"},t=Object.entries(a).map(([s,e])=>({value:+s,label:e})),l=[{label:"\u59D3\u540D",key:"name"},{label:"\u6027\u522B",key:"gender",component:"el-select",children:t.map(s=>({component:"el-option",attrs:s}))}],p=[{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",slot:"table-gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"},{label:"\u4E2A\u4EBA\u4ECB\u7ECD",prop:"introduction",align:"left"}],o=s=>{const{name:e,gender:C,pageSize:h,pageNum:B}=s;return console.log(s),new Promise(T=>{setTimeout(()=>{const _=n.filter(g=>e?g.name.includes(e):!0).filter(g=>C==null?!0:g.gender===C);T({list:_.slice((B-1)*h,B*h),total:_.length})},Math.random()*200)})};return(s,e)=>(r(),E(D(u),{filters:l,columns:p,"get-data":o,"filter-props":{columnCount:3}},{"table-gender":i(({row:C})=>[d(b(a[C.gender]),1)]),_:1}))}}),k={style:{"margin-bottom":"10px"}},P=A({__name:"manual-query",setup(y){const n=[{name:"\u5C0F\u660E",gender:1,age:25,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u539F\u751FJS\uFF0C\u719F\u6089\u8BBE\u8BA1\u6A21\u5F0F\u3002"},{name:"\u5C0F\u7EA2",gender:0,age:28,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\uFF0C6\u5E74\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002"},{name:"\u5C0F\u519B",gender:1,age:32,job:"Java\u5DE5\u7A0B\u5E08",introduction:"\u8D44\u6DF1\u67B6\u6784\u5E08\uFF0C\u89E3\u51B3\u8FC7\u65E0\u6570\u7591\u96BE\u6742\u75C7\uFF0C\u64C5\u957F\u7CFB\u7EDF\u8BBE\u8BA1\u3002"}],a=f(),t=[{label:"\u59D3\u540D",prop:"name"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"},{label:"\u4E2A\u4EBA\u4ECB\u7ECD",prop:"introduction",align:"left"}],l=()=>({list:n,total:n.length}),p=()=>{a.value.query()};return(o,s)=>(r(),m(j,null,[q("div",k,[c(D(v),{onClick:s[0]||(s[0]=e=>p())},{default:i(()=>[d("\u67E5\u8BE2")]),_:1})]),c(D(u),{ref_key:"proTableRef",ref:a,filters:[],columns:t,"get-data":l,"init-get":!1,"filter-props":{columnCount:3,defaultPageSize:2,pageSizes:[2,5,10]}},null,512)],64))}}),x=A({__name:"default-page-size",setup(y){const n=[{name:"\u5C0F\u660E",gender:1,age:25,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u539F\u751FJS\uFF0C\u719F\u6089\u8BBE\u8BA1\u6A21\u5F0F\u3002"},{name:"\u5C0F\u7EA2",gender:0,age:28,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\uFF0C6\u5E74\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002"},{name:"\u5C0F\u519B",gender:1,age:32,job:"Java\u5DE5\u7A0B\u5E08",introduction:"\u8D44\u6DF1\u67B6\u6784\u5E08\uFF0C\u89E3\u51B3\u8FC7\u65E0\u6570\u7591\u96BE\u6742\u75C7\uFF0C\u64C5\u957F\u7CFB\u7EDF\u8BBE\u8BA1\u3002"}],a=[{label:"\u59D3\u540D",prop:"name"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"},{label:"\u4E2A\u4EBA\u4ECB\u7ECD",prop:"introduction",align:"left"}],t=l=>{console.log(l);const{pageNum:p,pageSize:o}=l;return{list:n.slice((p-1)*o,p*o),total:n.length}};return(l,p)=>(r(),E(D(u),{ref:"proTableRef",filters:[{key:"a"}],columns:a,"get-data":t,"filter-props":{columnCount:3},"page-props":{defaultPageSize:2,pageSizes:[2,5,10]}},null,512))}}),J=A({__name:"local-page",setup(y){const n=[{name:"\u5C0F\u660E",gender:1,age:25,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u539F\u751FJS\uFF0C\u719F\u6089\u8BBE\u8BA1\u6A21\u5F0F\u3002"},{name:"\u5C0F\u7EA2",gender:0,age:28,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\uFF0C6\u5E74\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002"},{name:"\u5C0F\u519B",gender:1,age:32,job:"Java\u5DE5\u7A0B\u5E08",introduction:"\u8D44\u6DF1\u67B6\u6784\u5E08\uFF0C\u89E3\u51B3\u8FC7\u65E0\u6570\u7591\u96BE\u6742\u75C7\uFF0C\u64C5\u957F\u7CFB\u7EDF\u8BBE\u8BA1\u3002"}],a={0:"\u5973",1:"\u7537"},t=[{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",slot:"table-gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"},{label:"\u4E2A\u4EBA\u4ECB\u7ECD",prop:"introduction",align:"left"}],l=p=>{const{pageSize:o,pageNum:s}=p,e=n;return{list:e.slice((s-1)*o,s*o),total:e.length}};return(p,o)=>(r(),E(D(u),{filters:[],columns:t,"get-data":l,"filter-props":{columnCount:3},"page-props":{defaultPageSize:2,pageSizes:[2,5,10]}},{"table-gender":i(({row:s})=>[d(b(a[s.gender]),1)]),_:1}))}}),z=A({__name:"no-page",setup(y){const n=[{name:"\u5C0F\u660E",gender:1,age:25,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u539F\u751FJS\uFF0C\u719F\u6089\u8BBE\u8BA1\u6A21\u5F0F\u3002"},{name:"\u5C0F\u7EA2",gender:0,age:28,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\uFF0C6\u5E74\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002"},{name:"\u5C0F\u519B",gender:1,age:32,job:"Java\u5DE5\u7A0B\u5E08",introduction:"\u8D44\u6DF1\u67B6\u6784\u5E08\uFF0C\u89E3\u51B3\u8FC7\u65E0\u6570\u7591\u96BE\u6742\u75C7\uFF0C\u64C5\u957F\u7CFB\u7EDF\u8BBE\u8BA1\u3002"}],a={0:"\u5973",1:"\u7537"},t=[{label:"\u59D3\u540D",prop:"name"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"},{label:"\u4E2A\u4EBA\u4ECB\u7ECD",prop:"introduction",align:"left"}],l=()=>({list:n,total:n.length});return(p,o)=>(r(),E(D(u),{filters:[],columns:t,"get-data":l,"is-page":!1,"filter-props":{columnCount:3}},{"table-gender":i(({row:s})=>[d(b(a[s.gender]),1)]),_:1}))}}),N={style:{"margin-bottom":"10px"}},R=A({__name:"table-selection",setup(y){const n=[{name:"\u5C0F\u660E",gender:1,age:25,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u539F\u751FJS\uFF0C\u719F\u6089\u8BBE\u8BA1\u6A21\u5F0F\u3002"},{name:"\u5C0F\u7EA2",gender:0,age:28,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\uFF0C6\u5E74\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002"},{name:"\u5C0F\u519B",gender:1,age:32,job:"Java\u5DE5\u7A0B\u5E08",introduction:"\u8D44\u6DF1\u67B6\u6784\u5E08\uFF0C\u89E3\u51B3\u8FC7\u65E0\u6570\u7591\u96BE\u6742\u75C7\uFF0C\u64C5\u957F\u7CFB\u7EDF\u8BBE\u8BA1\u3002"}],a=f(),t=[{type:"selection"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"},{label:"\u4E2A\u4EBA\u4ECB\u7ECD",prop:"introduction",align:"left"}],l=()=>({list:n,total:n.length}),p=s=>{console.log(s)},o=()=>{a.value.clearSelection()};return(s,e)=>(r(),m(j,null,[q("div",N,[c(D(v),{onClick:e[0]||(e[0]=C=>o())},{default:i(()=>[d("clearSelection")]),_:1})]),c(D(u),{ref_key:"proTableRef",ref:a,filters:[],columns:t,"get-data":l,"filter-props":{columnCount:3},onSelectionChange:p},null,512)],64))}}),w=F("",6),V=F("",3),I=F("",2),M=F("",3),$=F("",3),O=F("",3),Q=F("",9),H=JSON.parse('{"title":"ProTable \u7B5B\u9009\u5206\u9875\u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","link":"#\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","children":[]},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"\u624B\u52A8\u67E5\u8BE2","slug":"\u624B\u52A8\u67E5\u8BE2","link":"#\u624B\u52A8\u67E5\u8BE2","children":[]},{"level":2,"title":"\u521D\u59CB\u9875\u9762\u5C3A\u5BF8","slug":"\u521D\u59CB\u9875\u9762\u5C3A\u5BF8","link":"#\u521D\u59CB\u9875\u9762\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u672C\u5730\u5206\u9875","slug":"\u672C\u5730\u5206\u9875","link":"#\u672C\u5730\u5206\u9875","children":[]},{"level":2,"title":"\u4E0D\u5206\u9875","slug":"\u4E0D\u5206\u9875","link":"#\u4E0D\u5206\u9875","children":[]},{"level":2,"title":"\u8868\u683C\u591A\u9009","slug":"\u8868\u683C\u591A\u9009","link":"#\u8868\u683C\u591A\u9009","children":[]},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027","link":"#\u5C5E\u6027","children":[]},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6","link":"#\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD","link":"#\u63D2\u69FD","children":[]}],"relativePath":"component/pro-table/index.md","lastUpdated":1667746042000}'),G={name:"component/pro-table/index.md"},K=Object.assign(G,{setup(y){return(n,a)=>(r(),m("div",null,[w,c(S),V,c(P),I,c(x),M,c(J),$,c(z),O,c(R),Q]))}});export{H as __pageData,K as default};
