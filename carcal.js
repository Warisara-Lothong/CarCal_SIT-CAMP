 // const gasohol_95 = 42.45
// const gasohol_91 = 42.08
// const gasohol_E20 = 35.45
// const benzine = 52.04
// const diesel = 40.20
function carcal() {
  const fuelPrice = parseFloat(document.getElementById("fuel").value);
  const distance = parseFloat(document.getElementById("distance").value);
 
  if (!fuelPrice || !distance) {
    alert("กรอกข้อมูลให้ครบ");
    return;
  }
 
  const consumption = 15; // กม./ลิตร
 
  const liters = distance / consumption;
  const cost = liters * fuelPrice;
 
  document.getElementById("result").textContent =
    "ต้องเติมประมาณ: "
    + cost.toFixed(2) + " บาท ("
    + liters.toFixed(2) + " ลิตร)";
}
 