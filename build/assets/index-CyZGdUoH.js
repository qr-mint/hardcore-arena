import{j as e,m as t,R as a,x as i,E as r,G as n,l as s,r as o,n as l,q as c,k as w}from"./index-BEoefSux.js";import"./index-CnGID-LM.js";import{H as m}from"./HelpersUtil-Bm_kHAtr.js";import"./index-DGqiGt1M.js";import"./index-BBGopqFP.js";const u=e`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var p=function(e,t,a,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,a,s):r(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};let d=class extends t{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=a.state.view}firstUpdated(){this.status=m.hasFooter()?"show":"hide",this.unsubscribe.push(a.subscribeKey("view",(e=>{this.view=e,this.status=m.hasFooter()?"show":"hide","hide"===this.status&&document.documentElement.style.setProperty("--apkt-footer-height","0px")}))),this.resizeObserver=new ResizeObserver((e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}})),this.resizeObserver.observe(this.getWrapper())}render(){return i`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return m.hasFooter()?i` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return i`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return i`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return i` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){r.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),a.push("WhatIsANetwork")}getWrapper(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("div.container")}};d.styles=[u],p([n()],d.prototype,"status",void 0),p([n()],d.prototype,"view",void 0),d=p([s("w3m-footer")],d);const v=e`
  :host {
    display: block;
    width: inherit;
  }
`;var h=function(e,t,a,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,a,s):r(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};let g=class extends t{constructor(){super(),this.unsubscribe=[],this.viewState=a.state.view,this.history=a.state.history.join(","),this.unsubscribe.push(a.subscribeKey("view",(()=>{this.history=a.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return i`${this.templatePageContainer()}`}templatePageContainer(){return i`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=a.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return i`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return i`<w3m-account-view></w3m-account-view>`;case"AllWallets":return i`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return i`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return i`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return i`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return i`<w3m-connect-view></w3m-connect-view>`;case"Create":return i`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return i`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return i`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return i`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return i`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return i`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return i`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return i`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return i`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return i`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return i`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return i`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return i`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return i`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return i`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return i`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return i`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return i`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return i`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return i`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return i`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return i`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return i`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return i`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return i`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return i`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return i`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return i`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return i`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return i`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return i`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return i`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return i`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return i`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return i`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return i`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return i`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return i`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return i`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return i`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return i`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return i`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return i`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return i`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return i`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return i`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return i`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return i`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return i`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return i`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return i`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return i`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return i`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return i`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};g.styles=[v],h([n()],g.prototype,"viewState",void 0),h([n()],g.prototype,"history",void 0),g=h([s("w3m-router")],g);const f=e`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var y=function(e,t,a,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,a,s):r(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};let b=class extends t{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return i`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>i`
          <wui-wallet-image
            size="sm"
            imageSrc=${e}
            name=${c(t)}
          ></wui-wallet-image>
        `))}
    ${e?[...Array(4-this.walletImages.length)].map((()=>i` <wui-wallet-image size="sm" name=""></wui-wallet-image>`)):null} `}};b.styles=[o,f],y([l({type:Array})],b.prototype,"walletImages",void 0),b=y([s("wui-all-wallets-image")],b);const k=e`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var x=function(e,t,a,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(n<3?r(s):n>3?r(t,a,s):r(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s};const $={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton"};let S=class extends t{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,i`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${c(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){var e;return(null==(e=this.namespaces)?void 0:e.length)?i`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map(((e,t)=>{var a;return i`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${2*((null==(a=this.namespaces)?void 0:a.length)??0)-t}
              class="namespace-icon"
            >
              <wui-icon
                name=${c($[e])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`}))}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?i` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?i` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?i`<wui-wallet-image
        size=${c("sm"===this.size?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:i`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?i`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?i`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};S.styles=[o,w,k],x([l({type:Array})],S.prototype,"walletImages",void 0),x([l()],S.prototype,"imageSrc",void 0),x([l()],S.prototype,"name",void 0),x([l()],S.prototype,"size",void 0),x([l()],S.prototype,"tagLabel",void 0),x([l()],S.prototype,"tagVariant",void 0),x([l()],S.prototype,"walletIcon",void 0),x([l()],S.prototype,"tabIdx",void 0),x([l({type:Array})],S.prototype,"namespaces",void 0),x([l({type:Boolean})],S.prototype,"disabled",void 0),x([l({type:Boolean})],S.prototype,"showAllWallets",void 0),x([l({type:Boolean})],S.prototype,"loading",void 0),x([l({type:String})],S.prototype,"loadingSpinnerColor",void 0),S=x([s("wui-list-wallet")],S);export{g as W,d as a};
