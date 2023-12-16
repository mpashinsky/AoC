var pseeds = `1187290020 247767461 40283135 64738286 2044483296 66221787 1777809491 103070898 108732160 261552692 3810626561 257826205 3045614911 65672948 744199732 300163578 3438684365 82800966 2808575117 229295075
`.split(' ').map(Number)

var pinput = `seed-to-soil map:
1716002126 3982609232 32819234
527777042 1448723593 108905538
3097613512 2185535945 24556299
3351444381 4015428466 144436121
3331711186 3196645623 19733195
169931418 1078390710 353970858
1621489177 1746859318 67938624
1904740745 2514777285 180582308
2435282992 2210092244 85514440
1398165946 286288423 41146536
523902276 1432361568 3874766
1903021413 3980889900 1719332
1689427801 2875575735 26574325
2085323053 2092073852 27802380
1244196171 922461291 37612770
3834107486 3846963083 28702903
636682580 327434959 595026332
3207795548 2695359593 118500381
3035897751 2813859974 61715761
3326295929 3875665986 5415257
3122169811 4209341559 85625737
3954618410 1867878056 11806468
3027897115 3881081243 8000636
74621536 159718198 10213220
4091795019 1879684524 56951870
4148746889 1995330417 96743435
84834756 0 85096662
3800092500 2331115565 34014986
1281808941 169931418 116357005
4245490324 4159864587 49476972
2609257929 3467510702 57294822
2113125433 3524805524 322157559
2520797432 1936636394 58694023
3495880502 1814797942 53080114
1748821360 2119876232 65659713
0 85096662 74621536
3548960616 3216378818 251131884
2931281840 2418162010 96615275
1439312482 960074061 118316649
2674851505 2910448814 256430335
2666552751 2902150060 8298754
3966424878 1621489177 125370141
1231708912 1436236334 12487259
3862810389 3889081879 91808021
2579491455 3166879149 29766474
1867512532 2295606684 35508881
1814481073 2365130551 53031459

soil-to-fertilizer map:
900001914 416463108 281254528
0 126604924 281385177
281385177 1157253669 618616737
1885448579 1775870406 139515090
3016033145 2662884952 103067725
1189729449 1110523399 46730270
2123796167 0 126604924
2809716281 3293179505 206316864
3394722305 3499496369 373018163
2250401091 1915385496 17843034
2387263517 3872514532 299008639
1181256442 407990101 8473007
2686272156 4171523171 123444125
3767740468 2765952677 527226828
1236459719 1933228530 335015595
1571475314 697717636 313973265
2024963669 1011690901 98832498
3119100870 2387263517 275621435

fertilizer-to-water map:
2043262733 3156005317 240398158
740161853 3396403475 396633652
2283660891 728762031 158542508
338820086 530011363 198750668
2442203399 1391771783 889292891
3734522375 237378927 58514752
3331496290 988745698 403026085
1136795505 2814613159 341392158
1809145049 295893679 234117684
537570754 2281064674 202591099
1478187663 2483655773 330957386
237378927 887304539 101441159

water-to-light map:
3659569782 1525449239 315716712
3476299666 1083068766 183270116
3231355346 2188139141 105510824
4174005670 3640676221 26006855
2033660875 1999740193 45748640
4057070245 1972906150 26834043
972390863 634517173 12741770
2909470443 3992972439 35114066
3371367762 3517719799 18082344
1577969948 2765252679 71346084
1355403194 769026051 222566754
1025652593 3705699048 26412059
3389450106 2756144754 7720673
519325900 2956875516 263858379
3176461571 2056589398 54893775
1649316032 3732111107 254481047
4005461865 3535802143 40507815
868266049 3220733895 65108842
2323504821 1300840474 47494425
4045969680 2045488833 11100565
4083904288 2939503515 17372001
933374891 3666683076 39015972
2944584509 3285842737 231877062
2603233578 442821495 41827275
3403912268 4028086505 49362804
860498512 2763865427 1387252
4200012525 347866724 94954771
387585701 1841165951 131740199
2435365509 2293649965 167868069
2170885476 733737763 35288288
2645060853 484648770 149868403
1903797079 1509336552 16112687
3453275072 2733120160 23024594
2370999246 3576309958 64366263
3975286494 2909328144 30175371
2206173764 2615789103 117331057
226584048 1348334899 161001653
3397170779 226584048 6741489
2079409515 991592805 91475961
3336866170 1266338882 34501592
4101276289 2836598763 72729381
1919909766 2502037994 113751109
1268924374 647258943 86478820
861885764 3986592154 6380285
783842544 2111483173 76655968
1052064652 4077449309 216859722
783184279 4294309031 658265
985132633 2461518034 40519960
2794929256 233325537 114541187

light-to-temperature map:
3539333023 2561430684 132087009
3698501184 4084205096 109385247
3378310404 4253495312 1341714
3379652118 4281918178 4529732
3384181850 2314593178 64260938
2785407303 2874819838 586422865
25112293 160761603 162822339
770938901 1968882287 168925624
2705922239 2697964303 79485064
512617614 0 160761603
3671420032 4254837026 27081152
673379217 387568324 33575302
706954519 323583942 63984382
1047197914 1580976419 38110593
0 1619087012 25112293
2297003964 4193590343 8717958
187934632 1644199305 324682982
4277378082 2297003964 17589214
4227273431 2511326033 50104651
939864525 1133158202 107333389
2692956243 4286447910 8519386
3448442788 2777449367 90890235
1085308507 1240491591 340484828
1425793335 421143626 712014576
3371830168 2868339602 6480236
2701475629 2693517693 4446610
2305721922 4202308301 51187011
3807886431 2378854116 132471917
3940358348 3797290013 286915083
2356908933 3461242703 336047310

temperature-to-humidity map:
4269649447 2393649810 25317849
2624622018 1500892381 293269560
3784916401 3939293015 342497756
2265977332 3395782296 159502803
1831892433 2656443697 262271473
3165592569 2418967659 50349192
2917891578 2918715170 32249137
3152416044 4281790771 13176525
2425480135 3196640413 199141883
0 541439970 311711929
1823766565 1492766513 8125868
990491492 84547230 456892740
311711929 0 84547230
2950140715 2469316851 187126846
4127414157 2950964307 142235290
396259159 853151899 594232333
3215941761 3555285099 21604105
2094163906 2206687901 171813426
3703390493 2125161993 81525908
3340986682 3576889204 362403811
3137267561 2378501327 15148483
3237545866 3093199597 103440816
1492766513 1794161941 331000052

humidity-to-location map:
697523568 606382276 38912139
3022503077 2608306075 46906919
3230895262 2302415707 63420952
736435707 183964832 131646187
3507404317 3731540503 41469688
1013393252 490470958 115911318
270068585 0 183964832
3316292469 3480652736 191111848
3800980345 2893452190 286098783
2373021543 3773010191 190266
3548874005 3993865558 91972017
0 645294415 270068585
2373211809 4094117141 87252238
2856512732 2695675634 165990345
2460464047 4085837575 8279566
619680743 351018435 72089891
3069409996 2365836659 129699055
3640846022 3813115875 53385677
2729080766 2240595460 61820247
1554011298 1459823647 179489523
1884012518 2495535714 112770361
2468743613 3363193697 35293527
3199109051 2861665979 31786211
454033417 1031019876 98284694
1733500821 1302115255 150511697
1431930368 3773200457 39915418
691770634 930855093 5752934
3694231699 3671764584 59775919
1302115255 2655212994 40462640
868081894 936608027 94411849
4087079128 4181369379 113597917
1471845786 3398487224 82165512
997901159 915363000 15492093
2504037140 2015551834 225043626
3761204313 3866501552 39776032
552318111 423108326 67362632
2790901013 3906277584 65611719
3294316214 3971889303 21976255
962493743 315611019 35407416
4200677045 3268903446 94290251
3754007618 1452626952 7196695
1996782879 1639313170 376238664
1342577895 3179550973 89352473`

