(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t(4);var o=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer-text"},"Copyright 2022 - HRnet"))};var s=function(){return r.a.createElement("main",{className:"homepage"},r.a.createElement("div",{className:"hero"},r.a.createElement("section",{className:"hero-content"},r.a.createElement("p",{className:"subtitle"},"Actions :"),r.a.createElement(l.b,{to:"/add-employee",className:"box-button"},r.a.createElement("button",{className:"button-87"},"Add employee")),r.a.createElement(l.b,{to:"/list-employee",className:"box-button"},r.a.createElement("button",{className:"button-87"},"Employee list")))))},m=(t(64),t(48)),c=t.n(m),u=t(59),d=t(49);var b=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement(l.b,{to:"/",className:"logo-box"},r.a.createElement("img",{src:c.a,alt:"Logo",className:"main-nav-logo"}),r.a.createElement("h1",{className:"title-logo"},"Wealth Health")),r.a.createElement("div",{className:"logged-container"},r.a.createElement(u.a,{icon:d.a,className:"logout-icon"}),r.a.createElement("p",{className:"main-nav-item"},"Sign out")))};var v=function(){return r.a.createElement("div",{className:"errorpage"},r.a.createElement("div",{className:"hero"},r.a.createElement("section",{className:"hero-content"},r.a.createElement("h2",{className:"sr-only"},"Error page"),r.a.createElement("p",{className:"subtitle"},"404"),r.a.createElement("p",{className:"subtitle"},"Whoops! The page you requested does not exist."),r.a.createElement("p",{className:"text"},r.a.createElement(l.b,{to:"/"},"Return to the home page")))))},p=t(22),h=t(30),N=t(8),E=t(51),f=t.n(E),g=t(86),y=t(99),C=t(50),D=t.n(C),M=[{name:"Choose a state",abbreviation:"NO",value:""},{name:"Alabama",abbreviation:"AL",value:"Alabama"},{name:"Alaska",abbreviation:"AK",value:"Alaska"},{name:"American Samoa",abbreviation:"AS",value:"American Samoa"},{name:"Arizona",abbreviation:"AZ",value:"Arizona"},{name:"Arkansas",abbreviation:"AR",value:"Arkansas"},{name:"California",abbreviation:"CA",value:"California"},{name:"Colorado",abbreviation:"CO",value:"Colorado"},{name:"Connecticut",abbreviation:"CT",value:"Connecticut"},{name:"Delaware",abbreviation:"DE",value:"Delaware"},{name:"District Of Columbia",abbreviation:"DC",value:"District Of Columbia"},{name:"Federated States Of Micronesia",abbreviation:"FM",value:"Federated States Of Micronesia"},{name:"Florida",abbreviation:"FL",value:"Florida"},{name:"Georgia",abbreviation:"GA",value:"Georgia"},{name:"Guam",abbreviation:"GU",value:"Guam"},{name:"Hawaii",abbreviation:"HI",value:"Hawaii"},{name:"Idaho",abbreviation:"ID",value:"Idaho"},{name:"Illinois",abbreviation:"IL",value:"Illinois"},{name:"Indiana",abbreviation:"IN",value:"Indiana"},{name:"Iowa",abbreviation:"IA",value:"Iowa"},{name:"Kansas",abbreviation:"KS",value:"Kansas"},{name:"Kentucky",abbreviation:"KY",value:"Kentucky"},{name:"Louisiana",abbreviation:"LA",value:"Louisiana"},{name:"Maine",abbreviation:"ME",value:"Maine"},{name:"Marshall Islands",abbreviation:"MH",value:"Marshall Islands"},{name:"Maryland",abbreviation:"MD",value:"Maryland"},{name:"Massachusetts",abbreviation:"MA",value:"Massachusetts"},{name:"Michigan",abbreviation:"MI",value:"Michigan"},{name:"Minnesota",abbreviation:"MN",value:"Minnesota"},{name:"Mississippi",abbreviation:"MS",value:"Mississippi"},{name:"Missouri",abbreviation:"MO",value:"Missouri"},{name:"Montana",abbreviation:"MT",value:"Montana"},{name:"Nebraska",abbreviation:"NE",value:"Nebraska"},{name:"Nevada",abbreviation:"NV",value:"Nevada"},{name:"New Hampshire",abbreviation:"NH",value:"New Hampshire"},{name:"New Jersey",abbreviation:"NJ",value:"New Jersey"},{name:"New Mexico",abbreviation:"NM",value:"New Mexico"},{name:"New York",abbreviation:"NY",value:"New York"},{name:"North Carolina",abbreviation:"NC",value:"North Carolina"},{name:"North Dakota",abbreviation:"ND",value:"North Dakota"},{name:"Northern Mariana Islands",abbreviation:"MP",value:"Northern Mariana Islands"},{name:"Ohio",abbreviation:"OH",value:"Ohio"},{name:"Oklahoma",abbreviation:"OK",value:"Oklahoma"},{name:"Oregon",abbreviation:"OR",value:"Oregon"},{name:"Palau",abbreviation:"PW",value:"Palau"},{name:"Pennsylvania",abbreviation:"PA",value:"Pennsylvania"},{name:"Puerto Rico",abbreviation:"PR",value:"Puerto Rico"},{name:"Rhode Island",abbreviation:"RI",value:"Rhode Island"},{name:"South Carolina",abbreviation:"SC",value:"South Carolina"},{name:"South Dakota",abbreviation:"SD",value:"South Dakota"},{name:"Tennessee",abbreviation:"TN",value:"Tennessee"},{name:"Texas",abbreviation:"TX",value:"Texas"},{name:"Utah",abbreviation:"UT",value:"Utah"},{name:"Vermont",abbreviation:"VT",value:"Vermont"},{name:"Virgin Islands",abbreviation:"VI",value:"Virgin Islands"},{name:"Virginia",abbreviation:"VA",value:"Virginia"},{name:"Washington",abbreviation:"WA",value:"Washington"},{name:"West Virginia",abbreviation:"WV",value:"West Virginia"},{name:"Wisconsin",abbreviation:"WI",value:"Wisconsin"},{name:"Wyoming",abbreviation:"WY",value:"Wyoming"}],w=[{abbreviation:"NO",name:"Choose a departement",value:""},{abbreviation:"SA",name:"Sales",value:"Sales"},{abbreviation:"MARK",name:"Marketing",value:"Marketing"},{abbreviation:"ENGI",name:"Engineering",value:"Engineering"},{abbreviation:"HURESS",name:"Human Ressources",value:"Human Ressources"},{abbreviation:"LEG",name:"Legal",value:"Legal"}],S=["January","February","March","April","May","June","July","August","September","October","November","December"],L=(t(85),t(18));var O=function(e){var a=e.value,t=e.setDate,n=D()(1920,Object(g.default)(new Date)+1,1);return r.a.createElement("div",{className:"date-picker-container"},r.a.createElement(f.a,{className:"date-picker-container",todayButton:r.a.createElement(L.c,null),useWeekdaysShort:!0,selected:a,onChange:function(e){return t(e)},required:!0,closeOnScroll:!0,placeholderText:"Click to select a date",renderCustomHeader:function(e){var a=e.date,t=e.changeMonth,l=e.changeYear,i=e.decreaseMonth,o=e.increaseMonth,s=e.prevMonthButtonDisabled,m=e.nextMonthButtonDisabled;return r.a.createElement("div",{className:"date-picker-header"},r.a.createElement(L.a,{onClick:i,disabled:s}),r.a.createElement("select",{className:"date-picker-select",value:S[Object(y.default)(a)],onChange:function(e){var a=e.target.value;return t(S.indexOf(a))}},S.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("select",{className:"date-picker-select",value:Object(g.default)(a),onChange:function(e){var a=e.target.value;return l(a)}},n.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement(L.b,{onClick:o,disabled:m}))}}))},k=function(){return r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("div",{className:"modal"},r.a.createElement("button",{className:"modal-toggle modal-button close-btn","aria-label":"close button"},r.a.createElement(L.d,null)),r.a.createElement("div",{className:"modal-content"},r.a.createElement("p",{className:"p"},"Employee Created !"))))},I=function(e,a){var t={firstName:e.firstName,lastName:e.lastName,dateBirth:e.dateBirth,startDate:e.startDate,street:e.street,city:e.city,state:e.state,zipCode:e.zipCode,department:e.department};a.addEmployee(t)},z=t(21),B=r.a.createContext({employeesData:[]}),F=function(e){return e.dateBirth=A(e.dateBirth),e.startDate=A(e.startDate),e},A=function(e){return new Date(e).toLocaleDateString("en")},x=function(e){var a=e.children,t=Object(n.useState)([]),l=Object(N.a)(t,2),i=l[0],o=l[1],s={employeesData:i,addEmployee:function(e){o([].concat(Object(z.a)(i),[F(e)]))}};return r.a.createElement(B.Provider,{value:s},a)};var R,H=function(){var e=document.querySelector(".modal-wrapper"),a=document.querySelectorAll(".close-btn");e.focus(),a.forEach(function(a){a.addEventListener("click",function(){e.style.display="none",document.querySelector(".modal-wrapper").classList.remove("modal--active")})}),a.forEach(function(a){a.addEventListener("keypress",function(a){13===a.keyCode&&(e.style.display="none",document.querySelector(".modal-wrapper").classList.remove("modal--active"))})})},P=t(40),j=t.n(P),T=function(){var e=Object(n.useState)({firstName:"",lastName:"",dateBirth:"",startDate:"",street:"",city:"",state:"",zipCode:"",department:""}),a=Object(N.a)(e,2),t=a[0],i=a[1],o=r.a.useContext(B);function s(e){i(function(a){return Object(h.a)({},a,Object(p.a)({},e.target.id,e.target.value))})}return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"HRnet"),r.a.createElement(l.b,{to:"/list-employee"},r.a.createElement("button",{className:"button-87 center"},"View Current Employees")),r.a.createElement("h2",null,"Create Employee"),r.a.createElement("form",{action:"#",id:"create-employee",className:"form-container",onSubmit:function(e){e.preventDefault(),document.querySelector(".modal-wrapper").classList.add("modal--active"),H(),I(t,o),i({firstName:"",lastName:"",dateBirth:"",startDate:"",street:"",city:"",state:"",zipCode:"",department:""})}},r.a.createElement("label",{htmlFor:"firstName",className:"left"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",name:"firstName",autoComplete:"given-name",value:t.firstName,onChange:s,required:!0,min:3,max:20,pattern:"[A-Za-z]{3,20}"}),r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",name:"lastName",autoComplete:"family-name",value:t.lastName,onChange:s,required:!0,min:3,max:20,pattern:"[A-Za-z]{3,20}"}),r.a.createElement("label",{htmlFor:"date-of-birth"},"Date of Birth"),r.a.createElement(O,{value:t.dateBirth,setDate:function(e){return i(Object(h.a)({},t,{dateBirth:e}))}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"start-date"},"Start Date"),r.a.createElement(O,{value:t.startDate,setDate:function(e){return i(Object(h.a)({},t,{startDate:e}))}}),r.a.createElement("br",null),r.a.createElement("fieldset",{className:"form-address"},r.a.createElement("legend",null,"Address"),r.a.createElement("label",{htmlFor:"street"},"Street"),r.a.createElement("input",{id:"street",type:"text",autoComplete:"street-address",name:"street",value:t.street,onChange:s,required:!0,min:3,max:60}),r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{id:"city",type:"text",autoComplete:"address-level1",name:"city",value:t.city,onChange:s,required:!0,min:3,max:20,pattern:"[A-Za-z]{3,20}"}),r.a.createElement(j.a,{label:"States",options:M,id:"state",handleFormChange:s}),r.a.createElement("label",{htmlFor:"zipCode"},"Zip Code"),r.a.createElement("input",{id:"zipCode",type:"number",autoComplete:"postal-code",name:"zipCode","aria-labelledby":"zipCode",value:t.zipCode,onChange:s,required:!0,pattern:"[0-9]{3,20}"})),r.a.createElement("br",null),r.a.createElement(j.a,{label:"Departments",options:w,id:"department",handleFormChange:s}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"save",className:"modal-toggle button-87","aria-label":"save employee"},"Save employee")),r.a.createElement(k,null)))},W=t(54),G=[{firstName:"Jean",lastName:"Dupont",startDate:"01/02/2018",department:"Legal",dateBirth:"12/12/2002",street:"1 rue de la Paix",city:"Nice",state:"Indiana",zipCode:"012345"},{firstName:"Jeanne",lastName:"Martin",startDate:"01/02/2020",department:"Engineering",dateBirth:"12/12/1970",street:"2 impasse des Bois",city:"Cannes",state:"Iowa",zipCode:"015385"},{firstName:"Georges",lastName:"Dubois",startDate:"01/02/2000",department:"Sales",dateBirth:"12/12/1988",street:"5 rue Foch",city:"Marseille",state:"Illinois",zipCode:"015385"},{firstName:"Georgette",lastName:"Dupont",startDate:"01/02/2001",department:"Marketing",dateBirth:"12/12/1980",street:"8 rue Foch",city:"Marseille",state:"Idaho",zipCode:"015685"},{firstName:"Lisa",lastName:"Riviere",startDate:"01/02/2015",department:"Legal",dateBirth:"12/12/1970",street:"13 rue Medecin",city:"Lyon",state:"Florida",zipCode:"015375"},{firstName:"Luc",lastName:"Rive",startDate:"01/02/2013",department:"Human Ressources",dateBirth:"12/12/1974",street:"13 rue de la Paix",city:"Toulouse",state:"Delaware",zipCode:"015345"},{firstName:"Georges",lastName:"Dubois",startDate:"01/02/2000",department:"Sales",dateBirth:"12/12/1988",street:"5 rue Foch",city:"Marseille",state:"Illinois",zipCode:"015385"},{firstName:"Georgette",lastName:"Dupont",startDate:"01/02/2001",department:"Marketing",dateBirth:"12/12/1980",street:"8 rue Foch",city:"Marseille",state:"Idaho",zipCode:"015685"},{firstName:"Lisa",lastName:"Riviere",startDate:"01/02/2015",department:"Legal",dateBirth:"12/12/1970",street:"13 rue Medecin",city:"Lyon",state:"Florida",zipCode:"015375"},{firstName:"Luc",lastName:"Rive",startDate:"01/02/2013",department:"Human Ressources",dateBirth:"12/12/1974",street:"13 rue de la Paix",city:"Toulouse",state:"Delaware",zipCode:"015345"},{firstName:"Georges",lastName:"Dubois",startDate:"01/02/2000",department:"Sales",dateBirth:"12/12/1988",street:"5 rue Foch",city:"Marseille",state:"Illinois",zipCode:"015385"},{firstName:"Georgette",lastName:"Dupont",startDate:"01/02/2001",department:"Marketing",dateBirth:"12/12/1980",street:"8 rue Foch",city:"Marseille",state:"Idaho",zipCode:"015685"},{firstName:"Lisa",lastName:"Riviere",startDate:"01/02/2015",department:"Legal",dateBirth:"12/12/1970",street:"13 rue Medecin",city:"Lyon",state:"Florida",zipCode:"015375"},{firstName:"Luc",lastName:"Rive",startDate:"01/02/2013",department:"Human Ressources",dateBirth:"12/12/1974",street:"13 rue de la Paix",city:"Toulouse",state:"Delaware",zipCode:"015345"},{firstName:"Georges",lastName:"Dubois",startDate:"01/02/2000",department:"Sales",dateBirth:"12/12/1988",street:"5 rue Foch",city:"Marseille",state:"Illinois",zipCode:"015385"},{firstName:"Georgette",lastName:"Dupont",startDate:"01/02/2001",department:"Marketing",dateBirth:"12/12/1980",street:"8 rue Foch",city:"Marseille",state:"Idaho",zipCode:"015685"},{firstName:"Lisa",lastName:"Riviere",startDate:"01/02/2015",department:"Legal",dateBirth:"12/12/1970",street:"13 rue Medecin",city:"Lyon",state:"Florida",zipCode:"015375"},{firstName:"Luc",lastName:"Rive",startDate:"01/02/2013",department:"Human Ressources",dateBirth:"12/12/1974",street:"13 rue de la Paix",city:"Toulouse",state:"Delaware",zipCode:"015345"}],V=t(47),q=Object(n.lazy)(function(){return t.e(3).then(t.t.bind(null,155,7))}),J=V.default.div(R||(R=Object(W.a)(["\n  width: 95%;\n  margin: auto;\n"]))),K=function(e,a,t){return e.sort(function(e,n){var r=a(e).toLowerCase(),l=a(n).toLowerCase(),i=0;return r>l?i=1:r<l&&(i=-1),"desc"===t?-1*i:i})},Y=[{name:"First Name",selector:function(e){return e.firstName},sortable:!0,wrap:!0},{name:"Last Name",selector:function(e){return e.lastName},sortable:!0,wrap:!0},{name:"Start date",selector:function(e){return e.startDate},sortable:!0,wrap:!0},{name:"Department",selector:function(e){return e.department},sortable:!0,wrap:!0},{name:"Date of birth",selector:function(e){return e.dateBirth},sortable:!0,wrap:!0},{name:"Street",selector:function(e){return e.street},sortable:!0,wrap:!0},{name:"City",selector:function(e){return e.city},sortable:!0,wrap:!0},{name:"State",selector:function(e){return e.state},sortable:!0},{name:"Zip code",selector:function(e){return e.zipCode},sortable:!0,wrap:!0}],Z={rows:{style:{minHeight:"50px"}},headCells:{style:{fontSize:"1.4em",fontWeight:"700","&:hover":{cursor:"pointer",color:"green",textDecoration:"underline"}}},cells:{style:{fontSize:"1.2em",fontFamily:"agence fb"}}},U=function(e,a){return console.log(e.selector,a)},X=function(){var e=r.a.useContext(B).employeesData,a=[];a.push.apply(a,Object(z.a)(G)),a.push.apply(a,Object(z.a)(e));var t=Object(n.useState)(a),l=Object(N.a)(t,2),i=l[0],o=l[1];return null===i?r.a.createElement("div",{className:"no-results-table"},"Oh no. ",r.a.createElement("br",null),"No results yet. ",r.a.createElement("br",null),"Please add an employee to view it here."):r.a.createElement("div",null,r.a.createElement("div",{id:"searchBar"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"search",className:"search-label"},"Search :"),r.a.createElement("input",{type:"string",id:"search",onChange:function(e){if(e.target.value.length>0){var t=document.getElementById("search").value,n=[];a.forEach(function(e){var a=e.firstName.toLowerCase(),r=e.lastName.toLowerCase(),l=e.department.toLowerCase(),i=e.state.toLowerCase(),o=e.city.toLowerCase(),s=e.zipCode,m=e.dateBirth,c=e.startDate;(a.includes(t.toLowerCase())||r.includes(t.toLowerCase())||l.includes(t.toLowerCase())||o.includes(t.toLowerCase())||i.includes(t.toLowerCase())||s.includes(t)||m.includes(t)||c.includes(t))&&n.push(e)}),o(n)}e.target.value.length<2&&o(a)}}))),r.a.createElement(J,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("p",null,"Loading...")},r.a.createElement(q,{columns:Y,data:i,onSort:U,sortFunction:K,defaultSortAsc:!0,customStyles:Z,highlightOnHover:!0,responsive:!0,striped:!0,persistTableHead:!0,pagination:!0,paginationRowsPerPageOptions:[10,25,50,100]}))))},Q=function(){return r.a.createElement("div",{className:"table-data-container"},r.a.createElement("h1",null,"Current Employees"),r.a.createElement(X,null),r.a.createElement("div",{className:"link-container"},r.a.createElement(l.b,{to:"/"},r.a.createElement("h1",{className:"homepage-link"},"Return to Homepage"))))};var $=function(){return r.a.createElement(x,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",element:r.a.createElement(s,null)}),r.a.createElement(i.a,{path:"/hr-net",element:r.a.createElement(s,null)}),r.a.createElement(i.a,{path:"/add-employee",element:r.a.createElement(T,null)}),r.a.createElement(i.a,{path:"/list-employee",element:r.a.createElement(Q,null)}),r.a.createElement(i.a,{path:"/*",element:r.a.createElement(v,null)})),r.a.createElement(o,null)))},_=t(58),ee=function(e){e&&e instanceof Function&&t.e(4).then(t.bind(null,156)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),l(e),i(e)})},ae=document.getElementById("root");Object(_.createRoot)(ae).render(r.a.createElement(l.a,null,r.a.createElement($,null))),ee()},48:function(e,a,t){e.exports=t.p+"static/media/logo.0ac0e60e.png"},62:function(e,a,t){e.exports=t(136)},64:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.69427519.chunk.js.map