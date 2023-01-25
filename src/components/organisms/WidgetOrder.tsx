import useLang from '../../hooks/useLang';
import Widget from '../molecules/Widget';
import OrderSidebar from '../molecules/OrderSidebar';
import useAccount from '../../hooks/useAccount';

const WidgetOrder = () => {
    const { lang } = useLang()
    const { acc } = useAccount()
    const ret = acc.orders.returns.length
    const unpaid = acc.orders.unpaid.length
    const unsent = acc.orders.unsent.length
    const sum = ret + unpaid + unsent
    const tag1 = `${lang.total}${sum}`
    const tag2 = lang.mostOrdersFrom + " USA"
    const tag3 = sum > 62 ? lang.notBad : lang.veryGood

    return (
        <Widget childComponent={<OrderSidebar />} href={'/orders'} title={lang.orders} tags={[tag1, tag2, tag3]} tagsIncolumn={true} ></Widget>
    )
}

export default WidgetOrder