function replace() {
    let list = document.querySelectorAll("#codeList li");
    list.forEach(item => {
        item.textContent = item.textContent.replace(/holly/i, "jolly");

    });
}