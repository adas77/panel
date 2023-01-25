import clsx from 'clsx'
import { ReactNode } from 'react'

type gapVariant = "regular" | "big" | "small"

type Props = {
    gap?: gapVariant
    children: ReactNode
}

const Flex = ({ gap = 'regular', ...props }: Props) => {
    return (
        <div className={clsx(
            // 'container mx-auto flex flex-wrap justify-center',
            // 'mx-auto flex flex-wrap justify-center',
            'mx-auto flex flex-wrap justify-center',
            gap === 'regular' && 'gap-14',
            gap === 'big' && 'gap-20',
            gap === 'small' && 'gap-10',
        )}>
            {props.children}
        </div>
    )
}

export default Flex