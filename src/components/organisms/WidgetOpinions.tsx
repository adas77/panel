import { useEffect } from 'react'
import useOpinons from '../../hooks/useOpinons'
import Opinion from '../molecules/Opinion'

const WidgetOpinions = () => {
    const { getOpinions, opinionFetchState } = useOpinons()

    useEffect(() => {
        getOpinions(3)
        return () => {
        }
    }, [])

    return (
        <a href="/opinions">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-sky-700">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 dark:text-white">Ostatnie Opinie</div>
                    <div className='columns-1'>
                        {opinionFetchState.map((o, i) => <Opinion key={i} widget src={o.src} alt={o.alt} rate={o.rate} name={o.name} surname={o.surname} date={o.date} description={o.description} />)}
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-800 dark:text-white">#Niskie ceny</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-800 dark:text-white">#Jakość</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-800 dark:text-white">#Wspaniałe</span>
                </div>
            </div>
        </a>


    )
}

export default WidgetOpinions