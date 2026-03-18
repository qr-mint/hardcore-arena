import{o as e,m as t,x as i,l as r}from"./index-BEoefSux.js";import"./index-C1vLwcMZ.js";import"./index-Bw34lBbd.js";import"./phaser-whA1hLzy.js";import"./index-DGqiGt1M.js";import"./index-CCFK-MhI.js";import"./index-DdyB_oj3.js";const o=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let n=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};n.styles=o,n=function(e,t,i,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}([r("w3m-transactions-view")],n);export{n as W3mTransactionsView};
