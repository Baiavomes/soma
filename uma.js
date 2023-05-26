let n = [10, 8, 9]
let s = n[0]+n[1]+n[2]
let m = s/n.length
console.log("a soma total e:", s, "ea media e de:", m);

//

let f = [
    10,
    20,
    30,
    40,
    50,
];
let maio = 0;
for(let j =0; j<f.length; j++){
    let nu = f[j];
    if(nu>maio){
        maio = nu;
    }
}
console.log(maio)

//

let t = [
    10,
    20,
    30,
    40,
    50,
];
let meno = 0;
for(let j =0; j<meno.length; j++){
    let nuo = t[j];
    if(nuo<meno){
        meno = nuo;
    }
}
console.log(meno)