import{d as A,g as u,o as r,c as E,k as b,e as p,w as D,f as c,u as e,E as g,T as i,i as h,b as m,t as _,l as f,a as F}from"./app.63c98814.js";const v={style:{"margin-bottom":"10px"}},T=A({__name:"base-use",setup(y){const n=[{type:"selection"},{type:"index",label:"\u5E8F\u53F7",width:70},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",formatter(s){return{0:"\u5973",1:"\u7537"}[s.gender]||"\u672A\u77E5"}},{label:"\u5E74\u9F84",prop:"age",sortable:!0},{label:"\u5C97\u4F4D",prop:"job"},{label:"\u4E2A\u4EBA\u4ECB\u7ECD",prop:"introduction",align:"left"}],a=[{name:"\u5C0F\u660E",gender:1,age:25,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u539F\u751FJS\uFF0C\u719F\u6089\u8BBE\u8BA1\u6A21\u5F0F\u3002"},{name:"\u5C0F\u7EA2",gender:0,age:28,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",introduction:"\u9AD8\u7EA7\u6D4B\u8BD5\u5DE5\u7A0B\u5E08\uFF0C6\u5E74\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u719F\u6089\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002"},{name:"\u5C0F\u519B",gender:1,age:32,job:"Java\u5DE5\u7A0B\u5E08",introduction:"\u8D44\u6DF1\u67B6\u6784\u5E08\uFF0C\u89E3\u51B3\u8FC7\u65E0\u6570\u7591\u96BE\u6742\u75C7\uFF0C\u64C5\u957F\u7CFB\u7EDF\u8BBE\u8BA1\u3002"}],o=u(),t=s=>{console.log(s)},C=()=>{o.value.clearSelection(),o.value.setScrollTop(100)};return(s,l)=>(r(),E(h,null,[b("div",v,[p(e(g),{onClick:l[0]||(l[0]=d=>C())},{default:D(()=>[c("clearSelection")]),_:1})]),p(e(i),{ref_key:"tableRef",ref:o,columns:n,data:a,onSelectionChange:t},{empty:D(()=>[c("null")]),erorr:D(()=>[c("erorr")]),_:1},512)],64))}}),B={style:{"margin-bottom":"10px"}},q=A({__name:"loading-error",setup(y){const n=u(!1),a=u(!1),o=[{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"}],t=[];return(C,s)=>(r(),E(h,null,[b("div",B,[p(e(g),{onClick:s[0]||(s[0]=l=>n.value=!n.value)},{default:D(()=>[c("\u5207\u6362loading")]),_:1}),p(e(g),{onClick:s[1]||(s[1]=l=>a.value=!a.value)},{default:D(()=>[c("\u5207\u6362error")]),_:1})]),p(e(i),{columns:o,data:t,loading:n.value,error:a.value},null,8,["loading","error"])],64))}}),j=A({__name:"update-delete",setup(y){const n=[{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"gender"},{label:"\u5E74\u9F84",rop:"age"},{label:"\u5C97\u4F4D",prop:"job"}],a=[{name:"\u5C0F\u660E",gender:"\u7537",age:18,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{name:"\u5C0F\u7EA2",gender:"\u5973",age:19,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08"},{name:"\u5C0F\u519B",gender:"\u7537",age:20,job:"Java\u5DE5\u7A0B\u5E08"}],o=()=>{console.log("click update")},t=()=>{console.log("click delete")};return(C,s)=>(r(),m(e(i),{columns:n,data:a,update:"",delete:"",onUpdate:s[0]||(s[0]=l=>o()),onDelete:s[1]||(s[1]=l=>t())}))}}),S=A({__name:"column-slot",setup(y){const n={0:"\u5973",1:"\u7537"},a={0:"warning",1:""},o=[{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",slot:"gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5C97\u4F4D",prop:"job"}],t=[{name:"\u5C0F\u660E",gender:1,age:18,job:"\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{name:"\u5C0F\u7EA2",gender:0,age:19,job:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08"},{name:"\u5C0F\u519B",gender:1,age:20,job:"Java\u5DE5\u7A0B\u5E08"}];return(C,s)=>(r(),m(e(i),{columns:o,data:t},{gender:D(({row:l})=>{var d;return[p(e(f),{type:(d=a[l.gender])!=null?d:"info"},{default:D(()=>[c(_(n[l.gender]||"\u672A\u77E5"),1)]),_:2},1032,["type"])]}),_:1}))}}),k=F("",5),x=F("",2),V=F("",2),J=F("",2),N=F("",11),P=JSON.parse('{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","link":"#\u4E3A\u4EC0\u4E48\u4F7F\u7528\uFF1F","children":[]},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"loading\u3001error\u72B6\u6001","slug":"loading\u3001error\u72B6\u6001","link":"#loading\u3001error\u72B6\u6001","children":[]},{"level":2,"title":"update\u3001delete","slug":"update\u3001delete","link":"#update\u3001delete","children":[]},{"level":2,"title":"TableColumn \u63D2\u69FD","slug":"tablecolumn-\u63D2\u69FD","link":"#tablecolumn-\u63D2\u69FD","children":[]},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027","link":"#\u5C5E\u6027","children":[{"level":3,"title":"TableColumn","slug":"tablecolumn","link":"#tablecolumn","children":[]}]},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6","link":"#\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD","link":"#\u63D2\u69FD","children":[]}],"relativePath":"component/table/index.md","lastUpdated":1667746042000}'),w={name:"component/table/index.md"},I=Object.assign(w,{setup(y){return(n,a)=>(r(),E("div",null,[k,p(T),x,p(q),V,p(j),J,p(S),N]))}});export{P as __pageData,I as default};