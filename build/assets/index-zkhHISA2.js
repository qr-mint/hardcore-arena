import{j as e,r as t,k as i,n as o,l as n,m as a,q as r,x as s,C as l,O as c,aa as d,P as u,a as p,M as h,G as w,o as m,E as g,U as b,F as f,u as v,R as y,d as x,S as $,t as k,y as C,W as S,ai as E,aj as R,ak as T,al as A,a2 as I,$ as N,am as O,A as P,a1 as j,a0 as D,_ as L,T as W,ab as z,ac as U,an as _,ae as B,ao as F}from"./index-BEoefSux.js";import{U as M}from"./index-C1vLwcMZ.js";import"./index-ZSJZq-Zd.js";import"./index-DGqiGt1M.js";import{a as V,W as K}from"./index-CyZGdUoH.js";import"./index-kzT870eI.js";import"./index-CRp8uIzF.js";import"./index-NIgCdfht.js";import{H as q}from"./HelpersUtil-Bm_kHAtr.js";import{E as H}from"./ExchangeController-C_Xkd2XS.js";import"./index-Bw34lBbd.js";import"./index-8aUkZyPU.js";import{M as G}from"./index-Z5BI5mMM.js";import"./index-ijZizQqQ.js";import"./index-BBGopqFP.js";import"./index-CNDRGK3c.js";import{e as Y,n as X}from"./ref-B1zIzxXI.js";import"./index-CEnphRM1.js";import{n as Q}from"./index-DqfU-mdI.js";import"./index-DdyB_oj3.js";import"./index-CnGID-LM.js";import"./index-CyJ8bSGy.js";import{O as J}from"./index-DH_rrsw4.js";import{e as Z}from"./index-BkMRP6pH.js";import"./index-CCFK-MhI.js";import"./index-BHRvS_rZ.js";import"./index-DDZDaYwr.js";import{N as ee}from"./NavigationUtil-DmfK5sOV.js";import"./index-pdRk3P6H.js";import"./phaser-whA1hLzy.js";const te=e`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var ie=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let oe=class extends a{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return s`
      <button
        ?disabled=${this.disabled}
        class=${r(this.balance?void 0:"local-no-balance")}
        data-error=${r(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const e=this.networkSrc?s`<wui-image src=${this.networkSrc}></wui-image>`:s` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return s`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return s`<wui-text variant="md-regular" color="inherit">
      ${this.address?M.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const e=this.loading?s`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:s`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return s`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};oe.styles=[t,i,te],ie([o()],oe.prototype,"networkSrc",void 0),ie([o()],oe.prototype,"avatarSrc",void 0),ie([o()],oe.prototype,"balance",void 0),ie([o({type:Boolean})],oe.prototype,"isUnsupportedChain",void 0),ie([o({type:Boolean})],oe.prototype,"disabled",void 0),ie([o({type:Boolean})],oe.prototype,"loading",void 0),ie([o()],oe.prototype,"address",void 0),ie([o()],oe.prototype,"profileName",void 0),ie([o()],oe.prototype,"charsStart",void 0),ie([o()],oe.prototype,"charsEnd",void 0),oe=ie([n("wui-account-button")],oe);var ne=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};class ae extends a{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!c.state.allowUnsupportedChain||!l.state.activeChain||l.checkIfSupportedNetwork(l.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(l.getAccountData(this.namespace)),this.setNetworkData(l.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(l.subscribeChainProp("accountState",(e=>{this.setAccountData(e)}),e),l.subscribeChainProp("networkState",(t=>{var i;this.setNetworkData(t),this.isSupported=l.checkIfSupportedNetwork(e,null==(i=null==t?void 0:t.caipNetwork)?void 0:i.caipNetworkId)}),e)):this.unsubscribe.push(d.subscribeNetworkImages((()=>{this.networkImage=u.getNetworkImage(this.network)})),l.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),l.subscribeChainProp("accountState",(e=>{this.setAccountData(e)})),l.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=u.getNetworkImage(e),this.isSupported=!(null==e?void 0:e.chainNamespace)||l.checkIfSupportedNetwork(null==e?void 0:e.chainNamespace),this.fetchNetworkImage(e)})))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!l.state.activeChain)return null;const e="show"===this.balance,t="string"!=typeof this.balanceVal,{formattedText:i}=p.parseBalance(this.balanceVal,this.balanceSymbol);return s`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!c.state.allowUnsupportedChain&&!this.isSupported}
        address=${r(p.getPlainAddress(this.caipAddress))}
        profileName=${r(this.profileName)}
        networkSrc=${r(this.networkImage)}
        avatarSrc=${r(this.profileImage)}
        balance=${e?i:""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||c.state.allowUnsupportedChain?h.open({namespace:this.namespace}):h.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){var t,i;(null==(t=null==e?void 0:e.assets)?void 0:t.imageId)&&(this.networkImage=await u.fetchNetworkImage(null==(i=null==e?void 0:e.assets)?void 0:i.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=u.getNetworkImage(e.caipNetwork))}}ne([o({type:Boolean})],ae.prototype,"disabled",void 0),ne([o()],ae.prototype,"balance",void 0),ne([o()],ae.prototype,"charsStart",void 0),ne([o()],ae.prototype,"charsEnd",void 0),ne([o()],ae.prototype,"namespace",void 0),ne([w()],ae.prototype,"caipAddress",void 0),ne([w()],ae.prototype,"balanceVal",void 0),ne([w()],ae.prototype,"balanceSymbol",void 0),ne([w()],ae.prototype,"profileName",void 0),ne([w()],ae.prototype,"profileImage",void 0),ne([w()],ae.prototype,"network",void 0),ne([w()],ae.prototype,"networkImage",void 0),ne([w()],ae.prototype,"isSupported",void 0);let re=class extends ae{};re=ne([n("w3m-account-button")],re);let se=class extends ae{};se=ne([n("appkit-account-button")],se);const le=m`
  :host {
    display: block;
    width: max-content;
  }
