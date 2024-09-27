const btnMo = document.querySelector("header button");
const mobilePanel = document.querySelector(".mobilePanel");

btnMo.addEventListener("click", () => {
	mobilePanel.classList.toggle("on");
});

//브라우저 리사이즈시 브라우저폭의 너비가 1000px 이상일 때 강제로 mobilePanel의 left값을 -340px로 변경
window.addEventListener("resize", () => {
	const wid = window.innerWidth;
	console.log(wid);

	if (wid >= 1000) mobilePanel.classList.remove("on");
});
