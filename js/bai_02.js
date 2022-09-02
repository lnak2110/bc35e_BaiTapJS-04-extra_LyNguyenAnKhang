/**
 * Đầu vào:
 *  + thang
 *  + nam
 *
 * Xử lí:
 *  + Tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12
 *  + Tháng có 30 ngày: 4, 6, 9, 11
 *  + Tháng có 28 hoặc 29 ngày: 2
 *  + Năm nhuận (năm chia hết cho 4 nhưng không chia hết cho 100 hoặc năm chia hết cho 400) => tháng 2 có 29 ngày
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnDemNgay').onclick = function () {
  // Đầu vào:
  var thang = document.getElementById('thangInput').value * 1;
  var nam = document.getElementById('namInput').value * 1;

  // Xử lí:
  var soNgay = 0;
  if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12
  ) {
    soNgay = 31;
  }
  if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    soNgay = 30;
  }
  if (thang === 2) {
    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
      soNgay = 29;
    } else {
      soNgay = 28;
    }
  }

  // Đầu ra:
  document.getElementById(
    'ketQua2'
  ).innerHTML = `Tháng ${thang} năm ${nam} có ${soNgay} ngày`;
};