`;var ce=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};class de extends a{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){var e;this.caipAddress=this.namespace?null==(e=l.getAccountData(this.namespace))?void 0:e.caipAddress:l.state.activeCaipAddress,this.namespace?this.unsubscribe.push(l.subscribeChainProp("accountState",(e=>{this.caipAddress=null==e?void 0:e.caipAddress}),this.namespace)):this.unsubscribe.push(l.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress?s`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${r(this.balance)}
            .charsStart=${r(this.charsStart)}
            .charsEnd=${r(this.charsEnd)}
            namespace=${r(this.namespace)}
          >
          </appkit-account-button>
        `:s`
          <appkit-connect-button
            size=${r(this.size)}
            label=${r(this.label)}
            loadingLabel=${r(this.loadingLabel)}
            namespace=${r(this.namespace)}
          ></appkit-connect-button>
        `}}de.styles=le,ce([o({type:Boolean})],de.prototype,"disabled",void 0),ce([o()],de.prototype,"balance",void 0),ce([o()],de.prototype,"size",void 0),ce([o()],de.prototype,"label",void 0),ce([o()],de.prototype,"loadingLabel",void 0),ce([o()],de.prototype,"charsStart",void 0),ce([o()],de.prototype,"charsEnd",void 0),ce([o()],de.prototype,"namespace",void 0),ce([w()],de.prototype,"caipAddress",void 0);let ue=class extends de{};ue=ce([n("w3m-button")],ue);let pe=class extends de{};pe=ce([n("appkit-button")],pe);const he=e`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var we=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let me=class extends a{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return s`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const e={primary:"invert",secondary:"accent-primary"};return this.loading?s`<wui-loading-spinner
      color=${e[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:s` <wui-text variant=${{lg:"lg-regular",md:"md-regular",sm:"sm-regular"}[this.size]} color=${e[this.variant]}>
        ${this.text}
      </wui-text>`}};me.styles=[t,i,he],we([o()],me.prototype,"size",void 0),we([o()],me.prototype,"variant",void 0),we([o({type:Boolean})],me.prototype,"loading",void 0),we([o()],me.prototype,"text",void 0),me=we([n("wui-connect-button")],me);var ge=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};class be extends a{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=h.state.open,this.loading=this.namespace?h.state.loadingNamespaceMap.get(this.namespace):h.state.loading,this.unsubscribe.push(h.subscribe((e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s`
      <wui-connect-button
        size=${r(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?h.close():this.loading||h.open({view:"Connect",namespace:this.namespace})}}ge([o()],be.prototype,"size",void 0),ge([o()],be.prototype,"label",void 0),ge([o()],be.prototype,"loadingLabel",void 0),ge([o()],be.prototype,"namespace",void 0),ge([w()],be.prototype,"open",void 0),ge([w()],be.prototype,"loading",void 0);let fe=class extends be{};fe=ge([n("w3m-connect-button")],fe);let ve=class extends be{};ve=ge([n("appkit-connect-button")],ve);const ye=e`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var xe=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let $e=class extends a{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){return s`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${{sm:"sm-regular",md:"md-regular",lg:"lg-regular"}[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?s` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?s`<wui-image src=${this.imageSrc}></wui-image>`:s` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};$e.styles=[t,i,ye],xe([o()],$e.prototype,"imageSrc",void 0),xe([o({type:Boolean})],$e.prototype,"isUnsupportedChain",void 0),xe([o({type:Boolean})],$e.prototype,"disabled",void 0),xe([o()],$e.prototype,"size",void 0),$e=xe([n("wui-network-button")],$e);const ke=m`
  :host {
    display: block;
    width: max-content;
  }
`;var Ce=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};class Se extends a{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=l.state.activeCaipNetwork,this.networkImage=u.getNetworkImage(this.network),this.caipAddress=l.state.activeCaipAddress,this.loading=h.state.loading,this.isSupported=!!c.state.allowUnsupportedChain||!l.state.activeChain||l.checkIfSupportedNetwork(l.state.activeChain),this.unsubscribe.push(d.subscribeNetworkImages((()=>{this.networkImage=u.getNetworkImage(this.network)})),l.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),l.subscribeKey("activeCaipNetwork",(e=>{var t;this.network=e,this.networkImage=u.getNetworkImage(e),this.isSupported=!(null==e?void 0:e.chainNamespace)||l.checkIfSupportedNetwork(e.chainNamespace),u.fetchNetworkImage(null==(t=null==e?void 0:e.assets)?void 0:t.imageId)})),h.subscribeKey("loading",(e=>this.loading=e)))}firstUpdated(){var e,t;u.fetchNetworkImage(null==(t=null==(e=this.network)?void 0:e.assets)?void 0:t.imageId)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||l.checkIfSupportedNetwork(this.network.chainNamespace);return s`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!c.state.allowUnsupportedChain&&!e}
        imageSrc=${r(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||c.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(g.sendEvent({type:"track",event:"CLICK_NETWORKS"}),h.open({view:"Networks"}))}}Se.styles=ke,Ce([o({type:Boolean})],Se.prototype,"disabled",void 0),Ce([o({type:String})],Se.prototype,"label",void 0),Ce([w()],Se.prototype,"network",void 0),Ce([w()],Se.prototype,"networkImage",void 0),Ce([w()],Se.prototype,"caipAddress",void 0),Ce([w()],Se.prototype,"loading",void 0),Ce([w()],Se.prototype,"isSupported",void 0);let Ee=class extends Se{};Ee=Ce([n("w3m-network-button")],Ee);let Re=class extends Se{};Re=Ce([n("appkit-network-button")],Re);const Te=e`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var Ae=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Ie=class extends a{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return s`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};Ie.styles=[t,i,Te],Ae([o()],Ie.prototype,"label",void 0),Ae([o()],Ie.prototype,"description",void 0),Ae([o()],Ie.prototype,"icon",void 0),Ie=Ae([n("wui-notice-card")],Ie);var Ne=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Oe=class extends a{constructor(){super(),this.unsubscribe=[],this.socialProvider=b.getConnectedSocialProvider(),this.socialUsername=b.getConnectedSocialUsername(),this.namespace=l.state.activeChain,this.unsubscribe.push(l.subscribeKey("activeChain",(e=>{this.namespace=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=f.getConnectorId(this.namespace),t=f.getAuthConnector();if(!t||e!==v.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=t.provider.getEmail()??"";return i||this.socialUsername?s`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||y.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};Ne([w()],Oe.prototype,"namespace",void 0),Oe=Ne([n("w3m-account-auth-button")],Oe);var Pe=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let je=class extends a{constructor(){var e,t,i;super(),this.usubscribe=[],this.networkImages=d.state.networkImages,this.address=null==(e=l.getAccountData())?void 0:e.address,this.profileImage=null==(t=l.getAccountData())?void 0:t.profileImage,this.profileName=null==(i=l.getAccountData())?void 0:i.profileName,this.network=l.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=c.state.remoteFeatures,this.usubscribe.push(l.subscribeChainProp("accountState",(e=>{e&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)})),l.subscribeKey("activeCaipNetwork",(e=>{(null==e?void 0:e.id)&&(this.network=e)})),c.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){var e,t,i;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const o=this.networkImages[(null==(t=null==(e=this.network)?void 0:e.assets)?void 0:t.imageId)??""];return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${r(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${M.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${r(o)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${(null==(i=this.network)?void 0:i.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var e;const t=null==(e=this.network)?void 0:e.chainNamespace,i=f.getConnectorId(t),o=f.getAuthConnector();return l.checkIfNamesSupported()&&o&&i===v.CONNECTOR_ID.AUTH&&!this.profileName?s`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){var e;const t=f.getConnectorId(null==(e=this.network)?void 0:e.chainNamespace),i=f.getAuthConnector(),{origin:o}=location;return!i||t!==v.CONNECTOR_ID.AUTH||o.includes(x.SECURE_SITE)?null:s`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=l.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=null==e?void 0:e.find((({id:e})=>{var t;return e===(null==(t=this.network)?void 0:t.id)}));return t||!i}onCopyAddress(){try{this.address&&(p.copyToClopboard(this.address),$.showSuccess("Address copied"))}catch{$.showError("Failed to copy")}}smartAccountSettingsTemplate(){var e;const t=null==(e=this.network)?void 0:e.chainNamespace,i=l.checkIfSmartAccountEnabled(),o=f.getConnectorId(t);return f.getAuthConnector()&&o===v.CONNECTOR_ID.AUTH&&i?s`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `:null}onChooseName(){y.push("ChooseAccountName")}onNetworks(){this.isAllowedNetworkSwitch()&&y.push("Networks")}async onDisconnect(){var e,t;try{this.disconnecting=!0;const i=null==(e=this.network)?void 0:e.chainNamespace,o=k.getConnections(i).length>0,n=i&&f.state.activeConnectorIds[i],a=null==(t=this.remoteFeatures)?void 0:t.multiWallet;await k.disconnect(a?{id:n,namespace:i}:{}),o&&a&&(y.push("ProfileWallets"),$.showSuccess("Wallet deleted"))}catch{g.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),$.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){g.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),y.push("UpgradeEmailWallet")}onSmartAccountSettings(){y.push("SmartAccountSettings")}};Pe([w()],je.prototype,"address",void 0),Pe([w()],je.prototype,"profileImage",void 0),Pe([w()],je.prototype,"profileName",void 0),Pe([w()],je.prototype,"network",void 0),Pe([w()],je.prototype,"disconnecting",void 0),Pe([w()],je.prototype,"remoteFeatures",void 0),je=Pe([n("w3m-account-settings-view")],je);const De=e`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var Le=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const We={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ze={lg:"md",md:"sm",sm:"sm"};let Ue=class extends a{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return s`
      <button data-active=${this.active}>
        ${this.icon?s`<wui-icon size=${ze[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${We[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Ue.styles=[t,i,De],Le([o()],Ue.prototype,"icon",void 0),Le([o()],Ue.prototype,"size",void 0),Le([o()],Ue.prototype,"label",void 0),Le([o({type:Boolean})],Ue.prototype,"active",void 0),Ue=Le([n("wui-tab-item")],Ue);const _e=e`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Be=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Fe=class extends a{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map(((e,t)=>{var i;const o=t===this.activeTab;return s`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${null==(i=e.label)?void 0:i.toLowerCase()}"
        ></wui-tab-item>
      `}))}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};Fe.styles=[t,i,_e],Be([o({type:Array})],Fe.prototype,"tabs",void 0),Be([o()],Fe.prototype,"onTabChange",void 0),Be([o()],Fe.prototype,"size",void 0),Be([w()],Fe.prototype,"activeTab",void 0),Fe=Be([n("wui-tabs")],Fe);const Me=e`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Ve=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Ke=class extends a{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return s`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?s`<wui-icon
          size=${r(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:s`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return s`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return s`
      <wui-text variant="lg-regular" color="primary">
        ${M.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return s`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};Ke.styles=[t,i,Me],Ve([o()],Ke.prototype,"address",void 0),Ve([o()],Ke.prototype,"profileName",void 0),Ve([o()],Ke.prototype,"alt",void 0),Ve([o()],Ke.prototype,"imageSrc",void 0),Ve([o()],Ke.prototype,"icon",void 0),Ve([o()],Ke.prototype,"iconSize",void 0),Ve([o({type:Boolean})],Ke.prototype,"loading",void 0),Ve([o({type:Number})],Ke.prototype,"charsStart",void 0),Ve([o({type:Number})],Ke.prototype,"charsEnd",void 0),Ke=Ve([n("wui-wallet-switch")],Ke);const qe=e`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var He=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Ge=class extends a{constructor(){var e,t,i,o,n,a;super(),this.unsubscribe=[],this.caipAddress=null==(e=l.getAccountData())?void 0:e.caipAddress,this.address=p.getPlainAddress(null==(t=l.getAccountData())?void 0:t.caipAddress),this.profileImage=null==(i=l.getAccountData())?void 0:i.profileImage,this.profileName=null==(o=l.getAccountData())?void 0:o.profileName,this.disconnecting=!1,this.balance=null==(n=l.getAccountData())?void 0:n.balance,this.balanceSymbol=null==(a=l.getAccountData())?void 0:a.balanceSymbol,this.features=c.state.features,this.remoteFeatures=c.state.remoteFeatures,this.namespace=l.state.activeChain,this.activeConnectorIds=f.state.activeConnectorIds,this.unsubscribe.push(l.subscribeChainProp("accountState",(e=>{this.address=p.getPlainAddress(null==e?void 0:e.caipAddress),this.caipAddress=null==e?void 0:e.caipAddress,this.balance=null==e?void 0:e.balance,this.balanceSymbol=null==e?void 0:e.balanceSymbol,this.profileName=null==e?void 0:e.profileName,this.profileImage=null==e?void 0:e.profileImage})),c.subscribeKey("features",(e=>this.features=e)),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)),f.subscribeKey("activeConnectorIds",(e=>{this.activeConnectorIds=e})),l.subscribeKey("activeChain",(e=>this.namespace=e)),l.subscribeKey("activeCaipNetwork",(e=>{(null==e?void 0:e.chainNamespace)&&(this.namespace=null==e?void 0:e.chainNamespace)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?f.getConnectorById(e):void 0,i=u.getConnectorImage(t),{value:o,decimals:n,symbol:a}=p.parseBalance(this.balance,this.balanceSymbol);return s`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${r(this.caipAddress)}
          address=${r(p.getPlainAddress(this.caipAddress))}
          imageSrc=${r(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${i}
          alt=${null==t?void 0:t.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${o}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${n}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${a}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){var e,t;if(!this.namespace)return null;const i=x.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),o=Boolean(null==(e=this.features)?void 0:e.receive),n=(null==(t=this.remoteFeatures)?void 0:t.onramp)&&i,a=H.isPayWithExchangeEnabled();return n||o||a?s`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){var e;return((null==(e=this.features)?void 0:e.walletFeaturesOrder)||x.DEFAULT_FEATURES.walletFeaturesOrder).map((e=>{switch(e){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}activityTemplate(){var e;return this.namespace&&(null==(e=this.remoteFeatures)?void 0:e.activity)&&x.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?s` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var e;const t=null==(e=this.remoteFeatures)?void 0:e.swaps,i=l.state.activeChain===v.CHAIN.EVM;return t&&i?s`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){var e;const t=null==(e=this.features)?void 0:e.send,i=l.state.activeChain;if(!i)throw new Error("SendController:sendTemplate - namespace is required");const o=x.SEND_SUPPORTED_NAMESPACES.includes(i);return t&&o?s`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=l.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const t=f.getConnectorId(e),i=f.getAuthConnector(),{origin:o}=location;return!i||t!==v.CONNECTOR_ID.AUTH||o.includes(x.SECURE_SITE)?null:s`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){y.push("FundWallet")}handleClickSwap(){y.push("Swap")}handleClickSend(){y.push("WalletSend")}explorerBtnTemplate(){var e;return(null==(e=l.getAccountData())?void 0:e.addressExplorerUrl)?s`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){g.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:C(l.state.activeChain)===S.ACCOUNT_TYPES.SMART_ACCOUNT}}),y.push("Transactions")}async onDisconnect(){var e;try{this.disconnecting=!0;const t=k.getConnections(this.namespace).length>0,i=this.namespace&&f.state.activeConnectorIds[this.namespace],o=null==(e=this.remoteFeatures)?void 0:e.multiWallet;await k.disconnect(o?{id:i,namespace:this.namespace}:{}),t&&o&&(y.push("ProfileWallets"),$.showSuccess("Wallet deleted"))}catch{g.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),$.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){var e;const t=null==(e=l.getAccountData())?void 0:e.addressExplorerUrl;t&&p.openHref(t,"_blank")}onGoToUpgradeView(){g.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),y.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){y.push("ProfileWallets")}};Ge.styles=qe,He([w()],Ge.prototype,"caipAddress",void 0),He([w()],Ge.prototype,"address",void 0),He([w()],Ge.prototype,"profileImage",void 0),He([w()],Ge.prototype,"profileName",void 0),He([w()],Ge.prototype,"disconnecting",void 0),He([w()],Ge.prototype,"balance",void 0),He([w()],Ge.prototype,"balanceSymbol",void 0),He([w()],Ge.prototype,"features",void 0),He([w()],Ge.prototype,"remoteFeatures",void 0),He([w()],Ge.prototype,"namespace",void 0),He([w()],Ge.prototype,"activeConnectorIds",void 0),Ge=He([n("w3m-account-default-widget")],Ge);const Ye=e`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var Xe=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Qe=class extends a{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return s`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Qe.styles=[t,Ye],Xe([o()],Qe.prototype,"dollars",void 0),Xe([o()],Qe.prototype,"pennies",void 0),Qe=Xe([n("wui-balance")],Qe);const Je=e`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Ze=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const et={sm:"sm-regular",md:"md-regular"};let tt=class extends a{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,s`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${et[this.size]}>${this.message}</wui-text>`}};tt.styles=[t,i,Je],Ze([o()],tt.prototype,"placement",void 0),Ze([o()],tt.prototype,"variant",void 0),Ze([o()],tt.prototype,"size",void 0),Ze([o()],tt.prototype,"message",void 0),tt=Ze([n("wui-tooltip")],tt);const it=m`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let ot=class extends a{render(){return s`<w3m-activity-list page="account"></w3m-activity-list>`}};ot.styles=it,ot=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-account-activity-widget")],ot);const nt=e`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var at=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let rt=class extends a{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return s`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?s`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?s`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};rt.styles=[t,i,nt],at([o()],rt.prototype,"icon",void 0),at([o()],rt.prototype,"text",void 0),at([o()],rt.prototype,"description",void 0),at([o()],rt.prototype,"tag",void 0),at([o({type:Boolean})],rt.prototype,"disabled",void 0),rt=at([n("wui-list-description")],rt);const st=m`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var lt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let ct=class extends a{constructor(){var e;super(),this.unsubscribe=[],this.tokenBalance=null==(e=l.getAccountData())?void 0:e.tokenBalance,this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(l.subscribeChainProp("accountState",(e=>{this.tokenBalance=null==e?void 0:e.tokenBalance})),c.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&(null==(e=this.tokenBalance)?void 0:e.length)>0?s`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:s` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var e;return(null==(e=this.remoteFeatures)?void 0:e.onramp)?s`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:s``}tokenItemTemplate(){var e;return null==(e=this.tokenBalance)?void 0:e.map((e=>s`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){y.push("WalletReceive")}onBuyClick(){g.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:C(l.state.activeChain)===S.ACCOUNT_TYPES.SMART_ACCOUNT}}),y.push("OnRampProviders")}};ct.styles=st,lt([w()],ct.prototype,"tokenBalance",void 0),lt([w()],ct.prototype,"remoteFeatures",void 0),ct=lt([n("w3m-account-tokens-widget")],ct);const dt=e`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var ut=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let pt=class extends a{constructor(){var e,t,i,o;super(...arguments),this.unsubscribe=[],this.network=l.state.activeCaipNetwork,this.profileName=null==(e=l.getAccountData())?void 0:e.profileName,this.address=null==(t=l.getAccountData())?void 0:t.address,this.currentTab=null==(i=l.getAccountData())?void 0:i.currentTab,this.tokenBalance=null==(o=l.getAccountData())?void 0:o.tokenBalance,this.features=c.state.features,this.namespace=l.state.activeChain,this.activeConnectorIds=f.state.activeConnectorIds,this.remoteFeatures=c.state.remoteFeatures}firstUpdated(){l.fetchTokenBalance(),this.unsubscribe.push(l.subscribeChainProp("accountState",(e=>{(null==e?void 0:e.address)?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):h.close()})),f.subscribeKey("activeConnectorIds",(e=>{this.activeConnectorIds=e})),l.subscribeKey("activeChain",(e=>this.namespace=e)),l.subscribeKey("activeCaipNetwork",(e=>this.network=e)),c.subscribeKey("features",(e=>this.features=e)),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?f.getConnectorById(e):void 0,{icon:i,iconSize:o}=this.getAuthData();return s`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${i}
          iconSize=${o}
          alt=${null==t?void 0:t.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var e;const t=(null==(e=this.features)?void 0:e.walletFeaturesOrder)||x.DEFAULT_FEATURES.walletFeaturesOrder;if(t.every((e=>{var t,i;return"send"===e||"receive"===e?!(null==(t=this.features)?void 0:t[e]):"swaps"!==e&&"onramp"!==e||!(null==(i=this.remoteFeatures)?void 0:i[e])})))return null;const i=t.map((e=>"receive"===e||"onramp"===e?"fund":e)),o=[...new Set(i)];return s`<wui-flex gap="2">
      ${o.map((e=>{switch(e){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}
    </wui-flex>`}fundWalletTemplate(){var e,t;if(!this.namespace)return null;const i=x.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),o=null==(e=this.features)?void 0:e.receive,n=(null==(t=this.remoteFeatures)?void 0:t.onramp)&&i,a=H.isPayWithExchangeEnabled();return n||o||a?s`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){var e;const t=null==(e=this.remoteFeatures)?void 0:e.swaps,i=l.state.activeChain===v.CHAIN.EVM;return t&&i?s`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){var e;const t=null==(e=this.features)?void 0:e.send,i=l.state.activeChain,o=x.SEND_SUPPORTED_NAMESPACES.includes(i);return t&&o?s`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval((()=>l.fetchTokenBalance((e=>this.onTokenBalanceError(e)))),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===v.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?s`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?s`<w3m-account-activity-widget></w3m-account-activity-widget>`:s`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&(null==(e=this.tokenBalance)?void 0:e.length)>=0){const e=p.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=p.formatTokenBalance(e);return s`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return s`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=q.getTabsByNamespace(l.state.activeChain);return 0===e.length?null:s`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){l.setAccountProp("currentTab",e,this.namespace)}onFundWalletClick(){y.push("FundWallet")}onSwapClick(){var e,t,i;(null==(e=this.network)?void 0:e.caipNetworkId)&&!x.SWAP_SUPPORTED_NETWORKS.includes(null==(t=this.network)?void 0:t.caipNetworkId)?y.push("UnsupportedChain",{swapUnsupportedChain:!0}):(g.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:(null==(i=this.network)?void 0:i.caipNetworkId)||"",isSmartAccount:C(l.state.activeChain)===S.ACCOUNT_TYPES.SMART_ACCOUNT}}),y.push("Swap"))}getAuthData(){const e=b.getConnectedSocialProvider(),t=b.getConnectedSocialUsername(),i=f.getAuthConnector(),o=(null==i?void 0:i.provider.getEmail())??"";return{name:E.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){y.push("ProfileWallets")}onSendClick(){var e;g.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:(null==(e=this.network)?void 0:e.caipNetworkId)||"",isSmartAccount:C(l.state.activeChain)===S.ACCOUNT_TYPES.SMART_ACCOUNT}}),y.push("WalletSend")}};pt.styles=dt,ut([w()],pt.prototype,"watchTokenBalance",void 0),ut([w()],pt.prototype,"network",void 0),ut([w()],pt.prototype,"profileName",void 0),ut([w()],pt.prototype,"address",void 0),ut([w()],pt.prototype,"currentTab",void 0),ut([w()],pt.prototype,"tokenBalance",void 0),ut([w()],pt.prototype,"features",void 0),ut([w()],pt.prototype,"namespace",void 0),ut([w()],pt.prototype,"activeConnectorIds",void 0),ut([w()],pt.prototype,"remoteFeatures",void 0),pt=ut([n("w3m-account-wallet-features-widget")],pt);var ht=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let wt=class extends a{constructor(){super(),this.unsubscribe=[],this.namespace=l.state.activeChain,this.unsubscribe.push(l.subscribeKey("activeChain",(e=>{this.namespace=e})))}render(){if(!this.namespace)return null;const e=f.getConnectorId(this.namespace),t=f.getAuthConnector();return s`
      ${t&&e===v.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return s`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return s`<w3m-account-default-widget></w3m-account-default-widget>`}};ht([w()],wt.prototype,"namespace",void 0),wt=ht([n("w3m-account-view")],wt);const mt=e`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var gt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let bt=class extends a{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return s`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return s`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?s`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return s` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?s`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?s`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:s`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:s`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map((e=>this.labelAndTagTemplate(e)))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:i,description:o,enableButton:n,buttonType:a,buttonLabel:r,buttonVariant:l,tagVariant:c,tagLabel:d,alignItems:u="flex-end"}){return s`
      <wui-flex justifyContent="space-between" alignItems=${u} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${i?s`<wui-text variant="sm-medium" color="secondary">${i}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${M.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${c&&d?s`<wui-tag variant=${c} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${o?s`<wui-text variant="sm-regular" color="secondary">${o}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:a,buttonLabel:r,buttonVariant:l}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:i}){return s`
      <wui-button
        size="sm"
        variant=${i}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};bt.styles=[t,i,mt],gt([o()],bt.prototype,"address",void 0),gt([o()],bt.prototype,"profileName",void 0),gt([o({type:Array})],bt.prototype,"content",void 0),gt([o()],bt.prototype,"alt",void 0),gt([o()],bt.prototype,"imageSrc",void 0),gt([o()],bt.prototype,"icon",void 0),gt([o()],bt.prototype,"iconSize",void 0),gt([o()],bt.prototype,"iconBadge",void 0),gt([o()],bt.prototype,"iconBadgeSize",void 0),gt([o()],bt.prototype,"buttonVariant",void 0),gt([o({type:Boolean})],bt.prototype,"enableMoreButton",void 0),gt([o({type:Number})],bt.prototype,"charsStart",void 0),gt([o({type:Number})],bt.prototype,"charsEnd",void 0),bt=gt([n("wui-active-profile-wallet-item")],bt);const ft=e`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var vt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let yt=class extends a{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return s`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?s`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?s`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:s`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return s`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${M.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return s`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${r(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};yt.styles=[t,i,ft],vt([o()],yt.prototype,"address",void 0),vt([o()],yt.prototype,"profileName",void 0),vt([o()],yt.prototype,"alt",void 0),vt([o()],yt.prototype,"buttonLabel",void 0),vt([o()],yt.prototype,"buttonVariant",void 0),vt([o()],yt.prototype,"imageSrc",void 0),vt([o()],yt.prototype,"icon",void 0),vt([o()],yt.prototype,"iconSize",void 0),vt([o()],yt.prototype,"iconBadge",void 0),vt([o()],yt.prototype,"iconBadgeSize",void 0),vt([o()],yt.prototype,"rightIcon",void 0),vt([o()],yt.prototype,"rightIconSize",void 0),vt([o({type:Boolean})],yt.prototype,"loading",void 0),vt([o({type:Number})],yt.prototype,"charsStart",void 0),vt([o({type:Number})],yt.prototype,"charsEnd",void 0),yt=vt([n("wui-inactive-profile-wallet-item")],yt);const xt={getAuthData(e){var t,i;const o=e.connectorId===v.CONNECTOR_ID.AUTH;if(!o)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const n=(null==(t=null==e?void 0:e.auth)?void 0:t.name)??b.getConnectedSocialProvider(),a=(null==(i=null==e?void 0:e.auth)?void 0:i.username)??b.getConnectedSocialUsername(),r=f.getAuthConnector(),s=(null==r?void 0:r.provider.getEmail())??"";return{isAuth:!0,icon:n??"mail",iconSize:n?"xl":"md",name:o?E.getAuthName({email:s,socialUsername:a,socialProvider:n}):void 0}}},$t=e`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var kt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const Ct=4,St=6,Et="md",Rt="lightbulb",Tt=[0,1],At={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},It=[{namespace:"eip155",icon:At.eip155,label:"EVM"},{namespace:"solana",icon:At.solana,label:"Solana"},{namespace:"bip122",icon:At.bip122,label:"Bitcoin"},{namespace:"ton",icon:At.ton,label:"Ton"}],Nt={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"},ton:{title:"Add TON Wallet",description:"Add your first TON wallet"}};let Ot=class extends a{constructor(){var e,t,i;super(),this.unsubscribers=[],this.currentTab=0,this.namespace=l.state.activeChain,this.namespaces=Array.from(l.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=f.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=l.state.activeCaipNetwork,this.user=null==(e=l.getAccountData())?void 0:e.user,this.remoteFeatures=c.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=null==(t=l.getAccountData(this.namespace))?void 0:t.caipAddress,this.profileName=null==(i=l.getAccountData(this.namespace))?void 0:i.profileName,this.unsubscribers.push(k.subscribeKey("connections",(()=>this.onConnectionsChange())),k.subscribeKey("recentConnections",(()=>this.requestUpdate())),f.subscribeKey("activeConnectorIds",(e=>{this.activeConnectorIds=e})),l.subscribeKey("activeCaipNetwork",(e=>this.caipNetwork=e)),l.subscribeChainProp("accountState",(e=>{this.user=null==e?void 0:e.user})),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e))),this.chainListener=l.subscribeChainProp("accountState",(e=>{this.caipAddress=null==e?void 0:e.caipAddress,this.profileName=null==e?void 0:e.profileName}),this.namespace)}disconnectedCallback(){var e,t;this.unsubscribers.forEach((e=>e())),null==(e=this.resizeObserver)||e.disconnect(),this.removeScrollListener(),null==(t=this.chainListener)||t.call(this)}firstUpdated(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".wallet-list");if(!t)return;const i=()=>this.updateScrollOpacity(t);requestAnimationFrame(i),t.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(t),i()}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return s`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=It.filter((e=>this.namespaces.includes(e.namespace)));return e.length>1?s`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const t=this.getActiveConnections(e).flatMap((({accounts:e})=>e)).length+(this.caipAddress?1:0);return s`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${At[e]??At.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>k.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const t=this.hasAnyConnections(e);return s`
      <wui-flex flexDirection="column" class=${R({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const t=this.getActiveConnections(e),i=this.activeConnectorIds[e],o=this.getPlainAddress();return s`
      ${o||i||t.length>0?s`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const t=this.activeConnectorIds[e];if(!t)return null;const{connections:i}=T.getConnectionsData(e),o=f.getConnectorById(t),n=u.getConnectorImage(o),a=this.getPlainAddress();if(!a)return null;const r=e===v.CHAIN.BITCOIN,l=xt.getAuthData({connectorId:t,accounts:[]}),c=this.getActiveConnections(e).flatMap((e=>e.accounts)).length>0,d=i.find((e=>e.connectorId===t)),p=null==d?void 0:d.accounts.filter((e=>!A.isLowerCaseMatch(e.address,a)));return s`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${a}
          alt=${null==o?void 0:o.name}
          .content=${this.getProfileContent({address:a,connections:i,connectorId:t,namespace:e})}
          .charsStart=${Ct}
          .charsEnd=${St}
          .icon=${l.icon}
          .iconSize=${l.iconSize}
          .iconBadge=${this.isSmartAccount(a)?Rt:void 0}
          .iconBadgeSize=${this.isSmartAccount(a)?Et:void 0}
          imageSrc=${n}
          ?enableMoreButton=${l.isAuth}
          @copy=${()=>this.handleCopyAddress(a)}
          @disconnect=${()=>this.handleDisconnect(e,t)}
          @switch=${()=>{r&&d&&(null==p?void 0:p[0])&&this.handleSwitchWallet(d,p[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(a)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${c?s`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const t=this.getActiveConnections(e);return 0===t.length?null:s`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:t}=T.getConnectionsData(e);return 0===t.flatMap((e=>e.accounts)).length?null:s`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,i){return e.filter((e=>e.accounts.length>0)).map(((e,o)=>{const n=f.getConnectorById(e.connectorId),a=u.getConnectorImage(n)??"",r=xt.getAuthData(e);return e.accounts.map(((n,l)=>{const c=0!==o||0!==l,d=this.isAccountLoading(e.connectorId,n.address);return s`
            <wui-flex flexDirection="column">
              ${c?s`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${n.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral-secondary":"accent-secondary"}
                rightIcon=${t?"bin":"power"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(n.address)?Rt:void 0}
                .iconBadgeSize=${this.isSmartAccount(n.address)?Et:void 0}
                .icon=${r.icon}
                .iconSize=${r.iconSize}
                .loading=${d}
                .showBalance=${!1}
                .charsStart=${Ct}
                .charsEnd=${St}
                @buttonClick=${()=>this.handleSwitchWallet(e,n.address,i)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:n.address,isRecentConnection:t,namespace:i})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `}))}))}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress)return null;if(!this.hasAnyConnections(e))return null;const{title:t}=this.getChainLabelInfo(e);return s`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:t,description:i}=this.getChainLabelInfo(e);return s`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${i}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){var t,i,o;const n=this.namespaces[e];n&&(null==(t=this.chainListener)||t.call(this),this.currentTab=this.namespaces.indexOf(n),this.namespace=n,this.caipAddress=null==(i=l.getAccountData(n))?void 0:i.caipAddress,this.profileName=null==(o=l.getAccountData(n))?void 0:o.profileName,this.chainListener=l.subscribeChainProp("accountState",(e=>{this.caipAddress=null==e?void 0:e.caipAddress}),n))}async handleSwitchWallet(e,t,i){var o;try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,(null==(o=this.caipNetwork)?void 0:o.chainNamespace)!==i&&(null==e?void 0:e.caipNetwork)&&(f.setFilterByNamespace(i),await l.switchActiveNetwork(null==e?void 0:e.caipNetwork)),await k.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?$.showSuccess("Wallet switched"):e&&$.showSuccess("Account switched")}})}catch(n){$.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:t,address:i,isRecentConnection:o,namespace:n}=e;o?(b.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:n}),k.syncStorageConnections(),$.showSuccess("Wallet deleted")):this.handleDisconnect(n,t.connectorId)}async handleDisconnect(e,t){try{await k.disconnect({id:t,namespace:e}),$.showSuccess("Wallet disconnected")}catch{$.showError("Failed to disconnect wallet")}}handleCopyAddress(e){p.copyToClopboard(e),$.showSuccess("Address copied")}handleMore(){y.push("AccountSettings")}handleExternalLink(e){var t,i;const o=null==(i=null==(t=this.caipNetwork)?void 0:t.blockExplorers)?void 0:i.default.url;o&&p.openHref(`${o}/address/${e}`,"_blank")}handleAddConnection(e){f.setFilterByNamespace(e),y.push("Connect",{addWalletForNamespace:e})}getChainLabelInfo(e){return Nt[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){var t,i;if(!this.namespace)return!1;const o=null==(i=null==(t=this.user)?void 0:t.accounts)?void 0:i.find((e=>"smartAccount"===e.type));return!(!o||!e)&&A.isLowerCaseMatch(o.address,e)}getPlainAddress(){return this.caipAddress?p.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const t=this.activeConnectorIds[e],{connections:i}=T.getConnectionsData(e),[o]=i.filter((e=>A.isLowerCaseMatch(e.connectorId,t)));if(!t)return i;const n=e===v.CHAIN.BITCOIN,{address:a}=this.caipAddress?I.parseCaipAddress(this.caipAddress):{};let r=[...a?[a]:[]];return n&&o&&(r=o.accounts.map((e=>e.address))||[]),T.excludeConnectorAddressFromConnections({connectorId:t,addresses:r,connections:i})}hasAnyConnections(e){const t=this.getActiveConnections(e),{recentConnections:i}=T.getConnectionsData(e);return Boolean(this.caipAddress)||t.length>0||i.length>0}isAccountLoading(e,t){return A.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&A.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){const{address:t,connections:i,connectorId:o,namespace:n}=e,[a]=i.filter((e=>A.isLowerCaseMatch(e.connectorId,o)));if(n===v.CHAIN.BITCOIN&&(null==a?void 0:a.accounts.every((e=>"string"==typeof e.type))))return this.getBitcoinProfileContent(a.accounts,t);const r=xt.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...r.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){const i=e.length>1,o=this.getPlainAddress();return e.map((e=>{const n=A.isLowerCaseMatch(e.address,o);let a="PAYMENT";return"ordinal"===e.type&&(a="ORDINALS"),{address:e.address,tagLabel:A.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:A.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:a,alignItems:"flex-end",buttonType:n?"disconnect":"switch",buttonLabel:n?"Disconnect":"Switch",buttonVariant:n?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}}))}removeScrollListener(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".wallet-list");t&&t.removeEventListener("scroll",(()=>this.handleConnectListScroll()))}handleConnectListScroll(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".wallet-list");t&&this.updateScrollOpacity(t)}isMultiWalletEnabled(){var e;return Boolean(null==(e=this.remoteFeatures)?void 0:e.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",G.interpolate([0,50],Tt,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",G.interpolate([0,50],Tt,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=T.getConnectionsData(this.namespace);0===e.length&&y.reset("ProfileWallets")}this.requestUpdate()}};Ot.styles=$t,kt([w()],Ot.prototype,"currentTab",void 0),kt([w()],Ot.prototype,"namespace",void 0),kt([w()],Ot.prototype,"namespaces",void 0),kt([w()],Ot.prototype,"caipAddress",void 0),kt([w()],Ot.prototype,"profileName",void 0),kt([w()],Ot.prototype,"activeConnectorIds",void 0),kt([w()],Ot.prototype,"lastSelectedAddress",void 0),kt([w()],Ot.prototype,"lastSelectedConnectorId",void 0),kt([w()],Ot.prototype,"isSwitching",void 0),kt([w()],Ot.prototype,"caipNetwork",void 0),kt([w()],Ot.prototype,"user",void 0),kt([w()],Ot.prototype,"remoteFeatures",void 0),Ot=kt([n("w3m-profile-wallets-view")],Ot);var Pt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let jt=class extends a{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=l.state.activeCaipNetwork,this.features=c.state.features,this.remoteFeatures=c.state.remoteFeatures,this.exchangesLoading=H.state.isLoading,this.exchanges=H.state.exchanges,this.unsubscribe.push(c.subscribeKey("features",(e=>this.features=e)),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)),l.subscribeKey("activeCaipNetwork",(e=>{this.activeCaipNetwork=e,this.setDefaultPaymentAsset()})),H.subscribeKey("isLoading",(e=>this.exchangesLoading=e)),H.subscribeKey("exchanges",(e=>this.exchanges=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}async firstUpdated(){H.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await H.fetchExchanges())}render(){return s`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;const e=await H.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),t=e.find((e=>"USDC"===e.metadata.symbol))||e[0];t&&H.setPaymentAsset(t)}onrampTemplate(){var e;if(!this.activeCaipNetwork)return null;const t=null==(e=this.remoteFeatures)?void 0:e.onramp,i=x.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return t&&i?s`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `:null}depositFromExchangeTemplate(){return this.activeCaipNetwork&&H.isPayWithExchangeSupported()?s`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `:null}receiveTemplate(){var e;return Boolean(null==(e=this.features)?void 0:e.receive)?s`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `:null}onBuyCrypto(){y.push("OnRampProviders")}onReceive(){y.push("WalletReceive")}onDepositFromExchange(){var e;H.reset(),y.push("PayWithExchange",{redirectView:null==(e=y.state.data)?void 0:e.redirectView})}};Pt([w()],jt.prototype,"activeCaipNetwork",void 0),Pt([w()],jt.prototype,"features",void 0),Pt([w()],jt.prototype,"remoteFeatures",void 0),Pt([w()],jt.prototype,"exchangesLoading",void 0),Pt([w()],jt.prototype,"exchanges",void 0),jt=Pt([n("w3m-fund-wallet-view")],jt);const Dt=e`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var Lt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Wt=class extends a{constructor(){super(...arguments),this.inputElementRef=Y(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return s`
      <label data-size=${this.size}>
        <input
          ${X(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:null==(e=this.inputElementRef.value)?void 0:e.checked,bubbles:!0,composed:!0}))}};Wt.styles=[t,i,Dt],Lt([o({type:Boolean})],Wt.prototype,"checked",void 0),Lt([o({type:Boolean})],Wt.prototype,"disabled",void 0),Lt([o()],Wt.prototype,"size",void 0),Wt=Lt([n("wui-toggle")],Wt);const zt=e`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Ut=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let _t=class extends a{constructor(){super(...arguments),this.checked=!1}render(){return s`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};_t.styles=[t,i,zt],Ut([o({type:Boolean})],_t.prototype,"checked",void 0),_t=Ut([n("wui-certified-switch")],_t);const Bt=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var Ft=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Mt=class extends a{constructor(){super(...arguments),this.inputComponentRef=Y(),this.inputValue=""}render(){return s`
      <wui-input-text
        ${X(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?s`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=null==e?void 0:e.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};Mt.styles=[t,Bt],Ft([o()],Mt.prototype,"inputValue",void 0),Mt=Ft([n("wui-search-bar")],Mt);const Vt=e`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Kt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let qt=class extends a{constructor(){super(...arguments),this.type="wallet"}render(){return s`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?s` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Q}`:s`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};qt.styles=[t,i,Vt],Kt([o()],qt.prototype,"type",void 0),qt=Kt([n("wui-card-select-loader")],qt);const Ht=m`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Gt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Yt=class extends a{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&M.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&M.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&M.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&M.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&M.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&M.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&M.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&M.getSpacingStyles(this.margin,3)};\n    `,s`<slot></slot>`}};Yt.styles=[t,Ht],Gt([o()],Yt.prototype,"gridTemplateRows",void 0),Gt([o()],Yt.prototype,"gridTemplateColumns",void 0),Gt([o()],Yt.prototype,"justifyItems",void 0),Gt([o()],Yt.prototype,"alignItems",void 0),Gt([o()],Yt.prototype,"justifyContent",void 0),Gt([o()],Yt.prototype,"alignContent",void 0),Gt([o()],Yt.prototype,"columnGap",void 0),Gt([o()],Yt.prototype,"rowGap",void 0),Gt([o()],Yt.prototype,"gap",void 0),Gt([o()],Yt.prototype,"padding",void 0),Gt([o()],Yt.prototype,"margin",void 0),Yt=Gt([n("wui-grid")],Yt);const Xt=e`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Qt=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Jt=class extends a{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,t;const i="certified"===(null==(e=this.wallet)?void 0:e.badge_type);return s`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${r(i?"certified":void 0)}
            >${null==(t=this.wallet)?void 0:t.name}</wui-text
          >
          ${i?s`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():s`
      <wui-wallet-image
        size="lg"
        imageSrc=${r(this.imageSrc)}
        name=${r(null==(e=this.wallet)?void 0:e.name)}
        .installed=${(null==(t=this.wallet)?void 0:t.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return s`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=u.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await u.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,g.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:y.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Jt.styles=Xt,Qt([w()],Jt.prototype,"visible",void 0),Qt([w()],Jt.prototype,"imageSrc",void 0),Qt([w()],Jt.prototype,"imageLoading",void 0),Qt([w()],Jt.prototype,"isImpressed",void 0),Qt([o()],Jt.prototype,"explorerId",void 0),Qt([o()],Jt.prototype,"walletQuery",void 0),Qt([o()],Jt.prototype,"certified",void 0),Qt([o()],Jt.prototype,"displayIndex",void 0),Qt([o({type:Object})],Jt.prototype,"wallet",void 0),Jt=Qt([n("w3m-all-wallets-list-item")],Jt);const Zt=e`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var ei=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const ti="local-paginator";let ii=class extends a{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!N.state.wallets.length,this.wallets=N.state.wallets,this.recommended=N.state.recommended,this.featured=N.state.featured,this.filteredWallets=N.state.filteredWallets,this.mobileFullScreen=c.state.enableMobileFullScreen,this.unsubscribe.push(N.subscribeKey("wallets",(e=>this.wallets=e)),N.subscribeKey("recommended",(e=>this.recommended=e)),N.subscribeKey("featured",(e=>this.featured=e)),N.subscribeKey("filteredWallets",(e=>this.filteredWallets=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null==(e=this.paginationObserver)||e.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),s`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-grid");t&&(await N.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>s`
        <wui-card-select-loader type="wallet" id=${r(t)}></wui-card-select-loader>
      `))}getWallets(){var e;const t=[...this.featured,...this.recommended];(null==(e=this.filteredWallets)?void 0:e.length)>0?t.push(...this.filteredWallets):t.push(...this.wallets);const i=p.uniqueBy(t,"id"),o=O.markWalletsAsInstalled(i),n=O.filterWalletsByWcSupport(o);return O.markWalletsWithDisplayIndex(n)}walletsTemplate(){return this.getWallets().map(((e,t)=>s`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o,mobileFilteredOutWalletsLength:n}=N.state,a=window.innerWidth<352?3:4,r=e.length+t.length;let s=Math.ceil(r/a)*a-r+a;return s-=e.length?i.length%a:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o-(n??0)?this.shimmerTemplate(s,ti):null}createPaginationObserver(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(`#${ti}`);t&&(this.paginationObserver=new IntersectionObserver((([e])=>{if((null==e?void 0:e.isIntersecting)&&!this.loading){const{page:e,count:t,wallets:i}=N.state;i.length<t&&N.fetchWalletsByPage({page:e+1})}})),this.paginationObserver.observe(t))}onConnectWallet(e){f.selectWalletConnector(e)}};ii.styles=Zt,ei([w()],ii.prototype,"loading",void 0),ei([w()],ii.prototype,"wallets",void 0),ei([w()],ii.prototype,"recommended",void 0),ei([w()],ii.prototype,"featured",void 0),ei([w()],ii.prototype,"filteredWallets",void 0),ei([w()],ii.prototype,"badge",void 0),ei([w()],ii.prototype,"mobileFullScreen",void 0),ii=ei([n("w3m-all-wallets-list")],ii);const oi=m`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var ni=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let ai=class extends a{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=c.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?s`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=N.state,t=O.markWalletsAsInstalled(e),i=O.filterWalletsByWcSupport(t);return i.length?s`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(((e,t)=>s`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:s`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){f.selectWalletConnector(e)}};ai.styles=oi,ni([w()],ai.prototype,"loading",void 0),ni([w()],ai.prototype,"mobileFullScreen",void 0),ni([o()],ai.prototype,"query",void 0),ni([o()],ai.prototype,"badge",void 0),ai=ni([n("w3m-all-wallets-search")],ai);var ri=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let si=class extends a{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=p.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return s`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?s`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:s`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",$.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return p.isMobile()?s`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){y.push("ConnectingWalletConnect")}};ri([w()],si.prototype,"search",void 0),ri([w()],si.prototype,"badge",void 0),si=ri([n("w3m-all-wallets-view")],si);const li=e`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var ci=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let di=class extends a{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const e=`${this.size}-regular`;return s`
      <button ?disabled=${this.disabled} tabindex=${r(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};di.styles=[t,i,li],ci([o()],di.prototype,"text",void 0),ci([o({type:Boolean})],di.prototype,"disabled",void 0),ci([o()],di.prototype,"size",void 0),ci([o()],di.prototype,"icon",void 0),ci([o()],di.prototype,"tabIdx",void 0),di=ci([n("wui-list-button")],di);const ui=e`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var pi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let hi=class extends a{constructor(){super(),this.unsubscribe=[],this.formRef=Y(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=c.state.remoteFeatures,this.hasExceededUsageLimit=N.state.plan.hasExceededUsageLimit,this.unsubscribe.push(c.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e})),N.subscribeKey("plan",(e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){var e;null==(e=this.formRef.value)||e.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=k.hasAnyConnection(v.CONNECTOR_ID.AUTH);return s`
      <form ${X(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${r(this.tabIdx)}
          ?disabled=${e||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?s`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?s`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?s`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){var t;if(q.isValidEmail(this.email)){if(!v.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===l.state.activeChain))){const e=l.getFirstCaipNetworkSupportsAuthConnector();if(e)return void y.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const i=f.getAuthConnector();if(!i)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:o}=await i.provider.connectEmail({email:this.email});if(g.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===o)g.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),y.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===o)y.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===o){const e=null==(t=this.remoteFeatures)?void 0:t.multiWallet;await k.connectExternal(i,l.state.activeChain),e?(y.replace("ProfileWallets"),$.showSuccess("New Wallet Added")):y.replace("Account")}}catch(i){const e=p.parseError(i);(null==e?void 0:e.includes("Invalid email"))?this.error="Invalid email. Try again.":$.showError(i)}finally{this.loading=!1}}else P.open({displayMessage:j.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning")}onFocusEvent(){g.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};hi.styles=ui,pi([o()],hi.prototype,"tabIdx",void 0),pi([w()],hi.prototype,"email",void 0),pi([w()],hi.prototype,"loading",void 0),pi([w()],hi.prototype,"error",void 0),pi([w()],hi.prototype,"remoteFeatures",void 0),pi([w()],hi.prototype,"hasExceededUsageLimit",void 0),hi=pi([n("w3m-email-login-widget")],hi);const wi=e`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var mi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let gi=class extends a{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return s`
      <button ?disabled=${this.disabled} tabindex=${r(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};gi.styles=[t,i,wi],mi([o()],gi.prototype,"logo",void 0),mi([o({type:Boolean})],gi.prototype,"disabled",void 0),mi([o()],gi.prototype,"tabIdx",void 0),gi=mi([n("wui-logo-select")],gi);const bi=e`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var fi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let vi=class extends a{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=f.state.connectors,this.remoteFeatures=c.state.remoteFeatures,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isPwaLoading=!1,this.hasExceededUsageLimit=N.state.plan.hasExceededUsageLimit,this.unsubscribe.push(f.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)),N.subscribeKey("plan",(e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit)))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var e;const t="explore"===this.walletGuide;let i=null==(e=this.remoteFeatures)?void 0:e.socials;return!i&&t?(i=x.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(e){return 2===e.length?s` <wui-flex gap="2">
        ${e.slice(0,2).map((e=>s`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${r(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`))}
      </wui-flex>`:s` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${r(e[0])}
      text=${`Continue with ${M.capitalize(e[0])}`}
      tabIdx=${r(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){var e;let t=null==(e=this.remoteFeatures)?void 0:e.socials;const i="explore"===this.walletGuide;return(!this.authConnector||!t||0===t.length)&&i&&(t=x.DEFAULT_SOCIALS),t?t.length<=2?null:t&&t.length>6?s`<wui-flex gap="2">
        ${t.slice(1,5).map((e=>s`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${r(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${r(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?s`<wui-flex gap="2">
      ${t.slice(1,t.length).map((e=>s`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${r(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`))}
    </wui-flex>`:null:null}onMoreSocialsClick(){y.push("ConnectSocials")}async onSocialClick(e){if(this.hasExceededUsageLimit)y.push("UsageExceeded");else{if(!v.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===l.state.activeChain))){const e=l.getFirstCaipNetworkSupportsAuthConnector();if(e)return void y.push("SwitchNetwork",{network:e})}e&&await Z(e)}}async handlePwaFrameLoad(){var e;if(p.isPWA()){this.isPwaLoading=!0;try{(null==(e=this.authConnector)?void 0:e.provider)instanceof D&&await this.authConnector.provider.init()}catch(t){P.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return k.hasAnyConnection(v.CONNECTOR_ID.AUTH)}};vi.styles=bi,fi([o()],vi.prototype,"walletGuide",void 0),fi([o()],vi.prototype,"tabIdx",void 0),fi([w()],vi.prototype,"connectors",void 0),fi([w()],vi.prototype,"remoteFeatures",void 0),fi([w()],vi.prototype,"authConnector",void 0),fi([w()],vi.prototype,"isPwaLoading",void 0),fi([w()],vi.prototype,"hasExceededUsageLimit",void 0),vi=fi([n("w3m-social-login-widget")],vi);var yi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let xi=class extends a{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=f.state.connectors,this.count=N.state.count,this.filteredCount=N.state.filteredWallets.length,this.isFetchingRecommendedWallets=N.state.isFetchingRecommendedWallets,this.unsubscribe.push(f.subscribeKey("connectors",(e=>this.connectors=e)),N.subscribeKey("count",(e=>this.count=e)),N.subscribeKey("filteredWallets",(e=>this.filteredCount=e.length)),N.subscribeKey("isFetchingRecommendedWallets",(e=>this.isFetchingRecommendedWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=c.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!p.isMobile())return null;const i=N.state.featured.length,o=this.count+i,n=o<10?o:10*Math.floor(o/10),a=this.filteredCount>0?this.filteredCount:n;let l=`${a}`;this.filteredCount>0?l=`${this.filteredCount}`:a<o&&(l=`${a}+`);const d=k.hasAnyConnection(v.CONNECTOR_ID.WALLET_CONNECT);return s`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${r(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${d}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var e;g.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),y.push("AllWallets",{redirectView:null==(e=y.state.data)?void 0:e.redirectView})}};yi([o()],xi.prototype,"tabIdx",void 0),yi([w()],xi.prototype,"connectors",void 0),yi([w()],xi.prototype,"count",void 0),yi([w()],xi.prototype,"filteredCount",void 0),yi([w()],xi.prototype,"isFetchingRecommendedWallets",void 0),xi=yi([n("w3m-all-wallets-widget")],xi);const $i=e`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var ki=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Ci=class extends a{constructor(){super(),this.unsubscribe=[],this.connectors=f.state.connectors,this.recommended=N.state.recommended,this.featured=N.state.featured,this.explorerWallets=N.state.explorerWallets,this.connections=k.state.connections,this.connectorImages=d.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(f.subscribeKey("connectors",(e=>this.connectors=e)),k.subscribeKey("connections",(e=>this.connections=e)),d.subscribeKey("connectorImages",(e=>this.connectorImages=e)),N.subscribeKey("recommended",(e=>this.recommended=e)),N.subscribeKey("featured",(e=>this.featured=e)),N.subscribeKey("explorerFilteredWallets",(e=>{this.explorerWallets=(null==e?void 0:e.length)?e:N.state.explorerWallets})),N.subscribeKey("explorerWallets",(e=>{var t;(null==(t=this.explorerWallets)?void 0:t.length)||(this.explorerWallets=e)}))),p.isTelegram()&&p.isIos()&&(this.loadingTelegram=!k.state.wcUri,this.unsubscribe.push(k.subscribeKey("wcUri",(e=>this.loadingTelegram=!e))))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}processConnectorsByType(e,t=!0){const i=E.sortConnectorsByExplorerWallet([...e]);return t?i.filter(E.showConnector):i}connectorListTemplate(){const e=E.getConnectorsByType(this.connectors,this.recommended,this.featured),t=this.processConnectorsByType(e.announced.filter((e=>"walletConnect"!==e.id))),i=this.processConnectorsByType(e.injected),o=this.processConnectorsByType(e.multiChain.filter((e=>"WalletConnect"!==e.name)),!1),n=e.custom,a=e.recent,r=this.processConnectorsByType(e.external.filter((e=>e.id!==v.CONNECTOR_ID.COINBASE_SDK&&e.id!==v.CONNECTOR_ID.BASE_ACCOUNT))),s=e.recommended,l=e.featured,c=E.getConnectorTypeOrder({custom:n,recent:a,announced:t,injected:i,multiChain:o,recommended:s,featured:l,external:r}),d=this.connectors.find((e=>"walletConnect"===e.id)),u=p.isMobile(),h=[];for(const p of c)switch(p){case"walletConnect":!u&&d&&h.push({kind:"connector",subtype:"walletConnect",connector:d});break;case"recent":E.getFilteredRecentWallets().forEach((e=>h.push({kind:"wallet",subtype:"recent",wallet:e})));break;case"injected":o.forEach((e=>h.push({kind:"connector",subtype:"multiChain",connector:e}))),t.forEach((e=>h.push({kind:"connector",subtype:"announced",connector:e}))),i.forEach((e=>h.push({kind:"connector",subtype:"injected",connector:e})));break;case"featured":l.forEach((e=>h.push({kind:"wallet",subtype:"featured",wallet:e})));break;case"custom":E.getFilteredCustomWallets(n??[]).forEach((e=>h.push({kind:"wallet",subtype:"custom",wallet:e})));break;case"external":r.forEach((e=>h.push({kind:"connector",subtype:"external",connector:e})));break;case"recommended":E.getCappedRecommendedWallets(s).forEach((e=>h.push({kind:"wallet",subtype:"recommended",wallet:e})));break;default:console.warn(`Unknown connector type: ${p}`)}return h.map(((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t)))}getConnectorNamespaces(e){var t;return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?(null==(t=e.connector.connectors)?void 0:t.map((e=>e.chain)))||[]:[e.connector.chain]}renderConnector(e,t){var i,o;const n=e.connector,a=u.getConnectorImage(n)||this.connectorImages[(null==n?void 0:n.imageId)??""],l=(this.connections.get(n.chain)??[]).some((e=>A.isLowerCaseMatch(e.connectorId,n.id)));let c,d;"walletConnect"===e.subtype?(c="qr code",d="accent"):"injected"===e.subtype||"announced"===e.subtype?(c=l?"connected":"installed",d=l?"info":"success"):(c=void 0,d=void 0);const p=k.hasAnyConnection(v.CONNECTOR_ID.WALLET_CONNECT),h=("walletConnect"===e.subtype||"external"===e.subtype)&&p;return s`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${r(a)}
        .installed=${!0}
        name=${n.name??"Unknown"}
        .tagVariant=${d}
        tagLabel=${r(c)}
        data-testid=${`wallet-selector-${n.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${r(this.tabIdx)}
        ?disabled=${h}
        rdnsId=${r((null==(i=n.explorerWallet)?void 0:i.rdns)||void 0)}
        walletRank=${r(null==(o=n.explorerWallet)?void 0:o.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){var t;const i=null==(t=y.state.data)?void 0:t.redirectView;return"walletConnect"===e.subtype?(f.setActiveConnector(e.connector),void(p.isMobile()?y.push("AllWallets"):y.push("ConnectingWalletConnect",{redirectView:i}))):"multiChain"===e.subtype?(f.setActiveConnector(e.connector),void y.push("ConnectingMultiChain",{redirectView:i})):"injected"===e.subtype?(f.setActiveConnector(e.connector),void y.push("ConnectingExternal",{connector:e.connector,redirectView:i,wallet:e.connector.explorerWallet})):"announced"===e.subtype?"walletConnect"===e.connector.id?void(p.isMobile()?y.push("AllWallets"):y.push("ConnectingWalletConnect",{redirectView:i})):void y.push("ConnectingExternal",{connector:e.connector,redirectView:i,wallet:e.connector.explorerWallet}):void y.push("ConnectingExternal",{connector:e.connector,redirectView:i})}renderWallet(e,t){const i=e.wallet,o=u.getWalletImage(i),n=k.hasAnyConnection(v.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,l="recent"===e.subtype?"recent":void 0,c="recent"===e.subtype?"info":void 0;return s`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${r(o)}
        name=${i.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${i.id}`}
        tabIdx=${r(this.tabIdx)}
        ?loading=${a}
        ?disabled=${n}
        rdnsId=${r(i.rdns||void 0)}
        walletRank=${r(i.order)}
        tagLabel=${r(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){var t;const i=null==(t=y.state.data)?void 0:t.redirectView;if("featured"===e.subtype)return void f.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;return void f.selectWalletConnector(e.wallet)}if("custom"===e.subtype){if(this.loadingTelegram)return;return void y.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:i})}if(this.loadingTelegram)return;const o=f.getConnector({id:e.wallet.id,rdns:e.wallet.rdns});o?y.push("ConnectingExternal",{connector:o,redirectView:i}):y.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:i})}};Ci.styles=$i,ki([o({type:Number})],Ci.prototype,"tabIdx",void 0),ki([w()],Ci.prototype,"connectors",void 0),ki([w()],Ci.prototype,"recommended",void 0),ki([w()],Ci.prototype,"featured",void 0),ki([w()],Ci.prototype,"explorerWallets",void 0),ki([w()],Ci.prototype,"connections",void 0),ki([w()],Ci.prototype,"connectorImages",void 0),ki([w()],Ci.prototype,"loadingTelegram",void 0),Ci=ki([n("w3m-connector-list")],Ci);var Si=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Ei=class extends a{constructor(){super(...arguments),this.tabIdx=void 0}render(){return s`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${r(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${r(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Si([o()],Ei.prototype,"tabIdx",void 0),Ei=Si([n("w3m-wallet-login-list")],Ei);const Ri=e`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Ti=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Ai=class extends a{constructor(){var e,t;super(),this.unsubscribe=[],this.connectors=f.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=c.state.features,this.remoteFeatures=c.state.remoteFeatures,this.enableWallets=c.state.enableWallets,this.noAdapters=l.state.noAdapters,this.walletGuide="get-started",this.checked=J.state.isLegalCheckboxChecked,this.isEmailEnabled=(null==(e=this.remoteFeatures)?void 0:e.email)&&!l.state.noAdapters,this.isSocialEnabled=(null==(t=this.remoteFeatures)?void 0:t.socials)&&this.remoteFeatures.socials.length>0&&!l.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(f.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})),c.subscribeKey("features",(e=>{this.features=e})),c.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)})),c.subscribeKey("enableWallets",(e=>this.enableWallets=e)),l.subscribeKey("noAdapters",(e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures))),J.subscribeKey("isLegalCheckboxChecked",(e=>this.checked=e)))}disconnectedCallback(){var e,t;this.unsubscribe.forEach((e=>e())),null==(e=this.resizeObserver)||e.disconnect();const i=null==(t=this.shadowRoot)?void 0:t.querySelector(".connect");null==i||i.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var e,t;const i=null==(e=this.shadowRoot)?void 0:e.querySelector(".connect");i&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),null==i||i.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleConnectListScroll()})),null==(t=this.resizeObserver)||t.observe(i),this.handleConnectListScroll())}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=c.state,o=null==(e=c.state.features)?void 0:e.legalCheckbox,n=Boolean(t||i)&&Boolean(o)&&"get-started"===this.walletGuide&&!this.checked,a={connect:!0,disabled:n},r=c.state.enableWalletGuide,l=this.enableWallets,d=this.isSocialEnabled||this.authConnector,u=n?-1:void 0;return s`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${R(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${d&&l&&r&&"get-started"===this.walletGuide?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(u)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){var e;return q.hasFooter()?null:(null==(e=this.remoteFeatures)?void 0:e.reownBranding)?s`<wui-ux-by-reown></wui-ux-by-reown>`:null}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=(null==t?void 0:t.email)&&!e,this.isSocialEnabled=(null==t?void 0:t.socials)&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter((e=>e.type===L.CONNECTOR_TYPE_AUTH)).map((e=>e.chain));return v.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e=>t.includes(e)))}renderConnectMethod(e){const t=O.getConnectOrderMethod(this.features,this.connectors);return s`${t.map(((t,i)=>{switch(t){case"email":return s`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return s`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return s`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}}))}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=O.getConnectOrderMethod(this.features,this.connectors)[e+1];if(t)return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),o="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!o?s`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?s`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?s`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?s`<w3m-email-login-widget tabIdx=${r(e)}></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?s`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${r(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){var t,i;const o=this.enableWallets,n=!1===(null==(t=this.features)?void 0:t.emailShowWallets),a=null==(i=this.features)?void 0:i.collapseWallets,l=n||a;return o?(p.isTelegram()&&(p.isSafari()||p.isIos())&&k.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&l?s`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${r(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:s`<w3m-wallet-login-list tabIdx=${r(e)}></w3m-wallet-login-list>`):null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:s`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".connect");t&&(t.scrollHeight>470?(t.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 100px,\n          black calc(100% - 100px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--connect-scroll--top-opacity",G.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",G.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){y.push("ConnectWallets")}};Ai.styles=Ri,Ti([w()],Ai.prototype,"connectors",void 0),Ti([w()],Ai.prototype,"authConnector",void 0),Ti([w()],Ai.prototype,"features",void 0),Ti([w()],Ai.prototype,"remoteFeatures",void 0),Ti([w()],Ai.prototype,"enableWallets",void 0),Ti([w()],Ai.prototype,"noAdapters",void 0),Ti([o()],Ai.prototype,"walletGuide",void 0),Ti([w()],Ai.prototype,"checked",void 0),Ti([w()],Ai.prototype,"isEmailEnabled",void 0),Ti([w()],Ai.prototype,"isSocialEnabled",void 0),Ti([w()],Ai.prototype,"isAuthEnabled",void 0),Ai=Ti([n("w3m-connect-view")],Ai);const Ii=e`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Ni=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Oi=class extends a{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return s`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Oi.styles=[t,i,Ii],Ni([o({type:Boolean})],Oi.prototype,"disabled",void 0),Ni([o()],Oi.prototype,"label",void 0),Ni([o()],Oi.prototype,"buttonLabel",void 0),Oi=Ni([n("wui-cta-button")],Oi);const Pi=e`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var ji=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Di=class extends a{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:o,homepage:n}=this.wallet,a=p.isMobile(),r=p.isIos(),l=p.isAndroid(),c=[t,i,n,o].filter(Boolean).length>1,d=M.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!a?s`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>y.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?s`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&r?s`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?s`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(null==(e=this.wallet)?void 0:e.app_store)&&p.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(null==(e=this.wallet)?void 0:e.play_store)&&p.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(null==(e=this.wallet)?void 0:e.homepage)&&p.openHref(this.wallet.homepage,"_blank")}};Di.styles=[Pi],ji([o({type:Object})],Di.prototype,"wallet",void 0),Di=ji([n("w3m-mobile-download-links")],Di);const Li=e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var Wi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};class zi extends a{constructor(){var e,t,i,o,n;super(),this.wallet=null==(e=y.state.data)?void 0:e.wallet,this.connector=null==(t=y.state.data)?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=u.getConnectorImage(this.connector)??u.getWalletImage(this.wallet),this.name=(null==(i=this.wallet)?void 0:i.name)??(null==(o=this.connector)?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=k.state.wcUri,this.error=k.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(k.subscribeKey("wcUri",(e=>{var t;this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,null==(t=this.onConnect)||t.call(this))})),k.subscribeKey("wcError",(e=>this.error=e))),(p.isTelegram()||p.isSafari())&&p.isIos()&&k.state.wcUri&&(null==(n=this.onConnect)||n.call(this))}firstUpdated(){var e;null==(e=this.onAutoConnect)||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),k.setWcError(!1),clearTimeout(this.timeout)}render(){var e;null==(e=this.onRender)||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),s`
      <wui-flex
        data-error=${r(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${r(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?s`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?s`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;k.setWcError(!1),this.onRetry?(this.isRetrying=!0,null==(e=this.onRetry)||e.call(this)):null==(t=this.onConnect)||t.call(this)}loaderTemplate(){const e=W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return s`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(p.copyToClopboard(this.uri),$.showSuccess("Link copied"))}catch{$.showError("Failed to copy")}}}zi.styles=Li,Wi([w()],zi.prototype,"isRetrying",void 0),Wi([w()],zi.prototype,"uri",void 0),Wi([w()],zi.prototype,"error",void 0),Wi([w()],zi.prototype,"ready",void 0),Wi([w()],zi.prototype,"showRetry",void 0),Wi([w()],zi.prototype,"label",void 0),Wi([w()],zi.prototype,"secondaryBtnLabel",void 0),Wi([w()],zi.prototype,"secondaryLabel",void 0),Wi([w()],zi.prototype,"isLoading",void 0),Wi([o({type:Boolean})],zi.prototype,"isMobile",void 0),Wi([o()],zi.prototype,"onRetry",void 0);let Ui=class extends zi{constructor(){var e,t,i,o,n;if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=k.getConnections(null==(e=this.connector)?void 0:e.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=c.state.remoteFeatures,this.currentActiveConnectorId=f.state.activeConnectorIds[null==(t=this.connector)?void 0:t.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const a=null==(i=this.connector)?void 0:i.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),g.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:null==(o=this.wallet)?void 0:o.display_index,walletRank:null==(n=this.wallet)?void 0:n.order,view:y.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(f.subscribeKey("activeConnectorIds",(e=>{var t;const i=e[a],o=null==(t=this.remoteFeatures)?void 0:t.multiWallet,{redirectView:n}=y.state.data??{};i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(y.replace("ProfileWallets"),$.showSuccess("New Wallet Added")):n?y.replace(n):h.close())})),k.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===v.CONNECTOR_ID.COINBASE_SDK&&this.error||await k.connectExternal(this.connector,this.connector.chain)}}catch(e){e instanceof z&&e.originalName===U.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):g.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),this.error=!0}}onConnectionsChange(e){var t,i;if((null==(t=this.connector)?void 0:t.chain)&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const t=e.get(this.connector.chain)??[],o=null==(i=this.remoteFeatures)?void 0:i.multiWallet;if(0===t.length)y.replace("Connect");else{const e=T.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap((e=>e.accounts)),i=T.getConnectionsByConnectorId(t,this.connector.id).flatMap((e=>e.accounts));0===i.length?this.hasMultipleConnections&&o?(y.replace("ProfileWallets"),$.showSuccess("Wallet deleted")):h.close():!e.every((e=>i.some((t=>A.isLowerCaseMatch(e.address,t.address)))))&&o&&y.replace("ProfileWallets")}}}isAlreadyConnected(e){return Boolean(e)&&this.connectionsByNamespace.some((t=>A.isLowerCaseMatch(t.connectorId,e.id)))}};Ui=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-connecting-external-view")],Ui);const _i=m`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Bi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Fi=class extends a{constructor(){super(),this.unsubscribe=[],this.activeConnector=f.state.activeConnector,this.unsubscribe.push(f.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${r(u.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${null==(e=this.activeConnector)?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e,t;return null==(t=null==(e=this.activeConnector)?void 0:e.connectors)?void 0:t.map(((e,t)=>{var i;return e.name?s`
            <w3m-list-wallet
              displayIndex=${t}
              imageSrc=${r(u.getChainImage(e.chain))}
              name=${v.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${null==(i=e.explorerWallet)?void 0:i.rdns}
            ></w3m-list-wallet>
          `:null}))}onConnector(e){var t,i,o,n;const a=null==(i=null==(t=this.activeConnector)?void 0:t.connectors)?void 0:i.find((t=>t.chain===e.chain)),r=null==(o=y.state.data)?void 0:o.redirectView;a?"walletConnect"===a.id?p.isMobile()?y.push("AllWallets"):y.push("ConnectingWalletConnect",{redirectView:r}):y.push("ConnectingExternal",{connector:a,redirectView:r,wallet:null==(n=this.activeConnector)?void 0:n.explorerWallet}):$.showError("Failed to find connector")}};Fi.styles=_i,Bi([w()],Fi.prototype,"activeConnector",void 0),Fi=Bi([n("w3m-connecting-multi-chain-view")],Fi);var Mi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Vi=class extends a{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return s`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){var t;const i=this.platformTabs[e];i&&(null==(t=this.onSelectPlatfrom)||t.call(this,i))}};Mi([o({type:Array})],Vi.prototype,"platforms",void 0),Mi([o()],Vi.prototype,"onSelectPlatfrom",void 0),Vi=Mi([n("w3m-connecting-header")],Vi);let Ki=class extends zi{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),g.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null==(e=this.wallet)?void 0:e.display_index,walletRank:this.wallet.order,view:y.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=f.state,t=e.find((e=>{var t,i,o;return"ANNOUNCED"===e.type&&(null==(t=e.info)?void 0:t.rdns)===(null==(i=this.wallet)?void 0:i.rdns)||"INJECTED"===e.type||e.name===(null==(o=this.wallet)?void 0:o.name)}));if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await k.connectExternal(t,t.chain),h.close()}catch(e){e instanceof z&&e.originalName===U.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):g.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),this.error=!0}}};Ki=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-connecting-wc-browser")],Ki);let qi=class extends zi{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),g.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:null==(e=this.wallet)?void 0:e.display_index,walletRank:this.wallet.order,view:y.state.view}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null==(e=this.onConnect)||e.call(this))}onConnectProxy(){var e;if((null==(e=this.wallet)?void 0:e.desktop_link)&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=p.formatNativeUrl(e,this.uri);k.setWcLinking({name:t,href:o}),k.setRecentWallet(this.wallet),p.openHref(i,"_blank")}catch{this.error=!0}}};qi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-connecting-wc-desktop")],qi);var Hi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Gi=class extends zi{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=c.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var e;if((null==(e=this.wallet)?void 0:e.mobile_link)&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:n,href:a}=p.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=n,this.target=p.isIframe()?"_top":"_self",k.setWcLinking({name:i,href:a}),k.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?p.openHref(this.redirectUniversalLink,this.target):p.openHref(this.redirectDeeplink,this.target)}catch(t){g.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=x.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(k.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),g.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:null==(e=this.wallet)?void 0:e.display_index,walletRank:this.wallet.order,view:y.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,null==(e=this.onConnect)||e.call(this))}onTryAgain(){var e;k.setWcError(!1),null==(e=this.onConnect)||e.call(this)}};Hi([w()],Gi.prototype,"redirectDeeplink",void 0),Hi([w()],Gi.prototype,"redirectUniversalLink",void 0),Hi([w()],Gi.prototype,"target",void 0),Hi([w()],Gi.prototype,"preferUniversalLinks",void 0),Hi([w()],Gi.prototype,"isLoading",void 0),Gi=Hi([n("w3m-connecting-wc-mobile")],Gi);const Yi=e`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Xi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Qi=class extends zi{constructor(){super(),this.basic=!1}firstUpdated(){var e,t,i;this.basic||g.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:(null==(e=this.wallet)?void 0:e.name)??"WalletConnect",platform:"qrcode",displayIndex:null==(t=this.wallet)?void 0:t.display_index,walletRank:null==(i=this.wallet)?void 0:i.order,view:y.state.view}})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.unsubscribe)||e.forEach((e=>e()))}render(){return this.onRenderProxy(),s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.wallet?this.wallet.name:void 0;k.setWcLinking(void 0),k.setRecentWallet(this.wallet);const t=W.state.themeVariables["--apkt-qr-color"]??W.state.themeVariables["--w3m-qr-color"];return s` <wui-qr-code
      theme=${W.state.themeMode}
      uri=${this.uri}
      imageSrc=${r(u.getWalletImage(this.wallet))}
      color=${r(t)}
      alt=${r(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return s`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Qi.styles=Yi,Xi([o({type:Boolean})],Qi.prototype,"basic",void 0),Qi=Xi([n("w3m-connecting-wc-qrcode")],Qi);let Ji=class extends a{constructor(){var e,t,i;if(super(),this.wallet=null==(e=y.state.data)?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");g.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null==(t=this.wallet)?void 0:t.display_index,walletRank:null==(i=this.wallet)?void 0:i.order,view:y.state.view}})}render(){return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${r(u.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ji=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-connecting-wc-unsupported")],Ji);var Zi=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let eo=class extends zi{constructor(){var e,t;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=x.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(k.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),g.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:null==(e=this.wallet)?void 0:e.display_index,walletRank:null==(t=this.wallet)?void 0:t.order,view:y.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((null==(e=this.wallet)?void 0:e.webapp_link)&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=p.formatUniversalUrl(e,this.uri);k.setWcLinking({name:t,href:o}),k.setRecentWallet(this.wallet),p.openHref(i,"_blank")}catch{this.error=!0}}};Zi([w()],eo.prototype,"isLoading",void 0),eo=Zi([n("w3m-connecting-wc-web")],eo);const to=e`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var io=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let oo=class extends a{constructor(){var e;super(),this.wallet=null==(e=y.state.data)?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(c.state.siwx),this.remoteFeatures=c.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return c.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),s`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return(null==(e=this.remoteFeatures)?void 0:e.reownBranding)&&this.displayBranding?s`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){var t,i;if("browser"!==this.platform&&(!c.state.manualWCControl||e))try{const{wcPairingExpiry:i,status:o}=k.state,{redirectView:n}=y.state.data??{};if(e||c.state.enableEmbedded||p.isPairingExpired(i)||"connecting"===o){const e=k.getConnections(l.state.activeChain),i=null==(t=this.remoteFeatures)?void 0:t.multiWallet,o=e.length>0;await k.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(o&&i?(y.replace("ProfileWallets"),$.showSuccess("New Wallet Added")):n?y.replace(n):h.close())}}catch(o){if(o instanceof Error&&o.message.includes("An error occurred when attempting to switch chain")&&!c.state.enableNetworkSwitch&&l.state.activeChain)return l.setActiveCaipNetwork(_.getUnsupportedNetwork(`${l.state.activeChain}:${null==(i=l.state.activeCaipNetwork)?void 0:i.id}`)),void l.showUnsupportedChainUI();o instanceof z&&o.originalName===U.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:o.message}}):g.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==o?void 0:o.message)??"Unknown"}}),k.setWcError(!0),$.showError(o.message??"Connection error"),k.resetWcConnection(),y.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:n}=this.wallet,a=null==o?void 0:o.map((({injected_id:e})=>e)).filter(Boolean),r=[...n?[n]:a??[]],s=!c.state.isUniversalProvider&&r.length,d=e,u=i,h=k.checkInstalled(r),w=s&&h,m=t&&!p.isMobile();w&&!l.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(p.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),m&&this.platforms.push("desktop"),w||!s||l.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return s`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return s`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return s`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return s`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return s`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return s`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?s`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const i=null==(t=this.shadowRoot)?void 0:t.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};oo.styles=to,io([w()],oo.prototype,"platform",void 0),io([w()],oo.prototype,"platforms",void 0),io([w()],oo.prototype,"isSiwxEnabled",void 0),io([w()],oo.prototype,"remoteFeatures",void 0),io([o({type:Boolean})],oo.prototype,"displayBranding",void 0),io([o({type:Boolean})],oo.prototype,"basic",void 0),oo=io([n("w3m-connecting-wc-view")],oo);var no=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let ao=class extends a{constructor(){super(),this.unsubscribe=[],this.isMobile=p.isMobile(),this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(c.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(this.isMobile){const{featured:e,recommended:t}=N.state,{customWallets:i}=c.state,o=b.getRecentWallets(),n=e.length||t.length||(null==i?void 0:i.length)||o.length;return s`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?s`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return s`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return(null==(e=this.remoteFeatures)?void 0:e.reownBranding)?s` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};no([w()],ao.prototype,"isMobile",void 0),no([w()],ao.prototype,"remoteFeatures",void 0),ao=no([n("w3m-connecting-wc-basic-view")],ao);const ro=m`
  .continue-button-container {
    width: 100%;
  }
`;var so=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let lo=class extends a{constructor(){super(...arguments),this.loading=!1}render(){return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{p.openHref(ee.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return s` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return s`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){y.push("RegisterAccountName"),g.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:C(l.state.activeChain)===S.ACCOUNT_TYPES.SMART_ACCOUNT}})}};lo.styles=ro,so([w()],lo.prototype,"loading",void 0),lo=so([n("w3m-choose-account-name-view")],lo);let co=class extends a{constructor(){var e;super(...arguments),this.wallet=null==(e=y.state.data)?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return s`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(null==(e=this.wallet)?void 0:e.chrome_store)?s`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(null==(e=this.wallet)?void 0:e.app_store)?s`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(null==(e=this.wallet)?void 0:e.play_store)?s`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(null==(e=this.wallet)?void 0:e.homepage)?s`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(g.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),p.openHref(e.href,"_blank"))}onChromeStore(){var e;(null==(e=this.wallet)?void 0:e.chrome_store)&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var e;(null==(e=this.wallet)?void 0:e.app_store)&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var e;(null==(e=this.wallet)?void 0:e.play_store)&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var e;(null==(e=this.wallet)?void 0:e.homepage)&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};co=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-downloads-view")],co);let uo=class extends a{render(){return s`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{p.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=N.state,{customWallets:i}=c.state;return[...t,...i??[],...e].slice(0,4).map(((e,t)=>s`
        <w3m-list-wallet
          displayIndex=${t}
          name=${e.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${r(u.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `))}onWalletClick(e){g.sendEvent({type:"track",event:"GET_WALLET",properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:"homepage"}}),p.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}};uo=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-get-wallet-view")],uo);var po=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let ho=class extends a{constructor(){super(...arguments),this.data=[]}render(){return s`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map((e=>s`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map((e=>s`<wui-visual size="sm" name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `))}
      </wui-flex>
    `}};po([o({type:Array})],ho.prototype,"data",void 0),ho=po([n("w3m-help-widget")],ho);const wo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let mo=class extends a{render(){return s`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${wo}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){g.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),y.push("GetWallet")}};mo=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-what-is-a-wallet-view")],mo);const go=e`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var bo=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let fo=class extends a{constructor(){super(),this.unsubscribe=[],this.checked=J.state.isLegalCheckboxChecked,this.unsubscribe.push(J.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=c.state,o=null==(e=c.state.features)?void 0:e.legalCheckbox,n=Boolean(t||i)&&Boolean(o),a=n&&!this.checked,l=a?-1:void 0;return s`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","3","3","3"]:"3"}
        gap="2"
        class=${r(a?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${r(l)}></w3m-wallet-login-list>
      </wui-flex>
    `}};fo.styles=go,bo([w()],fo.prototype,"checked",void 0),fo=bo([n("w3m-connect-wallets-view")],fo);const vo=e`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let yo=class extends a{render(){return s`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};yo.styles=[t,vo],yo=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("wui-loading-hexagon")],yo);const xo=m`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var $o=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let ko=class extends a{constructor(){var e;super(),this.network=null==(e=y.state.data)?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return s`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${r(u.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:s`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=f.getConnectorId(l.state.activeChain);return f.getAuthConnector()&&e===v.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var e;const t=f.getConnectorId(l.state.activeChain);return f.getAuthConnector()&&t===v.CONNECTOR_ID.AUTH?`Switching to ${(null==(e=this.network)?void 0:e.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){var e;try{this.error=!1,l.state.activeChain!==(null==(e=this.network)?void 0:e.chainNamespace)&&l.setIsSwitchingNamespace(!0),this.network&&(await l.switchActiveNetwork(this.network),await B.isAuthenticated()&&y.goBack())}catch(t){this.error=!0}}};ko.styles=xo,$o([w()],ko.prototype,"showRetry",void 0),$o([w()],ko.prototype,"error",void 0),ko=$o([n("w3m-network-switch-view")],ko);const Co=e`
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
`;var So=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Eo=class extends a{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return s`
      <button ?disabled=${this.disabled} tabindex=${r(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?s`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:s`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};Eo.styles=[t,i,Co],So([o()],Eo.prototype,"imageSrc",void 0),So([o()],Eo.prototype,"name",void 0),So([o()],Eo.prototype,"tabIdx",void 0),So([o({type:Boolean})],Eo.prototype,"disabled",void 0),Eo=So([n("wui-list-network")],Eo);const Ro=m`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var To=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Ao=class extends a{constructor(){super(),this.unsubscribe=[],this.network=l.state.activeCaipNetwork,this.requestedCaipNetworks=l.getCaipNetworks(),this.search="",this.onDebouncedSearch=p.debounce((e=>{this.search=e}),100),this.unsubscribe.push(d.subscribeNetworkImages((()=>this.requestUpdate())),l.subscribeKey("activeCaipNetwork",(e=>this.network=e)),l.subscribe((()=>{this.requestedCaipNetworks=l.getAllRequestedCaipNetworks()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return s`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){var e;const t=l.getAllApprovedCaipNetworkIds(),i=p.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=null==i?void 0:i.filter((e=>{var t;return null==(t=null==e?void 0:e.name)?void 0:t.toLowerCase().includes(this.search.toLowerCase())})):this.filteredNetworks=i,null==(e=this.filteredNetworks)?void 0:e.map((e=>{var t;return s`
        <wui-list-network
          .selected=${(null==(t=this.network)?void 0:t.id)===e.id}
          imageSrc=${r(u.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${l.isCaipNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `}))}onSwitchNetwork(e){F.onSwitchNetwork({network:e})}};Ao.styles=Ro,To([w()],Ao.prototype,"network",void 0),To([w()],Ao.prototype,"requestedCaipNetworks",void 0),To([w()],Ao.prototype,"filteredNetworks",void 0),To([w()],Ao.prototype,"search",void 0),Ao=To([n("w3m-networks-view")],Ao);const Io=e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var No=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const Oo={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Po=class extends a{constructor(){var e,t;super(...arguments),this.unsubscribe=[],this.switchToChain=null==(e=y.state.data)?void 0:e.switchToChain,this.caipNetwork=null==(t=y.state.data)?void 0:t.network,this.activeChain=l.state.activeChain}firstUpdated(){this.unsubscribe.push(l.subscribeKey("activeChain",(e=>this.activeChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.switchToChain?v.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=v.CHAIN_NAME_MAP[this.switchToChain];return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${r(Oo[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(l.setIsSwitchingNamespace(!0),f.setFilterByNamespace(this.switchToChain),this.caipNetwork?await l.switchActiveNetwork(this.caipNetwork):l.setActiveNamespace(this.switchToChain),y.reset("Connect"))}};Po.styles=Io,No([o()],Po.prototype,"activeChain",void 0),Po=No([n("w3m-switch-active-chain-view")],Po);const jo=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Do=class extends a{render(){return s`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${jo}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{p.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Do=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-what-is-a-network-view")],Do);const Lo=m`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Wo=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let zo=class extends a{constructor(){var e;super(),this.swapUnsupportedChain=null==(e=y.state.data)?void 0:e.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(d.subscribeNetworkImages((()=>this.requestUpdate())),c.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?s`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:s`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=l.getAllRequestedCaipNetworks(),t=l.getAllApprovedCaipNetworkIds(),i=p.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter((e=>x.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId))):i).map((e=>s`
        <wui-list-network
          imageSrc=${r(u.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){var e;try{this.disconnecting=!0;const t=l.state.activeChain,i=k.getConnections(t).length>0,o=t&&f.state.activeConnectorIds[t],n=null==(e=this.remoteFeatures)?void 0:e.multiWallet;await k.disconnect(n?{id:o,namespace:t}:{}),i&&n&&(y.push("ProfileWallets"),$.showSuccess("Wallet deleted"))}catch{g.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),$.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const t=l.getActiveCaipAddress(),i=l.getAllApprovedCaipNetworkIds(),o=(l.getNetworkProp("supportsAllNetworks",e.chainNamespace),y.state.data);t?(null==i?void 0:i.includes(e.caipNetworkId))?await l.switchActiveNetwork(e):y.push("SwitchNetwork",{...o,network:e}):t||(l.setActiveCaipNetwork(e),y.push("Connect"))}};zo.styles=Lo,Wo([w()],zo.prototype,"disconnecting",void 0),Wo([w()],zo.prototype,"remoteFeatures",void 0),zo=Wo([n("w3m-unsupported-chain-view")],zo);const Uo=e`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var _o=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Bo=class extends a{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return s`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};Bo.styles=[t,i,Uo],_o([o()],Bo.prototype,"icon",void 0),_o([o()],Bo.prototype,"text",void 0),_o([o()],Bo.prototype,"type",void 0),Bo=_o([n("wui-banner")],Bo);const Fo=m`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let Mo=class extends a{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return s` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=l.getAllRequestedCaipNetworks(),t=l.getAllApprovedCaipNetworkIds(),i=l.state.activeCaipNetwork,o=l.checkIfSmartAccountEnabled();let n=p.sortRequestedNetworks(t,e);if(o&&C(null==i?void 0:i.chainNamespace)===S.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;n=[i]}return n.filter((e=>e.chainNamespace===(null==i?void 0:i.chainNamespace))).map((e=>s`
        <wui-list-network
          imageSrc=${r(u.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};Mo.styles=Fo,Mo=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-wallet-compatible-networks-view")],Mo);const Vo=e`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ko=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let qo=class extends a{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",s`${this.templateVisual()}`}templateVisual(){return this.imageSrc?s`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:s`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};qo.styles=[t,Vo],Ko([o()],qo.prototype,"imageSrc",void 0),Ko([o()],qo.prototype,"alt",void 0),Ko([o({type:Boolean})],qo.prototype,"borderRadiusFull",void 0),qo=Ko([n("wui-visual-thumbnail")],qo);const Ho=e`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let Go=class extends a{constructor(){var e,t,i;super(...arguments),this.dappImageUrl=null==(e=c.state.metadata)?void 0:e.icons,this.walletImageUrl=null==(i=null==(t=l.getAccountData())?void 0:t.connectedWalletInfo)?void 0:i.icon}firstUpdated(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelectorAll("wui-visual-thumbnail");(null==t?void 0:t[0])&&this.createAnimation(t[0],"translate(18px)"),(null==t?void 0:t[1])&&this.createAnimation(t[1],"translate(-18px)")}render(){var e;return s`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${null==(e=this.dappImageUrl)?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Go.styles=Ho,Go=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r}([n("w3m-siwx-sign-message-thumbnails")],Go);var Yo=function(e,t,i,o){var n,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(a<3?n(r):a>3?n(t,i,r):n(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Xo=class extends a{constructor(){var e;super(...arguments),this.dappName=null==(e=c.state.metadata)?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){return s`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await B.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required"))return $.showError({message:"Something went wrong. We need to verify your account again."}),void y.replace("DataCapture");throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await B.cancelSignMessage().finally((()=>this.isCancelling=!1))}};Yo([w()],Xo.prototype,"isCancelling",void 0),Yo([w()],Xo.prototype,"isSigning",void 0),Xo=Yo([n("w3m-siwx-sign-message-view")],Xo);export{se as AppKitAccountButton,pe as AppKitButton,ve as AppKitConnectButton,Re as AppKitNetworkButton,re as W3mAccountButton,je as W3mAccountSettingsView,wt as W3mAccountView,si as W3mAllWalletsView,ue as W3mButton,lo as W3mChooseAccountNameView,fe as W3mConnectButton,Ai as W3mConnectView,fo as W3mConnectWalletsView,Ui as W3mConnectingExternalView,Fi as W3mConnectingMultiChainView,ao as W3mConnectingWcBasicView,oo as W3mConnectingWcView,co as W3mDownloadsView,V as W3mFooter,jt as W3mFundWalletView,uo as W3mGetWalletView,Ee as W3mNetworkButton,ko as W3mNetworkSwitchView,Ao as W3mNetworksView,Ot as W3mProfileWalletsView,K as W3mRouter,Xo as W3mSIWXSignMessageView,Po as W3mSwitchActiveChainView,zo as W3mUnsupportedChainView,Mo as W3mWalletCompatibleNetworksView,Do as W3mWhatIsANetworkView,mo as W3mWhatIsAWalletView};
