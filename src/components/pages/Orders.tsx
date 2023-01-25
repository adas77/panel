import { useNavigate } from 'react-router-dom'
import useLang from '../../hooks/useLang'
import { OrderStatus } from '../../types/OrderType'
import Button from '../atoms/Button'
import OrderTable from '../organisms/OrderTable'
import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'

type Props = {
    type: OrderStatus
}

const Orders = (props: Props) => {
    const { lang } = useLang()
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <Flex>
                <div>
                    <Button variant={props.type === 'UNPAID' ? 'outline' : 'ghost'} onClick={() => navigate('/orders/unpaid')}>{lang.unpaid}</Button>
                    <Button variant={props.type === 'UNSENT' ? 'outline' : 'ghost'} onClick={() => navigate('/orders/unsent')}>{lang.unsent}</Button>
                    <Button variant={props.type === 'RETURN' ? 'outline' : 'ghost'} onClick={() => navigate('/orders/returns')}>{lang.returns}</Button>
                </div>
            </Flex>
            <br />
            <OrderTable type={props.type} />
        </DefaultLayout>
    )
}

export default Orders