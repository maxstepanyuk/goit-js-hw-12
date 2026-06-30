import{a as L,S as w,i as r}from"./assets/vendor-CucEYOFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const b="https://pixabay.com/api/",v="38535962-5f658dcdecdcf7989cf195384";async function S(t,s){const e={q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:p,key:v},{data:n}=await L.get(b,{params:e});return n}const f=document.querySelector(".loader"),g=document.querySelector(".gallery"),y=document.querySelector(".cant-load-more"),u=document.querySelector(".load-more"),P={captionsData:"alt",captionDelay:250,className:"lightbox-custom"},M=new w(".open-modal-link",P);function E(t){const s=t.map(e=>`
      <li class="gallery-item">
        <a
          class="gallery-link open-modal-link"
          href="${e.largeImageURL}"
        >
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="Photo of ${e.name} by ${e.user}"
            with="360"
            height="152"
          />
          <ul class="gallery-item-stats">
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Likes</p>
              <p class="gallery-item-stat-value">${e.likes}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Views</p>
              <p class="gallery-item-stat-value">${e.views}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Comments</p>
              <p class="gallery-item-stat-value">${e.comments}</p>
            </li>
            <li class="gallery-item-stat">
              <p class="gallery-item-stat-name">Downloads</p>
              <p class="gallery-item-stat-value">${e.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",s),M.refresh()}function k(){g.innerHTML=""}function q(){f.classList.remove("hidden")}function x(){f.classList.add("hidden")}function $(){u.classList.remove("hidden")}function m(){u.classList.add("hidden")}function B(){y.classList.remove("hidden")}function I(){y.classList.add("hidden")}const O=document.querySelector(".form"),p=15;let l=1,c=null;O.addEventListener("submit",_);u.addEventListener("click",A);async function _(t){if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c.length<=0){d("empty search","error");return}debugger;k(),l=1,await h()}async function A(t){debugger;l++,await h()}function d(t,s="success"){const e={message:t,position:"topRight",timeoot:5e3};switch(s){case"success":r.success(e);break;case"error":r.error(e);break;case"warning":r.warning(e);break;case"info":r.info(e);break;default:r.error({...e,message:"invalid type of tosat"});break}}async function h(){debugger;q();try{const{hits:t,totalHits:s}=await S(c,l);t.length<=0?d("Sorry, there are no images matching your search query. Please try again!","warning"):E(t);const e=Math.ceil(s/p);l<e?($(),I()):(m(),B())}catch(t){console.log("Error on handleLoadMoreButton",t),d("Sorry, there was an error getting images. Please try again!","error"),m()}finally{x()}}
//# sourceMappingURL=index.js.map
