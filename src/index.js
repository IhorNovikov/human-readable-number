module.exports = toReadable = (number) => {

    let firstFloor = 'one,two,three,four,five,six,seven,eight,nine'.split(',')
    secondFloor = 'ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen'.split(',')
    thirdFloor = 'twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'.split(',')
    numberStr = String(number).split('')
    wordArr = numberStr.map(i => firstFloor[+(i) - 1])

    if (number == 0) { return 'zero' }
    if (numberStr.length == 3) {
        wordArr.splice(1, 0, 'hundred')
    }
    if (number > 9 && number <= 20) {
        wordArr = [String(number)].map(i => secondFloor[+(i) - 10])
    }
    if (number >= 20 && number < 100) {
        wordArr.splice(0, 1, thirdFloor[+([...String(number)][0]) - 2])
    }
    if (number > 100) {
        wordArr.splice(2, 1, thirdFloor[+([...String(number)][1]) - 2])
    }
    if (number % 100 > 9 && number % 100 < 20) {
        wordArr.splice(2, 2, secondFloor[+([...String(number)][2])])
    }

    return wordArr.filter(i => i != undefined).join(' ').trim()


}
