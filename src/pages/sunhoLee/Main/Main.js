import React from 'react';
import ReactDOM from "react-router-dom";
import "./Main.scss";
import "../../styles/common.css";

class Main extends React.Component {
    render(){
        return (
        <>
    <div class="Main">
    <nav>
        <div class="wrap">
            <div class="logo">
                <a href="main.html">Westagram</a>
            </div>
            <div class="search">
                <input type="text" id="searchTxt" placeholder="검색" />
            </div>
            <div class="user">
                <a href="#" class="around">
                    <img src="/images/explore.png" alt="explore" />
                </a>
                <a href="#" class="like">
                    <img src="/images/heart.png" alt="heart" />
                </a>
                <a href="#" class="myPage">
                    <img src="/images/profile.png" alt="profile" />
                </a>
            </div>
        </div>
    </nav>
    <main>
        <section>
            <div class="contents">
                <div class="feed">
                    <div class="profile">
                        <div class="profileImg img-box">
                            <img src="/images/img7.jpeg" alt="images" />
                        </div>
                        <div class="name">dltjsgho</div>
                        <div class="more">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div class="feedImg img-box">
                        <img src="/images/img1.jpeg" alt="images" />
                    </div>
                    <div class="click-line">
                        <div class="click-inner">
                            <div class="heart img-box">
                            <img src="/images/heart.png" alt="heart" />
                            </div>
                            <div class="message img-box">
                            <img src="/images/message.png" alt="message" />
                            </div>
                            <div class="send img-box">
                            <img src="/images/send.png" alt="send" />
                        </div>
                    </div>
                    <div class="save">
                        <img src="/images/ribbon.png" alt="ribbon" />
                    </div>
                    </div>
                    <div class="comment-view">
                        <p class="likeText">좋아요 563개</p>

                        <ul class="comments">
                            <li><b>hellow&nbsp;</b>모야야야야</li>
                            
                        </ul>

                        <p class="date">1일 전</p>
                    </div>
                    <div class="write">
                        <div class="writeInner">
                            <button class="emoticon">
                                <i class="far fa-smile"></i>
                            </button>
                            <input class="post" name="post" placeholder="댓글 달기..." />
                            <button class="submit" disabled >게시</button>
                        </div>
                    </div>
                </div>
                <div class="feed">
                    <div class="profile">
                        <div class="profileImg img-box">
                            <img src="/images/img7.jpeg" alt="images" />
                        </div>
                        <div class="name">dltjsgho</div>
                        <div class="more">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div class="feedImg img-box">
                        <img src="/images/img2.jpeg" alt="images" />
                    </div>
                    <div class="click-line">
                        <div class="click-inner">
                            <div class="heart img-box">
                                <img src="/images/heart.png" alt="images" />
                            </div>
                            <div class="message img-box">
                                <img src="/images/message.png" alt="images" />
                            </div>
                            <div class="send img-box">
                                <img src="/images/send.png" alt="images" />
                        </div>
                    </div>
                    <div class="save">
                        <img src="/images/ribbon.png" alt="images" />
                    </div>
                    </div>
                    <div class="comment-view">
                        <p class="likeText">좋아요 563개</p>

                        <ul class="comments">
                            <li><b>hellow&nbsp;</b>모야야야야</li>
                            
                        </ul>

                        <p class="date">1일 전</p>
                    </div>
                    <div class="write">
                        <div class="writeInner">
                            <button class="emoticon">
                                <i class="far fa-smile"></i>
                            </button>
                            <input class="post" name="post" placeholder="댓글 달기..." />
                            <button class="submit" disabled >게시</button>
                        </div>
                    </div>
                </div>               
            </div>
        </section>
        <aside>
            <div class="toMyPage">
                <div class="myHome">
                    <div class="myHomeImg img-box">
                        <img src="/images/img7.jpeg" alt="images" />
                    </div>
                    <div class="myName">
                        <p>dltjsgho</p>
                        <p>이선호</p>
                    </div>
                    <a href="#">전환</a>
                </div>
            </div>
            <div class="story">
                <div class="story-txt">
                    <p>스토리</p>   
                    <p>모두 보기</p>
                </div>
                <div class="people">
                    <div class="people-img img-box">
                        <img src="/images/img6.jpeg" alt="images" />
                    </div>
                    <div class="people-name">
                        <p>dltjsgho</p>
                        <p>이선호</p>
                    </div>
                </div>
                <div class="people">
                    <div class="people-img img-box">
                        <img src="/images/img4.jpeg" alt="images" />
                    </div>
                    <div class="people-name">
                        <p>dltjsgho</p>
                        <p>이선호</p>
                    </div>
                </div>
                <div class="people">
                    <div class="people-img img-box">
                        <img src="/images/img.jpeg" alt="images" />
                    </div>
                    <div class="people-name">
                        <p>wecode</p>
                        <p>위코드</p>
                    </div>
                </div>
                <div class="people">
                    <div class="people-img img-box">
                        <img src="/images/img7.jpeg" alt="images" />
                    </div>
                    <div class="people-name">
                        <p>dltjsgho</p>
                        <p>이선호</p>
                    </div>
                </div>
                
            </div>
            <div class="recommend">
                <div class="recommend-txt">
                    <p>회원님을 위한 추천</p>   
                    <p>모두 보기</p>
                </div>
                <div class="people">
                    <div class="people-img img-box">
                        <img src="/images/img7.jpeg" alt="images" />
                    </div>
                    <div class="people-name">
                        <p>dltjsgho</p>
                        <p>이선호</p>
                    </div>
                </div>
                <div class="people">
                    <div class="people-img img-box">
                        <img src="/images/img7.jpeg" alt="images" />
                    </div>
                    <div class="people-name">
                        <p>dltjsgho</p>
                        <p>이선호</p>
                    </div>
                </div>
                <div class="people">
                    <div class="people-img img-box">
                        <img src="/images/img7.jpeg" alt="images" />
                    </div>
                    <div class="people-name">
                        <p>dltjsgho</p>
                        <p>이선호</p>
                    </div>
                </div>
            </div>
            <blockquote>
                <ul>
                    <li>소개</li>
                    <li>도움말</li>
                    <li>도움말</li>
                    <li>홍보 센터</li>    
                    <li>API</li>
                    <li>채용 정보</li>
                    <li>개인정보처리방침</li>
                    <li>약관</li>
                    <li>위치</li>
                    <li>인기 계정</li>
                    <li>해시태그</li>
                    <li>언어</li>
                </ul>
                <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
            </blockquote>
        </aside>
    </main>
    </div>
        </>)
    }
}

export default Main;