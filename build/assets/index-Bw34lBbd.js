import{j as t,n as e,l as i,m as r,x as n,r as a,q as s,G as o,C as u,ah as c,a as l,R as d,O as p,E as h,y as f,W as m}from"./index-BEoefSux.js";import{U as g}from"./index-C1vLwcMZ.js";import{g as y}from"./phaser-whA1hLzy.js";import"./index-DGqiGt1M.js";import"./index-CCFK-MhI.js";import"./index-DdyB_oj3.js";var w,v={exports:{}};const x=y((w||(w=1,v.exports=function(){var t=6e4,e=36e5,i="millisecond",r="second",n="minute",a="hour",s="day",o="week",u="month",c="quarter",l="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},g=function(t,e,i){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(i)+t},y={s:g,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),r=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var r=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(r,u),a=i-n<0,s=e.clone().add(r+(a?-1:1),u);return+(-(r+(i-n)/(a?n-s:s-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:o,d:s,D:d,h:a,m:n,s:r,ms:i,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",v={};v[w]=m;var x="$isDayjsObject",b=function(t){return t instanceof k||!(!t||!t[x])},$=function t(e,i,r){var n;if(!e)return w;if("string"==typeof e){var a=e.toLowerCase();v[a]&&(n=a),i&&(v[a]=i,n=a);var s=e.split("-");if(!n&&s.length>1)return t(s[0])}else{var o=e.name;v[o]=e,n=o}return!r&&n&&(w=n),n||!r&&w},T=function(t,e){if(b(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new k(i)},D=y;D.l=$,D.i=b,D.w=function(t,e){return T(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function m(t){this.$L=$(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[x]=!0}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var n=r[2]-1||0,a=(r[7]||"0").substring(0,3);return i?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===p)},g.isSame=function(t,e){var i=T(t);return this.startOf(e)<=i&&i<=this.endOf(e)},g.isAfter=function(t,e){return T(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<T(t)},g.$g=function(t,e,i){return D.u(t)?this[e]:this.set(i,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var i=this,c=!!D.u(e)||e,p=D.p(t),h=function(t,e){var r=D.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return c?r:r.endOf(s)},f=function(t,e){return D.w(i.toDate()[t].apply(i.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},m=this.$W,g=this.$M,y=this.$D,w="set"+(this.$u?"UTC":"");switch(p){case l:return c?h(1,0):h(31,11);case u:return c?h(1,g):h(0,g+1);case o:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return h(c?y-x:y+(6-x),g);case s:case d:return f(w+"Hours",0);case a:return f(w+"Minutes",1);case n:return f(w+"Seconds",2);case r:return f(w+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var o,c=D.p(t),p="set"+(this.$u?"UTC":""),h=(o={},o[s]=p+"Date",o[d]=p+"Date",o[u]=p+"Month",o[l]=p+"FullYear",o[a]=p+"Hours",o[n]=p+"Minutes",o[r]=p+"Seconds",o[i]=p+"Milliseconds",o)[c],f=c===s?this.$D+(e-this.$W):e;if(c===u||c===l){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[D.p(t)]()},g.add=function(i,c){var d,p=this;i=Number(i);var h=D.p(c),f=function(t){var e=T(p);return D.w(e.date(e.date()+Math.round(t*i)),p)};if(h===u)return this.set(u,this.$M+i);if(h===l)return this.set(l,this.$y+i);if(h===s)return f(1);if(h===o)return f(7);var m=(d={},d[n]=t,d[a]=e,d[r]=1e3,d)[h]||1,g=this.$d.getTime()+i*m;return D.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||p;var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=D.z(this),a=this.$H,s=this.$m,o=this.$M,u=i.weekdays,c=i.months,l=i.meridiem,d=function(t,i,n,a){return t&&(t[i]||t(e,r))||n[i].slice(0,a)},h=function(t){return D.s(a%12||12,t,"0")},m=l||function(t,e,i){var r=t<12?"AM":"PM";return i?r.toLowerCase():r};return r.replace(f,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return o+1;case"MM":return D.s(o+1,2,"0");case"MMM":return d(i.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(i.weekdaysMin,e.$W,u,2);case"ddd":return d(i.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(a,s,!0);case"A":return m(a,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return n}return null}(t)||n.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,d,p){var h,f=this,m=D.p(d),g=T(i),y=(g.utcOffset()-this.utcOffset())*t,w=this-g,v=function(){return D.m(f,g)};switch(m){case l:h=v()/12;break;case u:h=v();break;case c:h=v()/3;break;case o:h=(w-y)/6048e5;break;case s:h=(w-y)/864e5;break;case a:h=w/e;break;case n:h=w/t;break;case r:h=w/1e3;break;default:h=w}return p?h:D.a(h)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return v[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),r=$(t,e,!0);return r&&(i.$L=r),i},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),M=k.prototype;return T.prototype=M,[["$ms",i],["$s",r],["$m",n],["$H",a],["$W",s],["$M",u],["$y",l],["$D",d]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),T.extend=function(t,e){return t.$i||(t(e,k,T),t.$i=!0),T},T.locale=$,T.isDayjs=b,T.unix=function(t){return T(1e3*t)},T.en=v[w],T.Ls=v,T.p={},T}()),v.exports));var b,$={exports:{}};const T=y(b?$.exports:(b=1,$.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}}));var D,k={exports:{}};const M=y(D?k.exports:(D=1,k.exports=function(t,e,i){t=t||{};var r=e.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,i,n){return r.fromToBase(t,e,i,n)}i.en.relativeTime=n,r.fromToBase=function(e,r,a,s,o){for(var u,c,l,d=a.$locale().relativeTime||n,p=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=p.length,f=0;f<h;f+=1){var m=p[f];m.d&&(u=s?i(e).diff(a,m.d,!0):a.diff(e,m.d,!0));var g=(t.rounding||Math.round)(Math.abs(u));if(l=u>0,g<=m.r||!m.r){g<=1&&f>0&&(m=p[f-1]);var y=d[m.l];o&&(g=o(""+g)),c="string"==typeof y?y.replace("%d",g):y(g,r,m.l,l);break}}if(r)return c;var w=l?d.future:d.past;return"function"==typeof w?w(c):w.replace("%s",c)},r.to=function(t,e){return a(t,e,this,!0)},r.from=function(t,e){return a(t,e,this)};var s=function(t){return t.$u?i.utc():i()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}));var S,O={exports:{}};const _=y(S?O.exports:(S=1,O.exports=function(t,e,i){i.updateLocale=function(t,e){var r=i.Ls[t];if(r)return(e?Object.keys(e):[]).forEach((function(t){r[t]=e[t]})),r}}));x.extend(M),x.extend(_);const I={...T,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},A=["January","February","March","April","May","June","July","August","September","October","November","December"];x.locale("en-web3-modal",I);const j=t=>A[t],C=(t=(new Date).toISOString())=>x(t).year(),R=(t,e="DD MMM")=>x(t).format(e),z=.1,N=["receive","deposit","borrow","claim"],P=["withdraw","repay","burn"],F={getTransactionGroupTitle(t,e){const i=C(),r=j(e);return t===i?r:`${r} ${t}`},getTransactionImages(t){const[e]=t;return(null==t?void 0:t.length)>1?t.map((t=>this.getTransactionImage(t))):[this.getTransactionImage(e)]},getTransactionImage:t=>({type:F.getTransactionTransferTokenType(t),url:F.getTransactionImageURL(t)}),getTransactionImageURL(t){var e,i,r,n,a;let s;const o=Boolean(null==t?void 0:t.nft_info),u=Boolean(null==t?void 0:t.fungible_info);return t&&o?s=null==(r=null==(i=null==(e=null==t?void 0:t.nft_info)?void 0:e.content)?void 0:i.preview)?void 0:r.url:t&&u&&(s=null==(a=null==(n=null==t?void 0:t.fungible_info)?void 0:n.icon)?void 0:a.url),s},getTransactionTransferTokenType:t=>(null==t?void 0:t.fungible_info)?"FUNGIBLE":(null==t?void 0:t.nft_info)?"NFT":void 0,getTransactionDescriptions(t,e){var i;const r=null==(i=null==t?void 0:t.metadata)?void 0:i.operationType,n=e||(null==t?void 0:t.transfers),a=(null==n?void 0:n.length)>0,s=(null==n?void 0:n.length)>1,o=a&&(null==n?void 0:n.every((t=>Boolean(null==t?void 0:t.fungible_info)))),[u,c]=n;let l=this.getTransferDescription(u),d=this.getTransferDescription(c);if(!a)return"send"!==r&&"receive"!==r||!o?[t.metadata.status]:(l=g.getTruncateString({string:null==t?void 0:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),d=g.getTruncateString({string:null==t?void 0:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,d]);if(s)return n.map((t=>this.getTransferDescription(t)));let p="";return N.includes(r)?p="+":P.includes(r)&&(p="-"),l=p.concat(l),[l]},getTransferDescription(t){var e;let i="";return t?((null==t?void 0:t.nft_info)?i=(null==(e=null==t?void 0:t.nft_info)?void 0:e.name)||"-":(null==t?void 0:t.fungible_info)&&(i=this.getFungibleTransferDescription(t)||"-"),i):i},getFungibleTransferDescription(t){var e;return t?[this.getQuantityFixedValue(null==t?void 0:t.quantity.numeric),null==(e=null==t?void 0:t.fungible_info)?void 0:e.symbol].join(" ").trim():null},mergeTransfers(t){if((null==t?void 0:t.length)<=1)return t;const e=this.filterGasFeeTransfers(t).reduce(((t,e)=>{var i;const r=null==(i=null==e?void 0:e.fungible_info)?void 0:i.name,n=t.find((({fungible_info:t,direction:i})=>r&&r===(null==t?void 0:t.name)&&i===e.direction));if(n){const t=Number(n.quantity.numeric)+Number(e.quantity.numeric);n.quantity.numeric=t.toString(),n.value=(n.value||0)+(e.value||0)}else t.push(e);return t}),[]);let i=e;return e.length>2&&(i=e.sort(((t,e)=>(e.value||0)-(t.value||0))).slice(0,2)),i=i.sort(((t,e)=>"out"===t.direction&&"in"===e.direction?-1:"in"===t.direction&&"out"===e.direction?1:0)),i},filterGasFeeTransfers(t){const e=t.reduce(((t,e)=>{var i;const r=null==(i=null==e?void 0:e.fungible_info)?void 0:i.name;return r&&(t[r]||(t[r]=[]),t[r].push(e)),t}),{}),i=[];return Object.values(e).forEach((t=>{if(1===t.length){const e=t[0];e&&i.push(e)}else{const e=t.filter((t=>"in"===t.direction)),r=t.filter((t=>"out"===t.direction));if(1===e.length&&1===r.length){const n=e[0],a=r[0];let s=!1;if(n&&a){const t=Number(n.quantity.numeric),e=Number(a.quantity.numeric);e<t*z?(i.push(n),s=!0):t<e*z&&(i.push(a),s=!0)}s||i.push(...t)}else{const e=this.filterGasFeesFromTokenGroup(t);i.push(...e)}}})),t.forEach((t=>{var e;(null==(e=null==t?void 0:t.fungible_info)?void 0:e.name)||i.push(t)})),i},filterGasFeesFromTokenGroup(t){if(t.length<=1)return t;const e=t.map((t=>Number(t.quantity.numeric))),i=Math.max(...e);if(Math.min(...e)<.01*i)return t.filter((t=>Number(t.quantity.numeric)>=.01*i));const r=t.filter((t=>"in"===t.direction)),n=t.filter((t=>"out"===t.direction));if(1===r.length&&1===n.length){const t=r[0],e=n[0];if(t&&e){const i=Number(t.quantity.numeric),r=Number(e.quantity.numeric);if(r<i*z)return[t];if(i<r*z)return[e]}}return t},getQuantityFixedValue:t=>t?parseFloat(t).toFixed(3):null};var Y,B;(B=Y||(Y={})).approve="approved",B.bought="bought",B.borrow="borrowed",B.burn="burnt",B.cancel="canceled",B.claim="claimed",B.deploy="deployed",B.deposit="deposited",B.execute="executed",B.mint="minted",B.receive="received",B.repay="repaid",B.send="sent",B.sell="sold",B.stake="staked",B.trade="swapped",B.unstake="unstaked",B.withdraw="withdrawn";const L=t`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var U=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let q=class extends r{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images;this.images.length||(this.dataset.noImages="true");const i="NFT"===(null==t?void 0:t.type),r=i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",a=((null==e?void 0:e.url)?"NFT"===e.type:i)?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`\n    --local-left-border-radius: ${r};\n    --local-right-border-radius: ${a};\n    `,n`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,i=null==t?void 0:t.type;return 2===this.images.length&&((null==t?void 0:t.url)||(null==e?void 0:e.url))?n`<div class="swap-images-container">
        ${(null==t?void 0:t.url)?n`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${(null==e?void 0:e.url)?n`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:(null==t?void 0:t.url)?n`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===i?n`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:n`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-primary";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?n`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${e} icon=${t}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};q.styles=[L],U([e()],q.prototype,"type",void 0),U([e()],q.prototype,"status",void 0),U([e()],q.prototype,"direction",void 0),U([e({type:Boolean})],q.prototype,"onlyDirectionIcon",void 0),U([e({type:Array})],q.prototype,"images",void 0),U([e({type:Object})],q.prototype,"secondImage",void 0),q=U([i("wui-transaction-visual")],q);const E=t`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var H=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let W=class extends r{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return n`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${s(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${Y[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var t;const e=null==(t=this.descriptions)?void 0:t[0];return e?n`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var t;const e=null==(t=this.descriptions)?void 0:t[1];return e?n`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};W.styles=[a,E],H([e()],W.prototype,"type",void 0),H([e({type:Array})],W.prototype,"descriptions",void 0),H([e()],W.prototype,"date",void 0),H([e({type:Boolean})],W.prototype,"onlyDirectionIcon",void 0),H([e()],W.prototype,"status",void 0),H([e()],W.prototype,"direction",void 0),H([e({type:Array})],W.prototype,"images",void 0),W=H([i("wui-transaction-list-item")],W);const V=t`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t[128]};
  }

  .fallback-icon {
    color: ${({tokens:t})=>t.theme.iconInverse};
    border-radius: ${({borderRadius:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:t})=>t[128]};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:t})=>t["01"]};
    color: ${({tokens:t})=>t.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:t})=>t.core.textSuccess} 30%,
      ${({tokens:t})=>t.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var G=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const J={sm:"xxs",lg:"md"};let Z=class extends r{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return n`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,e]=this.images;return 2===this.images.length&&(t||e)?n`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${e} alt="Swap image"></wui-image>
      `:t?n`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return n`<wui-icon
      class="fallback-icon"
      size=${J[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return n`<wui-icon
      class="fallback-icon"
      size=${J[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?n`<wui-image src=${t} alt="Token image"></wui-image> `:n`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?n`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:n`<wui-icon
      class="direction-icon"
      size=${J[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};Z.styles=[V],G([e()],Z.prototype,"type",void 0),G([e()],Z.prototype,"size",void 0),G([e()],Z.prototype,"statusImageUrl",void 0),G([e({type:Array})],Z.prototype,"images",void 0),Z=G([i("wui-transaction-thumbnail")],Z);const Q=t`
  :host > wui-flex:first-child {
    gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let K=class extends r{render(){return n`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};K.styles=[a,Q],K=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s}([i("wui-transaction-list-item-loader")],K);const X=t`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:t})=>t[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var tt=function(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const et="last-transaction";let it=class extends r{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=u.state.activeCaipAddress,this.transactionsByYear=c.state.transactionsByYear,this.loading=c.state.loading,this.empty=c.state.empty,this.next=c.state.next,c.clearCursor(),this.unsubscribe.push(u.subscribeKey("activeCaipAddress",(t=>{t&&this.caipAddress!==t&&(c.resetTransactions(),c.fetchTransactions(t)),this.caipAddress=t})),u.subscribeKey("activeCaipNetwork",(()=>{this.updateTransactionView()})),c.subscribe((t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next})))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return n` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){c.resetTransactions(),this.caipAddress&&c.fetchTransactions(l.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map((t=>{const e=parseInt(t,10),i=new Array(12).fill(null).map(((t,i)=>{var r;return{groupTitle:F.getTransactionGroupTitle(e,i),transactions:null==(r=this.transactionsByYear[e])?void 0:r[i]}})).filter((({transactions:t})=>t)).reverse();return i.map((({groupTitle:t,transactions:e},r)=>{const a=r===i.length-1;return e?n`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${a?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${t}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(e,a)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(t,e){const{date:i,descriptions:r,direction:a,images:s,status:o,type:u,transfers:c,isAllNFT:l}=this.getTransactionListItemProps(t);return n`
      <wui-transaction-list-item
        date=${i}
        .direction=${a}
        id=${e&&this.next?et:""}
        status=${o}
        type=${u}
        .images=${s}
        .onlyDirectionIcon=${l||1===c.length}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(t,e){return t.map(((i,r)=>{const a=e&&r===t.length-1;return n`${this.templateRenderTransaction(i,a)}`}))}emptyStateActivity(){return n`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return n`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?n`${this.emptyStateAccount()}`:n`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(n` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((t=>t)):null}onReceiveClick(){d.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=p.state;this.paginationObserver=new IntersectionObserver((([e])=>{(null==e?void 0:e.isIntersecting)&&!this.loading&&(c.fetchTransactions(l.getPlainAddress(this.caipAddress)),h.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:l.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:f(u.state.activeChain)===m.ACCOUNT_TYPES.SMART_ACCOUNT}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){var t,e,i;null==(t=this.paginationObserver)||t.disconnect();const r=null==(e=this.shadowRoot)?void 0:e.querySelector(`#${et}`);r&&(null==(i=this.paginationObserver)||i.observe(r))}getTransactionListItemProps(t){var e,i,r;const n=R(null==(e=null==t?void 0:t.metadata)?void 0:e.minedAt),a=F.mergeTransfers(null==t?void 0:t.transfers),s=F.getTransactionDescriptions(t,a),o=null==a?void 0:a[0],u=Boolean(o)&&(null==a?void 0:a.every((t=>Boolean(t.nft_info)))),c=F.getTransactionImages(a);return{date:n,direction:null==o?void 0:o.direction,descriptions:s,isAllNFT:u,images:c,status:null==(i=t.metadata)?void 0:i.status,transfers:a,type:null==(r=t.metadata)?void 0:r.operationType}}};it.styles=X,tt([e()],it.prototype,"page",void 0),tt([o()],it.prototype,"caipAddress",void 0),tt([o()],it.prototype,"transactionsByYear",void 0),tt([o()],it.prototype,"loading",void 0),tt([o()],it.prototype,"empty",void 0),tt([o()],it.prototype,"next",void 0),it=tt([i("w3m-activity-list")],it);
