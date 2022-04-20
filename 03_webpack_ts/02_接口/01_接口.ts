// 接口：是对象的状态(属性)和行为(方法)的抽象(描述)

import { Interface } from "readline"

(()=>{
    // 需求: 创建人的对象, 需要对人的属性进行一定的约束

    // id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有
    
    // 定义一个接口，该接口作为person对象的类型使用，约束该对象中的属性数据
    interface IPerson{
        // id是只读的，不可修改
        readonly id:number
        name:string
        age:number
        // ？可有可无
        sex?:string
    }

    // 定义一个对象，该对象的类型就是上面定义的接口IPerson
    const person:IPerson = {
        id:1,
        name:'小明',
        age:18,
        // sex:'男'
    }
    // person.id = 1000
    console.log(person);
    
})()