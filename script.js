document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnClick");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    const date = new Date().toLocaleString("id-ID");
    output.textContent = "Tombol diklik pada: " + date;
  });
});
