// const gasohol_95 = 42.45
// const gasohol_91 = 42.08
// const gasohol_E20 = 35.45
// const benzine = 52.04
// const diesel = 40.20
function carcalFuel() {
  const fuelPrice = parseFloat(document.getElementById("fuel").value);
  const distance = parseFloat(document.getElementById("distance").value);
  if (!fuelPrice || !distance) {
    alert("กรอกข้อมูลให้ครบ");
    return;
  }
  const consumption = 15;
  const liters = distance / consumption;
  const cost = liters * fuelPrice;
  const resultEl = document.getElementById("result");
  resultEl.classList.remove("hidden");
  resultEl.textContent =
    "ต้องเติมประมาณ: " +
    cost.toFixed(2) + " บาท (" +
    liters.toFixed(2) + " ลิตร)";
}
function carcalEV() {
  const price = parseFloat(document.getElementById("chargeType").value);
  const battery = parseFloat(document.getElementById("battery").value);
  const current = parseFloat(document.getElementById("current").value);
  const target = parseFloat(document.getElementById("target").value);
  const unit = target - current

  if (!price || !battery || current == null || target == null) {
    alert("กรอกข้อมูลให้ครบ");
    return;
  }
  if (target <= current) {
    alert("เปอร์เซ็นต์ที่ต้องมากกว่าเปอร์เซ็นต์ปัจจุบัน");
    return;
  }
  if (current <= 0 || current >= 100) {
    alert("ต้องใส่เลขภายใน 0-100 ");
    return;
  }
  if (battery <= 0 || battery >= 100) {
    alert("ขนาดแบตเตอรี่ห้ามติดลบ ");
    return;
  }
  if (unit + current > 100) {
    alert("เกิน 100 แล้วจ้า ");
    return;
  }

  const percent = (target - current) / 100;

  const kWh = battery * percent;
  const cost = kWh * price;
  const resultEl = document.getElementById("result");
  resultEl.classList.remove("hidden");

  document.getElementById("result").textContent =
    "ค่าใช้จ่าย: "
    + cost.toFixed(2) + " บาท  ( ใช้ไฟ "
    + kWh.toFixed(2) + " kWh)";
} 