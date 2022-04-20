// 类：类的类型可以通过接口来实现

(()=>{
    // 定义一个接口
    interface IFly{
        // 该方法没有任何的实现
        fly():void
    }
    // 定义一个类
    class Person implements IFly{
        fly(){
            console.log('我会飞，我是超人');
            
        }
    }

    const person = new Person()
    person.fly()


    // 定义一个接口
    interface ISwim{
        swim():void
    }
    // 定义一个类，这个类的类型就是IFly和ISwim（当前这个类可以实现多个接口，一个类同时也可以被多个接口进行约束）
    class Person2 implements IFly,ISwim {
        fly(): void {
            console.log('我飞了2');
        }
        swim(): void {
            console.log('我游泳了2')
        }
    }

    const person2 = new Person2()
    person2.fly()
    person2.swim()


    // 总结：类可以通过接口的方式，来定义当前这个类的类型
    // 类可以实现一个或多个接口，接口中的内容要真正实现

    // 定义了一个接口，继承其他的多个接口
    interface IMyFlyAndSwim extends IFly,ISwim{}

    // 定义一个类，直接实现IMyFlyAndSwim
    class Person3 implements IMyFlyAndSwim {
        fly(): void {
            console.log('我飞了3');
        }
        swim(): void {
            console.log('我游泳了3')
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swim()

    // 总结：接口和接口之间叫继承（使用extends关键字），类和接口之间叫实现（使用implements关键字）
})()