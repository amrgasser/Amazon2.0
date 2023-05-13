import { useAppSelector } from '../../../Redux/Store/hooks'

const TextInput = (props: any) => {
    const { label, defaultValue } = props


    return (
        <div className="flex flex-col gap-5.5 p-6.5">
            <div>
                <label className="mb-3 block text-black dark:text-white">
                    {label}
                </label>
                <input
                    type="text"
                    defaultValue={defaultValue}
                    placeholder={label}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
            </div>
        </div>
    )
}

export default TextInput