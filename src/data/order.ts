import { OrderTypeData } from '../types/OrderType'
import { getRandomDate, getRandomInt } from '../utils/rand'

function genOrderData(howMany: number, skip: boolean) {
    const names: string[] = ["Adam", "John", "Liam", "Noah", "Olivia", "Emma"]
    const surnames: string[] = ["Pilewski", "Smith", "Brown", "Scott"]

    const unpaid: OrderTypeData[] = []
    const unsent: OrderTypeData[] = []
    const returns: OrderTypeData[] = []
    for (let index = 0; index < howMany; index++) {

        const buyer = `${names[getRandomInt(0, names.length - 1)]} ${surnames[getRandomInt(0, surnames.length - 1)]}`
        const quantity = getRandomInt(0, 123456)

        const unpaidItem: OrderTypeData = {
            buyer: buyer,
            quantity: quantity,
            dateBought: getRandomDate(new Date(2012, 0, 1), new Date(2018, 0, 1)),
            orderNumber: 3 * (3 * index + 1) * (index + 1) + getRandomInt(0, 9)
        }

        const unsentItem: OrderTypeData = {
            buyer: buyer,
            quantity: quantity,
            dateBought: getRandomDate(new Date(2012, 0, 1), new Date(2018, 0, 1)),
            datePaid: getRandomDate(new Date(2018, 0, 10), new Date(2018, 10, 10)),
            orderNumber: 7 * (7 * index + 1) * (index + 1) + getRandomInt(0, 9)
        }
        if (!skip) {
            const returnsItem: OrderTypeData = {
                buyer: buyer,
                quantity: quantity,
                dateBought: getRandomDate(new Date(2012, 0, 1), new Date(2018, 0, 1)),
                datePaid: getRandomDate(new Date(2018, 0, 10), new Date(2018, 10, 10)),
                dateSent: getRandomDate(new Date(2018, 10, 10), new Date(2018, 12, 12)),
                returned: true,
                orderNumber: 17 * (17 * index + 1) * (index + 1) + getRandomInt(0, 9)
            }
            returns.push(returnsItem)
        }

        unpaid.push(unpaidItem)
        unsent.push(unsentItem)

    }
    return { unpaid, unsent, returns }
}

// export const { unpaid, unsent, returns } = genOrderData(60)
export const order1 = genOrderData(60, true)
export const order2 = genOrderData(120, false)

// export const u2.unpaid  