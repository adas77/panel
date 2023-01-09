import Widget from '../atoms/Widget';
import OrderSidebar from '../molecules/OrderSidebar';

const WidgetOrder = () => {
    // TODO count zamówienia
    const tag = false ? "Sprawdź nowe zamówienia" : "Brak zamówień"

    return (
        <Widget childComponent={<OrderSidebar />} href={'/orders'} title={'Zamówienia'} tags={[tag]} />
    )
}

export default WidgetOrder