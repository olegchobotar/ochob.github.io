"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43599],{43599:(e,t,n)=>{n.d(t,{claimCondition:()=>i});var a=n(53047);let m=[{type:"uint256",name:"tokenId"}],p=[{type:"tuple",name:"condition",components:[{type:"uint256",name:"startTimestamp"},{type:"uint256",name:"maxClaimableSupply"},{type:"uint256",name:"supplyClaimed"},{type:"uint256",name:"quantityLimitPerWallet"},{type:"bytes32",name:"merkleRoot"},{type:"uint256",name:"pricePerToken"},{type:"address",name:"currency"},{type:"string",name:"metadata"}]}];async function i(e){return(0,a.readContract)({contract:e.contract,method:["0xe9703d25",m,p],params:[e.tokenId]})}}}]);