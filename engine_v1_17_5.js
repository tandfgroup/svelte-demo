typeof process==='undefined'&&(process={env:{NODE_ENV:'dev'}});(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports):typeof define==='function'&&define.amd?define(['exports'],factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,factory(global.LWC={}));}(this,(function(exports){'use strict';function detect(){if('getKey'in Proxy){return false;}
const proxy=new Proxy([3,4],{});const res=[1,2].concat(proxy);return res.length!==4;}
const{isConcatSpreadable}=Symbol;const{isArray}=Array;const{slice:ArraySlice,unshift:ArrayUnshift,shift:ArrayShift}=Array.prototype;function isObject(O){return typeof O==='object'?O!==null:typeof O==='function';}
function isSpreadable(O){if(!isObject(O)){return false;}
const spreadable=O[isConcatSpreadable];return spreadable!==undefined?Boolean(spreadable):isArray(O);}
function ArrayConcatPolyfill(..._args){const O=Object(this);const A=[];let N=0;const items=ArraySlice.call(arguments);ArrayUnshift.call(items,O);while(items.length){const E=ArrayShift.call(items);if(isSpreadable(E)){let k=0;const length=E.length;for(k;k<length;k+=1,N+=1){if(k in E){const subElement=E[k];A[N]=subElement;}}}else{A[N]=E;N+=1;}}
return A;}
function apply(){Array.prototype.concat=ArrayConcatPolyfill;}
if(detect()){apply();}
function invariant(value,msg){if(!value){throw new Error(`Invariant Violation: ${msg}`);}}
function isTrue(value,msg){if(!value){throw new Error(`Assert Violation: ${msg}`);}}
function isFalse(value,msg){if(value){throw new Error(`Assert Violation: ${msg}`);}}
function fail(msg){throw new Error(msg);}
var assert=Object.freeze({__proto__:null,invariant:invariant,isTrue:isTrue,isFalse:isFalse,fail:fail});const{assign,create,defineProperties,defineProperty,freeze,getOwnPropertyDescriptor,getOwnPropertyNames,getPrototypeOf,hasOwnProperty,isFrozen,keys,seal,setPrototypeOf}=Object;const{isArray:isArray$1}=Array;const{filter:ArrayFilter,find:ArrayFind,indexOf:ArrayIndexOf,join:ArrayJoin,map:ArrayMap,push:ArrayPush,reduce:ArrayReduce,reverse:ArrayReverse,slice:ArraySlice$1,splice:ArraySplice,unshift:ArrayUnshift$1,forEach}=Array.prototype;const{fromCharCode:StringFromCharCode}=String;const{charCodeAt:StringCharCodeAt,replace:StringReplace,slice:StringSlice,toLowerCase:StringToLowerCase}=String.prototype;function isUndefined(obj){return obj===undefined;}
function isNull(obj){return obj===null;}
function isFalse$1(obj){return obj===false;}
function isFunction(obj){return typeof obj==='function';}
function isObject$1(obj){return typeof obj==='object';}
const OtS={}.toString;function toString(obj){if(obj&&obj.toString){if(isArray$1(obj)){return ArrayJoin.call(ArrayMap.call(obj,toString),',');}
return obj.toString();}else if(typeof obj==='object'){return OtS.call(obj);}else{return obj+'';}}
const AriaPropertyNames=['ariaActiveDescendant','ariaAtomic','ariaAutoComplete','ariaBusy','ariaChecked','ariaColCount','ariaColIndex','ariaColSpan','ariaControls','ariaCurrent','ariaDescribedBy','ariaDetails','ariaDisabled','ariaErrorMessage','ariaExpanded','ariaFlowTo','ariaHasPopup','ariaHidden','ariaInvalid','ariaKeyShortcuts','ariaLabel','ariaLabelledBy','ariaLevel','ariaLive','ariaModal','ariaMultiLine','ariaMultiSelectable','ariaOrientation','ariaOwns','ariaPlaceholder','ariaPosInSet','ariaPressed','ariaReadOnly','ariaRelevant','ariaRequired','ariaRoleDescription','ariaRowCount','ariaRowIndex','ariaRowSpan','ariaSelected','ariaSetSize','ariaSort','ariaValueMax','ariaValueMin','ariaValueNow','ariaValueText','role'];const{AriaAttrNameToPropNameMap,AriaPropNameToAttrNameMap}=(()=>{const AriaAttrNameToPropNameMap=create(null);const AriaPropNameToAttrNameMap=create(null);forEach.call(AriaPropertyNames,propName=>{const attrName=StringToLowerCase.call(StringReplace.call(propName,/^aria/,()=>'aria-'));AriaAttrNameToPropNameMap[attrName]=propName;AriaPropNameToAttrNameMap[propName]=attrName;});return{AriaAttrNameToPropNameMap,AriaPropNameToAttrNameMap};})();const hasNativeSymbolSupport=(()=>Symbol('x').toString()==='Symbol(x)')();function createHiddenField(key,namespace){return hasNativeSymbolSupport?Symbol(key):`$$lwc-${namespace}-${key}$$`;}
const hiddenFieldsMap=new WeakMap();function setHiddenField(o,field,value){let valuesByField=hiddenFieldsMap.get(o);if(isUndefined(valuesByField)){valuesByField=create(null);hiddenFieldsMap.set(o,valuesByField);}
valuesByField[field]=value;}
function getHiddenField(o,field){const valuesByField=hiddenFieldsMap.get(o);if(!isUndefined(valuesByField)){return valuesByField[field];}}
const NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING=new Map([['accessKey','accesskey'],['readOnly','readonly'],['tabIndex','tabindex'],['bgColor','bgcolor'],['colSpan','colspan'],['rowSpan','rowspan'],['contentEditable','contenteditable'],['crossOrigin','crossorigin'],['dateTime','datetime'],['formAction','formaction'],['isMap','ismap'],['maxLength','maxlength'],['minLength','minlength'],['noValidate','novalidate'],['useMap','usemap'],['htmlFor','for']]);const CACHED_PROPERTY_ATTRIBUTE_MAPPING=new Map();function htmlPropertyToAttribute(propName){const ariaAttributeName=AriaPropNameToAttrNameMap[propName];if(!isUndefined(ariaAttributeName)){return ariaAttributeName;}
const specialAttributeName=NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING.get(propName);if(!isUndefined(specialAttributeName)){return specialAttributeName;}
const cachedAttributeName=CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);if(!isUndefined(cachedAttributeName)){return cachedAttributeName;}
let attributeName='';for(let i=0,len=propName.length;i<len;i++){const code=StringCharCodeAt.call(propName,i);if(code>=65&&code<=90){attributeName+='-'+StringFromCharCode(code+32);}else{attributeName+=StringFromCharCode(code);}}
CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName,attributeName);return attributeName;}
function detect$1(propName){return Object.getOwnPropertyDescriptor(Element.prototype,propName)===undefined;}
const nodeToAriaPropertyValuesMap=new WeakMap();function getAriaPropertyMap(elm){let map=nodeToAriaPropertyValuesMap.get(elm);if(map===undefined){map={};nodeToAriaPropertyValuesMap.set(elm,map);}
return map;}
function getNormalizedAriaPropertyValue(value){return value==null?null:String(value);}
function createAriaPropertyPropertyDescriptor(propName,attrName){return{get(){const map=getAriaPropertyMap(this);if(hasOwnProperty.call(map,propName)){return map[propName];}
return this.hasAttribute(attrName)?this.getAttribute(attrName):null;},set(newValue){const normalizedValue=getNormalizedAriaPropertyValue(newValue);const map=getAriaPropertyMap(this);map[propName]=normalizedValue;if(newValue===null){this.removeAttribute(attrName);}else{this.setAttribute(attrName,newValue);}},configurable:true,enumerable:true};}
function patch(propName){const attrName=AriaPropNameToAttrNameMap[propName];const descriptor=createAriaPropertyPropertyDescriptor(propName,attrName);Object.defineProperty(Element.prototype,propName,descriptor);}
const ElementPrototypeAriaPropertyNames=keys(AriaPropNameToAttrNameMap);for(let i=0,len=ElementPrototypeAriaPropertyNames.length;i<len;i+=1){const propName=ElementPrototypeAriaPropertyNames[i];if(detect$1(propName)){patch(propName);}}
function invariant$1(value,msg){if(!value){throw new Error(`Invariant Violation: ${msg}`);}}
function isTrue$1(value,msg){if(!value){throw new Error(`Assert Violation: ${msg}`);}}
function isFalse$2(value,msg){if(value){throw new Error(`Assert Violation: ${msg}`);}}
function fail$1(msg){throw new Error(msg);}
var assert$1=Object.freeze({__proto__:null,invariant:invariant$1,isTrue:isTrue$1,isFalse:isFalse$2,fail:fail$1});const{assign:assign$1,create:create$1,defineProperties:defineProperties$1,defineProperty:defineProperty$1,freeze:freeze$1,getOwnPropertyDescriptor:getOwnPropertyDescriptor$1,getOwnPropertyNames:getOwnPropertyNames$1,getPrototypeOf:getPrototypeOf$1,hasOwnProperty:hasOwnProperty$1,isFrozen:isFrozen$1,keys:keys$1,seal:seal$1,setPrototypeOf:setPrototypeOf$1}=Object;const{isArray:isArray$2}=Array;const{filter:ArrayFilter$1,find:ArrayFind$1,indexOf:ArrayIndexOf$1,join:ArrayJoin$1,map:ArrayMap$1,push:ArrayPush$1,reduce:ArrayReduce$1,reverse:ArrayReverse$1,slice:ArraySlice$2,splice:ArraySplice$1,unshift:ArrayUnshift$2,forEach:forEach$1}=Array.prototype;const{fromCharCode:StringFromCharCode$1}=String;const{charCodeAt:StringCharCodeAt$1,replace:StringReplace$1,slice:StringSlice$1,toLowerCase:StringToLowerCase$1}=String.prototype;function isUndefined$1(obj){return obj===undefined;}
function isNull$1(obj){return obj===null;}
function isTrue$1$1(obj){return obj===true;}
function isFalse$1$1(obj){return obj===false;}
function isFunction$1(obj){return typeof obj==='function';}
function isObject$2(obj){return typeof obj==='object';}
function isString(obj){return typeof obj==='string';}
function isNumber(obj){return typeof obj==='number';}
const OtS$1={}.toString;function toString$1(obj){if(obj&&obj.toString){if(isArray$2(obj)){return ArrayJoin$1.call(ArrayMap$1.call(obj,toString$1),',');}
return obj.toString();}else if(typeof obj==='object'){return OtS$1.call(obj);}else{return obj+'';}}
function getPropertyDescriptor(o,p){do{const d=getOwnPropertyDescriptor$1(o,p);if(!isUndefined$1(d)){return d;}
o=getPrototypeOf$1(o);}while(o!==null);}
const AriaPropertyNames$1=['ariaActiveDescendant','ariaAtomic','ariaAutoComplete','ariaBusy','ariaChecked','ariaColCount','ariaColIndex','ariaColSpan','ariaControls','ariaCurrent','ariaDescribedBy','ariaDetails','ariaDisabled','ariaErrorMessage','ariaExpanded','ariaFlowTo','ariaHasPopup','ariaHidden','ariaInvalid','ariaKeyShortcuts','ariaLabel','ariaLabelledBy','ariaLevel','ariaLive','ariaModal','ariaMultiLine','ariaMultiSelectable','ariaOrientation','ariaOwns','ariaPlaceholder','ariaPosInSet','ariaPressed','ariaReadOnly','ariaRelevant','ariaRequired','ariaRoleDescription','ariaRowCount','ariaRowIndex','ariaRowSpan','ariaSelected','ariaSetSize','ariaSort','ariaValueMax','ariaValueMin','ariaValueNow','ariaValueText','role'];const{AriaAttrNameToPropNameMap:AriaAttrNameToPropNameMap$1,AriaPropNameToAttrNameMap:AriaPropNameToAttrNameMap$1}=(()=>{const AriaAttrNameToPropNameMap=create$1(null);const AriaPropNameToAttrNameMap=create$1(null);forEach$1.call(AriaPropertyNames$1,propName=>{const attrName=StringToLowerCase$1.call(StringReplace$1.call(propName,/^aria/,()=>'aria-'));AriaAttrNameToPropNameMap[attrName]=propName;AriaPropNameToAttrNameMap[propName]=attrName;});return{AriaAttrNameToPropNameMap,AriaPropNameToAttrNameMap};})();const hasNativeSymbolSupport$1=(()=>Symbol('x').toString()==='Symbol(x)')();function createHiddenField$1(key,namespace){return hasNativeSymbolSupport$1?Symbol(key):`$$lwc-${namespace}-${key}$$`;}
const hiddenFieldsMap$1=new WeakMap();function setHiddenField$1(o,field,value){let valuesByField=hiddenFieldsMap$1.get(o);if(isUndefined$1(valuesByField)){valuesByField=create$1(null);hiddenFieldsMap$1.set(o,valuesByField);}
valuesByField[field]=value;}
function getHiddenField$1(o,field){const valuesByField=hiddenFieldsMap$1.get(o);if(!isUndefined$1(valuesByField)){return valuesByField[field];}}
const NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING$1=new Map([['accessKey','accesskey'],['readOnly','readonly'],['tabIndex','tabindex'],['bgColor','bgcolor'],['colSpan','colspan'],['rowSpan','rowspan'],['contentEditable','contenteditable'],['crossOrigin','crossorigin'],['dateTime','datetime'],['formAction','formaction'],['isMap','ismap'],['maxLength','maxlength'],['minLength','minlength'],['noValidate','novalidate'],['useMap','usemap'],['htmlFor','for']]);const CACHED_PROPERTY_ATTRIBUTE_MAPPING$1=new Map();function htmlPropertyToAttribute$1(propName){const ariaAttributeName=AriaPropNameToAttrNameMap$1[propName];if(!isUndefined$1(ariaAttributeName)){return ariaAttributeName;}
const specialAttributeName=NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING$1.get(propName);if(!isUndefined$1(specialAttributeName)){return specialAttributeName;}
const cachedAttributeName=CACHED_PROPERTY_ATTRIBUTE_MAPPING$1.get(propName);if(!isUndefined$1(cachedAttributeName)){return cachedAttributeName;}
let attributeName='';for(let i=0,len=propName.length;i<len;i++){const code=StringCharCodeAt$1.call(propName,i);if(code>=65&&code<=90){attributeName+='-'+StringFromCharCode$1(code+32);}else{attributeName+=StringFromCharCode$1(code);}}
CACHED_PROPERTY_ATTRIBUTE_MAPPING$1.set(propName,attributeName);return attributeName;}
let nextTickCallbackQueue=[];const SPACE_CHAR=32;const EmptyObject=seal$1(create$1(null));const EmptyArray=seal$1([]);function flushCallbackQueue(){if(process.env.NODE_ENV!=='production'){if(nextTickCallbackQueue.length===0){throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);}}
const callbacks=nextTickCallbackQueue;nextTickCallbackQueue=[];for(let i=0,len=callbacks.length;i<len;i+=1){callbacks[i]();}}
function addCallbackToNextTick(callback){if(process.env.NODE_ENV!=='production'){if(!isFunction$1(callback)){throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);}}
if(nextTickCallbackQueue.length===0){Promise.resolve().then(flushCallbackQueue);}
ArrayPush$1.call(nextTickCallbackQueue,callback);}
function guid(){function s4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);}
return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();}
const{create:create$1$1}=Object;const{splice:ArraySplice$1$1,indexOf:ArrayIndexOf$1$1,push:ArrayPush$1$1}=Array.prototype;const TargetToReactiveRecordMap=new WeakMap();function isUndefined$1$1(obj){return obj===undefined;}
function getReactiveRecord(target){let reactiveRecord=TargetToReactiveRecordMap.get(target);if(isUndefined$1$1(reactiveRecord)){const newRecord=create$1$1(null);reactiveRecord=newRecord;TargetToReactiveRecordMap.set(target,newRecord);}
return reactiveRecord;}
let currentReactiveObserver=null;function valueMutated(target,key){const reactiveRecord=TargetToReactiveRecordMap.get(target);if(!isUndefined$1$1(reactiveRecord)){const reactiveObservers=reactiveRecord[key];if(!isUndefined$1$1(reactiveObservers)){for(let i=0,len=reactiveObservers.length;i<len;i+=1){const ro=reactiveObservers[i];ro.notify();}}}}
function valueObserved(target,key){if(currentReactiveObserver===null){return;}
const ro=currentReactiveObserver;const reactiveRecord=getReactiveRecord(target);let reactiveObservers=reactiveRecord[key];if(isUndefined$1$1(reactiveObservers)){reactiveObservers=[];reactiveRecord[key]=reactiveObservers;}else if(reactiveObservers[0]===ro){return;}
if(ArrayIndexOf$1$1.call(reactiveObservers,ro)===-1){ro.link(reactiveObservers);}}
class ReactiveObserver{constructor(callback){this.listeners=[];this.callback=callback;}
observe(job){const inceptionReactiveRecord=currentReactiveObserver;currentReactiveObserver=this;let error;try{job();}catch(e){error=Object(e);}finally{currentReactiveObserver=inceptionReactiveRecord;if(error!==undefined){throw error;}}}
reset(){const{listeners}=this;const len=listeners.length;if(len>0){for(let i=0;i<len;i+=1){const set=listeners[i];const pos=ArrayIndexOf$1$1.call(listeners[i],this);ArraySplice$1$1.call(set,pos,1);}
listeners.length=0;}}
notify(){this.callback.call(undefined,this);}
link(reactiveObservers){ArrayPush$1$1.call(reactiveObservers,this);ArrayPush$1$1.call(this.listeners,reactiveObservers);}}
function componentValueMutated(vm,key){valueMutated(vm.component,key);}
function componentValueObserved(vm,key){valueObserved(vm.component,key);}
function getComponentTag(vm){return `<${StringToLowerCase$1.call(vm.tagName)}>`;}
function getComponentStack(vm){const stack=[];let prefix='';while(!isNull$1(vm.owner)){ArrayPush$1.call(stack,prefix+getComponentTag(vm));vm=vm.owner;prefix+='\t';}
return ArrayJoin$1.call(stack,'\n');}
function getErrorComponentStack(vm){const wcStack=[];let currentVm=vm;while(!isNull$1(currentVm)){ArrayPush$1.call(wcStack,getComponentTag(currentVm));currentVm=currentVm.owner;}
return wcStack.reverse().join('\n\t');}
function logError(message,vm){let msg=`[LWC error]: ${message}`;if(!isUndefined$1(vm)){msg=`${msg}\n${getComponentStack(vm)}`;}
if(process.env.NODE_ENV==='test'){console.error(msg);return;}
try{throw new Error(msg);}catch(e){console.error(e);}}
function handleEvent(event,vnode){const{type}=event;const{data:{on}}=vnode;const handler=on&&on[type];if(handler){handler.call(undefined,event);}}
function createListener(){return function handler(event){handleEvent(event,handler.vnode);};}
function updateAllEventListeners(oldVnode,vnode){if(isUndefined$1(oldVnode.listener)){createAllEventListeners(vnode);}else{vnode.listener=oldVnode.listener;vnode.listener.vnode=vnode;}}
function createAllEventListeners(vnode){const{elm,data:{on},owner:{renderer}}=vnode;if(isUndefined$1(on)){return;}
const listener=vnode.listener=createListener();listener.vnode=vnode;let name;for(name in on){renderer.addEventListener(elm,name,listener);}}
var modEvents={update:updateAllEventListeners,create:createAllEventListeners};const defaultDefHTMLPropertyNames=['accessKey','dir','draggable','hidden','id','lang','spellcheck','tabIndex','title'];function offsetPropertyErrorMessage(name){return `Using the \`${name}\` property is an anti-pattern because it rounds the value to an integer. Instead, use the \`getBoundingClientRect\` method to obtain fractional values for the size of an element and its position relative to the viewport.`;}
const globalHTMLProperties=assign$1(create$1(null),{accessKey:{attribute:'accesskey'},accessKeyLabel:{readOnly:true},className:{attribute:'class',error:'Using the `className` property is an anti-pattern because of slow runtime behavior and potential conflicts with classes provided by the owner element. Use the `classList` API instead.'},contentEditable:{attribute:'contenteditable'},dataset:{readOnly:true,error:"Using the `dataset` property is an anti-pattern because it can't be statically analyzed. Expose each property individually using the `@api` decorator instead."},dir:{attribute:'dir'},draggable:{attribute:'draggable'},dropzone:{attribute:'dropzone',readOnly:true},hidden:{attribute:'hidden'},id:{attribute:'id'},inputMode:{attribute:'inputmode'},lang:{attribute:'lang'},slot:{attribute:'slot',error:'Using the `slot` property is an anti-pattern.'},spellcheck:{attribute:'spellcheck'},style:{attribute:'style'},tabIndex:{attribute:'tabindex'},title:{attribute:'title'},translate:{attribute:'translate'},isContentEditable:{readOnly:true},offsetHeight:{readOnly:true,error:offsetPropertyErrorMessage('offsetHeight')},offsetLeft:{readOnly:true,error:offsetPropertyErrorMessage('offsetLeft')},offsetParent:{readOnly:true},offsetTop:{readOnly:true,error:offsetPropertyErrorMessage('offsetTop')},offsetWidth:{readOnly:true,error:offsetPropertyErrorMessage('offsetWidth')},role:{attribute:'role'}});let controlledElement=null;let controlledAttributeName;function isAttributeLocked(elm,attrName){return elm!==controlledElement||attrName!==controlledAttributeName;}
function lockAttribute(_elm,_key){controlledElement=null;controlledAttributeName=undefined;}
function unlockAttribute(elm,key){controlledElement=elm;controlledAttributeName=key;}
const xlinkNS='http://www.w3.org/1999/xlink';const xmlNS='http://www.w3.org/XML/1998/namespace';const ColonCharCode=58;function updateAttrs(oldVnode,vnode){const{data:{attrs},owner:{renderer}}=vnode;if(isUndefined$1(attrs)){return;}
let{data:{attrs:oldAttrs}}=oldVnode;if(oldAttrs===attrs){return;}
if(process.env.NODE_ENV!=='production'){assert$1.invariant(isUndefined$1(oldAttrs)||keys$1(oldAttrs).join(',')===keys$1(attrs).join(','),`vnode.data.attrs cannot change shape.`);}
const elm=vnode.elm;const{setAttribute,removeAttribute}=renderer;let key;oldAttrs=isUndefined$1(oldAttrs)?EmptyObject:oldAttrs;for(key in attrs){const cur=attrs[key];const old=oldAttrs[key];if(old!==cur){unlockAttribute(elm,key);if(StringCharCodeAt$1.call(key,3)===ColonCharCode){setAttribute(elm,key,cur,xmlNS);}else if(StringCharCodeAt$1.call(key,5)===ColonCharCode){setAttribute(elm,key,cur,xlinkNS);}else if(isNull$1(cur)){removeAttribute(elm,key);}else{setAttribute(elm,key,cur);}
lockAttribute();}}}
const emptyVNode={data:{}};var modAttrs={create:vnode=>updateAttrs(emptyVNode,vnode),update:updateAttrs};function isLiveBindingProp(sel,key){return sel==='input'&&(key==='value'||key==='checked');}
function update(oldVnode,vnode){const props=vnode.data.props;if(isUndefined$1(props)){return;}
const oldProps=oldVnode.data.props;if(oldProps===props){return;}
if(process.env.NODE_ENV!=='production'){assert$1.invariant(isUndefined$1(oldProps)||keys$1(oldProps).join(',')===keys$1(props).join(','),'vnode.data.props cannot change shape.');}
const isFirstPatch=isUndefined$1(oldProps);const{elm,sel,owner:{renderer}}=vnode;for(const key in props){const cur=props[key];if(isFirstPatch||cur!==(isLiveBindingProp(sel,key)?renderer.getProperty(elm,key):oldProps[key])){renderer.setProperty(elm,key,cur);}}}
const emptyVNode$1={data:{}};var modProps={create:vnode=>update(emptyVNode$1,vnode),update};const classNameToClassMap=create$1(null);function getMapFromClassName(className){if(className==null){return EmptyObject;}
className=isString(className)?className:className+'';let map=classNameToClassMap[className];if(map){return map;}
map=create$1(null);let start=0;let o;const len=className.length;for(o=0;o<len;o++){if(StringCharCodeAt$1.call(className,o)===SPACE_CHAR){if(o>start){map[StringSlice$1.call(className,start,o)]=true;}
start=o+1;}}
if(o>start){map[StringSlice$1.call(className,start,o)]=true;}
classNameToClassMap[className]=map;if(process.env.NODE_ENV!=='production'){freeze$1(map);}
return map;}
function updateClassAttribute(oldVnode,vnode){const{elm,data:{className:newClass},owner:{renderer}}=vnode;const{data:{className:oldClass}}=oldVnode;if(oldClass===newClass){return;}
const classList=renderer.getClassList(elm);const newClassMap=getMapFromClassName(newClass);const oldClassMap=getMapFromClassName(oldClass);let name;for(name in oldClassMap){if(isUndefined$1(newClassMap[name])){classList.remove(name);}}
for(name in newClassMap){if(isUndefined$1(oldClassMap[name])){classList.add(name);}}}
const emptyVNode$2={data:{}};var modComputedClassName={create:vnode=>updateClassAttribute(emptyVNode$2,vnode),update:updateClassAttribute};function updateStyleAttribute(oldVnode,vnode){const{elm,data:{style:newStyle},owner:{renderer}}=vnode;const{setAttribute,removeAttribute}=renderer;if(oldVnode.data.style===newStyle){return;}
if(!isString(newStyle)||newStyle===''){removeAttribute(elm,'style');}else{setAttribute(elm,'style',newStyle);}}
const emptyVNode$3={data:{}};var modComputedStyle={create:vnode=>updateStyleAttribute(emptyVNode$3,vnode),update:updateStyleAttribute};function createClassAttribute(vnode){const{elm,data:{classMap},owner:{renderer}}=vnode;if(isUndefined$1(classMap)){return;}
const classList=renderer.getClassList(elm);for(const name in classMap){classList.add(name);}}
var modStaticClassName={create:createClassAttribute};function createStyleAttribute(vnode){const{elm,data:{styleMap},owner:{renderer}}=vnode;if(isUndefined$1(styleMap)){return;}
for(const name in styleMap){renderer.setCSSStyleProperty(elm,name,styleMap[name]);}}
var modStaticStyle={create:createStyleAttribute};function isUndef(s){return s===undefined;}
function sameVnode(vnode1,vnode2){return vnode1.key===vnode2.key&&vnode1.sel===vnode2.sel;}
function isVNode(vnode){return vnode!=null;}
function createKeyToOldIdx(children,beginIdx,endIdx){const map={};let j,key,ch;for(j=beginIdx;j<=endIdx;++j){ch=children[j];if(isVNode(ch)){key=ch.key;if(key!==undefined){map[key]=j;}}}
return map;}
function addVnodes(parentElm,before,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){const ch=vnodes[startIdx];if(isVNode(ch)){ch.hook.create(ch);ch.hook.insert(ch,parentElm,before);}}}
function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){const ch=vnodes[startIdx];if(isVNode(ch)){ch.hook.remove(ch,parentElm);}}}
function updateDynamicChildren(parentElm,oldCh,newCh){let oldStartIdx=0;let newStartIdx=0;let oldEndIdx=oldCh.length-1;let oldStartVnode=oldCh[0];let oldEndVnode=oldCh[oldEndIdx];const newChEnd=newCh.length-1;let newEndIdx=newChEnd;let newStartVnode=newCh[0];let newEndVnode=newCh[newEndIdx];let oldKeyToIdx;let idxInOld;let elmToMove;let before;while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(!isVNode(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];}else if(!isVNode(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(!isVNode(newStartVnode)){newStartVnode=newCh[++newStartIdx];}else if(!isVNode(newEndVnode)){newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){patchVnode(oldStartVnode,newEndVnode);newEndVnode.hook.move(oldStartVnode,parentElm,oldEndVnode.owner.renderer.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){patchVnode(oldEndVnode,newStartVnode);newStartVnode.hook.move(oldEndVnode,parentElm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(oldKeyToIdx===undefined){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}
idxInOld=oldKeyToIdx[newStartVnode.key];if(isUndef(idxInOld)){newStartVnode.hook.create(newStartVnode);newStartVnode.hook.insert(newStartVnode,parentElm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{elmToMove=oldCh[idxInOld];if(isVNode(elmToMove)){if(elmToMove.sel!==newStartVnode.sel){newStartVnode.hook.create(newStartVnode);newStartVnode.hook.insert(newStartVnode,parentElm,oldStartVnode.elm);}else{patchVnode(elmToMove,newStartVnode);oldCh[idxInOld]=undefined;newStartVnode.hook.move(elmToMove,parentElm,oldStartVnode.elm);}}
newStartVnode=newCh[++newStartIdx];}}}
if(oldStartIdx<=oldEndIdx||newStartIdx<=newEndIdx){if(oldStartIdx>oldEndIdx){let i=newEndIdx;let n;do{n=newCh[++i];}while(!isVNode(n)&&i<newChEnd);before=isVNode(n)?n.elm:null;addVnodes(parentElm,before,newCh,newStartIdx,newEndIdx);}else{removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}}
function updateStaticChildren(parentElm,oldCh,newCh){const oldChLength=oldCh.length;const newChLength=newCh.length;if(oldChLength===0){addVnodes(parentElm,null,newCh,0,newChLength);return;}
if(newChLength===0){removeVnodes(parentElm,oldCh,0,oldChLength);return;}
let referenceElm=null;for(let i=newChLength-1;i>=0;i-=1){const vnode=newCh[i];const oldVNode=oldCh[i];if(vnode!==oldVNode){if(isVNode(oldVNode)){if(isVNode(vnode)){patchVnode(oldVNode,vnode);referenceElm=vnode.elm;}else{oldVNode.hook.remove(oldVNode,parentElm);}}else if(isVNode(vnode)){vnode.hook.create(vnode);vnode.hook.insert(vnode,parentElm,referenceElm);referenceElm=vnode.elm;}}}}
function patchVnode(oldVnode,vnode){if(oldVnode!==vnode){vnode.elm=oldVnode.elm;vnode.hook.update(oldVnode,vnode);}}
function generateDataDescriptor(options){return assign$1({configurable:true,enumerable:true,writable:true},options);}
function generateAccessorDescriptor(options){return assign$1({configurable:true,enumerable:true},options);}
let isDomMutationAllowed=false;function unlockDomMutation(){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
isDomMutationAllowed=true;}
function lockDomMutation(){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
isDomMutationAllowed=false;}
function logMissingPortalError(name,type){return logError(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);}
function patchElementWithRestrictions(elm,options){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
const originalOuterHTMLDescriptor=getPropertyDescriptor(elm,'outerHTML');const descriptors={outerHTML:generateAccessorDescriptor({get(){return originalOuterHTMLDescriptor.get.call(this);},set(_value){throw new TypeError(`Invalid attempt to set outerHTML on Element.`);}})};if(isFalse$1$1(options.isPortal)){const{appendChild,insertBefore,removeChild,replaceChild}=elm;const originalNodeValueDescriptor=getPropertyDescriptor(elm,'nodeValue');const originalInnerHTMLDescriptor=getPropertyDescriptor(elm,'innerHTML');const originalTextContentDescriptor=getPropertyDescriptor(elm,'textContent');assign$1(descriptors,{appendChild:generateDataDescriptor({value(aChild){logMissingPortalError('appendChild','method');return appendChild.call(this,aChild);}}),insertBefore:generateDataDescriptor({value(newNode,referenceNode){if(!isDomMutationAllowed){logMissingPortalError('insertBefore','method');}
return insertBefore.call(this,newNode,referenceNode);}}),removeChild:generateDataDescriptor({value(aChild){if(!isDomMutationAllowed){logMissingPortalError('removeChild','method');}
return removeChild.call(this,aChild);}}),replaceChild:generateDataDescriptor({value(newChild,oldChild){logMissingPortalError('replaceChild','method');return replaceChild.call(this,newChild,oldChild);}}),nodeValue:generateAccessorDescriptor({get(){return originalNodeValueDescriptor.get.call(this);},set(value){if(!isDomMutationAllowed){logMissingPortalError('nodeValue','property');}
originalNodeValueDescriptor.set.call(this,value);}}),textContent:generateAccessorDescriptor({get(){return originalTextContentDescriptor.get.call(this);},set(value){logMissingPortalError('textContent','property');originalTextContentDescriptor.set.call(this,value);}}),innerHTML:generateAccessorDescriptor({get(){return originalInnerHTMLDescriptor.get.call(this);},set(value){logMissingPortalError('innerHTML','property');return originalInnerHTMLDescriptor.set.call(this,value);}})});}
defineProperties$1(elm,descriptors);}
function getShadowRootRestrictionsDescriptors(sr){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
const originalAddEventListener=sr.addEventListener;const originalInnerHTMLDescriptor=getPropertyDescriptor(sr,'innerHTML');const originalTextContentDescriptor=getPropertyDescriptor(sr,'textContent');return{innerHTML:generateAccessorDescriptor({get(){return originalInnerHTMLDescriptor.get.call(this);},set(_value){throw new TypeError(`Invalid attempt to set innerHTML on ShadowRoot.`);}}),textContent:generateAccessorDescriptor({get(){return originalTextContentDescriptor.get.call(this);},set(_value){throw new TypeError(`Invalid attempt to set textContent on ShadowRoot.`);}}),addEventListener:generateDataDescriptor({value(type,listener,options){if(!isUndefined$1(options)){logError('The `addEventListener` method in `LightningElement` does not support any options.',getAssociatedVMIfPresent(this));}
return originalAddEventListener.apply(this,arguments);}})};}
function getCustomElementRestrictionsDescriptors(elm){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
const originalAddEventListener=elm.addEventListener;const originalInnerHTMLDescriptor=getPropertyDescriptor(elm,'innerHTML');const originalOuterHTMLDescriptor=getPropertyDescriptor(elm,'outerHTML');const originalTextContentDescriptor=getPropertyDescriptor(elm,'textContent');return{innerHTML:generateAccessorDescriptor({get(){return originalInnerHTMLDescriptor.get.call(this);},set(_value){throw new TypeError(`Invalid attempt to set innerHTML on HTMLElement.`);}}),outerHTML:generateAccessorDescriptor({get(){return originalOuterHTMLDescriptor.get.call(this);},set(_value){throw new TypeError(`Invalid attempt to set outerHTML on HTMLElement.`);}}),textContent:generateAccessorDescriptor({get(){return originalTextContentDescriptor.get.call(this);},set(_value){throw new TypeError(`Invalid attempt to set textContent on HTMLElement.`);}}),addEventListener:generateDataDescriptor({value(type,listener,options){if(!isUndefined$1(options)){logError('The `addEventListener` method in `LightningElement` does not support any options.',getAssociatedVMIfPresent(this));}
return originalAddEventListener.apply(this,arguments);}})};}
function getComponentRestrictionsDescriptors(){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
return{tagName:generateAccessorDescriptor({get(){throw new Error(`Usage of property \`tagName\` is disallowed because the component itself does`+` not know which tagName will be used to create the element, therefore writing`+` code that check for that value is error prone.`);},configurable:true,enumerable:false})};}
function getLightningElementPrototypeRestrictionsDescriptors(proto){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
const originalDispatchEvent=proto.dispatchEvent;const descriptors={dispatchEvent:generateDataDescriptor({value(event){const vm=getAssociatedVM(this);if(!isNull$1(event)&&isObject$2(event)){const{type}=event;if(!/^[a-z][a-z0-9_]*$/.test(type)){logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.`+` Event name must start with a lowercase letter and followed only lowercase`+` letters, numbers, and underscores`,vm);}}
return originalDispatchEvent.apply(this,arguments);}})};forEach$1.call(getOwnPropertyNames$1(globalHTMLProperties),propName=>{if(propName in proto){return;}
descriptors[propName]=generateAccessorDescriptor({get(){const{error,attribute}=globalHTMLProperties[propName];const msg=[];msg.push(`Accessing the global HTML property "${propName}" is disabled.`);if(error){msg.push(error);}else if(attribute){msg.push(`Instead access it via \`this.getAttribute("${attribute}")\`.`);}
logError(msg.join('\n'),getAssociatedVM(this));},set(){const{readOnly}=globalHTMLProperties[propName];if(readOnly){logError(`The global HTML property \`${propName}\` is read-only.`,getAssociatedVM(this));}}});});return descriptors;}
function patchShadowRootWithRestrictions(sr){defineProperties$1(sr,getShadowRootRestrictionsDescriptors(sr));}
function patchCustomElementWithRestrictions(elm){const restrictionsDescriptors=getCustomElementRestrictionsDescriptors(elm);const elmProto=getPrototypeOf$1(elm);setPrototypeOf$1(elm,create$1(elmProto,restrictionsDescriptors));}
function patchComponentWithRestrictions(cmp){defineProperties$1(cmp,getComponentRestrictionsDescriptors());}
function patchLightningElementPrototypeWithRestrictions(proto){defineProperties$1(proto,getLightningElementPrototypeRestrictionsDescriptors(proto));}
const HTMLElementConstructor=typeof HTMLElement!=='undefined'?HTMLElement:function(){};const HTMLElementPrototype=HTMLElementConstructor.prototype;const HTMLElementOriginalDescriptors=create$1(null);forEach$1.call(keys$1(AriaPropNameToAttrNameMap$1),propName=>{const descriptor=getPropertyDescriptor(HTMLElementPrototype,propName);if(!isUndefined$1(descriptor)){HTMLElementOriginalDescriptors[propName]=descriptor;}});forEach$1.call(defaultDefHTMLPropertyNames,propName=>{const descriptor=getPropertyDescriptor(HTMLElementPrototype,propName);if(!isUndefined$1(descriptor)){HTMLElementOriginalDescriptors[propName]=descriptor;}});const{isArray:isArray$1$1}=Array;const{getPrototypeOf:getPrototypeOf$1$1,create:ObjectCreate,defineProperty:ObjectDefineProperty,defineProperties:ObjectDefineProperties,isExtensible,getOwnPropertyDescriptor:getOwnPropertyDescriptor$1$1,getOwnPropertyNames:getOwnPropertyNames$1$1,getOwnPropertySymbols,preventExtensions,hasOwnProperty:hasOwnProperty$1$1}=Object;const{push:ArrayPush$2,concat:ArrayConcat,map:ArrayMap$1$1}=Array.prototype;const OtS$1$1={}.toString;function toString$1$1(obj){if(obj&&obj.toString){return obj.toString();}else if(typeof obj==='object'){return OtS$1$1.call(obj);}else{return obj+'';}}
function isUndefined$2(obj){return obj===undefined;}
function isFunction$1$1(obj){return typeof obj==='function';}
const proxyToValueMap=new WeakMap();function registerProxy(proxy,value){proxyToValueMap.set(proxy,value);}
const unwrap=replicaOrAny=>proxyToValueMap.get(replicaOrAny)||replicaOrAny;class BaseProxyHandler{constructor(membrane,value){this.originalTarget=value;this.membrane=membrane;}
wrapDescriptor(descriptor){if(hasOwnProperty$1$1.call(descriptor,'value')){descriptor.value=this.wrapValue(descriptor.value);}else{const{set:originalSet,get:originalGet}=descriptor;if(!isUndefined$2(originalGet)){descriptor.get=this.wrapGetter(originalGet);}
if(!isUndefined$2(originalSet)){descriptor.set=this.wrapSetter(originalSet);}}
return descriptor;}
copyDescriptorIntoShadowTarget(shadowTarget,key){const{originalTarget}=this;const originalDescriptor=getOwnPropertyDescriptor$1$1(originalTarget,key);if(!isUndefined$2(originalDescriptor)){const wrappedDesc=this.wrapDescriptor(originalDescriptor);ObjectDefineProperty(shadowTarget,key,wrappedDesc);}}
lockShadowTarget(shadowTarget){const{originalTarget}=this;const targetKeys=ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget),getOwnPropertySymbols(originalTarget));targetKeys.forEach(key=>{this.copyDescriptorIntoShadowTarget(shadowTarget,key);});const{membrane:{tagPropertyKey}}=this;if(!isUndefined$2(tagPropertyKey)&&!hasOwnProperty$1$1.call(shadowTarget,tagPropertyKey)){ObjectDefineProperty(shadowTarget,tagPropertyKey,ObjectCreate(null));}
preventExtensions(shadowTarget);}
apply(shadowTarget,thisArg,argArray){}
construct(shadowTarget,argArray,newTarget){}
get(shadowTarget,key){const{originalTarget,membrane:{valueObserved}}=this;const value=originalTarget[key];valueObserved(originalTarget,key);return this.wrapValue(value);}
has(shadowTarget,key){const{originalTarget,membrane:{tagPropertyKey,valueObserved}}=this;valueObserved(originalTarget,key);return key in originalTarget||key===tagPropertyKey;}
ownKeys(shadowTarget){const{originalTarget,membrane:{tagPropertyKey}}=this;const keys=isUndefined$2(tagPropertyKey)||hasOwnProperty$1$1.call(originalTarget,tagPropertyKey)?[]:[tagPropertyKey];ArrayPush$2.apply(keys,getOwnPropertyNames$1$1(originalTarget));ArrayPush$2.apply(keys,getOwnPropertySymbols(originalTarget));return keys;}
isExtensible(shadowTarget){const{originalTarget}=this;if(!isExtensible(shadowTarget)){return false;}
if(!isExtensible(originalTarget)){this.lockShadowTarget(shadowTarget);return false;}
return true;}
getPrototypeOf(shadowTarget){const{originalTarget}=this;return getPrototypeOf$1$1(originalTarget);}
getOwnPropertyDescriptor(shadowTarget,key){const{originalTarget,membrane:{valueObserved,tagPropertyKey}}=this;valueObserved(originalTarget,key);let desc=getOwnPropertyDescriptor$1$1(originalTarget,key);if(isUndefined$2(desc)){if(key!==tagPropertyKey){return undefined;}
desc={value:undefined,writable:false,configurable:false,enumerable:false};ObjectDefineProperty(shadowTarget,tagPropertyKey,desc);return desc;}
if(desc.configurable===false){this.copyDescriptorIntoShadowTarget(shadowTarget,key);}
return this.wrapDescriptor(desc);}}
const getterMap=new WeakMap();const setterMap=new WeakMap();const reverseGetterMap=new WeakMap();const reverseSetterMap=new WeakMap();class ReactiveProxyHandler extends BaseProxyHandler{wrapValue(value){return this.membrane.getProxy(value);}
wrapGetter(originalGet){const wrappedGetter=getterMap.get(originalGet);if(!isUndefined$2(wrappedGetter)){return wrappedGetter;}
const handler=this;const get=function(){return handler.wrapValue(originalGet.call(unwrap(this)));};getterMap.set(originalGet,get);reverseGetterMap.set(get,originalGet);return get;}
wrapSetter(originalSet){const wrappedSetter=setterMap.get(originalSet);if(!isUndefined$2(wrappedSetter)){return wrappedSetter;}
const set=function(v){originalSet.call(unwrap(this),unwrap(v));};setterMap.set(originalSet,set);reverseSetterMap.set(set,originalSet);return set;}
unwrapDescriptor(descriptor){if(hasOwnProperty$1$1.call(descriptor,'value')){descriptor.value=unwrap(descriptor.value);}else{const{set,get}=descriptor;if(!isUndefined$2(get)){descriptor.get=this.unwrapGetter(get);}
if(!isUndefined$2(set)){descriptor.set=this.unwrapSetter(set);}}
return descriptor;}
unwrapGetter(redGet){const reverseGetter=reverseGetterMap.get(redGet);if(!isUndefined$2(reverseGetter)){return reverseGetter;}
const handler=this;const get=function(){return unwrap(redGet.call(handler.wrapValue(this)));};getterMap.set(get,redGet);reverseGetterMap.set(redGet,get);return get;}
unwrapSetter(redSet){const reverseSetter=reverseSetterMap.get(redSet);if(!isUndefined$2(reverseSetter)){return reverseSetter;}
const handler=this;const set=function(v){redSet.call(handler.wrapValue(this),handler.wrapValue(v));};setterMap.set(set,redSet);reverseSetterMap.set(redSet,set);return set;}
set(shadowTarget,key,value){const{originalTarget,membrane:{valueMutated}}=this;const oldValue=originalTarget[key];if(oldValue!==value){originalTarget[key]=value;valueMutated(originalTarget,key);}else if(key==='length'&&isArray$1$1(originalTarget)){valueMutated(originalTarget,key);}
return true;}
deleteProperty(shadowTarget,key){const{originalTarget,membrane:{valueMutated}}=this;delete originalTarget[key];valueMutated(originalTarget,key);return true;}
setPrototypeOf(shadowTarget,prototype){if(process.env.NODE_ENV!=='production'){throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString$1$1(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);}}
preventExtensions(shadowTarget){if(isExtensible(shadowTarget)){const{originalTarget}=this;preventExtensions(originalTarget);if(isExtensible(originalTarget)){return false;}
this.lockShadowTarget(shadowTarget);}
return true;}
defineProperty(shadowTarget,key,descriptor){const{originalTarget,membrane:{valueMutated,tagPropertyKey}}=this;if(key===tagPropertyKey&&!hasOwnProperty$1$1.call(originalTarget,key)){return true;}
ObjectDefineProperty(originalTarget,key,this.unwrapDescriptor(descriptor));if(descriptor.configurable===false){this.copyDescriptorIntoShadowTarget(shadowTarget,key);}
valueMutated(originalTarget,key);return true;}}
const getterMap$1=new WeakMap();const setterMap$1=new WeakMap();class ReadOnlyHandler extends BaseProxyHandler{wrapValue(value){return this.membrane.getReadOnlyProxy(value);}
wrapGetter(originalGet){const wrappedGetter=getterMap$1.get(originalGet);if(!isUndefined$2(wrappedGetter)){return wrappedGetter;}
const handler=this;const get=function(){return handler.wrapValue(originalGet.call(unwrap(this)));};getterMap$1.set(originalGet,get);return get;}
wrapSetter(originalSet){const wrappedSetter=setterMap$1.get(originalSet);if(!isUndefined$2(wrappedSetter)){return wrappedSetter;}
const handler=this;const set=function(v){if(process.env.NODE_ENV!=='production'){const{originalTarget}=handler;throw new Error(`Invalid mutation: Cannot invoke a setter on "${originalTarget}". "${originalTarget}" is read-only.`);}};setterMap$1.set(originalSet,set);return set;}
set(shadowTarget,key,value){if(process.env.NODE_ENV!=='production'){const{originalTarget}=this;throw new Error(`Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);}
return false;}
deleteProperty(shadowTarget,key){if(process.env.NODE_ENV!=='production'){const{originalTarget}=this;throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);}
return false;}
setPrototypeOf(shadowTarget,prototype){if(process.env.NODE_ENV!=='production'){const{originalTarget}=this;throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);}}
preventExtensions(shadowTarget){if(process.env.NODE_ENV!=='production'){const{originalTarget}=this;throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);}
return false;}
defineProperty(shadowTarget,key,descriptor){if(process.env.NODE_ENV!=='production'){const{originalTarget}=this;throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);}
return false;}}
function extract(objectOrArray){if(isArray$1$1(objectOrArray)){return objectOrArray.map(item=>{const original=unwrap(item);if(original!==item){return extract(original);}
return item;});}
const obj=ObjectCreate(getPrototypeOf$1$1(objectOrArray));const names=getOwnPropertyNames$1$1(objectOrArray);return ArrayConcat.call(names,getOwnPropertySymbols(objectOrArray)).reduce((seed,key)=>{const item=objectOrArray[key];const original=unwrap(item);if(original!==item){seed[key]=extract(original);}else{seed[key]=item;}
return seed;},obj);}
const formatter={header:plainOrProxy=>{const originalTarget=unwrap(plainOrProxy);if(!originalTarget||originalTarget===plainOrProxy){return null;}
const obj=extract(plainOrProxy);return['object',{object:obj}];},hasBody:()=>{return false;},body:()=>{return null;}};function getGlobal(){if(typeof globalThis!=='undefined'){return globalThis;}
if(typeof self!=='undefined'){return self;}
if(typeof window!=='undefined'){return window;}
if(typeof global!=='undefined'){return global;}
return{};}
function init(){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
const global=getGlobal();const devtoolsFormatters=global.devtoolsFormatters||[];ArrayPush$2.call(devtoolsFormatters,formatter);global.devtoolsFormatters=devtoolsFormatters;}
if(process.env.NODE_ENV!=='production'){init();}
const ObjectDotPrototype=Object.prototype;function defaultValueIsObservable(value){if(value===null){return false;}
if(typeof value!=='object'){return false;}
if(isArray$1$1(value)){return true;}
const proto=getPrototypeOf$1$1(value);return proto===ObjectDotPrototype||proto===null||getPrototypeOf$1$1(proto)===null;}
const defaultValueObserved=(obj,key)=>{};const defaultValueMutated=(obj,key)=>{};const defaultValueDistortion=value=>value;function createShadowTarget(value){return isArray$1$1(value)?[]:{};}
class ReactiveMembrane{constructor(options){this.valueDistortion=defaultValueDistortion;this.valueMutated=defaultValueMutated;this.valueObserved=defaultValueObserved;this.valueIsObservable=defaultValueIsObservable;this.objectGraph=new WeakMap();if(!isUndefined$2(options)){const{valueDistortion,valueMutated,valueObserved,valueIsObservable,tagPropertyKey}=options;this.valueDistortion=isFunction$1$1(valueDistortion)?valueDistortion:defaultValueDistortion;this.valueMutated=isFunction$1$1(valueMutated)?valueMutated:defaultValueMutated;this.valueObserved=isFunction$1$1(valueObserved)?valueObserved:defaultValueObserved;this.valueIsObservable=isFunction$1$1(valueIsObservable)?valueIsObservable:defaultValueIsObservable;this.tagPropertyKey=tagPropertyKey;}}
getProxy(value){const unwrappedValue=unwrap(value);const distorted=this.valueDistortion(unwrappedValue);if(this.valueIsObservable(distorted)){const o=this.getReactiveState(unwrappedValue,distorted);return o.readOnly===value?value:o.reactive;}
return distorted;}
getReadOnlyProxy(value){value=unwrap(value);const distorted=this.valueDistortion(value);if(this.valueIsObservable(distorted)){return this.getReactiveState(value,distorted).readOnly;}
return distorted;}
unwrapProxy(p){return unwrap(p);}
getReactiveState(value,distortedValue){const{objectGraph}=this;let reactiveState=objectGraph.get(distortedValue);if(reactiveState){return reactiveState;}
const membrane=this;reactiveState={get reactive(){const reactiveHandler=new ReactiveProxyHandler(membrane,distortedValue);const proxy=new Proxy(createShadowTarget(distortedValue),reactiveHandler);registerProxy(proxy,value);ObjectDefineProperty(this,'reactive',{value:proxy});return proxy;},get readOnly(){const readOnlyHandler=new ReadOnlyHandler(membrane,distortedValue);const proxy=new Proxy(createShadowTarget(distortedValue),readOnlyHandler);registerProxy(proxy,value);ObjectDefineProperty(this,'readOnly',{value:proxy});return proxy;}};objectGraph.set(distortedValue,reactiveState);return reactiveState;}}
const lockerLivePropertyKey=Symbol.for('@@lockerLiveValue');function valueDistortion(value){return value;}
const reactiveMembrane=new ReactiveMembrane({valueObserved,valueMutated,valueDistortion,tagPropertyKey:lockerLivePropertyKey});const unwrap$1=function(value){const unwrapped=reactiveMembrane.unwrapProxy(value);if(unwrapped!==value){return valueDistortion(unwrapped);}
return value;};function createBridgeToElementDescriptor(propName,descriptor){const{get,set,enumerable,configurable}=descriptor;if(!isFunction$1(get)){if(process.env.NODE_ENV!=='production'){assert$1.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);}
throw new TypeError();}
if(!isFunction$1(set)){if(process.env.NODE_ENV!=='production'){assert$1.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);}
throw new TypeError();}
return{enumerable,configurable,get(){const vm=getAssociatedVM(this);if(isBeingConstructed(vm)){if(process.env.NODE_ENV!=='production'){logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`,vm);}
return;}
componentValueObserved(vm,propName);return get.call(vm.elm);},set(newValue){const vm=getAssociatedVM(this);if(process.env.NODE_ENV!=='production'){const vmBeingRendered=getVMBeingRendered();assert$1.invariant(!isInvokingRender,`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);assert$1.invariant(!isUpdatingTemplate,`When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);assert$1.isFalse(isBeingConstructed(vm),`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);assert$1.invariant(!isObject$2(newValue)||isNull$1(newValue),`Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);}
if(newValue!==vm.cmpProps[propName]){vm.cmpProps[propName]=newValue;componentValueMutated(vm,propName);}
return set.call(vm.elm,newValue);}};}
function BaseLightningElementConstructor(){var _a;if(isNull$1(vmBeingConstructed)){throw new ReferenceError('Illegal constructor');}
const vm=vmBeingConstructed;const{elm,mode,renderer,def:{ctor,bridge}}=vm;if(process.env.NODE_ENV!=='production'){(_a=renderer.assertInstanceOfHTMLElement)===null||_a===void 0?void 0:_a.call(renderer,vm.elm,`Component creation requires a DOM element to be associated to ${vm}.`);}
const component=this;setPrototypeOf$1(elm,bridge.prototype);const cmpRoot=renderer.attachShadow(elm,{mode,delegatesFocus:!!ctor.delegatesFocus,'$$lwc-synthetic-mode$$':true});vm.component=this;vm.cmpRoot=cmpRoot;if(arguments.length===1){const{callHook,setHook,getHook}=arguments[0];vm.callHook=callHook;vm.setHook=setHook;vm.getHook=getHook;}
defineProperty$1(component,lockerLivePropertyKey,EmptyObject);associateVM(component,vm);associateVM(cmpRoot,vm);associateVM(elm,vm);if(process.env.NODE_ENV!=='production'){patchCustomElementWithRestrictions(elm);patchComponentWithRestrictions(component);patchShadowRootWithRestrictions(cmpRoot);}
return this;}
BaseLightningElementConstructor.prototype={constructor:BaseLightningElementConstructor,dispatchEvent(event){const{elm,renderer:{dispatchEvent}}=getAssociatedVM(this);return dispatchEvent(elm,event);},addEventListener(type,listener,options){const vm=getAssociatedVM(this);const{elm,renderer:{addEventListener}}=vm;if(process.env.NODE_ENV!=='production'){const vmBeingRendered=getVMBeingRendered();assert$1.invariant(!isInvokingRender,`${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);assert$1.invariant(!isUpdatingTemplate,`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);assert$1.invariant(isFunction$1(listener),`Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);}
const wrappedListener=getWrappedComponentsListener(vm,listener);addEventListener(elm,type,wrappedListener,options);},removeEventListener(type,listener,options){const vm=getAssociatedVM(this);const{elm,renderer:{removeEventListener}}=vm;const wrappedListener=getWrappedComponentsListener(vm,listener);removeEventListener(elm,type,wrappedListener,options);},hasAttribute(name){const{elm,renderer:{getAttribute}}=getAssociatedVM(this);return!isNull$1(getAttribute(elm,name));},hasAttributeNS(namespace,name){const{elm,renderer:{getAttribute}}=getAssociatedVM(this);return!isNull$1(getAttribute(elm,name,namespace));},removeAttribute(name){const{elm,renderer:{removeAttribute}}=getAssociatedVM(this);unlockAttribute(elm,name);removeAttribute(elm,name);lockAttribute();},removeAttributeNS(namespace,name){const{elm,renderer:{removeAttribute}}=getAssociatedVM(this);unlockAttribute(elm,name);removeAttribute(elm,name,namespace);lockAttribute();},getAttribute(name){const{elm,renderer:{getAttribute}}=getAssociatedVM(this);return getAttribute(elm,name);},getAttributeNS(namespace,name){const{elm,renderer:{getAttribute}}=getAssociatedVM(this);return getAttribute(elm,name,namespace);},setAttribute(name,value){const vm=getAssociatedVM(this);const{elm,renderer:{setAttribute}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);}
unlockAttribute(elm,name);setAttribute(elm,name,value);lockAttribute();},setAttributeNS(namespace,name,value){const vm=getAssociatedVM(this);const{elm,renderer:{setAttribute}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);}
unlockAttribute(elm,name);setAttribute(elm,name,value,namespace);lockAttribute();},getBoundingClientRect(){const vm=getAssociatedVM(this);const{elm,renderer:{getBoundingClientRect}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`this.getBoundingClientRect() should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM, instead, you can use it in one of the available life-cycle hooks.`);}
return getBoundingClientRect(elm);},querySelector(selectors){const vm=getAssociatedVM(this);const{elm,renderer:{querySelector}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`this.querySelector() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);}
return querySelector(elm,selectors);},querySelectorAll(selectors){const vm=getAssociatedVM(this);const{elm,renderer:{querySelectorAll}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`this.querySelectorAll() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);}
return querySelectorAll(elm,selectors);},getElementsByTagName(tagNameOrWildCard){const vm=getAssociatedVM(this);const{elm,renderer:{getElementsByTagName}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`this.getElementsByTagName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);}
return getElementsByTagName(elm,tagNameOrWildCard);},getElementsByClassName(names){const vm=getAssociatedVM(this);const{elm,renderer:{getElementsByClassName}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`this.getElementsByClassName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);}
return getElementsByClassName(elm,names);},get isConnected(){const{elm,renderer:{isConnected}}=getAssociatedVM(this);return isConnected(elm);},get classList(){const vm=getAssociatedVM(this);const{elm,renderer:{getClassList}}=vm;if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isBeingConstructed(vm),`Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);}
return getClassList(elm);},get template(){const vm=getAssociatedVM(this);return vm.cmpRoot;},get shadowRoot(){return null;},render(){const vm=getAssociatedVM(this);return vm.def.template;},toString(){const vm=getAssociatedVM(this);return `[object ${vm.def.name}]`;}};const lightningBasedDescriptors=create$1(null);for(const propName in HTMLElementOriginalDescriptors){lightningBasedDescriptors[propName]=createBridgeToElementDescriptor(propName,HTMLElementOriginalDescriptors[propName]);}
defineProperties$1(BaseLightningElementConstructor.prototype,lightningBasedDescriptors);defineProperty$1(BaseLightningElementConstructor,'CustomElementConstructor',{get(){throw new ReferenceError('The current runtime does not support CustomElementConstructor.');},configurable:true});if(process.env.NODE_ENV!=='production'){patchLightningElementPrototypeWithRestrictions(BaseLightningElementConstructor.prototype);}
const BaseLightningElement=BaseLightningElementConstructor;function wire(_adapter,_config){if(process.env.NODE_ENV!=='production'){assert$1.fail('@wire(adapter, config?) may only be used as a decorator.');}
throw new Error();}
function internalWireFieldDecorator(key){return{get(){const vm=getAssociatedVM(this);componentValueObserved(vm,key);return vm.cmpFields[key];},set(value){const vm=getAssociatedVM(this);if(value!==vm.cmpFields[key]){vm.cmpFields[key]=value;componentValueMutated(vm,key);}},enumerable:true,configurable:true};}
function track(target){if(arguments.length===1){return reactiveMembrane.getProxy(target);}
if(process.env.NODE_ENV!=='production'){assert$1.fail(`@track decorator can only be used with one argument to return a trackable object, or as a decorator function.`);}
throw new Error();}
function internalTrackDecorator(key){return{get(){const vm=getAssociatedVM(this);componentValueObserved(vm,key);return vm.cmpFields[key];},set(newValue){const vm=getAssociatedVM(this);if(process.env.NODE_ENV!=='production'){const vmBeingRendered=getVMBeingRendered();assert$1.invariant(!isInvokingRender,`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);assert$1.invariant(!isUpdatingTemplate,`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);}
const reactiveOrAnyValue=reactiveMembrane.getProxy(newValue);if(reactiveOrAnyValue!==vm.cmpFields[key]){vm.cmpFields[key]=reactiveOrAnyValue;componentValueMutated(vm,key);}},enumerable:true,configurable:true};}
const{assign:assign$1$1,create:create$2,defineProperties:defineProperties$1$1,defineProperty:defineProperty$1$1,freeze:freeze$1$1,getOwnPropertyDescriptor:getOwnPropertyDescriptor$2,getOwnPropertyNames:getOwnPropertyNames$2,getPrototypeOf:getPrototypeOf$2,hasOwnProperty:hasOwnProperty$2,isFrozen:isFrozen$1$1,keys:keys$1$1,seal:seal$1$1,setPrototypeOf:setPrototypeOf$1$1}=Object;function isUndefined$3(obj){return obj===undefined;}
function isTrue$1$1$1(obj){return obj===true;}
function isFalse$1$1$1(obj){return obj===false;}
const _globalThis=function(){if(typeof globalThis==='object'){return globalThis;}
let _globalThis;try{Object.defineProperty(Object.prototype,'__magic__',{get:function(){return this;},configurable:true});_globalThis=__magic__;delete Object.prototype.__magic__;}catch(ex){}finally{if(typeof _globalThis==='undefined'){_globalThis=window;}}
return _globalThis;}();if(!_globalThis.lwcRuntimeFlags){Object.defineProperty(_globalThis,'lwcRuntimeFlags',{value:create$2(null)});}
const runtimeFlags=_globalThis.lwcRuntimeFlags;function setFeatureFlag(name,value){const isBoolean=isTrue$1$1$1(value)||isFalse$1$1$1(value);if(!isBoolean){const message=`Failed to set the value "${value}" for the runtime feature flag "${name}". Runtime feature flags can only be set to a boolean value.`;if(process.env.NODE_ENV!=='production'){throw new TypeError(message);}else{console.error(message);return;}}
if(isUndefined$3(featureFlagLookup[name])){console.warn(`Failed to set the value "${value}" for the runtime feature flag "${name}" because it is undefined. Possible reasons are that 1) it was misspelled or 2) it was removed from the @lwc/features package.`);return;}
if(process.env.NODE_ENV!=='production'){runtimeFlags[name]=value;}else{const runtimeValue=runtimeFlags[name];if(!isUndefined$3(runtimeValue)){console.error(`Failed to set the value "${value}" for the runtime feature flag "${name}". "${name}" has already been set with the value "${runtimeValue}".`);return;}
Object.defineProperty(runtimeFlags,name,{value});}}
function setFeatureFlagForTest(name,value){if(process.env.NODE_ENV!=='production'){return setFeatureFlag(name,value);}}
const featureFlagLookup={ENABLE_REACTIVE_SETTER:null,ENABLE_HMR:null,DISABLE_INNER_OUTER_TEXT_PATCH:null,ENABLE_ELEMENT_PATCH:null,ENABLE_NODE_LIST_PATCH:null,ENABLE_HTML_COLLECTIONS_PATCH:null,ENABLE_NODE_PATCH:null};function api(){if(process.env.NODE_ENV!=='production'){assert$1.fail(`@api decorator can only be used as a decorator function.`);}
throw new Error();}
function createPublicPropertyDescriptor(key){return{get(){const vm=getAssociatedVM(this);if(isBeingConstructed(vm)){if(process.env.NODE_ENV!=='production'){logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`,vm);}
return;}
componentValueObserved(vm,key);return vm.cmpProps[key];},set(newValue){const vm=getAssociatedVM(this);if(process.env.NODE_ENV!=='production'){const vmBeingRendered=getVMBeingRendered();assert$1.invariant(!isInvokingRender,`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);assert$1.invariant(!isUpdatingTemplate,`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);}
vm.cmpProps[key]=newValue;componentValueMutated(vm,key);},enumerable:true,configurable:true};}
class AccessorReactiveObserver extends ReactiveObserver{constructor(vm,set){super(()=>{if(isFalse$1$1(this.debouncing)){this.debouncing=true;addCallbackToNextTick(()=>{if(isTrue$1$1(this.debouncing)){const{value}=this;const{isDirty:dirtyStateBeforeSetterCall,component,idx}=vm;set.call(component,value);this.debouncing=false;if(isTrue$1$1(vm.isDirty)&&isFalse$1$1(dirtyStateBeforeSetterCall)&&idx>0){rerenderVM(vm);}}});}});this.debouncing=false;}
reset(value){super.reset();this.debouncing=false;if(arguments.length>0){this.value=value;}}}
function createPublicAccessorDescriptor(key,descriptor){const{get,set,enumerable,configurable}=descriptor;if(!isFunction$1(get)){if(process.env.NODE_ENV!=='production'){assert$1.invariant(isFunction$1(get),`Invalid compiler output for public accessor ${toString$1(key)} decorated with @api`);}
throw new Error();}
return{get(){if(process.env.NODE_ENV!=='production'){getAssociatedVM(this);}
return get.call(this);},set(newValue){const vm=getAssociatedVM(this);if(process.env.NODE_ENV!=='production'){const vmBeingRendered=getVMBeingRendered();assert$1.invariant(!isInvokingRender,`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);assert$1.invariant(!isUpdatingTemplate,`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);}
if(set){if(runtimeFlags.ENABLE_REACTIVE_SETTER){let ro=vm.oar[key];if(isUndefined$1(ro)){ro=vm.oar[key]=new AccessorReactiveObserver(vm,set);}
ro.reset(newValue);ro.observe(()=>{set.call(this,newValue);});}else{set.call(this,newValue);}}else if(process.env.NODE_ENV!=='production'){assert$1.fail(`Invalid attempt to set a new value for property ${toString$1(key)} of ${vm} that does not has a setter decorated with @api.`);}},enumerable,configurable};}
function createObservedFieldPropertyDescriptor(key){return{get(){const vm=getAssociatedVM(this);componentValueObserved(vm,key);return vm.cmpFields[key];},set(newValue){const vm=getAssociatedVM(this);if(newValue!==vm.cmpFields[key]){vm.cmpFields[key]=newValue;componentValueMutated(vm,key);}},enumerable:true,configurable:true};}
var PropType;(function(PropType){PropType[PropType["Field"]=0]="Field";PropType[PropType["Set"]=1]="Set";PropType[PropType["Get"]=2]="Get";PropType[PropType["GetSet"]=3]="GetSet";})(PropType||(PropType={}));function getClassDescriptorType(descriptor){if(isFunction$1(descriptor.value)){return 'method';}else if(isFunction$1(descriptor.set)||isFunction$1(descriptor.get)){return 'accessor';}else{return 'field';}}
function validateObservedField(Ctor,fieldName,descriptor){if(!isUndefined$1(descriptor)){const type=getClassDescriptorType(descriptor);assert$1.fail(`Invalid observed ${fieldName} field. Found a duplicate ${type} with the same name.`);}}
function validateFieldDecoratedWithTrack(Ctor,fieldName,descriptor){if(!isUndefined$1(descriptor)){const type=getClassDescriptorType(descriptor);assert$1.fail(`Invalid @track ${fieldName} field. Found a duplicate ${type} with the same name.`);}}
function validateFieldDecoratedWithWire(Ctor,fieldName,descriptor){if(!isUndefined$1(descriptor)){const type=getClassDescriptorType(descriptor);assert$1.fail(`Invalid @wire ${fieldName} field. Found a duplicate ${type} with the same name.`);}}
function validateMethodDecoratedWithWire(Ctor,methodName,descriptor){if(isUndefined$1(descriptor)||!isFunction$1(descriptor.value)||isFalse$1$1(descriptor.writable)){assert$1.fail(`Invalid @wire ${methodName} method.`);}}
function validateFieldDecoratedWithApi(Ctor,fieldName,descriptor){if(!isUndefined$1(descriptor)){const type=getClassDescriptorType(descriptor);assert$1.fail(`Invalid @api ${fieldName} field. Found a duplicate ${type} with the same name.`);}}
function validateAccessorDecoratedWithApi(Ctor,fieldName,descriptor){if(isUndefined$1(descriptor)){assert$1.fail(`Invalid @api get ${fieldName} accessor.`);}else if(isFunction$1(descriptor.set)){assert$1.isTrue(isFunction$1(descriptor.get),`Missing getter for property ${fieldName} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);}else if(!isFunction$1(descriptor.get)){assert$1.fail(`Missing @api get ${fieldName} accessor.`);}}
function validateMethodDecoratedWithApi(Ctor,methodName,descriptor){if(isUndefined$1(descriptor)||!isFunction$1(descriptor.value)||isFalse$1$1(descriptor.writable)){assert$1.fail(`Invalid @api ${methodName} method.`);}}
function registerDecorators(Ctor,meta){const proto=Ctor.prototype;const{publicProps,publicMethods,wire,track,fields}=meta;const apiMethods=create$1(null);const apiFields=create$1(null);const wiredMethods=create$1(null);const wiredFields=create$1(null);const observedFields=create$1(null);const apiFieldsConfig=create$1(null);let descriptor;if(!isUndefined$1(publicProps)){for(const fieldName in publicProps){const propConfig=publicProps[fieldName];apiFieldsConfig[fieldName]=propConfig.config;descriptor=getOwnPropertyDescriptor$1(proto,fieldName);if(propConfig.config>0){if(process.env.NODE_ENV!=='production'){validateAccessorDecoratedWithApi(Ctor,fieldName,descriptor);}
if(isUndefined$1(descriptor)){throw new Error();}
descriptor=createPublicAccessorDescriptor(fieldName,descriptor);}else{if(process.env.NODE_ENV!=='production'){validateFieldDecoratedWithApi(Ctor,fieldName,descriptor);}
descriptor=createPublicPropertyDescriptor(fieldName);}
apiFields[fieldName]=descriptor;defineProperty$1(proto,fieldName,descriptor);}}
if(!isUndefined$1(publicMethods)){forEach$1.call(publicMethods,methodName=>{descriptor=getOwnPropertyDescriptor$1(proto,methodName);if(process.env.NODE_ENV!=='production'){validateMethodDecoratedWithApi(Ctor,methodName,descriptor);}
if(isUndefined$1(descriptor)){throw new Error();}
apiMethods[methodName]=descriptor;});}
if(!isUndefined$1(wire)){for(const fieldOrMethodName in wire){const{adapter,method,config:configCallback,dynamic=[]}=wire[fieldOrMethodName];descriptor=getOwnPropertyDescriptor$1(proto,fieldOrMethodName);if(method===1){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(adapter,`@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);validateMethodDecoratedWithWire(Ctor,fieldOrMethodName,descriptor);}
if(isUndefined$1(descriptor)){throw new Error();}
wiredMethods[fieldOrMethodName]=descriptor;storeWiredMethodMeta(descriptor,adapter,configCallback,dynamic);}else{if(process.env.NODE_ENV!=='production'){assert$1.isTrue(adapter,`@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);validateFieldDecoratedWithWire(Ctor,fieldOrMethodName,descriptor);}
descriptor=internalWireFieldDecorator(fieldOrMethodName);wiredFields[fieldOrMethodName]=descriptor;storeWiredFieldMeta(descriptor,adapter,configCallback,dynamic);defineProperty$1(proto,fieldOrMethodName,descriptor);}}}
if(!isUndefined$1(track)){for(const fieldName in track){descriptor=getOwnPropertyDescriptor$1(proto,fieldName);if(process.env.NODE_ENV!=='production'){validateFieldDecoratedWithTrack(Ctor,fieldName,descriptor);}
descriptor=internalTrackDecorator(fieldName);defineProperty$1(proto,fieldName,descriptor);}}
if(!isUndefined$1(fields)){for(let i=0,n=fields.length;i<n;i++){const fieldName=fields[i];descriptor=getOwnPropertyDescriptor$1(proto,fieldName);if(process.env.NODE_ENV!=='production'){validateObservedField(Ctor,fieldName,descriptor);}
observedFields[fieldName]=createObservedFieldPropertyDescriptor(fieldName);}}
setDecoratorsMeta(Ctor,{apiMethods,apiFields,apiFieldsConfig,wiredMethods,wiredFields,observedFields});return Ctor;}
const signedDecoratorToMetaMap=new Map();function setDecoratorsMeta(Ctor,meta){signedDecoratorToMetaMap.set(Ctor,meta);}
const defaultMeta={apiMethods:EmptyObject,apiFields:EmptyObject,apiFieldsConfig:EmptyObject,wiredMethods:EmptyObject,wiredFields:EmptyObject,observedFields:EmptyObject};function getDecoratorsMeta(Ctor){const meta=signedDecoratorToMetaMap.get(Ctor);return isUndefined$1(meta)?defaultMeta:meta;}
const signedTemplateSet=new Set();function defaultEmptyTemplate(){return[];}
signedTemplateSet.add(defaultEmptyTemplate);function isTemplateRegistered(tpl){return signedTemplateSet.has(tpl);}
function registerTemplate(tpl){signedTemplateSet.add(tpl);return tpl;}
function sanitizeAttribute(tagName,namespaceUri,attrName,attrValue){return attrValue;}
const cachedGetterByKey=create$1(null);const cachedSetterByKey=create$1(null);function createGetter(key){let fn=cachedGetterByKey[key];if(isUndefined$1(fn)){fn=cachedGetterByKey[key]=function(){const vm=getAssociatedVM(this);const{getHook}=vm;return getHook(vm.component,key);};}
return fn;}
function createSetter(key){let fn=cachedSetterByKey[key];if(isUndefined$1(fn)){fn=cachedSetterByKey[key]=function(newValue){const vm=getAssociatedVM(this);const{setHook}=vm;newValue=reactiveMembrane.getReadOnlyProxy(newValue);setHook(vm.component,key,newValue);};}
return fn;}
function createMethodCaller(methodName){return function(){const vm=getAssociatedVM(this);const{callHook,component}=vm;const fn=component[methodName];return callHook(vm.component,fn,ArraySlice$2.call(arguments));};}
function createAttributeChangedCallback(attributeToPropMap,superAttributeChangedCallback){return function attributeChangedCallback(attrName,oldValue,newValue){if(oldValue===newValue){return;}
const propName=attributeToPropMap[attrName];if(isUndefined$1(propName)){if(!isUndefined$1(superAttributeChangedCallback)){superAttributeChangedCallback.apply(this,arguments);}
return;}
if(!isAttributeLocked(this,attrName)){return;}
this[propName]=newValue;};}
function HTMLBridgeElementFactory(SuperClass,props,methods){let HTMLBridgeElement;if(isFunction$1(SuperClass)){HTMLBridgeElement=class extends SuperClass{};}else{HTMLBridgeElement=function(){throw new TypeError('Illegal constructor');};setPrototypeOf$1(HTMLBridgeElement,SuperClass);setPrototypeOf$1(HTMLBridgeElement.prototype,SuperClass.prototype);defineProperty$1(HTMLBridgeElement.prototype,'constructor',{writable:true,configurable:true,value:HTMLBridgeElement});}
const attributeToPropMap=create$1(null);const{attributeChangedCallback:superAttributeChangedCallback}=SuperClass.prototype;const{observedAttributes:superObservedAttributes=[]}=SuperClass;const descriptors=create$1(null);for(let i=0,len=props.length;i<len;i+=1){const propName=props[i];attributeToPropMap[htmlPropertyToAttribute$1(propName)]=propName;descriptors[propName]={get:createGetter(propName),set:createSetter(propName),enumerable:true,configurable:true};}
for(let i=0,len=methods.length;i<len;i+=1){const methodName=methods[i];descriptors[methodName]={value:createMethodCaller(methodName),writable:true,configurable:true};}
descriptors.attributeChangedCallback={value:createAttributeChangedCallback(attributeToPropMap,superAttributeChangedCallback)};defineProperty$1(HTMLBridgeElement,'observedAttributes',{get(){return[...superObservedAttributes,...keys$1(attributeToPropMap)];}});defineProperties$1(HTMLBridgeElement.prototype,descriptors);return HTMLBridgeElement;}
const BaseBridgeElement=HTMLBridgeElementFactory(HTMLElementConstructor,getOwnPropertyNames$1(HTMLElementOriginalDescriptors),[]);freeze$1(BaseBridgeElement);seal$1(BaseBridgeElement.prototype);function resolveCircularModuleDependency(fn){return fn();}
function isCircularModuleDependency(obj){return isFunction$1(obj)&&hasOwnProperty$1.call(obj,'__circular__');}
const swappedTemplateMap=new WeakMap();const swappedComponentMap=new WeakMap();const swappedStyleMap=new WeakMap();const activeTemplates=new WeakMap();const activeComponents=new WeakMap();const activeStyles=new WeakMap();function rehydrateHotTemplate(tpl){const list=activeTemplates.get(tpl);if(!isUndefined$1(list)){list.forEach(vm=>{if(isFalse$1$1(vm.isDirty)){markComponentAsDirty(vm);scheduleRehydration(vm);}});list.clear();}
return true;}
function rehydrateHotStyle(style){const list=activeStyles.get(style);if(!isUndefined$1(list)){list.forEach(vm=>{forceRehydration(vm);});list.clear();}
return true;}
function rehydrateHotComponent(Ctor){const list=activeComponents.get(Ctor);let canRefreshAllInstances=true;if(!isUndefined$1(list)){list.forEach(vm=>{const{owner}=vm;if(!isNull$1(owner)){forceRehydration(owner);}else{canRefreshAllInstances=false;}});list.clear();}
return canRefreshAllInstances;}
function flattenStylesheets(stylesheets){const list=[];for(const stylesheet of stylesheets){if(!Array.isArray(stylesheet)){list.push(stylesheet);}else{list.push(...flattenStylesheets(stylesheet));}}
return list;}
function getTemplateOrSwappedTemplate(tpl){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
if(runtimeFlags.ENABLE_HMR){const visited=new Set();while(swappedTemplateMap.has(tpl)&&!visited.has(tpl)){visited.add(tpl);tpl=swappedTemplateMap.get(tpl);}}
return tpl;}
function getComponentOrSwappedComponent(Ctor){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
if(runtimeFlags.ENABLE_HMR){const visited=new Set();while(swappedComponentMap.has(Ctor)&&!visited.has(Ctor)){visited.add(Ctor);Ctor=swappedComponentMap.get(Ctor);}}
return Ctor;}
function getStyleOrSwappedStyle(style){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
if(runtimeFlags.ENABLE_HMR){const visited=new Set();while(swappedStyleMap.has(style)&&!visited.has(style)){visited.add(style);style=swappedStyleMap.get(style);}}
return style;}
function setActiveVM(vm){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
if(runtimeFlags.ENABLE_HMR){const Ctor=vm.def.ctor;let componentVMs=activeComponents.get(Ctor);if(isUndefined$1(componentVMs)){componentVMs=new Set();activeComponents.set(Ctor,componentVMs);}
componentVMs.add(vm);const tpl=vm.cmpTemplate;if(tpl){let templateVMs=activeTemplates.get(tpl);if(isUndefined$1(templateVMs)){templateVMs=new Set();activeTemplates.set(tpl,templateVMs);}
templateVMs.add(vm);const stylesheets=tpl.stylesheets;if(!isUndefined$1(stylesheets)){flattenStylesheets(stylesheets).forEach(stylesheet=>{stylesheet=getStyleOrSwappedStyle(stylesheet);let stylesheetVMs=activeStyles.get(stylesheet);if(isUndefined$1(stylesheetVMs)){stylesheetVMs=new Set();activeStyles.set(stylesheet,stylesheetVMs);}
stylesheetVMs.add(vm);});}}}}
function removeActiveVM(vm){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
if(runtimeFlags.ENABLE_HMR){const Ctor=vm.def.ctor;let list=activeComponents.get(Ctor);if(!isUndefined$1(list)){list.delete(vm);}
const tpl=vm.cmpTemplate;if(tpl){list=activeTemplates.get(tpl);if(!isUndefined$1(list)){list.delete(vm);}
const styles=tpl.stylesheets;if(!isUndefined$1(styles)){flattenStylesheets(styles).forEach(style=>{list=activeStyles.get(style);if(!isUndefined$1(list)){list.delete(vm);}});}}}}
function swapTemplate(oldTpl,newTpl){if(process.env.NODE_ENV!=='production'){if(isTemplateRegistered(oldTpl)&&isTemplateRegistered(newTpl)){swappedTemplateMap.set(oldTpl,newTpl);return rehydrateHotTemplate(oldTpl);}else{throw new TypeError(`Invalid Template`);}}
if(!runtimeFlags.ENABLE_HMR){throw new Error('HMR is not enabled');}
return false;}
function swapComponent(oldComponent,newComponent){if(process.env.NODE_ENV!=='production'){if(isComponentConstructor(oldComponent)&&isComponentConstructor(newComponent)){swappedComponentMap.set(oldComponent,newComponent);return rehydrateHotComponent(oldComponent);}else{throw new TypeError(`Invalid Component`);}}
if(!runtimeFlags.ENABLE_HMR){throw new Error('HMR is not enabled');}
return false;}
function swapStyle(oldStyle,newStyle){if(process.env.NODE_ENV!=='production'){swappedStyleMap.set(oldStyle,newStyle);return rehydrateHotStyle(oldStyle);}
if(!runtimeFlags.ENABLE_HMR){throw new Error('HMR is not enabled');}
return false;}
const CtorToDefMap=new WeakMap();function getCtorProto(Ctor){let proto=getPrototypeOf$1(Ctor);if(isNull$1(proto)){throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);}
if(isCircularModuleDependency(proto)){const p=resolveCircularModuleDependency(proto);if(process.env.NODE_ENV!=='production'){if(isNull$1(p)){throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);}}
proto=p===proto?BaseLightningElement:p;}
return proto;}
function createComponentDef(Ctor){if(process.env.NODE_ENV!=='production'){const ctorName=Ctor.name;assert$1.isTrue(Ctor.constructor,`Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);}
const decoratorsMeta=getDecoratorsMeta(Ctor);const{apiFields,apiFieldsConfig,apiMethods,wiredFields,wiredMethods,observedFields}=decoratorsMeta;const proto=Ctor.prototype;let{connectedCallback,disconnectedCallback,renderedCallback,errorCallback,render}=proto;const superProto=getCtorProto(Ctor);const superDef=superProto!==BaseLightningElement?getComponentInternalDef(superProto):lightingElementDef;const bridge=HTMLBridgeElementFactory(superDef.bridge,keys$1(apiFields),keys$1(apiMethods));const props=assign$1(create$1(null),superDef.props,apiFields);const propsConfig=assign$1(create$1(null),superDef.propsConfig,apiFieldsConfig);const methods=assign$1(create$1(null),superDef.methods,apiMethods);const wire=assign$1(create$1(null),superDef.wire,wiredFields,wiredMethods);connectedCallback=connectedCallback||superDef.connectedCallback;disconnectedCallback=disconnectedCallback||superDef.disconnectedCallback;renderedCallback=renderedCallback||superDef.renderedCallback;errorCallback=errorCallback||superDef.errorCallback;render=render||superDef.render;const template=getComponentRegisteredTemplate(Ctor)||superDef.template;const name=Ctor.name||superDef.name;defineProperties$1(proto,observedFields);const def={ctor:Ctor,name,wire,props,propsConfig,methods,bridge,template,connectedCallback,disconnectedCallback,renderedCallback,errorCallback,render};if(process.env.NODE_ENV!=='production'){freeze$1(Ctor.prototype);}
return def;}
function isComponentConstructor(ctor){if(!isFunction$1(ctor)){return false;}
if(ctor.prototype instanceof BaseLightningElement){return true;}
let current=ctor;do{if(isCircularModuleDependency(current)){const circularResolved=resolveCircularModuleDependency(current);if(circularResolved===current){return true;}
current=circularResolved;}
if(current===BaseLightningElement){return true;}}while(!isNull$1(current)&&(current=getPrototypeOf$1(current)));return false;}
function getComponentInternalDef(Ctor){if(process.env.NODE_ENV!=='production'){Ctor=getComponentOrSwappedComponent(Ctor);}
let def=CtorToDefMap.get(Ctor);if(isUndefined$1(def)){if(isCircularModuleDependency(Ctor)){const resolvedCtor=resolveCircularModuleDependency(Ctor);def=getComponentInternalDef(resolvedCtor);CtorToDefMap.set(Ctor,def);return def;}
if(!isComponentConstructor(Ctor)){throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);}
def=createComponentDef(Ctor);CtorToDefMap.set(Ctor,def);}
return def;}
const lightingElementDef={ctor:BaseLightningElement,name:BaseLightningElement.name,props:lightningBasedDescriptors,propsConfig:EmptyObject,methods:EmptyObject,wire:EmptyObject,bridge:BaseBridgeElement,template:defaultEmptyTemplate,render:BaseLightningElement.prototype.render};var PropDefType;(function(PropDefType){PropDefType["any"]="any";})(PropDefType||(PropDefType={}));function getComponentDef(Ctor){const def=getComponentInternalDef(Ctor);const{ctor,name,props,propsConfig,methods}=def;const publicProps={};for(const key in props){publicProps[key]={config:propsConfig[key]||0,type:PropDefType.any,attr:htmlPropertyToAttribute$1(key)};}
const publicMethods={};for(const key in methods){publicMethods[key]=methods[key].value;}
return{ctor,name,props:publicProps,methods:publicMethods};}
const noop=()=>void 0;function observeElementChildNodes(elm){elm.$domManual$=true;}
function setElementShadowToken(elm,token){elm.$shadowToken$=token;}
function updateNodeHook(oldVnode,vnode){const{elm,text,owner:{renderer}}=vnode;if(oldVnode.text!==text){if(process.env.NODE_ENV!=='production'){unlockDomMutation();}
renderer.setText(elm,text);if(process.env.NODE_ENV!=='production'){lockDomMutation();}}}
function insertNodeHook(vnode,parentNode,referenceNode){const{renderer}=vnode.owner;if(process.env.NODE_ENV!=='production'){unlockDomMutation();}
renderer.insert(vnode.elm,parentNode,referenceNode);if(process.env.NODE_ENV!=='production'){lockDomMutation();}}
function removeNodeHook(vnode,parentNode){const{renderer}=vnode.owner;if(process.env.NODE_ENV!=='production'){unlockDomMutation();}
renderer.remove(vnode.elm,parentNode);if(process.env.NODE_ENV!=='production'){lockDomMutation();}}
function createElmHook(vnode){modEvents.create(vnode);modAttrs.create(vnode);modProps.create(vnode);modStaticClassName.create(vnode);modStaticStyle.create(vnode);modComputedClassName.create(vnode);modComputedStyle.create(vnode);}
var LWCDOMMode;(function(LWCDOMMode){LWCDOMMode["manual"]="manual";})(LWCDOMMode||(LWCDOMMode={}));function fallbackElmHook(elm,vnode){const{owner}=vnode;if(isTrue$1$1(owner.renderer.syntheticShadow)){const{data:{context}}=vnode;const{shadowAttribute}=owner.context;if(!isUndefined$1(context)&&!isUndefined$1(context.lwc)&&context.lwc.dom===LWCDOMMode.manual){observeElementChildNodes(elm);}
setElementShadowToken(elm,shadowAttribute);}
if(process.env.NODE_ENV!=='production'){const{data:{context}}=vnode;const isPortal=!isUndefined$1(context)&&!isUndefined$1(context.lwc)&&context.lwc.dom===LWCDOMMode.manual;patchElementWithRestrictions(elm,{isPortal});}}
function updateElmHook(oldVnode,vnode){modAttrs.update(oldVnode,vnode);modProps.update(oldVnode,vnode);modComputedClassName.update(oldVnode,vnode);modComputedStyle.update(oldVnode,vnode);}
function updateChildrenHook(oldVnode,vnode){const{children,owner}=vnode;const fn=hasDynamicChildren(children)?updateDynamicChildren:updateStaticChildren;runWithBoundaryProtection(owner,owner.owner,noop,()=>{fn(vnode.elm,oldVnode.children,children);},noop);}
function allocateChildrenHook(vnode,vm){const children=vnode.aChildren||vnode.children;vm.aChildren=children;if(isTrue$1$1(vm.renderer.syntheticShadow)){allocateInSlot(vm,children);vnode.aChildren=children;vnode.children=EmptyArray;}}
function createViewModelHook(elm,vnode){if(!isUndefined$1(getAssociatedVMIfPresent(elm))){return;}
const{sel,mode,ctor,owner}=vnode;const def=getComponentInternalDef(ctor);if(isTrue$1$1(owner.renderer.syntheticShadow)){const{shadowAttribute}=owner.context;setElementShadowToken(elm,shadowAttribute);}
createVM(elm,def,{mode,owner,tagName:sel,renderer:owner.renderer});if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isArray$2(vnode.children),`Invalid vnode for a custom element, it must have children defined.`);}}
function createCustomElmHook(vnode){modEvents.create(vnode);modAttrs.create(vnode);modProps.create(vnode);modStaticClassName.create(vnode);modStaticStyle.create(vnode);modComputedClassName.create(vnode);modComputedStyle.create(vnode);}
function createChildrenHook(vnode){const{elm,children}=vnode;for(let j=0;j<children.length;++j){const ch=children[j];if(ch!=null){ch.hook.create(ch);ch.hook.insert(ch,elm,null);}}}
function updateCustomElmHook(oldVnode,vnode){modAttrs.update(oldVnode,vnode);modProps.update(oldVnode,vnode);modComputedClassName.update(oldVnode,vnode);modComputedStyle.update(oldVnode,vnode);}
function removeElmHook(vnode){const{children,elm}=vnode;for(let j=0,len=children.length;j<len;++j){const ch=children[j];if(!isNull$1(ch)){ch.hook.remove(ch,elm);}}}
const FromIteration=new WeakMap();function markAsDynamicChildren(children){FromIteration.set(children,1);}
function hasDynamicChildren(children){return FromIteration.has(children);}
function getUpgradableConstructor(tagName,renderer){tagName=tagName.toLowerCase();let CE=renderer.getCustomElement(tagName);if(!isUndefined$1(CE)){return CE;}
CE=class LWCUpgradableElement extends renderer.HTMLElement{constructor(upgradeCallback){super();if(isFunction$1(upgradeCallback)){upgradeCallback(this);}}};renderer.defineCustomElement(tagName,CE);return CE;}
const CHAR_S=115;const CHAR_V=118;const CHAR_G=103;const NamespaceAttributeForSVG='http://www.w3.org/2000/svg';const SymbolIterator=Symbol.iterator;const TextHook={create:vnode=>{const{owner}=vnode;const{renderer}=owner;const elm=renderer.createText(vnode.text);linkNodeToShadow(elm,owner);vnode.elm=elm;},update:updateNodeHook,insert:insertNodeHook,move:insertNodeHook,remove:removeNodeHook};const ElementHook={create:vnode=>{const{sel,owner,data:{ns}}=vnode;const{renderer}=owner;const elm=renderer.createElement(sel,ns);linkNodeToShadow(elm,owner);fallbackElmHook(elm,vnode);vnode.elm=elm;createElmHook(vnode);},update:(oldVnode,vnode)=>{updateElmHook(oldVnode,vnode);updateChildrenHook(oldVnode,vnode);},insert:(vnode,parentNode,referenceNode)=>{insertNodeHook(vnode,parentNode,referenceNode);createChildrenHook(vnode);},move:(vnode,parentNode,referenceNode)=>{insertNodeHook(vnode,parentNode,referenceNode);},remove:(vnode,parentNode)=>{removeNodeHook(vnode,parentNode);removeElmHook(vnode);}};const CustomElementHook={create:vnode=>{const{sel,owner}=vnode;const{renderer}=owner;const UpgradableConstructor=getUpgradableConstructor(sel,renderer);const elm=new UpgradableConstructor(elm=>{createViewModelHook(elm,vnode);});linkNodeToShadow(elm,owner);vnode.elm=elm;const vm=getAssociatedVMIfPresent(elm);if(vm){allocateChildrenHook(vnode,vm);}else if(vnode.ctor!==UpgradableConstructor){throw new TypeError(`Incorrect Component Constructor`);}
createCustomElmHook(vnode);},update:(oldVnode,vnode)=>{updateCustomElmHook(oldVnode,vnode);const vm=getAssociatedVMIfPresent(vnode.elm);if(vm){allocateChildrenHook(vnode,vm);}
updateChildrenHook(oldVnode,vnode);if(vm){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isArray$2(vnode.children),`Invalid vnode for a custom element, it must have children defined.`);}
rerenderVM(vm);}},insert:(vnode,parentNode,referenceNode)=>{insertNodeHook(vnode,parentNode,referenceNode);const vm=getAssociatedVMIfPresent(vnode.elm);if(vm){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(vm.state===VMState.created,`${vm} cannot be recycled.`);}
runConnectedCallback(vm);}
createChildrenHook(vnode);if(vm){appendVM(vm);}},move:(vnode,parentNode,referenceNode)=>{insertNodeHook(vnode,parentNode,referenceNode);},remove:(vnode,parentNode)=>{removeNodeHook(vnode,parentNode);const vm=getAssociatedVMIfPresent(vnode.elm);if(vm){removeVM(vm);}}};function linkNodeToShadow(elm,owner){const{renderer,cmpRoot}=owner;if(renderer.syntheticShadow){elm.$shadowResolver$=cmpRoot.$shadowResolver$;}}
function addNS(vnode){const{data,children,sel}=vnode;data.ns=NamespaceAttributeForSVG;if(isArray$2(children)&&sel!=='foreignObject'){for(let j=0,n=children.length;j<n;++j){const childNode=children[j];if(childNode!=null&&childNode.hook===ElementHook){addNS(childNode);}}}}
function addVNodeToChildLWC(vnode){ArrayPush$1.call(getVMBeingRendered().velements,vnode);}
function h(sel,data,children){const vmBeingRendered=getVMBeingRendered();if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isString(sel),`h() 1st argument sel must be a string.`);assert$1.isTrue(isObject$2(data),`h() 2nd argument data must be an object.`);assert$1.isTrue(isArray$2(children),`h() 3rd argument children must be an array.`);assert$1.isTrue('key'in data,` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`);assert$1.isFalse(data.className&&data.classMap,`vnode.data.className and vnode.data.classMap ambiguous declaration.`);assert$1.isFalse(data.styleMap&&data.style,`vnode.data.styleMap and vnode.data.style ambiguous declaration.`);if(data.style&&!isString(data.style)){logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`,vmBeingRendered);}
forEach$1.call(children,childVnode=>{if(childVnode!=null){assert$1.isTrue(childVnode&&'sel'in childVnode&&'data'in childVnode&&'children'in childVnode&&'text'in childVnode&&'elm'in childVnode&&'key'in childVnode,`${childVnode} is not a vnode.`);}});}
const{key}=data;let text,elm;const vnode={sel,data,children,text,elm,key,hook:ElementHook,owner:vmBeingRendered};if(sel.length===3&&StringCharCodeAt$1.call(sel,0)===CHAR_S&&StringCharCodeAt$1.call(sel,1)===CHAR_V&&StringCharCodeAt$1.call(sel,2)===CHAR_G){addNS(vnode);}
return vnode;}
function ti(value){const shouldNormalize=value>0&&!(isTrue$1$1(value)||isFalse$1$1(value));if(process.env.NODE_ENV!=='production'){const vmBeingRendered=getVMBeingRendered();if(shouldNormalize){logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`,vmBeingRendered);}}
return shouldNormalize?0:value;}
function s(slotName,data,children,slotset){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isString(slotName),`s() 1st argument slotName must be a string.`);assert$1.isTrue(isObject$2(data),`s() 2nd argument data must be an object.`);assert$1.isTrue(isArray$2(children),`h() 3rd argument children must be an array.`);}
if(!isUndefined$1(slotset)&&!isUndefined$1(slotset[slotName])&&slotset[slotName].length!==0){children=slotset[slotName];}
const vnode=h('slot',data,children);if(vnode.owner.renderer.syntheticShadow){sc(children);}
return vnode;}
function c(sel,Ctor,data,children=EmptyArray){const vmBeingRendered=getVMBeingRendered();if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isString(sel),`c() 1st argument sel must be a string.`);assert$1.isTrue(isFunction$1(Ctor),`c() 2nd argument Ctor must be a function.`);assert$1.isTrue(isObject$2(data),`c() 3nd argument data must be an object.`);assert$1.isTrue(arguments.length===3||isArray$2(children),`c() 4nd argument data must be an array.`);assert$1.isFalse(data.className&&data.classMap,`vnode.data.className and vnode.data.classMap ambiguous declaration.`);assert$1.isFalse(data.styleMap&&data.style,`vnode.data.styleMap and vnode.data.style ambiguous declaration.`);if(data.style&&!isString(data.style)){logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`,vmBeingRendered);}
if(arguments.length===4){forEach$1.call(children,childVnode=>{if(childVnode!=null){assert$1.isTrue(childVnode&&'sel'in childVnode&&'data'in childVnode&&'children'in childVnode&&'text'in childVnode&&'elm'in childVnode&&'key'in childVnode,`${childVnode} is not a vnode.`);}});}}
const{key}=data;let text,elm;const vnode={sel,data,children,text,elm,key,hook:CustomElementHook,ctor:Ctor,owner:vmBeingRendered,mode:'open'};addVNodeToChildLWC(vnode);return vnode;}
function i(iterable,factory){const list=[];sc(list);const vmBeingRendered=getVMBeingRendered();if(isUndefined$1(iterable)||iterable===null){if(process.env.NODE_ENV!=='production'){logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`,vmBeingRendered);}
return list;}
if(process.env.NODE_ENV!=='production'){assert$1.isFalse(isUndefined$1(iterable[SymbolIterator]),`Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);}
const iterator=iterable[SymbolIterator]();if(process.env.NODE_ENV!=='production'){assert$1.isTrue(iterator&&isFunction$1(iterator.next),`Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);}
let next=iterator.next();let j=0;let{value,done:last}=next;let keyMap;let iterationError;if(process.env.NODE_ENV!=='production'){keyMap=create$1(null);}
while(last===false){next=iterator.next();last=next.done;const vnode=factory(value,j,j===0,last);if(isArray$2(vnode)){ArrayPush$1.apply(list,vnode);}else{ArrayPush$1.call(list,vnode);}
if(process.env.NODE_ENV!=='production'){const vnodes=isArray$2(vnode)?vnode:[vnode];forEach$1.call(vnodes,childVnode=>{if(!isNull$1(childVnode)&&isObject$2(childVnode)&&!isUndefined$1(childVnode.sel)){const{key}=childVnode;if(isString(key)||isNumber(key)){if(keyMap[key]===1&&isUndefined$1(iterationError)){iterationError=`Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;}
keyMap[key]=1;}else if(isUndefined$1(iterationError)){iterationError=`Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;}}});}
j+=1;value=next.value;}
if(process.env.NODE_ENV!=='production'){if(!isUndefined$1(iterationError)){logError(iterationError,vmBeingRendered);}}
return list;}
function f(items){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isArray$2(items),'flattening api can only work with arrays.');}
const len=items.length;const flattened=[];sc(flattened);for(let j=0;j<len;j+=1){const item=items[j];if(isArray$2(item)){ArrayPush$1.apply(flattened,item);}else{ArrayPush$1.call(flattened,item);}}
return flattened;}
function t(text){const data=EmptyObject;let sel,children,key,elm;return{sel,data,children,text,elm,key,hook:TextHook,owner:getVMBeingRendered()};}
function d(value){if(value==null){return null;}
return t(value);}
function b(fn){const vmBeingRendered=getVMBeingRendered();if(isNull$1(vmBeingRendered)){throw new Error();}
const vm=vmBeingRendered;return function(event){invokeEventListener(vm,fn,vm.component,event);};}
function k(compilerKey,obj){switch(typeof obj){case 'number':case 'string':return compilerKey+':'+obj;case 'object':if(process.env.NODE_ENV!=='production'){assert$1.fail(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);}}}
function gid(id){const vmBeingRendered=getVMBeingRendered();if(isUndefined$1(id)||id===''){if(process.env.NODE_ENV!=='production'){logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`,vmBeingRendered);}
return id;}
if(isNull$1(id)){return null;}
return `${id}-${vmBeingRendered.idx}`;}
function fid(url){const vmBeingRendered=getVMBeingRendered();if(isUndefined$1(url)||url===''){if(process.env.NODE_ENV!=='production'){if(isUndefined$1(url)){logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`,vmBeingRendered);}}
return url;}
if(isNull$1(url)){return null;}
if(/^#/.test(url)){return `${url}-${vmBeingRendered.idx}`;}
return url;}
const DynamicImportedComponentMap=new Map();let dynamicImportedComponentCounter=0;function dc(sel,Ctor,data,children){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isString(sel),`dc() 1st argument sel must be a string.`);assert$1.isTrue(isObject$2(data),`dc() 3nd argument data must be an object.`);assert$1.isTrue(arguments.length===3||isArray$2(children),`dc() 4nd argument data must be an array.`);}
if(Ctor==null){return null;}
if(!isComponentConstructor(Ctor)){throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);}
let idx=DynamicImportedComponentMap.get(Ctor);if(isUndefined$1(idx)){idx=dynamicImportedComponentCounter++;DynamicImportedComponentMap.set(Ctor,idx);}
data.key=`dc:${idx}:${data.key}`;return c(sel,Ctor,data,children);}
function sc(vnodes){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isArray$2(vnodes),'sc() api can only work with arrays.');}
markAsDynamicChildren(vnodes);return vnodes;}
var api$1=Object.freeze({__proto__:null,h:h,ti:ti,s:s,c:c,i:i,f:f,t:t,d:d,b:b,k:k,gid:gid,fid:fid,dc:dc,sc:sc});function createShadowStyleVNode(content){return h('style',{key:'style',attrs:{type:'text/css'}},[t(content)]);}
function updateSyntheticShadowAttributes(vm,template){const{elm,context,renderer}=vm;const{stylesheets:newStylesheets,stylesheetTokens:newStylesheetTokens}=template;let newHostAttribute;let newShadowAttribute;const oldHostAttribute=context.hostAttribute;if(!isUndefined$1(oldHostAttribute)){renderer.removeAttribute(elm,oldHostAttribute);}
if(!isUndefined$1(newStylesheetTokens)&&!isUndefined$1(newStylesheets)&&newStylesheets.length!==0){newHostAttribute=newStylesheetTokens.hostAttribute;newShadowAttribute=newStylesheetTokens.shadowAttribute;renderer.setAttribute(elm,newHostAttribute,'');}
context.hostAttribute=newHostAttribute;context.shadowAttribute=newShadowAttribute;}
function evaluateStylesheetsContent(stylesheets,hostSelector,shadowSelector,nativeShadow){const content=[];for(let i=0;i<stylesheets.length;i++){let stylesheet=stylesheets[i];if(isArray$2(stylesheet)){ArrayPush$1.apply(content,evaluateStylesheetsContent(stylesheet,hostSelector,shadowSelector,nativeShadow));}else{if(process.env.NODE_ENV!=='production'){stylesheet=getStyleOrSwappedStyle(stylesheet);}
ArrayPush$1.call(content,stylesheet(hostSelector,shadowSelector,nativeShadow));}}
return content;}
function getStylesheetsContent(vm,template){const{stylesheets,stylesheetTokens:tokens}=template;const{syntheticShadow}=vm.renderer;let content=[];if(!isUndefined$1(stylesheets)&&!isUndefined$1(tokens)){const hostSelector=syntheticShadow?`[${tokens.hostAttribute}]`:'';const shadowSelector=syntheticShadow?`[${tokens.shadowAttribute}]`:'';content=evaluateStylesheetsContent(stylesheets,hostSelector,shadowSelector,!syntheticShadow);}
return content;}
function createStylesheet(vm,stylesheets){const{renderer}=vm;if(renderer.syntheticShadow){for(let i=0;i<stylesheets.length;i++){renderer.insertGlobalStylesheet(stylesheets[i]);}
return null;}else{const shadowStyleSheetContent=ArrayJoin$1.call(stylesheets,'\n');return createShadowStyleVNode(shadowStyleSheetContent);}}
var GlobalMeasurementPhase;(function(GlobalMeasurementPhase){GlobalMeasurementPhase["REHYDRATE"]="lwc-rehydrate";GlobalMeasurementPhase["HYDRATE"]="lwc-hydrate";})(GlobalMeasurementPhase||(GlobalMeasurementPhase={}));const isUserTimingSupported=typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';function getMarkName(phase,vm){return `${getComponentTag(vm)} - ${phase} - ${vm.idx}`;}
function getMeasureName(phase,vm){return `${getComponentTag(vm)} - ${phase}`;}
function start(markName){performance.mark(markName);}
function end(measureName,markName){performance.measure(measureName,markName);performance.clearMarks(markName);performance.clearMarks(measureName);}
function noop$1(){}
const startMeasure=!isUserTimingSupported?noop$1:function(phase,vm){const markName=getMarkName(phase,vm);start(markName);};const endMeasure=!isUserTimingSupported?noop$1:function(phase,vm){const markName=getMarkName(phase,vm);const measureName=getMeasureName(phase,vm);end(measureName,markName);};const startGlobalMeasure=!isUserTimingSupported?noop$1:function(phase,vm){const markName=isUndefined$1(vm)?phase:getMarkName(phase,vm);start(markName);};const endGlobalMeasure=!isUserTimingSupported?noop$1:function(phase,vm){const markName=isUndefined$1(vm)?phase:getMarkName(phase,vm);end(phase,markName);};function noop$2(_opId,_phase,_cmpName,_vm_idx){}
let logOperation=noop$2;var OperationId;(function(OperationId){OperationId[OperationId["constructor"]=0]="constructor";OperationId[OperationId["render"]=1]="render";OperationId[OperationId["patch"]=2]="patch";OperationId[OperationId["connectedCallback"]=3]="connectedCallback";OperationId[OperationId["renderedCallback"]=4]="renderedCallback";OperationId[OperationId["disconnectedCallback"]=5]="disconnectedCallback";OperationId[OperationId["errorCallback"]=6]="errorCallback";})(OperationId||(OperationId={}));var Phase;(function(Phase){Phase[Phase["Start"]=0]="Start";Phase[Phase["Stop"]=1]="Stop";})(Phase||(Phase={}));const opIdToMeasurementPhaseMappingArray=['constructor','render','patch','connectedCallback','renderedCallback','disconnectedCallback','errorCallback'];let profilerEnabled=false;let logMarks=false;let bufferLogging=false;if(process.env.NODE_ENV!=='production'){profilerEnabled=true;logMarks=true;bufferLogging=false;}
const profilerStateCallbacks=[];function trackProfilerState(callback){callback(profilerEnabled);profilerStateCallbacks.push(callback);}
function logOperationStart(opId,vm){if(logMarks){startMeasure(opIdToMeasurementPhaseMappingArray[opId],vm);}
if(bufferLogging){logOperation(opId,Phase.Start,vm.tagName,vm.idx);}}
function logOperationEnd(opId,vm){if(logMarks){endMeasure(opIdToMeasurementPhaseMappingArray[opId],vm);}
if(bufferLogging){logOperation(opId,Phase.Stop,vm.tagName,vm.idx);}}
function enableProfiler(){profilerEnabled=true;bufferLogging=true;notifyProfilerStateChange();}
function disableProfiler(){if(process.env.NODE_ENV!=='production'){profilerEnabled=true;logMarks=true;bufferLogging=false;}else{profilerEnabled=false;bufferLogging=false;logMarks=false;}
notifyProfilerStateChange();}
function notifyProfilerStateChange(){for(let i=0;i<profilerStateCallbacks.length;i++){profilerStateCallbacks[i](profilerEnabled);}}
function attachDispatcher(dispatcher){logOperation=dispatcher;bufferLogging=true;}
function detachDispatcher(){const currentLogOperation=logOperation;logOperation=noop$2;bufferLogging=false;return currentLogOperation;}
const profilerControl={enableProfiler,disableProfiler,attachDispatcher,detachDispatcher};let isUpdatingTemplate=false;let vmBeingRendered=null;function getVMBeingRendered(){return vmBeingRendered;}
function setVMBeingRendered(vm){vmBeingRendered=vm;}
let profilerEnabled$1=false;trackProfilerState(t=>profilerEnabled$1=t);function validateSlots(vm,html){if(process.env.NODE_ENV==='production'){throw new ReferenceError();}
const{cmpSlots}=vm;const{slots=EmptyArray}=html;for(const slotName in cmpSlots){assert$1.isTrue(isArray$2(cmpSlots[slotName]),`Slots can only be set to an array, instead received ${toString$1(cmpSlots[slotName])} for slot "${slotName}" in ${vm}.`);if(slotName!==''&&ArrayIndexOf$1.call(slots,slotName)===-1){logError(`Ignoring unknown provided slot name "${slotName}" in ${vm}. Check for a typo on the slot attribute.`,vm);}}}
function evaluateTemplate(vm,html){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isFunction$1(html),`evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`);html=getTemplateOrSwappedTemplate(html);}
const isUpdatingTemplateInception=isUpdatingTemplate;const vmOfTemplateBeingUpdatedInception=vmBeingRendered;let vnodes=[];runWithBoundaryProtection(vm,vm.owner,()=>{vmBeingRendered=vm;if(profilerEnabled$1){logOperationStart(OperationId.render,vm);}},()=>{const{component,context,cmpSlots,cmpTemplate,tro,renderer}=vm;tro.observe(()=>{if(html!==cmpTemplate){if(!isNull$1(cmpTemplate)){resetShadowRoot(vm);}
if(!isTemplateRegistered(html)){throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);}
vm.cmpTemplate=html;context.tplCache=create$1(null);if(renderer.syntheticShadow){updateSyntheticShadowAttributes(vm,html);}
const stylesheetsContent=getStylesheetsContent(vm,html);context.styleVNode=stylesheetsContent.length===0?null:createStylesheet(vm,stylesheetsContent);}
if(process.env.NODE_ENV!=='production'){validateSlots(vm,html);setActiveVM(vm);}
vm.velements=[];isUpdatingTemplate=true;vnodes=html.call(undefined,api$1,component,cmpSlots,context.tplCache);const{styleVNode}=context;if(!isNull$1(styleVNode)){ArrayUnshift$2.call(vnodes,styleVNode);}});},()=>{isUpdatingTemplate=isUpdatingTemplateInception;vmBeingRendered=vmOfTemplateBeingUpdatedInception;if(profilerEnabled$1){logOperationEnd(OperationId.render,vm);}});if(process.env.NODE_ENV!=='production'){assert$1.invariant(isArray$2(vnodes),`Compiler should produce html functions that always return an array.`);}
return vnodes;}
function addErrorComponentStack(vm,error){if(!isFrozen$1(error)&&isUndefined$1(error.wcStack)){const wcStack=getErrorComponentStack(vm);defineProperty$1(error,'wcStack',{get(){return wcStack;}});}}
let isInvokingRender=false;let vmBeingConstructed=null;function isBeingConstructed(vm){return vmBeingConstructed===vm;}
let profilerEnabled$2=false;trackProfilerState(t=>profilerEnabled$2=t);const noop$3=()=>void 0;function invokeComponentCallback(vm,fn,args){const{component,callHook,owner}=vm;let result;runWithBoundaryProtection(vm,owner,noop$3,()=>{result=callHook(component,fn,args);},noop$3);return result;}
function invokeComponentConstructor(vm,Ctor){const vmBeingConstructedInception=vmBeingConstructed;let error;if(profilerEnabled$2){logOperationStart(OperationId.constructor,vm);}
vmBeingConstructed=vm;try{const result=new Ctor();if(vmBeingConstructed.component!==result){throw new TypeError('Invalid component constructor, the class should extend LightningElement.');}}catch(e){error=Object(e);}finally{if(profilerEnabled$2){logOperationEnd(OperationId.constructor,vm);}
vmBeingConstructed=vmBeingConstructedInception;if(!isUndefined$1(error)){addErrorComponentStack(vm,error);throw error;}}}
function invokeComponentRenderMethod(vm){const{def:{render},callHook,component,owner}=vm;const isRenderBeingInvokedInception=isInvokingRender;const vmBeingRenderedInception=getVMBeingRendered();let html;let renderInvocationSuccessful=false;runWithBoundaryProtection(vm,owner,()=>{isInvokingRender=true;setVMBeingRendered(vm);},()=>{vm.tro.observe(()=>{html=callHook(component,render);renderInvocationSuccessful=true;});},()=>{isInvokingRender=isRenderBeingInvokedInception;setVMBeingRendered(vmBeingRenderedInception);});return renderInvocationSuccessful?evaluateTemplate(vm,html):[];}
function invokeComponentRenderedCallback(vm){const{def:{renderedCallback},component,callHook,owner}=vm;if(!isUndefined$1(renderedCallback)){runWithBoundaryProtection(vm,owner,()=>{if(profilerEnabled$2){logOperationStart(OperationId.renderedCallback,vm);}},()=>{callHook(component,renderedCallback);},()=>{if(profilerEnabled$2){logOperationEnd(OperationId.renderedCallback,vm);}});}}
function invokeEventListener(vm,fn,thisValue,event){const{callHook,owner}=vm;runWithBoundaryProtection(vm,owner,noop$3,()=>{if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isFunction$1(fn),`Invalid event handler for event '${event.type}' on ${vm}.`);}
callHook(thisValue,fn,[event]);},noop$3);}
const signedTemplateMap=new Map();function registerComponent(Ctor,{tmpl}){signedTemplateMap.set(Ctor,tmpl);return Ctor;}
function getComponentRegisteredTemplate(Ctor){return signedTemplateMap.get(Ctor);}
function createComponent(vm,Ctor){invokeComponentConstructor(vm,Ctor);if(isUndefined$1(vm.component)){throw new ReferenceError(`Invalid construction for ${Ctor}, you must extend LightningElement.`);}}
function getTemplateReactiveObserver(vm){return new ReactiveObserver(()=>{const{isDirty}=vm;if(isFalse$1$1(isDirty)){markComponentAsDirty(vm);scheduleRehydration(vm);}});}
function renderComponent(vm){if(process.env.NODE_ENV!=='production'){assert$1.invariant(vm.isDirty,`${vm} is not dirty.`);}
vm.tro.reset();const vnodes=invokeComponentRenderMethod(vm);vm.isDirty=false;vm.isScheduled=false;if(process.env.NODE_ENV!=='production'){assert$1.invariant(isArray$2(vnodes),`${vm}.render() should always return an array of vnodes instead of ${vnodes}`);}
return vnodes;}
function markComponentAsDirty(vm){if(process.env.NODE_ENV!=='production'){const vmBeingRendered=getVMBeingRendered();assert$1.isFalse(vm.isDirty,`markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);assert$1.isFalse(isInvokingRender,`markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);assert$1.isFalse(isUpdatingTemplate,`markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);}
vm.isDirty=true;}
const cmpEventListenerMap=new WeakMap();function getWrappedComponentsListener(vm,listener){if(!isFunction$1(listener)){throw new TypeError();}
let wrappedListener=cmpEventListenerMap.get(listener);if(isUndefined$1(wrappedListener)){wrappedListener=function(event){invokeEventListener(vm,listener,undefined,event);};cmpEventListenerMap.set(listener,wrappedListener);}
return wrappedListener;}
const Services=create$1(null);const hooks=['rendered','connected','disconnected'];function register(service){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isObject$2(service),`Invalid service declaration, ${service}: service must be an object`);}
for(let i=0;i<hooks.length;++i){const hookName=hooks[i];if(hookName in service){let l=Services[hookName];if(isUndefined$1(l)){Services[hookName]=l=[];}
ArrayPush$1.call(l,service[hookName]);}}}
function invokeServiceHook(vm,cbs){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(isArray$2(cbs)&&cbs.length>0,`Optimize invokeServiceHook() to be invoked only when needed`);}
const{component,def,context}=vm;for(let i=0,len=cbs.length;i<len;++i){cbs[i].call(undefined,component,{},def,context);}}
var VMState;(function(VMState){VMState[VMState["created"]=0]="created";VMState[VMState["connected"]=1]="connected";VMState[VMState["disconnected"]=2]="disconnected";})(VMState||(VMState={}));let profilerEnabled$3=false;trackProfilerState(t=>profilerEnabled$3=t);let idx=0;const ViewModelReflection=createHiddenField$1('ViewModel','engine');function callHook(cmp,fn,args=[]){return fn.apply(cmp,args);}
function setHook(cmp,prop,newValue){cmp[prop]=newValue;}
function getHook(cmp,prop){return cmp[prop];}
function rerenderVM(vm){rehydrate(vm);}
function connectRootElement(elm){const vm=getAssociatedVM(elm);startGlobalMeasure(GlobalMeasurementPhase.HYDRATE,vm);if(vm.state===VMState.connected){disconnectRootElement(elm);}
runConnectedCallback(vm);rehydrate(vm);endGlobalMeasure(GlobalMeasurementPhase.HYDRATE,vm);}
function disconnectRootElement(elm){const vm=getAssociatedVM(elm);resetComponentStateWhenRemoved(vm);}
function appendVM(vm){rehydrate(vm);}
function resetComponentStateWhenRemoved(vm){const{state}=vm;if(state!==VMState.disconnected){const{oar,tro}=vm;tro.reset();for(const key in oar){oar[key].reset();}
runDisconnectedCallback(vm);runShadowChildNodesDisconnectedCallback(vm);runLightChildNodesDisconnectedCallback(vm);}
if(process.env.NODE_ENV!=='production'){removeActiveVM(vm);}}
function removeVM(vm){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(vm.state===VMState.connected||vm.state===VMState.disconnected,`${vm} must have been connected.`);}
resetComponentStateWhenRemoved(vm);}
function createVM(elm,def,options){const{mode,owner,renderer,tagName}=options;const vm={elm,def,idx:idx++,state:VMState.created,isScheduled:false,isDirty:true,tagName,mode,owner,renderer,children:EmptyArray,aChildren:EmptyArray,velements:EmptyArray,cmpProps:create$1(null),cmpFields:create$1(null),cmpSlots:create$1(null),oar:create$1(null),cmpTemplate:null,context:{hostAttribute:undefined,shadowAttribute:undefined,styleVNode:null,tplCache:EmptyObject,wiredConnecting:EmptyArray,wiredDisconnecting:EmptyArray},tro:null,component:null,cmpRoot:null,callHook,setHook,getHook};vm.tro=getTemplateReactiveObserver(vm);if(process.env.NODE_ENV!=='production'){vm.toString=()=>{return `[object:vm ${def.name} (${vm.idx})]`;};}
createComponent(vm,def.ctor);if(isFalse$1$1(renderer.ssr)&&hasWireAdapters(vm)){installWireAdapters(vm);}
return vm;}
function assertIsVM(obj){if(isNull$1(obj)||!isObject$2(obj)||!('cmpRoot'in obj)){throw new TypeError(`${obj} is not a VM.`);}}
function associateVM(obj,vm){setHiddenField$1(obj,ViewModelReflection,vm);}
function getAssociatedVM(obj){const vm=getHiddenField$1(obj,ViewModelReflection);if(process.env.NODE_ENV!=='production'){assertIsVM(vm);}
return vm;}
function getAssociatedVMIfPresent(obj){const maybeVm=getHiddenField$1(obj,ViewModelReflection);if(process.env.NODE_ENV!=='production'){if(!isUndefined$1(maybeVm)){assertIsVM(maybeVm);}}
return maybeVm;}
function rehydrate(vm){if(isTrue$1$1(vm.isDirty)){const children=renderComponent(vm);patchShadowRoot(vm,children);}}
function patchShadowRoot(vm,newCh){const{cmpRoot,children:oldCh}=vm;vm.children=newCh;if(newCh.length>0||oldCh.length>0){if(oldCh!==newCh){const fn=hasDynamicChildren(newCh)?updateDynamicChildren:updateStaticChildren;runWithBoundaryProtection(vm,vm,()=>{if(profilerEnabled$3){logOperationStart(OperationId.patch,vm);}},()=>{fn(cmpRoot,oldCh,newCh);},()=>{if(profilerEnabled$3){logOperationEnd(OperationId.patch,vm);}});}}
if(vm.state===VMState.connected){runRenderedCallback(vm);}}
function runRenderedCallback(vm){if(isTrue$1$1(vm.renderer.ssr)){return;}
const{rendered}=Services;if(rendered){invokeServiceHook(vm,rendered);}
invokeComponentRenderedCallback(vm);}
let rehydrateQueue=[];function flushRehydrationQueue(){startGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);if(process.env.NODE_ENV!=='production'){assert$1.invariant(rehydrateQueue.length,`If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);}
const vms=rehydrateQueue.sort((a,b)=>a.idx-b.idx);rehydrateQueue=[];for(let i=0,len=vms.length;i<len;i+=1){const vm=vms[i];try{rehydrate(vm);}catch(error){if(i+1<len){if(rehydrateQueue.length===0){addCallbackToNextTick(flushRehydrationQueue);}
ArrayUnshift$2.apply(rehydrateQueue,ArraySlice$2.call(vms,i+1));}
endGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);throw error;}}
endGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);}
function runConnectedCallback(vm){const{state}=vm;if(state===VMState.connected){return;}
vm.state=VMState.connected;const{connected}=Services;if(connected){invokeServiceHook(vm,connected);}
if(hasWireAdapters(vm)){connectWireAdapters(vm);}
const{connectedCallback}=vm.def;if(!isUndefined$1(connectedCallback)){if(profilerEnabled$3){logOperationStart(OperationId.connectedCallback,vm);}
invokeComponentCallback(vm,connectedCallback);if(profilerEnabled$3){logOperationEnd(OperationId.connectedCallback,vm);}}}
function hasWireAdapters(vm){return getOwnPropertyNames$1(vm.def.wire).length>0;}
function runDisconnectedCallback(vm){if(process.env.NODE_ENV!=='production'){assert$1.isTrue(vm.state!==VMState.disconnected,`${vm} must be inserted.`);}
if(isFalse$1$1(vm.isDirty)){vm.isDirty=true;}
vm.state=VMState.disconnected;const{disconnected}=Services;if(disconnected){invokeServiceHook(vm,disconnected);}
if(hasWireAdapters(vm)){disconnectWireAdapters(vm);}
const{disconnectedCallback}=vm.def;if(!isUndefined$1(disconnectedCallback)){if(profilerEnabled$3){logOperationStart(OperationId.disconnectedCallback,vm);}
invokeComponentCallback(vm,disconnectedCallback);if(profilerEnabled$3){logOperationEnd(OperationId.disconnectedCallback,vm);}}}
function runShadowChildNodesDisconnectedCallback(vm){const{velements:vCustomElementCollection}=vm;for(let i=vCustomElementCollection.length-1;i>=0;i-=1){const{elm}=vCustomElementCollection[i];if(!isUndefined$1(elm)){const childVM=getAssociatedVMIfPresent(elm);if(!isUndefined$1(childVM)){resetComponentStateWhenRemoved(childVM);}}}}
function runLightChildNodesDisconnectedCallback(vm){const{aChildren:adoptedChildren}=vm;recursivelyDisconnectChildren(adoptedChildren);}
function recursivelyDisconnectChildren(vnodes){for(let i=0,len=vnodes.length;i<len;i+=1){const vnode=vnodes[i];if(!isNull$1(vnode)&&isArray$2(vnode.children)&&!isUndefined$1(vnode.elm)){if(isUndefined$1(vnode.ctor)){recursivelyDisconnectChildren(vnode.children);}else{resetComponentStateWhenRemoved(getAssociatedVM(vnode.elm));}}}}
function resetShadowRoot(vm){const{children,cmpRoot,renderer}=vm;for(let i=0,len=children.length;i<len;i++){const child=children[i];if(!isNull$1(child)&&!isUndefined$1(child.elm)){renderer.remove(child.elm,cmpRoot);}}
vm.children=EmptyArray;runShadowChildNodesDisconnectedCallback(vm);vm.velements=EmptyArray;}
function scheduleRehydration(vm){if(isTrue$1$1(vm.renderer.ssr)||isTrue$1$1(vm.isScheduled)){return;}
vm.isScheduled=true;if(rehydrateQueue.length===0){addCallbackToNextTick(flushRehydrationQueue);}
ArrayPush$1.call(rehydrateQueue,vm);}
function getErrorBoundaryVM(vm){let currentVm=vm;while(!isNull$1(currentVm)){if(!isUndefined$1(currentVm.def.errorCallback)){return currentVm;}
currentVm=currentVm.owner;}}
function allocateInSlot(vm,children){if(process.env.NODE_ENV!=='production'){assert$1.invariant(isObject$2(vm.cmpSlots),`When doing manual allocation, there must be a cmpSlots object available.`);}
const{cmpSlots:oldSlots}=vm;const cmpSlots=vm.cmpSlots=create$1(null);for(let i=0,len=children.length;i<len;i+=1){const vnode=children[i];if(isNull$1(vnode)){continue;}
const{data}=vnode;const slotName=data.attrs&&data.attrs.slot||'';const vnodes=cmpSlots[slotName]=cmpSlots[slotName]||[];if(!isUndefined$1(vnode.key)){vnode.key=`@${slotName}:${vnode.key}`;}
ArrayPush$1.call(vnodes,vnode);}
if(isFalse$1$1(vm.isDirty)){const oldKeys=keys$1(oldSlots);if(oldKeys.length!==keys$1(cmpSlots).length){markComponentAsDirty(vm);return;}
for(let i=0,len=oldKeys.length;i<len;i+=1){const key=oldKeys[i];if(isUndefined$1(cmpSlots[key])||oldSlots[key].length!==cmpSlots[key].length){markComponentAsDirty(vm);return;}
const oldVNodes=oldSlots[key];const vnodes=cmpSlots[key];for(let j=0,a=cmpSlots[key].length;j<a;j+=1){if(oldVNodes[j]!==vnodes[j]){markComponentAsDirty(vm);return;}}}}}
function runWithBoundaryProtection(vm,owner,pre,job,post){let error;pre();try{job();}catch(e){error=Object(e);}finally{post();if(!isUndefined$1(error)){addErrorComponentStack(vm,error);const errorBoundaryVm=isNull$1(owner)?undefined:getErrorBoundaryVM(owner);if(isUndefined$1(errorBoundaryVm)){throw error;}
resetShadowRoot(vm);if(profilerEnabled$3){logOperationStart(OperationId.errorCallback,vm);}
const errorCallback=errorBoundaryVm.def.errorCallback;invokeComponentCallback(errorBoundaryVm,errorCallback,[error,error.wcStack]);if(profilerEnabled$3){logOperationEnd(OperationId.errorCallback,vm);}}}}
function forceRehydration(vm){vm.cmpTemplate=()=>[];if(isFalse$1$1(vm.isDirty)){markComponentAsDirty(vm);scheduleRehydration(vm);}}
const DeprecatedWiredElementHost='$$DeprecatedWiredElementHostKey$$';const DeprecatedWiredParamsMeta='$$DeprecatedWiredParamsMetaKey$$';const WireMetaMap=new Map();function noop$4(){}
class WireContextRegistrationEvent extends CustomEvent{constructor(adapterToken,{setNewContext,setDisconnectedCallback}){super(adapterToken,{bubbles:true,composed:true});defineProperties$1(this,{setNewContext:{value:setNewContext},setDisconnectedCallback:{value:setDisconnectedCallback}});}}
function createFieldDataCallback(vm,name){const{cmpFields}=vm;return value=>{if(value!==vm.cmpFields[name]){cmpFields[name]=value;componentValueMutated(vm,name);}};}
function createMethodDataCallback(vm,method){return value=>{runWithBoundaryProtection(vm,vm.owner,noop$4,()=>{method.call(vm.component,value);},noop$4);};}
function createConfigWatcher(component,configCallback,callbackWhenConfigIsReady){let hasPendingConfig=false;const ro=new ReactiveObserver(()=>{if(hasPendingConfig===false){hasPendingConfig=true;Promise.resolve().then(()=>{hasPendingConfig=false;ro.reset();computeConfigAndUpdate();});}});const computeConfigAndUpdate=()=>{let config;ro.observe(()=>config=configCallback(component));callbackWhenConfigIsReady(config);};return{computeConfigAndUpdate,ro};}
function createContextWatcher(vm,wireDef,callbackWhenContextIsReady){const{adapter}=wireDef;const adapterContextToken=getAdapterToken(adapter);if(isUndefined$1(adapterContextToken)){return;}
const{elm,renderer,context:{wiredConnecting,wiredDisconnecting}}=vm;ArrayPush$1.call(wiredConnecting,()=>{const contextRegistrationEvent=new WireContextRegistrationEvent(adapterContextToken,{setNewContext(newContext){callbackWhenContextIsReady(newContext);},setDisconnectedCallback(disconnectCallback){ArrayPush$1.call(wiredDisconnecting,disconnectCallback);}});renderer.dispatchEvent(elm,contextRegistrationEvent);});}
function createConnector(vm,name,wireDef){const{method,adapter,configCallback,dynamic}=wireDef;const dataCallback=isUndefined$1(method)?createFieldDataCallback(vm,name):createMethodDataCallback(vm,method);let context;let connector;defineProperty$1(dataCallback,DeprecatedWiredElementHost,{value:vm.elm});defineProperty$1(dataCallback,DeprecatedWiredParamsMeta,{value:dynamic});runWithBoundaryProtection(vm,vm,noop$4,()=>{connector=new adapter(dataCallback);},noop$4);const updateConnectorConfig=config=>{runWithBoundaryProtection(vm,vm,noop$4,()=>{connector.update(config,context);},noop$4);};const{computeConfigAndUpdate,ro}=createConfigWatcher(vm.component,configCallback,updateConnectorConfig);if(!isUndefined$1(adapter.contextSchema)){createContextWatcher(vm,wireDef,newContext=>{if(context!==newContext){context=newContext;if(vm.state===VMState.connected){computeConfigAndUpdate();}}});}
return{connector,computeConfigAndUpdate,resetConfigWatcher:()=>ro.reset()};}
const AdapterToTokenMap=new Map();function getAdapterToken(adapter){return AdapterToTokenMap.get(adapter);}
function setAdapterToken(adapter,token){AdapterToTokenMap.set(adapter,token);}
function storeWiredMethodMeta(descriptor,adapter,configCallback,dynamic){if(adapter.adapter){adapter=adapter.adapter;}
const method=descriptor.value;const def={adapter,method,configCallback,dynamic};WireMetaMap.set(descriptor,def);}
function storeWiredFieldMeta(descriptor,adapter,configCallback,dynamic){if(adapter.adapter){adapter=adapter.adapter;}
const def={adapter,configCallback,dynamic};WireMetaMap.set(descriptor,def);}
function installWireAdapters(vm){const{context,def:{wire}}=vm;const wiredConnecting=context.wiredConnecting=[];const wiredDisconnecting=context.wiredDisconnecting=[];for(const fieldNameOrMethod in wire){const descriptor=wire[fieldNameOrMethod];const wireDef=WireMetaMap.get(descriptor);if(process.env.NODE_ENV!=='production'){assert$1.invariant(wireDef,`Internal Error: invalid wire definition found.`);}
if(!isUndefined$1(wireDef)){const{connector,computeConfigAndUpdate,resetConfigWatcher}=createConnector(vm,fieldNameOrMethod,wireDef);const hasDynamicParams=wireDef.dynamic.length>0;ArrayPush$1.call(wiredConnecting,()=>{connector.connect();if(hasDynamicParams){Promise.resolve().then(computeConfigAndUpdate);}else{computeConfigAndUpdate();}});ArrayPush$1.call(wiredDisconnecting,()=>{connector.disconnect();resetConfigWatcher();});}}}
function connectWireAdapters(vm){const{wiredConnecting}=vm.context;for(let i=0,len=wiredConnecting.length;i<len;i+=1){wiredConnecting[i]();}}
function disconnectWireAdapters(vm){const{wiredDisconnecting}=vm.context;runWithBoundaryProtection(vm,vm,noop$4,()=>{for(let i=0,len=wiredDisconnecting.length;i<len;i+=1){wiredDisconnecting[i]();}},noop$4);}
function createContextProvider(adapter){let adapterContextToken=getAdapterToken(adapter);if(!isUndefined$1(adapterContextToken)){throw new Error(`Adapter already has a context provider.`);}
adapterContextToken=guid();setAdapterToken(adapter,adapterContextToken);const providers=new WeakSet();return(elm,options)=>{if(providers.has(elm)){throw new Error(`Adapter was already installed on ${elm}.`);}
providers.add(elm);const{consumerConnectedCallback,consumerDisconnectedCallback}=options;elm.addEventListener(adapterContextToken,evt=>{const{setNewContext,setDisconnectedCallback}=evt;const consumer={provide(newContext){setNewContext(newContext);}};const disconnectCallback=()=>{if(!isUndefined$1(consumerDisconnectedCallback)){consumerDisconnectedCallback(consumer);}};setDisconnectedCallback(disconnectCallback);consumerConnectedCallback(consumer);evt.stopImmediatePropagation();});};}
function readonly(obj){if(process.env.NODE_ENV!=='production'){if(arguments.length!==1){assert$1.fail('@readonly cannot be used as a decorator just yet, use it as a function with one argument to produce a readonly version of the provided value.');}}
return reactiveMembrane.getReadOnlyProxy(obj);}
const globalStylesheets=create(null);const globalStylesheetsParentElement=document.head||document.body||document;let getCustomElement,defineCustomElement,HTMLElementConstructor$1;function isCustomElementRegistryAvailable(){if(typeof customElements==='undefined'){return false;}
try{const HTMLElementAlias=HTMLElement;class clazz extends HTMLElementAlias{}
customElements.define('lwc-test-'+Math.floor(Math.random()*1000000),clazz);new clazz();return true;}catch(_a){return false;}}
if(isCustomElementRegistryAvailable()){getCustomElement=customElements.get.bind(customElements);defineCustomElement=customElements.define.bind(customElements);HTMLElementConstructor$1=HTMLElement;}else{const registry=create(null);const reverseRegistry=new WeakMap();defineCustomElement=function define(name,ctor){if(name!==StringToLowerCase.call(name)||registry[name]){throw new TypeError(`Invalid Registration`);}
registry[name]=ctor;reverseRegistry.set(ctor,name);};getCustomElement=function get(name){return registry[name];};HTMLElementConstructor$1=function HTMLElement(){if(!(this instanceof HTMLElement)){throw new TypeError(`Invalid Invocation`);}
const{constructor}=this;const name=reverseRegistry.get(constructor);if(!name){throw new TypeError(`Invalid Construction`);}
const elm=document.createElement(name);setPrototypeOf(elm,constructor.prototype);return elm;};HTMLElementConstructor$1.prototype=HTMLElement.prototype;}
const useSyntheticShadow=hasOwnProperty.call(Element.prototype,'$shadowToken$');const renderer={ssr:false,syntheticShadow:useSyntheticShadow,createElement(tagName,namespace){return isUndefined(namespace)?document.createElement(tagName):document.createElementNS(namespace,tagName);},createText(content){return document.createTextNode(content);},insert(node,parent,anchor){parent.insertBefore(node,anchor);},remove(node,parent){parent.removeChild(node);},nextSibling(node){return node.nextSibling;},attachShadow(element,options){return element.attachShadow(options);},setText(node,content){node.nodeValue=content;},getProperty(node,key){return node[key];},setProperty(node,key,value){if(process.env.NODE_ENV!=='production'){if(node instanceof Element&&!(key in node)){assert.fail(`Unknown public property "${key}" of element <${node.tagName}>. This is likely a typo on the corresponding attribute "${htmlPropertyToAttribute(key)}".`);}}
node[key]=value;},getAttribute(element,name,namespace){return isUndefined(namespace)?element.getAttribute(name):element.getAttributeNS(namespace,name);},setAttribute(element,name,value,namespace){return isUndefined(namespace)?element.setAttribute(name,value):element.setAttributeNS(namespace,name,value);},removeAttribute(element,name,namespace){if(isUndefined(namespace)){element.removeAttribute(name);}else{element.removeAttributeNS(namespace,name);}},addEventListener(target,type,callback,options){target.addEventListener(type,callback,options);},removeEventListener(target,type,callback,options){target.removeEventListener(type,callback,options);},dispatchEvent(target,event){return target.dispatchEvent(event);},getClassList(element){return element.classList;},setCSSStyleProperty(element,name,value){element.style.setProperty(name,value);},getBoundingClientRect(element){return element.getBoundingClientRect();},querySelector(element,selectors){return element.querySelector(selectors);},querySelectorAll(element,selectors){return element.querySelectorAll(selectors);},getElementsByTagName(element,tagNameOrWildCard){return element.getElementsByTagName(tagNameOrWildCard);},getElementsByClassName(element,names){return element.getElementsByClassName(names);},isConnected(node){return node.isConnected;},insertGlobalStylesheet(content){if(!isUndefined(globalStylesheets[content])){return;}
globalStylesheets[content]=true;const elm=document.createElement('style');elm.type='text/css';elm.textContent=content;globalStylesheetsParentElement.appendChild(elm);},assertInstanceOfHTMLElement(elm,msg){assert.invariant(elm instanceof HTMLElement,msg);},defineCustomElement,getCustomElement,HTMLElement:HTMLElementConstructor$1};function deprecatedBuildCustomElementConstructor(Ctor){if(process.env.NODE_ENV!=='production'){console.warn('Deprecated function called: "buildCustomElementConstructor" function is deprecated and it will be removed.'+`Use "${Ctor.name}.CustomElementConstructor" static property of the component constructor to access the corresponding custom element constructor instead.`);}
return Ctor.CustomElementConstructor;}
function buildCustomElementConstructor(Ctor){const def=getComponentInternalDef(Ctor);return class extends def.bridge{constructor(){super();createVM(this,def,{mode:'open',owner:null,tagName:this.tagName,renderer});}
connectedCallback(){connectRootElement(this);}
disconnectedCallback(){disconnectRootElement(this);}};}
const ConnectingSlot=createHiddenField('connecting','engine');const DisconnectingSlot=createHiddenField('disconnecting','engine');function callNodeSlot(node,slot){if(process.env.NODE_ENV!=='production'){assert.isTrue(node,`callNodeSlot() should not be called for a non-object`);}
const fn=getHiddenField(node,slot);if(!isUndefined(fn)){fn(node);}
return node;}
const{appendChild,insertBefore,removeChild,replaceChild}=Node.prototype;assign(Node.prototype,{appendChild(newChild){const appendedNode=appendChild.call(this,newChild);return callNodeSlot(appendedNode,ConnectingSlot);},insertBefore(newChild,referenceNode){const insertedNode=insertBefore.call(this,newChild,referenceNode);return callNodeSlot(insertedNode,ConnectingSlot);},removeChild(oldChild){const removedNode=removeChild.call(this,oldChild);return callNodeSlot(removedNode,DisconnectingSlot);},replaceChild(newChild,oldChild){const replacedNode=replaceChild.call(this,newChild,oldChild);callNodeSlot(replacedNode,DisconnectingSlot);callNodeSlot(newChild,ConnectingSlot);return replacedNode;}});function createElement(sel,options){if(!isObject$1(options)||isNull(options)){throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString(options)}".`);}
const Ctor=options.is;if(!isFunction(Ctor)){throw new TypeError(`"createElement" function expects an "is" option with a valid component constructor.`);}
const UpgradableConstructor=getUpgradableConstructor(sel,renderer);let wasComponentUpgraded=false;const element=new UpgradableConstructor(elm=>{const def=getComponentInternalDef(Ctor);createVM(elm,def,{tagName:sel,mode:options.mode!=='closed'?'open':'closed',owner:null,renderer});setHiddenField(elm,ConnectingSlot,connectRootElement);setHiddenField(elm,DisconnectingSlot,disconnectRootElement);wasComponentUpgraded=true;});if(!wasComponentUpgraded){console.error(`Unexpected tag name "${sel}". This name is a registered custom element, preventing LWC to upgrade the element.`);}
return element;}
function getComponentConstructor(elm){let ctor=null;if(elm instanceof HTMLElement){const vm=getAssociatedVMIfPresent(elm);if(!isUndefined(vm)){ctor=vm.def.ctor;}}
return ctor;}
function isNodeFromTemplate(node){if(isFalse$1(node instanceof Node)){return false;}
if(node instanceof ShadowRoot){return false;}
if(useSyntheticShadow){if(isUndefined(node.$shadowResolver$)){return false;}}
const root=node.getRootNode();return root instanceof ShadowRoot;}
const ComponentConstructorToCustomElementConstructorMap=new Map();function getCustomElementConstructor(Ctor){if(Ctor===BaseLightningElement){throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);}
let ce=ComponentConstructorToCustomElementConstructorMap.get(Ctor);if(isUndefined(ce)){ce=buildCustomElementConstructor(Ctor);ComponentConstructorToCustomElementConstructorMap.set(Ctor,ce);}
return ce;}
defineProperty(BaseLightningElement,'CustomElementConstructor',{get(){return getCustomElementConstructor(this);}});freeze(BaseLightningElement);seal(BaseLightningElement.prototype);exports.LightningElement=BaseLightningElement;exports.__unstable__ProfilerControl=profilerControl;exports.api=api;exports.buildCustomElementConstructor=deprecatedBuildCustomElementConstructor;exports.createContextProvider=createContextProvider;exports.createElement=createElement;exports.getComponentConstructor=getComponentConstructor;exports.getComponentDef=getComponentDef;exports.isComponentConstructor=isComponentConstructor;exports.isNodeFromTemplate=isNodeFromTemplate;exports.readonly=readonly;exports.register=register;exports.registerComponent=registerComponent;exports.registerDecorators=registerDecorators;exports.registerTemplate=registerTemplate;exports.sanitizeAttribute=sanitizeAttribute;exports.setFeatureFlag=setFeatureFlag;exports.setFeatureFlagForTest=setFeatureFlagForTest;exports.swapComponent=swapComponent;exports.swapStyle=swapStyle;exports.swapTemplate=swapTemplate;exports.track=track;exports.unwrap=unwrap$1;exports.wire=wire;Object.defineProperty(exports,'__esModule',{value:true});})));