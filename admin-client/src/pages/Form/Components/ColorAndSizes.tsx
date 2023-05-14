//@ts-nocheck

import { Link } from "react-router-dom"
import FileUpload from "./FileUpload"
import DropDown from "./DropDown"
import { useState } from "react"
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


const ColorAndSizes = () => {
    const product = useAppSelector(state => state.update.product)
    const dispatch = useAppDispatch()

    console.log(product);

    const colorsArray = convertObjectToArray(product.colors)

    const addNewColor = () => {
        colorsArray.push({ color: "", images: [] })

        const toUpdate = convertArrayToObject(colorsArray)
        dispatch(update({ colors: toUpdate }))
    }
    const updateOptions = (target: Option, index: number) => {
        colorsArray[index].color = target.value

        const toUpdate = convertArrayToObject(colorsArray)
        dispatch(update({ colors: toUpdate }))
    }

    const handleDeleteColor = (index: number) => {
        colorsArray.splice(index, 1)

        const toUpdate = convertArrayToObject(colorsArray)
        dispatch(update({ colors: toUpdate }))
    }
    const handleImageDelete = (i: number, globalIndex: number) => {
        const images = [...colorsArray[globalIndex].images]
        images.splice(i, 1)
        colorsArray[globalIndex].images = images

        const toUpdate = convertArrayToObject(colorsArray)
        dispatch(update({ colors: toUpdate }))
    }
    const handleImageUpload = async (e: any, globalIndex: number) => {
        const listFiles = (e.target.files)
        const images = [...colorsArray[globalIndex].images]

        for (let i = 0; i < listFiles.length; i++) {
            const reader = new FileReader()
            reader.onload = () => {
                images.push(reader.result)
                if (colorsArray[globalIndex].images.length + listFiles.length == images.length) {

                    colorsArray[globalIndex].images = images
                    const toUpdate = convertArrayToObject(colorsArray)
                    dispatch(update({ colors: toUpdate }))
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
                        <DropDown label={"Color"} isMulti={false} defaultValue={color.color} updateOptions={updateOptions} index={index} />
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

export default ColorAndSizes