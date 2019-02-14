(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=(n(23),n(1)),l=n(2),s=n(5),m=n(3),d=n(4),h=n(6),u=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{onClick:this.props.handler,id:this.props.id,className:"col-12 article bg-secondary border border-thick border-secondary mb-1 mr-1 p-3"},r.a.createElement("p",{className:"col-12 text-light"},this.props.title),r.a.createElement("button",{style:{overflow:"hidden"},className:"col-12 btn btn-dark",rel:"noopener noreferrer",href:this.props.link,target:"/_blank"},this.props.link))}}]),t}(a.Component),p={height:"100%",position:"fixed",top:"20vh",left:"0",color:"white",backgroundColor:"#111",overflowX:"hidden",paddingTop:"20px"},b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:p,className:"col-6"},r.a.createElement("h1",null,"Articles:"),this.props.articles.map(function(t,n){return r.a.createElement(u,{key:n,id:t._id,title:t.title,link:t.link,handler:e.props.handler})}))}}]),t}(a.Component),f=n(8),v=n.n(f),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={note:""},n.handleCommentChange=n.handleCommentChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleCommentChange",value:function(e){this.setState({note:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.state.note.length>0&&v()({header:"Access-Control-Allow-Origin",method:"POST",url:"/note",crossDomain:!0,data:{note:this.state.note,id:this.props.article.id}}).then(function(){t.setState({note:""}),document.getElementById("comment").value="",t.props.addComment()}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("form",{method:"POST",action:"/articles/"+this.props.article.id,className:"row m-1"},r.a.createElement("input",{className:"btn btn-secondary col-12",type:"submit",onClick:this.handleSubmit,value:"Comment"}),r.a.createElement("input",{id:"comment",name:"note",type:"text",maxLength:"256",className:"col-12",onChange:this.handleCommentChange}))}}]),t}(a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.comment._id,className:"row m-auto border"},r.a.createElement("p",{className:"col-8"},this.props.comment.body)," ",r.a.createElement("button",{className:"btn btn-danger col-4",onClick:this.props.removeElement},"X"))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"border text-light"},r.a.createElement("p",{className:"p-1"},"Comments:"),this.props.comments.map(function(t,n){return r.a.createElement(j,{key:n,comment:t,removeElement:e.props.removeElement})}))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 bg-secondary text-light text-center p-3"},r.a.createElement("div",{className:"p-2"},this.props.article.title),r.a.createElement("button",{style:{overflow:"hidden"},className:"col-12 btn btn-dark",href:this.props.article.link,rel:"noopener noreferrer",target:"_blank"},this.props.article.link))}}]),t}(a.Component),k={height:"100%",position:"fixed",top:"20vh",right:"0",color:"white",backgroundColor:"#111",overflowX:"hidden",paddingTop:"20px"},y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-6 border bg-dark",style:k},r.a.createElement(E,{article:this.props.article}),r.a.createElement(O,{article:this.props.article,addComment:this.props.addComment}),r.a.createElement(g,{comments:this.props.article.comments,removeElement:this.props.removeElement}))}}]),t}(a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row text-center"},r.a.createElement("h1",{className:"col-8 col-lg-12 m-auto"},"Newsroom"),r.a.createElement("p",{className:"col-12"},r.a.createElement("i",null,"A place to comment on articles.")))}}]),t}(a.Component),w=(n(44),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={articles:[],focus:{title:"select an article to view",comments:[]}},n.articleHandler=n.articleHandler.bind(Object(h.a)(Object(h.a)(n))),n.addComment=n.addComment.bind(Object(h.a)(Object(h.a)(n))),n.removeElement=n.removeElement.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v()({header:"Access-Control-Allow-Origin",method:"get",url:"/scrape",responseType:"json",crossDomain:!0}).catch(function(e){return console.log(e)}),v()({header:"Access-Control-Allow-Origin",method:"get",url:"/articles",responseType:"json",crossDomain:!0}).then(function(t){e.setState({articles:t.data})}).catch(function(e){console.log(e)})}},{key:"articleHandler",value:function(e){var t,n=this;switch(e.target.localName){case"div":t={title:e.target.children[0].innerHTML,link:e.target.children[1].innerHTML,id:e.target.id};break;case"a":t={title:e.target.parentElement.children[0].innerHTML,link:e.target.innerHTML,id:e.target.parentElement.id};break;case"p":t={title:e.target.innerHTML,link:e.target.parentElement.children[1].innerHTML,id:e.target.parentElement.id}}v()({header:"Access-Control-Allow-Origin",method:"GET",url:"/article",crossDomain:!0,params:{id:t.id}}).then(function(e){var a=e.data;t.comments=a,n.setState({focus:t})}).catch(function(e){return console.log(e)})}},{key:"addComment",value:function(){var e=this,t=this.state.focus;v()({header:"Access-Control-Allow-Origin",method:"GET",url:"/article",crossDomain:!0,params:{id:t.id}}).then(function(n){var a=n.data;t.comments=a,e.setState({focus:t})}).catch(function(e){return console.log(e)})}},{key:"removeElement",value:function(e){var t=this;e.persist(),v()({method:"DELETE",url:"/note",data:{id:e.target.parentNode.id}}).then(function(){t.addComment()}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(C,null),r.a.createElement("div",{className:"row"},r.a.createElement(b,{articles:this.state.articles,handler:this.articleHandler}),r.a.createElement(y,{article:this.state.focus,addComment:this.addComment,removeElement:this.removeElement})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.dfa3a800.chunk.js.map