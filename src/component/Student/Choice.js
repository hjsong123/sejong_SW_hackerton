import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";

function Choice(){
        const [questions, setQuestions] = useState([
        {
            "question": [
                {
                "questionId": "1",
                "questionText": "하루에 몇 시간 정도 공부하나요?",
                "questionDate": "2025-06-01",
                "questionType": "TYPE1"
                },
                {
                "questionId": "2",
                "questionText": "당신이 선호하는 학습 스타일은 무엇인가요?",
                "questionDate": "2025-06-02",
                "questionType": "TYPE2"
                },
                {
                "questionId": "3",
                "questionText": "진로 선택 시 가장 중요하게 생각하는 요소는?",
                "questionDate": "2025-06-03",
                "questionType": "TYPE3"
                },
                {
                "questionId": "4",
                "questionText": "현재 희망하는 전공은 무엇인가요?",
                "questionDate": "2025-06-04",
                "questionType": "TYPE1"
                },
                {
                "questionId": "5",
                "questionText": "전공 선택에 있어 부모님의 영향이 있었나요?",
                "questionDate": "2025-06-05",
                "questionType": "TYPE2"
                }
            ]
        }

    ]);

    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const move_page = useNavigate();
    
      
      useEffect(() => {
        const token = localStorage.getItem("jwt");

        fetch("http://54.180.175.139:9131/api/questions/get", {
            method: "GET",
            headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
            .then((res) => {
            if (res.status === 401) {
                alert("로그인 정보가 만료되었습니다.");
                throw new Error("Unauthorized");
            }
            return res.json();
            })
            .then((data) => {
            setQuestions(data);
            console.log(data);
            setLoading(false);
            })
            .catch((err) => {
            console.error("질문 목록을 불러오는 데 실패:", err);
            });
        }, []);

    return(
        <div className="choice-container">
            <Header></Header>
            <div className="choice-box">
                <div class="test-list-container">
                    <div class="test-header">
                        <div class="test-title">
                        <p class="semester">2025-1</p>
                        <h2>Test List</h2>
                        </div>
                        <img src="pencil.png" alt="연필" class="header-icon" />
                    </div>

                    <div class="test-group">
                        <p class="group-title">Type 1 Test</p>
                        <div class="week-buttons">
                        <button onClick={() => {move_page("/student/survey", { state: [questions[0], questions[1], questions[2]]})}}>week 02</button><button>week 04</button><button>week 06</button>
                        <button>week 08</button><button>week 10</button><button>week 12</button>
                        <button>week 14</button><button>week 16</button>
                        </div>
                    </div>

                    <div class="test-group">
                        <p class="group-title">Type 2 Test</p>
                        <div class="week-buttons">
                        <button onClick={() => {move_page("/student/survey", 
                            { state: [questions[3], questions[4], questions[5]]})}}>week 06</button><button>week 14</button>
                        </div>
                    </div>

                    <div class="test-group">
                        <p class="group-title">Type 3 Test</p>
                        <div class="week-buttons">
                        <button>week 16</button>
                        </div>
                    </div>
                    </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Choice;