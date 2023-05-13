//@ts-nocheck

import Select, { MultiValue, Options } from 'react-select'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store/hooks'
import { update } from '../../../Redux/Edit/productEdit'


const DropDown = (props: any) => {
    const { label, index, isMulti } = props
    const product = useAppSelector(state => state.update.product)
    const dispatch = useAppDispatch()

    const options = [
        { value: "red", label: "red" },
        { value: "green", label: "green" },
        { value: "blue", label: "blue" },
    ]
    type Option = {
        value: string,
        label: string
    }
    const updateOptions = (target: Option[]) => {
        const Subcategories = []
        target.map((target) => Subcategories.push(target.value))
        dispatch(update({ subcategories: Subcategories }))
        console.log(product);

    }

    return (
        <div className="flex flex-col gap-5.5 p-6.5">
            <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    {label}
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <Select options={options} isMulti={true} onChange={(value) => updateOptions(value)} />
                </div>
            </div>
        </div>
    )
}

export default DropDown