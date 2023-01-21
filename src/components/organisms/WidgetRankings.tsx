import Widget from '../molecules/Widget'
import useLang from '../../hooks/useLang'
import Ranking from '../molecules/Ranking'
import ranks from '../../data/rank'

type Props = {}

const WidgetRankings = (props: Props) => {
    const { lang } = useLang()

    return (
        <Widget childComponent={<Ranking ranks={ranks} />} href={'/rankings'} title={lang.rankings} tags={["2/10"]} />


    )
}

export default WidgetRankings