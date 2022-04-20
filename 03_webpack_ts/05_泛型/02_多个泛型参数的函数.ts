// 多个泛型参数
(()=>{

    function getMsg<K,V>(value1:K,value2:V):[K,V]{
        return [value1,value2]
    }

    const arr = getMsg<string,number>('jack',100.321)
    console.log(arr[0].split(''),arr[1].toFixed(2));
    
})()