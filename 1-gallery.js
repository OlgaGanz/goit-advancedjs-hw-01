import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-0kS7SI5H.js";const r=[{preview:".src/images/thumb/photo1.jpg",original:".src/images/large/photo1.jpg",description:"Team working on a project with sticky notes"},{preview:".src/images/thumb/photo2.jpg",original:".src/images/large/photo2.jpg",description:"Hand holding a light bulb against the sky"},{preview:".src/images/thumb/photo3.jpg",original:".src/images/large/photo3.jpg",description:"Simple designer portfolio on a smartphone"},{preview:".src/images/thumb/photo4.jpg",original:".src/images/large/photo4.jpg",description:"Modern office space with large windows"},{preview:".src/images/thumb/photo5.jpg",original:".src/images/large/photo5.jpg",description:"Game room with ping pong table and seating"},{preview:".src/images/thumb/photo6.jpg",original:".src/images/large/photo6.jpg",description:"Open office with people working on laptops"},{preview:".src/images/thumb/photo7.jpg",original:".src/images/large/photo7.jpg",description:"Desk setup with laptop, coffee, and accessories"},{preview:".src/images/thumb/photo8.jpg",original:".src/images/large/photo8.jpg",description:"Person in sweater working on a laptop"},{preview:".src/images/thumb/photo9.jpg",original:".src/images/large/photo9.jpg",description:"Team meeting with a presentation on screen"}],s=i=>{const a=document.createElement("li");a.classList.add("gallery-item");const o=document.createElement("a");o.classList.add("gallery-link"),o.href=i.original;const e=document.createElement("img");return e.classList.add("gallery-image"),e.src=i.preview,e.setAttribute("data-source",i.original),e.alt=i.description,o.append(e),a.append(o),a},p=r.map(s),g=document.querySelector(".gallery");g.append(...p);new t(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map