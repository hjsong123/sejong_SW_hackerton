import { useNavigate } from "react-router-dom";

function Header(){

    const move_page = useNavigate();
    return(
        <div id="home-header">
            <div class="header-left">
                <span class="logo">Majorly</span>
                <nav class="nav-menu">
                    <span onClick={() => move_page("/student/survey")}>진로 적성 테스트</span>
                    <span onClick={() => move_page("/student/major-info")}>학과 서베이 추천</span>
                </nav>
            </div>
            <div class="header-right">
                <span>🔔</span>
                <span>👤</span>
            </div>
        </div>
    )
}

export default Header;