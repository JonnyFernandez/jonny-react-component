import style from './Dropdown.module.css'


const Dropdown = () => {
    return (
        <>
            <div className={style.body}>
                <nav>
                    <div className={style.logo}>
                        {/* <span className={style.materialSymbolsOutlined}> menu </span> */}
                        <img src="logo.svg" />
                        <h2>Price&Cost</h2>
                    </div>
                    <div className={style.navRight}>
                        {/* <span className={style.materialSymbolsOutlined}> help </span>
                        <span className={style.materialSymbolsOutlined}> settings </span> */}
                        <input type="text" />
                        <div className={style.dropdown}>
                            <button className={style.materialSymbolsOutlined1}>apps</button>
                            <div className={style.menu}>
                                <button>
                                    <img src="joe.png" />
                                    <span>Account</span>
                                </button>
                                <button>
                                    <span></span>
                                    <span>Search</span>
                                </button>
                                <button>
                                    <span className={style.spanMap}> maparico </span>
                                    <span>Maps</span>
                                </button>
                                <button>
                                    <span className={style.spanYoutube} ></span>
                                    <span>YouTube</span>
                                </button>
                                <button>
                                    <span className={style.spanPlay}></span>
                                    <span>Play</span>
                                </button>
                                <button>
                                    <span className={style.spanNews}></span>
                                    <span>News</span>
                                </button>
                                <button>
                                    <span className={style.spanGmail}></span>
                                    <span>Gmail</span>
                                </button>
                                <button>
                                    <span className={style.spanMeet}></span>
                                    <span>Meet</span>
                                </button>
                                <button>
                                    <span className={style.spanChat}></span>
                                    <span>Chat</span>
                                </button>
                                <button>
                                    <span className={style.spanContacts}></span>
                                    <span>Contacts</span>
                                </button>
                                <button>
                                    <span className={style.spanDrive}></span>
                                    <span>Drive</span>
                                </button>
                                <button>
                                    <span className={style.spanCalandar}></span>
                                    <span>Calendar</span>
                                </button>
                                <button>
                                    <span className={style.spanTranslate}></span>
                                    <span>Translate</span>
                                </button>
                                <button>
                                    <span className={style.spanPhotos}></span>
                                    <span>Photos</span>
                                </button>
                                <button>
                                    <span className={style.spanAdCenter}></span>
                                    <span>Ad Centre</span>
                                </button>
                                <button>
                                    <span className={style.spanShopping}></span>
                                    <span>Shopping</span>
                                </button>
                            </div>
                        </div>
                        {/* <img src="joe.png" /> */}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Dropdown