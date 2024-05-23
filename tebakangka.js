var bermainLagi = true;

while (bermainLagi) {
  // Memulai permainan
  alert("Tebak angka dari 1-10, kamu punya 3 kesempatan!");

  // Komputer memilih angka acak antara 1-10
  var com = Math.floor(Math.random() * 10) + 1;

  // Mengatur jumlah kesempatan
  var kesempatan = 3;

  // Loop untuk memberi kesempatan kepada pemain
  while (kesempatan > 0) {
    // Meminta input pemain
    var player = prompt("Masukkan angka tebakanmu (1-10):");

    // Jika pemain membatalkan
    if (player === null) {
      alert("Permainan dibatalkan!");
      bermainLagi = false; // Set untuk menghentikan permainan
      break;
    }

    // Konversi input pemain ke angka
    player = parseInt(player);

    // Cek validitas input
    if (isNaN(player) || player < 1 || player > 10) {
      alert("Masukkan angka yang valid antara 1 dan 10.");
      continue;
    }

    // Cek tebakan pemain
    if (player === com) {
      alert("Tebakan Anda benar! Angka yang dipilih adalah " + com);
      break;
    } else if (player < com) {
      alert("Angka yang Anda pilih terlalu kecil.");
    } else {
      alert("Angka yang Anda pilih terlalu besar.");
    }

    // Kurangi kesempatan
    kesempatan--;

    // Jika kesempatan habis
    if (kesempatan === 0) {
      alert("Kesempatan Anda habis! Angka yang benar adalah " + com);
    } else {
      alert("Kesempatan Anda tersisa: " + kesempatan);
    }
  }

  // Jika permainan dibatalkan
  if (!bermainLagi) {
    break;
  }

  alert("Terima kasih sudah bermain!");

  // Tanya apakah ingin bermain lagi
  bermainLagi = confirm("Apakah Anda ingin bermain lagi?");
}

alert("Sampai jumpa! Terima kasih sudah bermain!");
