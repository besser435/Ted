var h=Object.defineProperty;var u=(s,t,r)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r;var o=(s,t,r)=>(u(s,typeof t!="symbol"?t+"":t,r),r);import{m as y,C as f,j as l,e as _,R as C,f as v}from"./index-A0WahC5x.js";var b=Object.defineProperty,S=Object.getOwnPropertyDescriptor,p=(s,t,r,i)=>{for(var e=i>1?void 0:i?S(t,r):t,a=s.length-1,n;a>=0;a--)(n=s[a])&&(e=(i?n(t,r,e):n(e))||e);return i&&e&&b(t,r,e),e};let d=class extends y(f){constructor(){super(...arguments);o(this,"cameraVideo");o(this,"pc",null);o(this,"remoteId",null)}startPlayback(){var i;const r=this.buildAbsoluteUrl(this.camera.urlStream||"");(i=this.pc)==null||i.close(),fetch(r,{body:JSON.stringify({type:"request"}),headers:{"Content-Type":"application/json"},method:"POST"}).then(e=>e.json()).then(e=>{var n;this.remoteId="id"in e&&typeof e.id=="string"?e.id:null;const a={sdpSemantics:"unified-plan"};return"iceServers"in e&&Array.isArray(e.iceServers)&&(a.iceServers=e.iceServers),this.pc=new RTCPeerConnection(a),this.pc.addTransceiver("video",{direction:"recvonly"}),this.pc.ontrack=c=>{c.track.kind==="video"&&(this.cameraVideo.srcObject=c.streams[0])},this.pc.onicecandidate=c=>{if(c.candidate)return fetch(r,{body:JSON.stringify({type:"remote_candidate",id:this.remoteId,candidates:[c.candidate]}),headers:{"Content-Type":"application/json"},method:"POST"}).catch(m=>l.error("[WebrtcCamerastreamerCamera] onicecandidate",m))},(n=this.pc)==null?void 0:n.setRemoteDescription(e)}).then(()=>{var e;return(e=this.pc)==null?void 0:e.createAnswer()}).then(e=>{var a;return(a=this.pc)==null?void 0:a.setLocalDescription(e)}).then(()=>{var a;const e=(a=this.pc)==null?void 0:a.localDescription;return fetch(r,{body:JSON.stringify({type:e==null?void 0:e.type,id:this.remoteId,sdp:e==null?void 0:e.sdp}),headers:{"Content-Type":"application/json"},method:"POST"})}).then(e=>e.json()).catch(e=>l.error("[WebrtcCamerastreamerCamera] setUrl",e))}stopPlayback(){var r;(r=this.pc)==null||r.close(),this.pc=null,this.cameraVideo.src=""}};p([C("streamingElement")],d.prototype,"cameraVideo",2);d=p([_({})],d);var P=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("video",{ref:"streamingElement",style:t.cameraStyle,attrs:{autoplay:"",playsinline:"",muted:"",crossorigin:t.crossorigin},domProps:{muted:!0}})},O=[],g=v(d,P,O,!1,null,null,null,null);const D=g.exports;export{D as default};
