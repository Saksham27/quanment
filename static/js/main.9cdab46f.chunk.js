(this.webpackJsonpquanment=this.webpackJsonpquanment||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/hot_inactive.68ef5287.svg"},15:function(e,t,a){e.exports=a.p+"static/media/beaker_inactive.741ab4aa.svg"},18:function(e,t,a){e.exports=a.p+"static/media/scale.55317149.svg"},19:function(e,t,a){e.exports=a.p+"static/media/scale_inactive.6bae66d0.svg"},23:function(e,t,a){e.exports=a.p+"static/media/hot.73b39610.svg"},24:function(e,t,a){e.exports=a.p+"static/media/beaker.c824fced.svg"},40:function(e,t,a){e.exports=a(74)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(37),r=a.n(c);a(45),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(21),s=a(7),i=a(9),u=a(11),m=a(10),p=a(1),h=a(8),v=a(3),f=Object(v.a)();a(46);var d=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"quantment",onClick:function(){return f.push("./")}},"Quantment"),o.a.createElement("div",null),o.a.createElement("div",{className:"history",onClick:function(){return f.push("./History")}},"History"))},b=(a(47),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("button",{type:"button",className:"conversion-box ".concat(this.props.styleName),onMouseEnter:this.props.enter,onMouseLeave:this.props.exit,onClick:this.props.click},o.a.createElement("img",{src:this.props.image,alt:"type"}),o.a.createElement("span",null,this.props.children))}}]),a}(n.Component)),g=a(22),E=a.n(g),y=a(38),O=a(16),j=(a(49),a(17)),S=a.n(j),k=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"post",value:function(e,t){return S.a.post(e,t)}},{key:"getAll",value:function(e){return S.a.get(e)}},{key:"deleteMultiple",value:function(e,t){return S.a.delete(e,{data:t})}}]),e}(),N=function e(){Object(s.a)(this,e)};N.url="https://localhost:5001/api/quantityMeasurement/conversion";var C=new k,V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChangeFirst=function(e){var t=e.target.value;console.log(t),n.setState({firstSelectValue:t},(function(){return Object(O.a)(n)}),n.convert())},n.onChangeSecond=function(e){var t=e.target.value;console.log(t),n.setState({secondSelectValue:t},(function(){return n.convert()}))},n.onChangeInput=function(e){n.setState({numberValue:e.target.value},(function(){return n.convert()})),console.log("number value:",e.target.value)},n.convert=Object(y.a)(E.a.mark((function e(){var t,a,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(String(n.state.firstSelectValue),"To").concat(String(n.state.secondSelectValue)),console.log(t),a={Value:n.state.numberValue,OperationType:t},e.prev=3,e.next=6,C.post(N.url,a);case 6:(o=e.sent).data.data[0]?(console.log("convertion success"),n.setState({resultValue:o.data.data[0].result})):n.setState({resultValue:0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])}))),n.state={options:[],firstSelectValue:n.props.options[0],secondSelectValue:n.props.options[1],numberValue:"",resultValue:""},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e.options!==this.props.options&&(console.log("changed"),this.setState({firstSelectValue:this.props.options[0],secondSelectValue:this.props.options[1],numberValue:"",resultValue:""}))}},{key:"render",value:function(){var e=this,t=this.props.options;return o.a.createElement("div",null,o.a.createElement("form",{className:"conversionForm-container"},o.a.createElement("div",{className:"conversionForm-container--from"},o.a.createElement("label",{htmlFor:"from"},"From"),o.a.createElement("input",{type:"number",id:"from_input",name:"form_input",onChange:function(t){return e.onChangeInput(t)},value:this.state.numberValue,required:!0}),o.a.createElement("select",{id:"from",name:"from",onChange:function(t){return e.onChangeFirst(t)},className:this.props.style,value:this.state.firstSelectValue},t.map((function(e,t){return o.a.createElement("option",{key:t.toString(),value:e},e)})))),o.a.createElement("div",{className:"conversionForm-container--to"},o.a.createElement("label",{htmlFor:"to"},"To"),o.a.createElement("input",{type:"number",id:"from_input",name:"form_input",value:this.state.resultValue,readOnly:!0,className:this.props.style}),o.a.createElement("select",{id:"to",name:"to",onChange:this.onChangeSecond,className:this.props.style,value:this.state.secondSelectValue},t.map((function(e,t){return o.a.createElement("option",{key:t.toString(),value:e},e)}))))))}}]),a}(n.Component),x=(a(67),a(23)),w=a.n(x),F=a(14),T=a.n(F),H=a(24),M=a.n(H),_=a(15),q=a.n(_),I=a(18),U=a.n(I),A=a(19),D=a.n(A),B=["Inch","Feet","Yard"],L=["C","F"],W=["Ml","Litre"],J=function(e){var t=Object(n.useState)(B),a=Object(h.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(U.a),s=Object(h.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(!0),p=Object(h.a)(m,2),v=p[0],f=p[1],g=Object(n.useState)("length-active"),E=Object(h.a)(g,2),y=E[0],O=E[1],j=Object(n.useState)(T.a),S=Object(h.a)(j,2),k=S[0],N=S[1],C=Object(n.useState)(!1),x=Object(h.a)(C,2),F=x[0],H=x[1],_=Object(n.useState)("temp"),I=Object(h.a)(_,2),A=I[0],J=I[1],Q=Object(n.useState)(q.a),R=Object(h.a)(Q,2),Y=R[0],$=R[1],z=Object(n.useState)(!1),G=Object(h.a)(z,2),K=G[0],P=G[1],X=Object(n.useState)("volume"),Z=Object(h.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)("lengthUnits"),ne=Object(h.a)(ae,2),oe=ne[0],ce=ne[1];return o.a.createElement("div",{className:"home"},o.a.createElement(d,{className:"home-topbar"}),o.a.createElement("div",{className:"home-header"},o.a.createElement("span",{className:"home-header-text"},"Welcome To Quantity Measurement")),o.a.createElement("div",{className:"home-main"},o.a.createElement("div",{className:"home-main--chooseType"},o.a.createElement("span",null,"Choose Type")),o.a.createElement("div",{className:"home-main--conversionType"},o.a.createElement(b,{styleName:y,image:i,enter:function(){u(U.a)},click:function(){u(U.a),N(T.a),$(q.a),f(!0),H(!1),P(!1),O("length-active"),te("volume"),J("temp"),ce("lengthUnits")},exit:function(){!1===v&&u(D.a)}},"Length"),o.a.createElement(b,{styleName:A,image:k,enter:function(){N(w.a)},click:function(){u(D.a),N(w.a),$(q.a),f(!1),H(!0),P(!1),O("length"),J("temp-active"),te("volume"),ce("tempUnits")},exit:function(){!1===F&&N(T.a)}},"Temperature"),o.a.createElement(b,{styleName:ee,image:Y,enter:function(){$(M.a)},click:function(){u(D.a),N(T.a),$(M.a),f(!1),H(!1),P(!0),te("volume-active"),O("length"),J("temp"),ce("volumeUnits")},exit:function(){!1===K&&$(q.a)}},"Volume")),o.a.createElement("div",{className:"home-main--conversion"},Object(n.useEffect)((function(){!0===v&&r(B),!0===F&&r(L),!0===K&&r(W)})),o.a.createElement(V,{style:oe,options:c}))))},Q=(a(68),new k),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).history=function(){Q.getAll(N.url).then((function(e){console.log(" All historyfound ",e.data.data),n.setState({History:e.data.data}),console.log("History Array",n.state.History)})).catch((function(e){console.log(e)}))},n.temparray=[],n.onCheck=function(e,t){n.temparray.push(Number(e.target.value)),n.setState({isChecked:-1}),console.log(n.temparray)},n.delete=function(e){var t={IdForDeletion:e};console.log(t),Q.deleteMultiple(N.url,t).then((function(e){console.log(e),!0===e.data.success&&n.history(),n.temparray=[]})).catch((function(e){console.log(e)}))},n.state={History:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.history()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home"},o.a.createElement(d,{className:"home-topbar"}),o.a.createElement("div",{className:"home-header"},o.a.createElement("span",{className:"home-header-text"},"Conversion History")),o.a.createElement("div",{className:"home-main"},o.a.createElement("table",{className:"table"},o.a.createElement("tr",{className:"table-header"},o.a.createElement("th",null,"Value"),o.a.createElement("th",null,"Operation Type"),o.a.createElement("th",null,"Result"),o.a.createElement("th",{className:"deleteButton",onClick:function(){e.delete(e.temparray)}},"Delete")),this.state.History.map((function(t,a){return o.a.createElement("tr",{className:"table-row"},o.a.createElement("td",null,t.value),o.a.createElement("td",null,t.operationType),o.a.createElement("td",null,t.result),o.a.createElement("td",{className:"checkbox"},o.a.createElement("input",{type:"checkbox",key:t.id.toString(),value:t.id,onClick:function(t,a){e.onCheck(t,a)}})))})))))}}]),a}(n.Component),Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.b,{history:f},o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/",exact:!0,component:J}),o.a.createElement(p.a,{path:"/History",exact:!0,component:R}))))}}]),a}(n.Component);r.a.render(o.a.createElement(l.a,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.9cdab46f.chunk.js.map