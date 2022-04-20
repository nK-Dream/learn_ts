// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可

(()=>{
    // 函数声明，命名函数
    // 函数中的x和y参数的类型都是number类型的，小括号后面的：number，代表的是该函数的返回值也是number类型的
    function add(x:number, y:number):number{
        return x + y
    }
    const result:number = add(10,20)
    console.log(result);
    
    // 函数表达式，匿名函数
    // 函数中的x和y参数的类型都是string类型的，小括号后面的 :string,代表的是该函数的返回值也是string类型的
    const add2 = function(x:string, y:string):string {
        return x + y
    }
    const result2:string = add2('111','222')
    console.log(result2)

    // 函数的完整写法
    // add3 ---> 变量名 ---> 函数add3
    // (x:number, y:number) => number 当前函数的类型
    // function(x:number, y:number):number {return x + y}  就相当于符合上面的这个函数类型的值
    const add3:(x:number, y:number) => number = function(x:number, y:number):number {
        return x + y
    }

    // 使用接口定义函数
    interface addFunc {
        (x:number, y:number) : number
    }
    const add4:addFunc = function(x:number, y:number):number {
        return x + y
    }

    console.log(add4(10,100))
})()