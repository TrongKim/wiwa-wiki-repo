'use client'
import React, { useEffect, useState } from 'react'

export function ScrollTopIcon() {
    const [stateShowIcon, setStateShowIcon] = useState<boolean>(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setStateShowIcon(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const onClickScrollTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {
                stateShowIcon && <button className="fixed right-[20px] bottom-[20px] rounded-full bg-[#667a91] p-2 overflow-hidden flex items-center justify-center cursor-pointer pointer-events-auto" onClick={onClickScrollTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" height="25px" width="25px" version="1.1" id="Icons" viewBox="0 0 32 32" xmlSpace="preserve">
                        <g>
                            <path d="M24.4,24c-0.9,0-1.8-0.3-2.5-1l-5.8-5.7c-0.1-0.1-0.2-0.1-0.3,0L10.1,23c-1.4,1.4-3.6,1.4-5,0c-0.7-0.7-1-1.6-1-2.5   c0-1,0.4-1.8,1-2.5l9.4-9.3c0.9-0.9,2.3-0.9,3.1,0l9.4,9.3c0.7,0.7,1,1.6,1,2.5c0,1-0.4,1.8-1,2.5C26.2,23.7,25.3,24,24.4,24z" />
                        </g>
                    </svg>
                </button>
            }

        </>
    )
}
