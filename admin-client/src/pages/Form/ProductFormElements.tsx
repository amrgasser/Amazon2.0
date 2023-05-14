import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import ColorAndSizes from './Components/ColorAndSizes';
import DropDown from './Components/DropDown';
import Switcher from './Components/Switcher';
import TextArea from './Components/TextArea';
import TextInput from './Components/TextInput';
import { useAppSelector, useAppDispatch } from '../../Redux/Store/hooks';
import { Link } from 'react-router-dom';
// import { update, reset } from '../../Redux/Edit/productEdit'
import axios from 'axios'


const FormElements = () => {

  const product = useAppSelector((state) => state.update.product)


  const saveProduct = async (method: String) => {
    if (method === 'CREATE') {
      const res = await axios.post('http://localhost:3000/api/store/products', { product })

      console.log(res);

    }
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
            <TextInput defaultValue={product.name} label={"Name"} />
            <TextArea defaultValue={product.description} label={"Description"} />
            <Switcher label={"Is Active?"} />
            <DropDown label={"Subcategories"} />
          </div>
          <ColorAndSizes />
        </div>

        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <TextInput label={"Name"} />
            <TextArea label={"Description"} />
            <Switcher label={"Is Active?"} />
            <DropDown label={"Subcategories"} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormElements