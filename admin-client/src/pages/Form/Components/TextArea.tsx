import { update } from "../../../Redux/Edit/productEdit"
import { useAppDispatch, useAppSelector } from "../../../Redux/Store/hooks"

const TextArea = (props: any) => {
    const { label, defaultValue } = props

    const product = useAppSelector(state => state.update.product)
    const dispatch = useAppDispatch()

    const changeText = (element: HTMLTextAreaElement) => {
        dispatch(update({ description: element.value }))
        console.log(product);
    }
    return (
        <div className="flex flex-col gap-5.5 p-6.5">
            <div>
                <label className="mb-3 block text-black dark:text-white">
                    {label}
                </label>
                <textarea
                    rows={6}
                    placeholder="Default textarea"
                    onInput={(event) => changeText(event.target as HTMLTextAreaElement)}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
            </div>
        </div >
    )
}

export default TextArea