var seeds = `79 14 55 13`.split(' ').map(Number)

var input = `seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

var inputArr = pinput.split('\n\n').map(parse)
//console.log(inputArr)

var ranges = getRanges(pseeds)

var resSeeds = ranges
for(let i=0; i<inputArr.length;i++) {

    //Put all ranges into each map
    resSeeds = transformSeeds(inputArr[i], resSeeds)

}
console.log(Math.min(...resSeeds.map(i=>i.start)))

function getRanges(seeds) {

    var resArr = []
    for(let i=0;i<seeds.length-1;i=i+2) {

        resArr.push({start:seeds[i], end:seeds[i]+seeds[i+1]-1})
    }
    return resArr
}

function transformSeeds(destMapArr, seeds) {

    var res = seeds.map(seed =>
        transformSeedDest(destMapArr, seed)
    )
    return res.reduce((a,b)=>a.concat(...b),[])
}

function transformSeedDest(destArr, seed) {

    //Only one range - should get multiple
    //If range converted - put into res
    var remains = [seed]
    var res = []
    for (let i = 0; i < destArr.length; i++) {

        var dest = destArr[i]

        let subRanges = remains.map(i=>getSubRanges(dest,i))
        remains = subRanges.map((i=>i.remains)).reduce((a,b)=>a.concat(b),[])
        res = res.concat(subRanges.map((i=>i.res)).reduce((a,b)=>a.concat(b),[]))
    }
    return res.concat(remains)
}

function getSubRanges(map, seed) {

    //not included
    if(seed.end < map.start || map.end < seed.start) {
        return {remains:[seed], res:[]}
    }
    //inner
    if(map.start <= seed.start && seed.end <= map.end) {
        return {remains:[], res:[{start: seed.start-map.start+map.dest, end: seed.end-map.start+map.dest }]}
    }
    //outer
    if(map.start >= seed.start && seed.end >= map.end) {
        let res = [{start: map.dest, end: map.end-map.start+map.dest }]
        let remains = []
        if(map.start !== seed.start) {
            remains.push({start:seed.start,end:map.start-1})
        }
        if(map.end !== seed.end) {
            remains.push({start:map.end+1,end:seed.end})
        }
        return ({remains: remains, res: res})
    }
    //left
    if(map.start >= seed.start && seed.end <= map.end) {
        let res = [{start: map.dest, end: seed.end-map.start+map.dest }]
        let remains = []
        if(map.start !== seed.start) {
            remains.push({start:seed.start,end:map.start-1})
        }
        return ({remains: remains, res: res})
    }
    //right
    if(map.start <= seed.start && seed.end >= map.end) {
        let res = [{start: seed.start-map.start+map.dest, end: seed.end-map.start+map.dest }]
        let remains = []
        if(map.end !== seed.end) {
            remains.push({start:map.end+1,end:seed.end})
        }
        return ({remains: remains, res: res})
    }
    return seed
}

function getEnd(range) {
    return range.start+range.length
}

function parse(str) {

    return str.split('\n').slice(1).map(parseDest)
}

function parseDest(destItem) {

    var destArr = destItem.split(' ').map(Number)
    return {
        dest: destArr[0],
        start: destArr[1],
        end: destArr[1]+destArr[2]-1
    }
}

function arrSum(arr) {

    return arr.reduce((a,b)=>a+b,0)
}
