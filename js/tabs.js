function activateAllTabs(){const e=document.querySelectorAll(".tabs-container");for(let t=0;t<e.length;t++){activateTabs(e[t].id)||console.log("Error parsing tabs for '#"+id+"'")}}function activateTabs(e){const t=document.querySelector("#"+e+".tabs-container");if(null===t)return!1;const a=t.querySelector(".tabs"),r=a.querySelectorAll(".tab"),c=t.querySelector(".tabs-content");if(null===a.querySelector(".active")&&r.length>0){r[0].classList.add("active");const e=c.querySelector(r[0].getAttribute("href")),t=c.querySelectorAll(".active");for(let e=0;e<t.length;e++)t[e].classList.remove("active");e.classList.add("active")}for(let e=0;e<r.length;e++)r[e].addEventListener("click",e=>{e.preventDefault(),e.stopImmediatePropagation();const t=e.target,r=t.getAttribute("href");return a.querySelector(".active").classList.remove("active"),c.querySelector(".active").classList.remove("active"),t.classList.add("active"),c.querySelector(r).classList.add("active"),!1});return!0}activateAllTabs();