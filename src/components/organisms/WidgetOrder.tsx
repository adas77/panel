import useLang from '../../hooks/useLang';
import Widget from '../template/Widget';
import OrderSidebar from '../molecules/OrderSidebar';

const WidgetOrder = () => {
    const { lang} = useLang()
    // TODO count zamówienia
    const tag = true ? "Sprawdź nowe zamówienia" : "Brak zamówień"

    return (
        <Widget childComponent={<OrderSidebar />} href={'/orders'} title={lang.orders} tags={[tag]} />
    )
}

export default WidgetOrder