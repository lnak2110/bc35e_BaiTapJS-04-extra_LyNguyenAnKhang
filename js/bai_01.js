/**
 * Đầu vào:
 *  + ngay
 *  + thang
 *  + nam
 *
 * Xử lí:
 *  + Chọn xem ngày mai => tăng giá trị ngày thêm 1. (ngày cuối tháng => ngày đầu tháng sau, ngày cuối năm => ngày đầu năm sau)
 *  + Chọn xem ngày hôm qua => giảm giá trị ngày đi 1. (ngày đầu tháng => ngày cuối tháng trước, ngày đầu năm => ngày cuối năm trước)
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnHomQua').onclick = function () {
  // Đầu vào:
  var ngay = document.getElementById('ngay').value * 1;
  var thang = document.getElementById('thang').value * 1;
  var nam = document.getElementById('nam').value * 1;

  // Xử lí:
  var ketQua = 'Ngày không xác định';

  switch (thang) {
    case 1:
      if (ngay === 1) {
        ketQua = `31/12/${nam - 1}`;
      }
      if (ngay >= 2 && ngay <= 31) {
        ketQua = `${ngay - 1}/${thang}/${nam}`;
      }
      break;

    case 2:
      if (ngay === 1) {
        ketQua = `31/${thang - 1}/${nam}`;
      }
      if (ngay >= 2 && ngay <= 28) {
        ketQua = `${ngay - 1}/${thang}/${nam}`;
      }
      break;

    case 3:
      if (ngay === 1) {
        ketQua = `28/2/${nam}`;
      }
      if (ngay >= 2 && ngay <= 31) {
        ketQua = `${ngay - 1}/${thang}/${nam}`;
      }
      break;

    case 8:
      if (ngay === 1) {
        ketQua = `31/${thang - 1}/${nam}`;
      }
      if (ngay >= 2 && ngay <= 31) {
        ketQua = `${ngay - 1}/${thang}/${nam}`;
      }
      break;

    case 5:
    case 7:
    case 10:
    case 12:
      if (ngay === 1) {
        ketQua = `30/${thang - 1}/${nam}`;
      }
      if (ngay >= 2 && ngay <= 31) {
        ketQua = `${ngay - 1}/${thang}/${nam}`;
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (ngay === 1) {
        ketQua = `31/${thang - 1}/${nam}`;
      }
      if (ngay >= 2 && ngay <= 30) {
        ketQua = `${ngay - 1}/${thang}/${nam}`;
      }
      break;
  }

  // Đầu ra:
  document.getElementById('ketQua1').innerHTML = ketQua;
};

document.getElementById('btnNgayMai').onclick = function () {
  // Đầu vào:
  var ngay = document.getElementById('ngay').value * 1;
  var thang = document.getElementById('thang').value * 1;
  var nam = document.getElementById('nam').value * 1;

  // Xử lí:
  var ketQua = 'Ngày không xác định';

  switch (thang) {
    case 2:
      if (ngay === 28) {
        ketQua = `1/${thang + 1}/${nam}`;
      }
      if (ngay >= 1 && ngay <= 27) {
        ketQua = `${ngay + 1}/${thang}/${nam}`;
      }
      break;

    case 12:
      if (ngay === 31) {
        ketQua = `1/1/${nam + 1}`;
      }
      if (ngay >= 1 && ngay <= 30) {
        ketQua = `${ngay + 1}/${thang}/${nam}`;
      }
      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (ngay === 31) {
        ketQua = `1/${thang + 1}/${nam}`;
      }
      if (ngay >= 1 && ngay <= 30) {
        ketQua = `${ngay + 1}/${thang}/${nam}`;
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (ngay === 30) {
        ketQua = `1/${thang + 1}/${nam}`;
      }
      if (ngay >= 1 && ngay <= 29) {
        ketQua = `${ngay + 1}/${thang}/${nam}`;
      }
      break;
  }

  // Đầu ra:
  document.getElementById('ketQua1').innerHTML = ketQua;
};
