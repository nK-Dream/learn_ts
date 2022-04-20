import { log } from "console"

// 存取器：让我妈可以有效的控制对象中的成员的访问，通过getters和setters来操作
(()=>{
    class Person{
        firstName:string
        lastName:string
        constructor(firstName:string,lastName:string){
            this.firstName = firstName
            this.lastName = lastName
        }
        get fullName(){
            console.log('get中...')
            return this.firstName + '_' + this.lastName
        }
        set fullName(val){
            let names = val.split('_')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const person = new Person('东方','不败')
    // 获取该属性成员
    console.log(person.fullName)
    // 设置该属性成员
    person.fullName = '诸葛_孔明'
    console.log(person)
})()