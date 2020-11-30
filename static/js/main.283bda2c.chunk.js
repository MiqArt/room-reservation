(this.webpackJsonproomreservation=this.webpackJsonproomreservation||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n(20),c=n.n(o),s=n(11),i=(n(54),n(18)),u=(n(55),function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsxs)("ul",{className:"nav-links",children:[Object(r.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/rooms",children:Object(r.jsx)("li",{children:"Rooms"})}),Object(r.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/bookings",children:Object(r.jsx)("li",{children:"Bookings"})}),Object(r.jsx)(i.b,{activeClassName:"activeRoute",className:"nav-link",to:"/visitors",children:Object(r.jsx)("li",{children:"Visitors"})})]})})}),l=n(9),d=n(3),b=n.n(d),O=n(6),j=n(22),p=n.n(j),m=n(43),f=p.a.create({baseURL:"https://it-blog-posts.herokuapp.com/api/",responseType:"json"}),v=Object(m.a)(f),E={rooms:new v((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"rooms/".concat(t||"")})),bookings:new v((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"roomBookings/".concat(t||"")})),visitors:new v((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.id;return"visitors/".concat(t||"")})),roomsStatus:new v("rooms/status")},h=function(e){return{type:"CREATE_ROOM_SUCCESS",payload:e}},g=function(e){return{type:"EDIT_ROOM_SUCCESS",payload:e}},S=function(e){return{type:"CREATE_BOOKING_SUCCESS",payload:e}},x=function(e){return{type:"EDIT_BOOKING_SUCCESS",payload:e}},I=function(e){return{type:"CREATE_VISITOR_SUCCESS",payload:e}},R=function(e){return{type:"EDIT_VISITOR_SUCCESS",payload:e}},_=function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_STATUS_REQUEST"}),e.next=4,E.roomsStatus.get();case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get status");case 7:t({type:"GET_STATUS_SUCCESS",payload:n.data.status}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_STATUS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_ROOMS_REQUEST"}),e.next=4,E.rooms.get({id:void 0});case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get Rooms");case 7:t({type:"GET_ROOMS_SUCCESS",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_ROOMS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_VISITORS_REQUEST"}),e.next=4,E.visitors.get({id:void 0});case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get Visitors");case 7:t({type:"GET_VISITORS_SUCCESS",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_VISITORS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},k=(n(76),n.p+"static/media/loading.f2322b35.svg"),N=n(13),C=n(2),w={floor:"",beds:"",balcony:!1,roomId:"",bookedAt:""},U=function(e){var t=e.create,n=e.edit,o=e.data,c=e.cancelEdit,s=Object(a.useState)(w),i=Object(l.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){d(o.initialState)}),[o]);var b=function(e){var t=e.target,n=t.name,r=t.value;r<1e4&&d(Object(C.a)(Object(C.a)({},u),{},Object(N.a)({},n,r)))};return Object(r.jsxs)("div",{className:"room-form",children:[Object(r.jsx)("h2",{children:"Add New Room"}),Object(r.jsx)("label",{htmlFor:"floor",children:"Floor"}),Object(r.jsx)("input",{type:"number",id:"floor",onChange:b,value:u.floor,name:"floor"}),Object(r.jsx)("label",{htmlFor:"beds",children:"Beds"}),Object(r.jsx)("input",{type:"number",id:"beds",onChange:b,value:u.beds,name:"beds"}),Object(r.jsxs)("div",{className:"checkboxDiv",children:[Object(r.jsx)("label",{htmlFor:"balcony",children:"Balcony"}),Object(r.jsx)("input",{onChange:function(e){d(Object(C.a)(Object(C.a)({},u),{},{balcony:e.target.checked}))},type:"checkbox"})]}),Object(r.jsx)("label",{htmlFor:"roomId",children:"Room Number"}),Object(r.jsx)("input",{type:"number",id:"roomId",onChange:b,value:u.roomId,name:"roomId"}),o.editing?Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{className:"create-b",onClick:c,children:"Cancel"}),Object(r.jsx)("button",{className:"create-b",onClick:function(){n(u),c()},children:"Save"})]}):Object(r.jsx)("button",{className:"create-b",onClick:function(){return function(e){var n=e.floor,r=e.beds,a=e.roomId;n&&r&&a&&(t(Object(C.a)(Object(C.a)({},e),{},{bookedAt:(new Date).toLocaleDateString("en-GB")})),d(w))}(u)},children:"Create"})]})},A=function(e){var t=e.gettingStatus,n=e.status,a=n.rooms,o=n.booking,c=n.visitors;return Object(r.jsx)("div",{className:"status-bar",children:t?Object(r.jsx)("img",{src:k,width:"40px",alt:"loading"}):[Object(r.jsx)("div",{children:"Rooms: ".concat(a)},"r-status"),Object(r.jsx)("div",{children:"Bookings: ".concat(o)},"b-status"),Object(r.jsx)("div",{children:"Visitors: ".concat(c)},"v-status")]})};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B=a.createElement("path",{fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"});function G(e,t){var n=e.title,r=e.titleId,o=V(e,["title","titleId"]);return a.createElement("svg",D({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,B)}var M=a.forwardRef(G);n.p;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Q=a.createElement("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"});function K(e,t){var n=e.title,r=e.titleId,o=L(e,["title","titleId"]);return a.createElement("svg",F({"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"trash-alt",className:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,Q)}var P=a.forwardRef(K),z=(n.p,function(e){var t=e.type,n=e.tableNames,a=e.items,o=e.remove,c=e.update;return Object(r.jsxs)("table",{id:"customers",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[n.map((function(e,t){return Object(r.jsx)("th",{children:e},t)})),Object(r.jsx)("th",{children:"Edit"}),Object(r.jsx)("th",{children:"Delete"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e,n){return Object(r.jsxs)("tr",{children:[["rooms"===t&&[Object(r.jsx)("td",{children:n+1},"room-id"),Object(r.jsx)("td",{children:e.bookedAt},"room-bookedAt"),Object(r.jsx)("td",{children:e.floor},"room-floor"),Object(r.jsx)("td",{children:e.beds},"room-beds"),Object(r.jsx)("td",{children:e.balcony?"Yes":"No"},"room-balcony"),Object(r.jsx)("td",{children:e.roomId},"room-roomId")],"bookings"===t&&[Object(r.jsx)("td",{children:n+1},"booking-id"),Object(r.jsx)("td",{children:e.personName},"booking-personName"),Object(r.jsx)("td",{children:e.roomNumber},"booking-roomNumber"),Object(r.jsx)("td",{children:e.bookedAt},"booking-bookedAt"),Object(r.jsx)("td",{children:e.personId},"booking-personId")],"visitors"===t&&[Object(r.jsx)("td",{children:n+1},"visitors-id"),Object(r.jsx)("td",{children:e.personName},"visitors-personName"),Object(r.jsx)("td",{children:e.personId},"visitors-personId"),Object(r.jsx)("td",{children:e.createdDate},"visitors-createdDate"),Object(r.jsx)("td",{children:e.cardNumber},"visitors-cardNumber")]],Object(r.jsx)("td",{children:Object(r.jsx)("button",{className:"deledit-b edit-b",onClick:function(){return c(e)},children:Object(r.jsx)(M,{className:"svg-edit"})})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{className:"deledit-b del-b",onClick:function(){return o(e.id)},children:Object(r.jsx)(P,{className:"svg-remove"})})})]},e.id)}))})]})}),H={floor:"",beds:"",balcony:!1,roomId:""},J=["#ID","Booked","Floor","Beds","Balcony","Number"],Y=Object(s.b)((function(e){var t=e.rooms;return{status:t.status,gettingStatus:t.gettingStatus,rooms:t.rooms,gettingData:t.gettingData}}),(function(e){return{getStatus:function(){e(_())},getRooms:function(){e(y())},createRoom:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"CREATE_ROOM_REQUEST"}),t.next=4,E.rooms.post(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not create Room");case 7:n(h(r.data)),n(_()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"CREATE_ROOM_FAILURE"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},removeRoom:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"REMOVE_ROOM_REQUEST"}),t.next=4,E.rooms.delete({uriParams:{id:e}});case 4:if(200===t.sent.status){t.next=7;break}throw new Error("This item was already deleted");case 7:n({type:"REMOVE_ROOM_SUCCESS",payload:e}),n(_()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"REMOVE_ROOM_FAILURE"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editRoom:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"EDIT_ROOM_REQUEST"}),t.next=4,E.rooms.put(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not edit Room");case 7:n(g(r.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"EDIT_ROOM_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(a.useState)({initialState:H,editing:!1}),n=Object(l.a)(t,2),o=n[0],c=n[1],s=e.getStatus,i=e.getRooms,u=e.gettingStatus,d=e.gettingData,b=e.createRoom,O=e.removeRoom,j=e.editRoom;return Object(a.useEffect)((function(){i(),s()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"leftSide",children:[Object(r.jsx)(A,{status:e.status,gettingStatus:u}),Object(r.jsx)(U,{data:o,create:b,edit:j,cancelEdit:function(){c({initialState:H,editing:!1})}})]}),Object(r.jsx)("div",{className:"list",children:d?Object(r.jsx)("img",{src:k,alt:"loading",style:{marginTop:"31vh"}}):Object(r.jsx)(z,{type:"rooms",tableNames:J,remove:O,update:function(e){c({initialState:e,editing:!0})},items:e.rooms})})]})})),q={personName:"",personId:"",cardNumber:"",createdDate:""},W=function(e){var t=e.create,n=e.edit,o=e.cancelEdit,c=e.data,s=Object(a.useState)(q),i=Object(l.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){d(c.initialState)}),[c]);var b=function(e){var t=e.target,n=t.name,r=t.value;d(Object(C.a)(Object(C.a)({},u),{},Object(N.a)({},n,r)))};return Object(r.jsxs)("div",{className:"room-form",children:[Object(r.jsx)("h2",{children:"Add New Person"}),Object(r.jsx)("label",{htmlFor:"personName",children:"Person Name"}),Object(r.jsx)("input",{type:"text",onChange:b,value:u.personName,name:"personName"}),Object(r.jsx)("label",{htmlFor:"personId",children:"Person ID"}),Object(r.jsx)("input",{type:"text",onChange:b,value:u.personId,name:"personId"}),Object(r.jsx)("label",{htmlFor:"cardNumber",children:"Card Number"}),Object(r.jsx)("input",{type:"text",onChange:b,value:u.cardNumber,name:"cardNumber"}),Object(r.jsx)("label",{htmlFor:"createdDate",children:"Date"}),Object(r.jsx)("input",{type:"date",onChange:b,value:u.createdDate,name:"createdDate"}),c.editing?Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{className:"create-b",onClick:o,children:"Cancel"}),Object(r.jsx)("button",{className:"create-b",onClick:function(){n(u),o()},children:"Save"})]}):Object(r.jsx)("button",{className:"create-b",onClick:function(){return function(e){var n=e.personName,r=e.personId,a=e.cardNumber,o=e.createdDate;n&&r&&a&&o&&(t(Object(C.a)(Object(C.a)({},e),{},{createdDate:new Date(o).toLocaleDateString("en-GB")})),d(q))}(u)},children:"Save"})]})},X=function(e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[a,n,r].join("-")},Z={personName:"",personId:"",cardNumber:"",createdDate:""},$=["#","Person Name","Person ID","Date","Card Number"],ee=Object(s.b)((function(e){var t=e.visitors;return{visitors:t.visitors,gettingData:t.gettingData}}),(function(e){return{getVisitors:function(){e(T())},createVisitor:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"CREATE_VISITOR_REQUEST"}),t.next=4,E.visitors.post(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not create Visitor");case 7:n(I(r.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"CREATE_VISITOR_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},removeVisitor:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"REMOVE_VISITOR_REQUEST"}),t.next=4,E.visitors.delete({uriParams:{id:e}});case 4:if(200===t.sent.status){t.next=7;break}throw new Error("This item was already deleted");case 7:n({type:"REMOVE_VISITOR_SUCCESS",payload:e}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"REMOVE_VISITOR_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editVisitor:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"EDIT_VISITOR_REQUEST"}),t.next=4,E.visitors.put(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not edit Visitor");case 7:n(R(r.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"EDIT_VISITOR_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(a.useState)({initialState:Z,editing:!1}),n=Object(l.a)(t,2),o=n[0],c=n[1],s=e.gettingData,i=e.getVisitors,u=e.createVisitor,d=e.removeVisitor,b=e.editVisitor,O=e.visitors;return Object(a.useEffect)((function(){i()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"leftSide",children:Object(r.jsx)(W,{data:o,create:u,edit:b,cancelEdit:function(){c({initialState:Z,editing:!1})}})}),Object(r.jsx)("div",{className:"list",children:s?Object(r.jsx)("img",{src:k,alt:"loading",style:{marginTop:"31vh"}}):Object(r.jsx)(z,{type:"visitors",tableNames:$,remove:d,update:function(e){c({initialState:Object(C.a)(Object(C.a)({},e),{},{createdDate:X(e.createdDate)}),editing:!0})},items:O})})]})})),te={personName:"",roomNumber:"",roomId:"",personId:"",bookedAt:""},ne=Object(s.b)((function(e){return{visitors:e.visitors.visitors,rooms:e.rooms.rooms}}))((function(e){var t=e.create,n=e.edit,o=e.cancelEdit,c=e.data,s=e.visitors,i=e.rooms,u=Object(a.useState)(te),d=Object(l.a)(u,2),b=d[0],O=d[1];Object(a.useEffect)((function(){O(c.initialState)}),[c]);var j=function(e){var t,n=e.target,r=n.name,a=n.value,o=b.roomId;"roomNumber"===r&&(o=i.find((function(e){return e.roomId===parseInt(a)})).id),O(Object(C.a)(Object(C.a)({},b),{},(t={},Object(N.a)(t,r,a),Object(N.a)(t,"roomId",o),t)))};return Object(r.jsxs)("div",{className:"room-form",children:[Object(r.jsx)("h2",{children:"New Booking"}),Object(r.jsx)("label",{htmlFor:"personName",children:"Person Name"}),Object(r.jsxs)("select",{onChange:j,value:b.personName||"default",name:"personName",children:[Object(r.jsx)("option",{disabled:!0,value:"default",children:" -- select person name -- "}),s.map((function(e,t){return Object(r.jsx)("option",{value:e.personName,children:e.personName},"option-".concat(t))}))]}),Object(r.jsx)("label",{htmlFor:"personId",children:"Person ID"}),Object(r.jsxs)("select",{onChange:j,value:b.personId||"default",name:"personId",children:[Object(r.jsx)("option",{disabled:!0,value:"default",children:" -- select person id -- "}),s.map((function(e,t){return Object(r.jsx)("option",{value:e.personId,children:e.personId},"option-".concat(t))}))]}),Object(r.jsx)("label",{htmlFor:"roomNumber",children:"Room ID"}),Object(r.jsxs)("select",{onChange:j,value:b.roomNumber||"default",name:"roomNumber",children:[Object(r.jsx)("option",{disabled:!0,value:"default",children:" -- select room id -- "}),i.map((function(e,t){return Object(r.jsx)("option",{value:e.roomId,children:e.roomId},"option-".concat(t))}))]}),Object(r.jsx)("label",{htmlFor:"bookedAt",children:"Date"}),Object(r.jsx)("input",{type:"date",onChange:j,value:b.bookedAt,name:"bookedAt"}),c.editing?Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)("button",{className:"create-b",onClick:o,children:"Cancel"}),Object(r.jsx)("button",{className:"create-b",onClick:function(){n(b),o()},children:"Save"})]}):Object(r.jsx)("button",{className:"create-b",onClick:function(){return function(e){var n=e.personName,r=e.personId,a=e.roomNumber,o=e.bookedAt;n&&r&&a&&o&&(t(Object(C.a)(Object(C.a)({},e),{},{bookedAt:new Date(o).toLocaleDateString("en-GB")})),O(te))}(b)},children:"Book"})]})})),re={personName:"",roomNumber:"",personId:"",bookedAt:""},ae=["#","Person Name","Room ID","Booked","Person ID"],oe=Object(s.b)((function(e){var t=e.bookings;return{bookings:t.bookings,gettingData:t.gettingData}}),(function(e){return{getBookings:function(){e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"GET_BOOKINGS_REQUEST"}),e.next=4,E.bookings.get({id:void 0});case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error("Can not get Bookings");case 7:t({type:"GET_BOOKINGS_SUCCESS",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GET_BOOKINGS_FAILURE"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())},createBooking:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"CREATE_BOOKING_REQUEST"}),t.next=4,E.bookings.post(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not create Booking");case 7:n(S(r.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"CREATE_BOOKING_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},removeBooking:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"REMOVE_BOOKING_REQUEST"}),t.next=4,E.bookings.delete({uriParams:{id:e}});case 4:if(200===t.sent.status){t.next=7;break}throw new Error("This item was already deleted");case 7:n({type:"REMOVE_BOOKING_SUCCESS",payload:e}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"REMOVE_BOOKING_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editBooking:function(t){e(function(e){return function(){var t=Object(O.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"EDIT_BOOKING_REQUEST"}),t.next=4,E.bookings.put(e);case 4:if(200===(r=t.sent).status){t.next=7;break}throw new Error("Can not edit Booking");case 7:n(x(r.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:"EDIT_BOOKING_FAILURE"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},getVisitors:function(){e(T())},getRooms:function(){e(y())}}}))((function(e){var t=Object(a.useState)({initialState:re,editing:!1}),n=Object(l.a)(t,2),o=n[0],c=n[1],s=e.gettingData,i=e.getBookings,u=e.createBooking,d=e.removeBooking,b=e.editBooking,O=e.getVisitors,j=e.getRooms,p=e.bookings;return Object(a.useEffect)((function(){i(),O(),j()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"leftSide",children:Object(r.jsx)(ne,{data:o,create:u,edit:b,cancelEdit:function(){c({initialState:re,editing:!1})}})}),Object(r.jsx)("div",{className:"list",children:s?Object(r.jsx)("img",{src:k,alt:"loading",style:{marginTop:"31vh"}}):Object(r.jsx)(z,{type:"bookings",tableNames:ae,remove:d,update:function(e){c({initialState:Object(C.a)(Object(C.a)({},e),{},{bookedAt:X(e.bookedAt)}),editing:!0})},items:p})})]})})),ce=n(4);var se=function(){return Object(r.jsx)(i.a,{basename:"/room-reservation",children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{}),Object(r.jsxs)(ce.d,{children:[Object(r.jsx)(ce.b,{exact:!0,path:"/",children:Object(r.jsx)(ce.a,{to:"/rooms"})}),Object(r.jsx)(ce.b,{path:"/rooms",component:Y}),Object(r.jsx)(ce.b,{path:"/visitors",component:ee}),Object(r.jsx)(ce.b,{path:"/bookings",component:oe}),Object(r.jsx)(ce.a,{to:"/"})]})]})})},ie=n(14),ue=n(17),le={gettingStatus:!1,status:{rooms:0,booking:0,visitors:0},gettingData:!1,rooms:[],bookings:[],visitors:[]};var de={gettingStatus:!1,status:{rooms:0,booking:0,visitors:0},gettingData:!1,rooms:[],bookings:[],visitors:[]};var be={gettingStatus:!1,status:{rooms:0,booking:0,visitors:0},gettingData:!1,rooms:[],bookings:[],visitors:[]};var Oe=Object(ie.c)({rooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STATUS_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{gettingStatus:!0});case"GET_STATUS_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{gettingStatus:!1,status:t.payload});case"GET_STATUS_FAILURE":return Object(C.a)(Object(C.a)({},e),{},{gettingStatus:!1});case"GET_ROOMS_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!0});case"GET_ROOMS_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!1,rooms:t.payload});case"GET_ROOMS_FAILURE":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!1});case"CREATE_ROOM_REQUEST":return e;case"CREATE_ROOM_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{rooms:[].concat(Object(ue.a)(e.rooms),[t.payload])});case"CREATE_ROOM_FAILURE":case"REMOVE_ROOM_REQUEST":return e;case"REMOVE_ROOM_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{rooms:e.rooms.filter((function(e){return e.id!==t.payload}))});case"REMOVE_ROOM_FAILURE":case"EDIT_ROOM_REQUEST":return e;case"EDIT_ROOM_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{rooms:e.rooms.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"EDIT_ROOM_FAILURE":default:return e}},bookings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKINGS_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!0});case"GET_BOOKINGS_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!1,bookings:t.payload});case"GET_BOOKINGS_FAILURE":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!1});case"CREATE_BOOKING_REQUEST":return e;case"CREATE_BOOKING_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{bookings:[].concat(Object(ue.a)(e.bookings),[t.payload])});case"CREATE_BOOKING_FAILURE":case"REMOVE_BOOKING_REQUEST":return e;case"REMOVE_BOOKING_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{bookings:e.bookings.filter((function(e){return e.id!==t.payload}))});case"REMOVE_BOOKING_FAILURE":case"EDIT_BOOKING_REQUEST":return e;case"EDIT_BOOKING_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{bookings:e.bookings.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"EDIT_BOOKING_FAILURE":default:return e}},visitors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_VISITORS_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!0});case"GET_VISITORS_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!1,visitors:t.payload});case"GET_VISITORS_FAILURE":return Object(C.a)(Object(C.a)({},e),{},{gettingData:!1});case"CREATE_VISITOR_REQUEST":return e;case"CREATE_VISITOR_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{visitors:[].concat(Object(ue.a)(e.visitors),[t.payload])});case"CREATE_VISITOR_FAILURE":case"REMOVE_VISITOR_REQUEST":return e;case"REMOVE_VISITOR_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{visitors:e.visitors.filter((function(e){return e.id!==t.payload}))});case"REMOVE_VISITOR_FAILURE":case"EDIT_VISITOR_REQUEST":return e;case"EDIT_VISITOR_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{visitors:e.visitors.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"EDIT_VISITOR_FAILURE":default:return e}}}),je=[n(44).a],pe=Object(ie.e)(Oe,Object(ie.d)(ie.a.apply(void 0,je)));c.a.render(Object(r.jsx)(s.a,{store:pe,children:Object(r.jsx)(se,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.283bda2c.chunk.js.map