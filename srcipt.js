
    function tampilkanHasil() {
      var nama = document.getElementById("nama").value;
    
      
      document.getElementById("hasilNama").innerText = nama;
      
}

function tampilkanTanggal() {
      var tanggal = new Date(); // Mendapatkan tanggal sekarang
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var tanggalFormatted = tanggal.toLocaleDateString('id-ID', options);
      
      document.getElementById("tanggalSekarang").innerText = tanggalFormatted;
}

function addToInput(num) {
    var input = document.getElementById("nama");
    input.value += num;
}

function clearInput() {
    var input = document.getElementById("nama");
    input.value = "";
}

function backspaceInput() {
    var input = document.getElementById("nama");
    input.value = input.value.slice(0, -1);
}

    function printStruk() {
      var printFrame = document.getElementById('printFrame');
      printFrame.style.display = 'block';
      window.print();
      printFrame.style.display = 'none';
    }

    function handleClick() {
      tampilkanHasil();
      printStruk();
      
    }