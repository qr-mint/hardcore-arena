import{j as e,r as t,k as i,n,l as o,m as s,x as a,q as r,C as c,R as u,P as l,S as d,t as m,G as h,a as p}from"./index-BEoefSux.js";import"./index-C1vLwcMZ.js";import"./index-kzT870eI.js";import"./index-CRp8uIzF.js";import"./index-DdyB_oj3.js";import"./index-NIgCdfht.js";import"./index-C1jNGidE.js";import"./index-CCFK-MhI.js";import{E as g}from"./ExchangeController-C_Xkd2XS.js";import"./index-DGqiGt1M.js";import"./index-CEnphRM1.js";import"./index-8aUkZyPU.js";import"./index-CNDRGK3c.js";import"./phaser-whA1hLzy.js";import"./ref-B1zIzxXI.js";const x=e`
  button {
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
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
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
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var w=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};const y={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};let f=class extends s{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return a`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?a`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?a`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${y[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?a`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};f.styles=[t,i,x],w([n()],f.prototype,"type",void 0),w([n()],f.prototype,"size",void 0),w([n()],f.prototype,"imageSrc",void 0),w([n({type:Boolean})],f.prototype,"disabled",void 0),w([n()],f.prototype,"leftIcon",void 0),w([n()],f.prototype,"rightIcon",void 0),w([n()],f.prototype,"text",void 0),f=w([o("wui-chip-button")],f);var b=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let v=class extends s{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return a`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${r(this.maxDecimals)}
          .maxIntegers=${r(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};b([n({type:Number})],v.prototype,"amount",void 0),b([n({type:Number})],v.prototype,"maxDecimals",void 0),b([n({type:Number})],v.prototype,"maxIntegers",void 0),v=b([o("w3m-fund-input")],v);const $=e`
  .amount-input-container {
    border-radius: ${({borderRadius:e})=>e[6]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
  }

  .container {
    border-radius: 30px;
  }
`;var k=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};const I=[10,50,100];let P=class extends s{constructor(){super(),this.unsubscribe=[],this.network=c.state.activeCaipNetwork,this.exchanges=g.state.exchanges,this.isLoading=g.state.isLoading,this.amount=g.state.amount,this.tokenAmount=g.state.tokenAmount,this.priceLoading=g.state.priceLoading,this.isPaymentInProgress=g.state.isPaymentInProgress,this.currentPayment=g.state.currentPayment,this.paymentId=g.state.paymentId,this.paymentAsset=g.state.paymentAsset,this.unsubscribe.push(c.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.setDefaultPaymentAsset()})),g.subscribe((e=>{var t,i;this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&(null==(t=e.currentPayment)?void 0:t.exchangeId)&&(null==(i=e.currentPayment)?void 0:i.sessionId)&&e.paymentId&&this.handlePaymentInProgress()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),g.state.isPaymentInProgress||g.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),g.setAmount(I[0]),await g.fetchExchanges()}render(){return a`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map((()=>a`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`))}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map((e=>a`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`)):a`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return a`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){var e,t;return a`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${(null==(e=this.paymentAsset)?void 0:e.metadata.symbol)||""}
            imageSrc=${(null==(t=this.paymentAsset)?void 0:t.metadata.iconUrl)||""}
            @click=${()=>u.push("PayWithExchangeSelectAsset")}
            size="lg"
            .chainImageSrc=${r(l.getNetworkImage(this.network))}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${6}
            .maxIntegers=${10}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${I.map((e=>a`<wui-chip-button
                @click=${()=>g.setAmount(e)}
                type="neutral"
                size="lg"
                text=${`$${e}`}
              ></wui-chip-button>`))}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){var e;return this.priceLoading?a`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:a`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${null==(e=this.paymentAsset)?void 0:e.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){this.amount?await g.handlePayWithExchange(e.id):d.showError("Please enter an amount")}handlePaymentInProgress(){var e,t;const i=c.state.activeChain,{redirectView:n="Account"}=u.state.data??{};this.isPaymentInProgress&&(null==(e=this.currentPayment)?void 0:e.exchangeId)&&(null==(t=this.currentPayment)?void 0:t.sessionId)&&this.paymentId&&(g.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then((e=>{"SUCCESS"===e.status?(d.showSuccess("Deposit completed"),g.reset(),i&&(c.fetchTokenBalance(),m.updateBalance(i)),u.replace("Transactions")):"FAILED"===e.status&&d.showError("Deposit failed")})),d.showLoading("Deposit in progress..."),u.replace(n))}onAmountChange({detail:e}){g.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await g.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const e=await g.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&g.setPaymentAsset(e[0])}}};P.styles=$,k([h()],P.prototype,"network",void 0),k([h()],P.prototype,"exchanges",void 0),k([h()],P.prototype,"isLoading",void 0),k([h()],P.prototype,"amount",void 0),k([h()],P.prototype,"tokenAmount",void 0),k([h()],P.prototype,"priceLoading",void 0),k([h()],P.prototype,"isPaymentInProgress",void 0),k([h()],P.prototype,"currentPayment",void 0),k([h()],P.prototype,"paymentId",void 0),k([h()],P.prototype,"paymentAsset",void 0),P=k([o("w3m-deposit-from-exchange-view")],P);const A=e`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`;var j=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends s{constructor(){super(),this.unsubscribe=[],this.assets=g.state.assets,this.search="",this.onDebouncedSearch=p.debounce((e=>{this.search=e})),this.unsubscribe.push(g.subscribe((e=>{this.assets=e.assets})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return a`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.assets.filter((e=>e.metadata.name.toLowerCase().includes(this.search.toLowerCase()))),t=e.length>0;return a`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${t?e.map((e=>a`<wui-list-item
                    .imageSrc=${e.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,e)}
                  >
                    <wui-text variant="md-medium" color="primary">${e.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${e.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`)):a`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){u.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){g.setPaymentAsset(e),u.goBack()}};C.styles=A,j([h()],C.prototype,"assets",void 0),j([h()],C.prototype,"search",void 0),C=j([o("w3m-deposit-from-exchange-select-asset-view")],C);export{C as W3mDepositFromExchangeSelectAssetView,P as W3mDepositFromExchangeView};
