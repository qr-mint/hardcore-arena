import{j as e,r as o,k as t,n as i,l as r,m as n,q as a,x as l}from"./index-BEoefSux.js";const s=e`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var d=function(e,o,t,i){var r,n=arguments.length,a=n<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,t,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(o,t,a):r(o,t))||a);return n>3&&a&&Object.defineProperty(o,t,a),a};let c=class extends n{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",l`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${a(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?l`<wui-image
        icon=${this.icon}
        iconColor=${a(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:l`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:l`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};c.styles=[o,t,s],d([i()],c.prototype,"imageSrc",void 0),d([i()],c.prototype,"icon",void 0),d([i()],c.prototype,"iconColor",void 0),d([i({type:Boolean})],c.prototype,"loading",void 0),d([i()],c.prototype,"tabIdx",void 0),d([i({type:Boolean})],c.prototype,"disabled",void 0),d([i({type:Boolean})],c.prototype,"rightIcon",void 0),d([i({type:Boolean})],c.prototype,"rounded",void 0),d([i({type:Boolean})],c.prototype,"fullSize",void 0),c=d([r("wui-list-item")],c);
