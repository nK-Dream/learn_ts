// 可选参数：函数在声明时，内部的参数使用了？进行修饰，那么该参数可传也可不传
// 默认参数：函数在声明时，内部的参数有自己的默认值，此时的这个参数就可以叫默认参数
(()=>{
    // 定义一个函数：传入姓氏和名字，返回得到姓名
    // 需求：如果不传入任何内容，那么就返回默认的姓氏
    // 需求：如果只传入姓氏，那么就返回姓氏
    // 需求：如果传入姓氏和名字，那么返回姓名

    // 函数表达式
   /*  const getFullName: (firstName?: string, lastName?: string) => string = function (firstName: string = '上官', lastName?:string):string{
        if (lastName) {
            return firstName + '_' + lastName
        }else{
            return firstName
        }
    }  */

    // 函数声明
    function getFullName(firstName:string = '上官', lastName?:string) : string {
        if(lastName){
            return firstName + '_' + lastName
        }else{
            return firstName
        }
    }

    // 函数调用
    console.log('什么都不传，返回默认姓氏',getFullName())
    console.log('如果只传入姓氏，那么就返回姓氏', getFullName('诸葛'))
    console.log('如果传入姓氏和名字，那么返回姓名', getFullName('诸葛','孔明'))
})()