(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"2e76":function(n,t,e){"use strict";var a=e("3aad"),o=e.n(a);o.a},"3aad":function(n,t,e){},"496d":function(n,t,e){"use strict";e.r(t);var a=e("76af"),o=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=o.a},"76af":function(n,t,e){"use strict";(function(n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=h(e("a34a")),i=h(e("69fe")),r=h(e("8930")),c=h(e("f384")),u=h(e("0b36")),f=h(e("aa37")),s=h(e("4af2")),l=h(e("01a8")),d=h(e("ca32")),g=e("14dd"),p=e("2f62");h(e("6278"));function h(n){return n&&n.__esModule?n:{default:n}}function m(n,t,e,a,o,i,r){try{var c=n[i](r),u=c.value}catch(f){return void e(f)}c.done?t(u):Promise.resolve(u).then(a,o)}function v(n){return function(){var t=this,e=arguments;return new Promise(function(a,o){var i=n.apply(t,e);function r(n){m(i,a,o,r,c,"next",n)}function c(n){m(i,a,o,r,c,"throw",n)}r(void 0)})}}function b(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.forEach(function(t){y(n,t,e[t])})}return n}function y(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var P=function(){return e.e("pages/components/footerExplain/footerExplain").then(e.bind(null,"accd"))},_={mixins:[g.miniProApi],components:{FooterExplain:P},computed:b({},(0,p.mapGetters)(["hasLogin","forcedLogin","userToken","userAvatarUrl","userInfo"])),watch:{},data:function(){return{flag:!1,name:"",bg:{my_bg:""},photo_png:i.default,set_png:r.default,card_png:c.default,achievement_png:u.default,record_png:f.default,forwardRight_png:s.default,help_png:l.default,invitation_png:d.default,pHeight:0,startY:0,scrollTop_refresh:0}},onLoad:function(){this.avaterPic=this.getAvaterPic()},onShow:function(){},onReady:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onPageScroll:function(){},onTabItemTap:function(){},methods:b({},(0,p.mapMutations)(["loginOut"]),{onComLoad:function(){var t=this;this.bg.my_bg?console.log(a("find首页背景图片已经下载过了"," at pages\\my\\my.vue:341")):n.downloadFile({url:"".concat(this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.my_bg),success:function(n){200===n.statusCode&&n.tempFilePath&&(console.log(a("99999999999",n," at pages\\my\\my.vue:328")),t.bg.my_bg=n.tempFilePath)},fail:function(n){}})},refreshPage:function(){},bindLogin:function(){this.navigatePage("../login/login?toPageUrl=../my/my&jumpType=1")},loginOut:function(){this.$store.dispatch("setUserToken",""),this.setStorage("userToken","")},getAvaterPic:function(){var n=v(o.default.mark(function n(){var t=this;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:this.getStorage("userInfo").then(function(n){n&&(t.photo_png=JSON.parse(n).headImg)});case 1:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),clickSetBtn:function(){this.navigatePage("../packageB/my/set/index")},clickLessons:function(){this.navigatePage("../packageB/my/signUpCard/signUpCard")},clickAchivement:function(){var n=v(o.default.mark(function n(){return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:this.navigatePage("../packageB/my/myAchievement/index");case 1:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),clickRecord:function(){this.navigatePage("../packageB/my/learnRecord/index")},clickHelp:function(){this.navigatePage("../packageB/my/help/index")},clickInvitation:function(){this.navigatePage("../packageB/my/inviteFriends/index")},formSubmit:function(){}})};t.default=_}).call(this,e("6e42")["default"],e("0de9")["default"])},b997:function(n,t,e){"use strict";e.r(t);var a=e("d2b0"),o=e("496d");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);e("2e76");var r=e("2877"),c=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"1974399b",null);t["default"]=c.exports},d2b0:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,a=(n._self._c,e("4af2"));n.$mp.data=Object.assign({},{$root:{m0:a}})},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})}},[["73ab","common/runtime","common/vendor"]]]);