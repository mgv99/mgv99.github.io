function script(moreTextParam, btnTextParam) {
    const moreText = document.getElementById(moreTextParam);
    const btnText = document.getElementById(btnTextParam);
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "read less";
    } else {
        btnText.innerHTML = "read more";
        moreText.style.display = "none";
    }
}

function chg1(img) {
    document.getElementById(img).style.width = "58px";
    document.getElementById(img).style.height = "58px";
}

function chg2(img) {
    document.getElementById(img).style.width = "50";
    document.getElementById(img).style.height = "50";
}