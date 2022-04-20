// 修饰符（类中的成员的修饰符）：主要是描述类中的成员（属性、构造函数、方法）的可访问性
// 类中的成员都有默认的访问修饰符，public
// public：公共的，类中成员默认的修饰符，任何位置都可以访问
// private: 私有的，类的外部无法访问这个成员数据,子类中也无法访问该成员数据
// protected：受保护的，只能在类或者其子类中访问该成员数据
(()=>{
    class Person{
        // public name:string
        // private name:string
        protected name:string
        constructor(name:string){
            this.name = name
        }
        eat(){
            console.log(`我${this.name}就要看看今天那个小孩这么幸运，哈哈哈哈哈哈`);
        }
    }

    class Student extends Person{
        constructor(name:string){
            super(name)
        }
        play(){
            console.log('我就喜欢玩布娃娃',this.name);
            
        }
    }

    const per = new Person('大蛇丸')
    // 类的外部可以访问类的属性成员
    // console.log(per.name);
    per.eat()
    const stu = new Student('红豆')
    stu.play()

})()