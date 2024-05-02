
'use client'
import { Icon } from '@iconify/react';
import Link from 'next/link';


type LinkBarProps = {
    target?: {
        url: string;
        name: string;
        icon: {
            name: string;
            className: string;

        }
    }
}

function LinkBar({ target }: LinkBarProps) {
    return (
        <Link href={target?.url ? target?.url : ''} target='_blank'> 
            <article className="flex items-center justify-between my-5 py-2 px-4 rounded-full
        bg-white shadow-md transition-transform duration-300 transform hover:scale-105
        hover:shadow-lg hover:bg-gray-100 cursor-pointer
        ">
                {target?.icon ? (
                    <Icon icon={target.icon.name} className={target.icon.className} />
                ) : (
                    <div className="w-10" />

                )}

                <h1>
                    {target?.name}
                </h1>

                <div className="w-10" />
            </article>
        </Link>
    );
}

export default LinkBar;