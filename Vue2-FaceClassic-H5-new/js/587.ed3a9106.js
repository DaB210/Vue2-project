"use strict";(self["webpackChunkindex0801"]=self["webpackChunkindex0801"]||[]).push([[587],{9587:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-page"},[t("van-nav-bar",{attrs:{title:"面经登录"}}),t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),t("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1),t("router-link",{staticClass:"link",attrs:{to:"/register"}},[e._v("没有账号，去注册")])],1)},a=[],r=(s(4114),s(2549)),u=s(2272),i={name:"LoginPage",data(){return{username:"",password:""}},methods:{async onSubmit(e){const t=await(0,r.iD)(e);this.$toast.success("登录成功"),(0,u.WG)(t.data.token),this.$router.push("/article")}}},o=i,l=s(1656),c=(0,l.A)(o,n,a,!1,null,"4ade2892",null),d=c.exports},2549:function(e,t,s){s.d(t,{iD:function(){return r},kz:function(){return a},ug:function(){return u}});var n=s(5067);const a=e=>n.A.post("/h5/user/register",e),r=e=>n.A.post("/h5/user/login",e),u=()=>(0,n.A)("/h5/user/currentUser")}}]);
//# sourceMappingURL=587.ed3a9106.js.map