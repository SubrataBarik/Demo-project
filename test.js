console.log("subrat")

let n=[]
let s=[]
let b=[]
let a=['subrat' ,123,44 ,true ,'papulu']
function f(a){
    for(i of a){
        t=typeof(i)
        if(t=='number')
            n.push(i)
        if(t=='string')
            s.push(i)
        if(t=='boolean')
            b.push(i)
    }
}
f(a)
console.log(n,s,b);