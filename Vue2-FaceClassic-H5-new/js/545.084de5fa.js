"use strict";(self["webpackChunkindex0801"]=self["webpackChunkindex0801"]||[]).push([[545],{7545:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail-page"},[e("van-nav-bar",{attrs:{"left-text":"返回",fixed:"",title:"面经详情"},on:{"click-left":function(e){return t.$router.back()}}}),e("header",{staticClass:"header"},[e("h1",[t._v(t._s(t.article.stem))]),e("p",[t._v(" "+t._s(t.article.createdAt)+" | "+t._s(t.article.views)+" 浏览量 | "+t._s(t.article.like)+" 点赞数 ")]),e("p",[e("img",{attrs:{src:t.article.avatar,alt:""}}),e("span",[t._v("作者:"+t._s(t.article.createor))])])]),e("main",{staticClass:"body",domProps:{innerHTML:t._s(t.article.content)}}),e("div",{staticClass:"opt"},[e("van-icon",{class:{active:t.article.likeFlag},attrs:{name:"like-o"},on:{click:t.lToggle}}),e("van-icon",{class:{active:t.article.collectFlag},attrs:{name:"star-o"},on:{click:t.cToggle}})],1)],1)},s=[],c=a(4754),r={name:"detail-page",data(){return{article:{}}},async created(){const t=await(0,c.jv)(this.$route.params.id);this.article=t.data},methods:{async cToggle(){await(0,c.km)(this.article.id),this.article.collectFlag=!this.article.collectFlag,this.article.collectFlag?this.$toast.success("收藏成功"):this.$toast.success("取消收藏")},async lToggle(){await(0,c.f)(this.article.id),this.article.likeFlag=!this.article.likeFlag,this.article.likeFlag?this.$toast.success("点赞成功"):this.$toast.success("点赞收藏")}}},l=r,n=a(1656),o=(0,n.A)(l,i,s,!1,null,"3ee1c1bc",null),p=o.exports},4754:function(t,e,a){a.d(e,{AW:function(){return n},GE:function(){return s},f:function(){return r},f0:function(){return o},jv:function(){return c},km:function(){return l}});var i=a(5067);const s=t=>i.A.get("/h5/interview/query",{params:t}),c=t=>i.A.get("/h5/interview/show",{params:{id:t}}),r=t=>(0,i.A)({url:"/h5/interview/opt",data:{id:t,optType:1},method:"post"}),l=t=>(0,i.A)({url:"/h5/interview/opt",data:{id:t,optType:2},method:"post"}),n=t=>i.A.get("/h5/interview/opt/list",{params:{page:t.page,pageSize:t.pageSize,optType:2}}),o=t=>i.A.get("/h5/interview/opt/list",{params:{page:t.page,pageSize:t.pageSize,optType:1}})}}]);
//# sourceMappingURL=545.084de5fa.js.map