(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=(n(23),n(1)),l=n(2),s=n(5),m=n(3),d=n(4),h=n(7),u=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.handler,id:this.props.id,className:"col-12 article bg-secondary border border-thick border-secondary mb-1 mr-1 p-3"},r.a.createElement("p",{className:"col-12 text-light"},this.props.title),r.a.createElement("a",{style:{overflow:"hidden"},className:"col-12 btn btn-dark",href:this.props.link,target:"/_blank"},this.props.link))}}]),t}(a.Component),p={height:"100%",width:"25vw",position:"fixed",top:"0",left:"0",backgroundColor:"#111",overflowX:"hidden",paddingTop:"20px"},b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:p,className:"col-4"},this.props.articles.map(function(t,n){return r.a.createElement(u,{key:n,id:t._id,title:t.title,link:t.link,handler:e.props.handler})}))}}]),t}(a.Component),f=n(8),O=n.n(f),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={note:""},n.handleCommentChange=n.handleCommentChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleCommentChange",value:function(e){console.log(e.target.value),this.setState({note:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;console.log(this.state.note),console.log(this.props.id),e.preventDefault(),this.state.note.length>6&&(this.props.addComment({body:this.state.note,id:this.props.id}),O()({header:"Access-Control-Allow-Origin",method:"POST",url:"/note",crossDomain:!0,data:{note:this.state.note,id:this.props.id}}).then(function(){t.setState({note:""}),document.getElementById("comment").value=""}).catch(function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("form",{method:"POST",action:"/articles/"+this.props.id,className:"row m-1"},r.a.createElement("input",{className:"btn btn-secondary col-4",type:"submit",onClick:this.handleSubmit,value:"Comment"}),r.a.createElement("input",{id:"comment",name:"note",type:"text",maxLength:"256",className:"col-6",onChange:this.handleCommentChange}))}}]),t}(a.Component);function j(e){console.log(e.target.parentNode);var t=document.getElementById(e.target.parentNode.id);O()({method:"DELETE",url:"/note",data:{id:t.id}}).catch(function(e){return console.log(e)}),t.remove()}var v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.comment._id),r.a.createElement("div",{id:this.props.comment._id,className:"row m-auto border"},r.a.createElement("p",{className:"col-8"},this.props.comment.body)," ",r.a.createElement("button",{className:"btn btn-danger col-4",onClick:j},"X"))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"border text-light"},r.a.createElement("h2",{className:"p-1"},"Comments:"),this.props.comments.map(function(e,t){return r.a.createElement(v,{key:t,comment:e})}))}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 bg-secondary text-light text-center "},r.a.createElement("div",{className:"p-2"},this.props.article.title),r.a.createElement("a",{className:"btn btn-dark m-1",href:this.props.article.link,rel:"noopener noreferrer",target:"_blank"},this.props.article.link))}}]),t}(a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-10 border bg-dark"},r.a.createElement(k,{article:this.props.article}),r.a.createElement(g,{id:this.props.article.id,addComment:this.props.addComment}),r.a.createElement(E,{comments:this.props.article.comments}))}}]),t}(a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"col-8"},"Newsroom"),r.a.createElement("h2",{className:"col-10"},r.a.createElement("i",null,"A place to comment on articles.")))}}]),t}(a.Component),w=(n(44),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={articles:[],focus:{title:"select an article to view",comments:[],id:"0"}},n.articleHandler=n.articleHandler.bind(Object(h.a)(Object(h.a)(n))),n.addComment=n.addComment.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;O()({header:"Access-Control-Allow-Origin",method:"get",url:"/scrape",responseType:"json",crossDomain:!0}).catch(function(e){return console.log(e)}),O()({header:"Access-Control-Allow-Origin",method:"get",url:"/articles",responseType:"json",crossDomain:!0}).then(function(t){e.setState({articles:t.data})}).catch(function(e){console.log(e)})}},{key:"articleHandler",value:function(e){var t,n=this;switch(e.target.localName){case"div":t={title:e.target.children[0].innerHTML,link:e.target.children[1].innerHTML,id:e.target.id};break;case"a":t={title:e.target.parentElement.children[0].innerHTML,link:e.target.innerHTML,id:e.target.parentElement.id};break;case"p":t={title:e.target.innerHTML,link:e.target.parentElement.children[1].innerHTML,id:e.target.parentElement.id}}O()({header:"Access-Control-Allow-Origin",method:"GET",url:"/article",crossDomain:!0,params:{id:t.id}}).then(function(e){var a=e.data;t.comments=a,n.setState({focus:t})}).catch(function(e){return console.log(e)})}},{key:"addComment",value:function(e){var t=this.state.focus;t.comments.push(e),this.setState({focus:t})}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"75vw",marginLeft:"30vw",marginRight:"20vw"},className:"container"},r.a.createElement(C,null),r.a.createElement("div",{className:"row"},r.a.createElement(b,{articles:this.state.articles,handler:this.articleHandler}),r.a.createElement(y,{article:this.state.focus,addComment:this.addComment})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.dec36641.chunk.js.map