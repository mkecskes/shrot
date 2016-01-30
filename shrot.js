window.onload = function() {
    var result = document.getElementById("result");
    document.getElementById("shBtn").onclick = function () {
        var p = getValues();
        if (p.dirLeft) {
            result.textContent = p.num << p.bits;
        } else if (p.dirRight) {
            result.textContent = p.num >>> p.bits;
        }
    };
    
    document.getElementById("rotBtn").onclick = function () {
        var p = getValues();
        if (p.dirLeft) {
            result.textContent = (p.num << p.bits | p.num >>> p.size - p.bits) & (1 << p.size) - 1;
        } else if (p.dirRight) {
            result.textContent = (p.num << p.size - p.bits | p.num >>> p.bits) & (1 << p.size) - 1;
        }
    }
};

function getValues() {
    return {
        dirLeft: document.getElementById("dirLeft").checked,
        dirRight: document.getElementById("dirRight").checked,
        num: document.getElementById("num").value,
        bits: document.getElementById("bits").value,
        size: document.getElementById("size").value
    };
}