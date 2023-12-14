let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


const productApi = "https://fakestoreapi.com/products ";

fetch(productApi)
.then (response=>response.json())
.then(data=>{ document.getElementById("grid").innerHTML = "";
data.forEach(function (product) {
  let element = document.createElement("div");
  element.className = "box";
  let img = document.createElement("img");
  img.className = "gambar";
  img.src = product.image;
  element.appendChild(img);

  let content = document.createElement("div");
  content.className = "konten";
  element.appendChild(content);

  let h2 = document.createElement("h2");
  h2.innerHTML = product.title;
  content.appendChild(h2);

  let deskripsi = document.createElement("p");
  deskripsi.innerHTML = product.deskripsi;
  content.appendChild(deskripsi);

  let harga = document.createElement("p");
  harga.innerHTML = product.price;
  content.appendChild(harga);

  let outpute = document.getElementById("grid");
  outpute.appendChild(element);
});

    
})


