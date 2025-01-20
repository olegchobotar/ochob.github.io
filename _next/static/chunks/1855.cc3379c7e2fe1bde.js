"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1855],{1855:(e,t,a)=>{a.d(t,{autoConnectWC:()=>K,connectWC:()=>F});var r=a(37939),n=a(80477),o=a(66692);let s=e=>e;class i extends n.C{constructor({body:e,error:t,url:a}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${s(a)}`,`Request body: ${(0,o.A)(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends n.C{constructor(e,{code:t,docsPath:a,metaMessages:r,name:n,shortMessage:o}){super(o,{cause:e,docsPath:a,metaMessages:r||e?.metaMessages,name:n||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=n||e.name,this.code=e instanceof i?e.code:t??-1}}class d extends c{constructor(e,t){super(e,t),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class l extends c{constructor(e){super(e,{code:l.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class u extends c{constructor(e){super(e,{code:u.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class p extends c{constructor(e,{method:t}={}){super(e,{code:p.code,name:"MethodNotFoundRpcError",shortMessage:`The method${t?` "${t}"`:""} does not exist / is not available.`})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class h extends c{constructor(e){super(e,{code:h.code,name:"InvalidParamsRpcError",shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class b extends c{constructor(e){super(e,{code:b.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class m extends c{constructor(e){super(e,{code:m.code,name:"InvalidInputRpcError",shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class v extends c{constructor(e){super(e,{code:v.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends c{constructor(e){super(e,{code:f.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends c{constructor(e){super(e,{code:g.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class w extends c{constructor(e,{method:t}={}){super(e,{code:w.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${t?` "${t}"`:""} is not implemented.`})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class C extends c{constructor(e){super(e,{code:C.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class y extends c{constructor(e){super(e,{code:y.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class M extends d{constructor(e){super(e,{code:M.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(M,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class P extends d{constructor(e){super(e,{code:P.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(P,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class E extends d{constructor(e,{method:t}={}){super(e,{code:E.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${t?` " ${t}"`:""}.`})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class R extends d{constructor(e){super(e,{code:R.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(R,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class x extends d{constructor(e){super(e,{code:x.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class I extends d{constructor(e){super(e,{code:I.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});var O=a(60438),j=a(62251),q=a(75231),T=a(10354),N=a(94271),U=a(7188),_=a(80763),A=a(72486),S=a(74627),$=a(56040),k=a(77969),D=a(6623),L=a(46924);let Q="wallet_addEthereumChain",J={requestedChains:"tw.wc.requestedChains",lastUsedChainId:"tw.wc.lastUsedChainId"};async function F(e,t,a,r,n){let o=await V(e,a,n),s=e.walletConnect,{onDisplayUri:i}=s||{};if(!i&&n&&"walletConnect"!==a){let e=await (0,S.u)(a);i=t=>{let a=e.mobile.native||e.mobile.universal;if(!a)throw Error("No app url found for wallet connect to redirect to.");n((0,A.YP)(a,t).redirect)}}i&&o.events.addListener("display_uri",i);let c=s?.optionalChains,d=e.chain;"global.safe"===a&&(c=X.map(j.Q4),d&&!c.includes(d)&&(d=void 0));let{rpcMap:l,requiredChain:u,optionalChains:p}=G({client:e.client,chain:d,optionalChains:c});o.session&&await o.connect({...s?.pairingTopic?{pairingTopic:s?.pairingTopic}:{},optionalChains:p,chains:u?[u.id]:void 0,rpcMap:l}),H(p,r);let h=(await o.enable())[0];if(!h)throw Error("No accounts found on provider.");let b=(0,D.A)(o.chainId),m=e.chain&&e.chain.id===b?e.chain:(0,j.Q4)(b);if(e){let t={optionalChains:e.walletConnect?.optionalChains,chain:e.chain,pairingTopic:e.walletConnect?.pairingTopic};r&&(0,_.O7)(r,a,t)}return s?.onDisplayUri&&o.events.removeListener("display_uri",s.onDisplayUri),z(h,m,o,t,r,e.client)}async function K(e,t,a,r,n){let o=r?await (0,_.lh)(r,a):null,s=await V(o?{chain:o.chain,client:e.client,walletConnect:{pairingTopic:o.pairingTopic,optionalChains:o.optionalChains}}:{client:e.client,walletConnect:{}},a,n,!0),i=s.accounts[0];if(!i)throw Error("No accounts found on provider.");let c=(0,D.A)(s.chainId);return z(i,e.chain&&e.chain.id===c?e.chain:(0,j.Q4)(c),s,t,r,e.client)}async function V(e,t,r,n=!1){let o=await (0,S.u)(t),s=e.walletConnect,{EthereumProvider:i,OPTIONAL_EVENTS:c,OPTIONAL_METHODS:d}=await Promise.all([a.e(94935),a.e(32647)]).then(a.bind(a,32647)),l=s?.optionalChains,u=e.chain;"global.safe"===t&&(l=X.map(j.Q4),u&&!l.includes(u)&&(u=void 0));let{rpcMap:p,requiredChain:h,optionalChains:b}=G({client:e.client,chain:u,optionalChains:l}),m=await i.init({showQrModal:s?.showQrModal===void 0?!r:s.showQrModal,projectId:s?.projectId||L.S,optionalMethods:d,optionalEvents:c,optionalChains:b,chains:h?[h.id]:void 0,metadata:{name:s?.appMetadata?.name||(0,k.o)().name,description:s?.appMetadata?.description||(0,k.o)().description,url:s?.appMetadata?.url||(0,k.o)().url,icons:[s?.appMetadata?.logoUrl||(0,k.o)().logoUrl]},rpcMap:p,qrModalOptions:s?.qrModalOptions,disableProviderPing:!0});if(m.events.setMaxListeners(Number.POSITIVE_INFINITY),!n&&m.session&&await m.disconnect(),"walletConnect"!==t){async function v(){let e=m.session?.peer?.metadata?.redirect?.native||o.mobile.native||o.mobile.universal;r&&e&&await r(e)}m.signer.client.on("session_request_sent",v),m.events.addListener("disconnect",()=>{m.signer.client.off("session_request_sent",v)})}return m}function Y({provider:e,address:t,client:a}){return{address:t,async sendTransaction(r){let n=await e.request({method:"eth_sendTransaction",params:[{gas:r.gas?(0,T.cK)(r.gas):void 0,value:r.value?(0,T.cK)(r.value):void 0,from:(0,q.bv)(t),to:r.to,data:r.data}]});return(0,O.E)({client:a,walletAddress:(0,q.bv)(t),walletType:"walletConnect",transactionHash:n,chainId:r.chainId,contractAddress:r.to??void 0,gasPrice:r.gasPrice}),{transactionHash:n}},async signMessage({message:t}){let a="string"==typeof t?(0,T.i3)(t):t.raw instanceof Uint8Array?(0,T.EY)(t.raw):t.raw;return e.request({method:"personal_sign",params:[a,this.address]})},async signTypedData(t){let a=(0,U.y)(t),{domain:n,message:o,primaryType:s}=a,i={EIP712Domain:(0,r.H4)({domain:n}),...a.types};(0,r.$$)({domain:n,message:o,primaryType:s,types:i});let c=(0,r.v8)({domain:n??{},message:o,primaryType:s,types:i});return await e.request({method:"eth_signTypedData_v4",params:[this.address,c]})}}}function z(e,t,a,r,n,o){let s=Y({provider:a,address:e,client:o});async function i(){a.removeListener("accountsChanged",d),a.removeListener("chainChanged",l),a.removeListener("disconnect",c),await a.disconnect()}function c(){H([],n),n?.removeItem(J.lastUsedChainId),i(),r.emit("disconnect",void 0)}function d(e){if(e[0]){let t=Y({provider:a,address:(0,q.bv)(e[0]),client:o});r.emit("accountChanged",t),r.emit("accountsChanged",e)}else c()}function l(e){let t=(0,j.Q4)((0,D.A)(e));r.emit("chainChanged",t),n?.setItem(J.lastUsedChainId,String(e))}return a.on("accountsChanged",d),a.on("chainChanged",l),a.on("disconnect",c),a.on("session_delete",c),[s,t,i,e=>W(a,e,n)]}async function W(e,t,a){let r=t.id;try{let n=e.session?.namespaces[L.C]?.chains?.map(e=>Number.parseInt(e.split(":")[1]||""))??[],o=e.session?.namespaces[L.C]?.methods||[];if(!n.includes(r)&&o.includes(Q)){let n=await (0,j.getChainMetadata)(t),o=[...new Set([...t.blockExplorers?.map(e=>e.url)||[],...n.explorers?.map(e=>e.url)||[]])];await e.request({method:Q,params:[{chainId:(0,T.cK)(n.chainId),chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:(0,$.k)(n),blockExplorerUrls:o.length>0?o:void 0}]});let s=await B(a);s.push(r),H(s,a)}await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,T.cK)(r)}]})}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new M(t);throw new I(t)}}function H(e,t){t?.setItem(J.requestedChains,N.A(e))}async function B(e){let t=await e.getItem(J.requestedChains);return t?JSON.parse(t):[]}function G(e){let t={};e.chain&&(t[e.chain.id]=(0,j.r8)({chain:e.chain,client:e.client}));let a=(e?.optionalChains||[]).slice(0,10);for(let r of a)t[r.id]=(0,j.r8)({chain:r,client:e.client});return e.chain||0!==a.length||(t[1]=(0,j.Q4)(1).rpc),{rpcMap:t,requiredChain:e.chain?e.chain:void 0,optionalChains:a.length>0?a.map(e=>e.id):[1]}}let X=[1,0xaa36a7,42161,43114,8453,0x4e454152,84532,56,42220,100,10,137,1101,324,534352]}}]);