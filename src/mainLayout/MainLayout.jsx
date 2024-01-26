import React from 'react';
import SideBar from '../Components/SideBar';
import WorkArea from '../Components/WorkArea';

const MainLayout = () => {
    return (
        <div className='h-[90vh] w-[90vw] bg-slate-500 flex rounded-2xl'>
            <SideBar></SideBar>
            <WorkArea></WorkArea>
        </div>
    );
};

export default MainLayout;