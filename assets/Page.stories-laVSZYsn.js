import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,n as a}from"./iframe-zNrzYTX8.js";import{n as o,t as s}from"./Header-BObQH71j.js";var c,l,u;function d(){return(d=t((()=>{c=e(n(),1),a(),o(),l=r(),u=()=>{let[e,t]=c.useState(!1),n=i();return(0,l.jsxs)(`article`,{children:[(0,l.jsx)(s,{onOpenTemplates:()=>t(!0)}),e?(0,l.jsx)(`section`,{className:`protected-page`,"aria-label":n(`common.templates`),children:(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{children:n(`page.placeholder`)}),(0,l.jsx)(`h2`,{children:n(`common.templates`)}),(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(!1),children:n(`common.backToGuide`)})]})}):(0,l.jsxs)(`section`,{className:`storybook-page`,children:[(0,l.jsx)(`p`,{className:`eyebrow`,children:n(`common.version`)}),(0,l.jsx)(`h2`,{children:n(`page.headline`)}),(0,l.jsx)(`p`,{className:`lead`,children:n(`page.lead`)}),(0,l.jsxs)(`div`,{className:`storybook-page__grid`,children:[(0,l.jsxs)(`article`,{children:[(0,l.jsx)(`h3`,{children:n(`page.foundationsTitle`)}),(0,l.jsx)(`p`,{children:n(`page.foundationsText`)})]}),(0,l.jsxs)(`article`,{children:[(0,l.jsx)(`h3`,{children:n(`page.applicationsTitle`)}),(0,l.jsx)(`p`,{children:n(`page.applicationsText`)})]}),(0,l.jsxs)(`article`,{children:[(0,l.jsx)(`h3`,{children:n(`page.templatesTitle`)}),(0,l.jsx)(`p`,{children:n(`page.templatesText`)})]})]}),(0,l.jsx)(`p`,{children:n(`page.templateNotice`)})]})]})},u.__docgenInfo={description:``,methods:[],displayName:`Page`}})))()}var f,p,m,h,g,_,v;function y(){return(y=t((()=>{d(),{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Volt Design/04 Komponenten/Page`,component:u,parameters:{layout:`fullscreen`}},g={},_={play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`button`,{name:/Anpassbare Vorlagen/i});await f(n).toBeInTheDocument(),await p.click(n),await f(t.getByLabelText(/Anpassbare Vorlagen/i)).toBeInTheDocument(),await f(t.getByRole(`heading`,{name:/Anpassbare Vorlagen/i})).toBeInTheDocument()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const templatesButton = canvas.getByRole('button', {
      name: /Anpassbare Vorlagen/i
    });
    await expect(templatesButton).toBeInTheDocument();
    await userEvent.click(templatesButton);
    await expect(canvas.getByLabelText(/Anpassbare Vorlagen/i)).toBeInTheDocument();
    await expect(canvas.getByRole('heading', {
      name: /Anpassbare Vorlagen/i
    })).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v=[`LoggedOut`,`TemplatesArea`]})))()}y();export{g as LoggedOut,_ as TemplatesArea,v as __namedExportsOrder,h as default};