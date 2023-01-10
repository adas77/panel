import { useSelector } from 'react-redux';
import useGlobalDispatch from '../../redux/actionCreators';
import Image from '../atoms/Image';
import pl from '../atoms/img/poland.jpg';
import en from '../atoms/img/usa.jpg';

const LangSwitcher = () => {
    const { cmdSwitchLang } = useGlobalDispatch()
    const [isPolish] = useSelector((s: GlobalState) => {
        return [s.isPolish]
    })

    return (
        <>
            {isPolish ?
                <Image onClick={e => cmdSwitchLang()} src={pl} alt="pl" size='small' />
                :
                <Image onClick={e => cmdSwitchLang()} src={en} alt="en" size='small' />
            }
        </>
    )
}

export default LangSwitcher