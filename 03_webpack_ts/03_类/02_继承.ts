// 继承:类与类之间的关系
// 继承后类与类之间的叫法：
// A类继承了B类，那么此时A类叫子类（派生类），B类叫基类（超类|父类）
// 一旦发送了继承的关系，就出现了父子类的关系
(()=>{
    // 定义一个父类
    class Person {
        // 定义属性
        name:string
        age:number
        gender:string
        // 定义构造函数
        constructor(name:string = '小明',age:number = 18,gender:string = '男'){
            // 更新属性
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str:string):void{
            console.log(`我是：${this.name},${str}`)
        }
    }

    // 定义一个子类
    class Student extends Person{
        constructor(name:string,age:number,gender:string){
            // 调用父类中的构造函数，使用的是super
            super(name,age,gender)
        }

        // sayHi(): void {
        //     super.sayHi('小明')
        // }
    }

    // 实例化Person
    const person = new Person()
    person.sayHi('嘎嘎')
    // 实例化Student
    const stu = new Student('小甜甜',16,'女')
    stu.sayHi('嘿嘿')

    // 总结：类和类之间要存在继承关系，需要调用extends关键字
    // 子类中可以调用父类的构造函数,使用的是super关键字(包括调用父类中的实例方法)
    // 子类中可以重写父类中的方法
})()