"use strict";(self["webpackChunkindex0801"]=self["webpackChunkindex0801"]||[]).push([[249],{4249:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"like-page"},[e("van-nav-bar",{attrs:{fixed:"",title:"我的点赞"}}),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return e("ArticleItem",{key:t.id,attrs:{item:t}})})),1)],1)},a=[],r=(i(4114),i(4754)),s={name:"LikePage",data(){return{list:[],loading:!1,finished:!1,page:1}},methods:{async onLoad(){const t=await(0,r.f0)({page:this.page});this.list.push(...t.data.rows),this.loading=!1,this.page++,this.page>t.data.pageTotal&&(this.finished=!0)}}},o=s,p=i(1656),u=(0,p.A)(o,n,a,!1,null,"4079a8f0",null),d=u.exports},4754:function(t,e,i){i.d(e,{AW:function(){return p},GE:function(){return a},f:function(){return s},f0:function(){return u},jv:function(){return r},km:function(){return o}});var n=i(5067);const a=t=>n.A.get("/h5/interview/query",{params:t}),r=t=>n.A.get("/h5/interview/show",{params:{id:t}}),s=t=>(0,n.A)({url:"/h5/interview/opt",data:{id:t,optType:1},method:"post"}),o=t=>(0,n.A)({url:"/h5/interview/opt",data:{id:t,optType:2},method:"post"}),p=t=>n.A.get("/h5/interview/opt/list",{params:{page:t.page,pageSize:t.pageSize,optType:2}}),u=t=>n.A.get("/h5/interview/opt/list",{params:{page:t.page,pageSize:t.pageSize,optType:1}})}}]);
//# sourceMappingURL=249.fc728e88.js.map