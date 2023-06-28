import { useEffect, useRef, useState } from 'react'
function DropdownMenu() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const mobileMenu = (

        // <Menu>
        //     <MenuButton
        //         as={IconButton}
        //         aria-label='Options'
        //         icon={<HamburgerIcon />}
        //         variant='outline'
        //         style={{
        //             backgroundColor: "rgb(234, 234, 234)",
        //             borderRadius: "0 30% 30% 0",
        //         }}
        //     />
        //     <MenuList as={"ul"}>
        //         <MenuItem as={"li"} style={{ ...styleList, }} className={'PROJECT'} onClick={() => scrollToSection(project)} >WORK</MenuItem>
        //         <MenuItem as={"li"} style={{ ...styleList, }} className={'ABOUT'} onClick={() => scrollToSection(about)} >ABOUT</MenuItem>
        //         <MenuItem as={"li"} style={{ ...styleList, }} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONTACT</MenuItem>
        //     </MenuList>
        // </Menu>

        <div>
            {/* {({ isOpen }) => (
                <>
                    <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                        {isOpen ? <CloseButton /> : <HamburgerIcon />}
                    </MenuButton>
                    <ul style={{ display: "flex" }} >
                        <li style={styleList} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
                        <li style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
                        <li style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
                    </ul>
                </>
            )} */}



            {/* <div className={hamburger ? 'dropmenu' : 'dropmenu active'}>
                   
                    <div className={hamburger ? 'rest' : 'rest active'} onClick={closeHamburger}></div>

                    <div className={hamburger ? "hamburger" : "hamburger active"}  >
                        <div className={blur ? 'bars1 active' : 'bars1'} onClick={showHamburger}>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                        </div>
                        <div className={hamburger ? "sidebar" : "sidebar active"} >
                          <div className={blur ? 'bars2 active' : 'bars2'} onClick={showHamburger}>
                            <span  className='bar2'></span>
                            <span  className='bar2'></span>
                            <span className='bar2'></span>
                        </div>
                            {ulHolder}
                        </div>
                    </div>


                </div> */}

        </div>



    )
    const barStyle = {
        display: "block",
        width: "35px",
        height: "3px",
        margin: "5px auto",
        backgroundColor: "#ececec",
        transition: "transform 0.3s ease-in-out"
    }
    const hamburger = (
        <div>
            <span style={barStyle}></span>
            <span style={barStyle}></span>
        </div>
    )
    const x = (
        <div>
            <span style={{...barStyle,  transform: "translateY(4px) rotate(45deg)"}}></span>
            <span style={{...barStyle,  transform: "translateY(-4px) rotate(-45deg)"}}></span>
        </div>
    )



    return (
        <div>
            <button
                onClick={() => setNavbarOpen((prev) => !prev)}
            >
                {navbarOpen ? x : hamburger}
            </button>
            <ul>
                {/* ... */}
            </ul>
        </div>

    );
}

export default DropdownMenu;
