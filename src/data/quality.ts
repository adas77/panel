import { QualityType } from "../types/QualityType"
import { getRandomInt } from '../utils/rand'


export const genRanks = (l: string, p: string, d: string, q: string, r: string, c: string) => {
    const ranks: QualityType[] = []

    // TODO: lang
    const categories = [l, p, d, q, r, c]
    for (let i = 0; i < categories.length; i++) {
        ranks.push({
            category: categories[i],
            percent: getRandomInt(33, 90),
            weight: getRandomInt(1, 5)
        })
    }

    return ranks
}