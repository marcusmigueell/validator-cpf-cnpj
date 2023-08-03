function existCharacter(data: string): boolean {
    const regex = /^[0-9]+$/
    return !regex.test(data)
}

function countCharacter(data: string): boolean {
    const regex = /^(?:\d{11}|\d{14})$/
    return !regex.test(data)
}

function isCNPJ(data: string): boolean {

    const firstCalc = data.substring(0,12).split('').reverse()
    const firstDigit = parseInt(data.substring(12,13))

    const secondCalc = data.substring(0,13).split('').reverse()
    const secondDigit = parseInt(data.substring(13,14))

    var counter: number = 2
    var summation: number
    var firstDV: number
    var secondDV: number
    var rest: number

    summation = firstCalc.reduce((acc, current) => {
        const sum = Number(current) * counter
        counter = counter === 9 ? 2 : counter + 1
        return acc + sum
    }, 0)

    rest = 11 - (summation % 11)
    firstDV = rest >= 10 ? 0 : rest

    counter = 2

    summation = secondCalc.reduce((acc, current) => {
        const sum = Number(current) * counter
        counter = counter === 9 ? 2 : counter + 1
        return acc + sum
    }, 0)

    rest = 11 - (summation % 11)
    secondDV = rest >= 10 ? 0 : rest
    
    if (firstDV === firstDigit && secondDV === secondDigit)
        return true
    else
        return false
}

function isCPF(data: string): boolean {

    const firstCalc = data.substring(0,9).split('')
    const firstDigit = parseInt(data.substring(9,10))

    const secondCalc = data.substring(0,10).split('')
    const secondDigit = parseInt(data.substring(10,11))

    var counter: number = 10
    var summation: number
    var firstDV: number
    var secondDV: number
    var rest: number

    summation = firstCalc.reduce((acc, current) => {
        const sum = Number(current) * counter
        counter--
        return acc + sum
    }, 0)
    
    rest = 11 - (summation % 11)
    firstDV = rest >= 10 ? 0 : rest
    
    counter = 11

    summation = secondCalc.reduce((acc, current) => {
        const sum = Number(current) * counter
        counter--
        return acc + sum
    }, 0)
    
    rest = 11 - (summation % 11)
    secondDV = rest >= 10 ? 0 : rest

    if (firstDV === firstDigit && secondDV === secondDigit)
        return true
    else
        return false
}

function format(data: string): string {
    if(data.length === 11)
        return data.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    return data.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}

export {
    existCharacter,
    countCharacter,
    isCPF,
    isCNPJ,
    format
}