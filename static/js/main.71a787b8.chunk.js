(this["webpackJsonpdlicons-react"]=this["webpackJsonpdlicons-react"]||[]).push([[0],{106:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(11),o=i.n(c),s=i(34),r=i(35),l=i(38),d=i(37),h=i(13),m=i(81),u=i(80),b=i(163),j=i(164),p=i(168),f=i(165),O=i(64),y=i(166),g=i(15),x=i(146),v=i(3),L=i(145),k=i(148),S=i(149),I=i(151),F=i(150),C=i(4),_=Object(L.a)({root:{width:120},iconAdded:{backgroundColor:"#006699"},Icon:{margin:"auto",height:120,width:120},iconNameArea:{padding:0,height:"3em"},iconName:{width:"100%",height:"100%",margin:"auto",textAlign:"center",fontSize:"0.85rem",padding:0,fontWeight:700,lineHeight:1.2}});var w=function(e){var t=e.icon,i=e.uniqueId,a=e.addToList,n=e.removeFromList,c=e.selected,o=e.toggleSelectedById,s=_();return Object(C.jsx)(x.a,{item:!0,children:Object(C.jsx)(k.a,{className:Object(v.a)(s.root,c&&s.iconAdded),children:Object(C.jsxs)(S.a,{onClick:function(){c?(o(i),n(i)):(o(i),a(i))},children:[Object(C.jsx)(F.a,{className:s.Icon,component:"img",image:t.path.replace("/s/","/l/"),title:t.name}),Object(C.jsx)(I.a,{className:s.iconNameArea,children:Object(C.jsx)(O.a,{className:s.iconName,style:{whiteSpace:"pre-line"},children:t.name.replace("\uff08","\n\uff08")})})]})})})},z=i(46),N=i(167),A=i(159),D=i(157),T=i(158),B=i(155),J=i(153),W=i(77),q=i.n(W),M=i(76),Q=i.n(M),V=i(75),H=i.n(V),E=i(108),G=i(74),K=i.n(G),P=i(79),R=i.n(P),U=i(171),X=i(156),Y=i(162),Z=i(160),$=i(161),ee=i(152),te={fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"1rem",fontWeight:700},ie={position:"fixed",bottom:"6rem",right:"2rem",fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"0.85rem",fontWeight:700},ae={position:"fixed",bottom:"2rem",right:"2rem",fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"0.85rem",fontWeight:700};function ne(e){var t=Object(a.useState)(!1),i=Object(z.a)(t,2),n=i[0],c=i[1],o=Object(a.useState)(!1),s=Object(z.a)(o,2),r=s[0],l=s[1],d=Object(a.useState)(!0),h=Object(z.a)(d,2),m=h[0],u=h[1],b=Object(a.useState)(!1),j=Object(z.a)(b,2),p=j[0],f=j[1],O=function(t,i){var a=e.linkList.slice();return i||a.sort((function(e,t){return e.id>t.id?1:-1})),a.map((function(e){return t?e.ngaLink:e.giteeLink})).join("")};return Object(C.jsxs)("div",{children:[Object(C.jsx)(ee.a,{in:e.isQueueNotFull,children:Object(C.jsxs)(J.a,{variant:"extended",color:"primary","aria-label":"selectall",onClick:function(){e.selectAll()},style:ie,children:[Object(C.jsx)(H.a,{}),"\u5168\u9009"]})}),Object(C.jsx)(ee.a,{in:e.hasValueInQueue,children:Object(C.jsxs)(J.a,{variant:"extended",color:"secondary","aria-label":"clear",onClick:function(){e.clearAllSelected()},style:ie,children:[Object(C.jsx)(Q.a,{}),"\u6e05\u7a7a\u9009\u62e9"]})}),Object(C.jsx)(ee.a,{in:e.hasValueInQueue,children:Object(C.jsxs)(J.a,{variant:"extended",color:"primary","aria-label":"generate",onClick:function(){c(!0),e.generateLinksFromList()},style:ae,children:[Object(C.jsx)(q.a,{}),"\u751f\u6210\u56fe\u7247\u94fe\u63a5"]})}),Object(C.jsxs)(N.a,{open:n,keepMounted:!0,onClose:function(){c(!1)},scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"result-dialog-slide-title","aria-describedby":"result-dialog-slide-description",children:[Object(C.jsx)(B.a,{id:"result-dialog-slide-title",style:te,children:"\u751f\u6210\u56fe\u7247\u94fe\u63a5"}),Object(C.jsx)(X.a,{}),Object(C.jsx)(D.a,{children:Object(C.jsx)(T.a,{id:"result-dialog-slide-description",style:te,children:O(m,p)})}),Object(C.jsx)(X.a,{}),Object(C.jsxs)(A.a,{children:[Object(C.jsxs)(Z.a,{children:[Object(C.jsx)($.a,{control:Object(C.jsx)(Y.a,{color:"primary",checked:m,onChange:function(e){u(e.target.checked)}}),label:"\u4f7f\u7528NGA\u56fe\u5e8a"}),Object(C.jsx)($.a,{control:Object(C.jsx)(Y.a,{color:"primary",checked:p,onChange:function(e){f(e.target.checked)}}),label:"\u6309\u7167\u9009\u62e9\u987a\u5e8f\u751f\u6210"})]}),Object(C.jsx)(U.a,{arrow:!0,open:r,onClose:function(){l(!1)},disableHoverListener:!0,placement:"top",title:"\u5df2\u590d\u5236\u81f3\u526a\u8d34\u677f!",style:te,children:Object(C.jsx)(K.a,{text:O(m,p),children:Object(C.jsx)(E.a,{disabled:""===e.linkList,onClick:function(){l(!0)},children:Object(C.jsx)(R.a,{})})})})]})]})]})}var ce=i(84),oe=i(172),se=i(173),re=i(169),le=[{id:"chara",name:"\u89d2\u8272"},{id:"dragon",name:"\u9f99"},{id:"weapon",name:"\u6b66\u5668"},{id:"amulet",name:"\u9f99\u8f89\u62a4\u7b26"}],de={19900001:"19850400",19900002:"19150400",19900005:"19150300"},he={chara:[{id:"chara_rarity",name:"\u539f\u751f\u7a00\u6709\u5ea6"},{id:"chara_weapon_type",name:"\u6b66\u5668\u79cd\u7c7b"},{id:"chara_element",name:"\u5c5e\u6027"}],dragon:[{id:"dragon_rarity",name:"\u7a00\u6709\u5ea6"},{id:"dragon_element",name:"\u5c5e\u6027"}],weapon:[{id:"weapon_rarity",name:"\u7a00\u6709\u5ea6"},{id:"weapon_type",name:"\u6b66\u5668\u79cd\u7c7b"},{id:"weapon_element",name:"\u5c5e\u6027"}],amulet:[{id:"amulet_rarity",name:"\u7a00\u6709\u5ea6"}]},me={chara_rarity:[{id:3,name:"\u4e09\u661f",color:"#a67419"},{id:4,name:"\u56db\u661f",color:"#b5b5b5"},{id:5,name:"\u4e94\u661f",color:"#fcc256"}],chara_weapon_type:[{id:1,name:"\u5251",color:"#0051c9"},{id:2,name:"\u5200",color:"#0051c9"},{id:3,name:"\u77ed\u5251",color:"#0051c9"},{id:4,name:"\u65a7",color:"#0051c9"},{id:5,name:"\u67aa",color:"#0051c9"},{id:6,name:"\u5f13",color:"#0051c9"},{id:7,name:"\u9b54\u6756",color:"#0051c9"},{id:8,name:"\u6cd5\u6756",color:"#0051c9"},{id:9,name:"\u94f3",color:"#0051c9"}],chara_element:[{id:1,name:"\u706b",color:"#c92626"},{id:2,name:"\u6c34",color:"#47b8de"},{id:3,name:"\u98ce",color:"#00a331"},{id:4,name:"\u5149",color:"#fcc256"},{id:5,name:"\u6697",color:"#520099"},{id:9,name:"\u65e0",color:"#b5b5b5"}],dragon_rarity:[{id:3,name:"\u4e09\u661f",color:"#a67419"},{id:4,name:"\u56db\u661f",color:"#b5b5b5"},{id:5,name:"\u4e94\u661f",color:"#fcc256"}],dragon_element:[{id:1,name:"\u706b",color:"#c92626"},{id:2,name:"\u6c34",color:"#47b8de"},{id:3,name:"\u98ce",color:"#00a331"},{id:4,name:"\u5149",color:"#fcc256"},{id:5,name:"\u6697",color:"#520099"},{id:9,name:"\u65e0",color:"#b5b5b5"}],weapon_rarity:[{id:1,name:"\u4e00\u661f",color:"#a8b8a5"},{id:2,name:"\u4e8c\u661f",color:"#5a8700"},{id:3,name:"\u4e09\u661f",color:"#a67419"},{id:4,name:"\u56db\u661f",color:"#b5b5b5"},{id:5,name:"\u4e94\u661f",color:"#fcc256"},{id:6,name:"\u516d\u661f",color:"#660099"}],weapon_type:[{id:1,name:"\u5251",color:"#0051c9"},{id:2,name:"\u5200",color:"#0051c9"},{id:3,name:"\u77ed\u5251",color:"#0051c9"},{id:4,name:"\u65a7",color:"#0051c9"},{id:5,name:"\u67aa",color:"#0051c9"},{id:6,name:"\u5f13",color:"#0051c9"},{id:7,name:"\u9b54\u6756",color:"#0051c9"},{id:8,name:"\u6cd5\u6756",color:"#0051c9"},{id:9,name:"\u94f3",color:"#0051c9"}],weapon_element:[{id:1,name:"\u706b",color:"#c92626"},{id:2,name:"\u6c34",color:"#47b8de"},{id:3,name:"\u98ce",color:"#00a331"},{id:4,name:"\u5149",color:"#fcc256"},{id:5,name:"\u6697",color:"#520099"},{id:9,name:"\u65e0",color:"#b5b5b5"}],amulet_rarity:[{id:3,name:"\u4e09\u661f",color:"#a67419"},{id:4,name:"\u56db\u661f",color:"#b5b5b5"},{id:5,name:"\u4e94\u661f",color:"#fcc256"},{id:9,name:"\u5929\u9b54",color:"#06c4b1"}]},ue={fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontWeight:700,fontSize:"0.85em"},be=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).state={},a}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(x.a,{container:!0,spacing:1,alignItems:"center",justify:"center",wrap:"wrap",children:he[this.props.type].map((function(t){return Object(C.jsx)(x.a,{item:!0,children:Object(C.jsx)(ce.a,{style:{padding:8},children:Object(C.jsxs)(oe.a,{component:"fieldset",children:[Object(C.jsx)(se.a,{component:"legend",style:ue,children:t.name}),Object(C.jsx)(Z.a,{"aria-label":"position",row:!0,children:me[t.id].map((function(i){return Object(C.jsx)($.a,{control:Object(C.jsx)(re.a,{checked:e.props.filterData[t.id].includes(i.id),onChange:function(){e.props.handleCheckBoxChanged(t.id,i.id),e.props.updateIconList()},name:i.name,style:Object(h.a)(Object(h.a)({},ue),{},{color:i.color}),size:"small"}),label:Object(C.jsx)(O.a,{style:ue,children:i.name})},i.id)}))})]})})},t.id)}))})})}}]),i}(a.Component),je=Object(u.a)({typography:{fontFamily:['"Noto Sans SC"',"sans-serif"].join(",")}}),pe=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).state={iconList:[],selectedIconList:[],linkList:[],filterData:{},initialzed:!1},a.initializeIconList=a.initializeIconList.bind(Object(g.a)(a)),a.initilizeFilterData=a.initilizeFilterData.bind(Object(g.a)(a)),a.updateIconList=a.updateIconList.bind(Object(g.a)(a)),a.checkMatchFilter=a.checkMatchFilter.bind(Object(g.a)(a)),a.handleCheckBoxChanged=a.handleCheckBoxChanged.bind(Object(g.a)(a)),a.toggleSelectedById=a.toggleSelectedById.bind(Object(g.a)(a)),a.addToList=a.addToList.bind(Object(g.a)(a)),a.removeFromList=a.removeFromList.bind(Object(g.a)(a)),a.generateLinksFromList=a.generateLinksFromList.bind(Object(g.a)(a)),a.clearAllSelected=a.clearAllSelected.bind(Object(g.a)(a)),a.selectAll=a.selectAll.bind(Object(g.a)(a)),a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.initializeIconList(),this.initilizeFilterData(),this.setState({initialzed:!0})}},{key:"initializeIconList",value:function(){var e=[];for(var t in this.props.iconJson){var i=Object(h.a)(Object(h.a)({uniqueId:t},this.props.iconJson[t]),{},{selected:!1});e.push(i)}this.setState({iconList:e})}},{key:"initilizeFilterData",value:function(){var e={};for(var t in he[this.props.type]){var i=he[this.props.type][t].id;e[i]=me[i].map((function(e){return e.id}))}this.setState({filterData:e})}},{key:"updateIconList",value:function(){var e=[],t=!1;for(var i in this.props.iconJson)if((t=!!this.state.selectedIconList.includes(i))||this.checkMatchFilter("3"===i[0]?i:this.props.iconJson[i].id,this.state.filterData)){var a=Object(h.a)(Object(h.a)({uniqueId:i},this.props.iconJson[i]),{},{selected:t});e.push(a)}this.setState({iconList:e})}},{key:"checkMatchFilter",value:function(e,t){for(var i in e in de&&(e=de[e]),t)switch(i){case"chara_rarity":if(!t[i].includes(parseInt(e[3])))return!1;break;case"chara_weapon_type":if(!t[i].includes(parseInt(e[2])))return!1;break;case"chara_element":if(!t[i].includes(parseInt(e[5])))return!1;break;case"dragon_rarity":if(!t[i].includes(parseInt(e[3])))return!1;break;case"dragon_element":if(!t[i].includes(parseInt(e[5])))return!1;break;case"weapon_rarity":if(!t[i].includes(parseInt(e[10])))return!1;break;case"weapon_type":if(!t[i].includes(parseInt(e[2])))return!1;break;case"weapon_element":if(!t[i].includes(parseInt(e[12])))return!1;break;case"amulet_rarity":if(!t[i].includes(parseInt(e[3])))return!1;break;default:return!1}return!0}},{key:"handleCheckBoxChanged",value:function(e,t){var i=this.state.filterData,a=i[e].indexOf(t);-1!==a?i[e].splice(a,1):i[e].push(t),this.setState({filterData:i})}},{key:"toggleSelectedById",value:function(e){var t=this.state.iconList,i=t.findIndex((function(t){return t.uniqueId===e}));t[i].selected=!t[i].selected,this.setState({iconList:t})}},{key:"addToList",value:function(e){var t=this.state.selectedIconList;t.push(e),this.setState({selectedIconList:t}),console.log(t)}},{key:"removeFromList",value:function(e){var t=this.state.selectedIconList,i=t.indexOf(e);-1!==i&&t.splice(i,1),this.setState({selectedIconList:t}),console.log(t)}},{key:"generateLinksFromList",value:function(e,t){var i=this,a=this.state.selectedIconList.map((function(e){return{id:e,giteeLink:"[img]".concat(i.props.iconJson[e].path,"[/img]").replace("./","https://sh0wer1ee.gitee.io/dlicons/"),ngaLink:"[img]".concat(i.props.iconJson[e].nga_path,"[/img]")}}));this.setState({linkList:a})}},{key:"clearAllSelected",value:function(){var e=this.state.iconList;e=e.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{selected:!1})})),this.setState({iconList:e,selectedIconList:[],linkList:[]})}},{key:"selectAll",value:function(){var e=this.state.iconList,t=[];e=e.map((function(e){return t.push(e.uniqueId),Object(h.a)(Object(h.a)({},e),{},{selected:!0})})),this.setState({iconList:e,selectedIconList:t})}},{key:"render",value:function(){var e=this;return this.state.initialzed&&Object(C.jsxs)(b.a,{theme:je,children:[Object(C.jsxs)(x.a,{container:!0,spacing:1,alignItems:"flex-start",justifyContent:"center",children:[Object(C.jsx)(be,{type:this.props.type,filterData:this.state.filterData,handleCheckBoxChanged:this.handleCheckBoxChanged,updateIconList:this.updateIconList}),this.state.iconList.map((function(t){return Object(C.jsx)(w,{icon:t,uniqueId:t.uniqueId,selected:t.selected,toggleSelectedById:e.toggleSelectedById,addToList:e.addToList,removeFromList:e.removeFromList},t.uniqueId)}))]}),Object(C.jsx)(ne,{generateLinksFromList:this.generateLinksFromList,clearAllSelected:this.clearAllSelected,selectAll:this.selectAll,linkList:this.state.linkList,hasValueInQueue:0!==this.state.selectedIconList.length,isQueueNotFull:this.state.selectedIconList.length!==this.state.iconList.length})]})}}]),i}(a.Component),fe=["children","value","index"],Oe={};function ye(e){var t=e.children,i=e.value,a=e.index,n=Object(m.a)(e,fe);return Object(C.jsx)(O.a,Object(h.a)(Object(h.a)({component:"div",role:"tabpanel",hidden:i!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},n),{},{children:i===a&&Object(C.jsx)(y.a,{p:3,children:t})}))}function ge(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var xe=Object(u.a)({tab:{fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"0.85rem",fontWeight:700},typography:{fontFamily:['"Noto Sans SC"',"sans-serif"].join(",")}}),ve={fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"1rem",fontWeight:700},Le=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).state={value:0,type:"chara",loaded:!1},a}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch("./index").then((function(e){return e.json()})).then((function(t){Oe=t,e.setState({loaded:!0}),console.log(e.state)}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.loaded&&Object(C.jsxs)(b.a,{theme:xe,children:[Object(C.jsx)(j.a,{position:"sticky",color:"default",children:Object(C.jsxs)(p.a,{value:this.state.value,onChange:function(t,i){e.setState({value:i,type:le[i].id})},"aria-label":"icon tabs",indicatorColor:"primary",textColor:"primary",children:[Object(C.jsx)(f.a,Object(h.a)({label:le[0].name,style:ve},ge(0))),Object(C.jsx)(f.a,Object(h.a)({label:le[1].name,style:ve},ge(1))),Object(C.jsx)(f.a,Object(h.a)({label:le[2].name,style:ve},ge(2))),Object(C.jsx)(f.a,Object(h.a)({label:le[3].name,style:ve},ge(3)))]})}),Object(C.jsx)(ye,{value:this.state.value,index:0,children:Object(C.jsx)(pe,{iconJson:Oe.chara,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})}),Object(C.jsx)(ye,{value:this.state.value,index:1,children:Object(C.jsx)(pe,{iconJson:Oe.dragon,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})}),Object(C.jsx)(ye,{value:this.state.value,index:2,children:Object(C.jsx)(pe,{iconJson:Oe.weapon,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})}),Object(C.jsx)(ye,{value:this.state.value,index:3,children:Object(C.jsx)(pe,{iconJson:Oe.amulet,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})})]})}}]),i}(a.Component);o.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(Le,{})}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.71a787b8.chunk.js.map