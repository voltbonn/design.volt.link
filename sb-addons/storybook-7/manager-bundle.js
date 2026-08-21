try{
(()=>{var A=__STORYBOOK_API__,{ActiveTabs:L,Consumer:E,ManagerContext:U,Provider:G,RequestResponseError:I,Tag:F,addons:s,combineParameters:K,controlOrMetaKey:N,controlOrMetaSymbol:q,eventMatchesShortcut:j,eventToShortcut:H,experimental_MockUniversalStore:Y,experimental_UniversalStore:D,experimental_getStatusStore:$,experimental_getTestProviderStore:z,experimental_requestResponse:Q,experimental_useStatusStore:V,experimental_useTestProviderStore:W,experimental_useUniversalStore:J,getService:X,internal_checklistStore:Z,internal_fullStatusStore:ee,internal_fullTestProviderStore:te,internal_universalChecklistStore:ae,internal_universalStatusStore:oe,internal_universalTestProviderStore:re,isMacLike:ne,isShortcutTaken:se,keyToSymbol:le,merge:de,mockChannel:ce,optionOrAltSymbol:ie,registerService:me,shortcutMatchesShortcut:pe,shortcutToAriaKeyshortcuts:ue,shortcutToHumanString:he,types:be,useAddonState:fe,useArgTypes:ge,useArgs:ye,useChannel:ke,useGlobalTypes:Se,useGlobals:ve,useParameter:Te,useServiceCommand:Ce,useServiceQuery:we,useSharedState:_e,useStoryPrepared:xe,useStorybookApi:Pe,useStorybookState:Be}=__STORYBOOK_API__;var Le=__STORYBOOK_THEMING__,{CacheProvider:Ee,ClassNames:Ue,Global:Ge,ThemeProvider:Ie,background:Fe,color:Ke,convert:Ne,create:i,createCache:qe,createGlobal:je,createReset:He,css:Ye,darken:De,ensure:$e,getPreferredColorScheme:ze,ignoreSsrWarning:Qe,isPropValid:Ve,jsx:We,keyframes:Je,lighten:Xe,srOnlyStyles:Ze,srOnlyUnsetStyles:et,styled:tt,themes:at,tokens:ot,typography:rt,useTheme:nt,withTheme:st}=__STORYBOOK_THEMING__;var b={brandTitle:"design.volt.link",brandUrl:"?path=/docs/volt-design-00-einstieg--docs",brandTarget:"_self"},g={light:i({base:"light",...b,colorPrimary:"#502379",colorSecondary:"#502379",appBg:"#f7f4fa",appContentBg:"#ffffff",appBorderColor:"#d8d3e0",appBorderRadius:8,barBg:"#ffffff",barTextColor:"#625a6f",barSelectedColor:"#502379",textColor:"#201a29",textMutedColor:"#625a6f",inputBg:"#ffffff",inputBorder:"#d8d3e0",inputTextColor:"#201a29",inputBorderRadius:8}),dark:i({base:"dark",...b,colorPrimary:"#fdc220",colorSecondary:"#fdc220",appBg:"#150d20",appContentBg:"#21152e",appBorderColor:"#71558d",appBorderRadius:8,barBg:"#21152e",barTextColor:"#cfc4dc",barSelectedColor:"#fdc220",textColor:"#f8f2ff",textMutedColor:"#cfc4dc",inputBg:"#1b1028",inputBorder:"#71558d",inputTextColor:"#f8f2ff",inputBorderRadius:8})},f=null,k={de:"Komponenten suchen",en:"Find components",nl:"Componenten zoeken",fr:"Rechercher des composants"},S={de:"Anpassbare Vorlagen",en:"Customisable Templates",nl:"Aanpasbare Sjablonen",fr:"Mod\xE8les personnalisables"},y=()=>{let t=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.replace(/^#/,"").replace(/^\?/,""));return(t.get("globals")??e.get("globals")??"").match(/(?:^|;)locale:(de|en|nl|fr)(?:;|$)/)?.[1]??"de"},p=()=>{let t=new URLSearchParams(window.location.search),e=new URLSearchParams(window.location.hash.replace(/^#/,"").replace(/^\?/,""));return(t.get("globals")??e.get("globals")??"").match(/(?:^|;)theme:(light|dark)(?:;|$)/)?.[1]??"light"},v=t=>{let e=t?.globals?.theme??t?.userGlobals?.theme??t?.initialGlobals?.theme;return e==="dark"||e==="light"?e:null},u=(t=p(),{force:e=!1}={})=>{let a=t==="dark"||t==="light"?t:"light";!e&&f===a||(f=a,document.documentElement.dataset.theme=a,document.body?.setAttribute("data-theme",a),s.setConfig({theme:g[a]}))},m=t=>{let e=v(t);e&&u(e)},T=()=>{let t="volt-manager-theme",e=document.getElementById(t);e||(e=document.createElement("style"),e.id=t,document.head.appendChild(e)),e.textContent=`
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
  `},C=t=>{let e=[t.placeholder,t.getAttribute("aria-label"),t.type].join(" ").toLowerCase();return t.type==="search"||e.includes("find components")||e.includes("komponenten suchen")||e.includes("componenten zoeken")||e.includes("rechercher des composants")||e.includes("search")},r=()=>{let t=k[y()];document.querySelectorAll("input").forEach(e=>{C(e)&&(e.placeholder=t,e.setAttribute("aria-label",t))})},w=()=>{let e=new URLSearchParams(window.location.search).get("globals");return`?path=/docs/volt-design-04-vorlagen-\xFCbersicht--docs${e?`&globals=${encodeURIComponent(e)}`:""}`},_=()=>[...document.querySelectorAll("button, a")].find(a=>["Deutsch","English","Nederlands","Fran\xE7ais"].includes(a.textContent.trim()))?.parentElement??document.querySelector('[role="toolbar"]'),n=()=>{let t=_();if(!t)return;let e=document.querySelector(".volt-manager-templates-link");e||(e=document.createElement("a"),e.className="volt-manager-templates-link",t.appendChild(e));let a=S[y()];e.href=w(),e.textContent=a,e.title=a,e.setAttribute("aria-label",a)},h=()=>{if(!document.body){window.requestAnimationFrame(h);return}T(),u(p(),{force:!0}),r(),n();let t=()=>{u(p()),r(),n()},e=s.getChannel?.();e?.on("globalsUpdated",o=>{m(o),r(),n()}),e?.on("updateGlobals",o=>{m(o),r(),n()}),e?.on("setGlobals",o=>{m(o),r(),n()}),new MutationObserver(t).observe(document.body,{attributes:!0,attributeFilter:["placeholder","aria-label","type","data-theme"],childList:!0,subtree:!0}),window.addEventListener("popstate",t),window.addEventListener("hashchange",t),window.addEventListener("click",()=>window.setTimeout(t,0),!0),window.addEventListener("focusin",()=>window.setTimeout(t,0),!0),window.setInterval(t,250)};s.setConfig({theme:g.light});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h,{once:!0}):h();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
