"use strict";(self.webpackChunkCotizador=self.webpackChunkCotizador||[]).push([[672],{91672:function(e,t,n){n.r(t);var r=n(35737),a=n(10389),i=n(43693),o=n(9817),c=n(99499),l=n(7738),u=n(65041),s=n(4569),d=n(94251),p=n(62780),m=n(50465),g=n(84762),f=n(81787),h=n(89579),v=n(58949),y=n(6254),x=n(643),k=n(98848),Z=n(92210),E=n(43157),w=n.n(E),P=u.Z.Option,b=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t,n,r){var a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),a=localStorage.getItem("jwt"),e.prev=2,i={url:"".concat(k.CT,"/quote/"),method:"PUT",data:t,headers:{"Content-Type":"application/json","jwt-token":a}},e.next=6,w().request(i);case 6:s.ZP.success({content:"Cotizacion editada"}),r.push("".concat(k.sH,"/quotes")),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),s.ZP.error({content:"Something went wrong"}),console.error(e.t0),n(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),C=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("jwt"),e.prev=1,r={url:"".concat(k.CT,"/product/stock/").concat(t),method:"GET",headers:{"Content-Type":"application/json","jwt-token":n}},e.next=5,w().request(r);case 5:return a=e.sent.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),s.ZP.error({content:"No se pudo cargar el stock de ".concat(t)}),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();t.default=function(e){var t,n=e.history,s=e.match,E=(0,l.useState)(!0),I=(0,i.Z)(E,2),T=I[0],S=I[1],O=(0,l.useState)([]),D=(0,i.Z)(O,2),j=D[0],q=D[1],B=(0,l.useState)(0),R=(0,i.Z)(B,2),F=R[0],L=R[1],W=(0,l.useState)([]),_=(0,i.Z)(W,2),N=_[0],$=_[1],z=(0,l.useState)([]),G=(0,i.Z)(z,2),V=G[0],A=G[1],U=(0,l.useState)([]),M=(0,i.Z)(U,2),H=M[0],K=M[1],J=(0,l.useState)(!1),Q=(0,i.Z)(J,2),X=Q[0],Y=Q[1],ee=(0,l.useState)(null),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],ae=(0,l.useState)(null),ie=(0,i.Z)(ae,2),oe=ie[0],ce=ie[1],le=(0,l.useState)({customer:null,wayToPay:"",validityPeriod:"",deliveryTime:"",seller:"",generalObservations:"",products:[{product:null,price:0,typeOfPrice:"net",priceDescription:"",markings:[{freight:0,profit:0,netPrice:0,amount:0,markingPrice:0,unitPrice:0,totalPrice:0,name:null,ink:null,i:null}],discount:!1,usbDiscount:!1,observations:""}]}),ue=(0,i.Z)(le,2),se=ue[0],de=ue[1],pe=s.params.quoteid;(0,l.useEffect)((function(){var e=w().CancelToken.source(),t=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,n,r,a,i,c,l,u,s,d,p,m,g;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("jwt"),e.prev=1,n={url:k.CT+"/customer/",method:"GET",headers:{"Content-Type":"application/json","jwt-token":t}},e.next=5,w().request(n);case 5:r=e.sent,q(r.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:return e.prev=12,a={url:k.CT+"/quote/"+pe,method:"GET",headers:{"Content-Type":"application/json","jwt-token":t}},e.next=16,w().request(a);case 16:i=e.sent.data,de(i),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(12),console.error(e.t1);case 23:return e.prev=23,c={url:k.CT+"/product/",method:"GET",headers:{"Content-Type":"application/json","jwt-token":t}},e.next=27,w().request(c);case 27:l=e.sent,$(l.data),e.next=34;break;case 31:e.prev=31,e.t2=e.catch(23),console.error(e.t2);case 34:return e.prev=34,u={url:k.CT+"/marking/",method:"GET",headers:{"Content-Type":"application/json","jwt-token":t}},e.next=38,w().request(u);case 38:s=(s=e.sent.data).sort((function(e,t){return e.name<t.name?-1:1})),A(s),e.next=46;break;case 43:e.prev=43,e.t3=e.catch(34),console.error(e.t3);case 46:return e.prev=46,d={url:k.CT+"/discount/",method:"GET",headers:{"Content-Type":"application/json","jwt-token":t}},e.next=50,w().request(d);case 50:p=e.sent.data,re(p),e.next=57;break;case 54:e.prev=54,e.t4=e.catch(46),console.error(e.t4);case 57:return e.prev=57,m={url:k.CT+"/usbdiscount/",method:"GET",headers:{"Content-Type":"application/json","jwt-token":t}},e.next=61,w().request(m);case 61:g=e.sent.data,ce(g),e.next=68;break;case 65:e.prev=65,e.t5=e.catch(57),console.error(e.t5);case 68:S(!1);case 69:case"end":return e.stop()}}),e,null,[[1,9],[12,20],[23,31],[34,43],[46,54],[57,65]])})));return function(){return e.apply(this,arguments)}}();return t(),function(){return e.cancel("Cancelling in cleanup")}}),[]);var me=function(e,t){return e.markings.forEach((function(n,a){switch(e.typeOfPrice){case"net":n.netPrice=e.price;break;case"offer":n.netPrice=.6*e.price*.85;break;case"full":n.netPrice=.6*e.price}if(e.discount&&ne&&ne.ranges.length>0){var i,o=!1,c=(0,r.Z)(ne.ranges);try{for(c.s();!(i=c.n()).done;){var l=i.value;if(n.amount*n.netPrice>=l.min&&n.amount*n.netPrice<=l.max){n.netPrice=n.netPrice*((100-l.discount)/100),o=!0;break}n.amount*n.netPrice<l.min&&(o=!0)}}catch(y){c.e(y)}finally{c.f()}o||(n.netPrice=n.netPrice*((100-ne.outOfRangeDiscount)/100))}if(e.usbDiscount&&oe&&oe.ranges.length>0){var u,s=!1,d=(0,r.Z)(oe.ranges);try{for(d.s();!(u=d.n()).done;){var p=u.value;if(n.amount>=p.min&&n.amount<=p.max){n.netPrice=n.netPrice*((100-p.discount)/100),s=!0;break}n.amount<p.min&&(s=!0)}}catch(y){d.e(y)}finally{d.f()}s||(n.netPrice=n.netPrice*((100-oe.outOfRangeDiscount)/100))}var m=0;if(n.ink){var g,f=!1,h=(0,r.Z)(n.ink.ranges);try{for(h.s();!(g=h.n()).done;){var v=g.value;if(n.amount>=v.min&&n.amount<=v.max){m=n.amount*v.price,f=!0;break}n.amount<v.min&&(m=n.ink.minTotalPrice,f=!0)}}catch(y){h.e(y)}finally{h.f()}f||(m+=n.ink.outOfRangePrice*n.amount)}m>0?t||(e.markings[a].markingPrice=m/n.amount):e.markings[a].markingPrice=0,e.markings[a].unitPrice=parseInt((parseInt(n.netPrice)+parseInt(e.markings[a].markingPrice)+parseInt(e.markings[a].freight))/(e.markings[a].profit>0?(100-e.markings[a].profit)/100:1)),e.markings[a].totalPrice=parseInt(e.markings[a].unitPrice*n.amount)})),e},ge=function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K("loading"),Y(!0),e.t0=K,e.next=5,C(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(e,t,n){var r=e.target.value.toString().replace(/\$\s?|(,*)/g,"");if((r.match(/^\d+\.\d+$/)||r.match(/^\d+$/)||""===r)&&!(r<0)){var i=(0,a.Z)({},se);i.products[t].markings[n][e.target.name]=""!==r?parseInt(r):0,"totalPrice"!==e.target.name&&(i.products[t]=me(i.products[t],"markingPrice"===e.target.name)),de(i)}};if(T)return l.createElement("div",null,l.createElement(Z.Z,{cover:"content"}));return l.createElement("div",null,l.createElement(d.Z,{visible:X,onOk:function(){return Y(!1)},onCancel:function(){return Y(!1)},footer:l.createElement(l.Fragment,null),width:1e3},(null===(t=H[0])||void 0===t?void 0:t.referencia)&&l.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.createElement("h2",null,H[0].referencia)),"loading"!==H?l.createElement(p.Z,{columns:[{title:"Bodega Local",dataIndex:"bodegaLocal",key:"bodegaLocal"},{title:"Bodega Zona Franca",dataIndex:"bodegaZonaFranca",key:"bodegaZonaFranca"},{title:"Cantidad Transito",dataIndex:"cantidadTransito",key:"cantidadTransito"},{title:"Color",dataIndex:"color",key:"color"},{title:"Estado de la orden",dataIndex:"estadoOrden",key:"estadoOrden"},{title:"Llegada Bodega Local",dataIndex:"llegadaBodegaLocal",key:"llegadaBodegaLocal"},{title:"Total Disponible",dataIndex:"totalDisponible",key:"totalDisponible"}],dataSource:H,rowKey:"id"}):l.createElement("div",{style:{height:"200px"}},l.createElement(Z.Z,{cover:"content"}))),l.createElement(m.Z,null,l.createElement(g.Z,{onFinish:function(e){return b(e,S,n)}},l.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.createElement(g.Z.Item,{label:"Razon social",name:["customer"],rules:[{required:!0}],initialValue:F},l.createElement(u.Z,{showSearch:!0,style:{width:200},placeholder:"Selecciona un cliente",optionFilterProp:"children",value:F,onChange:function(e){L(e);var t=(0,a.Z)({},se);t.customer=j[e],de(t)}},j.map((function(e,t){return l.createElement(P,{value:t,key:e._id},e.businessName," - ",e.name)})))),l.createElement(g.Z.Item,{label:"Vendedor"},l.createElement(f.Z,{name:"seller",value:se.seller,placeholder:"Vendedor",style:{width:150},onChange:function(e){return de((0,a.Z)((0,a.Z)({},se),{},{seller:e.target.value}))}})),l.createElement(g.Z.Item,{label:"Tiempo de entrega"},l.createElement(f.Z,{name:"deliveryTime",value:se.deliveryTime,placeholder:"Tiempo de entrega",style:{width:150},onChange:function(e){return de((0,a.Z)((0,a.Z)({},se),{},{deliveryTime:e.target.value}))}})),l.createElement(g.Z.Item,{label:"Validez de la propuesta"},l.createElement(f.Z,{name:"validityPeriod",value:se.validityPeriod,placeholder:"Validez de la propuesta",style:{width:150},onChange:function(e){return de((0,a.Z)((0,a.Z)({},se),{},{validityPeriod:e.target.value}))}})),l.createElement(g.Z.Item,{label:"Forma de pago"},l.createElement(f.Z,{name:"wayToPay",value:se.wayToPay,placeholder:"Forma de pago",style:{width:150},onChange:function(e){return de((0,a.Z)((0,a.Z)({},se),{},{wayToPay:e.target.value}))}})),l.createElement(g.Z.Item,{label:"Observaciones"},l.createElement(f.Z.TextArea,{name:"generalObservations",value:se.generalObservations,placeholder:"Observaciones generales",style:{width:150},onChange:function(e){return de((0,a.Z)((0,a.Z)({},se),{},{generalObservations:e.target.value}))}}))),se.products.map((function(e,t){var n;return l.createElement(m.Z,{key:t},l.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.createElement(g.Z.Item,{style:{marginRight:"15px"},label:"Producto",rules:[{required:!0}]},l.createElement(u.Z,{showSearch:!0,style:{width:200},onChange:function(e){return function(e,t){var n=(0,a.Z)({},se);n.products[t].product=N[e],n.products[t].product.prices[0]&&(n.products[t].price=n.products[t].product.prices[0].price,n.products[t].priceDescription=n.products[t].product.prices[0].description),n.products[t]=me(n.products[t]),de(n)}(e,t)},placeholder:"Selecciona una producto",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},N.map((function(e,n){return l.createElement(P,{value:n,key:"".concat(t,"-").concat(e._id)},e.sku)})))),e.product&&l.createElement(h.Z,{onClick:function(){return ge(e.product.sku)}},"Ver Stock"),l.createElement(h.Z,{style:{backgroundColor:"#ff7575"},onClick:function(){return function(e){var t=(0,a.Z)({},se);t.products.splice(e,1),de(t)}(t)}},l.createElement(x.Z,{style:{color:"white",fontSize:"20px"}}))),e.product&&l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}},l.createElement(m.Z,{style:{marginRight:"20px",display:"flex",justifyContent:"center",alignItems:"center"}},l.createElement("img",{crossOrigin:null,src:e.product.photo&&"/"===e.product.photo[0]?"https://catalogospromocionales.com".concat(e.product.photo):e.product.photo,style:{objectFit:"contain",width:"200px"},alt:e.product.name})),l.createElement("div",{style:{width:"230px",display:"flex",flexDirection:"column"}},l.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.createElement("p",{style:{marginRight:"10px",marginBottom:"0px",fontWeight:"900"}},"Nombre:"),l.createElement("p",{style:{marginRight:"10px",marginBottom:"0px",fontWeight:"300"}},e.product.name)),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.createElement("p",{style:{marginRight:"10px",marginBottom:"0px",fontWeight:"900"}},"SKU:"),l.createElement("p",{style:{marginRight:"10px",marginBottom:"0px",fontWeight:"300"}},e.product.sku)),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.createElement("p",{style:{marginRight:"10px",marginBottom:"0px",fontWeight:"900"}},"Descripcion:"),l.createElement("div",{dangerouslySetInnerHTML:{__html:"<div>".concat(e.product.description,"</div>")}})),l.createElement(g.Z.Item,{style:{marginRight:"15px",width:"200px",marginBottom:"5px"},label:"Precio",rules:[{required:!0}]},l.createElement(u.Z,{showSearch:!0,style:{width:200},value:"$".concat(e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),onChange:function(e){return function(e,t){var n=(0,a.Z)({},se);n.products[e].price=n.products[e].product.prices[t].price,n.products[e].priceDescription=n.products[e].product.prices[t].description,n.products[e]=me(n.products[e]),de(n)}(t,e)},placeholder:"Selecciona un precio",optionFilterProp:"children"},e.product.prices.map((function(e,n){return l.createElement(P,{value:n,key:"prices".concat(t,"-").concat(n)},"$",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})))),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.createElement("p",{style:{marginRight:"10px",marginBottom:"0px",fontWeight:"900"}},"Descripcion del precio:"),l.createElement("p",{style:{marginRight:"10px",marginBottom:"0px",fontWeight:"700",color:"red"}},e.priceDescription)),l.createElement(g.Z.Item,{style:{marginRight:"15px",marginBottom:"5px"},label:"Tipo",rules:[{required:!0}]},l.createElement(u.Z,{showSearch:!0,style:{width:200},onChange:function(e){return function(e,t){var n=(0,a.Z)({},se);n.products[e].typeOfPrice=t,n.products[e]=me(n.products[e]),de(n)}(t,e)},placeholder:"Selecciona el tipo de precio",optionFilterProp:"children",value:e.typeOfPrice,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},l.createElement(P,{value:"net"},"Neto"),l.createElement(P,{value:"offer"},"Oferta"),l.createElement(P,{value:"full"},"Normal / Full"))),l.createElement(v.Z,{style:{marginLeft:10},checked:e.discount,onChange:function(e){return function(e,t){var n=(0,a.Z)({},se);n.products[t].discount=e.target.checked,n.products[t]=me(n.products[t]),de(n)}(e,t)}},"Aplicar descuento"),l.createElement(v.Z,{style:{marginLeft:10},checked:e.usbDiscount,onChange:function(e){return function(e,t){var n=(0,a.Z)({},se);n.products[t].usbDiscount=e.target.checked,n.products[t]=me(n.products[t]),de(n)}(e,t)}},"Aplicar descuento USB"),l.createElement(g.Z.Item,{label:"Observaciones",style:{width:200,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z.TextArea,{style:{minWidth:"220px"},name:"observations",value:e.observations,placeholder:"Observaciones",onChange:function(e){return function(e,t){var n=(0,a.Z)({},se);n.products[e].observations=t.target.value,de(n)}(t,e)}}))),l.createElement("div",{style:{minWidth:"550px",display:"flex",flexDirection:"column"}},null===e||void 0===e||null===(n=e.markings)||void 0===n?void 0:n.map((function(e,n){var r,i,o,c;return l.createElement("div",{key:"marking ".concat(t,"-").concat(n)},l.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}},l.createElement(g.Z.Item,{label:"Marcacion",style:{marginBottom:"0px"},rules:[{required:!0}],initialValue:V.findIndex((function(t){return t.name===e.name}))===e.i?e.i:null},l.createElement(u.Z,{showSearch:!0,style:{width:160},placeholder:"Selecciona una marcaci\xf3n",onChange:function(e){return function(e,t,n){var r=(0,a.Z)({},se);r.products[e].markings[t].name=V[n].name,r.products[e].markings[t].i=n,r.products[e].markings[t].ink=null,r.products[e]=me(r.products[e]),de(r)}(t,n,e)},optionFilterProp:"children",value:V.findIndex((function(t){return t.name===e.name})),filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},null===V||void 0===V?void 0:V.map((function(e,r){return l.createElement(P,{value:r,key:"".concat(t,"-").concat(n,"-").concat(e._id)},e.name)})))),l.createElement(h.Z,{style:{backgroundColor:"#ff7575"},onClick:function(){return function(e,t){var n=(0,a.Z)({},se);n.products[e].markings.splice(t,1),de(n)}(t,n)}},l.createElement(x.Z,{style:{color:"white",fontSize:"20px"}}))),(null===e||void 0===e?void 0:e.name)&&(null===(r=V[e.i])||void 0===r||null===(i=r.inks)||void 0===i?void 0:i.length)>0&&l.createElement(g.Z.Item,{label:"Tintas",style:{marginBottom:"0px",marginTop:10},rules:[{required:!0}],initialValue:V[e.i].inks.findIndex((function(t){var n;return(null===t||void 0===t?void 0:t._id)===(null===(n=e.ink)||void 0===n?void 0:n._id)}))>=0?V[e.i].inks.indexOf(e.ink):null},l.createElement(u.Z,{showSearch:!0,style:{width:160},placeholder:"Tintas",value:V[e.i].inks.findIndex((function(t){var n;return(null===t||void 0===t?void 0:t._id)===(null===(n=e.ink)||void 0===n?void 0:n._id)}))>=0?V[e.i].inks.findIndex((function(t){return t._id===e.ink._id})):null,onChange:function(e){return function(e,t,n){var r=(0,a.Z)({},se);r.products[e].markings[t].ink=V[r.products[e].markings[t].i].inks[n],r.products[e]=me(r.products[e]),de(r)}(t,n,e)},optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},null===(o=V[e.i])||void 0===o||null===(c=o.inks)||void 0===c?void 0:c.map((function(e,r){return l.createElement(P,{value:r,key:"ink ".concat(t-n-r)},e.name)})))),l.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",width:500}},l.createElement(g.Z.Item,{label:"Cantidad",style:{width:100,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z,{name:"amount",value:e.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:"Cantidad",style:{width:100},onChange:function(e){return fe(e,t,n)}})),l.createElement(g.Z.Item,{label:"Flete",style:{width:100,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z,{prefix:"$",name:"freight",value:e.freight.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:"Flete",style:{width:100},onChange:function(e){return fe(e,t,n)}})),l.createElement(g.Z.Item,{label:"Utilidad %",style:{width:100,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z,{suffix:"%",name:"profit",value:e.profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:"Utilidad",style:{width:70},onChange:function(e){return fe(e,t,n)}})),l.createElement(g.Z.Item,{label:"Precio Neto",style:{width:100,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z,{prefix:"$",value:Number.parseInt(e.netPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:"Precio neto",style:{width:110}})),l.createElement(g.Z.Item,{label:"Marcacion",style:{width:100,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z,{prefix:"$",name:"markingPrice",value:Number.parseInt(e.markingPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:"Precio de marcacion",style:{width:110},onChange:function(e){return fe(e,t,n)}})),l.createElement(g.Z.Item,{label:"Precio unitario",style:{width:100,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z,{prefix:"$",name:"unitPrice",value:Number.parseInt(e.unitPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:"Precio unitario",style:{width:110},onChange:function(e){return fe(e,t,n)}})),l.createElement(g.Z.Item,{label:"Total",style:{width:130,marginRight:"15px"},rules:[{required:!0}]},l.createElement(f.Z,{prefix:"$",name:"totalPrice",value:Number.parseInt(e.totalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:"Precio Total",style:{width:130},onChange:function(e){return fe(e,t,n)}}))),l.createElement(y.Z,{style:{margin:"15px"}}))})),l.createElement(h.Z,{onClick:function(){return function(e){var t=(0,a.Z)({},se);t.products[e].markings.push({freight:0,profit:0,netPrice:0,amount:0,markingPrice:0,unitPrice:0,totalPrice:0,name:null,ink:null,i:null}),de(t)}(t)}},"Agregar escala"))))))})),l.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},l.createElement(h.Z,{onClick:function(){var e=(0,a.Z)({},se);e.products.push({product:null,price:0,typeOfPrice:"net",priceDescription:"",freight:0,profit:0,markings:[{freight:0,profit:0,netPrice:0,amount:0,markingPrice:0,unitPrice:0,totalPrice:0,name:null,ink:null,i:null}],discount:!1,usbDiscount:!1,observations:""}),de(e)},style:{fontSize:"25px",fontWeight:"900",height:"60px"}},"Agregar Producto")),l.createElement(g.Z.Item,null,l.createElement(h.Z,{type:"primary",onClick:function(){return b(se,S,n)},style:{marginTop:"15px"}},"Guardar")))))}}}]);
//# sourceMappingURL=672.7709fed3.chunk.js.map