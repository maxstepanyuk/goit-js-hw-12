import{a as p,S as h,i as l}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const L="https://pixabay.com/api/",w="38535962-5f658dcdecdcf7989cf195384";async function b(t,o){const e={q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:y,key:w},{data:n}=await p.get(L,{params:e});return n}const M={captionsData:"alt",captionDelay:250,className:"lightbox-custom"},v=new h(".open-modal-link",M);function P(t){const o=t.map(e=>`
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
      </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",o),v.refresh()}function S(){s.gallery.innerHTML=""}function B(){s.loader.classList.remove("hidden")}function E(){s.loader.classList.add("hidden")}function q(){s.loadMoreButton.classList.remove("hidden")}function d(){s.loadMoreButton.classList.add("hidden")}function k(){s.cantLoadMore.classList.remove("hidden")}function g(){s.cantLoadMore.classList.add("hidden")}const s={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),cantLoadMore:document.querySelector(".cant-load-more"),loadMoreButton:document.querySelector(".load-more")},y=15;let i=1,u=null;s.form.addEventListener("submit",x);s.loadMoreButton.addEventListener("click",O);async function x(t){if(t.preventDefault(),u=t.target.elements["search-text"].value.trim(),u.length<=0){m("empty search","error");return}S(),i=1,await f()}async function O(t){const o=document.querySelector(".gallery").getBoundingClientRect().bottom;i++,await f(),window.scrollBy({top:o,behavior:"smooth"})}function m(t,o="success"){const e={message:t,position:"topRight",timeoot:5e3};switch(o){case"success":l.success(e);break;case"error":l.error(e);break;case"warning":l.warning(e);break;case"info":l.info(e);break;default:l.error({...e,message:"invalid type of tosat"});break}}async function f(){d(),g(),B();try{const{hits:t,totalHits:o}=await b(u,i);t.length<=0?m("Sorry, there are no images matching your search query. Please try again!","warning"):P(t);const e=Math.ceil(o/y);i<e?(q(),g()):(d(),k())}catch(t){console.log("Error on createNewPage",t),m("Sorry, there was an error getting images. Please try again!","error"),d()}finally{E()}}
//# sourceMappingURL=index.js.map
