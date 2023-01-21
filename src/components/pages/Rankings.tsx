import React from 'react'
import DefaultLayout from '../template/DefaultLayout'
import WidgetRankings from '../organisms/WidgetRankings'
type Props = {}

const Rankings = (props: Props) => {
    return (
        <DefaultLayout>
            <WidgetRankings />
        </DefaultLayout>
    )
}

export default Rankings