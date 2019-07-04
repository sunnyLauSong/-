var i=1;
function timeCount(){
    i++;
    postMessage(i);
    setTimeout("timeCount()",1000);
}
timeCount();