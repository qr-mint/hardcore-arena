import{C as e,E as t,R as o,F as r,S as i,a as n,Q as a,U as s,u as c,j as l,r as u,n as d,l as p,m as g,x as h,k as f,q as w}from"./index-BEoefSux.js";async function y(l){e.setAccountProp("socialProvider",l,e.state.activeChain),t.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:l}}),"farcaster"===l?await async function(){o.push("ConnectingFarcaster");const t=r.getAuthConnector();if(t){const r=e.getAccountData();if(!(null==r?void 0:r.farcasterUrl))try{const{url:o}=await t.provider.getFarcasterUri();e.setAccountProp("farcasterUrl",o,e.state.activeChain)}catch(n){o.goBack(),i.showError(n)}}}():await async function(l){o.push("ConnectingSocial");const u=r.getAuthConnector();let d=null;try{const t=setTimeout((()=>{throw new Error("Social login timed out. Please try again.")}),45e3);if(u&&l){if(n.isTelegram()||(d=function(){try{return n.returnOpenHref(`${c.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),d)e.setAccountProp("socialWindow",a(d),e.state.activeChain);else if(!n.isTelegram())throw new Error("Could not create social popup");const{uri:o}=await u.provider.getSocialRedirectUri({provider:l});if(!o)throw null==d||d.close(),new Error("Could not fetch the social redirect uri");if(d&&(d.location.href=o),n.isTelegram()){s.setTelegramSocialProvider(l);const e=n.formatTelegramSocialLoginUrl(o);n.openHref(e,"_top")}clearTimeout(t)}}catch(p){null==d||d.close();const e=n.parseError(p);i.showError(e),t.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:l,message:e}})}}(l)}const v=l`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var b=function(e,t,o,r){var i,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,o,a):i(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let m=class extends g{constructor(){super(...arguments),this.logo="google"}render(){return h`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};m.styles=[u,v],b([d()],m.prototype,"logo",void 0),m=b([p("wui-logo")],m);const x=l`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
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
`;var R=function(e,t,o,r){var i,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,o,a):i(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a};let C=class extends g{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return h`
      <button ?disabled=${this.disabled} tabindex=${w(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};C.styles=[u,f,x],R([d()],C.prototype,"logo",void 0),R([d()],C.prototype,"name",void 0),R([d()],C.prototype,"tabIdx",void 0),R([d({type:Boolean})],C.prototype,"disabled",void 0),C=R([p("wui-list-social")],C);export{y as e};
