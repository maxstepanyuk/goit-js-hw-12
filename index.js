import{a as h,S as L,i as o}from"./assets/vendor-CucEYOFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const b="https://pixabay.com/api/",w="38535962-5f658dcdecdcf7989cf195384";async function v(t,s){const e={q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:y,key:w},{data:l}=await h.get(b,{params:e});return l}const g=document.querySelector(".loader"),f=document.querySelector(".gallery"),d=document.querySelector(".load-more"),P={captionsData:"alt",captionDelay:250,className:"lightbox-custom"},S=new L(".open-modal-link",P);function M(t){const s=t.map(e=>`
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
      </li>`).join("");f.insertAdjacentHTML("beforeend",s),S.refresh()}function E(){f.innerHTML=""}function k(){g.classList.remove("hidden")}function x(){g.classList.add("hidden")}function $(){d.classList.remove("hidden")}function m(){d.classList.add("hidden")}const q=document.querySelector(".form"),y=15;let n=1,c=null;q.addEventListener("submit",B);d.addEventListener("click",I);async function B(t){if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c.length<=0){u("empty search","error");return}debugger;E(),n=1,await p()}async function I(t){debugger;n++,await p()}function u(t,s="success"){const e={message:t,position:"topRight",timeoot:5e3};switch(s){case"success":o.success(e);break;case"error":o.error(e);break;case"warning":o.warning(e);break;case"info":o.info(e);break;default:o.error({...e,message:"invalid type of tosat"});break}}async function p(){debugger;k();try{const{hits:t,totalHits:s}=await v(c,n);t.length<=0?u("Sorry, there are no images matching your search query. Please try again!","warning"):M(t);const e=Math.ceil(s/y);n<e?$():m()}catch(t){console.log("Error on handleLoadMoreButton",t),u("Sorry, there was an error getting images. Please try again!","error"),m()}finally{x()}}
//# sourceMappingURL=index.js.map
