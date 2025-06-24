import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MainLeft() {
    const [subjects, setSubjects] = useState([]);
    const move_page = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
            // 여기에 API 호출을 통해 과목 정보를 가져오는 로직을 추가합니다.
            // 예시로 더미 데이터를 사용합니다.
            const fetchSubjects = async () => {
                // 실제 API 호출 예시
                // const response = await fetch('/api/subjects');
                // const data = await response.json();
                // setSubjects(data);
    
                // 더미 데이터
                const dummyData = [
                    { id: 1, name: '운영체제' },
                    { id: 2, name: '서양철학' },
                    { id: 3, name: '동양사상' },
                    { id: 4, name: '프로그래밍 및 실습' }
                ];
                setSubjects(dummyData);
            };
    
            fetchSubjects();
        }, []);

    return (
        <div className="main-left">
            <div className="main-left-logo">Template Logo</div>
            <ul className="main-left-list">
                <p onClick={() => move_page('/main')}>대시보드</p>
                <p onClick={() => setDropdownOpen(!dropdownOpen)}>과목목록</p>
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        {subjects.map((subject) => (
                            <p key={subject.id} onClick={() => move_page(`/subject/${subject.id}`)} className="dropdown-item">
                                {subject.name}
                            </p>
                        ))}
                    </div>
                )}
            </ul>
        </div>
    );
}

export default MainLeft;
