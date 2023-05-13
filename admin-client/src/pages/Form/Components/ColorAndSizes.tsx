import { Link } from "react-router-dom"
import FileUpload from "./FileUpload"
import DropDown from "./DropDown"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../Redux/Store/hooks"
import { update } from "../../../Redux/Edit/productEdit"

const ColorAndSizes = () => {
    const colors = {
        red: ["/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg", "/1682240979621.jpeg"],
    }
    const colorKeys = Object.keys(colors)

    const newColors = colorKeys.map((key) => {
        return ({
            color: key,
            images: colors[key as keyof typeof colors]
        })
    })
    const [colorsArray, setColorsArray] = useState(newColors)

    const handleAddColor = () => {
        setColorsArray([...colorsArray, { color: "", images: [] }])
    }

    const handleDeleteColor = (index: number) => {
        console.log(index);
        const list = [...colorsArray]
        list.splice(index, 1)
        setColorsArray(list)
    }

    const handleColorChange = (event: any, index: number) => {
        console.log(event);

        const list = [...colorsArray]
        console.log(list);

        list[index].color = event.value

        setColorsArray(list)
    }

    // update new product test
    const productToUpdate = useAppSelector(state => state.update.product);
    const dispatch = useAppDispatch()


    const testUpdate = () => {
        dispatch(update({ name: "new name" }))
    }
    // console.log(productToUpdate);


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
                        <DropDown label={"Color"} isMulti={false} defaultValue={color.color} handleChange={handleColorChange} index={index} />
                        <FileUpload variation={1} items={color.images} index={index} setState={setColorsArray} array={colorsArray} />
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
                onClick={testUpdate}
            >
                Button
            </Link>
        </div>
    )
}

export default ColorAndSizes