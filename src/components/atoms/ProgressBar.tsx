import clsx from 'clsx'
type Props = {
    percent: number
}
const ProgressBar = (props: Props) => {
    const v = 'w-[' + props.percent.toString() + '%]'
    return (
        <div className="w-full px-4 lg:w-5/12">
            <div className="mb-8">
                <div className="bg-blue-200 relative h-4 w-full rounded-2xl">
                    <div className={clsx(
                        `bg-blue-500 absolute top-0 left-0 flex h-full  items-center justify-center rounded-2xl text-xs font-semibold text-white`,
                        'w-[32%]'
                    )}>
                        32
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProgressBar