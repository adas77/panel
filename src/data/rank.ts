import { RankingType } from "../types/RankingType"
import { getRandomInt } from '../utils/rand'


const genRanks = () => {
    const ranks: RankingType[] = []

    // TODO: lang
    const categories = ['Location', 'Prices', 'Delivery', 'Quality', 'Returns', 'Contact']

    for (let i = 0; i < categories.length; i++) {
        ranks.push({
            category: categories[i],
            percent: getRandomInt(33, 90),
            weight: getRandomInt(0, 5)
        })
    }

    return ranks
}

const ranks = genRanks()
export default ranks