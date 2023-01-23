import { OffertsType } from "../types/OffertsType"
import { getRandomInt } from '../utils/rand'

import useLang from "../hooks/useLang"
import computer from '../components/atoms/img/computer.jpg'
import phone from '../components/atoms/img/phone.png'
import headphones from '../components/atoms/img/headphones.jpg'
import tv from '../components/atoms/img/tv.jpg'
import keyboard from '../components/atoms/img/keyboard.jpg'

export function genOfferts(howMany: number, c: string, p: string, h: string, t: string, k: string) {

    const names = [c, p, h, t, k]
    const imgs = [computer, phone, headphones, tv, keyboard]
    const data: OffertsType[] = []
    for (let index = 0; index < howMany; index++) {
        const r = getRandomInt(0, names.length)
        const offert: OffertsType = {
            name: names[r],
            img: imgs[r],
            sold: getRandomInt(0, 4200),
            views: getRandomInt(0, 1234567),
            turnover: getRandomInt(0, 12345678),
        }
        data[index] = offert
    }
    return data
}
