import{j as t,r as e,n as r,l as o,m as n,x as i}from"./index-BEoefSux.js";const s=t`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:t})=>t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }
`;var a=function(t,e,r,o){var n,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(i<3?n(s):i>3?n(e,r,s):n(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends n{constructor(){super(...arguments),this.text=""}render(){return i`${this.template()}`}template(){return this.text?i`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};c.styles=[e,s],a([r()],c.prototype,"text",void 0),c=a([o("wui-separator")],c);
