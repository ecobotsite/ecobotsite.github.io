(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],h=0,p=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("d4ec"),s=n("262e"),c=n("2caf"),u=n("9ab4"),l=n("60a3"),h=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(l["b"]);h=u["a"]([Object(l["a"])({components:{}})],h);var p=h,f=p,d=(n("034f"),n("2877")),m=Object(d["a"])(f,a,o,!1,null,null,null),v=m.exports,b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",[n("label",{attrs:{for:"name"}},[t._v("Pick station")]),n("select",{attrs:{name:"station",id:"stations"},on:{change:function(e){return t.newStation(e)}}},t._l(t.stationList,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.city)+" - "+t._s(e.stationName))])})),0),n("VueCtkDateTimePicker",{attrs:{label:"Оберіть дату початку"},model:{value:t.dateFromChoose,callback:function(e){t.dateFromChoose=e},expression:"dateFromChoose"}}),n("VueCtkDateTimePicker",{attrs:{label:"Оберіть дату кінця"},model:{value:t.dateToChoose,callback:function(e){t.dateToChoose=e},expression:"dateToChoose"}}),n("button",{on:{click:t.refresh}},[t._v(" Оновити ")])],1),n("charts")],1)},x=[],y=(n("accc"),n("0d03"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),w=n("bee2"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loadingState.isDataLoading?t._e():n("div",{staticClass:"charts"},t._l(6,(function(e){return n("highcharts",{key:e,attrs:{constructorType:"stockChart",options:t.chartOptions[e-1]}})})),1)},j=[],k=(n("4160"),n("159b"),n("99af"),n("d3b7"),n("25f0"),n("bc3a")),S=n.n(k),D=function(){function t(){var e=this;Object(i["a"])(this,t),this.User={},this.IsLogged=!1,this._axiosClient=S.a.create({baseURL:"https://33bo49db5l.execute-api.eu-central-1.amazonaws.com"}),this._axiosClient.interceptors.response.use((function(t){return e.ok(t)}),(function(t){}))}return Object(w["a"])(t,[{key:"get",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this._axiosClient.get(e,n));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this._axiosClient.post(e,n,r));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n,r){return t.apply(this,arguments)}return e}()},{key:"ok",value:function(t){return t}}]),t}(),_=new D;function A(t){var e=new Date(t),n=""+(e.getMonth()+1),r=""+e.getDate(),a=e.getFullYear(),o=e.getHours().toString(),i=e.getMinutes().toString(),s=e.getSeconds().toString();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),o.length<2&&(o="0"+o),i.length<2&&(i="0"+i),s.length<2&&(s="0"+s),"".concat(a,"-").concat(n,"-").concat(r,"T").concat(o,":").concat(i,":").concat(s,"Z")}var C=function(){function t(){Object(i["a"])(this,t),this.repoAxios=_}return Object(w["a"])(t,[{key:"getData",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.repoAxios.get("/Measurement",{params:{From:A(n),To:A(r),LocationId:e}}));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n,r){return t.apply(this,arguments)}return e}()},{key:"getLocations",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.repoAxios.get("/Location/List"));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),P=n("4452"),T=n.n(P),M=n("ea7f"),R=n.n(M),L=new r["a"];function F(t){var e=new Date;return e.setDate(e.getDate()-t),e}var $=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.dataTime=new Date,t.loadingState={isDataLoading:!0},t.dataService=new C,t.chartOptions=[{title:{text:"PM 2.5/PM 10"},yAxis:[{title:{text:"PM 2.5"}},{title:{text:"PM 10"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"PM2.5",data:[],color:"#FF530D"},{turboThreshold:5e3,yAxis:1,name:"PM10",data:[]}]},{title:{text:"PM 2.5"},yAxis:[{title:{text:"PM2.5"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"PM2.5",data:[]}]},{title:{text:"PM 10"},yAxis:[{title:{text:"PM10"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"PM10",data:[],color:"#FF530D"}]},{title:{text:"Температура"},yAxis:[{title:{text:"Температура Celsium"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"Температура Celsium",data:[],color:"#BA55D3"}]},{title:{text:"Вологість"},yAxis:[{title:{text:"Вологість"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"Вологість",data:[],color:"#4682B4"}]},{title:{text:"Тиск (гПа)"},yAxis:[{title:{text:"Тиск (гПа)"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"Тиск (гПа)",data:[],color:"#FF7F50"}]}],t}return Object(w["a"])(n,[{key:"created",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return L.$on("extremes-changed",(function(t){R.a.charts.forEach((function(e){e&&e.index!==t.chartId&&e.xAxis[0].setExtremes(t.min,t.max)}))})),L.$on("refresh",function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,e.loadData(n.id,n.from,n.to);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=4,this.loadData("1569",F(2),this.dataTime);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadData",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e,n,r){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingState.isDataLoading=!0,t.next=3,this.dataService.getData(e,n,r).then((function(t){a.measures=t.data,console.log(a.measures),console.log(a.measures),a.loadingState.isDataLoading=!1,a.chartOptions[0].series[0].data=a.measures.pm25,a.chartOptions[0].series[1].data=a.measures.pm10,a.chartOptions[1].series[0].data=a.measures.pm25,a.chartOptions[2].series[0].data=a.measures.pm10,a.chartOptions[3].series[0].data=a.measures.temperature,a.chartOptions[4].series[0].data=a.measures.humidity,a.chartOptions[5].series[0].data=a.measures.pressure,console.log(a.chartOptions[5].series[0].data)}));case 3:case"end":return t.stop()}}),t,this)})));function e(e,n,r){return t.apply(this,arguments)}return e}()}]),n}(l["b"]);$=u["a"]([Object(l["a"])({components:{highcharts:P["Chart"]}})],$);var E=$,I=E,V=Object(d["a"])(I,O,j,!1,null,null,null),B=V.exports,J=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.dateFromChoose=F(2).toISOString(),t.dateToChoose=(new Date).toISOString(),t.dataService=new C,t.stationList=[],t}return Object(w["a"])(n,[{key:"newStation",value:function(t){var e=t.target.value;this.chosenStation=e.split("_")[1],console.log(this.chosenStation)}},{key:"created",value:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.dataService.getLocations().then((function(t){console.log(t.data),e.stationList=t.data}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"refresh",value:function(){L.$emit("refresh",{id:this.chosenStation,from:new Date(this.dateFromChoose),to:new Date(this.dateToChoose)})}}]),n}(l["b"]);J=u["a"]([Object(l["a"])({components:{Charts:B}})],J);var U=J,z=U,H=Object(d["a"])(z,g,x,!1,null,null,null),N=H.exports;r["a"].use(b["a"]);var Y=[{path:"/",name:"home",component:N}],Z=new b["a"]({mode:"history",base:"/",routes:Y}),q=Z,G=n("2f62");r["a"].use(G["a"]);var K=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("4de4");function Q(t){if(t){var e={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",weekday:"long"};return new Date(t).toLocaleDateString(void 0,e)}}function W(t){t.filter("formatDate",Q)}var X=n("37d8"),tt=n.n(X),et=n("e30a"),nt=n.n(et);n("b40d");tt()(R.a),r["a"].use(T.a),r["a"].component("VueCtkDateTimePicker",nt.a),r["a"].config.productionTip=!1,W(r["a"]),new r["a"]({router:q,store:K,render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.f7a609d3.js.map