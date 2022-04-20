// readonly修饰符：是一个关键字可以用来修饰类中的成员，修饰后该属性成员，就不能在外部被修改
// 构造函数中可以对只读的属性进行修改
// 构造函数中的name属性一旦通过readonly修饰后，会自动为Person类添加一个name的属性成员
(()=>{
    class Person{
        // readonly name:string
        constructor(readonly name:string){
            // this.name = name
        }
        sayHi(){
            console.log('考你西瓦',this.name);
            // 类中的普通方法也无法修改readonly修饰的成员数据
            // this.name = '大甜甜'
        }
    }
    const person = new Person('小甜甜')
    console.log(person.name);
    // 此时无法修改
    // person.name = '大甜甜'
    // console.log(person.name)
})()