function saklarKeluarga() {
    // id default-toggle didapat dari tag input
    let toggle1 = document.getElementById("toggle-fam1")
    let toggle2 = document.getElementById("toggle-fam2")
    let toggle3 = document.getElementById("toggle-fam3")
   
    let lampu1 = document.getElementById("lampuFam1");
    let lampu2 = document.getElementById("lampuFam2");
    let lampu3 = document.getElementById("lampuFam3");
    
    // jika pada toggle 1, checked bernilai true, yang berarti tombol diklik,
    // maka lampu akan menyala, jika tidak lampu mati    
    if(toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    } else{
        lampu2.src = "assets/images/off.gif";
    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu3.src = "assets/images/off.gif";
    }
}

function saklarUtamaKeluarga() {
    let toggleUtama = document.getElementById("toggle-keluarga-utama")

    let lampu1 = document.getElementById("lampuFam1");
    let lampu2 = document.getElementById("lampuFam2");
    let lampu3 = document.getElementById("lampuFam3");

    if(toggleUtama.checked == true) {
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
        lampu3.src = "assets/images/off.gif";
    }
}

function saklarMakan() {
    let toggle1 = document.getElementById("toggle-mkn");
    let lampu1 = document.getElementById("lampuMkn");
    
    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }

}

function saklarUtamaMakan() {
    let toggleUtama = document.getElementById("toggle-makan-utama");
    let lampu1 = document.getElementById("lampuMkn");

    if (toggleUtama.checked == true) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }
}

function saklarTidur() {
    let toggle1 = document.getElementById("toggle-tdr1");
    let toggle2 = document.getElementById("toggle-tdr2");

    let lampu1 = document.getElementById("lampuTdr1");
    let lampu2 = document.getElementById("lampuTdr2");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu2.src = "assets/images/off.gif";
    }
}

function saklarUtamaTidur() {
    let toggleUtama = document.getElementById("toggle-tidur-utama");

    let lampu1 = document.getElementById("lampuTdr1");
    let lampu2 = document.getElementById("lampuTdr2");

    if (toggleUtama.checked) {
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
    }
}

function saklarTamu() {
    let toggle1 = document.getElementById("toggle-tamu1");
    let toggle2 = document.getElementById("toggle-tamu2");
    let toggle3 = document.getElementById("toggle-tamu3");
    let toggle4 = document.getElementById("toggle-tamu4");

    let lampu1 = document.getElementById("lampuTamu1");
    let lampu2 = document.getElementById("lampuTamu2");
    let lampu3 = document.getElementById("lampuTamu3");
    let lampu4 = document.getElementById("lampuTamu4");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
    }
    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu2.src = "assets/images/off.gif";
    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";
    } else {
        lampu3.src = "assets/images/off.gif";
    }
    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu4.src = "assets/images/off.gif";
    }
}

function saklarUtamaTamu() {
    let toggleUtama = document.getElementById("toggle-tamu-utama");

    let lampu1 = document.getElementById("lampuTamu1");
    let lampu2 = document.getElementById("lampuTamu2");
    let lampu3 = document.getElementById("lampuTamu3");
    let lampu4 = document.getElementById("lampuTamu4");

    if (toggleUtama.checked) {
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
        lampu3.src = "assets/images/on.gif";
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
        lampu3.src = "assets/images/off.gif";
        lampu4.src = "assets/images/off.gif";
    }
}