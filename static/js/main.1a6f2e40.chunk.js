(this["webpackJsonptower-of-hanoi"]=this["webpackJsonptower-of-hanoi"]||[]).push([[0],{112:function(e,t,n){e.exports=n(132)},117:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),s=(n(117),n(10)),c=n(11),l=n(12),u=n(7),m=n(13),h=n(6),d=n(52),p=n(25),f=n(181),g=n(91),b=n.n(g),v=n(194),E=n(99),S=n.n(E),w=n(96),k=n.n(w),y=n(98),O=n.n(y),j=n(97),C=n.n(j),D=n(195),x=n(196),T=n(192),N=n(193),A=n(178),I=n(197),W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,showInfo:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onClose;return r.a.createElement(N.a,{open:!0,onClose:n},r.a.createElement(I.a,null,"About the game"),r.a.createElement(A.a,{className:t.content},r.a.createElement("ul",null,r.a.createElement("li",null,"The objective is to move the stack of disks from the left column to either of the other two columns."),r.a.createElement("li",null,"Drag and drop a disk to move it. You can only move one disk at a time and it must be the disk on top."),r.a.createElement("li",null,"Larger disks cannot be placed on top of smaller disks.")),r.a.createElement("p",null,"Read more about the game"," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Tower_of_Hanoi",target:"_blank",rel:"noopener noreferrer"},"here"),".")))}}]),t}(r.a.Component),_=Object(h.a)({content:{marginTop:-20,marginBottom:20}})(W),R=n(180),B=n(102),H=n(190),M=n(67),F=n(36),U=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={verified:!1,submitting:!1,status:""},n.handleSubmit=function(){var e=n.form,t=new FormData(e);t.get("description")&&n.setState({submitting:!0},(function(){var a=new XMLHttpRequest;a.open(e.method,e.action),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?n.setState({submitting:!1,status:"SUCCESS"}):n.setState({submitting:!1,status:"ERROR"}))},a.send(t)}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.windowWidth,i=t.onClose,o=this.state,s=o.verified,c=o.submitting,l=o.status;return r.a.createElement(N.a,{className:n.root,open:!0,onClose:i},r.a.createElement(I.a,null,"Report a bug"),r.a.createElement(A.a,{className:n.content},r.a.createElement(M.a,{onSubmit:this.handleSubmit,initialValues:{description:""}},(function(t){var i=t.handleSubmit,o=t.handleChange,u=t.values;return r.a.createElement("form",{ref:function(t){e.form=t},noValidate:!0,autoComplete:"off",onSubmit:i,action:F.form_endpoint,method:"POST"},r.a.createElement(H.a,{className:n.description,fullWidth:!0,multiline:!0,rowsMax:6,name:"description",label:"Description",helperText:"Describe the bug to report",autoFocus:!0,value:u.description,onChange:function(t){e.setState({status:""}),o(t)},disabled:"SUCCESS"===l}),r.a.createElement(B.a,{size:a<416?"compact":"normal",style:Object(d.a)({},"SUCCESS"===l?{opacity:.65,pointerEvents:"none"}:null),sitekey:F.captcha_sitekey,onChange:function(){return e.setState({verified:!0})},onExpired:function(){return e.setState({verified:!1})}}),r.a.createElement("div",{className:n.submit},"SUCCESS"===l?r.a.createElement("p",{className:n.submitted},"Submitted!"):c?r.a.createElement(R.a,null):r.a.createElement(f.a,{color:"primary",type:"submit",disabled:!u.description||!s},"Submit"),"ERROR"===l&&r.a.createElement("p",{className:n.error},"Ooops! There was an error.")))}))))}}]),t}(r.a.Component),L=Object(h.a)({content:{marginBottom:20,textAlign:"center"},description:{minWidth:"25ch",marginBottom:10},submit:{marginTop:10},submitted:{marginBottom:10},error:{margin:0,color:"#f44336"}})(U),P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,showInfo:!1,showReportBug:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.windowWidth,i=t.show,o=this.state,s=o.open,c=o.showInfo,l=o.showReportBug;return r.a.createElement("div",null,r.a.createElement(D.a,{ariaLabel:"Actions",className:n.actions,icon:r.a.createElement(x.a,null),onClose:function(){return e.setState({open:!1})},onOpen:function(){return e.setState({open:!0})},open:s,direction:"down"},r.a.createElement(T.a,{icon:r.a.createElement(k.a,null),tooltipTitle:"Like",tooltipPlacement:"right",onClick:function(){return e.setState({open:!1})}}),r.a.createElement(T.a,{icon:r.a.createElement(C.a,null),tooltipTitle:"Share",tooltipPlacement:"right",onClick:function(){return e.setState({open:!1})}}),r.a.createElement(T.a,{icon:r.a.createElement(O.a,null),tooltipTitle:"Info",tooltipPlacement:"right",onClick:function(){i(),e.setState({open:!1,showInfo:!0})}}),r.a.createElement(T.a,{icon:r.a.createElement(S.a,null),tooltipTitle:"Report Bug",tooltipPlacement:"right",onClick:function(){i(),e.setState({open:!1,showReportBug:!0})}})),c&&r.a.createElement(_,{onClose:function(){return e.setState({showInfo:!1})}}),l&&r.a.createElement(L,{windowWidth:a,onClose:function(){return e.setState({showReportBug:!1})}}))}}]),t}(r.a.Component),z=Object(h.a)({actions:{position:"absolute",top:15,left:15}})(P),G=n(30),Y=n(76),J=n(183),V=n(100),q=n(23),X=n.n(q),K=n(39),$=n(32),Q=n.n($),Z=60,ee=20,te=["rgb(215, 169, 227, 0.4)","rgb(139, 190, 232, 0.4)","rgb(168, 213, 186, 0.4)"],ne=["#fef200","#9bca3b","#27b252","#0db0a1","#3654a7","#493a98","#92278f","#92296d","#ed1923","#ef4224","#f36522","#f89f1a"],ae=function(e){var t=Q.a.duration(e);return Math.floor(t.asHours())+Q.a.utc(t.asMilliseconds()).format(":mm:ss:SSS")},re=function(e,t){return e.length<=t?e:e.slice(0,t)},ie=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t},oe=function(e){return e[e.length-1]},se=function(e){return e.slice(0,e.length-1)},ce=function(e){var t=Z,n=ee,a=.4*e+.6;return[Math.ceil(t*a),n]},le=function(e,t,n,a){var r=Object(p.a)(t),i=Object(p.a)(n),o=Object(p.a)(a),s="",c=function(e,t,n){e===r?r.pop():e===i?i.pop():o.pop(),t===r?r.push(n):t===i?i.push(n):o.push(n)},l=function(){var e=Object(K.a)(X.a.mark((function e(t,n){var a,u;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=t;case 1:if(!(u>=1)){e.next=14;break}if(r===n||!r.includes(u)){e.next=5;break}return a=r,e.abrupt("break",14);case 5:if(i===n||!i.includes(u)){e.next=8;break}return a=i,e.abrupt("break",14);case 8:if(o===n||!o.includes(u)){e.next=11;break}return a=o,e.abrupt("break",14);case 11:u--,e.next=1;break;case 14:if(0!==u){e.next=16;break}return e.abrupt("return");case 16:l(u-1,r!==a&&r!==n?r:i!==a&&i!==n?i:o),c(a,n,u),s+="".concat(JSON.stringify({col1:r,col2:i,col3:o}),","),l(u-1,n);case 21:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return l(e,i),"[".concat(s.slice(0,-1),"]")};var ue=function(e){var t=e.active,n=e.xy,i=e.startMove,o=e.endDrag,s=e.move,c=e.endMove,l=e.size,u=e.color,m=e.windowWidth,h=e.windowHeight,d=e.divWidth,p=e.isTiming,f=e.startTimer,g=ce(l),b=Object(G.a)(g,2),v=b[0],E=b[1],S=Object(a.useState)(!1),w=Object(G.a)(S,2),k=w[0],y=w[1],O=Object(a.useState)(1),j=Object(G.a)(O,2),C=j[0],D=j[1],x=Object(Y.a)((function(){return{x:n[0],y:n[1],onRest:function(){k||c()}}}),[k,c]),T=Object(G.a)(x,2),N=T[0],A=N.x,I=N.y,W=T[1];Object(a.useEffect)((function(){W({x:e.xy[0],y:e.xy[1]})}),[W,e.xy]);var _=r.a.useRef(null),R=Object(V.a)({onDragStart:function(e){e.event.preventDefault(),t&&(i(),y(!0),p||f())},onDrag:function(e){var n=e.event,a=Object(G.a)(e.xy,2),r=a[0],i=a[1];(n.preventDefault(),t)&&(W({x:(r>m-v/2?m-v/2:r)-v/2,y:(i>h-E?h-E:i)-E/2}),99!==C&&D(99))},onDragEnd:function(e){var n=e.event,a=Object(G.a)(e.xy,2),r=a[0];a[1];if(n.preventDefault(),t){var i=r<=d?1:r<=2*d?2:3;o(),y(!1),D(1),s(i,l)}}},{domTarget:_,eventOptions:{passive:!1}});return r.a.useEffect(R,[R]),r.a.createElement(J.a.div,Object.assign({ref:_},R(),{style:{position:"absolute",x:A,y:I,zIndex:C,width:v,height:E,borderRadius:"20px",background:u,cursor:t?"grab":"default",display:"flex",justifyContent:"center"}}),r.a.createElement("span",{style:{alignSelf:"center"}},l))},me=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={fetching:!0,highScores:[],submitting:!1,showError:!1},n.getCongratsMessage=function(){var e=n.props,t=e.numDisks,a=e.time,i=n.state.highScores,o=a<i[0].time?"":!i[1]||a<i[1].time?"2nd":!i[2]||a<i[2].time?"3rd":!i[3]||a<i[3].time?"4th":"5th";return r.a.createElement("div",null,"You have the ",r.a.createElement("strong",null,o),o?" ":"","best time for ",t," disk(s).")},n.renderTimeSubmitForm=function(){var e=n.props.classes;return r.a.createElement(M.a,{onSubmit:n.handleSubmit,initialValues:{name:""}},(function(t){var a=t.handleSubmit,i=t.handleChange,o=t.values;return r.a.createElement("form",{className:e.form,onSubmit:a},r.a.createElement(H.a,{name:"name",label:"Name",helperText:"Enter your name to display on the leaderboard",autoFocus:!0,value:o.name,onChange:function(e){n.setState({showError:!1}),i(e)}}),r.a.createElement(f.a,{className:e.submit,color:"primary",type:"submit",disabled:!o.name},"Submit"))}))},n.handleSubmit=function(e){var t=e.name,a=n.props,r=a.numDisks,i=a.time,o=a.timeStamp,s=a.onSubmit;n.setState({submitting:!0},(function(){fetch(F.api_endpoint,{method:"POST",headers:{"content-type":"application/json","x-apikey":F.api_key,"cache-control":"no-cache"},body:JSON.stringify({numDisks:r,name:t,time:i,timeStamp:o})}).then((function(e){return e.json()})).then((function(e){e._id?(n.setState({submitting:!1}),s()):(n.setState({submitting:!1,showError:!0}),console.log("Failed to update."))})).catch((function(e){return console.log("Unable to connect to API.",e)}))}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.numDisks;fetch(F.api_endpoint,{headers:{"content-type":"application/json","x-apikey":F.api_key,"cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(n){if(Array.isArray(n)){var a=n.filter((function(e){return e.numDisks===t}));e.setState({fetching:!1,highScores:a.sort((function(e,t){var n=e._id,a=e.time,r=e.timeStamp,i=t._id,o=t.time,s=t.timeStamp;return a!==o?a-o:r!==s?Q()(r).isBefore(Q()(s)):n<i}))})}else e.setState({fetching:!1}),console.log("Failed to fetch.")})).catch((function(e){return console.log("Unable to connect to API.",e)}))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.numDisks,a=e.time,i=e.onClose,o=this.state,s=o.fetching,c=o.highScores,l=o.submitting,u=o.showError;return r.a.createElement("div",null,r.a.createElement(N.a,{className:t.root,open:!0,onClose:i},r.a.createElement(I.a,null,"Your time is ",ae(a),"!"),r.a.createElement(A.a,{className:t.content},s?r.a.createElement(R.a,null):c.length?c.length<5||a<c[4].time?r.a.createElement("div",null,this.getCongratsMessage(),r.a.createElement("br",null),l?r.a.createElement(R.a,null):this.renderTimeSubmitForm()):r.a.createElement("div",null,r.a.createElement("div",null,"You haven't beaten the 5th best time of"," ",r.a.createElement("strong",null,c[4].name)," of"," ",r.a.createElement("strong",null,ae(c[4].time))," for"," ",n," disk(s)."),r.a.createElement("p",null,"Try again!")):r.a.createElement("div",null,r.a.createElement("div",null,"There is no best time for now for ",n," disk(s)."),r.a.createElement("br",null),l?r.a.createElement(R.a,null):this.renderTimeSubmitForm()),u&&r.a.createElement("p",{className:t.error},"Something went wrong. Try again later."))))}}]),t}(r.a.Component),he=Object(h.a)({root:{textAlign:"center"},content:{marginBottom:20},form:{display:"flex",flexDirection:"column"},submit:{marginTop:10},error:{color:"#f44336"}})(me),de=n(185),pe=n(189),fe=n(184),ge=n(188),be=n(186),ve=n(187),Ee=ne,Se=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={fetching:!0,highScores:[],showError:!1},n.takeFive=function(e){var t=[];return ie(Ee.length).forEach((function(n){var a=e.filter((function(e){return e.numDisks===n}));a.length&&t.push.apply(t,Object(p.a)(re(a,5)))})),t},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(F.api_endpoint,{headers:{"content-type":"application/json","x-apikey":F.api_key,"cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(t){Array.isArray(t)?e.setState({fetching:!1,highScores:e.takeFive(t.sort((function(e,t){var n=e._id,a=e.numDisks,r=e.time,i=e.timeStamp,o=t._id,s=t.numDisks,c=t.time,l=t.timeStamp;return a!==s?a-s:r!==c?r-c:i!==l?Q()(i).isBefore(Q()(l)):n<o})))}):(e.setState({fetching:!1,showError:!0}),console.log("Failed to fetch."))})).catch((function(e){return console.log("Unable to connect to API.",e)}))}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onClose,a=this.state,i=a.fetching,o=a.highScores,s=a.showError;return r.a.createElement(N.a,{className:t.root,open:!0,onClose:n},r.a.createElement(I.a,null,"Leaderboard"),r.a.createElement(A.a,{className:t.content},i?r.a.createElement(R.a,null):o.length?r.a.createElement(fe.a,{className:t.table},r.a.createElement(de.a,{stickyHeader:!0,size:"small"},r.a.createElement(be.a,null,r.a.createElement(ve.a,null,r.a.createElement(ge.a,null,"No. Disks"),r.a.createElement(ge.a,{align:"right"},"Name"),r.a.createElement(ge.a,{align:"right"},"Time"))),r.a.createElement(pe.a,null,o.map((function(e){var n=e._id,a=e.numDisks,i=e.name,o=e.time;return r.a.createElement(ve.a,{key:n,className:a%2===1?t.highlighted:""},r.a.createElement(ge.a,{component:"th",scope:"row"},a),r.a.createElement(ge.a,{align:"right"},i),r.a.createElement(ge.a,{align:"right"},ae(o)))}))))):!s&&"There is no best time for now.",s&&r.a.createElement("div",{className:t.error},"Something went wrong. Try again later.")))}}]),t}(r.a.Component),we=Object(h.a)({root:{textAlign:"center"},content:{marginBottom:20},table:{width:"fit-content",maxHeight:400},highlighted:{background:"rgba(0, 0, 0, 0.04)"},error:{color:"#f44336"}})(Se),ke=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={handler:null,start:null,millisecs:0,timeStamp:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(!e.running&&this.props.running){var n=setInterval((function(){var e=Q()(),n=t.state.start||e,a=e.diff(n);t.setState({start:n,millisecs:a})}),10);this.setState({handler:n})}if(e.running&&!this.props.running){var a=this.state.handler;clearInterval(a);var r=Q()();this.setState({timeStamp:r}),e.disabled||this.props.disabled||this.props.recordTime(this.state.millisecs,r)}}},{key:"componentWillUnmount",value:function(){var e=this.state.handler;clearInterval(e)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.disabled,a=e.recordTime,i=this.state,o=i.millisecs,s=i.timeStamp;return r.a.createElement("div",{style:{color:n?"#f44336":"inherit"}},r.a.createElement("div",{className:t.time,onClick:function(){return a(o,s)}},ae(o)),n&&r.a.createElement("div",{className:t.warning},"Time is now invalid!"))}}]),t}(r.a.Component),ye=Object(h.a)({time:{width:"fit-content",margin:"auto",cursor:"pointer"},warning:{marginTop:10}})(ke),Oe=ne,je=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={col1:ie(n.props.numDisks).reverse(),col2:[],col3:[],dragging:!1,movingDisk:null,solving:!1,handler:null,step:0,showLeaderboard:!1,isTiming:!1,time:null,timeStamp:null,hasUsedSolve:!1,showGameOver:!1,hasSubmitted:!1,showSubmissionSuccess:!1},n.isGameOver=function(){var e=n.props.numDisks,t=n.state,a=t.col2,r=t.col3;return!t.movingDisk&&(a.length===e||r.length===e)},n.getIsActive=function(e){var t=n.state,a=t.col1,r=t.col2,i=t.col3,o=t.dragging,s=t.movingDisk,c=t.solving;return(!o||!s||s===e)&&!c&&!n.isGameOver()&&(oe(a)===e||oe(r)===e||oe(i)===e)},n.getPosition=function(e){var t=n.props.windowWidth,a=n.state,r=a.col1,i=a.col2,o=a.col3,s=t/6,c=ce(e)[0];return r.includes(e)?[s-c/2,n.getY(r,e)]:i.includes(e)?[3*s-c/2,n.getY(i,e)]:[5*s-c/2,n.getY(o,e)]},n.getY=function(e,t){for(var a=n.props.windowHeight-150-ce(t)[1],r=0;e[r]!==t;)a-=ce(e[r])[1],r++;return a},n.move=function(e,t){var a=n.state,r=a.col1,i=a.col2,o=a.col3,s=r.includes(t)?r:i.includes(t)?i:o,c=1===e?r:2===e?i:o;if(!(s===c||t>oe(c))){var l=se(s),u=[].concat(Object(p.a)(c),[t]),m=r===s?l:r===c?u:r,h=i===s?l:i===c?u:i,d=o===s?l:o===c?u:o;n.setState({col1:m,col2:h,col3:d})}},n.solve=function(){n.setState({isTiming:!1,hasUsedSolve:!0});var e=n.props.numDisks,t=n.state,a=t.col1,r=t.col2,i=t.col3,o=JSON.parse(le(e,Object(p.a)(a),Object(p.a)(r),Object(p.a)(i)));n.setState({solving:!0,steps:o,step:0},(function(){var e=setInterval((function(){var t=n.state,a=t.steps,r=t.step;r<a.length?n.setState(Object(d.a)({},a[r],{step:r+1})):clearInterval(e)}),1e3);n.setState({handler:e})}))},n.stop=function(){var e=n.state.handler;n.setState({solving:!1},(function(){return clearInterval(e)}))},n.show=function(e){var t=n.state,a=t.solving,r=t.handler;a&&!n.isGameOver()?n.setState(Object(d.a)({solving:!1},e),(function(){return clearInterval(r)})):n.setState(Object(d.a)({},e))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){var e=this.state.handler;e&&clearInterval(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.numDisks,i=t.windowWidth,o=t.windowHeight,s=t.restart,c=this.state,l=c.solving,u=c.showLeaderboard,m=c.isTiming,h=c.time,d=c.timeStamp,p=c.hasUsedSolve,g=c.showGameOver,E=c.hasSubmitted,S=c.showSubmissionSuccess,w=i/3,k=this.isGameOver();return r.a.createElement("div",null,r.a.createElement(z,{windowWidth:i,show:this.show}),r.a.createElement("div",{className:n.controlButtons},!l&&r.a.createElement(f.a,{color:"primary",disabled:k,onClick:this.solve},"Solve"),l&&r.a.createElement(f.a,{color:"primary",disabled:k,onClick:this.stop},"Stop"),r.a.createElement(f.a,{color:"secondary",onClick:s},"Restart")),r.a.createElement("div",{className:n.leaderboardButton},r.a.createElement(f.a,{onClick:function(){return e.show({showLeaderboard:!0})}},"Leaderboard")),r.a.createElement("div",{className:n.timer},r.a.createElement(ye,{running:m&&!k,disabled:p,recordTime:function(t,n){return e.setState({time:t,timeStamp:n,showGameOver:!0})}})),u&&r.a.createElement(we,{onClose:function(){return e.setState({showLeaderboard:!1})}}),g&&k&&!p&&!E&&r.a.createElement(he,{numDisks:a,time:h,timeStamp:d,onClose:function(){return e.setState({showGameOver:!1})},onSubmit:function(){return e.setState({hasSubmitted:!0,showSubmissionSuccess:!0})}}),S&&r.a.createElement(v.a,{className:n.success,open:!0,message:"High score submitted!",onClose:function(){return e.setState({showSubmissionSuccess:!1})}}),k&&r.a.createElement(b.a,{width:i,height:o}),ie(a).map((function(t){return r.a.createElement(ue,{key:t,active:e.getIsActive(t),xy:e.getPosition(t),startMove:function(){return e.setState({dragging:!0,movingDisk:t})},endDrag:function(){return e.setState({dragging:!1})},move:e.move,endMove:function(){return e.setState({movingDisk:null})},size:t,color:Oe[t-1],windowWidth:i,windowHeight:o,divWidth:w,isTiming:m,startTimer:function(){e.state.hasUsedSolve||e.setState({isTiming:!0})}})})))}}]),t}(r.a.Component),Ce=Object(h.a)({controlButtons:{position:"absolute",top:30,left:0,right:0,display:"flex",justifyContent:"center"},leaderboardButton:{position:"absolute",top:70,left:0,right:0},timer:{position:"absolute",top:110,left:0,right:0},success:{width:"fit-content",margin:"auto"}})(je),De=ne.length,xe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1},n.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),a=parseInt(t.get("numDisks"));ie(De).includes(a)?n.props.setNumDisks(a):n.setState({error:!0})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.error;return r.a.createElement("div",{className:e.root},r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},r.a.createElement(H.a,{name:"numDisks",label:"Number of Disks",helperText:"Enter a number up to ".concat(De),autoFocus:!0,error:t}),r.a.createElement("br",null),r.a.createElement(f.a,{className:e.submit,color:"primary",type:"submit"},"Go")))}}]),t}(r.a.Component),Te=Object(h.a)({root:{marginTop:30},submit:{marginTop:10}})(xe),Ne=te,Ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={windowWidth:window.innerWidth,windowHeight:window.innerHeight,initializing:!0,numDisks:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;/iPad|iPhone|iPod/.test(navigator.userAgent)&&window.addEventListener("touchmove",(function(e){e.scale>1&&e.preventDefault()}),{passive:!1}),window.addEventListener("resize",(function(t){var n=t.target;return e.setState({windowWidth:n.innerWidth,windowHeight:n.innerHeight})}))}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.windowWidth,i=n.windowHeight,o=n.initializing,s=n.numDisks,c=a/3,l=i-150;return r.a.createElement("div",null,r.a.createElement("div",{className:t.overground},r.a.createElement("div",{style:{width:c,height:l,background:Ne[0]}}),r.a.createElement("div",{style:{width:c,height:l,background:Ne[1]}}),r.a.createElement("div",{style:{width:c,height:l,background:Ne[2]}}),r.a.createElement("div",{className:t.game},o?r.a.createElement(Te,{setNumDisks:function(t){return e.setState({initializing:!1,numDisks:t})}}):r.a.createElement(Ce,{numDisks:s,windowWidth:a,windowHeight:i,restart:function(){return e.setState({initializing:!0})}}))),r.a.createElement("div",{style:{width:a,height:150,background:"gainsboro"}}))}}]),t}(r.a.Component),Ie=Object(h.a)({overground:{position:"relative",display:"flex",userSelect:"none"},game:{position:"absolute",left:0,right:0,textAlign:"center"}})(Ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e){e.exports=JSON.parse('{"api_endpoint":"https://towerofhanoi-c927.restdb.io/rest/high-scores","api_key":"5e8e7efd111788414066c840","form_endpoint":"https://formspree.io/mbjaozdw","captcha_sitekey":"6LcGsucUAAAAAKJMt8JzxkfFSx5eYX-m7bFEFUMr"}')}},[[112,1,2]]]);
//# sourceMappingURL=main.1a6f2e40.chunk.js.map