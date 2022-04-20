// 类可以理解为模板，通过模板可以实例化对象
(()=>{
    // ts中定义类
    class Person {
        // 定义属性
        name:string
        age:number
        gender:string
        // 定义构造函数：为了将来实例化对象的时候，可以直接对属性进行初始化
        constructor(name:string='小明',age:number=18,gender:string='男') {
            // 更新对象中的属性
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str?:string){
            console.log(`大家好，我叫${this.name}，今年已经${this.age}岁了，是个${this.gender}孩子，`,str);
        }
    }

    // 在ts中使用类
    const person = new Person()
    person.sayHi() 
})()