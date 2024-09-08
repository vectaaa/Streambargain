import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
  const faqData = [
    { 
      question: 'How is this service possible?',
      answers: 'How we make this work is we link five people to one Premium/Family account, giving everyone their own profile and unlimited access to all the content. No setup from you required - we take care of all the details. Simply login and enjoy!',
    },
    {
      question: 'Is the payment option safe?',
      answers: 'Yes, the payment option is safe. We use secure payment gateways to ensure your information is protected. You can enjoy the service with peace of mind.',
    },
    {
      question: 'Can I cancel my subscription?',
      answers: 'Yes, you can cancel your subscription at any time. Simply log into your account, go to the subscription settings, and follow the prompts to cancel.',
    },
    {
      question: 'Do I have privacy on the content I consume?',
      answers: 'Yes, you can cancel your subscription at any time. Simply log into your account, go to the subscription settings, and follow the prompts to cancel.',
    },
    {
      question: 'Can I  have multiple subscription on the same service?',
      answers: 'Yes, you can cancel your subscription at any time. Simply log into your account, go to the subscription settings, and follow the prompts to cancel.',
    },
    {
      question: 'Is this service legal?',
      answers: 'Yes, you can cancel your subscription at any time. Simply log into your account, go to the subscription settings, and follow the prompts to cancel.',
    },
  ];

  const [activeId, setActiveId] = useState(null);
  const togglerFunction = (index) => {
    if(activeId === index){
        setActiveId(null);
    } else(setActiveId(index));
  };
  

  return (
    <div className='w-full min-h-screen py-20 flex flex-col items-center justify-center px-4'>
  <div className='text-center mb-6'>
    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Frequently Asked</h1>
    <p className='text-lg sm:text-xl md:text-2xl'>Questions</p>
  </div>
  <div className='w-full max-w-[600px] h-max border rounded-lg overflow-hidden'>
    {faqData.map((item, i) => (
      <div key={i} className='border-b last:border-b-0'>
        <div
          className={`px-4 sm:px-5 py-4 flex items-center justify-between ${
            activeId === i ? 'border bg-gray-100' : ''
          }`}
          onClick={() => togglerFunction(i)}
        >
          <p className='flex-1'>{item.question}</p>
          <span>
            {activeId === i ? (
                <FontAwesomeIcon icon={faAngleUp} />
            ) : (
                <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </div>
        {activeId === i && (
          <div className='px-4 sm:px-5 py-4 bg-[#DED4F5]'>
            <p className='bg-[#DED4F5]'>{item.answers}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
  );
};

export default Faqs;
