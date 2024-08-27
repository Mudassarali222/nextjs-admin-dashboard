"use client"
import { flockOptions } from '@/utils/constant';
import Head from 'next/head';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react'
import FlockFeeding from '@/components/FlockCompnent/Feeding';
import FlockAddReduce from '@/components/FlockCompnent/AddReduce';
import FlockEggCollection from '@/components/FlockCompnent/EggCollection';
import FlockHealth from '@/components/FlockCompnent/Health';
import FlockIncomeExpense from '@/components/FlockCompnent/IncomeExpense';

const FlockDetails = () => {
    const { id } = useParams();
    const pageType = useSearchParams().get('type');
    const pageTitle = flockOptions.filter((ele: any) => ele.value === pageType)[0].label
    const componentRender = (type: any) => {
        switch (type) {
            case flockOptions[0].value:
                return <FlockAddReduce flockId={id} />
            case flockOptions[1].value:
                return <FlockEggCollection flockId={id} />
            case flockOptions[2].value:
                return <FlockFeeding flockId={id} />
            case flockOptions[3].value:
                return <FlockHealth flockId={id} />
            case flockOptions[4].value:
                return <FlockIncomeExpense flockId={id} />
            default:
                return null;
        }
    }


    return (
        <React.Fragment>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            {componentRender(pageType)}
        </React.Fragment>
    )
}

export default FlockDetails