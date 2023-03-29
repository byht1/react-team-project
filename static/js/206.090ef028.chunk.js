"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[206],{8442:function(e,n,t){t.d(n,{y:function(){return d}});var r=t(1413),a=t(9439),i=t(2791),o=t(1134),s=t(3498),u=t(8820),c=t(3329),d=function(e){var n,t=e.name,d=e.type,h=e.placeholder,m=void 0===h?"":h,l=e.mb,p=e.showhide,x=void 0!==p&&p,f=(0,i.useState)(d),g=(0,a.Z)(f,2),b=g[0],y=g[1],Z=(0,i.useState)(!1),w=(0,a.Z)(Z,2),j=w[0],v=w[1],z=(0,o.Gc)(),A=z.register,k=z.formState.errors;return(0,c.jsxs)(s.__,{mb:l,children:[(0,c.jsx)(s.II,(0,r.Z)((0,r.Z)({},A(t)),{},{type:b,placeholder:m})),x&&(0,c.jsx)(s.zb,{onClick:function(){v(!j),y(j?d:"text")},children:j?(0,c.jsx)(u.p3W,{color:"grey"}):(0,c.jsx)(u.w8I,{color:"grey"})}),k[t]&&(0,c.jsx)(s.CV,{children:null===(n=k[t])||void 0===n?void 0:n.message})]})}},7206:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var r,a,i,o,s,u,c,d,h,m,l=t(4165),p=t(5861),x=t(9439),f=t(2791),g=t(1134),b=t(3418),y=t(4695),Z=t(9434),w=t(1278),j=t(8742),v=t(8442),z=t(3329),A=function(){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(v.y,{name:"email",type:"email",placeholder:"Email",mb:20}),(0,z.jsx)(v.y,{name:"password",type:"password",placeholder:"Password",mb:20,showhide:!0}),(0,z.jsx)(v.y,{name:"confirmpassword",type:"password",placeholder:"Confirm Password",mb:40,showhide:!0})]})},k=function(){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(v.y,{name:"name",type:"text",placeholder:"Name",mb:20}),(0,z.jsx)(v.y,{name:"city",type:"text",placeholder:"City, region",mb:20}),(0,z.jsx)(v.y,{name:"phone",type:"tel",placeholder:"Mobile phone",mb:40})]})},P=t(6373),F=t(8007),_=F.Ry({email:F.Z_().min(7,"Must be more than 7 characters").max(63,"Must be less than 63 characters").email("minimum 2 characters before @, cannot start with a dash, only Latin letters").required("The field is mandatory").matches(/^(?!\x2D)[\x2D\.0-9A-Z_a-z]{2,}@[\x2D0-9A-Z_a-z]+(\.[\x2D0-9A-Z_a-z]+)*\.[A-Za-z]{2,}$/,"minimum 2 characters before @, cannot start with a dash, only Latin letters"),password:F.Z_().required("The field is mandatory").max(32,"Must be less than 32 characters").matches(/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{7,}/,"The password must contain uppercase and lowercase letters, at least 7 symbols"),confirmpassword:F.Z_().required("The field is mandatory").oneOf([F.iH("password"),null],"Passwords do not match"),name:F.Z_().min(2,"Must be more than 2 characters").max(40,"Must be less than 40 characters").matches(/^[\t-\r "'-\.A-Za-z\xA0\u0401\u0404\u0406\u0407\u0410-\u044F\u0451\u0454\u0456\u0457\u0490\u0491\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[A-Za-z\u0401\u0404\u0406\u0407\u0410-\u044F\u0451\u0454\u0456\u0457\u0490\u0491]+){0,3}$/,"Not a valid name").required("The field is mandatory"),city:F.Z_().min(2,"Must be more than 2 characters").max(50,"Must be less than 50 characters").matches(/^(?!\s)[a-zA-Z\u0430-\u044f\u0410-\u042f\u0401\u0451\u0490\u0491\u0406\u0456\u0407\u0457\u0404\u0454\s,'"'-.]+$/,"Not a valid city").required("The field is mandatory"),phone:F.Z_().required().matches(/^\+38?(0\d{9})$/,"Number format:+380500000000")}),C=t(3728),S=t(5985),M=(t(5462),t(168)),B=t(1044),T=t(1087),q=t(7691),D=t(5851),I=t(6349),R=t(726),L=q.ZP.div(r||(r=(0,M.Z)(["\n  height: calc(100vh - 74px);\n\n  background-image: url(",");\n  background-position: 50% 100%;\n  background-repeat: no-repeat;\n  background-size: 1200px;\n\n  @media (min-width: 768px) {\n    height: calc(100vh - 97px);\n    min-height: 750px;\n    background-image: url(",");\n    background-size: 1500px;\n  }\n\n  @media (min-width: 1280px) {\n    height: calc(100vh - 96px);\n    background-image: url(",");\n  }\n"])),D,I,R),N=(0,q.ZP)(B.W)(a||(a=(0,M.Z)(["\n  padding-top: 42px;\n\n  @media (min-width: 768px) {\n    padding-top: 0;\n    position: relative;\n    height: 100%;\n  }\n"]))),W=q.ZP.h2(i||(i=(0,M.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  margin-bottom: 40px;\n\n  @media (min-width: 768px) {\n    font-size: ",";\n  } ;\n"])),(function(e){return e.theme.fonts.manrope}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.fontSizes.xxl}),(function(e){return e.theme.lineHeights.heading}),(function(e){return e.theme.colors.b}),(function(e){return e.theme.fontSizes.xxxml})),$=q.ZP.div(o||(o=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    position: absolute;\n    left: 50%;\n    top: 43%;\n    transform: translate(-50%, -50%);\n    background-color: ",";\n    width: 608px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 60px 80px 40px 80px;\n    border-radius: ",";\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  }\n  @media (min-width: 1280px) {\n    width: 618px;\n    padding: 60px 80px;\n  }\n"])),(function(e){return e.theme.colors.w}),(function(e){return e.theme.radii.inputRadius})),E=q.ZP.div(s||(s=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  @media (min-width: 1280px) {\n    max-width: 458px;\n  }\n"]))),H=(q.ZP.input(u||(u=(0,M.Z)(["\n  height: 40px;\n  padding: 11px 14px;\n  background-color: ",";\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: ",";\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.colors.bg}),(function(e){return e.theme.radii.inputRadius}),(function(e){return e.mb})),q.ZP.p(c||(c=(0,M.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  margin-right: 5px;\n"])),(function(e){return e.theme.fonts.manrope}),(function(e){return e.theme.fontWeights.normal}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.lineHeights.heading}),(function(e){return e.theme.colors.g}))),G=(0,q.ZP)(T.OL)(d||(d=(0,M.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n"])),(function(e){return e.theme.fonts.manrope}),(function(e){return e.theme.fontWeights.normal}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.lineHeights.heading}),(function(e){return e.theme.colors.l})),O=q.ZP.div(h||(h=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 50px;\n  border-radius: ",";\n  border: 1px solid transparent;\n\n  transition: var(--transition-border-color);\n\n  &:hover,\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.radii.inputRadius}),(function(e){return e.theme.colors.a})),V=(0,q.ZP)(w.zx)(m||(m=(0,M.Z)(["\n  background-color: transparent;\n"]))),J=t(8245),K=t(2918),X=t(250),Q=t(3182),U=function(){var e=(0,f.useState)(1),n=(0,x.Z)(e,2),t=n[0],r=n[1],a=(0,f.useState)(null),i=(0,x.Z)(a,2),o=(i[0],i[1]),s=(0,Z.I0)(),u=(0,g.cI)({resolver:(0,y.X)(_),mode:"onTouched"}),c=u.reset,d=u.trigger,h=u.getValues,m=(0,b.D)({mutationKey:["user"],mutationFn:function(e){return(0,K.y1)(e)},onSuccess:function(e){o(null),s((0,P.z2)(e)),c()},onError:function(e){S.Am.error(e.response.data.message,{hideProgressBar:!0,autoClose:5e3}),S.Am.error(e.response.data.city,{hideProgressBar:!0,autoClose:5e3}),S.Am.error(e.response.data.email,{hideProgressBar:!0,autoClose:5e3}),S.Am.error(e.response.data.name,{hideProgressBar:!0,autoClose:5e3}),S.Am.error(e.response.data.password,{hideProgressBar:!0,autoClose:5e3}),S.Am.error(e.response.data.phone,{hideProgressBar:!0,autoClose:5e3}),o(e.response.data.message)}}),v=m.mutate,F=m.isLoading,M=function(){var e=(0,p.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h("email"),e.prev=1,e.next=4,Q.Z.post("/auth/is-use-email",{email:n});case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),S.Am.error(e.t0.response.data.message,{hideProgressBar:!0}),e.abrupt("return");case 10:return e.next=12,d(["email","password","confirmpassword"]);case 12:e.sent&&r(2);case 14:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return(0,z.jsxs)(L,{children:[(0,z.jsx)(S.Ix,{}),F&&(0,z.jsx)(X.a,{opacity:.5}),(0,z.jsx)(N,{children:(0,z.jsxs)($,{children:[(0,z.jsx)(W,{children:"Registration"}),(0,z.jsx)(j.q,{methods:u,submit:function(e){v(e)},children:(0,z.jsxs)(E,{children:[1===t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{}),(0,z.jsx)(w.zx,{theme:"dark",type:"button",fn:M,children:"Next"})]}),2===t&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(k,{}),(0,z.jsx)(w.zx,{theme:"dark",type:"submit",children:"Register"}),(0,z.jsx)(V,{mt:10,fn:function(){return r(1)},children:"Back"})]})]})}),(0,z.jsxs)(J.x,{display:"flex",mt:40,mb:5,children:[(0,z.jsx)(H,{children:"Already have an account?"}),(0,z.jsx)(G,{to:"/login",children:"Login"})]}),(0,z.jsx)("a",{href:"https://node-team-project.onrender.com/api/auth/google",children:(0,z.jsxs)(O,{children:[(0,z.jsx)(H,{children:"Sign in with Google"}),(0,z.jsx)(C.JM8,{size:"25px"})]})})]})})]})},Y=function(){return(0,z.jsx)(U,{})}},726:function(e,n,t){e.exports=t.p+"static/media/bgDesc.460f7b2671e2fc1b3f23.png"},5851:function(e,n,t){e.exports=t.p+"static/media/bgMob.7547c2a731f8f2b90c8e.png"},6349:function(e,n,t){e.exports=t.p+"static/media/bgTab.f8b61a8b3529a7430e01.png"}}]);
//# sourceMappingURL=206.090ef028.chunk.js.map