import{d as J}from"./chunk-TYSO6S7Z.js";import{$,Aa as C,C as h,Ca as R,D as j,F as o,G as S,H as P,J as _,L as m,O as b,P as x,Q as M,R as r,S as a,T as p,U as A,V as z,Z as y,_ as U,c as Q,ea as s,ga as g,m as c,p as l,pa as q,q as d,qa as V,r as k,ra as u,z as O}from"./chunk-EMGEALUY.js";var F={production:!0,apiUrl:"http://localhost:8888"};var D={};Q(D,{COURSE_BANNERS:()=>X,HERO_BANNER:()=>W});var W={title:"\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437",description:"\u0421\u0430\u0439\u0442 \u043F\u043E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0430\u043D\u0430\u043B\u0438\u0437\u0443 \u0441 \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u043C\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C\u0438, \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u0438 \u0442\u0435\u043C\u0430\u043C\u0438",badges:{title:"\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E"},anchors:[{title:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",href:""}],image:{title:"",href:"https://avatars.mds.yandex.net/i?id=deabf7c402dec92d163ea04dbaeaab54fbf12116-12715024-images-thumbs&n=13"}},X=[{title:"\u0417\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u043B\u044B",image:{title:"",href:"icons/presentation.svg"},duration:48,themes:6,color:"primary-dark-green-secondary",anchors:[{title:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",href:"/dependent-integrals"}]},{title:"\u041F\u0440\u0435\u0434\u0435\u043B\u044B",image:{title:"",href:"icons/graduation-cap.svg"},duration:15,themes:2,color:"primary-yellow-secondary",anchors:[{title:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",href:"/features"}]}];var B=class t{chip;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["math-chip"]],inputs:{chip:"chip"},decls:1,vars:1,consts:[[1,"chip",3,"innerHTML"]],template:function(e,i){e&1&&p(0,"div",0),e&2&&m("innerHTML",i.chip.title,h)},styles:[".chip[_ngcontent-%COMP%]{font-weight:400;font-size:.75rem;line-height:1.34;padding:.25rem .5rem;position:relative;display:inline-flex;align-items:center;border-radius:1rem;width:fit-content;transition:all .2s ease-in-out;border:1px solid var(--primary-dark-green-border);background:var(--primary-dark-green-hover);color:var(--primary-white)}"]})};var Z=["*"],ee=(t,n)=>n.href;function te(t,n){if(t&1&&p(0,"math-chip",3),t&2){let e=y();m("chip",e.data.badges)}}function ne(t,n){if(t&1&&p(0,"h1",4),t&2){let e=y();m("innerHTML",e.data.title,h)}}function ie(t,n){if(t&1&&p(0,"div",5),t&2){let e=y();m("innerHTML",e.data.description,h)}}function oe(t,n){if(t&1&&(r(0,"a",9),s(1),a()),t&2){let e=n.$implicit;m("routerLink",e.href)("fragment",e.fragment)("queryParams",e.params),o(),g(" ",e.title," ")}}function re(t,n){if(t&1&&(r(0,"div",6),x(1,oe,2,4,"a",9,ee),a()),t&2){let e=y();o(),M(e.data.anchors)}}var I=class t{data;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["math-hero-banner"]],hostAttrs:[1,"hero-banner"],inputs:{data:"data"},ngContentSelectors:Z,decls:10,vars:5,consts:[[1,"hero-banner"],[1,"hero-banner__container"],[1,"hero-banner__content"],[1,"mb-2",3,"chip"],[1,"hero-banner__content-title","mb-3",3,"innerHTML"],[1,"hero-banner__content-description",3,"innerHTML"],[1,"hero-banner__content-anchors","mt-5"],[1,"hero-banner__image"],["src","image.png",1,"w-100",3,"alt"],[1,"my-btn","my-btn-primary",3,"routerLink","fragment","queryParams"]],template:function(e,i){e&1&&(U(),r(0,"div",0)(1,"div",1)(2,"div",2),_(3,te,1,1,"math-chip",3)(4,ne,1,1,"h1",4)(5,ie,1,1,"div",5),$(6),_(7,re,3,0,"div",6),a(),r(8,"div",7),p(9,"img",8),a()()()),e&2&&(o(3),b(i.data.badges?3:-1),o(),b(i.data.title?4:-1),o(),b(i.data.description?5:-1),o(2),b(i.data.anchors?7:-1),o(2),m("alt",i.data.image.title))},dependencies:[C,B],styles:[`.hero-banner__container{display:grid;grid-template-columns:repeat(2,1fr)}.hero-banner__content{display:flex;flex-direction:column;justify-content:center}.hero-banner__image{display:flex;justify-content:center;align-items:center}.hero-banner__image img{height:fit-content}@media (min-width: 992px){.hero-banner__image img{max-width:70%}}
`],encapsulation:2,changeDetection:0})};var pe=(t,n)=>n.href;function se(t,n){if(t&1&&(r(0,"div",7)(1,"a",8),s(2),a(),p(3,"img",9),a()),t&2){let e=n.$implicit;o(),m("routerLink",e.href)("fragment",e.fragment)("queryParams",e.params),o(),g(" ",e.title," ")}}var H=class t{data;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["math-course-banner"]],inputs:{data:"data"},decls:18,vars:6,consts:[[1,"course-banner","p-3","p-lg-4","rounded-4","h-100",3,"ngClass"],[1,"d-flex","flex-column","justify-content-between","h-100"],[1,"course-banner__image","mb-2"],[3,"src","alt"],[1,"course-banner__title","mb-2",3,"innerHTML"],[1,"mb-4"],[1,"course-banner__anchor"],[1,"d-flex","gap-2"],[1,"my-text-btn",3,"routerLink","fragment","queryParams"],["src","default-icons/arrow-right.svg"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1)(2,"div")(3,"div",2),p(4,"img",3),a(),p(5,"div",4),r(6,"div",5)(7,"div"),s(8,"\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: "),r(9,"b"),s(10),a()(),r(11,"div"),s(12,"\u0422\u0435\u043C: "),r(13,"b"),s(14),a()()()(),r(15,"div",6),x(16,se,4,4,"div",7,pe),a()()()),e&2&&(m("ngClass","bg-"+i.data.color),o(4),m("src",i.data.image==null?null:i.data.image.href,j)("alt",i.data.image==null?null:i.data.image.title),o(),m("innerHTML",i.data.title,h),o(5),g("",i.data.duration," \u0447\u0430\u0441\u043E\u0432"),o(4),g("",i.data.themes," \u0448\u0442\u0443\u043A"),o(2),M(i.data.anchors))},dependencies:[q,C],styles:[".course-banner__title[_ngcontent-%COMP%]{font-weight:700;font-size:1.75rem;line-height:1.75rem}.course-banner__anchor[_ngcontent-%COMP%]{font-weight:500}"]})};var E=class t{constructor(n,e){this._el=n;this._renderer=e}inputText="";ngAfterViewInit(){this.inputText=this.inputText.replaceAll("<<","{{"),this._renderer.setProperty(this._el.nativeElement,"innerHTML",this.inputText),console.log(this.inputText)}static \u0275fac=function(e){return new(e||t)(S(O),S(P))};static \u0275dir=k({type:t,selectors:[["","mathFormula",""]],inputs:{inputText:[0,"mathFormula","inputText"]}})};function de(t,n){if(t&1&&(A(0),p(1,"math-course-banner",2),z()),t&2){let e=n.$implicit;o(),m("data",e)}}var w=class t{content=D;apiUrl=F.apiUrl;apiVal=F.production;ngOnInit(){console.log(this.apiUrl,this.apiVal)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-home"]],decls:19,vars:2,consts:[[1,"page-section"],[1,"container","bg-primary-white","p-3","p-md-4","p-lg-5","rounded-5"],[3,"data"],[1,"container","bg-primary-white","p-3","p-md-4","p-lg-5","rounded-4"],[1,"mb-3","mb-lg-4"],[1,"d-grid","banner-wrapper__two","gap-3","gap-md-4","gap-lg-5"],[4,"ngFor","ngForOf"],[1,"container","bg-primary-white","p-3","p-md-4","p-3","rounded-4"],["mathFormula","$\\varphi \\left( \\gamma \\right)$"],["routerLink","/dependent-integrals",1,"btn","btn-success","w-100"]],template:function(e,i){e&1&&(r(0,"section",0)(1,"div",1),p(2,"math-hero-banner",2),a()(),r(3,"section",0)(4,"div",3)(5,"h2",4),s(6,"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u0443\u0440\u0441\u044B"),a(),r(7,"div",5),_(8,de,2,1,"ng-container",6),a()()(),r(9,"section",0)(10,"div",7),p(11,"span",8),a()(),r(12,"section",0)(13,"div",7),s(14," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos distinctio dolore eos, et exercitationem incidunt ipsa itaque labore libero modi nulla odio officia possimus reprehenderit rerum sapiente totam vero. "),a()(),r(15,"section",0)(16,"div",7)(17,"a",9),s(18,"\u0417\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u0435"),a()()()),e&2&&(o(2),m("data",i.content.HERO_BANNER),o(6),m("ngForOf",i.content.COURSE_BANNERS))},dependencies:[V,C,I,H,E]})};var v=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=d({type:t});static \u0275inj=c({imports:[u]})};var T=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=d({type:t});static \u0275inj=c({imports:[u,v]})};var N=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=d({type:t});static \u0275inj=c({imports:[u,v]})};var ue=[{path:"",component:w}],K=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=d({type:t});static \u0275inj=c({imports:[u,R.forChild(ue),J,T,N,R]})};export{K as HomeModule};
