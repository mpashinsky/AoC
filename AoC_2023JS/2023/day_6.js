var pinput = `Time:        57     72     69     92
Distance:   291   1172   1176   2026`

var input = `Time:      7  15   30
Distance:  9  40  200`

var inputArr = pinput.split('\n').map(i=>i.split(':')[1]).map(i=>i.trim().replace(/ +(?= )/g,'').split(' '))
var timeArr=inputArr[0]
var distArr=inputArr[1]

var part1 = timeArr.map((time, index) => calcNumberOfVariants(time, distArr[index]))

console.log(arrMux(part1))

var time=57726992
var dist=291117211762026

console.log(calcNumberOfVariants(time, dist))

function calcNumberOfVariants(time, dist) {
    var cnt = 0
    for(let i=1; i<=time; i++) {

        if((time - i)*i > dist )
            cnt++
    }
    return cnt
}

function arrMux(arr) {

    return arr.reduce((a,b)=>a*b,1)
}

function arrSum(arr) {

    return arr.reduce((a,b)=>a+b,0)
}
