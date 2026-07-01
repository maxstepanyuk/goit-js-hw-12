import{a as w,S as b,i as r}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();const v="https://pixabay.com/api/",P="38535962-5f658dcdecdcf7989cf195384";async function S(t,o){const e={q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:h,key:P},{data:l}=await w.get(v,{params:e});return l}const g=document.querySelector(".loader"),y=document.querySelector(".gallery"),p=document.querySelector(".cant-load-more"),m=document.querySelector(".load-more"),M={captionsData:"alt",captionDelay:250,className:"lightbox-custom"},E=new b(".open-modal-link",M);function q(t){const o=t.map(e=>`
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
      </li>`).join("");y.insertAdjacentHTML("beforeend",o),E.refresh()}function k(){y.innerHTML=""}function x(){g.classList.remove("hidden")}function B(){g.classList.add("hidden")}function O(){m.classList.remove("hidden")}function c(){m.classList.add("hidden")}function $(){p.classList.remove("hidden")}function f(){p.classList.add("hidden")}const I=document.querySelector(".form"),h=15;let n=1,d=null;I.addEventListener("submit",_);m.addEventListener("click",A);async function _(t){if(t.preventDefault(),d=t.target.elements["search-text"].value.trim(),d.length<=0){u("empty search","error");return}k(),n=1,await L()}async function A(t){const o=document.querySelector(".gallery").getBoundingClientRect().bottom;n++,await L(),window.scrollBy({top:o,behavior:"smooth"})}function u(t,o="success"){const e={message:t,position:"topRight",timeoot:5e3};switch(o){case"success":r.success(e);break;case"error":r.error(e);break;case"warning":r.warning(e);break;case"info":r.info(e);break;default:r.error({...e,message:"invalid type of tosat"});break}}async function L(){c(),f(),x();try{const{hits:t,totalHits:o}=await S(d,n);t.length<=0?u("Sorry, there are no images matching your search query. Please try again!","warning"):q(t);const e=Math.ceil(o/h);n<e?(O(),f()):(c(),$())}catch(t){console.log("Error on createNewPage",t),u("Sorry, there was an error getting images. Please try again!","error"),c()}finally{B()}}
//# sourceMappingURL=index.js.map
