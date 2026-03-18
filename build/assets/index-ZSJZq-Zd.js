import{j as a,r as e,n as t,l as r,m as o,x as l}from"./index-BEoefSux.js";import{U as i}from"./index-C1vLwcMZ.js";const s=a`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:a})=>a[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(a,e,t,r){var o,l=arguments.length,i=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(a,e,t,r);else for(var s=a.length-1;s>=0;s--)(o=a[s])&&(i=(l<3?o(i):l>3?o(e,t,i):o(e,t))||i);return l>3&&i&&Object.defineProperty(e,t,i),i};let d=class extends o{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const a={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`\n    --local-width: var(--apkt-spacing-${a[this.size??"xl"]});\n    --local-height: var(--apkt-spacing-${a[this.size??"xl"]});\n    `,l`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const a=i.generateAvatarColors(this.address);return this.style.cssText+=`\n ${a}`,null}return this.dataset.variant="default",null}};d.styles=[e,s],c([t()],d.prototype,"imageSrc",void 0),c([t()],d.prototype,"alt",void 0),c([t()],d.prototype,"address",void 0),c([t()],d.prototype,"size",void 0),d=c([r("wui-avatar")],d);
