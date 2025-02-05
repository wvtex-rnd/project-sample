document.addEventListener("DOMContentLoaded", () => {});

// 모달창 열기
function openModal(name) {
	const modalTarget = document.querySelector(`#${name}`);
	const modalCloseBtn = modalTarget.querySelector(".modal-close-btn");
	modalTarget.classList.add("on");
	modalTarget.classList.remove("effect--out");
	modalCloseBtn.focus();

	document.body.classList.add("scroll-off");
}

// 모달창 닫기
function closeModal(name) {
	const modalTarget = document.querySelector(`#${name}`);
	modalTarget.classList.add("effect--out");
	setTimeout(() => {
		modalTarget.classList.remove("on");
	}, 120);
	document.querySelector(".returnFocus")?.focus(); // 팝업 열기 버튼으로 포커스 복귀
	document.body.classList.remove("scroll-off");
}

function nextModal(prevModal, nextModal) {
	const prevModalTarget = document.querySelector(`#${prevModal}`);
	const nextModalTarget = document.querySelector(`#${nextModal}`);

	prevModalTarget.classList.remove("on");
	nextModalTarget.classList.add("on");
}
