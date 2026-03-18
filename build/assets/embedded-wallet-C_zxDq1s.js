import{o as e,m as t,M as i,O as o,x as r,F as n,T as s,a5 as a,G as c,l as d,j as l,r as u,k as p,n as h,d as g,C as m,a6 as f,u as w,y as b,W as y,t as v,a7 as x,q as $,a8 as k,a as S,E as A,S as R,R as T}from"./index-BEoefSux.js";import"./index-C1vLwcMZ.js";import{e as C,n as E}from"./ref-B1zIzxXI.js";import{H as N}from"./HelpersUtil-Bm_kHAtr.js";import"./index-CEnphRM1.js";import"./index-kzT870eI.js";import"./index-NIgCdfht.js";import"./index-DGqiGt1M.js";import"./index-CCFK-MhI.js";import{N as O}from"./NavigationUtil-DmfK5sOV.js";import"./phaser-whA1hLzy.js";const P=e`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var _=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let j=class extends t{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(i.subscribeKey("open",(e=>{e||this.onHideIframe()})),i.subscribeKey("shake",(e=>{this.iframe.style.animation=e?"w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":"none"})))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach((e=>e())),null==(e=this.bodyObserver)||e.unobserve(window.document.body)}async firstUpdated(){var e;await this.syncTheme(),this.iframe.style.display="block";const t=null==(e=null==this?void 0:this.renderRoot)?void 0:e.querySelector("div");this.bodyObserver=new ResizeObserver((e=>{var i,r;const n=null==(i=null==e?void 0:e[0])?void 0:i.contentBoxSize,s=null==(r=null==n?void 0:n[0])?void 0:r.inlineSize;this.iframe.style.height="600px",t.style.height="600px",o.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():s&&s<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset",this.onShowIframe())})),this.bodyObserver.observe(window.document.body)}render(){return r`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){const e=n.getAuthConnector();if(e){const t=s.getSnapshot().themeMode,i=s.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:a(i,t)})}}async updateFrameSizeForEmbeddedMode(){var e;const t=null==(e=null==this?void 0:this.renderRoot)?void 0:e.querySelector("div");await new Promise((e=>{setTimeout(e,300)}));const i=this.getBoundingClientRect();t.style.width="100%",this.iframe.style.left=`${i.left}px`,this.iframe.style.top=`${i.top}px`,this.iframe.style.width=`${i.width}px`,this.iframe.style.height=`${i.height}px`,this.onShowIframe()}};j.styles=P,_([c()],j.prototype,"ready",void 0),j=_([d("w3m-approve-transaction-view")],j);const I=l`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var z=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};const D={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},U={success:"sealCheck",error:"warning",warning:"exclamationCircle"};let M=class extends t{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return r`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${D[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?r`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:r`<wui-icon
      name=${U[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};M.styles=[u,p,I],z([h()],M.prototype,"type",void 0),z([h()],M.prototype,"size",void 0),z([h()],M.prototype,"imageSrc",void 0),z([h({type:Boolean})],M.prototype,"disabled",void 0),z([h()],M.prototype,"href",void 0),z([h()],M.prototype,"text",void 0),M=z([d("wui-semantic-chip")],M);let V=class extends t{render(){return r`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${g.SECURE_SITE_DASHBOARD}
          href=${g.SECURE_SITE_DASHBOARD}
          imageSrc=${g.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};V=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}([d("w3m-upgrade-wallet-view")],V);var B=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let Y=class extends t{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text="",this.network=m.state.activeCaipNetwork}render(){return r`
      <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return r`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?"arrowTop":"arrowBottom"}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?"7":"6"}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return"v6"===(f.get("dapp_smart_account_version")||"v6")}toggleSmartAccountVersion(){var e;f.set("dapp_smart_account_version",this.isV6()?"v7":"v6"),"undefined"!=typeof window&&(null==(e=null==window?void 0:window.location)||e.reload())}togglePreferredAccountTypeTemplate(){var e;const t=null==(e=this.network)?void 0:e.chainNamespace,i=m.checkIfSmartAccountEnabled(),o=n.getConnectorId(t);return n.getAuthConnector()&&o===w.CONNECTOR_ID.AUTH&&i?(this.switched||(this.text=b(t)===y.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),r`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `):null}async changePreferredAccountType(){var e;const t=null==(e=this.network)?void 0:e.chainNamespace,i=m.checkIfSmartAccountEnabled(),o=b(t)!==y.ACCOUNT_TYPES.SMART_ACCOUNT&&i?y.ACCOUNT_TYPES.SMART_ACCOUNT:y.ACCOUNT_TYPES.EOA;n.getAuthConnector()&&(this.loading=!0,await v.setPreferredAccountType(o,t),this.text=o===y.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,x.resetSend(),this.loading=!1,this.requestUpdate())}};B([c()],Y.prototype,"loading",void 0),B([c()],Y.prototype,"switched",void 0),B([c()],Y.prototype,"text",void 0),B([c()],Y.prototype,"network",void 0),Y=B([d("w3m-smart-account-settings-view")],Y);const F=l`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var K=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let H=class extends t{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return r`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?r`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?r`<wui-tag variant="info" size="sm">Registered</wui-tag>`:r`<wui-tag variant="success" size="sm">Available</wui-tag>`}};H.styles=[u,p,F],K([h()],H.prototype,"name",void 0),K([h({type:Boolean})],H.prototype,"registered",void 0),K([h({type:Boolean})],H.prototype,"loading",void 0),K([h({type:Boolean})],H.prototype,"disabled",void 0),H=K([d("wui-account-name-suggestion-item")],H);const W=l`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var L=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let G=class extends t{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return r`
      <wui-input-text
        value=${$(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};G.styles=[u,W],L([h()],G.prototype,"errorMessage",void 0),L([h({type:Boolean})],G.prototype,"disabled",void 0),L([h()],G.prototype,"value",void 0),L([h({type:Boolean})],G.prototype,"loading",void 0),L([h({attribute:!1})],G.prototype,"onKeyDown",void 0),G=L([d("wui-ens-input")],G);const q=l`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var X=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let Q=class extends t{constructor(){var e;super(),this.formRef=C(),this.usubscribe=[],this.name="",this.error="",this.loading=k.state.loading,this.suggestions=k.state.suggestions,this.profileName=null==(e=m.getAccountData())?void 0:e.profileName,this.onDebouncedNameInputChange=S.debounce((e=>{e.length<4?this.error="Name must be at least 4 characters long":N.isValidReownName(e)?(this.error="",k.getSuggestions(e)):this.error="The value is not a valid username"})),this.usubscribe.push(k.subscribe((e=>{this.suggestions=e.suggestions,this.loading=e.loading})),m.subscribeChainProp("accountState",(e=>{this.profileName=null==e?void 0:e.profileName,(null==e?void 0:e.profileName)&&(this.error="You already own a name")})))}firstUpdated(){var e;null==(e=this.formRef.value)||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach((e=>e())),null==(e=this.formRef.value)||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${E(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const e=this.suggestions.find((e=>{var t,i;return(null==(i=null==(t=e.name)?void 0:t.split("."))?void 0:i[0])===this.name&&e.registered}));if(this.loading)return r`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;const t=`${this.name}${w.WC_NAME_SUFFIX}`;return r`
      <wui-icon-link
        ?disabled=${Boolean(e)}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){const t=N.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){1!==e.key.length||N.isValidReownName(e.key)||e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:r`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map((e=>r`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`))}
    </wui-flex>`}isAllowedToSubmit(e){var t;const i=null==(t=e.split("."))?void 0:t[0],o=this.suggestions.find((e=>{var t,o;return(null==(o=null==(t=e.name)?void 0:t.split("."))?void 0:o[0])===i&&e.registered}));return!this.loading&&!this.error&&!this.profileName&&i&&k.validateName(i)&&!o}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;A.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:b(m.state.activeChain)===y.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await k.registerName(e),A.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:b(m.state.activeChain)===y.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){R.showError(t.message),A.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:b(m.state.activeChain)===y.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:S.parseError(t)}})}}onEnterKey(e){if("Enter"===e.key&&this.name&&this.isAllowedToSubmit(this.name)){const e=`${this.name}${w.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};Q.styles=q,X([h()],Q.prototype,"errorMessage",void 0),X([c()],Q.prototype,"name",void 0),X([c()],Q.prototype,"error",void 0),X([c()],Q.prototype,"loading",void 0),X([c()],Q.prototype,"suggestions",void 0),X([c()],Q.prototype,"profileName",void 0),Q=X([d("w3m-register-account-name-view")],Q);const Z=e`
  .continue-button-container {
    width: 100%;
  }
`;let J=class extends t{render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{S.openHref(O.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return r` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return r`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){T.replace("Account")}};J.styles=Z,J=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}([d("w3m-register-account-name-success-view")],J);export{j as W3mApproveTransactionView,J as W3mRegisterAccountNameSuccess,Q as W3mRegisterAccountNameView,Y as W3mSmartAccountSettingsView,V as W3mUpgradeWalletView};
