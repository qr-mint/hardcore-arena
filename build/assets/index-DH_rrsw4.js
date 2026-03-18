import{p as e,s as t,i as o,j as c,r as s,n as i,l as a,m as r,q as n,x as l,G as d,O as h}from"./index-BEoefSux.js";import{e as p,n as b}from"./ref-B1zIzxXI.js";const u=e({isLegalCheckboxChecked:!1}),k={state:u,subscribe:e=>o(u,(()=>e(u))),subscribeKey:(e,o)=>t(u,e,o),setIsLegalCheckboxChecked(e){u.isLegalCheckboxChecked=e}},x=c`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var y=function(e,t,o,c){var s,i=arguments.length,a=i<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,o):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,c);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(i<3?s(a):i>3?s(t,o,a):s(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};const g={lg:"md",md:"sm",sm:"sm"};let m=class extends r{constructor(){super(...arguments),this.inputElementRef=p(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const e=g[this.size];return l`
      <label data-size=${this.size}>
        <input
          ${b(this.inputElementRef)}
          ?checked=${n(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${e}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:null==(e=this.inputElementRef.value)?void 0:e.checked,bubbles:!0,composed:!0}))}};m.styles=[s,x],y([i({type:Boolean})],m.prototype,"checked",void 0),y([i({type:Boolean})],m.prototype,"disabled",void 0),y([i()],m.prototype,"size",void 0),m=y([a("wui-checkbox")],m);const f=c`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var w=function(e,t,o,c){var s,i=arguments.length,a=i<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,o):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,c);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(i<3?s(a):i>3?s(t,o,a):s(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};let v=class extends r{constructor(){super(),this.unsubscribe=[],this.checked=k.state.isLegalCheckboxChecked,this.unsubscribe.push(k.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:o}=h.state,c=null==(e=h.state.features)?void 0:e.legalCheckbox;return(t||o)&&c?l`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=h.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=h.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=h.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){k.setIsLegalCheckboxChecked(!this.checked)}};v.styles=[f],w([d()],v.prototype,"checked",void 0),v=w([a("w3m-legal-checkbox")],v);export{k as O};
