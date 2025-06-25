import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Home(){
    const move_page = useNavigate();
    const [isValid, setIsValid] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            alert('로그인이 필요합니다.');
            window.location.href = '/login';
            return;
        }
        // JWT 유효성 검증 요청
        fetch('http://54.180.175.139:9131/api/auth', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(res => {
            if (res.ok) {
                setIsValid(true);
            } else {
                alert('세션이 만료되었거나 유효하지 않은 토큰입니다.');
                localStorage.removeItem('jwt');
                window.location.href = '/login';
            }
        })
        .catch(() => {
            alert('서버 오류. 다시 로그인 해주세요.');
            localStorage.removeItem('jwt');
            window.location.href = '/login';
        })
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>로딩 중...</div>;
    if (!isValid) return null;

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