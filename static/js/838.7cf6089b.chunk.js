(self.webpackChunkCotizador=self.webpackChunkCotizador||[]).push([[838],{86126:function(e,t,n){"use strict";n.r(t);var r=n(9817),a=n(99499),c=n(43693),l=n(7738),i=n(50465),o=n(89579),s=n(62780),u=n(98848),d=n(92210),f=n(43157),m=n.n(f);t.default=function(e){var t=e.history,n=(0,l.useState)(null),f=(0,c.Z)(n,2),p=f[0],v=f[1],h=(0,l.useState)(!0),x=(0,c.Z)(h,2),y=x[0],E=x[1];(0,l.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n,a,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("jwt"),a={url:u.CT+"/discount/",method:"GET",headers:{"Content-Type":"application/json","jwt-token":n},signal:e.signal},t.next=5,m().request(a);case 5:c=t.sent.data,v(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:E(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[]);var g=[{title:"Rangos",children:[{title:"Desde",dataIndex:"min",key:"min"},{title:"Hasta",dataIndex:"max",key:"max"},{title:"Descuento %",dataIndex:"discount",key:"discount",render:function(e){return l.createElement("div",null,e,"%")}}]}];return y?l.createElement(d.Z,{cover:"content"}):l.createElement("div",null,l.createElement(i.Z,null,l.createElement("div",{style:{flexDirection:"row",display:"flex",alignItems:"center",justifyContent:"space-between"}},l.createElement("div",{style:{flexDirection:"row",display:"flex"}},l.createElement("h4",{style:{marginRight:"10px"}},"Descuento fuera de rango: "),l.createElement("p",null,l.createElement("b",null,p.outOfRangeDiscount,"%"))),l.createElement("div",{style:{flexDirection:"row",display:"flex"}},l.createElement(o.Z,{onClick:function(){return t.push(u.sH+"/editdiscount")}},"Editar descuento")))),l.createElement(s.Z,{columns:g,dataSource:p?p.ranges:[],rowKey:"_id"}))}},12102:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1413),a=n(7738),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},l=n(4622),i=function(e,t){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};i.displayName="SearchOutlined";var o=a.forwardRef(i)},20343:function(e,t,n){var r=n(82172);e.exports=function(e,t){return r(e,t)}}}]);
//# sourceMappingURL=838.7cf6089b.chunk.js.map