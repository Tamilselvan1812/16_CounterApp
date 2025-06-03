    let count = 0;
        let element = document.getElementById("result");
        element.innerText = count;

        function increase() {
            count = count + 1;
            element.innerText = count;
           
        }
        function decrease() {
            count = count - 1;
            element.innerText = count;
        }
        function reset() {
            count = 0;
            element.innerText = count ;
        }
        