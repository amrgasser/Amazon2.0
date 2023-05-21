const TextInput = (props: any) => {
    const { label, defaultValue, changeValue, index, type } = props

    return (
        <div className="flex flex-col p-6.5 w-full">
            <div>
                <label className="mb-3 block text-black dark:text-white">
                    {label}
                </label>
                <input
                    type={type || 'text'}
                    defaultValue={defaultValue}
                    placeholder={label}
                    onInput={(event) => changeValue(event.target as HTMLInputElement, index)}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
            </div>
        </div>
    )
}

export default TextInput