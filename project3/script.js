function createCounter(){
    let count = 0;
    return function() {
        count++;
        document.getElementById("result").innerText = count;
    }
}

const counter = createCounter();
document.getElementById("btn").addEventListener("click", counter);