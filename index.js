import{a as L,S as w,i as r}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();const b="https://pixabay.com/api/",v="38535962-5f658dcdecdcf7989cf195384";async function S(t,o){const e={q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:p,key:v},{data:n}=await L.get(b,{params:e});return n}const f=document.querySelector(".loader"),g=document.querySelector(".gallery"),y=document.querySelector(".cant-load-more"),u=document.querySelector(".load-more"),P={captionsData:"alt",captionDelay:250,className:"lightbox-custom"},M=new w(".open-modal-link",P);function q(t){const o=t.map(e=>`
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
      </li>`).join("");g.insertAdjacentHTML("beforeend",o),M.refresh()}function E(){g.innerHTML=""}function k(){f.classList.remove("hidden")}function x(){f.classList.add("hidden")}function B(){u.classList.remove("hidden")}function m(){u.classList.add("hidden")}function $(){y.classList.remove("hidden")}function I(){y.classList.add("hidden")}const N=document.querySelector(".form"),p=15;let l=1,c=null;N.addEventListener("submit",O);u.addEventListener("click",T);async function O(t){if(t.preventDefault(),c=t.target.elements["search-text"].value.trim(),c.length<=0){d("empty search","error");return}E(),l=1,await h()}async function T(t){l++,await h(),_()}function d(t,o="success"){const e={message:t,position:"topRight",timeoot:5e3};switch(o){case"success":r.success(e);break;case"error":r.error(e);break;case"warning":r.warning(e);break;case"info":r.info(e);break;default:r.error({...e,message:"invalid type of tosat"});break}}async function h(){k();try{const{hits:t,totalHits:o}=await S(c,l);t.length<=0?d("Sorry, there are no images matching your search query. Please try again!","warning"):q(t);const e=Math.ceil(o/p);l<e?(B(),I()):(m(),$())}catch(t){console.log("Error on createNewPage",t),d("Sorry, there was an error getting images. Please try again!","error"),m()}finally{x()}}function _(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height,o=window.scrollY,e=t*2+o;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
