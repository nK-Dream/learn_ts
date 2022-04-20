// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据类型，而是在使用函数、接口、类的时候才能确定数据的类型
(()=>{
    // 需求：定义一个函数，传入两个参数，第一个参数是任意类型的数据，第二个参数是数量，函数的作用：根据数量参数对应个数的数据，存放在一个数组中
    
    function getArr<T>(value:T, count:number):T[]{
        // const arr:Array<T> = []
        const arr:T[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }

    const arr = getArr<number>(100.12, 3)
    const arr2 = getArr<string>('abc',3)

    console.log(arr,arr2)
})()