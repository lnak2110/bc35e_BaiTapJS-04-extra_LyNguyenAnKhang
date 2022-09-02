/**
 * Đầu vào:
 *  + Tên của 3 sinh viên
 *  + Tọa độ x của 3 sinh viên và trường
 *  + Tọa độ y của 3 sinh viên và trường
 *
 * Xử lí:
 *  + Tình khoảng cách bằng công thức Math.sqrt((xTrường - xSinhVien) * (xTrường - xSinhViên) + (yTrường - ySinhVien) * (yTrường - ySinhVien))
 *  + So sánh 3 khoảng cách để tìm khoảng cách lớn nhất
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnTim').onclick = function () {
  // Đầu vào:
  var ten1 = document.getElementById('ten1').value;
  var ten2 = document.getElementById('ten2').value;
  var ten3 = document.getElementById('ten3').value;
  var x1 = document.getElementById('x1').value * 1;
  var y1 = document.getElementById('y1').value * 1;
  var x2 = document.getElementById('x2').value * 1;
  var y2 = document.getElementById('y2').value * 1;
  var x3 = document.getElementById('x3').value * 1;
  var y3 = document.getElementById('y3').value * 1;
  var x4 = document.getElementById('x4').value * 1;
  var y4 = document.getElementById('y4').value * 1;

  // Xử lí:
  var kc1 = Math.sqrt((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1));
  var kc2 = Math.sqrt((x4 - x2) * (x4 - x2) + (y4 - y2) * (y4 - y2));
  var kc3 = Math.sqrt((x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3));

  var max = kc1;
  var ten = ten1;
  if (kc2 > max) {
    max = kc2;
    ten = ten2;
  }
  if (kc3 > max) {
    max = kc3;
    ten = ten3;
  }

  // Đầu ra:
  document.getElementById(
    'ketQua4'
  ).innerHTML = `Sinh viên xa trường nhất: ${ten}`;
};
