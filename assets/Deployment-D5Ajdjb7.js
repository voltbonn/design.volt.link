import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-D5Ih2eOt.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,o as a}from"./blocks-B-u-PBLy.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Volt Design/06 Planung/Deployment`}),`
`,(0,c.jsx)(n.h1,{id:`deployment`,children:`Deployment`}),`
`,(0,c.jsx)(n.p,{children:`Version 1 wird als oeffentlicher, statischer Storybook-Designguide gebaut. Dafuer reicht ein statisches Deployment, weil noch kein Login, keine Datenbank und kein Vorlagen-Editor enthalten sind.`}),`
`,(0,c.jsx)(n.h2,{id:`entscheidung-fuer-version-1`,children:`Entscheidung fuer Version 1`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Storybook ist die oeffentliche Seite.`}),`
`,(0,c.jsxs)(n.li,{children:[`Build-Befehl: `,(0,c.jsx)(n.code,{children:`npm run build-storybook`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Output: `,(0,c.jsx)(n.code,{children:`storybook-static`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Deployment kann fuer Version 1 ueber GitHub Pages erfolgen.`}),`
`,(0,c.jsx)(n.li,{children:`Sobald Login, geschuetzte Vorlagen oder ein eigener Generator entstehen, wird ein eigener Server oder eine andere Hosting-Loesung noetig.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ci-workflow`,children:`CI-Workflow`}),`
`,(0,c.jsxs)(n.p,{children:[`Der GitHub-Workflow nutzt npm, passend zum vorhandenen `,(0,c.jsx)(n.code,{children:`package-lock.json`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`npm ci`}),` installiert exakt die Lockfile-Abhaengigkeiten.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`npm run build-storybook`}),` baut den oeffentlichen Guide.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Pull Requests laden `,(0,c.jsx)(n.code,{children:`storybook-static`}),` als Preview-Artefakt hoch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`storybook-static`}),` wird auf den Deployment-Branch veroeffentlicht.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`offene-betriebsfragen`,children:`Offene Betriebsfragen`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Soll `,(0,c.jsx)(n.code,{children:`design.volt.link`}),` langfristig auf GitHub Pages bleiben oder fruehzeitig auf einen eigenen Server zeigen?`]}),`
`,(0,c.jsx)(n.li,{children:`Wer bekommt Zugriff auf Deployment, Domain und DNS?`}),`
`,(0,c.jsx)(n.li,{children:`Wie werden Vorschauversionen fuer groessere Aenderungen getestet?`}),`
`,(0,c.jsx)(n.li,{children:`Welche Stelle gibt neue Designregeln frei?`}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),n(),a()})))()}l();export{s as default};