document.addEventListener("DOMContentLoaded", () => {
    // 모든 삭제 버튼을 선택
    const deleteButtons = document.querySelectorAll("#delFavorItem");

    // 각 버튼에 클릭 이벤트 추가
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // 클릭된 버튼의 부모 요소인 favorItem을 찾아 제거
            const parentItem = event.target.closest(".favorItem");
            if (parentItem) {
                parentItem.remove(); // DOM에서 해당 요소 삭제
            }
        });
    });

    // favorEdit 버튼 클릭 시 input 필드에 포커스
    const favorEditButton = document.querySelector(".favorEdit button");
    const inputField = document.querySelector(".header form input");  // 헤더의 input 선택

    if (favorEditButton && inputField) {
        favorEditButton.addEventListener("click", () => {
            inputField.focus();  // 버튼 클릭 시 input 필드에 포커스
        });
    } else {
        console.error("favorEdit 버튼이나 input을 찾을 수 없습니다.");
    }
});
