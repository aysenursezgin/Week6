function newElement() {
    const inputValue = document.getElementById("task").value;
    if (inputValue === "") {
      const errorToast = document.querySelector(".toast.error");
      $(errorToast).toast("show");
    } else {
      const li = document.createElement("li");
      li.textContent = inputValue;
      document.getElementById("list").appendChild(li);
  
      const successToast = document.querySelector(".toast.success");
      $(successToast).toast("show");
  
      document.getElementById("task").value = "";
  
      const closeButton = document.createElement("span");
      closeButton.className = "close";
      closeButton.innerHTML = "&times;";
      li.appendChild(closeButton);
  
      closeButton.onclick = function () {
        const parentLi = this.parentElement;
        parentLi.style.display = "none";
        updateLocalStorage();
      };
  
      updateLocalStorage();
    }
  }
  
  document.getElementById("list").addEventListener("click", function (e) {
    if (e.target && e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
  
  document.querySelectorAll("ul#list li").forEach((li) => {
    li.innerHTML += `<span class="close">&times;</span>`;
    li.querySelector(".close").onclick = () => (li.style.display = "none");
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const listElement = document.getElementById("list");
    listElement.innerHTML = "";
    const storedList = JSON.parse(localStorage.getItem("taskList")) || [];
    storedList.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      document.getElementById("list").appendChild(li);
  
      const closeButton = document.createElement("span");
      closeButton.className = "close";
      closeButton.innerHTML = "&times;";
      li.appendChild(closeButton);
  
      closeButton.onclick = function () {
        const parentLi = this.parentElement;
        parentLi.style.display = "none";
        updateLocalStorage();
      };
    });
  });
  
  function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll("ul#list li").forEach((li) => {
      if (li.style.display !== "none") {
        tasks.push(li.textContent.replace("\u00D7", "").trim());
      }
    });
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }
  
  function newElement() {
    const inputValue = document.getElementById("task").value;
    if (inputValue === "") {
      const errorToast = document.querySelector(".toast.error");
      $(errorToast).toast("show");
    } else {
      const li = document.createElement("li");
      li.textContent = inputValue;
      document.getElementById("list").appendChild(li);
  
      const successToast = document.querySelector(".toast.success");
      $(successToast).toast("show");
  
      document.getElementById("task").value = "";
  
      const closeButton = document.createElement("span");
      closeButton.className = "close";
      closeButton.innerHTML = "&times;";
      li.appendChild(closeButton);
  
      closeButton.onclick = function () {
        const parentLi = this.parentElement;
        parentLi.style.display = "none";
        updateLocalStorage();
      };
  
      updateLocalStorage();
    }
  }