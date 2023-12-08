var pinput = ``
var input = `Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`

var graph = input.split('\n').map(parseLine)

console.log(graph)




function parseLine(str) {
    return {
        name: getName(str.split(';')[0]),
        flowRate: flowRate(str.split(';')[0]),
        tunnels: getLinks(str.split(';')[1]),
    }
}

function getLinks(str) {

    if(str.includes(" tunnels lead to valves ")) {
        return str.replace(" tunnels lead to valves ",'').split(', ')
    }
    else {
        return [str.replace(" tunnel leads to valve ",'')]
    }
}

function getName(str) {
    return str.split(' ')[1]
}

function flowRate(str) {
    return Number(str.split('=')[1])
}
