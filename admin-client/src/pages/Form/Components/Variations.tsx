import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store/hooks'
import { update } from '../../../Redux/Edit/productEdit'
import TextInput from './TextInput'
type Option = {
    label: string,
    value: string
}
const Variations = () => {
    const product = useAppSelector(state => state.update.product)
    const variations = product.variations.map((productVariation: any) => ({ ...productVariation }))

    const colorOptions: Option[] = []
    const sizesOptions: Option[] = []

    if (product.colors && product.colors.length > 0) {
        product.colors.map((color: string) => (colorOptions.push({ label: color, value: color })))
    }
    if (product.sizes && product.sizes.length > 0) {
        product.sizes.map((size: string) => (sizesOptions.push({ label: size, value: size })))
    }

    const dispatch = useAppDispatch()

    const addNewVariation = () => {
        variations.push({ color: "", size: "", sku: "", stock: 0 })
        dispatch(update({ variations: variations }))
    }
    const deleteVariation = (i: number) => {
        variations.splice(i, 1)
        dispatch(update({ variations: variations }))
    }

    const updateColorOption = (option: any, i: number) => {
        console.log(i);

        variations[i].color = option.value
        dispatch(update({ variations: variations }))
    }
    const updateSizeOption = (value: any, i: number) => {
        variations[i].size = value
        dispatch(update({ variations: variations }))
    }
    const updateSku = (target: HTMLInputElement, i: number) => {
        variations[i].sku = target.value
        dispatch(update({ variations: variations }))
    }
    const updateStock = (target: HTMLInputElement, i: number) => {
        variations[i].stock = parseInt(target.value)
        console.log(variations);
        dispatch(update({ variations: [...variations] }))
    }
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Variations
                </h3>
            </div>
            {variations.map((variation: any, index: number) => {
                return (
                    <div className="flex flex-col  p-6.5 border border-stroke" key={index}>
                        <div className="flex flex-row  p-2.5">
                            <DropDown label={"Color"} isMulti={false} options={colorOptions} defaultValue={{ value: variation.color, label: variation.color }} index={index} updateOptions={updateColorOption} />
                            <DropDown label={"Size"} isMulti={false} options={sizesOptions} defaultValue={{ value: variation.size, label: variation.size }} index={index} updateOptions={updateSizeOption} />
                        </div>
                        <div className="flex flex-row p-2.5">
                            <TextInput label={"SKU"} isMulti={false} defaultValue={variation.sku} index={index} changeValue={updateSku} />
                            <TextInput label={"Stock"} type={"number"} isMulti={false} defaultValue={variation.stock} index={index} changeValue={updateStock} />
                        </div>
                        <Link
                            to="#"
                            className="inline-flex items-center justify-center bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            onClick={() => deleteVariation(index)}
                        >
                            Delete
                        </Link>
                    </div>
                )
            })}
            <Link
                to="#"
                className="inline-flex items-center justify-center bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                onClick={addNewVariation}
            >
                Add New
            </Link>
        </div>
    )
}

export default Variations