webpackJsonp([1],{Mvlh:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("+VlJ"),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"menu"},[s("router-link",{attrs:{to:"/"}},[this._v("首页")]),this._v(" "),s("router-link",{staticClass:"order-list",attrs:{to:"/orderList"}},[this._v("订单列表")])],1),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var n=a("C7Lr")({name:"App"},r,!1,function(t){a("yuhv")},"data-v-89b99f6e",null).exports,o=(a("a0pE"),a("KGCO")),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"home-button"},[s("li",[s("router-link",{attrs:{to:"/schoolList"}},[s("button",{staticClass:"btn btn-primary btn-lg btn-block"},[this._v("学校统购")])])],1),this._v(" "),s("li",[s("router-link",{attrs:{to:"/schoolList"}},[s("button",{staticClass:"btn btn-primary btn-lg btn-block"},[this._v("个人补丁")])])],1),this._v(" "),s("li",[s("router-link",{attrs:{to:"/schoolForm"}},[s("button",{staticClass:"btn btn-primary btn-lg btn-block"},[this._v("添加学校")])])],1),this._v(" "),s("li",[s("router-link",{attrs:{to:"/"}},[s("button",{staticClass:"btn btn-primary btn-lg btn-block"},[this._v("查询所有订单")])])],1)])},staticRenderFns:[]};var l=a("C7Lr")(null,i,!1,function(t){a("iL56")},"data-v-58fa6df5",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",{attrs:{method:"post",action:"/wechat/createschools"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("学校名称")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{name:"name",required:"",type:"text",id:"name"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"type"}},[t._v("学校类型")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{name:"type",id:"type"}},[a("option",{attrs:{value:"primary"}},[t._v("小学")]),t._v(" "),a("option",{attrs:{value:"middle"}},[t._v("初中")]),t._v(" "),a("option",{attrs:{value:"high"}},[t._v("高中")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"unified"}},[t._v("服装类型")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{name:"is_unified",id:"unified"}},[a("option",{attrs:{value:"1"}},[t._v("学校统购+个人补丁")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("个人补丁")])])]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v("添加学校")])])}]},c=a("C7Lr")(null,v,!1,null,null,null).exports,_=a("aozt"),u=a.n(_);var p={data:function(){return{schools:{primary:[{id:"1",name:"白塔岭小学"}],middle:[{id:"2",name:"白塔岭小学"}],high:[]}}},created:function(){this.getList()},methods:{getList:function(){u.a.get("/wechat/schools").then(function(t){console.log(t.data)}).catch(function(t){console.log(t)}),u.a.get("/wechat/orders").then(function(t){console.log(t.data)}).catch(function(t){console.log(t)}),u.a.get("/wechat/students").then(function(t){console.log(t.data)}).catch(function(t){console.log(t)})}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"content"},[a("h3",{staticClass:"bg-primary title"},[t._v("小学")]),t._v(" "),t._l(t.schools.primary,function(s){return a("router-link",{attrs:{to:"/studentList/"+s.id}},[t._v("\n          "+t._s(s.name)+"\n      ")])}),t._v(" "),a("h3",{staticClass:"bg-primary title"},[t._v("初中")]),t._v(" "),t._l(t.schools.middle,function(s){return a("router-link",{attrs:{to:"/studentList/"+s.id}},[t._v("\n          "+t._s(s.name)+"\n      ")])}),t._v(" "),a("h3",{staticClass:"bg-primary title"},[t._v("高中")])],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("form",{staticClass:"form-inline"},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"请填写学校名称"}}),this._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[this._v("搜索")])])])])])}]};var m=a("C7Lr")(p,d,!1,function(t){a("Mvlh")},"data-v-3e4d3288",null).exports,f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"content"},[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"..."}},[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/studentForm"}},[t._v("添加学生")]),t._v(" "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[t._v("重新选择学校")])],1)]),t._v(" "),a("div",{staticClass:"content"},[a("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),a("tbody",t._l(t.students,function(s,e){return a("tr",[a("td",[t._v(t._s(e+1))]),t._v(" "),a("td",[t._v(t._s(s.name))]),t._v(" "),a("td",[t._v(t._s(s.grade))]),t._v(" "),a("td",[t._v(t._s(s.clazz))]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/"}},[t._v("修改")])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:"/orderForm"}},[t._v("确认")])],1)])}),0)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("姓名")]),t._v(" "),a("th",[t._v("年级")]),t._v(" "),a("th",[t._v("班级")]),t._v(" "),a("th",[t._v("修改")]),t._v(" "),a("th",[t._v("确认")])])])}]},h=a("C7Lr")({data:function(){return{students:[{name:"小明",grade:1,clazz:2}]}}},f,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("form",{attrs:{action:"/wechat/createstudent",method:"post"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("学生姓名")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{name:"name",required:"",type:"text",id:"name",placeholder:"请填写学生姓名"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[t._v("家长联系方式")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{name:"parent_tel",pattern:"[0-9]{11}",required:"",type:"text",id:"tel",placeholder:"请填写家长电话"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"sex"}},[t._v("性别")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{name:"sex",id:"sex"}},[a("option",{attrs:{value:"男"}},[t._v("男")]),t._v(" "),a("option",{attrs:{value:"女"}},[t._v("女")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"grade"}},[t._v("请选择年级")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{name:"grade",id:"grade"}},[a("option",{attrs:{value:"1"}},[t._v("一年级")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("二年级")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("三年级")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("四年级")]),t._v(" "),a("option",{attrs:{value:"5"}},[t._v("五年级")]),t._v(" "),a("option",{attrs:{value:"6"}},[t._v("六年级")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"clazz"}},[t._v("请选择班级")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{name:"clazz",id:"clazz"}},[a("option",{attrs:{value:"1"}},[t._v("1班")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("2班")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("3班")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("4班")]),t._v(" "),a("option",{attrs:{value:"5"}},[t._v("5班")]),t._v(" "),a("option",{attrs:{value:"6"}},[t._v("6班")]),t._v(" "),a("option",{attrs:{value:"7"}},[t._v("7班")]),t._v(" "),a("option",{attrs:{value:"8"}},[t._v("8班")]),t._v(" "),a("option",{attrs:{value:"9"}},[t._v("9班")]),t._v(" "),a("option",{attrs:{value:"10"}},[t._v("10班")])])]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v("添加学生")])])])}]},C=a("C7Lr")(null,b,!1,null,null,null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("form",{attrs:{action:"/wechat/ordercreate",method:"post"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"school"}},[t._v("学校")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",disabled:"",id:"school",value:"白塔岭小学test"}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"clothes_type"}},[t._v("服装类型")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"clothes_type",id:"clothes_type"}},[e("option",{attrs:{value:"冬装"}},[t._v("冬装")]),t._v(" "),e("option",{attrs:{value:"村秋装"}},[t._v("春秋装")])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"clothes_size"}},[t._v("尺寸")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"clothes_size",id:"clothes_size"}},[e("option",{attrs:{value:"130"}},[t._v("130")]),t._v(" "),e("option",{attrs:{value:"135"}},[t._v("135")]),t._v(" "),e("option",{attrs:{value:"140"}},[t._v("140")]),t._v(" "),e("option",{attrs:{value:"145"}},[t._v("145")]),t._v(" "),e("option",{attrs:{value:"150"}},[t._v("150")]),t._v(" "),e("option",{attrs:{value:"155"}},[t._v("155")]),t._v(" "),e("option",{attrs:{value:"160"}},[t._v("160")]),t._v(" "),e("option",{attrs:{value:"165"}},[t._v("165")]),t._v(" "),e("option",{attrs:{value:"170"}},[t._v("170")]),t._v(" "),e("option",{attrs:{value:"175"}},[t._v("175")]),t._v(" "),e("option",{attrs:{value:"180"}},[t._v("180")]),t._v(" "),e("option",{attrs:{value:"185"}},[t._v("185")]),t._v(" "),e("option",{attrs:{value:"特体"}},[t._v("特体")])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"body"}},[t._v("套系")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{name:"body",id:"body"}},[e("option",{attrs:{value:"全套"}},[t._v("全套")]),t._v(" "),e("option",{attrs:{value:"上衣"}},[t._v("上衣")]),t._v(" "),e("option",{attrs:{value:"裤子"}},[t._v("裤子")])])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"quantity"}},[t._v("数量")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{name:"quantity",required:"",type:"number",id:"quantity"}})]),t._v(" "),e("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v("立即购买")])]),t._v(" "),e("p",{staticClass:"info info-first"},[t._v("校服为预定，生产完成后会短信通知您，请核实手机号是否正确.")]),t._v(" "),e("p",{staticClass:"info"},[t._v("个人补订的不送学校，可以自取或邮寄，邮费自付。")]),t._v(" "),e("p",{staticClass:"info"},[t._v("自取地址：开发区华山中路泾河道5号奥拉制衣。")]),t._v(" "),e("p",{staticClass:"info"},[t._v("工作时间：周一至周六早上8:00至下午4:30.")]),t._v(" "),e("p",{staticClass:"info"},[t._v("如有疑问请拨打：123456789")]),t._v(" "),e("p",{staticClass:"info"},[t._v("注：此学校棉服只有棉衣没有棉裤。建议棉服比秋装选大一码。")]),t._v(" "),e("img",{staticClass:"desc",attrs:{src:a("opXN"),alt:""}})])}]},y=a("C7Lr")(null,g,!1,null,null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("form",{attrs:{action:"/wechat/addresscreate",method:"post"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"type"}},[t._v("邮寄 或 自取")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{name:"state",id:"type"}},[a("option",{attrs:{value:"1"}},[t._v("邮寄")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("自取")])])]),t._v(" "),a("div",{staticClass:"address-info"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("收件人")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{name:"name",required:"",type:"text",id:"name"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[t._v("电话")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{name:"tel",required:"",type:"number",id:"tel"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[t._v("收货地址")]),t._v(" "),a("textarea",{staticClass:"form-control",attrs:{name:"address",required:"",id:"address",rows:"5",placeholder:"请填写收货地址"}})])]),t._v(" "),a("div",{staticClass:"text-info"},[a("h5",[t._v("自取时间")]),t._v(" "),a("ul",[a("li",[t._v("周一至周六")]),t._v(" "),a("li",[t._v("早8点到下午4:30")]),t._v(" "),a("li",[t._v("节假日除外")]),t._v(" "),a("li",[t._v("地址：~~~~~~~~")])])]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v("确定")])])])}]},L=a("C7Lr")(null,k,!1,null,null,null).exports,x={methods:{del:function(){window.confirm("是否删除？")&&alert("删除成功")}}},F={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"order-item"},[a("p",{staticClass:"bg-primary title"},[a("router-link",{attrs:{to:"/"}},[t._v("订单编号：123123123")]),t._v(" "),a("span",{staticClass:"del",on:{click:t.del}},[t._v("删除")])],1),t._v(" "),a("ul",{staticClass:"info"},[a("li",[t._v("下单时间：2018-9-9")]),t._v(" "),a("li",[t._v("学校信息：白塔岭小学")]),t._v(" "),a("li",[t._v("\n                学生信息：\n                小明\n                男\n                1年级 \n                2班\n            ")]),t._v(" "),a("li",[t._v("商品信息：100元")]),t._v(" "),a("li",[t._v("商品状态：未支付")]),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("确认收货地址")])],1)])])])},staticRenderFns:[]};var E=a("C7Lr")(x,F,!1,function(t){a("PEhQ")},"data-v-a5db04cc",null).exports;e.a.use(o.a);var z=new o.a({routes:[{path:"/",name:"Home",component:l},{path:"/schoolForm",name:"SchoolForm",component:c},{path:"/schoolList",name:"SchoolList",component:m},{path:"/studentList/:id",name:"studentList",component:h},{path:"/studentForm",name:"studentForm",component:C},{path:"/orderForm",name:"OrderForm",component:y},{path:"/addressForm",name:"AddressForm",component:L},{path:"/orderList",name:"OrderList",component:E}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:z,components:{App:n},template:"<App/>"})},PEhQ:function(t,s){},a0pE:function(t,s){},iL56:function(t,s){},opXN:function(t,s,a){t.exports=a.p+"static/img/size.5a88524.png"},yuhv:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.66a8374d5b6fa047ca89.js.map