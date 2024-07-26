(function () {
    this.ScrollText = function (textArray, id) {
        var parent = document.querySelector(id),
            wl = 0,
            i = 1,
            el = document.createElement("div");
        parent.style.display = "flex";
        parent.append(el);
        el.parentElement.append(addCursor());
        el.style.display = "inline-block";
        isForward = true;
        setInterval(() => {
            if (!isForward && i === -1) {
                wl++;
                i++;
                isForward = true;
            }
            if (wl === textArray.length) {
                wl = 0;
            }

            if (i <= textArray[wl]["text"].length) {
                el.style.color = textArray[wl]["color"];
                el.innerHTML = textArray[wl]["text"].slice(0, i);
                if (i === textArray[wl]["text"].length) isForward = false;
                isForward ? i++ : i--;
            }
        }, 200);
    };
    this.addCursor = function () {
        var span = document.createElement("span");
        span.innerHTML = "|";
        span.style.animation = "flicker 0.5s ease-in infinite";
        return span;
    };
})();

var a = new ScrollText(
    [
        { text: "Wash your Hands", color: "green" },
        { text: "Stay Home!!!", color: "red" },
        { text: "Don't Touch your Face", color: "wheat" }
    ],
    "#text"
);
