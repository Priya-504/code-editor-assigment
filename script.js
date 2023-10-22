
document.getElementById("copy-button").addEventListener("click", function () {
    var codeArea = document.getElementById("code-area");
    codeArea.select();
    document.execCommand("copy");
});

var isLocked = false;
document.getElementById("lock-button").addEventListener("click", function () {
    var codeArea = document.getElementById("code-area");
    isLocked = !isLocked;
    codeArea.readOnly = isLocked;
    this.textContent = isLocked ? "Unlock" : "Lock";
});
