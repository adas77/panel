import { ReactNode } from 'react'
import Navigation from '../molecules/Navigation'

type Props = {
    children: ReactNode
}

const DefaultLayout = (props: Props) => {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="align-content:center align-content: flex-start">
                <Navigation />
                <br />
                <br />
                <br />
                <br />
                {props.children}
                <br />
            </div>
        </section>
    )
}

export default DefaultLayout