import imgDefault from '../components/atoms/img/default.jpg'
import imgDog from '../components/atoms/img/dog.jpg'
import imgPl from '../components/atoms/img/poland.jpg'
import imgUsa from '../components/atoms/img/usa.jpg'
import { OpinionType } from '../types/OpinionType'
import { getRandomDate, getRandomInt } from '../utils/rand'

const genOpinions = (howMany: number) => {
    const opinions: OpinionType[] = []

    const images: string[] = [imgPl, imgUsa, imgDog, imgDefault]
    const names: string[] = ["Adam", "John", "Liam", "Noah", "Olivia", "Emma"]
    const surnames: string[] = ["Pilewski", "Smith", "Brown", "Scott"]

    for (let i = 0; i < howMany; i++) {
        const randImg = images[getRandomInt(0, images.length)]
        opinions.push({
            id: i,
            alt: randImg,
            src: randImg,
            rate: getRandomInt(0, 6),
            name: names[getRandomInt(0, names.length)],
            surname: surnames[getRandomInt(0, surnames.length)],
            date: getRandomDate(new Date(2012, 0, 1), new Date()),
            description: 'Nam luctus nulla blandit sodales eleifend. Nullam facilisis augue eu felis ullamcorper iaculis in a turpis. Pellentesque hendrerit odio est, quis vulputate nisl convallis dapibus. Praesent semper, urna nec maximus sollicitudin, quam orci aliquet metus, nec placerat orci ex eu massa. Morbi rutrum ut urna a efficitur.'
        })
    }

    return opinions
}

const opinions = genOpinions(35)
export default opinions