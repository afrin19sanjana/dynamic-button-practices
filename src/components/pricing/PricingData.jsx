import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingData = ({pricingPromise}) => {
    const pricingInfo = use(pricingPromise)
   
   

    return (
        <div className="container mx-auto">
            
            <h2 className='text-3xl text-center mb-6'>Get Your Membership</h2>

       <div className="grid md:grid-cols-3 grid-cols-1 gap-x-4">
        {
            pricingInfo.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
        }
       </div>
        </div>
    );
};

export default PricingData;