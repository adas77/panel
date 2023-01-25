import useAccount from '../../hooks/useAccount'
import Quality from '../molecules/Quality'
import WidgetQuality from '../organisms/WidgetQuality'
import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'

type Props = {}

const Qualities = (props: Props) => {
    const { acc } = useAccount()
    return (
        <DefaultLayout>
            <Flex>
                <WidgetQuality />
                {/* <Quality ranks={acc.ranks} /> */}
            </Flex>
        </DefaultLayout>
    )
}

export default Qualities