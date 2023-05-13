
import SwitcherOne from '../../../components/SwitcherOne'

const Switcher = (props: any) => {
    const { label } = props
    return (
        <div className="flex flex-col gap-5.5 p-6.5">
            <div>
                <label className="mb-3 block text-black dark:text-white">
                    {label}
                </label>
                <SwitcherOne />
            </div>
        </div>
    )
}

export default Switcher