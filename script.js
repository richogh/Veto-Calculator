document.getElementById("downloadBtn").addEventListener("click", function() {
  // Buat link tersembunyi untuk unduh
  const link = document.createElement("a");
  link.href = "contoh.txt";   // file yang ada di repo
  link.download = "contoh.txt"; // nama file saat diunduh
  link.click();
});
