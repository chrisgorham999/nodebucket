"use strict";(self.webpackChunknodebucket=self.webpackChunknodebucket||[]).push([[919],{4919:(M,l,c)=>{c.r(l),c.d(l,{SecurityModule:()=>b});var d=c(6814),s=c(95),p=c(9862),a=c(157),e=c(9468);let m=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-security"]],decls:1,vars:0,template:function(n,o){1&n&&e._UZ(0,"router-outlet")},dependencies:[a.lC],encapsulation:2}),r})();var g=c(459);let f=(()=>{var t;class r{constructor(n){this.http=n}findEmployeeById(n){return this.http.get("/api/employees/"+n)}}return(t=r).\u0275fac=function(n){return new(n||t)(e.LFG(p.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();function h(t,r){if(1&t&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.hij(" ",i.errorMessage," ")}}function y(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"Sign In"),e.qZA())}function v(t,r){1&t&&(e.TgZ(0,"div"),e._UZ(1,"span",16),e._uU(2,"Loading... "),e.qZA())}const S=[{path:"",component:m,children:[{path:"signin",component:(()=>{var t;class r{constructor(n,o,u,C,Z){this.fb=n,this.router=o,this.cookieService=u,this.secService=C,this.route=Z,this.isLoading=!1,this.signinForm=this.fb.group({empId:[null,s.kI.compose([s.kI.required,s.kI.pattern("^[0-9]*$")])]}),this.sessionUser={},this.errorMessage=""}signin(){this.isLoading=!0;const n=this.signinForm.controls.empId.value;if(!n||isNaN(parseInt(n,10)))return this.errorMessage="The employee ID you entered is invalid, please try again",void(this.isLoading=!1);this.secService.findEmployeeById(n).subscribe({next:o=>{this.sessionUser=o,this.cookieService.set("session_user",n,1),this.cookieService.set("session_name",`${o.firstName} ${o.lastName}`,1);const u=this.route.snapshot.queryParamMap.get("returnUrl")||"/";this.isLoading=!1,this.router.navigate([u])},error:o=>{this.isLoading=!1,o.error.message&&(this.errorMessage=o.error.message)}})}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(s.qu),e.Y36(a.F0),e.Y36(g.N),e.Y36(f),e.Y36(a.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-signin"]],decls:22,vars:4,consts:[[1,"container"],[1,"row","justify-content-center","mt-5"],[1,"col-lg-4","col-md-6","col-sm-6"],[1,"card","shadow"],[1,"card-title","text-center","border-bottom","bg-slytherin3"],[1,"p-3"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"card-body","bg-slytherin3"],[3,"formGroup","ngSubmit"],["for","empId",1,"form-label"],["type","text","id","empId","formControlName","empId",1,"form-control"],[1,"d-grid"],["type","submit",1,"btn","bg-slytherin2","font-yellow"],[4,"ngIf"],["routerLink","/",1,"text-underline-hover","font-yellow"],["role","alert",1,"alert","alert-danger"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6,"Employee Sign In"),e.qZA()(),e.YNc(7,h,2,1,"div",6),e.TgZ(8,"div",7)(9,"form",8),e.NdJ("ngSubmit",function(){return o.signin(),o.signinForm.reset()}),e.TgZ(10,"div")(11,"label",9),e._uU(12,"Employee ID:"),e.qZA(),e._UZ(13,"input",10)(14,"br")(15,"div",11),e.TgZ(16,"button",12),e.YNc(17,y,2,0,"span",13),e.YNc(18,v,3,0,"div",13),e.qZA()()()()(),e.TgZ(19,"a",14),e._UZ(20,"br"),e._uU(21,"Return"),e.qZA()()()()),2&n&&(e.xp6(7),e.Q6J("ngIf",o.errorMessage),e.xp6(2),e.Q6J("formGroup",o.signinForm),e.xp6(8),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading))},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,a.rH],styles:[".font-yellow[_ngcontent-%COMP%]{color:#ff0}.bg-slytherin2[_ngcontent-%COMP%]{background-color:#5d5d5d}"]}),r})(),title:"Nodebucket: Sign In"}]}];let I=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(S),a.Bz]}),r})(),b=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,s.u5,p.JF,s.UX,a.Bz,I]}),r})()}}]);