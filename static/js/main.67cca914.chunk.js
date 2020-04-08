(this["webpackJsonptower-of-hanoi"]=this["webpackJsonptower-of-hanoi"]||[]).push([[0],{112:function(e,t,n){e.exports=n(132)},117:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),s=(n(117),n(10)),c=n(11),l=n(12),u=n(7),m=n(13),h=n(6),d=n(51),p=n(29),f=n(180),g=n(91),b=n.n(g),v=n(191),E=n(99),S=n.n(E),w=n(96),O=n.n(w),y=n(98),k=n.n(y),j=n(97),C=n.n(j),D=n(193),N=n(194),T=n(190),x=n(192),A=n(177),I=n(195),R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,showInfo:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onClose;return r.a.createElement(x.a,{open:!0,onClose:n},r.a.createElement(I.a,null,"About the game"),r.a.createElement(A.a,{className:t.content},r.a.createElement("ul",null,r.a.createElement("li",null,"The objective is to move the stack of disks from the left column to either of the other two columns."),r.a.createElement("li",null,"Drag and drop a disk to move it. You can only move one disk at a time and it must be the disk on top."),r.a.createElement("li",null,"Larger disks cannot be placed on top of smaller disks.")),r.a.createElement("p",null,"Read more about the game"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Tower_of_Hanoi",target:"_blank",rel:"noopener noreferrer"},"here"),".")))}}]),t}(r.a.Component),W=Object(h.a)({content:{marginTop:-20,marginBottom:20}})(R),B=n(179),U=n(102),M=n(188),H=n(66),z=n(40),L=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={verified:!1,submitting:!1,status:""},n.handleSubmit=function(){var e=n.form,t=new FormData(e);t.get("description")&&n.setState({submitting:!0},(function(){var a=new XMLHttpRequest;a.open(e.method,e.action),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?n.setState({submitting:!1,status:"SUCCESS"}):n.setState({submitting:!1,status:"ERROR"}))},a.send(t)}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.windowWidth,o=t.onClose,i=this.state,s=i.verified,c=i.submitting,l=i.status;return r.a.createElement(x.a,{className:n.root,open:!0,onClose:o},r.a.createElement(I.a,null,"Report a bug"),r.a.createElement(A.a,{className:n.content},r.a.createElement(H.a,{onSubmit:this.handleSubmit,initialValues:{description:""}},(function(t){var o=t.handleSubmit,i=t.handleChange,u=t.values;return r.a.createElement("form",{ref:function(t){e.form=t},noValidate:!0,autoComplete:"off",onSubmit:o,action:z.form_endpoint,method:"POST"},r.a.createElement(M.a,{className:n.description,fullWidth:!0,multiline:!0,rowsMax:6,name:"description",label:"Description",helperText:"Describe the bug to report",autoFocus:!0,value:u.description,onChange:function(t){e.setState({status:""}),i(t)},disabled:"SUCCESS"===l}),r.a.createElement(U.a,{size:a<416?"compact":"normal",style:Object(d.a)({},"SUCCESS"===l?{opacity:.65,pointerEvents:"none"}:null),sitekey:z.captcha_sitekey,onChange:function(){return e.setState({verified:!0})},onExpired:function(){return e.setState({verified:!1})}}),r.a.createElement("div",{className:n.submit},"SUCCESS"===l?r.a.createElement("p",{className:n.submitted},"Submitted!"):c?r.a.createElement(B.a,null):r.a.createElement(f.a,{color:"primary",type:"submit",disabled:!u.description||!s},"Submit"),"ERROR"===l&&r.a.createElement("p",{className:n.error},"Ooops! There was an error.")))}))))}}]),t}(r.a.Component),P=Object(h.a)({content:{marginBottom:20,textAlign:"center"},description:{minWidth:"25ch",marginBottom:10},submit:{marginTop:10},submitted:{marginBottom:10},error:{margin:0,color:"#f44336"}})(L),F=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,showInfo:!1,showReportBug:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.windowWidth,o=t.show,i=this.state,s=i.open,c=i.showInfo,l=i.showReportBug;return r.a.createElement("div",null,r.a.createElement(D.a,{ariaLabel:"Actions",className:n.actions,icon:r.a.createElement(N.a,null),onClose:function(){return e.setState({open:!1})},onOpen:function(){return e.setState({open:!0})},open:s,direction:"down"},r.a.createElement(T.a,{icon:r.a.createElement(O.a,null),tooltipTitle:"Like",tooltipPlacement:"right",onClick:function(){return e.setState({open:!1})}}),r.a.createElement(T.a,{icon:r.a.createElement(C.a,null),tooltipTitle:"Share",tooltipPlacement:"right",onClick:function(){return e.setState({open:!1})}}),r.a.createElement(T.a,{icon:r.a.createElement(k.a,null),tooltipTitle:"Info",tooltipPlacement:"right",onClick:function(){o(),e.setState({open:!1,showInfo:!0})}}),r.a.createElement(T.a,{icon:r.a.createElement(S.a,null),tooltipTitle:"Report Bug",tooltipPlacement:"right",onClick:function(){o(),e.setState({open:!1,showReportBug:!0})}})),c&&r.a.createElement(W,{onClose:function(){return e.setState({showInfo:!1})}}),l&&r.a.createElement(P,{windowWidth:a,onClose:function(){return e.setState({showReportBug:!1})}}))}}]),t}(r.a.Component),_=Object(h.a)({actions:{position:"absolute",top:15,left:15}})(F),G=n(30),J=n(75),Y=n(182),V=n(100),q=n(23),X=n.n(q),K=n(37),$=n(77),Q=n.n($),Z=60,ee=20,te=["rgb(215, 169, 227, 0.4)","rgb(139, 190, 232, 0.4)","rgb(168, 213, 186, 0.4)"],ne=["#fef200","#9bca3b","#27b252","#0db0a1","#3654a7","#493a98","#92278f","#92296d","#ed1923","#ef4224","#f36522","#f89f1a"],ae=function(e){var t=Q.a.duration(e);return Math.floor(t.asHours())+Q.a.utc(t.asMilliseconds()).format(":mm:ss:SSS")},re=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t},oe=function(e){return e[e.length-1]},ie=function(e){return e.slice(0,e.length-1)},se=function(e){var t=Z,n=ee,a=.4*e+.6;return[Math.ceil(t*a),n]},ce=function(e,t,n,a){var r=Object(p.a)(t),o=Object(p.a)(n),i=Object(p.a)(a),s="",c=function(e,t,n){e===r?r.pop():e===o?o.pop():i.pop(),t===r?r.push(n):t===o?o.push(n):i.push(n)},l=function(){var e=Object(K.a)(X.a.mark((function e(t,n){var a,u;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=t;case 1:if(!(u>=1)){e.next=14;break}if(r===n||!r.includes(u)){e.next=5;break}return a=r,e.abrupt("break",14);case 5:if(o===n||!o.includes(u)){e.next=8;break}return a=o,e.abrupt("break",14);case 8:if(i===n||!i.includes(u)){e.next=11;break}return a=i,e.abrupt("break",14);case 11:u--,e.next=1;break;case 14:if(0!==u){e.next=16;break}return e.abrupt("return");case 16:l(u-1,r!==a&&r!==n?r:o!==a&&o!==n?o:i),c(a,n,u),s+="".concat(JSON.stringify({col1:r,col2:o,col3:i}),","),l(u-1,n);case 21:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return l(e,o),"[".concat(s.slice(0,-1),"]")};var le=function(e){var t=e.active,n=e.xy,o=e.startMove,i=e.move,s=e.endMove,c=e.size,l=e.color,u=e.divWidth,m=e.isTiming,h=e.startTimer,d=se(c),p=Object(G.a)(d,2),f=p[0],g=p[1],b=Object(a.useState)(!1),v=Object(G.a)(b,2),E=v[0],S=v[1],w=Object(a.useState)(1),O=Object(G.a)(w,2),y=O[0],k=O[1],j=Object(J.a)((function(){return{x:n[0],y:n[1],onRest:function(){E||s()}}}),[E,s]),C=Object(G.a)(j,2),D=C[0],N=D.x,T=D.y,x=C[1];Object(a.useEffect)((function(){x({x:e.xy[0],y:e.xy[1]})}),[x,e.xy]);var A=r.a.useRef(null),I=Object(V.a)({onDragStart:function(e){e.event.preventDefault(),t&&(o(),S(!0),m||h())},onDrag:function(e){var n=e.event,a=Object(G.a)(e.xy,2),r=a[0],o=a[1];n.preventDefault(),t&&(x({x:r-f/2,y:o-g/2}),99!==y&&k(99))},onDragEnd:function(e){var n=e.event,a=Object(G.a)(e.xy,2),r=a[0];a[1];if(n.preventDefault(),t){var o=r<=u?1:r<=2*u?2:3;S(!1),k(1),i(o,c)}}},{domTarget:A,eventOptions:{passive:!1}});return r.a.useEffect(I,[I]),r.a.createElement(Y.a.div,Object.assign({ref:A},I(),{style:{position:"absolute",x:N,y:T,zIndex:y,width:f,height:g,borderRadius:"20px",background:l,cursor:t?"grab":"default",display:"flex",justifyContent:"center"}}),r.a.createElement("span",{style:{alignSelf:"center"}},c))},ue=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={fetching:!0,highScore:null,submitting:!1,showError:!1},n.renderTimeSubmitForm=function(){var e=n.props.classes;return r.a.createElement(H.a,{onSubmit:n.handleSubmit,initialValues:{name:""}},(function(t){var a=t.handleSubmit,o=t.handleChange,i=t.values;return r.a.createElement("form",{className:e.form,onSubmit:a},r.a.createElement(M.a,{name:"name",label:"Name",helperText:"Enter your name to display on the leaderboard",autoFocus:!0,value:i.name,onChange:function(e){n.setState({showError:!1}),o(e)}}),r.a.createElement(f.a,{className:e.submit,color:"primary",type:"submit",disabled:!i.name},"Submit"))}))},n.handleSubmit=function(e){var t=e.name,a=n.props,r=a.numDisks,o=a.time,i=a.onSubmit;n.setState({submitting:!0},(function(){fetch(z.api_endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"update-high-scores",NumDisks:r,name:t,time:o})}).then((function(e){return e.json()})).then((function(e){e.success?(n.setState({submitting:!1}),i()):(n.setState({submitting:!1,showError:!0}),console.log(e.message))})).catch((function(e){return console.log("Unable to connect to API.",e)}))}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.numDisks;fetch(z.api_endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"get-high-scores"})}).then((function(e){return e.json()})).then((function(n){if(n.success){var a=n.highScores.filter((function(e){return e.NumDisks===t}));e.setState({fetching:!1,highScore:a.length?a[0]:null})}else e.setState({fetching:!1}),console.log(n.message)})).catch((function(e){return console.log("Unable to connect to API.",e)}))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.numDisks,a=e.time,o=e.onClose,i=this.state,s=i.fetching,c=i.highScore,l=i.submitting,u=i.showError;return r.a.createElement("div",null,r.a.createElement(x.a,{className:t.root,open:!0,onClose:o},r.a.createElement(I.a,null,"Your time is ",ae(a),"!"),r.a.createElement(A.a,{className:t.content},s?r.a.createElement(B.a,null):c?a<c.time?r.a.createElement("div",null,r.a.createElement("div",null,"You beat the current high score of"," ",r.a.createElement("strong",null,c.name)," of"," ",r.a.createElement("strong",null,ae(c.time))," for ",n," ","disk(s)."),r.a.createElement("br",null),l?r.a.createElement(B.a,null):this.renderTimeSubmitForm()):r.a.createElement("div",null,r.a.createElement("div",null,"You haven't beaten the current high score of"," ",r.a.createElement("strong",null,c.name)," of"," ",r.a.createElement("strong",null,ae(c.time))," for ",n," ","disk(s)."),r.a.createElement("p",null,"Try again!")):r.a.createElement("div",null,r.a.createElement("div",null,"There is no high score for now for ",n," disk(s)."),r.a.createElement("br",null),l?r.a.createElement(B.a,null):this.renderTimeSubmitForm()),u&&r.a.createElement("p",{className:t.error},"Something went wrong. Try again later."))))}}]),t}(r.a.Component),me=Object(h.a)({root:{textAlign:"center"},content:{marginBottom:20},form:{display:"flex",flexDirection:"column"},submit:{marginTop:10},error:{color:"#f44336"}})(ue),he=n(183),de=n(187),pe=n(186),fe=n(184),ge=n(185),be=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={fetching:!0,highScores:[],showError:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(z.api_endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"get-high-scores"})}).then((function(e){return e.json()})).then((function(t){t.success?e.setState({fetching:!1,highScores:t.highScores.sort((function(e,t){return e.NumDisks-t.NumDisks}))}):(e.setState({fetching:!1,showError:!0}),console.log(t.message))})).catch((function(e){return console.log("Unable to connect to API.",e)}))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onClose,a=this.state,o=a.fetching,i=a.highScores,s=a.showError;return r.a.createElement(x.a,{className:t.root,open:!0,onClose:n},r.a.createElement(I.a,null,"Leaderboard"),r.a.createElement(A.a,{className:t.content},o?r.a.createElement(B.a,null):i.length?r.a.createElement(he.a,{size:"small"},r.a.createElement(fe.a,null,r.a.createElement(ge.a,null,r.a.createElement(pe.a,null,"No. Disks"),r.a.createElement(pe.a,{align:"right"},"Name"),r.a.createElement(pe.a,{align:"right"},"Time"))),r.a.createElement(de.a,null,i.map((function(e){var t=e.time;return r.a.createElement(ge.a,{key:e.NumDisks},r.a.createElement(pe.a,{component:"th",scope:"row"},e.NumDisks),r.a.createElement(pe.a,{align:"right"},e.name),r.a.createElement(pe.a,{align:"right"},ae(t)))})))):!s&&"There are no high scores for now.",s&&r.a.createElement("div",{className:t.error},"Something went wrong. Try again later.")))}}]),t}(r.a.Component),ve=Object(h.a)({root:{textAlign:"center"},content:{marginBottom:20},error:{color:"#f44336"}})(be),Ee=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={handler:null,millisecs:0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(!e.running&&this.props.running){var n=setInterval((function(){var e=t.state.millisecs;t.setState({millisecs:e+1})}),1);this.setState({handler:n})}if(e.running&&!this.props.running){var a=this.state.handler;clearInterval(a),e.disabled||this.props.disabled||this.props.recordTime(this.state.millisecs)}}},{key:"componentWillUnmount",value:function(){var e=this.state.handler;clearInterval(e)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.disabled,a=e.recordTime,o=this.state.millisecs;return r.a.createElement("div",{style:{color:n?"#f44336":"inherit"}},r.a.createElement("div",{className:t.time,onClick:function(){return a(o)}},ae(o)),n&&r.a.createElement("div",{className:t.warning},"Time is now invalid!"))}}]),t}(r.a.Component),Se=Object(h.a)({time:{width:"fit-content",margin:"auto",cursor:"pointer"},warning:{marginTop:10}})(Ee),we=ne,Oe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={col1:re(n.props.numDisks).reverse(),col2:[],col3:[],movingDisk:null,solving:!1,handler:null,step:0,showLeaderboard:!1,isTiming:!1,time:null,hasUsedSolve:!1,showGameOver:!1,hasSubmitted:!1,showSubmissionSuccess:!1},n.isGameOver=function(){var e=n.props.numDisks,t=n.state,a=t.col2,r=t.col3;return!t.movingDisk&&(a.length===e||r.length===e)},n.getIsActive=function(e){var t=n.state,a=t.col1,r=t.col2,o=t.col3,i=t.movingDisk,s=t.solving;return(!i||i===e)&&!s&&!n.isGameOver()&&(oe(a)===e||oe(r)===e||oe(o)===e)},n.getPosition=function(e){var t=n.props.windowWidth,a=n.state,r=a.col1,o=a.col2,i=a.col3,s=t/6,c=se(e)[0];return r.includes(e)?[s-c/2,n.getY(r,e)]:o.includes(e)?[3*s-c/2,n.getY(o,e)]:[5*s-c/2,n.getY(i,e)]},n.getY=function(e,t){for(var a=n.props.windowHeight-150-se(t)[1],r=0;e[r]!==t;)a-=se(e[r])[1],r++;return a},n.move=function(e,t){var a=n.state,r=a.col1,o=a.col2,i=a.col3,s=r.includes(t)?r:o.includes(t)?o:i,c=1===e?r:2===e?o:i;if(!(s===c||t>oe(c))){var l=ie(s),u=[].concat(Object(p.a)(c),[t]),m=r===s?l:r===c?u:r,h=o===s?l:o===c?u:o,d=i===s?l:i===c?u:i;n.setState({col1:m,col2:h,col3:d})}},n.solve=function(){n.setState({isTiming:!1,hasUsedSolve:!0});var e=n.props.numDisks,t=n.state,a=t.col1,r=t.col2,o=t.col3,i=JSON.parse(ce(e,Object(p.a)(a),Object(p.a)(r),Object(p.a)(o)));n.setState({solving:!0,steps:i,step:0},(function(){var e=setInterval((function(){var t=n.state,a=t.steps,r=t.step;r<a.length?n.setState(Object(d.a)({},a[r],{step:r+1})):clearInterval(e)}),1e3);n.setState({handler:e})}))},n.stop=function(){var e=n.state.handler;n.setState({solving:!1},(function(){return clearInterval(e)}))},n.show=function(e){var t=n.state,a=t.solving,r=t.handler;a&&!n.isGameOver()?n.setState(Object(d.a)({solving:!1},e),(function(){return clearInterval(r)})):n.setState(Object(d.a)({},e))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){var e=this.state.handler;e&&clearInterval(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.numDisks,o=t.windowWidth,i=t.windowHeight,s=t.restart,c=this.state,l=c.solving,u=c.showLeaderboard,m=c.isTiming,h=c.time,d=c.hasUsedSolve,p=c.showGameOver,g=c.hasSubmitted,E=c.showSubmissionSuccess,S=o/3,w=this.isGameOver();return r.a.createElement("div",null,r.a.createElement(_,{windowWidth:o,show:this.show}),r.a.createElement("div",{className:n.controlButtons},!l&&r.a.createElement(f.a,{color:"primary",disabled:w,onClick:this.solve},"Solve"),l&&r.a.createElement(f.a,{color:"primary",disabled:w,onClick:this.stop},"Stop"),r.a.createElement(f.a,{color:"secondary",onClick:s},"Restart")),r.a.createElement("div",{className:n.leaderboardButton},r.a.createElement(f.a,{onClick:function(){return e.show({showLeaderboard:!0})}},"Leaderboard")),r.a.createElement("div",{className:n.timer},r.a.createElement(Se,{running:m&&!w,disabled:d,recordTime:function(t){return e.setState({time:t,showGameOver:!0})}})),u&&r.a.createElement(ve,{onClose:function(){return e.setState({showLeaderboard:!1})}}),p&&w&&!d&&!g&&r.a.createElement(me,{numDisks:a,time:h,onClose:function(){return e.setState({showGameOver:!1})},onSubmit:function(){return e.setState({hasSubmitted:!0,showSubmissionSuccess:!0})}}),E&&r.a.createElement(v.a,{className:n.success,open:!0,message:"High score submitted!",onClose:function(){return e.setState({showSubmissionSuccess:!1})}}),w&&r.a.createElement(b.a,{width:o,height:i}),re(a).map((function(t){return r.a.createElement(le,{key:t,active:e.getIsActive(t),xy:e.getPosition(t),startMove:function(){return e.setState({movingDisk:t})},move:e.move,endMove:function(){return e.setState({movingDisk:null})},size:t,color:we[t-1],divWidth:S,isTiming:m,startTimer:function(){e.state.hasUsedSolve||e.setState({isTiming:!0})}})})))}}]),t}(r.a.Component),ye=Object(h.a)({controlButtons:{position:"absolute",top:30,left:0,right:0,display:"flex",justifyContent:"center"},leaderboardButton:{position:"absolute",top:70,left:0,right:0},timer:{position:"absolute",top:110,left:0,right:0},success:{width:"fit-content",margin:"auto"}})(Oe),ke=ne.length,je=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1},n.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),a=parseInt(t.get("numDisks"));re(ke).includes(a)?n.props.setNumDisks(a):n.setState({error:!0})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.error;return r.a.createElement("div",{className:e.root},r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},r.a.createElement(M.a,{name:"numDisks",label:"Number of Disks",helperText:"Enter a number up to ".concat(ke),autoFocus:!0,error:t}),r.a.createElement("br",null),r.a.createElement(f.a,{className:e.submit,color:"primary",type:"submit"},"Go")))}}]),t}(r.a.Component),Ce=Object(h.a)({root:{marginTop:30},submit:{marginTop:10}})(je),De=te,Ne=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={windowWidth:window.innerWidth,windowHeight:window.innerHeight,initializing:!0,numDisks:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(t){var n=t.target;return e.setState({windowWidth:n.innerWidth,windowHeight:n.innerHeight})}))}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.windowWidth,o=n.windowHeight,i=n.initializing,s=n.numDisks,c=a/3,l=o-150;return r.a.createElement("div",null,r.a.createElement("div",{className:t.overground},r.a.createElement("div",{style:{width:c,height:l,background:De[0]}}),r.a.createElement("div",{style:{width:c,height:l,background:De[1]}}),r.a.createElement("div",{style:{width:c,height:l,background:De[2]}}),r.a.createElement("div",{className:t.game},i?r.a.createElement(Ce,{setNumDisks:function(t){return e.setState({initializing:!1,numDisks:t})}}):r.a.createElement(ye,{numDisks:s,windowWidth:a,windowHeight:o,restart:function(){return e.setState({initializing:!0})}}))),r.a.createElement("div",{style:{width:a,height:150,background:"gainsboro"}}))}}]),t}(r.a.Component),Te=Object(h.a)({overground:{position:"relative",display:"flex",userSelect:"none"},game:{position:"absolute",left:0,right:0,textAlign:"center"}})(Ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e){e.exports=JSON.parse('{"api_endpoint":"https://sh3006jwh7.execute-api.us-east-2.amazonaws.com/prod/high-scores","form_endpoint":"https://formspree.io/mbjaozdw","captcha_sitekey":"6LcGsucUAAAAAKJMt8JzxkfFSx5eYX-m7bFEFUMr"}')}},[[112,1,2]]]);
//# sourceMappingURL=main.67cca914.chunk.js.map