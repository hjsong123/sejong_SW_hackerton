import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Home(){
    const move_page = useNavigate();

    return(
        <div id="home-container">
                <Header></Header>
            <div id="home-north">
                <div id="home-middle1">
                    <h2>Majorly에 오신것을 환영합니다.</h2>
                    <div id="my-info">
                        <div className="my-info-box">
                            <div>
                                <p>다음 테스트 까지,</p>
                                <p>D-45(동적처리)</p>
                            </div>
                        </div>
                        <div className="my-info-box">
                            <div>
                                <p>현재 nn님의 적합 전공은</p>
                                <p>공과계열(동적처리)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-middle23">
                    <h2>최근 테스트 결과 보기</h2>
                    <div id="my-test-view">
                        <div className="my-view-box">
                        </div>
                        <div className="my-view-box">
                        </div>
                    </div>
                </div>
                <div className="home-middle23">
                    <h2>이번 달 추천 전공 활동</h2>
                    <div id="my-active-view">
                        <div className="my-view-box">
                        </div>
                        <div className="my-view-box">
                        </div>
                    </div>
                </div>
                <div class="major-compare-section">
                    <h3>전공 비교 보기</h3>
                    <div class="major-compare-cards">
                        <div class="compare-card">
                        <div class="compare-text">
                            <p class="major">환경융합공학과</p>
                            <p class="vs">VS</p>
                            <p class="major">지구자원시스템공학과</p>
                        </div>
                        <div class="arrow">➡</div>
                        </div>
                        <div class="compare-card">
                        <div class="compare-text">
                            <p class="major">건축학과</p>
                            <p class="vs">VS</p>
                            <p class="major">건설환경공학과</p>
                        </div>
                        <div class="arrow">➡</div>
                        </div>
                    </div>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;