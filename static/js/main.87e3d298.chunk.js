(this.webpackJsonproomreservation=this.webpackJsonproomreservation||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n(19),c=n.n(o),s=n(15),i=(n(54),n(17)),l=(n(55),function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/rooms",children:Object(a.jsx)("li",{children:"Rooms"})}),Object(a.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/bookings",children:Object(a.jsx)("li",{children:"Bookings"})}),Object(a.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/visitors",children:Object(a.jsx)("li",{children:"Visitors"})})]})})}),u=n(16),b=n(4),O=n.n(b),d=n(9),j=n(21),m=n.n(j),p=n(43),f=m.a.create({baseURL:"https://it-blog-posts.herokuapp.com/api/",responseType:"json"}),h=Object(p.a)(f),v={rooms:new h((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"rooms/".concat(t||"")})),bookings:new h((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"roomBookings/".concat(t||"")})),visitors:new h((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"visitors/".concat(t)})),roomsStatus:new h("rooms/status")},E=function(e){return{type:"CREATE_ROOM_SUCCESS",payload:e}},g=function(e){return{type:"EDIT_ROOM_SUCCESS",payload:e}},x=function(e){return{type:"CREATE_BOOKING_SUCCESS",payload:e}},S=function(e){return{type:"EDIT_BOOKING_SUCCESS",payload:e}},R=function(){return function(){var e=Object(d.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_STATUS_REQUEST"}),e.next=4,v.roomsStatus.get();case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get status");case 7:t({type:"GET_STATUS_SUCCESS",payload:n.data.status}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_STATUS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},_=(n(76),n.p+"static/media/loading.f2322b35.svg"),y=n(14),k=n(2),I={floor:"",beds:"",balcony:!1,roomId:"",bookedAt:""},N=function(e){var t=e.create,n=e.edit,o=e.data,c=e.cancelEdit,s=Object(r.useState)(I),i=Object(u.a)(s,2),l=i[0],b=i[1];Object(r.useEffect)((function(){b(o.initialState)}),[o]);var O=function(e){var t=e.target,n=t.name,a=t.value;a<1e4&&b(Object(k.a)(Object(k.a)({},l),{},Object(y.a)({},n,a)))};return Object(a.jsxs)("div",{className:"room-form",children:[Object(a.jsx)("h2",{children:"Add New Room"}),Object(a.jsx)("label",{htmlFor:"floor",children:"Floor"}),Object(a.jsx)("input",{type:"number",id:"floor",onChange:O,value:l.floor,name:"floor"}),Object(a.jsx)("label",{htmlFor:"beds",children:"Beds"}),Object(a.jsx)("input",{type:"number",id:"beds",onChange:O,value:l.beds,name:"beds"}),Object(a.jsxs)("div",{className:"checkboxDiv",children:[Object(a.jsx)("label",{htmlFor:"balcony",children:"Balcony"}),Object(a.jsx)("input",{onChange:function(e){b(Object(k.a)(Object(k.a)({},l),{},{balcony:e.target.checked}))},type:"checkbox"})]}),Object(a.jsx)("label",{htmlFor:"roomId",children:"Room Number"}),Object(a.jsx)("input",{type:"number",id:"roomId",onChange:O,value:l.roomId,name:"roomId"}),o.editing?Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsx)("button",{className:"create-b",onClick:c,children:"Cancel"}),Object(a.jsx)("button",{className:"create-b",onClick:function(){n(l),c()},children:"Save"})]}):Object(a.jsx)("button",{className:"create-b",onClick:function(){return function(e){var n=e.floor,a=e.beds,r=e.roomId;n&&a&&r&&(t(Object(k.a)(Object(k.a)({},e),{},{bookedAt:(new Date).toLocaleDateString("en-GB")})),b(I))}(l)},children:"Create"})]})},T=function(e){var t=e.gettingStatus,n=e.status,r=n.rooms,o=n.booking,c=n.visitors;return Object(a.jsx)("div",{className:"status-bar",children:t?Object(a.jsx)("img",{src:_,width:"40px",alt:"loading"}):[Object(a.jsx)("div",{children:"Rooms: ".concat(r)},"r-status"),Object(a.jsx)("div",{children:"Bookings: ".concat(o)},"b-status"),Object(a.jsx)("div",{children:"Visitors: ".concat(c)},"v-status")]})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var U=r.createElement("path",{fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"});function B(e,t){var n=e.title,a=e.titleId,o=w(e,["title","titleId"]);return r.createElement("svg",C({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,U)}var A=r.forwardRef(B);n.p;function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=r.createElement("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"});function L(e,t){var n=e.title,a=e.titleId,o=M(e,["title","titleId"]);return r.createElement("svg",G({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"trash-alt",className:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,D)}var F=r.forwardRef(L),K=(n.p,function(e){var t=e.tableNames,n=e.items,r=e.remove,o=e.update;return Object(a.jsxs)("table",{id:"customers",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[t.map((function(e,t){return Object(a.jsx)("th",{children:e},t)})),Object(a.jsx)("th",{children:"Edit"}),Object(a.jsx)("th",{children:"Delete"})]})}),Object(a.jsx)("tbody",{children:n.map((function(e,t){return console.log(e),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:e.bookedAt}),Object(a.jsx)("td",{children:e.floor}),Object(a.jsx)("td",{children:e.beds}),Object(a.jsx)("td",{children:e.balcony?"Yes":"No"}),Object(a.jsx)("td",{children:e.roomId}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{className:"deledit-b edit-b",onClick:function(){return o(e)},children:Object(a.jsx)(A,{className:"svg-edit"})})}),Object(a.jsx)("td",{children:Object(a.jsxs)("button",{className:"deledit-b del-b",onClick:function(){return r(e.id)},children:[Object(a.jsx)("img",{src:"",alt:""}),Object(a.jsx)(F,{className:"svg-remove"})]})})]},e.id)}))})]})}),V={floor:"",beds:"",balcony:!1,roomId:""},Q=["#ID","Booked","Floor","Beds","Balcony","Number"],P=Object(s.b)((function(e){var t=e.rooms;return{status:t.status,gettingStatus:t.gettingStatus,rooms:t.rooms,gettingData:t.gettingData}}),(function(e){return{getStatus:function(){e(R())},getRooms:function(){e(function(){var e=Object(d.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_ROOMS_REQUEST"}),e.next=4,v.rooms.get({id:void 0});case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get Rooms");case 7:t({type:"GET_ROOMS_SUCCESS",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_ROOMS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())},createRoom:function(t){e(function(e){return function(){var t=Object(d.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"CREATE_ROOM_REQUEST"}),t.next=4,v.rooms.post(e);case 4:if(200===(a=t.sent).status){t.next=7;break}throw new Error("Can not create Room");case 7:n(E(a.data)),n(R()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"CREATE_ROOM_FAILURE"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},removeRoom:function(t){e(function(e){return function(){var t=Object(d.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"REMOVE_ROOM_REQUEST"}),t.next=4,v.rooms.delete({uriParams:{id:e}});case 4:if(200===t.sent.status){t.next=7;break}throw new Error("This item was already deleted");case 7:n({type:"REMOVE_ROOM_SUCCESS",payload:e}),n(R()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"REMOVE_ROOM_FAILURE"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editRoom:function(t){e(function(e){return function(){var t=Object(d.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"EDIT_ROOM_REQUEST"}),t.next=4,v.rooms.put(e);case 4:if(200===(a=t.sent).status){t.next=7;break}throw new Error("Can not edit Room");case 7:n(g(a.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"EDIT_ROOM_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(r.useState)({initialState:V,editing:!1}),n=Object(u.a)(t,2),o=n[0],c=n[1],s=e.getStatus,i=e.getRooms,l=e.gettingStatus,b=e.gettingData,O=e.createRoom,d=e.removeRoom,j=e.editRoom;return Object(r.useEffect)((function(){i(),s()}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"leftSide",children:[Object(a.jsx)(T,{status:e.status,gettingStatus:l}),Object(a.jsx)(N,{data:o,create:O,edit:j,cancelEdit:function(){c({initialState:V,editing:!1})}})]}),Object(a.jsx)("div",{className:"list",children:b?Object(a.jsx)("img",{src:_,alt:"loading",style:{marginTop:"31vh"}}):Object(a.jsx)(K,{tableNames:Q,remove:d,update:function(e){c({initialState:e,editing:!0})},items:e.rooms})})]})})),z=function(e){e.create;return Object(a.jsx)("div",{className:"room-form"})},H=["#","Person Name","Person ID","Date","Card Number"],J=function(e){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"leftSide",children:Object(a.jsx)(z,{})}),Object(a.jsx)("div",{className:"list",children:Object(a.jsx)(K,{tableNames:H,remove:function(){},update:function(){},items:[]})})]})},Y={personName:"",roomNumber:0,roomId:"",personId:"",bookedAt:"",id:""},q=function(e){var t=e.create,n=Object(r.useState)(Y),o=Object(u.a)(n,2),c=o[0],s=o[1],i=function(e){var t=e.target,n=t.name,a=t.value;s(Object(k.a)(Object(k.a)({},c),{},Object(y.a)({},n,a)))};return Object(a.jsxs)("div",{className:"room-form",children:[Object(a.jsx)("h2",{children:"New Booking"}),Object(a.jsx)("label",{htmlFor:"floor",children:"Person Name"}),Object(a.jsx)("select",{onChange:i,value:c.personName,name:"personName",children:Object(a.jsx)("option",{value:"person",children:"Person"})}),Object(a.jsx)("label",{htmlFor:"beds",children:"Person ID"}),Object(a.jsx)("input",{type:"number",id:"beds",onChange:i,value:c.roomNumber,name:"beds"}),Object(a.jsx)("label",{htmlFor:"beds",children:"Room ID"}),Object(a.jsx)("select",{onChange:i,value:c.roomNumber,name:"personName",children:Object(a.jsx)("option",{value:"person",children:"Room ID"})}),Object(a.jsx)("label",{htmlFor:"roomId",children:"Date"}),Object(a.jsx)("input",{type:"number",id:"roomId",onChange:i,value:c.roomId,name:"roomId"}),Object(a.jsx)("button",{className:"create-b",onClick:function(){return function(e){var n=e.personName,a=e.roomNumber,r=e.roomId;n&&a&&r&&(t(Object(k.a)(Object(k.a)({},e),{},{bookedAt:(new Date).toLocaleDateString("en-GB")})),s(Y))}(c)},children:"Book"})]})},W=["#","Person Name","Room ID","Booked","Person ID"],X=Object(s.b)((function(e){console.log("STATEAAS",e);var t=e.bookings;return{bookings:t.bookings,gettingData:t.gettingData}}),(function(e){return{getBookings:function(){e(function(){var e=Object(d.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_BOOKINGS_REQUEST"}),e.next=4,v.bookings.get({id:void 0});case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get Bookings");case 7:t({type:"GET_BOOKINGS_SUCCESS",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_BOOKINGS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())},createBooking:function(t){e(function(e){return function(){var t=Object(d.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"CREATE_BOOKING_REQUEST"}),t.next=4,v.bookings.post(e);case 4:if(200===(a=t.sent).status){t.next=7;break}throw new Error("Can not create Booking");case 7:n(x(a.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"CREATE_BOOKING_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},removeBooking:function(t){e(function(e){return function(){var t=Object(d.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"REMOVE_BOOKING_REQUEST"}),t.next=4,v.bookings.delete({uriParams:{id:e}});case 4:if(200===t.sent.status){t.next=7;break}throw new Error("This item was already deleted");case 7:n({type:"REMOVE_BOOKING_SUCCESS",payload:e}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"REMOVE_BOOKING_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editBooking:function(t){e(function(e){return function(){var t=Object(d.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"EDIT_BOOKING_REQUEST"}),t.next=4,v.bookings.put(e);case 4:if(200===(a=t.sent).status){t.next=7;break}throw new Error("Can not edit Booking");case 7:n(S(a.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"EDIT_BOOKING_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){console.log(e.bookings);var t=e.gettingData,n=e.getBookings,o=(e.createBooking,e.removeBooking);e.editBooking;return Object(r.useEffect)((function(){n()}),[]),console.log("LOG",e.bookings),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"leftSide",children:Object(a.jsx)(q,{})}),Object(a.jsx)("div",{className:"list",children:t?Object(a.jsx)("img",{src:_,alt:"loading",style:{marginTop:"31vh"}}):Object(a.jsx)(K,{tableNames:W,remove:o,update:function(){},items:e.bookings})})]})})),Z=n(3);var $=function(){return Object(a.jsx)(i.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsxs)(Z.c,{children:[Object(a.jsx)(Z.a,{path:"/",exact:!0,component:P}),Object(a.jsx)(Z.a,{path:"/rooms",component:P}),Object(a.jsx)(Z.a,{path:"/visitors",component:J}),Object(a.jsx)(Z.a,{path:"/bookings",component:X})]})]})})},ee=n(11),te=n(22),ne={gettingStatus:!1,status:{rooms:0,booking:0,visitors:0},gettingData:!1,rooms:[],bookings:[],visitors:[]};var ae={gettingStatus:!1,status:{rooms:0,booking:0,visitors:0},gettingData:!1,rooms:[],bookings:[],visitors:[]};var re=Object(ee.c)({rooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STATUS_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{gettingStatus:!0});case"GET_STATUS_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{gettingStatus:!1,status:t.payload});case"GET_STATUS_FAILURE":return Object(k.a)(Object(k.a)({},e),{},{gettingStatus:!1});case"GET_ROOMS_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{gettingData:!0});case"GET_ROOMS_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{gettingData:!1,rooms:t.payload});case"GET_ROOMS_FAILURE":return Object(k.a)(Object(k.a)({},e),{},{gettingData:!1});case"CREATE_ROOM_REQUEST":return e;case"CREATE_ROOM_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{rooms:[].concat(Object(te.a)(e.rooms),[t.payload])});case"CREATE_ROOM_FAILURE":case"REMOVE_ROOM_REQUEST":return e;case"REMOVE_ROOM_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{rooms:e.rooms.filter((function(e){return e.id!==t.payload}))});case"REMOVE_ROOM_FAILURE":case"EDIT_ROOM_REQUEST":return e;case"EDIT_ROOM_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{rooms:e.rooms.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"EDIT_ROOM_FAILURE":default:return e}},bookings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKINGS_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{gettingData:!0});case"GET_BOOKINGS_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{gettingData:!1,bookings:t.payload});case"GET_BOOKINGS_FAILURE":return Object(k.a)(Object(k.a)({},e),{},{gettingData:!1});case"CREATE_BOOKING_REQUEST":return e;case"CREATE_BOOKING_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{bookings:[].concat(Object(te.a)(e.bookings),[t.payload])});case"CREATE_BOOKING_FAILURE":case"REMOVE_BOOKING_REQUEST":return e;case"REMOVE_BOOKING_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{bookings:e.bookings.filter((function(e){return e.id!==t.payload}))});case"REMOVE_BOOKING_FAILURE":case"EDIT_BOOKING_REQUEST":return e;case"EDIT_BOOKING_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{bookings:e.bookings.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"EDIT_BOOKING_FAILURE":default:return e}}}),oe=[n(44).a],ce=Object(ee.e)(re,Object(ee.d)(ee.a.apply(void 0,oe)));c.a.render(Object(a.jsx)(s.a,{store:ce,children:Object(a.jsx)($,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.87e3d298.chunk.js.map