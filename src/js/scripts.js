function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = imgElement.getAttribute("data-large");
    captionText.innerHTML = imgElement.alt;
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  