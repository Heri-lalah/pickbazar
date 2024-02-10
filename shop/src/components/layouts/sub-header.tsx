import MenuHover from "./menu/menu-hover"
import StaticMenu from "./menu/static-menu"

export const SubHeader = () => {

    return (
        <ul className='pb-3 shrink-0 items-center justify-center space-x-7 lg:flex 2xl:space-x-10'>
            <StaticMenu/>
            <MenuHover/>
        </ul>
    )
}
