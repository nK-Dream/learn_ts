// 类型注解：一种轻量级的为函数或变量添加约束的方式

(()=>{
    function showMsg(msg:string) {
        return '床前明月光，' + msg
    }
    let msg = '疑是地上霜'
    // let msg = [10, 20, 30]
    console.log(showMsg(msg));
    
})()