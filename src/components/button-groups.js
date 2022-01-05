import {IoIosArrowRoundBack, IoIosArrowRoundForward} from 'react-icons/io';

function ButtonGroups ({next, previous}) {
    return <div className="w-full">
        <div className="container mx-auto">
            <div className="flex justify-center " >
                <button className="border-0 text-3xl cursor-pointer px-2" onClick={previous}>
                    <IoIosArrowRoundBack/>
                </button>
                <button className="border-0 text-3xl cursor-pointer px-2" onClick={next}>
                    <IoIosArrowRoundForward/>
                </button>
            </div>
        </div>
    </div>
}

export default ButtonGroups