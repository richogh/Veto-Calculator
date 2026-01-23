const UKUR_HARGA = {
    "25 x 35": 18500,
    "30 x 40": 22500,
    "38 x 45": 27600
};
const keys = Object.keys(UKUR_HARGA);

const select = document.getElementById("operator");
keys.forEach(v => select.add(new Option(v, v)));


/// SIMPLE ///
const Afdruk = 5000;
// Emulsi Sepaket, Byclean, LakBan, M3/M4
const Tinta = 700;
// Rubber, Printol, Binder, Penanda
const Lain2 = 300;
// Kassa, M3, Botol, Stick Eskrim, dll

const Final = Afdruk+Tinta+Lain2;
const ProfitLusin = 12000;
const ProfitFlexible = {
    8: ProfitLusin-2000,
    25: ProfitLusin-3500,
    41: ProfitLusin-5000,
    83: ProfitLusin-6000


};
const poinlusin = Object.keys(ProfitFlexible).map(Number);

// Math.ceil(harga_jual_a*quantity)

function SPUNBOND(quantity, key_ukur) {
    let all_modal = ((UKUR_HARGA[key_ukur]/12)*quantity)+Final;
    
    let all_profit_base_quan = (ProfitLusin/12)*quantity;
    const total_bagi_lusin = Math.ceil(quantity/12);
    let cek;
    if (total_bagi_lusin >= 8) {
        for (let i of poinlusin) {
            if (total_bagi_lusin >= i) {
                all_profit_base_quan = (ProfitFlexible[i]/12)*quantity;
                cek = ProfitFlexible[i]
            } else {break}
        };
    };

    let harga_jual_a;
    if (all_profit_base_quan <= ProfitLusin) {
        harga_jual_a = (all_modal+ProfitLusin)/quantity;
    }else {
        harga_jual_a = (all_modal+all_profit_base_quan)/quantity;
    };

    return [Math.ceil(harga_jual_a), Math.ceil(harga_jual_a*quantity)];
}

function hitung() {
    let a = Number(document.getElementById("angka1").value);
    let b = String(document.getElementById("operator").value);

    let [Harga_a, Total_bayar] = SPUNBOND(a, b);
    document.getElementById("hasil").innerText = `Rp. ${Harga_a.toLocaleString("id-ID")} /pcs`;
    document.getElementById("total").innerText = `Rp. ${Total_bayar.toLocaleString("id-ID")}`;
};

function open_wa() {
    window.open("https://wa.me/62895388390106?text=Halo..%0ASaya%20mau%20bertanya%20soal%20Tas%20Spunbond")
}
