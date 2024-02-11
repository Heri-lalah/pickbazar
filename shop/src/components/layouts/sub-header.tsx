import MenuHover from "./menu/menu-hover"
import StaticMenu from "./menu/static-menu"

export const SubHeader = () => {

    return (
        <ul
        // className='pb-3 shrink-0 items-center justify-center space-x-7 lg:flex 2xl:space-x-10'
        className="flex w-full transform-gpu items-center justify-center bg-light space-x-7 lg:flex 2xl:space-x-10 transition-transform duration-300 lg:h-22 lg:px-4 xl:px-8 lg:border-0 lg:shadow-none"
        >
            <StaticMenu/>
            <MenuHover/>
        </ul>
    )
}
