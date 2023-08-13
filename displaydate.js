const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

const datenow = new Date();
const day = datenow.getDate();
const month = months[datenow.getMonth()];
const year = datenow.getFullYear();
const thisDay = days[datenow.getDay()];

// document.write(`<b class="text-primary">Tanggal: ${thisDay}, ${day} ${month} ${year}</b>`);
document.getElementById("tanggalsekarang").innerHTML = `<p class="text-center fs3 fw-bolder">Tanggal: ${thisDay}, ${day} ${month} ${year}</p>`