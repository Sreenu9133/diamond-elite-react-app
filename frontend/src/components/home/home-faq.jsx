import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";

function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "How Secure is the computational mining structure?",
            answer: "Our licenses allocate computing hashpower backed by a real secure off-site cloud server array. Transactions are indexed sequentially in a MySQL relational database ensuring zero balance leaks and maximum vault security."
        },
        {
            question: "What are the minimum withdrawal limits?",
            answer: "The minimum withdrawal limits depend on the specific mining license tier you hold. Please check your dashboard for the detailed withdrawal thresholds for your account type."
        },
        {
            question: "How does the Tier-3 Referral Network commission structure calculate?",
            answer: "The Tier-3 Referral Network distributes commissions across three structural levels, calculating percentages based on the direct and indirect hashpower purchases of your network."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="home-faq p-10">
            <div className="faq-head flex flex-col items-center justify-center gap-1">
                <p className="text-sm text-[#d4af37] font-semibold">ANSWERS HUB</p>
                <h1 className="text-2xl font-semibold">Frequently Asked Questions</h1>
                <p className="text-sm text-gray-500">Everything you need to know about Diamond Elite mining licenses.</p>
            </div>

            <div className="faq w-full flex flex-col items-center justify-center py-7 gap-4">
                {faqData.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="faq-item w-[60%] px-4 pt-4 bg-white rounded-lg shadow-2xl flex flex-col gap-4">
                            <div onClick={() => toggleFAQ(index)} className="flex items-center justify-between w-full">
                                <h3 className="text-bas">{item.question}</h3>
                                <div className="arrow-up-down text-[#d4af37]">
                                    {
                                        isOpen ? <IoIosArrowDropup size={24} /> : <IoIosArrowDropdown size={24} />
                                    }
                                </div>
                            </div>

                            {
                                // isOpen && (
                                <div className={`transition-all duration-300 ease-in-out border-gray-100 px-5 bg-white overflow-hidden ${isOpen ? 'h-24 border-t py-4 opacity-100' : 'h-0 py-0 opacity-0'}`}>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                                // )
                            }
                        </div>
                    )

                })}

            </div>

        </div>
    )
}

export default HomeFAQ