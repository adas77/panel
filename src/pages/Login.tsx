import React, { createContext, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../components/atoms/Button'
import Navigation from '../components/molecules/Navigation'
import OrderSidebar from '../components/molecules/OrderSidebar'
import Image from '../components/atoms/Image'
import dog from '../components/atoms/img/dog.jpg'
import Opinion from '../components/molecules/Opinion'

const Login = () => {
    const CORRECT_USER: string = "admin"
    const CORRECT_PASS: string = "admin123"

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const { isAuth, setIsAuth } = useGlobalAuthContext()


    const handleForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (username === CORRECT_USER && pass === CORRECT_PASS) {
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setPass(event.target.value)
    }

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setUsername(event.target.value)
    }

    return (
        <div className="App">
            {isAuth && <Navigate to={'/'} />}
            <Navigation />
            <OrderSidebar />
            <Button variant='outline'>fxges</Button>
            <Image variant='circle' />
            <Image variant='circle' src={dog} />
            {/* <div className='flex gap-10'> */}
            {/* <div className='container mx-auto px-5 py-5'> */}
            <div className='container flex flex-wrap gap-10'>
                <Opinion src={dog} rate={4} name={'Adam'} surname={'Pilewski'} date={new Date(1998,11,10,11,55,32).toUTCString()} description={'ugułem spaniałe produkty macie i dziękuje za tę wypowiedź'} alt={'dog'} />
                <Opinion rate={2} name={'Adam'} surname={'Nowak'} date={new Date(1410,9,6,10,1,28).toUTCString()} description={'Maecenas elementum nibh ac nibh interdum, in mattis metus congue. Vivamus tincidunt arcu mattis urna tincidunt, sit amet dictum lectus auctor. Praesent id ipsum dolor. Donec nec suscipit ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam non orci augue. Ut eu luctus velit. Sed nisi mauris, pharetra ac mauris ut, eleifend imperdiet nibh.'} alt={'dog'} />
                <Opinion src={dog} rate={1} name={'John'} surname={'Kowalski'} date={new Date(2010,2,3,19,12,11).toUTCString()} description={'Nam luctus nulla blandit sodales eleifend. Nullam facilisis augue eu felis ullamcorper iaculis in a turpis. Pellentesque hendrerit odio est, quis vulputate nisl convallis dapibus. Praesent semper, urna nec maximus sollicitudin, quam orci aliquet metus, nec placerat orci ex eu massa. Morbi rutrum ut urna a efficitur.'} alt={'dog'} />
                <Opinion src={dog} rate={1} name={'John'} surname={'Kowalski'} date={new Date(2010,2,3,19,12,11).toUTCString()} description={'Nam luctus nulla blandit sodales eleifend. Nullam facilisis augue eu felis ullamcorper iaculis in a turpis. Pellentesque hendrerit odio est, quis vulputate nisl convallis dapibus. Praesent semper, urna nec maximus sollicitudin, quam orci aliquet metus, nec placerat orci ex eu massa. Morbi rutrum ut urna a efficitur.'} alt={'dog'} />
                <Opinion src={dog} rate={1} name={'John'} surname={'Kowalski'} date={new Date(2010,2,3,19,12,11).toUTCString()} description={'Nam luctus nulla blandit sodales eleifend. Nullam facilisis augue eu felis ullamcorper iaculis in a turpis. Pellentesque hendrerit odio est, quis vulputate nisl convallis dapibus. Praesent semper, urna nec maximus sollicitudin, quam orci aliquet metus, nec placerat orci ex eu massa. Morbi rutrum ut urna a efficitur.'} alt={'dog'} />
            </div>
            <form onSubmit={e => handleForm(e)}>
                <div>
                    Username
                    <input type="text" onChange={e => handleUsername(e)} placeholder="Enter Username" />
                </div>
                <div>
                    Password
                    <input type="password" onChange={e => handlePassword(e)} placeholder="Enter Password" />
                </div>
                <button onSubmit={e => e.preventDefault()}>Login</button>
            </form>
            {isAuth ? <p>Zalogowany</p> : <p>Niezaloogowany</p>}
        </div>

    )
}

export type GlobalAuth = {
    isAuth: boolean
    setIsAuth: (is: boolean) => void
}
export const GlobalAuthContext = createContext<GlobalAuth>({
    isAuth: false,
    setIsAuth: () => { }
})
export const useGlobalAuthContext = () => useContext(GlobalAuthContext)

export default Login