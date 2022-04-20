// 函数重载:函数名字相同，函数的参数及个数不同
(()=>{
    // 需求：有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

    // 函数重载声明
    function add(x:number,y:number):number
    function add(x:string,y:string):string

    // 函数声明
    function add(x: string | number, y: string | number): string | number | void {
        // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y
        }
    }

    // 两个参数都是字符串
    console.log(add('诸葛','孔明'))
    // 两个参数都是字符串
    console.log(add(10,20))
    
    // 传入非法信息
    // console.log(add(10,'真香')) error
    // console.log(add('哈哈',250)) error
    
})()