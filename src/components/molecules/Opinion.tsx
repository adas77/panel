import { OpinionType } from '../../types/OpinionType'
import Image from '../atoms/Image'

const Opinion = (props: OpinionType) => {
    const MAX_RATE = 5
    const person = `${props.name} ${props.surname}`

    let rate = props.rate
    if (props.rate > MAX_RATE) {
        rate = MAX_RATE
    }
    else if (props.rate < 0) {
        rate = 0
    }

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            {props.widget ||
                <div className="flex items-center justify-between m-4">
                    <a href="/opinions">
                        <Image src={props.src} alt={props.alt} />
                    </a>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{person}</span>
                </div>}
            <div className="px-5 pb-5">
                {props.widget || <a href="/opinions">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.description}</h5>
                </a>}
                <div className="flex items-center mt-2.5 mb-5">
                    {[...Array(rate)].map((_, i) => <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{i} star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                    {[...Array(MAX_RATE - rate)].map((_, i) => <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{i} star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                </div>
                <span className="text font-bold text-gray-900 dark:text-white">{props.date.toUTCString()}</span>
            </div>
        </div>
    )
}

export default Opinion
