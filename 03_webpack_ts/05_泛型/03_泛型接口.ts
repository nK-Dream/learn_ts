interface IbaseCRUD<T> {
    data: T[]
    add: (t: T) => T
    getById: (id: number) => T | void
}

class User {
    id?: number; //id主键自增
    name: string; //姓名
    age: number; //年龄

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
}

class UserCRUD implements IbaseCRUD<User> {
    data: User[] = []

    add(user: User): User {
        user = { ...user, id: Date.now()+Math.random() }
        this.data.push(user)
        console.log('保存user', user.id)
        return user
    }

    getById(id: number): User | void {
        return this.data.find(item => item.id === id)
    }
}


const userCRUD = new UserCRUD()
userCRUD.add(new User('tom', 12))
const { id } = userCRUD.add(new User('tom2', 13))
console.log(userCRUD.data)
const user = userCRUD.getById(<number>id)
console.log(user)