"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64984],{64984:(e,a,r)=>{r.r(a),r.d(a,{buyFromListing:()=>l,isBuyFromListingSupported:()=>m});var t=r(92223),n=r(62685),i=r(45022),c=r(55189);let s="0x704232dc",o=[{type:"uint256",name:"_listingId"},{type:"address",name:"_buyFor"},{type:"uint256",name:"_quantity"},{type:"address",name:"_currency"},{type:"uint256",name:"_expectedTotalPrice"}],u=[];var y=r(47131),d=r(58721);function l(e){return function(e){let a=(0,i.O)(async()=>"asyncParams"in e?await e.asyncParams():e);return(0,n.m)({contract:e.contract,method:[s,o,u],params:async()=>{let e=await a();return[e.listingId,e.buyFor,e.quantity,e.currency,e.expectedTotalPrice]},value:async()=>(await a()).overrides?.value,accessList:async()=>(await a()).overrides?.accessList,gas:async()=>(await a()).overrides?.gas,gasPrice:async()=>(await a()).overrides?.gasPrice,maxFeePerGas:async()=>(await a()).overrides?.maxFeePerGas,maxPriorityFeePerGas:async()=>(await a()).overrides?.maxPriorityFeePerGas,nonce:async()=>(await a()).overrides?.nonce,extraGas:async()=>(await a()).overrides?.extraGas,erc20Value:async()=>(await a()).overrides?.erc20Value})}({contract:e.contract,asyncParams:async()=>{let a=await y.t({contract:e.contract,listingId:e.listingId}),r=await (0,d.r)({contract:e.contract,listing:a,quantity:e.quantity});if(!r.valid)throw Error(r.reason);return{listingId:e.listingId,quantity:e.quantity,buyFor:e.recipient,currency:a.currencyContractAddress,expectedTotalPrice:a.pricePerToken*e.quantity,overrides:{value:(0,t.dw)(a.currencyContractAddress)?a.pricePerToken*e.quantity:0n,extraGas:50000n,erc20Value:(0,t.dw)(a.currencyContractAddress)?void 0:{amountWei:a.pricePerToken*e.quantity,tokenAddress:a.currencyContractAddress}}}}})}function m(e){return(0,c.F)({availableSelectors:e,method:[s,o,u]})&&y.x(e)}}}]);