import { useEffect, useState } from 'react';
import MainHeader from './MainHeader';
import MainLeft from './MainLeft';

function Main() {
    const [loading, setLoading] = useState(true);
    const [isValid, setIsValid] = useState(false);

    // useEffect(() => {
    //     const token = localStorage.getItem('jwt');
    //     if (!token) {
    //         alert('로그인이 필요합니다.');
    //         window.location.href = '/login';
    //         return;
    //     }
    //     // JWT 유효성 검증 요청
    //     fetch('http://54.180.175.139:9131/api/auth', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         },
    //     })
    //     .then(res => {
    //         if (res.ok) {
    //             setIsValid(true);
    //         } else {
    //             alert('세션이 만료되었거나 유효하지 않은 토큰입니다.');
    //             localStorage.removeItem('jwt');
    //             window.location.href = '/login';
    //         }
    //     })
    //     .catch(() => {
    //         alert('서버 오류. 다시 로그인 해주세요.');
    //         localStorage.removeItem('jwt');
    //         window.location.href = '/login';
    //     })
    //     .finally(() => setLoading(false));
    // }, []);

    // if (loading) return <div>로딩 중...</div>;
    // if (!isValid) return null;

    return (
        <div className="main">
      <MainLeft />
      <div className="main-right">
        <MainHeader />
        <div className="main-right-middle">
          <div className="main-right-mywork">
            <h2>Welcome to the Dashboard</h2>
            <ul className="main-right-mywork-list">
                {/* 여기는 동적으로 map 함수통해서 작업 목록을 출력해야 합니다. */}
                <li className="main-right-mywork-item">My Work 1</li>
                <li className="main-right-mywork-item">My Work 2</li>
                <li className="main-right-mywork-item">My Work 3</li>
                <li className="main-right-mywork-item">My Work 4</li>
            </ul>
            </div>
            <div className="main-right-progress">
                <h2>Progress Overview</h2>
                <div className="main-right-progress-chart">
                    {/* 여기는 차트나 그래프를 넣을 수 있는 공간입니다. */}
                    <p>Chart will be displayed here.</p>
                </div>
            </div>
        </div>
        <div className="main-right-footer">
          <h2>예정된 팀플 모임</h2>
        </div>
      </div>
    </div>
    );
}

export default Main;