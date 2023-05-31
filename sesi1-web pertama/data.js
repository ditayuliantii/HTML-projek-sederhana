// // console.log("Dita Yulianti");

// // variabel di js: const dan let
// const nama = "dita";
// console.log (nama);
// let umur = 18;

// // menggabung string dan variabel
// console.log (`nama saya ${nama} ,umur saya sekarang ${umur}`);
// //atau bisa menggunakan tanda koma
// console.log ("nama saya adalah", nama, "dan umur saya adalah", umur, "tahun.")


// //function 
// //function namaFunction
// function generateBiodata() {
//     console.log ("INI FUNCTION")
// }

// //pemanggilan function
// generateBiodata();

// let umur = 18;
// function generateBiodata() {
//     let generasi;
//     if (umur > 2 && umur <=10 ) {
//         generasi = "generasi anak-anak";
//     } else if (umur > 10 && umur <= 20 ) {
//         generasi = "generasi remaja";
//     } else if (umur > 20 && umur <= 40) {
//         generasi = "generasi dewasa";
//     } else if (umur > 40) {
//         generasi = "generasi tua";
//     } else {
//         generasi = "generasi balita"
//     }
//     console.log (generasi);
// }

// console.log (umur);
// generateBiodata();


//function seharusnya memiliki nilai kembalian (return)
let umur = 19;

//panggil/deklare id "biodata" di sini
let biodata = document.getElementById("biodata");
//yang berarti let biodata memiliki semua element 
//yang ada pada div dengan id "biodata" pada indeks.html

function generateBiodata() {
    let generasi;

    if (umur > 2 && umur <=10 ) {
        generasi = "generasi anak-anak";
    } else if (umur > 10 && umur <= 20 ) {
        generasi = "generasi remaja";
    } else if (umur > 20 && umur <= 40) {
        generasi = "generasi dewasa";
    } else if (umur > 40) {
        generasi = "generasi tua";
    } else {
        generasi = "generasi balita"
    }
    // return console.log (generasi);

    //nilai "generasi" akan dilempar ke element "biodata" pada bagian innerHTML nya
    // jadi innerHTML nya akan di isi nilai generasi
    return biodata.innerHTML = generasi;

}

console.log ("umur : ",umur, "tahun");
generateBiodata();
