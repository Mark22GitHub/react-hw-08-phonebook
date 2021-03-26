(this["webpackJsonpreact-hw-08-phonebook"]=this["webpackJsonpreact-hw-08-phonebook"]||[]).push([[4],{109:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(25),u=n.n(a),o=n(17),s=(n(61),n(37)),i=n(38),b=n(41),j=n(39),l=n(7),f=n(10),O=n(51),d=n.n(O),h=n(22),g=n.n(h),p=n(9),m=n(1),v=Object(f.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(m.jsxs)("nav",{children:[Object(m.jsx)(o.b,{to:"/",exact:!0,className:g.a.link,activeClassName:g.a.activeLink,children:"Home"}),e&&Object(m.jsx)(o.b,{to:"/contacts",exact:!0,className:g.a.link,activeClassName:g.a.activeLink,children:"Contacts"})]})})),x=n(24),k=n.n(x),C=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(o.b,{to:"/register",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:"Register"}),Object(m.jsx)(o.b,{to:"/login",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:"Login"})]})},S=n(30),_=n.n(S),y={onLogout:p.a.logOut},E=Object(f.b)((function(t){return{email:p.c.getUserEmail(t)}}),y)((function(t){var e=t.email,n=t.onLogout;return Object(m.jsxs)("div",{className:_.a.container,children:[Object(m.jsxs)("span",{className:_.a.email,children:["Welcome: ",e]}),Object(m.jsx)("button",{className:_.a.button,type:"button",onClick:n,children:"Logout"})]})})),U=Object(f.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)(v,{}),e?Object(m.jsx)(E,{}):Object(m.jsx)(C,{})]})})),A=n(20),w=n(29),L=Object(f.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(w.a)(t,["component","isAuthenticated","redirectTo"]);return Object(m.jsx)(l.b,Object(A.a)(Object(A.a)({},c),{},{render:function(t){return n?Object(m.jsx)(e,Object(A.a)({},t)):Object(m.jsx)(l.a,{to:r})}}))})),N=Object(f.b)((function(t){return{isAuthenticated:p.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(w.a)(t,["component","isAuthenticated","redirectTo"]);return Object(m.jsx)(l.b,Object(A.a)(Object(A.a)({},c),{},{render:function(t){return n&&c.restricted?Object(m.jsx)(l.a,{to:r}):Object(m.jsx)(e,Object(A.a)({},t))}}))})),R=n(52),q=n.n(R),T=(n(105),n(53)),z=n.n(T),F=function(){return Object(m.jsx)(q.a,{className:z.a.Spinner,type:"Bars",color:"#3ab0ff",height:80,width:80})},I=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,117))})),M=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,120))})),B=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,118))})),G=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,119))})),J=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(U,{}),Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(F,{}),children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(N,{exact:!0,path:"/",component:I}),Object(m.jsx)(L,{path:"/contacts",redirectTo:"/login",component:M}),Object(m.jsx)(N,{path:"/register",restricted:!0,redirectTo:"/contacts",component:B}),Object(m.jsx)(N,{path:"/login",restricted:!0,redirectTo:"/contacts",component:G})]})})]})}}]),n}(r.Component),W={onGetCurrentUser:p.a.getCurrentUser},D=Object(f.b)(null,W)(J),H=(n(106),n(28)),P=n(40),Q=n(2),V=n(19),X=n(54),Z=n.n(X),K=n(55),Y=n.n(K),$=[].concat(Object(H.a)(Object(Q.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),[Y.a]),tt={key:"auth",storage:Z.a,whitelist:["token"]},et=Object(Q.a)({reducer:{auth:Object(V.g)(tt,p.b),contacts:P.b},middleware:$,devTools:!1}),nt={store:et,persistor:Object(V.h)(et)},rt=n(56);u.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f.a,{store:nt.store,children:Object(m.jsx)(rt.a,{loading:"Loading",persistor:nt.persistor,children:Object(m.jsx)(o.a,{children:Object(m.jsx)(D,{})})})})}),document.getElementById("root"))},22:function(t,e,n){t.exports={link:"Navigation_link__1MfoW",activeLink:"Navigation_activeLink__-9lqZ"}},24:function(t,e,n){t.exports={link:"AuthNav_link__32esy",activeLink:"AuthNav_activeLink__2aP--"}},30:function(t,e,n){t.exports={container:"UserMenu_container__1GauQ",email:"UserMenu_email__1b9tT",button:"UserMenu_button__5wUjU"}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return x}));var r,c,a=n(15),u=n.n(a),o=n(6),s={fetchContacts:function(){return function(t){t(Object(o.i)()),u.a.get("/contacts").then((function(e){var n=e.data;return t(Object(o.j)(n))})).catch((function(e){return t(Object(o.h)(e.message))}))}},addContact:function(t){var e=t.name,n=t.number;return function(t){var r={name:e,number:n};t(Object(o.b)()),u.a.post("/contacts",r).then((function(e){var n=e.data;return t(Object(o.c)(n))})).catch((function(e){return t(Object(o.a)(e.message))}))}},deleteFromContacts:function(t){return function(e){e(Object(o.f)()),u.a.delete("contacts/".concat(t)).then((function(){return e(Object(o.g)(t))})).catch((function(t){return e(Object(o.e)(t.message))}))}}},i=n(27),b=function(t){return t.contacts.items},j=function(t){return t.contacts.filter},l={getLoadingContacts:function(t){return t.contacts.loading},getAllContacts:b,getFilter:j,getVisibleContacts:Object(i.a)([b,j],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},f=n(3),O=n(28),d=n(8),h=n(2),g=Object(h.c)([],(r={},Object(f.a)(r,o.j,(function(t,e){return e.payload})),Object(f.a)(r,o.c,(function(t,e){var n=e.payload;return[].concat(Object(O.a)(t),[n])})),Object(f.a)(r,o.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),p=Object(h.c)(!1,(c={},Object(f.a)(c,o.i,(function(){return!0})),Object(f.a)(c,o.j,(function(){return!1})),Object(f.a)(c,o.h,(function(){return!1})),Object(f.a)(c,o.b,(function(){return!0})),Object(f.a)(c,o.c,(function(){return!1})),Object(f.a)(c,o.a,(function(){return!1})),Object(f.a)(c,o.f,(function(){return!0})),Object(f.a)(c,o.g,(function(){return!1})),Object(f.a)(c,o.e,(function(){return!1})),c)),m=Object(h.c)("",Object(f.a)({},o.d,(function(t,e){return e.payload}))),v=Object(h.c)(null,{}),x=Object(d.c)({items:g,filter:m,loading:p,error:v})},51:function(t,e,n){t.exports={header:"AppBar_header__mjMCE"}},53:function(t,e,n){t.exports={Spinner:"Loader_Spinner__3OrXC"}},6:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return f}));var r=n(2),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),o=Object(r.b)("contacts/addContactsRequest"),s=Object(r.b)("contacts/addContactsSuccess"),i=Object(r.b)("contacts/addContactsError"),b=Object(r.b)("contacts/deleteFromContactsRequest"),j=Object(r.b)("contacts/deleteFromContactsSuccess"),l=Object(r.b)("contacts/deleteFromContactsError"),f=Object(r.b)("contacts/changeFilter")},61:function(t,e,n){},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return y}));var r=n(2),c={registerRequest:Object(r.b)("auth/registerRequest"),registerSuccess:Object(r.b)("auth/registerSuccess"),registerError:Object(r.b)("auth/registerError"),loginRequest:Object(r.b)("auth/loginRequest"),loginSuccess:Object(r.b)("auth/loginSuccess"),loginError:Object(r.b)("auth/loginError"),logoutRequest:Object(r.b)("auth/logoutRequest"),logoutSuccess:Object(r.b)("auth/logoutSuccess"),logoutError:Object(r.b)("auth/logoutError"),getCurrentUserRequest:Object(r.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(r.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(r.b)("auth/getCurrentUserError")},a=n(18),u=n.n(a),o=n(23),s=n(15),i=n.n(s);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var b,j,l,f,O=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){i.a.defaults.headers.common.Authorization=""},h={register:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(c.registerRequest()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:r=e.sent,O(r.data.token),n(c.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(c.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(c.loginRequest),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:r=e.sent,O(r.data.token),n(c.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(c.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(o.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(c.logoutRequest),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:d(),e(c.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(c.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(o.a)(u.a.mark((function t(e,n){var r,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return O(a),e(c.getCurrentUserRequest()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:o=t.sent,e(c.getCurrentUserSuccess(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(c.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},g=n(3),p=n(8),m={name:null,email:null},v=Object(r.c)(m,(b={},Object(g.a)(b,c.registerSuccess,(function(t,e){return e.payload.user})),Object(g.a)(b,c.loginSuccess,(function(t,e){return e.payload.user})),Object(g.a)(b,c.logoutSuccess,(function(){return m})),Object(g.a)(b,c.getCurrentUserSuccess,(function(t,e){return e.payload})),b)),x=Object(r.c)(!1,(j={},Object(g.a)(j,c.registerSuccess,(function(){return!0})),Object(g.a)(j,c.loginSuccess,(function(){return!0})),Object(g.a)(j,c.getCurrentUserSuccess,(function(){return!0})),Object(g.a)(j,c.registerError,(function(){return!1})),Object(g.a)(j,c.loginError,(function(){return!1})),Object(g.a)(j,c.getCurrentUserError,(function(){return!1})),Object(g.a)(j,c.logoutSuccess,(function(){return!1})),j)),k=Object(r.c)(null,(l={},Object(g.a)(l,c.registerSuccess,(function(t,e){return e.payload.token})),Object(g.a)(l,c.loginSuccess,(function(t,e){return e.payload.token})),Object(g.a)(l,c.logoutSuccess,(function(){return null})),l)),C=function(t,e){return e.payload},S=Object(r.c)(null,(f={},Object(g.a)(f,c.registerError,C),Object(g.a)(f,c.loginError,C),Object(g.a)(f,c.logoutError,C),Object(g.a)(f,c.getCurrentUserError,C),f)),_=Object(p.c)({user:v,isAuthenticated:x,token:k,error:S}),y={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserEmail:function(t){return t.auth.user.email}}}},[[109,5,6]]]);
//# sourceMappingURL=main.8da21673.chunk.js.map