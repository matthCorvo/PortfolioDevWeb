function activateAllTabs() {
  const tabContainers = document.querySelectorAll(".tabs-container");
  
  for (let i = 0; i < tabContainers.length; i++) {
    if (!activateTabs(tabContainers[i].id)) {
      console.log("Error parsing tabs for '#" + id + "'");
    }
  }
}

function activateTabs(id) {
  const container = document.querySelector("#" + id + ".tabs-container");
  if (container === null) {
    return false;
  }
  
  const tabList = container.querySelector(".tabs");
  const tabs = tabList.querySelectorAll(".tab");
  const contentContainer = container.querySelector(".tabs-content");
  
  if (tabList.querySelector(".active") === null && tabs.length > 0) {
    tabs[0].classList.add("active");
    const content = contentContainer.querySelector(tabs[0].getAttribute("href"));
    const activeContents = contentContainer.querySelectorAll(".active");
    for (let i = 0; i < activeContents.length; i++) {
      activeContents[i].classList.remove("active");
    }
    content.classList.add("active");
  }
  
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      
      const tab = event.target;
      const href = tab.getAttribute("href");
      
      tabList.querySelector(".active").classList.remove("active");
      contentContainer.querySelector(".active").classList.remove("active");
      
      tab.classList.add("active");
      contentContainer.querySelector(href).classList.add("active");
      
      return false;
    });
  }
  
  return true;
}

activateAllTabs();
