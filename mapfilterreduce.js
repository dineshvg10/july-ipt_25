//map
//let m = [10,20,30,40,50]
//let ma =m.map((val,ind,act)=>ind+5)
//console.log(ma);

//filter

let m = [10,15,20,25,30]
let fa = m.filter((val,ind,act)=>val%2==0)
console.log(fa);
let mo = [10,12,14,16,18,20]
let fad  = mo.filter((val,ind,act)=>ind%2==0)
console.log(fad);
let moa =[10,15,20,25,30]
let foa =moa.filter((val,ind,act)=>act>=20)
console.log(foa);

//reduce
let r =[10,20,30,40]
let re = r.reduce((x,y)=>x*y)
console.log(re);
