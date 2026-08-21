try{
(()=>{var I=__STORYBOOK_API__,{ActiveTabs:G,Consumer:N,ManagerContext:q,Provider:F,RequestResponseError:K,Tag:j,addons:i,combineParameters:z,controlOrMetaKey:D,controlOrMetaSymbol:H,eventMatchesShortcut:Y,eventToShortcut:$,experimental_MockUniversalStore:Q,experimental_UniversalStore:V,experimental_getStatusStore:W,experimental_getTestProviderStore:J,experimental_requestResponse:X,experimental_useStatusStore:Z,experimental_useTestProviderStore:ee,experimental_useUniversalStore:te,getService:ae,internal_checklistStore:oe,internal_fullStatusStore:re,internal_fullTestProviderStore:ne,internal_universalChecklistStore:le,internal_universalStatusStore:se,internal_universalTestProviderStore:de,isMacLike:ie,isShortcutTaken:ce,keyToSymbol:me,merge:pe,mockChannel:ue,optionOrAltSymbol:he,registerService:be,shortcutMatchesShortcut:fe,shortcutToAriaKeyshortcuts:ge,shortcutToHumanString:ye,types:ke,useAddonState:Se,useArgTypes:ve,useArgs:xe,useChannel:Ce,useGlobalTypes:Te,useGlobals:we,useParameter:_e,useServiceCommand:Pe,useServiceQuery:Be,useSharedState:Le,useStoryPrepared:Oe,useStorybookApi:Ae,useStorybookState:Me}=__STORYBOOK_API__;var Ge=__STORYBOOK_THEMING__,{CacheProvider:Ne,ClassNames:qe,Global:Fe,ThemeProvider:Ke,background:je,color:ze,convert:De,create:u,createCache:He,createGlobal:Ye,createReset:$e,css:Qe,darken:Ve,ensure:We,getPreferredColorScheme:Je,ignoreSsrWarning:Xe,isPropValid:Ze,jsx:et,keyframes:tt,lighten:at,srOnlyStyles:ot,srOnlyUnsetStyles:rt,styled:nt,themes:lt,tokens:st,typography:dt,useTheme:it,withTheme:ct}=__STORYBOOK_THEMING__;var k={brandTitle:"design.volt.link",brandUrl:"?path=/docs/volt-design-00-einstieg--docs",brandTarget:"_self"},v={light:u({base:"light",...k,colorPrimary:"#502379",colorSecondary:"#502379",appBg:"#f7f4fa",appContentBg:"#ffffff",appBorderColor:"#d8d3e0",appBorderRadius:8,barBg:"#ffffff",barTextColor:"#625a6f",barSelectedColor:"#502379",textColor:"#201a29",textMutedColor:"#625a6f",inputBg:"#ffffff",inputBorder:"#d8d3e0",inputTextColor:"#201a29",inputBorderRadius:8}),dark:u({base:"dark",...k,colorPrimary:"#fdc220",colorSecondary:"#fdc220",appBg:"#150d20",appContentBg:"#21152e",appBorderColor:"#71558d",appBorderRadius:8,barBg:"#21152e",barTextColor:"#cfc4dc",barSelectedColor:"#fdc220",textColor:"#f8f2ff",textMutedColor:"#cfc4dc",inputBg:"#1b1028",inputBorder:"#71558d",inputTextColor:"#f8f2ff",inputBorderRadius:8})},S=null,C={de:"Komponenten suchen",en:"Find components",nl:"Componenten zoeken",fr:"Rechercher des composants"},T={de:"Anpassbare Vorlagen",en:"Customisable Templates",nl:"Aanpasbare Sjablonen",fr:"Mod\xE8les personnalisables"},w={de:{imprint:"Impressum",privacy:"Datenschutz"},en:{imprint:"Legal notice",privacy:"Privacy"},nl:{imprint:"Colofon",privacy:"Privacy"},fr:{imprint:"Mentions l\xE9gales",privacy:"Confidentialit\xE9"}},y=()=>{let t=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.replace(/^#/,"").replace(/^\?/,""));return(t.get("globals")??e.get("globals")??"").match(/(?:^|;)locale:(de|en|nl|fr)(?:;|$)/)?.[1]??"de"},b=()=>{let t=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.replace(/^#/,"").replace(/^\?/,""));return(t.get("globals")??e.get("globals")??"").match(/(?:^|;)theme:(light|dark)(?:;|$)/)?.[1]??"light"},_=t=>{let e=t?.globals?.theme??t?.userGlobals?.theme??t?.initialGlobals?.theme;return e==="dark"||e==="light"?e:null},f=(t=b(),{force:e=!1}={})=>{let a=t==="dark"||t==="light"?t:"light";!e&&S===a||(S=a,document.documentElement.dataset.theme=a,document.body?.setAttribute("data-theme",a),i.setConfig({theme:v[a]}))},h=t=>{let e=_(t);e&&f(e)},P=()=>{let t="volt-manager-theme",e=document.getElementById(t);e||(e=document.createElement("style"),e.id=t,document.head.appendChild(e)),e.textContent=`
    .volt-manager-templates-link {
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

    .volt-manager-legal-link {
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

    .volt-manager-legal-link:hover {
      background: #f3eef8 !important;
      color: #3d185f !important;
    }

    .volt-manager-templates-link:hover {
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

    body[data-theme='dark'] .volt-manager-templates-link {
      background: #6c3a96 !important;
      color: #ffffff !important;
    }

    body[data-theme='dark'] .volt-manager-templates-link:hover {
      background: #7f4fac !important;
      color: #ffffff !important;
    }

    body[data-theme='dark'] .volt-manager-legal-link {
      color: #fdc220 !important;
    }

    body[data-theme='dark'] .volt-manager-legal-link:hover {
      background: #3a2450 !important;
      color: #ffe08a !important;
    }
  `},B=t=>{let e=[t.placeholder,t.getAttribute("aria-label"),t.type].join(" ").toLowerCase();return t.type==="search"||e.includes("find components")||e.includes("komponenten suchen")||e.includes("componenten zoeken")||e.includes("rechercher des composants")||e.includes("search")},l=()=>{let t=C[y()];document.querySelectorAll("input").forEach(e=>{B(e)&&(e.placeholder=t,e.setAttribute("aria-label",t))})},L=()=>{let e=new URLSearchParams(window.location.search).get("globals");return`?path=/docs/volt-design-04-vorlagen-\xFCbersicht--docs${e?`&globals=${encodeURIComponent(e)}`:""}`},x=()=>[...document.querySelectorAll("button, a")].find(a=>["Deutsch","English","Nederlands","Fran\xE7ais"].includes(a.textContent.trim()))?.parentElement??document.querySelector('[role="toolbar"]'),s=()=>{let t=x();if(!t)return;let e=document.querySelector(".volt-manager-templates-link");e||(e=document.createElement("a"),e.className="volt-manager-templates-link",t.appendChild(e));let a=T[y()];e.href=L(),e.textContent=a,e.title=a,e.setAttribute("aria-label",a)},d=()=>{let t=x();if(!t)return;let e=y(),a=w[e];[{id:"imprint",href:"https://voltdeutschland.org/impressum"},{id:"privacy",href:"https://voltdeutschland.org/datenschutz"}].forEach(n=>{let o=document.querySelector(`.volt-manager-legal-link[data-legal-link="${n.id}"]`);o||(o=document.createElement("a"),o.className="volt-manager-legal-link",o.dataset.legalLink=n.id,o.target="_blank",o.rel="noreferrer",t.appendChild(o)),o.href=n.href,o.textContent=a[n.id],o.title=a[n.id],o.setAttribute("aria-label",a[n.id])})},g=()=>{if(!document.body){window.requestAnimationFrame(g);return}P(),f(b(),{force:!0}),l(),s(),d();let t=()=>{f(b()),l(),s(),d()},e=i.getChannel?.();e?.on("globalsUpdated",r=>{h(r),l(),s(),d()}),e?.on("updateGlobals",r=>{h(r),l(),s(),d()}),e?.on("setGlobals",r=>{h(r),l(),s(),d()}),new MutationObserver(t).observe(document.body,{attributes:!0,attributeFilter:["placeholder","aria-label","type","data-theme"],childList:!0,subtree:!0}),window.addEventListener("popstate",t),window.addEventListener("hashchange",t),window.addEventListener("click",()=>window.setTimeout(t,0),!0),window.addEventListener("focusin",()=>window.setTimeout(t,0),!0),window.setInterval(t,250)};i.setConfig({theme:v.light});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g,{once:!0}):g();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
