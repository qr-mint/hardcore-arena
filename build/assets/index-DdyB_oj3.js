import{j as e,n as t,l as r,m as o,x as i}from"./index-BEoefSux.js";const s=e`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var n=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n};let d=class extends o{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",i`<slot></slot>`}};d.styles=[s],n([t()],d.prototype,"width",void 0),n([t()],d.prototype,"height",void 0),n([t()],d.prototype,"variant",void 0),n([t({type:Boolean})],d.prototype,"rounded",void 0),d=n([r("wui-shimmer")],d);
