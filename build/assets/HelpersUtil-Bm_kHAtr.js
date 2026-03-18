import{j as t,r as e,n as o,l as r,m as a,x as s,R as i,L as n,O as c,u as d}from"./index-BEoefSux.js";const l=t`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:t})=>t[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
    color: ${({tokens:t})=>t.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
    color: ${({tokens:t})=>t.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:t})=>t.core.backgroundError};
    color: ${({tokens:t})=>t.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:t})=>t[1]};
    border-radius: ${({borderRadius:t})=>t[1]};
  }
`;var u=function(t,e,o,r){var a,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(i=(s<3?a(i):s>3?a(e,o,i):a(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i};let h=class extends a{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"md-medium":"sm-medium",e="md"===this.size?"md":"sm";return s`
      ${this.icon?s`<wui-icon size=${e} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};h.styles=[e,l],u([o()],h.prototype,"variant",void 0),u([o()],h.prototype,"size",void 0),u([o()],h.prototype,"icon",void 0),h=u([r("wui-tag")],h);const g={getTabsByNamespace(t){var e;return Boolean(t)&&t===d.CHAIN.EVM?!1===(null==(e=c.state.remoteFeatures)?void 0:e.activity)?n.ACCOUNT_TABS.filter((t=>"Activity"!==t.label)):n.ACCOUNT_TABS:[]},isValidReownName:t=>/^[a-zA-Z0-9]+$/gu.test(t),isValidEmail:t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(t),validateReownName:t=>t.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){var t;const e=i.state.view;if(n.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:o}=c.state,r=null==(t=c.state.features)?void 0:t.legalCheckbox;return!(!e&&!o||r)}return n.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};export{g as H};
