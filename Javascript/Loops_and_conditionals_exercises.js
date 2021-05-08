// accepts 2 integers , and displays the larger
//warm up
const twoNums = (n,m) => {
    if (n > m) {
        console.log(`${n} is larger`)
    }else if( m > n) {
        console.log(`${m} is larger`)
    }
}
twoNums(231,6);

// warm up sort 3 numbers from biggest to smallest
const sortBS = (n,m,z) => {
    if (n < m && n < z ){
        if(m < z) {
            console.log("ORDER : "+ z , m , n )
        }
        if ( m > z) {
            console.log("ORDERD : "+ m , z , n)
        }
    }
    if(m < n && m < z) {
        if (n < z) {
            console.log("ORDER : "+ z , n , m)
        }
        if( z < n) {
            console.log("ORDER: "+n,z,m)
        }
    }
    if( z < n && z < m) {
        if( n < m) {
            console.log("ORDER :",m , n , z)
        }
        if ( n > m) {
            console.log("ORDER: ",n ,m ,z )
        }
    }
}
sortBS(100,1000,0)

// warm up find greated number
const findGreatest = (...args) => {
    for ( var i = 0 ; i < args.length ; i++){
       var value = args[i];
       for(var x = i - 1; x >= 0 && ( args[x] > value); x--){
            args[x+1] = args[x];         
       }
        args[x+1] = value   
    }
    console.log(args)
}
findGreatest(10,5,30,31,3,100,42,25)

const oddOrEven = (...args) => {
    for (var i = 0 ; i < args.length ; i ++){
        if (args[i] % 2 === 0) {
            console.log("EVEN: " + args[i])
        }else{
            console.log("ODD : "+args[i])
        }
        
    }
}

oddOrEven(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

//The outer loop always executes first, and the inner loop executes inside the outer loop each time the outer loop executes once
const arangeStars = (z) => {
    var star = " "
    for (let i = 0 ; i < z; i ++) {        
        for (let x = 0 ; x < i; x ++){
            star = star+("*")
        }
        console.log(star)
        star =" "
    }   
}

arangeStars(4)


const SumMultiples = (n) => {
    var sum = 0 
    for ( let i = 0 ; i <= n ; i ++) {     
            if(i%3 === 0 || i%5 === 0 ) {
                console.log(sum += i)     
        }        
    }
}

SumMultiples(1000)
