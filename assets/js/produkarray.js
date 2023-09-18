let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
let products = [{
    nama:"Asus",
    gambar:"assets/images/asus.png",
    deskripsi:"ROG Phone 6 ditenagai oleh Snapdragon 8+ Gen 1 bersama dengan RAM 8/12/16GB, penyimpanan 128/256/512GB dan baterai 6,000mAh dengan fast-charging 65W. Layarnya berpanel AMOLED dengan ukuran 6,78 inci, resolusi FHD+ dan refresh rate 165Hz",
    harga : "Rp 8.999.000"
},
{
    nama:"Xiaomi",
    gambar:"assets/images/Xiaomi.png",
    deskripsi:"Black Shark 5 Pro sendiri mengemas layar OLED 6,67 inci dengan resolusi FHD+ dan refresh rate 144Hz. Untuk spesifikasi, Snapdragon 8 Gen 1 dipilih sebagai dapur utama, ditemani oleh RAM 8/12/16GB, penyimpanan 128/256/512GB dan baterai 4,650mAh dengan fast-charging 120W",
    harga : "Rp 15.000.000"

},
{
    nama:"oppo",
    gambar:"assets/images/oppo.png",
    deskripsi:"Dimensi dan bobot 163,7 x 73,9 x 8,5 mm, 218 gram Layar AMOLED 6,7 inci QHD Plus (3.216 x 1440 piksel), refresh rate 120 Hz, touch sampling rate 240 Hz, Gorilla Glass Victus Chipset Snapdragon 8 Gen 1 (8-core) GPU dan NPU Adreno 730 818 MHz",
    harga : "Rp 15.000.000"
}
]
function render(){
document.getElementById("grid").innerHTML=""
products.forEach(function(product){
    let element = document.createElement('div')
    element.className ="box"
    let img = document.createElement('img')
    img.className="gambar"
    img.src = product.gambar
    element.appendChild(img)

   let content = document.createElement('div')
   content.className="konten"
   element.appendChild(content)
   
   let h2 = document.createElement('h2')
   h2.innerHTML=product.nama
  content.appendChild(h2)
  
  let deskripsi = document.createElement('p')
  deskripsi.innerHTML=product.deskripsi
  content.appendChild(deskripsi)

  let harga = document.createElement('p')
  harga.innerHTML=product.harga
  content.appendChild(harga)
  



let outpute = document.getElementById('grid');
outpute.appendChild(element);    
})

}
render()