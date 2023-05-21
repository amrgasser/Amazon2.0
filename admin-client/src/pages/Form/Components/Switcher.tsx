
const Switcher = (props: any) => {
    const { label, active, onUpdate } = props

    return (
        <div className="flex flex-col gap-5.5 p-6.5">
            <div>
                <label className="mb-3 block text-black dark:text-white">
                    {label}
                </label>
                <div>
                    <label
                        className="flex cursor-pointer select-none items-center"
                    >
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="sr-only"
                                onChange={onUpdate}
                            />
                            <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                            <div
                                className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${active && '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                                    }`}
                            ></div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Switcher