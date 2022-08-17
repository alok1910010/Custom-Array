function myArray() {
    Object.defineProperty(this, "length", {
        enumerable: false,

        writable: true
    });

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }

    this.length = arguments.length;
}

//push
myArray.prototype.push = function (ele) {
    let index = this.length;
    this[index] = ele;
    this.length++;
};

//pop
myArray.prototype.pop = function(){
  let index = this.length - 1;
  let poppedEle = this[index];
  delete this[index];
  this.length--;
  
  return poppedEle;
};


//top
myArray.prototype.top = function(){
    let index = this.length - 1;
    let top = this[index];
    
    return top;
}


//print
myArray.prototype.print = function(){
    let arr = [];

    let length = this.length;

    for(let i = 0 ; i < length ; i++){
        arr.push(this[i]);
    }

    console.log(arr.join(" "));

}


//printReverse
myArray.prototype.printReverse = function(){
    let arr = [];

    let length = this.length;

    for(let i = length - 1 ; i >= 0; i--){
        arr.push(this[i]);
    }

    console.log(arr.join(" "));
}


//size
myArray.prototype.size = function(){
    return this.length;
}


let arr = new myArray(1, 2,3,"Hello, its","vikas here from");


arr.push("PT_WEB5")
arr.print();
arr.printReverse();
console.log(arr.top());
console.log(arr.pop());
console.log(arr.size())
console.log(arr);