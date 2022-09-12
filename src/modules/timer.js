const timer = () =>{
    const h1 = document.getElementsByTagName('h1')[0];
    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const reset = document.querySelector('.restart');
    let sec = 0;
    let min = 1;
    let t;
    
    function timerStop(){
    
    }

    function tick(){
        if (sec <= 0 && min <= 0){
            timerStop()
        }else if(min >= 1){
            min--
            sec=59
        }else if (sec >= 60){
            sec = 0;
            min++;
        }else if (sec < 60){
                sec--
        }else if (sec <= 0 && min <= 0){
            timerStop()
        };
    }
    function add() {
        tick();
        h1.textContent = (min > 9 ? min : "0" + min)
                    + ":" + (sec > 9 ? sec : "0" + sec);
        timer();
    };
    function timer() {
        t = setTimeout(add, 10);
    }
    
    timer();
    start.onclick = timer;
    stop.onclick = function() {
        clearTimeout(t);
    }
    reset.onclick = function() {
        h1.textContent = "00:00";
        sec = 0; 
        min = 1; 
    }
}
export  default timer