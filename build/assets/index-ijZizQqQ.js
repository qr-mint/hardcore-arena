import{w as t,p as e,s as a,i,j as o,G as r,l as s,m as n,x as p}from"./index-BEoefSux.js";import"./index-C1vLwcMZ.js";const c=e({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),l=t({state:c,subscribe:t=>i(c,(()=>t(c))),subscribeKey:(t,e)=>a(c,t,e),showTooltip({message:t,triggerRect:e,variant:a}){c.open=!0,c.message=t,c.triggerRect=e,c.variant=a},hide(){c.open=!1,c.message="",c.triggerRect={width:0,height:0,top:0,left:0}}}),m=o`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:t})=>t[3]} 10px ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:t})=>t[5]});
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var d=function(t,e,a,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(r<3?o(s):r>3?o(e,a,s):o(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s};let g=class extends n{constructor(){super(),this.unsubscribe=[],this.open=l.state.open,this.message=l.state.message,this.triggerRect=l.state.triggerRect,this.variant=l.state.variant,this.unsubscribe.push(l.subscribe((t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${t}px;\n    --w3m-tooltip-left: ${e}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,p`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};g.styles=[m],d([r()],g.prototype,"open",void 0),d([r()],g.prototype,"message",void 0),d([r()],g.prototype,"triggerRect",void 0),d([r()],g.prototype,"variant",void 0),g=d([s("w3m-tooltip")],g);export{l as T};
