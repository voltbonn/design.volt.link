try{
(()=>{var n=__REACT__,{Children:G,Component:N,Fragment:F,Profiler:q,PureComponent:D,StrictMode:K,Suspense:j,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:z,act:V,cloneElement:Y,createContext:H,createElement:W,createFactory:$,createRef:Q,forwardRef:J,isValidElement:X,lazy:Z,memo:ee,startTransition:te,unstable_act:ae,useCallback:re,useContext:oe,useDebugValue:ne,useDeferredValue:le,useEffect:se,useId:de,useImperativeHandle:ie,useInsertionEffect:ce,useLayoutEffect:me,useMemo:pe,useReducer:ue,useRef:he,useState:be,useSyncExternalStore:fe,useTransition:ge,version:ye}=__REACT__;var Te=__STORYBOOK_API__,{ActiveTabs:Ce,Consumer:xe,ManagerContext:we,Provider:Ee,RequestResponseError:Oe,Tag:Pe,addons:o,combineParameters:Le,controlOrMetaKey:Re,controlOrMetaSymbol:Be,eventMatchesShortcut:Me,eventToShortcut:Ae,experimental_MockUniversalStore:Ue,experimental_UniversalStore:Ie,experimental_getStatusStore:Ge,experimental_getTestProviderStore:Ne,experimental_requestResponse:Fe,experimental_useStatusStore:qe,experimental_useTestProviderStore:De,experimental_useUniversalStore:Ke,getService:je,internal_checklistStore:ze,internal_fullStatusStore:Ve,internal_fullTestProviderStore:Ye,internal_universalChecklistStore:He,internal_universalStatusStore:We,internal_universalTestProviderStore:$e,isMacLike:Qe,isShortcutTaken:Je,keyToSymbol:Xe,merge:Ze,mockChannel:et,optionOrAltSymbol:tt,registerService:at,shortcutMatchesShortcut:rt,shortcutToAriaKeyshortcuts:ot,shortcutToHumanString:nt,types:c,useAddonState:lt,useArgTypes:st,useArgs:dt,useChannel:it,useGlobalTypes:ct,useGlobals:m,useParameter:mt,useServiceCommand:pt,useServiceQuery:ut,useSharedState:ht,useStoryPrepared:bt,useStorybookApi:ft,useStorybookState:gt}=__STORYBOOK_API__;var _t=__STORYBOOK_THEMING__,{CacheProvider:Tt,ClassNames:Ct,Global:xt,ThemeProvider:wt,background:Et,color:Ot,convert:Pt,create:p,createCache:Lt,createGlobal:Rt,createReset:Bt,css:Mt,darken:At,ensure:Ut,getPreferredColorScheme:It,ignoreSsrWarning:Gt,isPropValid:Nt,jsx:Ft,keyframes:qt,lighten:Dt,srOnlyStyles:Kt,srOnlyUnsetStyles:jt,styled:zt,themes:Vt,tokens:Yt,typography:Ht,useTheme:Wt,withTheme:$t}=__STORYBOOK_THEMING__;var y={brandTitle:"design.volt.link",brandUrl:"?path=/docs/volt-design-00-einstieg--docs",brandTarget:"_self"},S={light:p({base:"light",...y,colorPrimary:"#502379",colorSecondary:"#502379",appBg:"#f7f4fa",appContentBg:"#ffffff",appBorderColor:"#d8d3e0",appBorderRadius:8,barBg:"#ffffff",barTextColor:"#625a6f",barSelectedColor:"#502379",textColor:"#201a29",textMutedColor:"#625a6f",inputBg:"#ffffff",inputBorder:"#d8d3e0",inputTextColor:"#201a29",inputBorderRadius:8}),dark:p({base:"dark",...y,colorPrimary:"#fdc220",colorSecondary:"#fdc220",appBg:"#150d20",appContentBg:"#21152e",appBorderColor:"#71558d",appBorderRadius:8,barBg:"#21152e",barTextColor:"#cfc4dc",barSelectedColor:"#fdc220",textColor:"#f8f2ff",textMutedColor:"#cfc4dc",inputBg:"#1b1028",inputBorder:"#71558d",inputTextColor:"#f8f2ff",inputBorderRadius:8})},k=null,x={de:"Komponenten suchen",en:"Find components",nl:"Componenten zoeken",fr:"Rechercher des composants"},_={de:"Anpassbare Vorlagen",en:"Customisable Templates",nl:"Aanpasbare Sjablonen",fr:"Mod\xE8les personnalisables"},T=t=>{let e=t?.locale;return e==="en"||e==="nl"||e==="fr"?e:"de"},h={de:{imprint:"Impressum",privacy:"Datenschutz"},en:{imprint:"Legal notice",privacy:"Privacy"},nl:{imprint:"Colofon",privacy:"Privacy"},fr:{imprint:"Mentions l\xE9gales",privacy:"Confidentialit\xE9"}},w=()=>{let t=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.replace(/^#/,"").replace(/^\?/,""));return(t.get("globals")??e.get("globals")??"").match(/(?:^|;)locale:(de|en|nl|fr)(?:;|$)/)?.[1]??"de"},b=()=>{let t=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.replace(/^#/,"").replace(/^\?/,""));return(t.get("globals")??e.get("globals")??"").match(/(?:^|;)theme:(light|dark)(?:;|$)/)?.[1]??"light"},E=t=>{let e=t?.globals?.theme??t?.userGlobals?.theme??t?.initialGlobals?.theme;return e==="dark"||e==="light"?e:null},f=(t=b(),{force:e=!1}={})=>{let a=t==="dark"||t==="light"?t:"light";!e&&k===a||(k=a,document.documentElement.dataset.theme=a,document.body?.setAttribute("data-theme",a),o.setConfig({theme:S[a]}))},u=t=>{let e=E(t);e&&f(e)},O=()=>{let t="volt-manager-theme",e=document.getElementById(t);e||(e=document.createElement("style"),e.id=t,document.head.appendChild(e)),e.textContent=`
    .volt-manager-toolbar-link {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      min-height: 28px !important;
      border: 0 !important;
      border-radius: 6px !important;
      background: #502379 !important;
      color: #ffffff !important;
      padding: 0 10px !important;
      margin: 0 6px !important;
      font: 700 12px/1 Ubuntu, Arial, sans-serif !important;
      text-decoration: none !important;
      white-space: nowrap !important;
    }

    .volt-manager-toolbar-link--quiet {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      min-height: 28px !important;
      border-radius: 6px !important;
      color: #502379 !important;
      padding: 0 8px !important;
      margin: 0 2px !important;
      font: 700 12px/1 Ubuntu, Arial, sans-serif !important;
      text-decoration: none !important;
      white-space: nowrap !important;
    }

    .volt-manager-toolbar-link--quiet:hover {
      background: #f3eef8 !important;
      color: #3d185f !important;
    }

    .volt-manager-toolbar-link:hover {
      background: #3d185f !important;
      color: #ffffff !important;
    }

    html[data-theme='dark'],
    html[data-theme='dark'] body,
    body[data-theme='dark'],
    body[data-theme='dark'] #root {
      background: #150d20 !important;
      color: #f8f2ff !important;
    }

    body[data-theme='dark'] #root > div,
    body[data-theme='dark'] #root [class*='css-'],
    body[data-theme='dark'] #root [class*='sidebar'],
    body[data-theme='dark'] #root [class*='Sidebar'],
    body[data-theme='dark'] #root [class*='bar'],
    body[data-theme='dark'] #root [class*='Bar'],
    body[data-theme='dark'] #root [class*='panel'],
    body[data-theme='dark'] #root [class*='Panel'] {
      border-color: #71558d;
    }

    body[data-theme='dark'] #root [class*='sidebar'],
    body[data-theme='dark'] #root [class*='Sidebar'],
    body[data-theme='dark'] #root [class*='panel'],
    body[data-theme='dark'] #root [class*='Panel'],
    body[data-theme='dark'] #root [class*='bar'],
    body[data-theme='dark'] #root [class*='Bar'] {
      background-color: #21152e;
      color: #f8f2ff;
    }

    body[data-theme='dark'] input,
    body[data-theme='dark'] textarea,
    body[data-theme='dark'] select {
      background: #1b1028 !important;
      border-color: #71558d !important;
      color: #f8f2ff !important;
    }

    body[data-theme='dark'] [role='dialog'],
    body[data-theme='dark'] [role='menu'],
    body[data-theme='dark'] [role='listbox'],
    body[data-theme='dark'] [data-radix-popper-content-wrapper],
    body[data-theme='dark'] .modal,
    body[data-theme='dark'] .popover {
      background: #21152e !important;
      color: #f8f2ff !important;
      border-color: #71558d !important;
    }

    body[data-theme='dark'] .volt-manager-toolbar-link {
      background: #6c3a96 !important;
      color: #ffffff !important;
    }

    body[data-theme='dark'] .volt-manager-toolbar-link:hover {
      background: #7f4fac !important;
      color: #ffffff !important;
    }

    body[data-theme='dark'] .volt-manager-toolbar-link--quiet {
      color: #fdc220 !important;
    }

    body[data-theme='dark'] .volt-manager-toolbar-link--quiet:hover {
      background: #3a2450 !important;
      color: #ffe08a !important;
    }
  `},P=t=>{let e=[t.placeholder,t.getAttribute("aria-label"),t.type].join(" ").toLowerCase();return t.type==="search"||e.includes("find components")||e.includes("komponenten suchen")||e.includes("componenten zoeken")||e.includes("rechercher des composants")||e.includes("search")},l=()=>{let t=x[w()];document.querySelectorAll("input").forEach(e=>{P(e)&&(e.placeholder=t,e.setAttribute("aria-label",t))})},g=()=>{if(!document.body){window.requestAnimationFrame(g);return}O(),f(b(),{force:!0}),l();let t=()=>{f(b()),l()},e=o.getChannel?.();e?.on("globalsUpdated",r=>{u(r),l()}),e?.on("updateGlobals",r=>{u(r),l()}),e?.on("setGlobals",r=>{u(r),l()}),new MutationObserver(t).observe(document.body,{attributes:!0,attributeFilter:["placeholder","aria-label","type","data-theme"],childList:!0,subtree:!0}),window.addEventListener("popstate",t),window.addEventListener("hashchange",t),window.addEventListener("click",()=>window.setTimeout(t,0),!0),window.addEventListener("focusin",()=>window.setTimeout(t,0),!0),window.setInterval(t,250)},L=()=>{let[t]=m(),e=T(t),a=_[e];return n.createElement("a",{className:"volt-manager-toolbar-link",href:"?path=/docs/volt-design-04-vorlagen-\xFCbersicht--docs",title:a,"aria-label":a},a)},v=({type:t})=>{let[e]=m(),a=T(e),r=h[a][t],C=t==="imprint"?"https://voltdeutschland.org/impressum":"https://voltdeutschland.org/datenschutz";return n.createElement("a",{className:"volt-manager-toolbar-link--quiet",href:C,target:"_blank",rel:"noreferrer",title:r,"aria-label":r},r)};o.register("volt/manager-toolbar-links",()=>{o.add("volt/templates-link",{type:c.TOOL,title:_.de,match:()=>!0,render:L}),o.add("volt/imprint-link",{type:c.TOOL,title:h.de.imprint,match:()=>!0,render:()=>n.createElement(v,{type:"imprint"})}),o.add("volt/privacy-link",{type:c.TOOL,title:h.de.privacy,match:()=>!0,render:()=>n.createElement(v,{type:"privacy"})})});o.setConfig({theme:S.light});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g,{once:!0}):g();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
