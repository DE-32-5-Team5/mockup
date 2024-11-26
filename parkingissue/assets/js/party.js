const gallery = document.getElementById("gallery");
const nextPageButton = document.getElementById("next-page");
const prevPageButton = document.getElementById("prev-page");

// 모든 item 요소를 가져옴
const items = Array.from(gallery.children);

let itemsPerPage = getItemsPerPage(); // 초기 페이지당 아이템 수 설정
let currentPage = 1; // 현재 페이지

function getItemsPerPage() {
    return window.innerWidth <= 768 ? 6 : 9; // 모바일은 6개, PC는 9개
}

function renderPage(page) {
    itemsPerPage = getItemsPerPage(); // 화면 크기에 따라 동적 변경
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 모든 item 숨김
    items.forEach((item, index) => {
        item.style.display = index >= startIndex && index < endIndex ? "block" : "none";
    });

    // 버튼 표시/숨김
    prevPageButton.style.display = page > 1 ? "inline-block" : "none";
    nextPageButton.style.display = endIndex < items.length ? "inline-block" : "none";
}

// 다음 페이지 버튼 이벤트
nextPageButton.addEventListener("click", () => {
    currentPage++;
    renderPage(currentPage);
});

// 이전 페이지 버튼 이벤트
prevPageButton.addEventListener("click", () => {
    currentPage--;
    renderPage(currentPage);
});

// 화면 크기 변화 시 페이지 리렌더링
window.addEventListener("resize", () => {
    const previousItemsPerPage = itemsPerPage;
    itemsPerPage = getItemsPerPage();

    // 페이지 수가 바뀌었으면 현재 페이지를 조정
    if (itemsPerPage !== previousItemsPerPage) {
        currentPage = Math.ceil((currentPage - 1) * previousItemsPerPage / itemsPerPage) + 1;
    }

    renderPage(currentPage);
});

// 초기 렌더링
renderPage(currentPage);
