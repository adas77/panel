import Widget from '../molecules/Widget'
import useLang from '../../hooks/useLang'
import Ranking from '../molecules/Ranking'
// import ranks from '../../data/rank'
import useAccount from '../../hooks/useAccount'

type Props = {}

const WidgetRankings = (props: Props) => {
    const { lang } = useLang()
    const { acc } = useAccount()
    return (
        <Widget childComponent={<Ranking ranks={acc.ranks} />} href={'/rankings'} title={lang.rankings} tags={["2/10"]} />


    )
}

export default WidgetRankings