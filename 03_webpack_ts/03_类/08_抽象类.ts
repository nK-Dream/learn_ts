// 抽象类:包含抽象方法（抽象方法一般没有任何具体内容的实现），也可以包含实例方法，抽象类是不能被实例化的，为了让之类实例化及实现内部的抽象方法
// 抽象类的目的或作用最终都是为子类服务的

(()=>{
    // 定义一个抽象类
    abstract class Animal{
        // 抽象方法,不能有具体的实现
        abstract eat():void
        // 实例方法
        sayHi(){
            console.log('萨瓦迪卡');
        }
    }

    // 定义一个子类Dog
    class Dog extends Animal{
        // 重新实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法
        eat(): void {
            console.log('舔着吃，真好吃');
        }
    }

    // 实例化Dog的对象
    const dog:Dog = new Dog()
    dog.eat()
    // 调用抽象类中的实例方法
    dog.sayHi()
    // 不能实例化抽象类
    // const ani:Animal = new Animal()
})()