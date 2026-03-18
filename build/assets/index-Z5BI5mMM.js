import{o as e,n as t,G as o,l as i,m as n,R as s,M as r,x as h}from"./index-BEoefSux.js";import{T as d}from"./index-ijZizQqQ.js";const a={interpolate(e,t,o){if(2!==e.length||2!==t.length)throw new Error("inputRange and outputRange must be an array of length 2");const i=e[0]||0,n=e[1]||0,s=t[0]||0,r=t[1]||0;return o<i?s:o>n?r:(r-s)/(n-i)*(o-i)+s}},c=e`
  :host {
    width: 100%;
    display: block;
  }
`;var l=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};let p=class extends n{constructor(){super(),this.unsubscribe=[],this.text="",this.open=d.state.open,this.unsubscribe.push(s.subscribeKey("view",(()=>{d.hide()})),r.subscribeKey("open",(e=>{e||d.hide()})),d.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),d.hide()}render(){return h`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return h`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),o={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const i=t.getBoundingClientRect();o.left=e.left-(window.innerWidth-i.width)/2,o.top=e.top-(window.innerHeight-i.height)/2}d.showTooltip({message:this.text,triggerRect:o,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||d.hide()}};p.styles=[c],l([t()],p.prototype,"text",void 0),l([o()],p.prototype,"open",void 0),p=l([i("w3m-tooltip-trigger")],p);export{a as M};
