// 泛型接口:在定义接口时，为接口中的属性或方法定义泛型类型
// 在使用接口时，再指定具体的泛型类型
(()=>{
    // 定义一个接口
    interface IbaseCRUD <T>{
        data:T[]
        add:(t: T) => void
        getById: (id:number) => T | void
    }

    class User{
        id?:number; // id主键自增
        name: string;
        age: number;

        constructor(name:string, age:number){
            this.name = name
            this.age = age
        }
    }

    class UserCRUD implements IbaseCRUD<User>{
        data: User[] = []

        add(user:User):void{
            user = {...user,id:Date.now()}
            this.data.push(user)
            console.log('保存user',user.id);
        }

        getById(id:number):User|void{
            return this.data.find(item => item.id === id)
        }
    }

    const userCRUD = new UserCRUD()
    userCRUD.add(new User('tom', 12))
    userCRUD.add(new User('tom2', 13))
    console.log(userCRUD.data)

})()