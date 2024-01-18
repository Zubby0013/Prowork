import { FC } from "react";

export const  SiderNav:FC<iNav> = ({icon, name,icon2}) => {
    return <div className=' flex justify-between items-center w-full cursor-pointer h-[40px] rounded-lg'>
        <div className=' flex gap-3'>
        <div>
            {icon}
        </div>
        <div className=' text-[18px]'>{name}</div>
        </div>
        <div>{icon2}</div>
    </div>;
}