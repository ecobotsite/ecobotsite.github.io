(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";a("85ec")},"198b":function(e,t,a){},"4a41":function(e,t,a){"use strict";a("198b")},"5cbe":function(e,t,a){},"85ec":function(e,t,a){},b31e:function(e,t,a){"use strict";a("5cbe")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=a("d4ec"),o=a("262e"),c=a("2caf"),u=a("9ab4"),l=a("60a3"),p=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(l["c"]);p=u["a"]([Object(l["a"])({components:{}})],p);var d=p,m=d,h=(a("034f"),a("2877")),f=Object(h["a"])(m,n,i,!1,null,null,null),v=f.exports,y=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("section",{staticClass:"choose"},[a("div",{staticClass:"required"},[a("div",{staticClass:"station"},[a("label",[e._v("Оберіть станцію ")]),a("div",{staticClass:"select"},[a("select",{attrs:{name:"station",id:"stations"},on:{change:function(t){return e.newStation(t)}}},e._l(e.stationList,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.city)+" - "+e._s(t.stationName))])})),0)])]),a("div",{staticClass:"date"},[a("VueCtkDateTimePicker",{attrs:{range:!0,label:"Оберіть відрізок часу"},model:{value:e.dateChoose,callback:function(t){e.dateChoose=t},expression:"dateChoose"}})],1)]),a("div",{staticClass:"refresh"},[a("button",{on:{click:e.refresh}},[e._v(" Оновити ")])])]),e.loadingState.isDataLoading?a("loader",{staticClass:"display-data"}):a("charts",{staticClass:"display-data",attrs:{measures:e.measures}})],1)},g=[],x=(a("4160"),a("4e82"),a("accc"),a("0d03"),a("d3b7"),a("820e"),a("ac1f"),a("3ca3"),a("5319"),a("1276"),a("159b"),a("ddb0"),a("4795"),a("96cf"),a("1da1")),w=a("bee2"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"charts"},e._l(6,(function(t){return a("highcharts",{key:t,attrs:{constructorType:"stockChart",options:e.chartOptions[t-1]}})})),1)},S=[],j=a("4452"),k=a.n(j),_=a("ea7f"),D=a.n(_),C=new r["a"],T=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.dataTime=new Date,e.chartOptions=[{title:{text:"PM 2.5/PM 10"},yAxis:[{title:{text:"PM 2.5"}},{title:{text:"PM 10"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"PM2.5",data:[],color:"#FF530D"},{turboThreshold:5e3,yAxis:1,name:"PM10",data:[]}]},{title:{text:"PM 2.5"},yAxis:[{title:{text:"PM2.5"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"PM2.5",data:[]}]},{title:{text:"PM 10"},yAxis:[{title:{text:"PM10"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"PM10",data:[],color:"#FF530D"}]},{title:{text:"Температура"},yAxis:[{title:{text:"Температура Celsium"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"Температура Celsium",data:[],color:"#BA55D3"}]},{title:{text:"Вологість"},yAxis:[{title:{text:"Вологість"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"Вологість",data:[],color:"#4682B4"}]},{title:{text:"Тиск (гПа)"},yAxis:[{title:{text:"Тиск (гПа)"}}],xAxis:{type:"datetime"},series:[{turboThreshold:5e3,yAxis:0,name:"Тиск (гПа)",data:[],color:"#FF7F50"}]}],e}return Object(w["a"])(a,[{key:"created",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:C.$on("extremes-changed",(function(e){D.a.charts.forEach((function(t){t&&t.index!==e.chartId&&t.xAxis[0].setExtremes(e.min,e.max)}))})),C.$on("refresh",(function(){console.log(t.measures),t.chartOptions[0].series[0].data=t.measures.pm25,t.chartOptions[0].series[1].data=t.measures.pm10,t.chartOptions[1].series[0].data=t.measures.pm25,t.chartOptions[2].series[0].data=t.measures.pm10,t.chartOptions[3].series[0].data=t.measures.temperature,t.chartOptions[4].series[0].data=t.measures.humidity,t.chartOptions[5].series[0].data=t.measures.pressure}));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),a}(l["c"]);u["a"]([Object(l["b"])()],T.prototype,"measures",void 0),T=u["a"]([Object(l["a"])({components:{highcharts:j["Chart"]}})],T);var A=T,P=A,R=Object(h["a"])(P,O,S,!1,null,null,null),M=R.exports;function L(e){var t=new Date;return t.setDate(t.getDate()-e),t}a("99af"),a("25f0");var F=a("bc3a"),I=a.n(F),$=function(){function e(){var t=this;Object(s["a"])(this,e),this.User={},this.IsLogged=!1,this._axiosClient=I.a.create({baseURL:"https://33bo49db5l.execute-api.eu-central-1.amazonaws.com"}),this._axiosClient.interceptors.response.use((function(e){return t.ok(e)}),(function(e){}))}return Object(w["a"])(e,[{key:"get",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this._axiosClient.get(t,a));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"post",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this._axiosClient.post(t,a,r));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a,r){return e.apply(this,arguments)}return t}()},{key:"ok",value:function(e){return e}}]),e}(),E=new $;function N(e){var t=new Date(e),a=""+(t.getMonth()+1),r=""+t.getDate(),n=t.getFullYear(),i=t.getHours().toString(),s=t.getMinutes().toString(),o=t.getSeconds().toString();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),i.length<2&&(i="0"+i),s.length<2&&(s="0"+s),o.length<2&&(o="0"+o),"".concat(n,"-").concat(a,"-").concat(r,"T").concat(i,":").concat(s,":").concat(o,"Z")}var q=function(){function e(){Object(s["a"])(this,e),this.repoAxios=E}return Object(w["a"])(e,[{key:"getData",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,a,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.repoAxios.get("/Measurement",{params:{From:N(a),To:N(r),LocationId:t}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a,r){return e.apply(this,arguments)}return t}()},{key:"getSpecificData",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,a,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.repoAxios.get("/Measurement/Type",{params:{From:N(a),To:N(r),LocationId:t,PollutantType:n}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a,r,n){return e.apply(this,arguments)}return t}()},{key:"getLocations",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.repoAxios.get("/Location/List"));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),z=a("bbf5"),B=a.n(z),J=(a("53b4"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",[e._v("↓")]),a("span",{staticStyle:{"--delay":"0.1s"}},[e._v("↓")]),a("span",{staticStyle:{"--delay":"0.3s"}},[e._v("↓")]),a("span",{staticStyle:{"--delay":"0.4s"}},[e._v("↓")]),a("span",{staticStyle:{"--delay":"0.5s"}},[e._v("↓")])])}],V=(a("b31e"),{}),H=Object(h["a"])(V,J,U,!1,null,"1c299db0",null),Y=H.exports,Z=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.loadingState={isDataLoading:!0},e.measures={id:"",city:"",stationName:"",localName:"",timezone:null,lat:0,lon:0,pm25:[],pm10:[],temperature:[],humidity:[],pressure:[],qualityIndex:[]},e.chosenStation="1569",e.dateChoose={start:L(2).toISOString(),end:(new Date).toISOString()},e.dataService=new q,e.stationList=[],e}return Object(w["a"])(a,[{key:"newStation",value:function(e){var t=e.target.value;this.chosenStation=t.split("_")[1],console.log(this.chosenStation)}},{key:"created",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.dataService.getLocations().then(function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.stationList=a.data.sort((function(e,t){return e.city>t.city?1:e.city<t.city?-1:0})),e.next=3,t.refresh();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"refresh",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.dateChoose),e.next=3,this.loadData(this.chosenStation,this.dateChoose.start,this.dateChoose.end);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadData",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,a,r){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loadingState.isDataLoading=!0,Promise.allSettled([this.dataService.getSpecificData(t,a.replace("вечера","pm").replace("ночи","am"),r.replace("вечера","pm").replace("ночи","am"),0),this.dataService.getSpecificData(t,a.replace("вечера","pm").replace("ночи","am"),r.replace("вечера","pm").replace("ночи","am"),1),this.dataService.getSpecificData(t,a.replace("вечера","pm").replace("ночи","am"),r.replace("вечера","pm").replace("ночи","am"),2),this.dataService.getSpecificData(t,a.replace("вечера","pm").replace("ночи","am"),r.replace("вечера","pm").replace("ночи","am"),3),this.dataService.getSpecificData(t,a.replace("вечера","pm").replace("ночи","am"),r.replace("вечера","pm").replace("ночи","am"),4),this.dataService.getSpecificData(t,a.replace("вечера","pm").replace("ночи","am"),r.replace("вечера","pm").replace("ночи","am"),5)]).then((function(e){e.forEach((function(e){"fulfilled"==e.status&&200===e.value.status&&(n.measures.id=e.value.data.id,n.measures.city=e.value.data.city,n.measures.stationName=e.value.data.stationName,n.measures.localName=e.value.data.localName,n.measures.pm10=2===e.value.data.pollutantType?e.value.data.data:n.measures.pm10,n.measures.pm25=3===e.value.data.pollutantType?e.value.data.data:n.measures.pm25,n.measures.temperature=5===e.value.data.pollutantType?e.value.data.data:n.measures.temperature,n.measures.humidity=1===e.value.data.pollutantType?e.value.data.data:n.measures.humidity,n.measures.pressure=4===e.value.data.pollutantType?e.value.data.data:n.measures.pressure,n.measures.qualityIndex=0===e.value.data.pollutantType?e.value.data.data:n.measures.qualityIndex)})),n.loadingState.isDataLoading=!1,setTimeout((function(){C.$emit("refresh")}),0)}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,a,r){return e.apply(this,arguments)}return t}()}]),a}(l["c"]);Z=u["a"]([Object(l["a"])({components:{Charts:M,DateRangePicker:B.a,Loader:Y}})],Z);var G=Z,K=G,Q=(a("4a41"),Object(h["a"])(K,b,g,!1,null,"77165bd0",null)),W=Q.exports;r["a"].use(y["a"]);var X=[{path:"/",name:"home",component:W}],ee=new y["a"]({mode:"history",base:"/",routes:X}),te=ee,ae=a("2f62");r["a"].use(ae["a"]);var re=new ae["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("4de4");function ne(e){if(e){var t={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",weekday:"long"};return new Date(e).toLocaleDateString(void 0,t)}}function ie(e){e.filter("formatDate",ne)}var se=a("37d8"),oe=a.n(se),ce=a("e30a"),ue=a.n(ce);a("b40d");oe()(D.a),r["a"].use(k.a),r["a"].component("VueCtkDateTimePicker",ue.a),r["a"].config.productionTip=!1,ie(r["a"]),new r["a"]({router:te,store:re,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.2efdc6b2.js.map