(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"3dc1":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},4110:function(t,n,e){"use strict";e.r(n);var i=e("7b63"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"7b63":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("pages/components/m-input/m-input").then(e.bind(null,"10fc"))},o={components:{mInput:i},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{this.account,this.password,this.email;t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};n.default=o}).call(this,e("6e42")["default"])},b91c:function(t,n,e){"use strict";e.r(n);var i=e("3dc1"),o=e("4110");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("f700");var s=e("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"7bb50942",null);n["default"]=u.exports},d8df:function(t,n,e){},f700:function(t,n,e){"use strict";var i=e("d8df"),o=e.n(i);o.a}},[["2738","common/runtime","common/vendor"]]]);