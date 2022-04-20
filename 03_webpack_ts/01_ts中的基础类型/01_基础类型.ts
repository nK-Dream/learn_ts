// 基础类型
(() => {
    // 基本语法
    // let 变量名: 数据类型 = 值

    // 布尔类型 --- boolean
    let flag:boolean = true
    flag = false
    // flag = 10 报错
    console.log(flag)
    
    // 数字类型 --- number
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    // a1 = '小明' 报错
    console.log(a1,a2,a3,a4);
    
    // 字符串类型 --- string
    let str1:string = '床前明月光'
    let str2:string = '小明去开窗'
    let str3:string = '遇到一耳光'
    let str4:string = '牙齿掉光光'
    console.log(`${str1},${str2},${str3},${str4}`);
    
    // 字符串和数字拼接
    let str5:string = '当前求和为：'
    let num:number = 1000
    console.log(str5 + num);
    
    // 总结：ts中变量类型确定后，后期赋值时只能用这个类型的数据
    // 例如：let str: string = '真香'; str = 10; 不讲武德会报错 

    // undefined 和 null
    let und: undefined = undefined
    let nll: null = null
    console.log(und, nll);
    // undefined 和 null 都可以作为其他类型的子类型，可以把 undefined 和 null 赋值给其他类型的变量


    // 数组类型
    // 数组定义方式1
    // 语法：let 变量名: 数据类型[] = [值1,值2,值3,值4]
    let arr1: number[] = [10,20,30,40]
    console.log(arr1);
    
    // 数组定义方式2：泛型的写法
    // 语法：let 变量名: Array<数据类型> = [值1,值2,值3,值4]
    let arr2: Array<number> = [100,200,300,400]
    console.log(arr2);
    
    // 注意：数组定义后，里面数据的类型必须和定义数组时的类型是一致的

    // 元组类型：在定义数组的时候，类型和数据的个数一开始就已经限定了
    let arr3: [string,number,boolean] = ['小明', 18, true]
    console.log(arr3);
    // 注意：元组类型在使用的时候，数据和定义时数据类型的位置要一一对应

    // 枚举类型,枚举里面每个数据值都可以叫元素，每个元素都要自己的编号，标号默认是从0开始，依次递增加1
    enum Color{
        red = 1,
        green,
        blue
    }
    // 定义一个Color的枚举类型的变量来接收枚举的值
    let color: Color = Color.red
    console.log(color);
    console.log(Color.red,Color.green,Color.blue)
    console.log(Color[3]);
    
    // any 类型
    let anyStr: any = 100
    anyStr = '鹅鹅鹅'
    console.log(anyStr);
    // 当一个数组要存储的数据长度不确定，类型也不确定时可使用any类型
    let arr:any[] = [100,true,'abc']
    console.log(arr);

    // void 类型
    function showMsg(msg:string): void {
        console.log('void一般用于函数没有返回值的时候')
    }
    
    // object类型
    function getObj(obj: object): object{
        console.log(obj)
        return{
            name:'卡卡西',
            age:27
        }
    }
    console.log(getObj({name:'萨斯给',age:16}))

    // 联合类型 |
    // 需求：定义一个函数得到一个字符串或数字的长度
    function getString(str: number | string): number{
        // return str.toString().length
        // 如果str本身就是string类型的就不需要调用toString方法

        // 类型断言: 告诉编译器，我知道自己是什么类型的，也知道自己在干什么
        // 语法1：<数据类型>变量名
        // 语法2：变量名 as 数据类型
        if((<string>str).length){
            return (str as string).length
        }else{
            return str.toString().length
        }
    }
    console.log(getString(123))


    // 类型推断:在没有明确指定类型的时候会推断出一个类型
    // 定义变量时赋值了, 推断为对应的类型
    let txt = 100 //number类型
    // txt = 'abc'  error
    console.log(txt);

    // 定义变量时没有赋值, 推断为any类型
    let b10 //any类型
    b10 = 'abc'
    b10 = 200
    console.log(b10)
    
})()