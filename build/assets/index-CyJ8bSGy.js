import{o as e,r as t,n as r,l as i,m as o,q as a,x as s}from"./index-BEoefSux.js";import"./index-CEnphRM1.js";const l=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var n=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let d=class extends o{constructor(){super(...arguments),this.disabled=!1}render(){return s`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${a(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?s`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};d.styles=[t,l],n([r()],d.prototype,"errorMessage",void 0),n([r({type:Boolean})],d.prototype,"disabled",void 0),n([r()],d.prototype,"value",void 0),n([r()],d.prototype,"tabIdx",void 0),d=n([i("wui-email-input")],d);
