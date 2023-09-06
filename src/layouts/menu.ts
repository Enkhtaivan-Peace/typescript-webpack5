class Menu {
    private menuItems: HTMLLIElement[];
    private menuId: string
    constructor( menuId: string ) {
        this.menuId = menuId
        this.menuItems = Array.from(document.querySelectorAll(`#${menuId} li`))
    }

    private setActiveMenuItem(menuItem: HTMLLIElement) : void {
        this.menuItems.forEach( item => item.classList.remove('active'))
        menuItem.classList.add('active')
    }

    private setInitialActiveMenu() : void {
        const firstMenu:HTMLLIElement = this.menuItems[0]
        firstMenu.classList.add('active')
    }

    private handleMenuItemClick(event:MouseEvent):void {
        const menuItem = event.target as HTMLLIElement;
        this.setActiveMenuItem(menuItem)
    }

    public initialize():void {
        this.setInitialActiveMenu()
        this.menuItems.forEach( menuItem => {
            menuItem.addEventListener('click', this.handleMenuItemClick.bind(this))
        })
    }
}

export default Menu;