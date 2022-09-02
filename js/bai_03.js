/**
 * Đầu vào:
 *  + so
 *
 * Xử lí:
 *  + Tách số ra thành 3 chữ số hàng trăm, hàng chục, hàng đơn vị
 *  + Sử dụng switch case cho cách đọc của từng phần
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnCachDoc').onclick = function () {
  // Đầu vào:
  var so = document.getElementById('so').value * 1;

  // Xử lí:
  var soHangDonvi = so % 10;
  var soHangChuc = Math.floor((so % 100) / 10);
  var soHangTram = Math.floor(so / 100);

  switch (soHangTram) {
    case 1:
      soHangTram = 'Một';
      break;
    case 2:
      soHangTram = 'Hai';
      break;
    case 3:
      soHangTram = 'Ba';
      break;
    case 4:
      soHangTram = 'Bốn';
      break;
    case 5:
      soHangTram = 'Năm';
      break;
    case 6:
      soHangTram = 'Sáu';
      break;
    case 7:
      soHangTram = 'Bảy';
      break;
    case 8:
      soHangTram = 'Tám';
      break;
    case 9:
      soHangTram = 'Chín';
      break;
  }
  switch (true) {
    case soHangChuc === 0 && soHangDonvi === 0:
      soHangChuc = '';
      soHangDonvi = '';
      break;
    case soHangChuc === 0 && soHangDonvi >= 1:
      soHangChuc = 'lẻ';
      switch (soHangDonvi) {
        case 1:
          soHangDonvi = 'một';
          break;
        case 2:
          soHangDonvi = 'hai';
          break;
        case 3:
          soHangDonvi = 'ba';
          break;
        case 4:
          soHangDonvi = 'bốn';
          break;
        case 5:
          soHangDonvi = 'năm';
          break;
        case 6:
          soHangDonvi = 'sáu';
          break;
        case 7:
          soHangDonvi = 'bảy';
          break;
        case 8:
          soHangDonvi = 'tám';
          break;
        case 9:
          soHangDonvi = 'chín';
          break;
      }
      break;
    case soHangChuc === 1:
      soHangChuc = 'mười';
      switch (soHangDonvi) {
        case 0:
          soHangDonvi = '';
          break;
        case 1:
          soHangDonvi = 'một';
          break;
        case 2:
          soHangDonvi = 'hai';
          break;
        case 3:
          soHangDonvi = 'ba';
          break;
        case 4:
          soHangDonvi = 'bốn';
          break;
        case 5:
          soHangDonvi = 'năm';
          break;
        case 6:
          soHangDonvi = 'sáu';
          break;
        case 7:
          soHangDonvi = 'bảy';
          break;
        case 8:
          soHangDonvi = 'tám';
          break;
        case 9:
          soHangDonvi = 'chín';
          break;
      }
      break;
    case soHangChuc >= 2:
      switch (soHangChuc) {
        case 2:
          soHangChuc = 'hai mươi';
          break;
        case 3:
          soHangChuc = 'ba mươi';
          break;
        case 4:
          soHangChuc = 'bốn mươi';
          break;
        case 5:
          soHangChuc = 'năm mươi';
          break;
        case 6:
          soHangChuc = 'sáu mươi';
          break;
        case 7:
          soHangChuc = 'bảy mươi';
          break;
        case 8:
          soHangChuc = 'tám mươi';
          break;
        case 9:
          soHangChuc = 'chín mươi';
          break;
      }
      switch (soHangDonvi) {
        case 0:
          soHangDonvi = '';
          break;
        case 1:
          soHangDonvi = 'mốt';
          break;
        case 2:
          soHangDonvi = 'hai';
          break;
        case 3:
          soHangDonvi = 'ba';
          break;
        case 4:
          soHangDonvi = 'bốn';
          break;
        case 5:
          soHangDonvi = 'năm';
          break;
        case 6:
          soHangDonvi = 'sáu';
          break;
        case 7:
          soHangDonvi = 'bảy';
          break;
        case 8:
          soHangDonvi = 'tám';
          break;
        case 9:
          soHangDonvi = 'chín';
          break;
      }
      break;
  }

  // Đầu ra:
  var ketQua;
  so < 100 || so > 999
    ? (ketQua = 'Số không hợp lệ')
    : (ketQua = `${soHangTram} trăm ${soHangChuc} ${soHangDonvi}`);
  document.getElementById('ketQua3').innerHTML = ketQua;
};
