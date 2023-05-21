//@ts-nocheck

import Select, { MultiValue, Options } from 'react-select'


const DropDown = (props: any) => {
    const { label, index, isMulti, updateOptions, options, defaultValue } = props
    return (
        <div className="flex flex-col p-6.5 w-full">
            <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    {label}
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <Select options={options} isMulti={isMulti} defaultValue={defaultValue} onChange={(value) => updateOptions(value, index)} />
                </div>
            </div>
        </div>
    )
}

export default DropDown