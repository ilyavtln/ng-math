import{$ as _e,A as I,B as m,C as z,D as S,E as ae,F as le,H as c,I as d,J as ue,K as ce,L as de,P as f,Q as he,R as fe,S as pe,U as me,V as ge,W as ve,X as x,Y as p,_ as ye,a,aa as Ce,b as l,ba as Ve,d as B,e as ie,g as ne,h as H,i as re,j as se,ja as De,la as Z,m as F,n as w,o as C,p as L,r as V,s as oe,t as D,u as $,y as W,z as q}from"./chunk-4IYA573K.js";var J={production:!0,apiUrl:"http://localhost:8888"};var O=class i{baseUrl="http://31.128.42.224:8000";http=V(Ve);getNetwork(){return this.http.get(`${this.baseUrl}/networks/all`)}registerUser(e){return this.http.post(`${this.baseUrl}/auth/register`,e)}authUser(e){return this.http.post(`${this.baseUrl}/auth/login`,e)}getUser(){return this.http.get(`${this.baseUrl}/user`)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=w({token:i,factory:i.\u0275fac,providedIn:"root"})};function h(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function we(i){return i!=null&&typeof i.length=="number"}var $e=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,u=class{static min(e){return We(e)}static max(e){return qe(e)}static required(e){return ze(e)}static requiredTrue(e){return Ze(e)}static email(e){return Je(e)}static minLength(e){return Xe(e)}static maxLength(e){return Ye(e)}static pattern(e){return Ke(e)}static nullValidator(e){return Ie(e)}static compose(e){return ke(e)}static composeAsync(e){return Re(e)}};function We(i){return e=>{if(h(e.value)||h(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function qe(i){return e=>{if(h(e.value)||h(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function ze(i){return h(i.value)?{required:!0}:null}function Ze(i){return i.value===!0?null:{required:!0}}function Je(i){return h(i.value)||$e.test(i.value)?null:{email:!0}}function Xe(i){return e=>h(e.value)||!we(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ye(i){return e=>we(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ke(i){if(!i)return Ie;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(h(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Ie(i){return null}function Se(i){return i!=null}function xe(i){return ve(i)?ne(i):i}function Oe(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Ne(i,e){return e.map(t=>t(i))}function Qe(i){return!i.validate}function Pe(i){return i.map(e=>Qe(e)?e:t=>e.validate(t))}function ke(i){if(!i)return null;let e=i.filter(Se);return e.length==0?null:function(t){return Oe(Ne(t,e))}}function et(i){return i!=null?ke(Pe(i)):null}function Re(i){if(!i)return null;let e=i.filter(Se);return e.length==0?null:function(t){let n=Ne(t,e).map(xe);return se(n).pipe(re(Oe))}}function tt(i){return i!=null?Re(Pe(i)):null}function Y(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function be(i,e){let t=Y(e);return Y(i).forEach(r=>{k(t,r)||t.push(r)}),t}function Ae(i,e){return Y(e).filter(t=>!k(i,t))}var it={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},$t=l(a({},it),{"[class.ng-submitted]":"isSubmitted"});var b="VALID",P="INVALID",g="PENDING",A="DISABLED",y=class{},R=class extends y{constructor(e,t){super(),this.value=e,this.source=t}},M=class extends y{constructor(e,t){super(),this.pristine=e,this.source=t}},E=class extends y{constructor(e,t){super(),this.touched=e,this.source=t}},v=class extends y{constructor(e,t){super(),this.status=e,this.source=t}};function ee(i){return(j(i)?i.validators:i)||null}function nt(i){return Array.isArray(i)?et(i):i||null}function te(i,e){return(j(e)?e.asyncValidators:i)||null}function rt(i){return Array.isArray(i)?tt(i):i||null}function j(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Te(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new F(1e3,"");if(!n[t])throw new F(1001,"")}function je(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new F(1002,"")})}var _=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=x(()=>this.statusReactive()),this.statusReactive=S(void 0),this._pristine=x(()=>this.pristineReactive()),this.pristineReactive=S(!0),this._touched=x(()=>this.touchedReactive()),this.touchedReactive=S(!1),this._events=new ie,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}get valid(){return this.status===b}get invalid(){return this.status===P}get pending(){return this.status==g}get disabled(){return this.status===A}get enabled(){return this.status!==A}get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new E(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new E(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new M(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new M(!0,n))}markAsPending(e={}){this.status=g;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,n)),this._events.next(new v(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===g)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,t)),this._events.next(new v(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=g,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=xe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new v(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g)?g:this._anyControlsHaveStatus(P)?P:b}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new M(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new E(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}},T=class extends _{constructor(e,t,n){super(ee(t),te(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){je(this,!0,e),Object.keys(e).forEach(n=>{Te(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var K=class extends T{};var st=new L("CallSetDisabledState",{providedIn:"root",factory:()=>Ge}),Ge="always";function Me(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ee(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var X=class extends _{constructor(e=null,t,n){super(ee(t),te(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ee(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Me(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Me(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ee(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ot=new L("");var at=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({});let i=e;return i})(),Q=class extends _{constructor(e,t,n){super(ee(t),te(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){je(this,!1,e),e.forEach((n,r)=>{Te(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Fe(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Ue=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let n=new e;return n.useNonNullable=!0,n}group(n,r=null){let s=this._reduceControls(n),o={};return Fe(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new T(s,o)}record(n,r=null){let s=this._reduceControls(n);return new K(s,r)}control(n,r,s){let o={};return this.useNonNullable?(Fe(r)?o=r:(o.validators=r,o.asyncValidators=s),new X(n,l(a({},o),{nonNullable:!0}))):new X(n,r,s)}array(n,r,s){let o=n.map(Le=>this._createControl(Le));return new Q(o,r,s)}_reduceControls(n){let r={};return Object.keys(n).forEach(s=>{r[s]=this._createControl(n[s])}),r}_createControl(n){if(n instanceof X)return n;if(n instanceof _)return n;if(Array.isArray(n)){let r=n[0],s=n.length>1?n[1]:null,o=n.length>2?n[2]:null;return this.control(r,s,o)}else return this.control(n)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Be=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ot,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:st,useValue:n.callSetDisabledState??Ge}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=D({type:e}),e.\u0275inj=C({imports:[at]});let i=e;return i})();var G=class i{constructor(e,t){this._el=e;this._renderer=t}inputText="";ngAfterViewInit(){this.inputText=this.inputText.replaceAll("<<","{{"),this._renderer.setProperty(this._el.nativeElement,"innerHTML",this.inputText),console.log(this.inputText)}static \u0275fac=function(t){return new(t||i)(m(q),m(z))};static \u0275dir=$({type:i,selectors:[["","mathFormula",""]],inputs:{inputText:[0,"mathFormula","inputText"]}})};var ct=()=>[1,3,4,5,6];function dt(i,e){if(i&1&&(ce(0),c(1,"li"),f(2),d(),de()),i&2){let t=e.$implicit;I(2),he(t)}}var U=class i{constructor(e){this.fb=e;this.registerForm=this.fb.group({country:["",u.required],email:["",[u.required,u.email]],lastname:["",u.required],name:["",u.required]}),this.authForm=this.fb.group({email:["",u.required],password:["",u.required]}),this.testService.getNetwork().subscribe(t=>{this.data=t}),this.testService.getUser().subscribe(t=>{this.data2=t})}apiUrl=J.apiUrl;apiVal=J.production;registerForm;authForm;authPassword="b6bd1838155b7c0ae729";testService=V(O);data;data2;ngOnInit(){console.log("Hello World!",this.apiUrl,this.apiVal),console.log(this.data),console.log(this.data2)}onSubmitAuth(){return B(this,null,function*(){if(this.authForm.valid){let e=this.registerForm.value;console.log("User Data:",e);try{let t=yield H(this.testService.authUser(e));console.log("Registration Response:",t)}catch(t){console.error("Registration Error:",t)}}else console.log("Form is not valid!")})}onSubmit(){return B(this,null,function*(){if(this.registerForm.valid){let e=this.registerForm.value;console.log("User Data:",e);try{let t=yield H(this.testService.registerUser(e));console.log("Registration Response:",t)}catch(t){console.error("Registration Error:",t)}}else console.log("Form is not valid!")})}static \u0275fac=function(t){return new(t||i)(m(Ue))};static \u0275cmp=oe({type:i,selectors:[["app-home"]],decls:17,vars:5,consts:[[4,"ngFor","ngForOf"],["routerLink","/about"],[1,"container"],[1,"p-3"],[1,"container","p-3"],["routerLink","/dependent-integrals",1,"btn","btn-success","w-100"],["mathFormula","\\[x\\to <<x}_{0}}\\]"]],template:function(t,n){t&1&&(c(0,"p"),f(1,"home works!"),d(),c(2,"ul"),ae(3,dt,3,1,"ng-container",0),d(),c(4,"a",1),f(5,"\u041E \u043D\u0430\u0441"),d(),c(6,"div",2)(7,"div",3),f(8," Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dignissimos error, facilis in itaque perspiciatis quae quibusdam, recusandae tempore, totam ut. Consequuntur, distinctio eum harum nemo neque placeat quo? "),d()(),c(9,"div",4)(10,"a",5),f(11,"\u0417\u0430\u0432\u0438\u0441\u044F\u0449\u0438\u0435"),d()(),c(12,"div",2),ue(13,"span",6),d(),c(14,"pre"),f(15),me(16,"json"),d()),t&2&&(I(3),le("ngForOf",pe(4,ct)),I(12),fe("  ",ge(16,2,n.data),`
`))},dependencies:[ye,De,G,_e]})};var ht=[{path:"",component:U}],He=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=D({type:i});static \u0275inj=C({imports:[Ce,Z.forChild(ht),Be,Z]})};export{He as HomeModule};
