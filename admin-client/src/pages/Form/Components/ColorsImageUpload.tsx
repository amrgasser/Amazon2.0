//@ts-nocheck

import { Link } from "react-router-dom"
import FileUpload from "./FileUpload"
import DropDown from "./DropDown"
import { useAppSelector, useAppDispatch } from "../../../Redux/Store/hooks"
import { update } from "../../../Redux/Edit/productEdit"

const convertArrayToObject = (array: [any]) => {
    const result = {}
    for (let i = 0; i < array.length; i++) {
        result[array[i].color] = array[i].images
    }
    return result
}

const convertObjectToArray = (object: any) => {
    return Object.keys(object).map(key => ({ color: key, images: object[key] }))
}
type Option = {
    value: string,
    label: string
}


const ColorsImageUpload = () => {
    const product = useAppSelector(state => state.update.product)
    const dispatch = useAppDispatch()
    const options = []
    if (product.colors && product.colors.length > 0) {
        product.colors.map((color) => (options.push({ label: color, value: color })))
    }

    let colorsArray = []

    if (product.colorsImages) {
        colorsArray = convertObjectToArray(product.colorsImages)
    }

    const addNewColor = () => {
        if (colorsArray.length < options.length) {
            colorsArray.push({ color: "", images: [] })
            const toUpdate = convertArrayToObject(colorsArray)
            console.log(toUpdate);

            dispatch(update({ colorsImages: toUpdate }))
        }
    }
    const updateOptions = (target: Option, index: number) => {
        colorsArray[index].color = target.value

        const toUpdate = convertArrayToObject(colorsArray)
        dispatch(update({ colorsImages: toUpdate }))
    }

    const handleDeleteColor = (index: number) => {
        colorsArray.splice(index, 1)

        const toUpdate = convertArrayToObject(colorsArray)
        dispatch(update({ colorsImages: toUpdate }))
    }
    const handleImageDelete = (i: number, globalIndex: number) => {
        const thisColorsImages = [...colorsArray[globalIndex].images]
        thisColorsImages.splice(i, 1)
        colorsArray[globalIndex].images = thisColorsImages

        const newImages = [...product.newImages]
        for (let cur = 0; cur < newImages.length; cur++) {
            if (newImages[cur].color === colorsArray[globalIndex].color && newImages[cur].index == i) {
                newImages.splice(cur, 1)
            }
        }
        const toUpdate = convertArrayToObject(colorsArray)
        dispatch(update({ colorsImages: toUpdate, newImages: newImages }))
    }
    const handleImageUpload = async (e: any, globalIndex: number) => {
        const listFiles = (e.target.files)
        const images = [...colorsArray[globalIndex].images] //this is to update the product to reflect on screen
        const newImages = [...product.newImages] //this is to update the store with the images needed to be uploaded to the server

        for (let i = 0; i < listFiles.length; i++) {
            const reader = new FileReader()
            reader.onload = () => {
                images.push(reader.result)
                //color, index of new image in the color array, data
                newImages.push({ color: colorsArray[globalIndex].color, index: colorsArray[globalIndex].images.length, data: reader.result })
                if (colorsArray[globalIndex].images.length + listFiles.length == images.length) {
                    colorsArray[globalIndex].images = images
                    const toUpdate = convertArrayToObject(colorsArray)

                    dispatch(update({ colorsImages: toUpdate, newImages: newImages }))
                }
            }
            reader.readAsDataURL(listFiles[i])
        }
    }


    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    File upload
                </h3>
            </div>
            {colorsArray.map((color, index) => {
                return (
                    <div className="flex flex-col gap-5.5 p-6.5 border border-stroke" key={index}>
                        <DropDown label={"Color"} isMulti={false} options={options} defaultValue={{ label: color.color, value: color.color }} updateOptions={updateOptions} index={index} />
                        <FileUpload variation={1} items={color.images} index={index} globalIndex={index} handleImageDelete={handleImageDelete} handleImageUpload={handleImageUpload} />
                        <Link
                            to="#"
                            className="inline-flex items-center justify-center bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            onClick={() => handleDeleteColor(index)}
                        >
                            Delete
                        </Link>
                    </div>
                )
            })}
            <Link
                to="#"
                className="inline-flex items-center justify-center bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                onClick={addNewColor}
            >
                Add New
            </Link>
        </div>
    )
}

export default ColorsImageUpload