import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form"),m=document.querySelector('input[name = "delay"]');o.addEventListener("submit",c);function c(r){r.preventDefault();const t=o.delay.value,i=o.state.value;new Promise((e,n)=>{setTimeout(()=>{i==="fulfilled"?e(t):i==="rejected"&&n(t)},t)}).then(e=>s.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})).catch(e=>s.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})),m.value=""}
//# sourceMappingURL=commonHelpers2.js.map