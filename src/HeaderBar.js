
const HeaderBar = () => {
    return (
        <div class="box">
            <div class="innerbox">
                <div class="firstbox">
                    <div class="iconsubbox">
                        <img style={{ width: "150px" }}
                            src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'} alt="icons" />

                    </div>
                    <div class="subboxpar">
                        <div class="subbox">Movies</div>
                        <div class="subbox">TV Shows</div>
                        <div class="subbox">People</div>
                        <div class="subbox">More</div>
                    </div>
                </div>
                <div class="secondbox"></div>
                <div class="thirdbox">
                    <div class="subboxpar1">
                        <div class="subbox1">+</div>
                        <div class="subbox2">EN</div>
                        <div class="subbox">Login</div>
                        <div class="subbox">More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderBar;