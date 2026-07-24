import WorkImage from '../../assets/images/earning-money.png'
import { Link } from 'react-router-dom'


function WorkTopSection() {
    return (
        <div className="work-top-section flex flex-col items-center justify-center bg-[#f0f7ff] px-10 py-5 ">
            <img src={WorkImage} alt="" className='h-100 w-[75%]' />

            <div className="referral-card py-10">
                <div className="card border p-5 rounded-lg flex flex-col gap-2">
                    <p className="text-gray-500">Send the invitation link to your friends, they can register through this link, and you will receive rewards.</p>

                    <span className='flex items-center'>
                        <p className='pr-2'>Invite link:</p>
                        <Link>
                            <p>https://healthwealth.world/#/login?code=451603879</p>
                        </Link>
                        <button className='rounded-xl bg-orange-500 text-white w-[15%] py-1 ml-15'>Copy</button>
                    </span>

                    <Link>
                        <button className='w-full rounded-xl py-2 bg-emerald-900 text-white text-md mt-4 hover:bg-transparent hover:border hover:text-black'>Go earn more money</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default WorkTopSection