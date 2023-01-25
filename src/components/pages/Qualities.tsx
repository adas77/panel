import WidgetQuality from '../organisms/WidgetQuality'
import DefaultLayout from '../template/DefaultLayout'
import Flex from '../template/Flex'

type Props = {}

const Qualities = (props: Props) => {
    return (
        <DefaultLayout>
            <Flex>
                <WidgetQuality />
            </Flex>
        </DefaultLayout>
    )
}

export default Qualities