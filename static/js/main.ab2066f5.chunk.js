(this["webpackJsonpdlicon-react"]=this["webpackJsonpdlicon-react"]||[]).push([[0],{100:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(11),c=i.n(s),o=i(44),l=i(45),r=i(53),d=i(52),j=i(18),h=i(76),u=i(75),b=i(158),m=i(159),O=i(163),p=i(160),f=i(61),L=i(161),g=i(20),x=i(141),v=i(3),y=i(140),S=i(143),k=i(144),I=i(146),F=i(145),C=i(4),N=Object(y.a)({root:{width:120},iconAdded:{backgroundColor:"#006699"},Icon:{margin:"auto",height:120,width:120},iconNameArea:{padding:0,height:"3em"},iconName:{width:"100%",height:"100%",margin:"auto",textAlign:"center",fontSize:"0.85rem",padding:0,fontWeight:700,lineHeight:1.2}});var T=function(e){var t=e.icon,i=e.uniqueId,n=e.addToList,a=e.removeFromList,s=e.selected,c=e.toggleSelectedById,o=N();return Object(C.jsx)(x.a,{item:!0,children:Object(C.jsx)(S.a,{className:Object(v.a)(o.root,s&&o.iconAdded),children:Object(C.jsxs)(k.a,{onClick:function(){s?(c(i),a(i)):(c(i),n(i))},children:[Object(C.jsx)(F.a,{className:o.Icon,component:"img",image:t.path.replace("/s/","/l/"),title:t.name}),Object(C.jsx)(I.a,{className:o.iconNameArea,children:Object(C.jsx)(f.a,{className:o.iconName,style:{whiteSpace:"pre-line"},children:t.name.replace("\uff08","\n\uff08")})})]})})})},A=i(40),w=i(162),J=i(154),W=i(152),B=i(153),q=i(150),z=i(148),M=i(72),D=i.n(M),H=i(71),Q=i.n(H),V=i(157),E=i(70),G=i.n(E),_=i(74),K=i.n(_),P=i(166),R=i(151),U=i(165),X=i(155),Y=i(156),Z=i(147),$={fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"1rem",fontWeight:700},ee={position:"fixed",bottom:"6rem",right:"2rem",fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"0.85rem",fontWeight:700},te={position:"fixed",bottom:"2rem",right:"2rem",fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"0.85rem",fontWeight:700};function ie(e){var t=Object(n.useState)(!1),i=Object(A.a)(t,2),a=i[0],s=i[1],c=Object(n.useState)(!1),o=Object(A.a)(c,2),l=o[0],r=o[1],d=Object(n.useState)(!0),j=Object(A.a)(d,2),h=j[0],u=j[1],b=Object(n.useState)(!1),m=Object(A.a)(b,2),O=m[0],p=m[1],f=function(t,i){var n=e.linkList.slice();return i||n.sort((function(e,t){return e.id>t.id?1:-1})),n.map((function(e){return t?e.ngaLink:e.giteeLink})).join("")};return Object(C.jsxs)("div",{children:[Object(C.jsx)(Z.a,{in:e.hasValueInQueue,children:Object(C.jsxs)(z.a,{variant:"extended",color:"secondary","aria-label":"clear",onClick:function(){e.clearAllSelected()},style:ee,children:[Object(C.jsx)(Q.a,{}),"\u6e05\u7a7a\u9009\u62e9"]})}),Object(C.jsxs)(z.a,{variant:"extended",color:"primary","aria-label":"generate",onClick:function(){s(!0),e.generateLinksFromList()},style:te,children:[Object(C.jsx)(D.a,{}),"\u751f\u6210\u56fe\u7247\u94fe\u63a5"]}),Object(C.jsxs)(w.a,{open:a,keepMounted:!0,onClose:function(){s(!1)},scroll:"paper",fullWidth:!0,maxWidth:"md","aria-labelledby":"result-dialog-slide-title","aria-describedby":"result-dialog-slide-description",children:[Object(C.jsx)(q.a,{id:"result-dialog-slide-title",style:$,children:"\u751f\u6210\u56fe\u7247\u94fe\u63a5"}),Object(C.jsx)(R.a,{}),Object(C.jsx)(W.a,{children:Object(C.jsx)(B.a,{id:"result-dialog-slide-description",style:$,children:f(h,O)})}),Object(C.jsx)(R.a,{}),Object(C.jsxs)(J.a,{children:[Object(C.jsxs)(X.a,{children:[Object(C.jsx)(Y.a,{control:Object(C.jsx)(U.a,{color:"primary",checked:h,onChange:function(e){u(e.target.checked)}}),label:"\u4f7f\u7528NGA\u56fe\u5e8a"}),Object(C.jsx)(Y.a,{control:Object(C.jsx)(U.a,{color:"primary",checked:O,onChange:function(e){p(e.target.checked)}}),label:"\u6309\u7167\u9009\u62e9\u987a\u5e8f\u751f\u6210"})]}),Object(C.jsx)(P.a,{arrow:!0,open:l,onClose:function(){r(!1)},disableHoverListener:!0,placement:"top",title:"\u5df2\u590d\u5236\u81f3\u526a\u8d34\u677f!",style:$,children:Object(C.jsx)(G.a,{text:f(h,O),children:Object(C.jsx)(V.a,{disabled:""===e.linkList,onClick:function(){r(!0)},children:Object(C.jsx)(K.a,{})})})})]})]})]})}var ne=function(e){Object(r.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={iconList:[],selectedIconList:[],linkList:[]},n.updateIconList=n.updateIconList.bind(Object(g.a)(n)),n.toggleSelectedById=n.toggleSelectedById.bind(Object(g.a)(n)),n.addToList=n.addToList.bind(Object(g.a)(n)),n.removeFromList=n.removeFromList.bind(Object(g.a)(n)),n.generateLinksFromList=n.generateLinksFromList.bind(Object(g.a)(n)),n.clearAllSelected=n.clearAllSelected.bind(Object(g.a)(n)),n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.updateIconList(this.props.iconJson)}},{key:"updateIconList",value:function(e){var t=[];for(var i in e){var n=Object(j.a)(Object(j.a)({uniqueId:i},e[i]),{},{selected:!1});t.push(n)}this.setState({iconList:t})}},{key:"toggleSelectedById",value:function(e){var t=this.state.iconList,i=t.findIndex((function(t){return t.uniqueId===e}));t[i].selected=!t[i].selected,this.setState({iconList:t})}},{key:"addToList",value:function(e){var t=this.state.selectedIconList;t.push(e),this.setState({selectedIconList:t}),console.log(t)}},{key:"removeFromList",value:function(e){var t=this.state.selectedIconList,i=t.indexOf(e);-1!==i&&t.splice(i,1),this.setState({selectedIconList:t}),console.log(t)}},{key:"generateLinksFromList",value:function(e,t){var i=this,n=this.state.selectedIconList.map((function(e){return{id:e,giteeLink:"[img]".concat(i.props.iconJson[e].path,"[/img]").replace("./","https://sh0wer1ee.gitee.io/dlicons/"),ngaLink:"[img]".concat(i.props.iconJson[e].nga_path,"[/img]")}}));this.setState({linkList:n})}},{key:"clearAllSelected",value:function(){this.updateIconList(this.props.iconJson),this.setState({selectedIconList:[],linkList:[]})}},{key:"render",value:function(){var e=this;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x.a,{container:!0,spacing:1,alignItems:"flex-start",justifyContent:"center",children:this.state.iconList.map((function(t){return Object(C.jsx)(T,{icon:t,uniqueId:t.uniqueId,selected:t.selected,toggleSelectedById:e.toggleSelectedById,addToList:e.addToList,removeFromList:e.removeFromList},t.uniqueId)}))}),Object(C.jsx)(ie,{generateLinksFromList:this.generateLinksFromList,clearAllSelected:this.clearAllSelected,linkList:this.state.linkList,hasValueInQueue:0!==this.state.selectedIconList.length})]})}}]),i}(n.Component),ae=["children","value","index"],se=["chara","dragon","weapon","amulet"],ce={};function oe(e){var t=e.children,i=e.value,n=e.index,a=Object(h.a)(e,ae);return Object(C.jsx)(f.a,Object(j.a)(Object(j.a)({component:"div",role:"tabpanel",hidden:i!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a),{},{children:i===n&&Object(C.jsx)(L.a,{p:3,children:t})}))}function le(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var re=Object(u.a)({tab:{fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"0.85rem",fontWeight:700},typography:{fontFamily:['"Noto Sans SC"',"sans-serif"].join(",")}}),de={fontFamily:['"Noto Sans SC"',"sans-serif"].join(","),fontSize:"1rem",fontWeight:700},je=function(e){Object(r.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={value:0,type:"chara",loaded:!1},n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch("./index.json").then((function(e){return e.json()})).then((function(t){ce=t,e.setState({loaded:!0})}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.loaded&&Object(C.jsxs)(b.a,{theme:re,children:[Object(C.jsx)(m.a,{position:"sticky",children:Object(C.jsxs)(O.a,{value:this.state.value,onChange:function(t,i){e.setState({value:i,type:se[i]})},"aria-label":"icon tabs",children:[Object(C.jsx)(p.a,Object(j.a)({label:"\u89d2\u8272",style:de},le(0))),Object(C.jsx)(p.a,Object(j.a)({label:"\u9f99",style:de},le(1))),Object(C.jsx)(p.a,Object(j.a)({label:"\u6b66\u5668",style:de},le(2))),Object(C.jsx)(p.a,Object(j.a)({label:"\u9f99\u8f89\u62a4\u7b26",style:de},le(4)))]})}),Object(C.jsx)(oe,{value:this.state.value,index:0,children:Object(C.jsx)(ne,{iconJson:ce.chara,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})}),Object(C.jsx)(oe,{value:this.state.value,index:1,children:Object(C.jsx)(ne,{iconJson:ce.dragon,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})}),Object(C.jsx)(oe,{value:this.state.value,index:2,children:Object(C.jsx)(ne,{iconJson:ce.weapon,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})}),Object(C.jsx)(oe,{value:this.state.value,index:3,children:Object(C.jsx)(ne,{iconJson:ce.amulet,type:this.state.type,addToList:this.addToList,removeFromList:this.removeFromList})})]})}}]),i}(n.Component);c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(je,{})}),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.ab2066f5.chunk.js.map