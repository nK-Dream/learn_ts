// 静态成员：在类中通过static修饰的属性或方法，那么就是静态属性及静态方法，也称之为静态成员
// 静态成员在使用的时候通过 类名.属性名 的这种语法来调用
(()=>{
    class Person {
        // 静态属性
        static name1: string = '小明'
        // 构造函数是不能通过static进行修饰的
        constructor() {
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
            // this.name1 = name
        }
        // 定义实例方法
        static sayHi() {
            console.log('萨瓦迪卡');
        }
    }

    // const person:Person = new Person()
    // 通过实例对象调用的属性
    // console.log(person.name1);
    // 通过实例对象调用的方法
    // person.sayHi()

    // 通过类名.静态属性来访问该成员数据
    console.log(Person.name1)
    // 通过类名.静态属性来设置该成员数据
    Person.name1 = '佐助'
    console.log(Person.name1)

    Person.sayHi()
})()