(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uniapp-kantboot/components/kt-nav-bar/kt-nav-bar"],{3889:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,!this.icon&&this.isHasBack?this.$kt.file.byPath("image/icon/exit.svg"):null),n=this.icon||this.isHasBack?null:this.$kt.file.byPath("image/icon/exit.svg");this.$mp.data=Object.assign({},{$root:{g0:e,g1:n}})},a=[]},"5a71":function(t,e,n){"use strict";var i=n("fc51"),a=n.n(i);a.a},"6e36":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{highlight:{type:Boolean,default:!1},title:{type:String,default:""},backgroundColor:{type:String,default:"#fff"},icon:{type:String,default:""},borderRadius:{type:String,default:"0"}},data:function(){return{statusBarHeight:t.getSystemInfoSync().statusBarHeight,navHeight:48,menuButton:n.getMenuButtonBoundingClientRect(),isHasBack:!1,slotHeight:0}},created:function(){this.navHeight=44,this.navHeight=-1!=t.getSystemInfoSync().system.indexOf("ios")?44:48;var e=getCurrentPages();e.length>1?this.isHasBack=!0:this.isHasBack=!1},mounted:function(){this.createSlotHeight()},methods:{createSlotHeight:function(){var e=this;t.createSelectorQuery().in(this).select("#slot").boundingClientRect((function(t){e.slotHeight=t.height,console.log(e.slotHeight)})).exec()},getHeight:function(){return this.statusBarHeight+this.navHeight},toBack:function(){t.navigateBack()},toHome:function(){t.navigateTo({url:"/pages/body/static"})}}};e.default=i}).call(this,n("543d")["default"],n("bc2e")["default"])},a7a4:function(t,e,n){"use strict";n.r(e);var i=n("6e36"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},dcfa:function(t,e,n){"use strict";n.r(e);var i=n("3889"),a=n("a7a4");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5a71");var s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"afbc1fa0",null,!1,i["a"],void 0);e["default"]=u.exports},fc51:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uniapp-kantboot/components/kt-nav-bar/kt-nav-bar-create-component',
    {
        'uni_modules/uniapp-kantboot/components/kt-nav-bar/kt-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dcfa"))
        })
    },
    [['uni_modules/uniapp-kantboot/components/kt-nav-bar/kt-nav-bar-create-component']]
]);