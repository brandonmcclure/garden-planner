(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,n){e.exports=n.p+"static/media/redo.d2107f44.svg"},118:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(10),i=n(17),o=n(15),l=n(30),c=n(18),s=n(0),u=n.n(s),d=n(13),h=n.n(d),m=(n(51),n(74),n(126)),f=n(125),p=(n(32),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(m.a,{expand:"md",className:"bg-pastel-green"},u.a.createElement(m.a.Brand,{href:"#home"},"Penny's Garden Planner"),u.a.createElement(m.a.Toggle,{"aria-controls":"navbar-actions"}),u.a.createElement(m.a.Collapse,{id:"navbar-actions"},u.a.createElement(f.a,{className:"mr-auto",activeKey:"#home"},u.a.createElement(f.a.Link,{href:"#home"},"Designer"),u.a.createElement(f.a.Link,{href:"#features"},"About"),u.a.createElement(f.a.Link,{href:"#pricing"},"Contact"))))}}]),t}(u.a.Component));n(83);var g=function(){return u.a.createElement("div",null,u.a.createElement(p,null),u.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(21),y=n.n(v),b=n(47),k=n.n(b),w=n(66),E=n.n(w),O=n(67),j=n.n(O),C=n(39),P=n.n(C),N=n(38),S=n(65),R=n.n(S),G=n(48),A=n.n(G),L=n(31),H=n.n(L),x=n(29),B=n.n(x),F=[],I=function(){function e(t){Object(a.a)(this,e),this.id=t.id,this.rows=t.rows,this.cols=t.cols,this.fill=t.fill,this.styles={display:"grid",gridTemplateRows:"repeat(".concat(t.rows,", 1fr)"),gridTemplateColumns:"repeat(".concat(t.cols,", 1fr)"),top:0,left:0,width:"95%",height:"95%"};for(var n=[],r=0;r<t.rows;r++)for(var i=0;i<t.cols;i++)n.push([r,i]);this.allPoints=n;var o=t.fill.map(JSON.stringify);this.cellFilledStates=n.map((function(e){return!!o.includes(JSON.stringify(e))}))}return Object(r.a)(e,null,[{key:"getObject",value:function(e){return F.find((function(t){return t.id==e}))}},{key:"allObjects",value:function(){return F}},{key:"loadObjectsFromApi",value:function(){fetch("/backend/layouts/").then((function(e){return 200===e.status?e.json():null})).then((function(t){t&&t.forEach((function(t){return F.push(new e(t))}))}))}}]),e}(),D=[],_=function(){function e(t){Object(a.a)(this,e),this.id=t.id,this.name=t.name,this.namePlural=t.name_plural,this.scientificName=t.scientific_name,this.layoutIds=t.layouts,this.goodNeighborIds=t.good_neighbors,this.badNeighborIds=t.bad_neighbors,this.className=t.name.toLowerCase().replace(/ /g,"-"),this.imageName=t.name.toLowerCase().replace(/ /g,"-")+".svg",this.defaultLayout=this.defaultLayout.bind(this)}return Object(r.a)(e,[{key:"defaultLayout",value:function(){return I.getObject(this.layoutIds[0])}}],[{key:"getObject",value:function(e){return D.find((function(t){return t.id==e}))}},{key:"allObjects",value:function(){return D}},{key:"loadObjectsFromApi",value:function(){fetch("/backend/plants/").then((function(e){return 200===e.status?e.json():null})).then((function(t){t&&t.forEach((function(t){return D.push(new e(t))}))}))}}]),e}(),T=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={currentPlantGroup:Object.keys(e.plantGroups)[0]},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderPlantList",value:function(){var e=this,t=this.state.currentPlantGroup?this.props.plantGroups[this.state.currentPlantGroup]:[];return u.a.createElement(B.a,null,t.sort((function(e,t){return e.namePlural.localeCompare(t.namePlural)})).map((function(t){return u.a.createElement(B.a.Item,{action:!0,key:t.id,onClick:function(){return e.props.handleSelect(t,t.defaultLayout())}},u.a.createElement("div",{className:"".concat(t.className," bg-icon-right")},t.namePlural))})))}},{key:"renderFilters",value:function(){var e=this;if(1===Object.keys(this.props.plantGroups).length)return null;var t={all:"All",good:"Good with neighbors",neutral:"Neutral",bad:"Bad with neighbors"};return u.a.createElement("div",{className:"mb-2"},u.a.createElement(R.a,{type:"radio",name:"currentPlantGroupFilter",value:this.state.currentPlantGroup,onChange:function(t){e.setState({currentPlantGroup:t})},className:"bg-light"},Object.entries(this.props.plantGroups).map((function(e){var n=Object(N.a)(e,2),a=n[0];n[1];return u.a.createElement(A.a,{size:"sm",className:"text-left",variant:"outline-secondary",value:a,key:a},t[a])}))))}},{key:"render",value:function(){return u.a.createElement(H.a,{show:this.props.show,onHide:this.props.handleHide,scrollable:!0},u.a.createElement(H.a.Header,{closeButton:!0,className:"bg-pastel-green"},"Plant Picker"),u.a.createElement(H.a.Body,null,this.renderFilters(),this.renderPlantList()))}}]),t}(u.a.Component),q=function(e){function t(e){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderPlants",value:function(){var e=this;return this.props.plant?this.props.layout.cellFilledStates.map((function(t,n){var a=t?"".concat(e.props.plant.className," bg-90pct-center"):"bg-90pct-center";return u.a.createElement("div",{className:a,key:n})})):null}},{key:"render",value:function(){return u.a.createElement("button",{className:"plot",id:this.props.id,onClick:this.props.onClick},u.a.createElement("div",{className:"plants",style:this.props.layout?this.props.layout.styles:{}},this.renderPlants()))}}]),t}(u.a.Component),z=n(49),J=n.n(z),M=(n(115),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(a.a)(this,e),this.plant=t,this.layout=n,this.plantPickerOptionGroups=this.plantPickerOptionGroups.bind(this)}return Object(r.a)(e,[{key:"plantPickerOptionGroups",value:function(e){var t={},n=new Set,a=new Set,r=new Set;return 0===e.length?_.allObjects().forEach((function(e){return n.add(e.id)})):(_.allObjects().forEach((function(e){return a.add(e.id)})),e.forEach((function(e){e.goodNeighborIds.forEach((function(e){a.delete(e),n.add(e)}))})),e.forEach((function(e){e.badNeighborIds.forEach((function(e){a.delete(e),n.delete(e),r.add(e)}))}))),[["good",n],["neutral",a],["bad",r]].forEach((function(e){var n=Object(N.a)(e,2),a=n[0],r=n[1];r.size>0&&(t[a]=Array.from(r).map((function(e){return _.getObject(e)})))})),t}}]),e}()),W=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={numRows:4,numCols:4,grid:Array(4).fill().map((function(e){return new Array(4).fill().map((function(e){return new M}))})),showPlantPicker:!1},n.addRow=n.addRow.bind(Object(l.a)(n)),n.handleGridClick=n.handleGridClick.bind(Object(l.a)(n)),n.clickedRow=null,n.clickedCol=null,n.history=[],n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){_.loadObjectsFromApi(),I.loadObjectsFromApi()}},{key:"renderUndo",value:function(){var e=this;if(0===this.history.length)return u.a.createElement(y.a,{variant:"outline-secondary",className:"disabled",disabled:!0},u.a.createElement("img",{src:J.a}));return u.a.createElement(y.a,{variant:"outline-secondary",onClick:function(){e.undo()}},u.a.createElement("img",{src:J.a}))}},{key:"undo",value:function(){var e=this.history.pop();this.setState((function(t){return{grid:e}}))}},{key:"renderHeader",value:function(){var e=this;return u.a.createElement(E.a,{"aria-label":"Controls"},u.a.createElement(k.a,{className:"mx-2","aria-label":"Add rows and columns"},u.a.createElement(y.a,{variant:"outline-success",size:"sm",className:"mr-0",onClick:function(){e.addRow()}},"Add Row"),u.a.createElement(y.a,{variant:"outline-success",size:"sm",className:"mr-0",onClick:function(){e.addCol()}},"Add Column")))}},{key:"renderBody",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{id:"gridContainer",style:this.gridContainerDynamicStyles()},u.a.createElement("div",{id:"grid",style:this.gridDynamicStyles()},this.gridSquares())))}},{key:"gridSquares",value:function(){for(var e=[],t=0;t<this.state.numRows;t++)for(var n=0;n<this.state.numCols;n++)e.push(this.renderSquare(t,n));return e}},{key:"gridContainerDynamicStyles",value:function(){var e,t;return console.log("windowheight",window.innerHeight),console.log("windowwidth",window.innerWidth),window.innerHeight>window.innerWidth||this.state.numCols>this.state.numRows?(e="vw",t=Math.floor(70/this.state.numCols)):(e="vh",t=Math.floor(70/this.state.numRows)),t=Math.max(t,23),{width:"".concat(this.state.numCols*t).concat(e),height:"".concat(this.state.numRows*t).concat(e)}}},{key:"gridDynamicStyles",value:function(){return{gridTemplateRows:"repeat(".concat(this.state.numRows,", 1fr)"),gridTemplateColumns:"repeat(".concat(this.state.numCols,", 1fr)")}}},{key:"renderSquare",value:function(e,t){var n=this,a="r".concat(e,"c").concat(t),r=this.state.grid[e][t];return u.a.createElement(q,{key:a,id:a,plant:r.plant,layout:r.layout,onClick:function(){n.handleGridClick(e,t)}})}},{key:"getGridCopy",value:function(){return this.state.grid.map((function(e){return e.slice()}))}},{key:"handleGridClick",value:function(e,t){this.clickedRow=e,this.clickedCol=t,this.setState({showPlantPicker:!0})}},{key:"addRow",value:function(){console.log("history",this.history),this.setState((function(e){return{numRows:e.numRows+1,grid:e.grid.concat([new Array(e.numCols).fill().map((function(e){return new M}))])}}))}},{key:"delRow",value:function(e){this.setState((function(t){return{numRows:t.numRows-1,grid:t.grid.splice(e,1)}}))}},{key:"addCol",value:function(){this.setState((function(e){return{numCols:e.numCols+1,grid:e.grid.map((function(e){return e.slice().concat([new M])}))}}))}},{key:"handlePlantPickerSelection",value:function(e,t){var n=this.state.grid.map((function(e){return e.slice()})),a=n[this.clickedRow][this.clickedCol];Object.assign(a,{plant:e,layout:t}),this.clickedRow=null,this.clickedCol=null,this.setState({grid:n,showPlantPicker:!1})}},{key:"renderPlantPicker",value:function(){var e=this;if(!1===this.state.showPlantPicker)return null;var t=this.clickedRow,n=this.clickedCol,a=function(t,n){return e.state.grid[t][n].plant},r=[];[t-1,t,t+1].forEach((function(i){[n-1,n,n+1].forEach((function(o){(function(a,r){return a>=0&&a<e.state.numRows&&r>=0&&r<e.state.numCols&&"".concat(a,"_").concat(r)!=="".concat(t,"_").concat(n)})(i,o)&&a(i,o)&&r.push(a(i,o))}))}));var i=this.state.grid[t][n].plantPickerOptionGroups(r);return u.a.createElement(T,{show:!0,handleSelect:function(t,n){e.handlePlantPickerSelection(t,n)},handleHide:function(){e.setState({showPlantPicker:!1})},plantGroups:i,neighborPlants:r})}},{key:"render",value:function(){return u.a.createElement(j.a,{fluid:!0,className:"mt-2 p-1"},this.renderPlantPicker(),u.a.createElement(P.a,{className:"h-75"},u.a.createElement(P.a.Header,null,this.renderHeader()),u.a.createElement(P.a.Body,{className:"align-content-center m-2 overflow-auto p-0",style:{maxHeight:"70vh",overflowY:"auto"}},this.renderBody())))}}]),t}(u.a.Component),K=t.default=W;h.a.render(u.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){},49:function(e,t,n){e.exports=n.p+"static/media/undo.42f85826.svg"},51:function(e,t,n){},69:function(e,t,n){e.exports=n(118)},74:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"}},[[69,1,2]]]);
//# sourceMappingURL=main.d1f8713d.chunk.js.map