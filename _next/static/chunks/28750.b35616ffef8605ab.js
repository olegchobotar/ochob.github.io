"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28750],{28750:(e,n,i)=>{i.r(n),i.d(n,{signLoginPayload:()=>s});async function s(e){let{payload:n,account:i}=e;return{signature:await i.signMessage({message:function(e){let n=[`${e.domain} wants you to sign in with your Ethereum account:`,e.address].join("\n");n=[n,e.statement].join("\n\n"),e.statement&&(n+="\n");let i=[];if(e.uri){let n=`URI: ${e.uri}`;i.push(n)}let s=`Version: ${e.version}`;if(i.push(s),e.chain_id){let n=`Chain ID: ${e.chain_id}`||"1";i.push(n)}let t=`Nonce: ${e.nonce}`;i.push(t);let u=`Issued At: ${e.issued_at}`;i.push(u);let o=`Expiration Time: ${e.expiration_time}`;if(i.push(o),e.invalid_before){let n=`Not Before: ${e.invalid_before}`;i.push(n)}return e.resources&&i.push(["Resources:",...e.resources.map(e=>`- ${e}`)].join("\n")),[n,i.join("\n")].join("\n")}(n)}),payload:n}}}}]);