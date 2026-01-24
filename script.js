// {}

// };

const UH = {
    "25 x 35": 18500,
    "30 x 40": 22500,
    "38 x 45": 27600
};
/////1352 -- 2300
const PLusin = 13000;
const PFlex = {
    8: PLusin-2000,
    25: PLusin-3500,
    41: PLusin-5000,
    83: PLusin-6000


};
/////
const [Rubber, Printol, Binder] = [15000, 30000, 40000];
const Afdruk = 5000;
const Missing = 300;

function tintaaa() {
    pr_rb = (Printol/1000)*40;
    bi_rb = (Binder/1000)*40;

    return (Rubber+pr_rb+bi_rb)/125
};
function open_wa() {
    window.open("https://wa.me/62895388390106?text=Halo..%0ASaya%20mau%20bertanya%20soal%20Tas%20Spunbond")
}



///////////////////////////////////////////////////

const keys = Object.keys(UH);
const select = document.getElementById("operator");
keys.forEach(v => select.add(new Option(v, v)));

const poinlusin = Object.keys(PFlex).map(Number);
function SPUNBOND(quantity, key_ukur) {
    let all_modal = ((UH[key_ukur]/12)*quantity)+Afdruk+Missing+(tintaaa()*quantity);
    
    let all_profit_base_quan = (PLusin/12)*quantity;
    const total_bagi_lusin = Math.ceil(quantity/12);
    if (total_bagi_lusin >= 8) {
        for (let i of poinlusin) {
            if (total_bagi_lusin >= i) {
                all_profit_base_quan = (PFlex[i]/12)*quantity;
            } else {break}
        };
    };

    let price_item;
    if (all_profit_base_quan <= PLusin) {
        price_item = (all_modal+PLusin)/quantity;
    }else {
        price_item = (all_modal+all_profit_base_quan)/quantity;
    };

    return [Math.ceil(price_item), Math.ceil(price_item)*quantity];
}

///////////////////////////////////////////////////

function hitung() {
    let a = Number(document.getElementById("angka1").value);
    let b = String(document.getElementById("operator").value);

    let [Harga_a, Total_bayar] = SPUNBOND(a, b);
    document.getElementById("hasil").innerText = `Rp. ${Harga_a.toLocaleString("id-ID")} /pcs`;
    document.getElementById("total").innerText = `Rp. ${Total_bayar.toLocaleString("id-ID")}`;
};

