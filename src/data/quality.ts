import { QualityType } from "../types/QualityType"
import { getRandomInt } from '../utils/rand'


const genRanks = () => {
    const ranks: QualityType[] = []

    // TODO: lang
    const categories = ['Location', 'Prices', 'Delivery', 'Quality', 'Returns', 'Contact']

    for (let i = 0; i < categories.length; i++) {
        ranks.push({
            category: categories[i],
            percent: getRandomInt(33, 90),
            weight: getRandomInt(1, 5)
        })
    }

    return ranks
}

export const ranks1 = genRanks()
export const ranks2 = genRanks()