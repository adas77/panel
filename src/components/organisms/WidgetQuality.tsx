import useAccount from '../../hooks/useAccount'
import useLang from '../../hooks/useLang'
import Quality from '../molecules/Quality'
import Widget from '../molecules/Widget'

type Props = {
    showWorst?: boolean
}

const WidgetQuality = (props: Props) => {
    const { lang } = useLang()
    const { acc } = useAccount()


    return (
        <Widget childComponent={<Quality showWorst={props.showWorst} ranks={acc.ranks} />} href={'/quality'} title={lang.quality} tags={[]} />
    )
}

export default WidgetQuality