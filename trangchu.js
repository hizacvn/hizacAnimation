 //khoá chuột phải
        document.addEventListener("DOMContentLoaded", function() {
            const div = document.getElementById("myDiv");
            div.addEventListener("contextmenu", (e) => {e.preventDefault()});
        });
 /* rung khi đến vị trí video mong muốn*/ 
// Lấy tham chiếu đến video
var video = document.getElementById("myVideo");
// Đặt sự kiện cho sự kiện 'timeupdate' của video
video.addEventListener("timeupdate", function() {
  // Kiểm tra xem thời gian hiện tại của video có bằng 1:1 không (ở giây)
  if (video.currentTime >= 1) {
    // Kiểm tra xem tính năng Vibrate có khả dụng không
    if ("vibrate" in navigator) {
      // Kích hoạt tính năng rung
      navigator.vibrate([200]); // Rung trong 200ms
    } else {
      alert("Vibrate feature is not available on this device.");
    }
  }
});