import useLang from '../../hooks/useLang';
import Widget from '../molecules/Widget';
import OffertsTable from './OffertsTable';

const WidgetOfferts = () => {
    const { lang } = useLang()

    return (
        <Widget childComponent={<OffertsTable />} href={'/rankings'} tags={[]} title={lang.rankings} />
    )
}

export default WidgetOfferts