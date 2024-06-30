const arr  =[10,20,30,10,70,80];

const obj = arr.reduce((iv,v)=>{
        if(iv.hasOwnProperty(v)){
            iv[v] = iv[v]+1;
        }else{
            iv[v] = 1;
        }
        return iv;
},{})
console.log(object.key(...Math.max(...Object.values(obj))))
// console.log()