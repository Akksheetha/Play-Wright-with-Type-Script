function someFn(){
    if(true){
        var localVar=100
        console.log("1: ",localVar)
    }
    console.log("2:",localVar)
    function nested(){
        console.log("3:",localVar)
    }
}
someFn