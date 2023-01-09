import React from 'react'
import Navigation from '../molecules/Navigation'
import WidgetOpinions from './WidgetOpinions'

type Props = {}

const Widgets = (props: Props) => {
    return (
        <>
            <Navigation />
            <br />
            <br />
            <div className='container flex flex-wrap gap-10'>
                <WidgetOpinions />
            </div>
        </>
    )
}

export default Widgets