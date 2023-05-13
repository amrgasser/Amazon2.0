import Select from 'react-select'

const DropDown = (props: any) => {
    const { label, handleChange, index, isMulti } = props

    const options = [
        { value: "red", label: "red" },
        { value: "green", label: "green" },
        { value: "blue", label: "blue" },
    ]


    return (
        <div className="flex flex-col gap-5.5 p-6.5">
            <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    {label}
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <Select options={options} isMulti={isMulti} onChange={(event) => handleChange(event, index)} />
                </div>
            </div>
        </div>
    )
}

export default DropDown