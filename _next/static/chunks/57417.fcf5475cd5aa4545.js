"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57417],{57417:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var c=t(95155),r=t(12115),i=t(41605);let a=function(e){let{onBack:n,done:t,wallet:a,walletInfo:o,onGetStarted:l,locale:s}=e,[u,d]=(0,r.useState)(!1),f=(0,r.useCallback)(()=>{d(!1),a.connect({client:e.client,chain:e.chain}).then(()=>{t()}).catch(e=>{console.error(e),d(!0)})},[e.client,a,e.chain,t]),h=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{h.current||(h.current=!0,f())},[f]),(0,c.jsx)(i.F,{locale:{getStartedLink:s.getStartedLink,instruction:s.connectionScreen.instruction,tryAgain:s.connectionScreen.retry,inProgress:s.connectionScreen.inProgress,failed:s.connectionScreen.failed},onBack:n,walletName:o.name,walletId:a.id,errorConnecting:u,onRetry:f,onGetStarted:l,client:e.client,size:e.size})}}}]);