"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64418],{64418:(e,a,s)=>{s.d(a,{onSessionProposal:()=>n});var i=s(65249),o=s(42333);async function n(e){let{wallet:a,walletConnectClient:s,event:n,chains:p,onConnect:c}=e,d=a.getAccount();if(!d)throw Error("No account connected to provided wallet");let m=n.verifyContext?.verified?.origin;m&&await t({origin:m,walletConnectClient:s});let l=await r({account:d,walletConnectClient:s,sessionProposal:n,chains:p});await (0,o.E1)(l),a.subscribe("disconnect",()=>{(0,i.EF)({session:l,walletConnectClient:s})}),c?.(l)}async function t({walletConnectClient:e,origin:a}){for(let s of(await (0,o.S5)()))s.origin===a&&await (0,i.EF)({session:s,walletConnectClient:e})}async function r({account:e,walletConnectClient:a,sessionProposal:s,chains:i}){if(!s.params.requiredNamespaces?.eip155&&!s.params.optionalNamespaces?.eip155)throw Error("No EIP155 namespace found in Wallet Connect session proposal");let o={chains:[...Array.from(new Set([...s.params.requiredNamespaces?.eip155?.chains?.map(a=>`${a}:${e.address}`)??[],...s.params.optionalNamespaces?.eip155?.chains?.map(a=>`${a}:${e.address}`)??[],...i?.map(a=>`eip155:${a.id}:${e.address}`)??[]]))],methods:[...s.params.requiredNamespaces?.eip155?.methods??[],...s.params.optionalNamespaces?.eip155?.methods??[]],events:[...s.params.requiredNamespaces?.eip155?.events??[],...s.params.optionalNamespaces?.eip155?.events??[]]},n=await a.approve({id:s.id,namespaces:{eip155:{accounts:o.chains,methods:o.methods,events:o.events}}});return{topic:(await n.acknowledged()).topic,origin:s.verifyContext?.verified?.origin||"Unknown origin"}}}}]);