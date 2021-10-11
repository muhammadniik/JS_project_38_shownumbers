const spans = document.querySelectorAll(".main>div span");



window.addEventListener("load", function() {

    myfunction();
})



function myfunction() {

    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = "0";

        man();

        function man() {
            const maxnum = spans[i].getAttribute("number");

            let nownum = +spans[i].innerHTML;
            if (maxnum > nownum) {

                nownum += Math.floor(maxnum / 300);
                spans[i].innerHTML = nownum;

                setTimeout(() => {
                    man()

                }, 1);
            } else {
                spans[i].innerHTML = maxnum;

            }
        }



    }

}