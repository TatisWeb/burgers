(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[0],{29:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var r=t(18),n=t.n(r),c=t(2),l=t.n(c),s=t(8),i=t(9),u=t(11),m=t(10),o=[{title:"Hot Burger \u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f",url:"hot-burger-tverskaya",id:1},{title:"Hot Burger \u041c\u0430\u0440\u043e\u0441\u0435\u0439\u043a\u0430",url:"hot-burger-maroseyka",id:2},{title:"Hot Burger \u041f\u0435\u0442\u0440\u043e\u0432\u043a\u0430",url:"hot-burger-petrovka",id:3}],p=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={display:!1,title:"",url:""},e.displayList=function(){var a=e.state.display;e.setState({display:!a})},e.getTitle=function(a){var t=a.title,r=a.url;e.setState({title:t,url:r,display:!1})},e.gotToRestaurant=function(){var a=e.state.url;e.props.history.push("/restaurant/".concat(a))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"restaurant_select"},l.a.createElement("div",{className:"restaurant_select_top"},l.a.createElement("div",{onClick:this.displayList,className:"restaurant_select_top_header font-effect-outline "},this.state.title?this.state.title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"),l.a.createElement("div",{className:"arrow_picker"},l.a.createElement("div",{className:"arrow_picker-up"}),l.a.createElement("div",{className:"arrow_picker-down"}))),this.state.display?l.a.createElement("div",{className:"restaurant_select_burger"},l.a.createElement("ul",null,o.map((function(a){return l.a.createElement("li",{onClick:function(){return e.getTitle(a)},key:a.id}," ",a.title," ")})))):null,this.state.title&&!this.state.display?l.a.createElement("button",{onClick:this.gotToRestaurant}," \u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d "):null)}}]),t}(l.a.Component),d=(t(29),t(19)),b=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"top"},l.a.createElement("div",{className:"wrap"},l.a.createElement("div",{className:"header-content"},l.a.createElement("div",{className:"header-rating"},l.a.createElement("div",{className:"header-rating_tag"},"\u0440\u0435\u0439\u0442\u0438\u043d\u0433"),l.a.createElement("div",{className:"header-rating_icon"},"\u2606\u2606\u2606\u2606\u2606")),l.a.createElement("div",{className:"header-devider"}),l.a.createElement("h1",{className:"font-effect-fire-animation"},this.props.title),l.a.createElement("h3",{className:"header-rating_tag"},l.a.createElement("span",null,"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0431\u0443\u0440\u0433\u0435\u0440\u043e\u0432",l.a.createElement("span",{className:"sub-header"}))))))}}]),t}(l.a.Component),g=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).nameRef=l.a.createRef(),e.priceRef=l.a.createRef(),e.statusRef=l.a.createRef(),e.descRef=l.a.createRef(),e.imageRef=l.a.createRef(),e.CreateBurger=function(a){a.preventDefault();var t={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value)||0,status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addBurger(t),a.currentTarget.reset()},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"burger-edit",onSubmit:this.CreateBurger},l.a.createElement("input",{ref:this.nameRef,name:"name",type:"text",placeholder:"Name",autoComplete:"off"}),l.a.createElement("input",{ref:this.priceRef,name:"price",type:"text",placeholder:"Price",autoComplete:"off"}),l.a.createElement("select",{ref:this.statusRef,name:"name",className:"status"},l.a.createElement("option",{value:"avialable"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement("option",{value:"unavialable"},"\u0423\u0431\u0440\u0430\u0442\u044c")),l.a.createElement("textarea",{ref:this.descRef,name:"desc",placeholder:"Desc"}),l.a.createElement("input",{ref:this.imageRef,name:"image",type:"text",placeholder:"Image",autoComplete:"off"}),l.a.createElement("button",{type:"submit"}," +\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c "))}}]),t}(l.a.Component),f=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"menu-admin"},l.a.createElement("h2",null," \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u043d\u044e ")),l.a.createElement("button",{onClick:this.props.loadSampleBurgers},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0441\u0435 \u0431\u0443\u0440\u0433\u0435\u0440\u044b"),l.a.createElement(g,{addBurger:this.props.addBurger}))}}]),t}(l.a.Component),v=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.total,a=e>0&&e<500?350:99,t=99===a?l.a.createElement("span",{className:"font-effect-neon total_wrap-cheap"},a,"\u0420"):l.a.createElement("span",null," ",a," \u0420 ");return l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:"total-wrap"},l.a.createElement("div",null,l.a.createElement("div",null," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430: ",e>0?t:null," "),l.a.createElement("div",{className:"total_wrap-free"},e<500?"\u0417\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u0435\u0434\u0443 \u043d\u0430 {total - 500} \u0420 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u043d\u0430 99\u0420":null)),l.a.createElement("div",{className:"total_wrap-final"}," \u0418\u0442\u043e\u0433\u043e:",e," \u0420.")))}}]),t}(l.a.Component),h=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).renderOrder=function(a){var t=e.props.burgers[a],r=e.props.order[a];return t&&"available"===t.status?l.a.createElement("li",{key:a},l.a.createElement("span",null,l.a.createElement("span",null," ",r," "),"\u0448\u0442. ",t.name,l.a.createElement("span",null," ",t.price*r," \u0420"),l.a.createElement("button",{className:"cancellItem"}," \xd7 "))):l.a.createElement("li",{className:"unavailable",key:"key"},"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, ",t?t.name:"\u0431\u0443\u0440\u0433\u0435\u0440"," \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=Object.keys(this.props.order),t=a.reduce((function(a,t){var r=e.props.burgers[t],n=e.props.order[t];return r&&"available"===r.status?a+r.price*n:a}),0);return l.a.createElement("div",{className:"order-wrap"},l.a.createElement("h2",null,"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"),l.a.createElement("ul",{className:"order"},a.map(this.renderOrder)," "),t>0?l.a.createElement(v,{total:t}):l.a.createElement("div",{className:"nothingSelected"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043b\u044e\u0434\u043e \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"))}}]),t}(l.a.Component),E=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.details,t=a.image,r=a.name,n=a.price,c=a.desc,s="available"===a.status;return l.a.createElement("li",{className:"menu-burger"},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:t,alt:r})),l.a.createElement("div",{className:"burgers-details"},l.a.createElement("h1",{className:"burger-name"},r,l.a.createElement("span",{className:"price"},n,"\u20bd")),l.a.createElement("p",null,c),l.a.createElement("button",{className:"button-order",disabled:!s,onClick:function(){return e.props.addToOrder(e.props.index)}},s?"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c":"\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0442")))}}]),t}(l.a.Component),j={burger1:{name:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/cheese.jpg",desc:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0441 \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u0431\u0443\u043b\u043e\u0447\u043a\u043e\u0439.",price:110,status:"available"},burger2:{name:"\u0427\u0438\u043a\u0435\u043d\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/chicken.jpg",desc:"\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430, \u0441\u043e\u0443\u0441\u0430 \u0411\u0430\u0440\u0431\u0435\u043a\u044e \u0438 \u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0430\u043b\u0430\u0442\u0430.",price:140,status:"available"},burger3:{name:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/double.jpg",desc:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0433\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0438 \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u043f\u0440\u044f\u043d\u044b\u043c \u0441\u043e\u0443\u0441\u043e\u043c.",price:200,status:"unavailable"},burger4:{name:"\u0424\u0438\u0448\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/fish.jpg",desc:"\u0420\u044b\u0431\u043d\u043e\u0435 \u0444\u0438\u043b\u0435 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440\u0435\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u043b\u0435\u0433\u043a\u0438\u043c \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:150,status:"available"},burger5:{name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0424\u0440\u0438",image:"/images/fries.jpg",desc:"\u0425\u0440\u0443\u0441\u0442\u044f\u0449\u0438\u0435 \u043b\u043e\u043c\u0442\u0438\u043a\u0438 \u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u043e\u0433\u043e \u0433\u043e\u0440\u044f\u0447\u0435\u0433\u043e \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f \u0421\u0443\u043f\u0435\u0440 \u0424\u0440\u0438, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u043d\u0435\u043f\u043b\u043e\u0434\u0430!",price:85,status:"available"},burger6:{name:"King \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/ham.jpg",desc:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0438\u0437 100% \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0439 \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u0441 \u0436\u0430\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u043b\u043e\u043c\u0442\u0438\u043a\u0430\u043c\u0438 \u0431\u0435\u043a\u043e\u043d\u0430 \u0438 \u0441\u0432\u0435\u0436\u0438\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c, \u0437\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u0435\u0442\u0447\u0443\u043f\u043e\u043c \u0438 \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:450,status:"available"},burger7:{name:"\u041c\u0435\u0433\u0430 \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/mega.jpg",desc:"\u041d\u0430\u0448 \u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u0440\u0433\u0435\u0440, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u0430, \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430 \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u0441\u043e\u043b\u0435\u043d\u044b\u0445 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u043e\u0432.",price:500,status:"available"},burger8:{name:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0432 \u041f\u0438\u0442\u0435",image:"/images/pita.jpg",desc:"\u0427\u0435\u0442\u044b\u0440\u0435 \u043a\u043e\u0442\u043b\u0435\u0442\u044b \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u043f\u043e\u043a\u0440\u044b\u0442\u044b\u0435 \u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440, \u0441\u043e \u0441\u0432\u0435\u0436\u0438\u043c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c \u0432 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u043b\u0435\u043f\u0435\u0448\u043a\u0435.",price:380,status:"available"},burger9:{name:"Village \u0424\u0440\u0438",image:"/images/bakedFries.jpg",desc:"\u041f\u043e\u0440\u0446\u0438\u044f \u0441\u0432\u0435\u0436\u0438\u0445 \u043b\u043e\u043c\u0442\u0438\u043a\u043e\u0432 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f, \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u044b\u0445 \u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0435 \u043f\u043e\u0434 \u043c\u0438\u0440\u043d\u043e \u0442\u043b\u0435\u044e\u0449\u0438\u043c\u0438 \u0443\u0433\u043b\u044f\u043c\u0438",price:90,status:"available"}},y=t(22),O=t.n(y),N=t(24).a.initializeApp({apiKey:"AIzaSyDdjCjtT46BvMEaVpnHLa_V34IjJfPtJnA",authDomain:"burgers-5cc11.firebaseapp.com",databaseURL:"https://burgers-5cc11-default-rtdb.europe-west1.firebasedatabase.app",projectId:"burgers-5cc11",storageBucket:"burgers-5cc11.appspot.com",messagingSenderId:"358024315091",appId:"1:358024315091:web:0cc25194367ceb43a19426"}),k=O.a.createClass(N.database()),R=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={burgers:{},order:{}},e.addBurger=function(a){var t=Object(d.a)({},e.state.burgers);t["burger".concat(Date.now())]=a,e.setState({burgers:t})},e.loadSampleBurgers=function(){e.setState({burgers:j})},e.addToOrder=function(a){var t=Object(d.a)({},e.state.order);t[a]=t[a]+1||1,e.setState({order:t})},e}return Object(i.a)(t,[{key:"componetDidMount",value:function(){var e=this.props.match.params;this.ref=k.syncState("".concat(e.restaurantId,"/burgers"),{context:this,state:"burgers"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"burger-paraduse"},l.a.createElement("div",{className:"menu"},l.a.createElement(b,{title:"Very Hot Burger"}),l.a.createElement("ul",{className:"burgers"},Object.keys(this.state.burgers).map((function(a){return l.a.createElement(E,{key:a,index:a,addToOrder:e.addToOrder,details:e.state.burgers[a]})})))),l.a.createElement(h,{burgers:this.state.burgers,order:this.state.order}),l.a.createElement(f,{addBurger:this.addBurger,loadSampleBurgers:this.loadSampleBurgers}))}}]),t}(l.a.Component),w=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null," the page was not found "))}}]),t}(l.a.Component),C=t(42),B=t(43),_=t(44),S=function(){return l.a.createElement(C.a,null,l.a.createElement(B.a,null,l.a.createElement(_.a,{exact:!0,path:"/",component:p}),l.a.createElement(_.a,{path:"/restaurant/:restaurantId",component:R}),l.a.createElement(_.a,{component:w})))};n.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0f09f80d.chunk.js.map