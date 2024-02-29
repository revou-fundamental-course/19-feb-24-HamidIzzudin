// ganti nama Hi
function replaceName() {
    let nama = prompt("Halo, siapa nama anda?","");
    document.getElementById("name").innerHTML= nama;
}

document.getElementById('tombol').addEventListener('click', function() {
    replaceName();
});





// ganti gambar
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    let i;
    let imgList =document.getElementsByClassName('img-slideshow');
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i=0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex  -1].style.display="block";
};

setInterval (() => {
    plusDivs(1);
}, 3000 );
















