(()=>{
    // 定义一个类，类中的属性值的类型是不确定，方法中的参数及返回值的类型也是不确定
    // 定义一个泛型类
    class GenericNumber<T>{
        // 默认的属性的值的类型是泛型类型
        defaultValue:T
        add:(x: T, y: T ) => T
    }
    

    const g1: GenericNumber<number> = new GenericNumber<number>()
    g1.defaultValue = 100
    g1.add = function(x, y){
        return x + y
    }

    console.log(g1.add(10,20))
    const g2: GenericNumber<string> = new GenericNumber<string>()
    g2.defaultValue = 'jack'
    g2.add = function (x, y) {
        return x + y
    }

    console.log(g2.add('诸葛', '孔明'))
})()