// 프로필 팝업 열기/닫기 함수
function toggleProfilePopup() {
    const popup = document.getElementById("profile-popup");
    popup.classList.toggle("hidden"); // 'hidden' 클래스를 토글하여 팝업 열기/닫기
}

// 로그인 이벤트 핸들러
function login() {
    alert("로그인되었습니다!");
    // 실제 로그인 처리가 필요할 경우 여기서 구현
}

// 로그아웃 이벤트 핸들러
function logout() {
    alert("로그아웃되었습니다!");
    // 실제 로그아웃 처리가 필요할 경우 여기서 구현
}

// 페이지의 다른 부분을 클릭했을 때 팝업 닫기
window.onclick = function(event) {
    const popup = document.getElementById("profile-popup");
    if (!event.target.closest('.profile') && !popup.contains(event.target)) {
        popup.classList.add("hidden"); // 팝업 외부 클릭 시 닫기
    }
};
