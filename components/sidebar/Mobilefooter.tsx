"use client"
import useConversation from '@/app/hooks/useConversation'
import useRoutes from '@/app/hooks/useRoutes'
import React from 'react'
import MobileItem from './MobileItem'

const Mobilefooter = () => {
    const routes = useRoutes()
    const { isOpen } = useConversation()

    if (isOpen) {
        return null
    }

    return (
        <div className='fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden'>
            {routes.map((item) => (
                <MobileItem
                    key={item.label}
                    href={item.href}
                    active={item.active}
                    icon={item.icon}
                    onClick={item.onClick}
                />
            ))}
        </div>
    )
}

export default Mobilefooter
