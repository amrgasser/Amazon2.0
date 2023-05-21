import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import MultiColors from './Components/ColorsImageUpload';
import DropDown from './Components/DropDown';
import Switcher from './Components/Switcher';
import TextArea from './Components/TextArea';
import TextInput from './Components/TextInput';
import { useAppSelector, useAppDispatch } from '../../Redux/Store/hooks';
import { Link } from 'react-router-dom';
import Variations from './Components/Variations';
import { update } from '../../Redux/Edit/productEdit';
import { Colors, Sizes } from './Options';
import FileUpload from './Components/FileUpload';
import axios from 'axios';

const MultiColorProductFormElements = (props: any) => {
  const { } = props
  const product = useAppSelector((state) => state.update.product)
  const dispatch = useAppDispatch()

  const saveProduct = async (method: String) => {
    try {
      const newProduct = { ...product }

      newProduct.newImages.map((object: any) => {
        const currentColorImagesArray = [...newProduct.colorsImages[object.color]]

        if (currentColorImagesArray.length > object.index) {
          //remove from the first found element to the end as all new elements will be appended to the end
          currentColorImagesArray.splice(object.index, currentColorImagesArray.length - object.index)
        }
        const newColorsImagesArray = { ...newProduct.colorsImages }
        newColorsImagesArray[object.color] = currentColorImagesArray

        newProduct.colorsImages = newColorsImagesArray
      })

      const data = new FormData()
      if (newProduct.newImages.length > 0) {
        const _files = [...newProduct.newImages]
        const newImages: object[] = []

        _files.map((file, index) => {
          newImages.push({ indexOfImageInColor: file.index, color: file.color, fileIndex: index })
          data.append('newFiles', file.data)
        })

        newProduct.newImages = newImages
      }

      data.append('product', JSON.stringify(newProduct))

      await axios.post('http://localhost:3000/api/store/products', data)
    } catch (error) {
      console.log(error);
    }
  }

  const changeName = (element: HTMLInputElement) => {
    dispatch(update({ name: element.value }))
  }
  const changeDescription = (element: HTMLInputElement) => {
    dispatch(update({ name: element.value }))
  }
  const changeAvailableColors = (options: any) => {
    const colors = options.map((option: any) => (option.value))
    dispatch(update({ colors: [...colors] }))
  }
  const changeAvailableSizes = (options: any) => {
    const sizes = options.map((option: any) => (option.value))
    dispatch(update({ sizes: [...sizes] }))
  }

  const changeMultiColored = () => {
    dispatch(update({ isMultiColored: !product.isMultiColored }))
  }
  const changeActive = () => {
    dispatch(update({ active: !product.active }))
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="FormElements" />
      <Link
        to="#"
        className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        onClick={() => saveProduct('CREATE')}
      >
        Save
      </Link>

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <TextInput defaultValue={product.name} label={"Name"} changeValue={changeName} />
            <TextArea defaultValue={product.description} label={"Description"} changeValue={changeDescription} />
            <Switcher onUpdate={changeActive} active={product.active} label={"Is Active?"} />
            <Switcher onUpdate={changeMultiColored} active={product.isMultiColored} label={"Is The product MultiColored?"} />
            <DropDown label={"Subcategories"} />
            <DropDown label={"Sizes"} defaultValue={product.sizes?.map((color: any) => ({ label: color, value: color }))} options={Sizes} isMulti={true} updateOptions={changeAvailableSizes} />
            <DropDown label={"Colors"} defaultValue={product.colors?.map((color: any) => ({ label: color, value: color }))} options={Colors} isMulti={true} updateOptions={changeAvailableColors} />
            {!product.isMultiColored && <FileUpload items={[]} />}
          </div>
          <MultiColors />
        </div>

        <div className="flex flex-col gap-9">
          <Variations />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MultiColorProductFormElements
