const boeing747 = {
    make:'boeing 746',
    capacity:450,

    print:function(){
        console.log(this);
    }
}

boeing747.print(); // The 'this' is referencing the top-level in this case "boeing747"

const anotherPrint = boeing747.print;  //referencing the print method
anotherPrint(); //Invoking anotherPrint method as a top-level function, the global object is the owner of this function