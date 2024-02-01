import { Skeleton } from "antd";
import React from "react";

export default function SkeletonFilter() {

    return (
        <div className="w-full h-fit">
            <div className="w-full grid grid-cols-2 gap-4 ">
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />

                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
            </div>
            <div className="w-full mt-10">
                <Skeleton
                    active
                    paragraph={{ rows: 0 }}
                />
            </div>
            <div className="w-full grid grid-cols-1 gap-4">
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
            </div>
            <div className="w-full mt-10">
                <Skeleton
                    active
                    paragraph={{ rows: 5 }}
                />
            </div>
            <div className="w-full mt-10">
                <Skeleton
                    active
                    paragraph={{ rows: 0 }}
                />
            </div>
            <div className="w-full  grid grid-cols-6 gap-4">
                {Array.from({ length: 12 }, (_, index) => (
                    <Skeleton.Avatar key={index} size={'default'} shape="circle" active block={true} />
                ))}

            </div>
            <div className="w-full mt-10">
                <Skeleton
                    active
                    paragraph={{ rows: 0 }}
                />
            </div>
            <div className="w-full grid grid-cols-3 gap-4">
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
                <Skeleton.Button active size={'large'} shape={'default'} block={true} />
            </div>
        </div>
    );
}
