// 多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法产生了不同的行为
(()=>{
    // 定义一个父类
    class Animal{
        // 定义属性
        name:string
        // 定义构造函数
        constructor(name:string){
            // 更新属性
            this.name = name
        }
        // 定义实例方法
        run(distance:number = 0){
            console.log(`${this.name},跑了${distance}米的距离`)
        }
    }
    // 定义一个子类
    class Dog extends Animal{
        // 构造函数
        constructor(name:string){
            // 调用父类中的构造方法，实现子类中的属性初始化操作
            super(name)
        }
        // 定义实例方法
        run(distance: number = 5) {
            console.log(`${this.name},跑了${distance}米的距离`)
        }
    }
    // 定义一个子类
    class Pig extends Animal {
        // 构造函数
        constructor(name: string) {
            // 调用父类中的构造方法，实现子类中的属性初始化操作
            super(name)
        }
        // 定义实例方法
        run(distance: number = 10) {
            console.log(`${this.name},跑了${distance}米的距离`)
        }
    }
    // 实例化父类
    const ani : Animal = new Animal('动物')
    ani.run()
    // 实例化子类
    const dog : Dog = new Dog('大黄')
    dog.run()
    // 实例化子类
    const pig : Pig = new Pig('佩奇')
    pig.run()

    console.log('===========================');
    // 父类和子类的关系：父子关系，此时父类类型创建子类的对象
    const dog1:Animal = new Dog('小黄')
    dog1.run()
    const pig1:Animal = new Pig('小猪')
    pig1.run()
    console.log('=================================');

    function showMsg(ani:Animal){
        ani.run()
    }
    
    showMsg(dog1)
    showMsg(pig1)
})()