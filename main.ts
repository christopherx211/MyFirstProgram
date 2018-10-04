

class MyfirstProgram {

    constructor(...argArray: Array<any>) {
        this.printArgs(argArray);
    }

    printArgs(argArray){
        console.log(argArray);
    }

   runFirst(){
       console.log('this method runs first!...');
   } 

   runLast(){
       console.log('this method runs last!');
   }
}

const newInstance = new MyfirstProgram("a", "b", "c");


