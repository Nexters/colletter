import React from 'react';
import styled from 'styled-components';
import arrow from '../../img/ic-arrow-dropdown.png';
import Popup from '../popup/popup';
import jQuery from "jquery";
import { Card, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import heart from '../../img/ic-heart-default.png';
import heartPicked from '../../img/ic-heart-picked.png';

let heartImg = heart;

const $ = jQuery;

const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    margin: 180px auto 0px auto;
    flex-direction: column;
    width: 1280px;
`;
const Title = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 44px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.41;
    letter-spacing: normal;
    color: #121212;
    margin-bottom: 55px;
`;

const TitleCategory = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.08;
    letter-spacing: normal;
    color: #a2a2a2;
    margin-right: 30px;
`;

const PickCategory = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.08;
    letter-spacing: normal;
    color: #3bd277;
    margin-right: 30px;
`;

const DivCategory = styled.div`
    display: flex;
    flex-direction: colum;
    margin-bottom: 130px;
`;

const RegisterDiv = styled.div`
    width: 110px;
    height: 20px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #b8b8b8;
`;

const CountNews = styled.div`
    height: 36px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #0f0f0f;
    margin-bottom:22px;
`;

const Rectangle = styled.div`
    width: 190px;
    height: 50px;
    border-radius: 2px;
    background-color: #3bd277;
    position: relative;
    float: right;
    display: flex;
`;

const RectangleSpan = styled.div`
    width: 60px;
    height: 24px;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    margin-left:20px;
    margin-top:13px;
    margin-bottom:13px;
`;

const ArrowStyle = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-top: 15px;
    margin-left: 64px;
`;

const CardCategory = styled.span`
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #3bd277;
`;

const CardCount = styled.span`
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #686868;
    margin-left : 15px;
`;

class category extends React.Component {
    constructor(props) {
        let search = new URLSearchParams(window.location.search);
        let id = search.get("id");
        if (id === null) {
            id = 1;
        }
        super(props);
        this.state = {
            showPopup: false,
            categoryData: [],
            categoryNews: [],
            categoryId: parseInt(id),
            height: '300px',
            url: 'https://colletter.com/api',
            userHeader: localStorage.getItem('access_token'),
            arrBookmarkNewId: [],
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    categoryChangeId(id) {
        this.setState({
            categoryId: id
        });

        //카테고리
        axios.get(this.state.url + `/news/category/` + id).then(
            r => {
                this.setState({
                    categoryNews: r.data
                });
            }
        );
    }

    changeId(id) {
        this.setState({
            popupId: id,
            showPopup: !this.state.showPopup
        });

        if (this.state.showPopup) {
            $('#appNav').show();
        } else {
            $('#appNav').hide();
        }
    }


    componentDidMount() {
        $('#categoryNav').hide();
        $('#appNav').show();

        $('#btnShowPopup').hide();

        $('.cardBody').click(function () {
            $('#btnShowPopup').trigger('click');
        });

        axios.get(this.state.url + `/category`).then(
            r => {
                this.setState({
                    categoryData: r.data
                });
            }
        );

        //카테고리
        axios.get(this.state.url + `/news/category/` + this.state.categoryId).then(
            r => {
                this.setState({
                    categoryNews: r.data
                });
            }
        );

        //북마크
        if (this.state.userHeader) {
            let url = this.state.url + `/users/bookmark`;
            axios({
                method: 'get',
                url,
                headers: {'Content-Type': 'application/json', 'Bearer': this.state.userHeader}
            }).then(
                r => {
                    this.setState({userBookmark: r.data});
                    let arr = [];
                    this.state.userBookmark.forEach(el => arr.push(el.id));
                    this.setState({arrBookmarkNewId: arr});
                }
            );
        }
    }


    bookmark(id, e) {
        e.stopPropagation();
        let url = this.state.url + `/users/bookmark/${id}`;
        axios({
            method: 'put',
            url,
            headers: {'Content-Type': 'application/json', 'Bearer': this.state.userHeader}
        }).then(
            r => {
                window.location.reload();
            }
        );
    }


    render() {
        $(window).scroll(function (event) {
            if ($(this).scrollTop() > 400) {
                $('#categoryNav').show();
                $('#appNav').hide();
            } else {
                $('#categoryNav').hide();
                $('#appNav').show();
            }
        });

        let categoryCount = this.state.categoryNews.length;
        return (
            <div>
                <Navbar id="categoryNav" fixed="top">
                    {this.state.categoryData.map((categoryData) => {
                        if (categoryData.id === this.state.categoryId) {
                            return <PickCategory key={categoryData.id}
                                                 id={categoryData.id}
                                                 onClick={this.changeId.bind(this, categoryData.id)}>
                                        <span className="spnCategory">{categoryData.nameKR}</span>
                                    </PickCategory>
                        } else {
                            return <TitleCategory key={categoryData.id}
                                                  onClick={this.changeId.bind(this, categoryData.id)}
                                                  id={categoryData.id}>
                                        <span className="spnCategory"> {categoryData.nameKR}</span>
                                    </TitleCategory>
                        }
                    })}
                </Navbar>

                <Container>
                    <Title>
                        원하는 주제를 선택하고<br/>
                        지식을 넓혀보세요
                    </Title>
                    <DivCategory>
                        {this.state.categoryData.map((categoryData) => {
                            if (categoryData.id === this.state.categoryId) {
                                return <PickCategory key={categoryData.id}
                                                     id={categoryData.id}
                                                     onClick={this.categoryChangeId.bind(this, categoryData.id)}>
                                            <span className="spnCategory">{categoryData.nameKR}</span>
                                    </PickCategory>
                            } else {
                                return <TitleCategory key={categoryData.id}
                                                      onClick={this.categoryChangeId.bind(this, categoryData.id)}
                                                      id={categoryData.id}>
                                            <span className="spnCategory"> {categoryData.nameKR}</span>
                                    </TitleCategory>
                            }
                        })}
                    </DivCategory>
                    <RegisterDiv>
                        등록 뉴스레터
                    </RegisterDiv>
                    <CountNews>
                        {categoryCount}
                        <Rectangle>
                            <RectangleSpan>최신순 </RectangleSpan>
                            <ArrowStyle src={arrow}/>
                        </Rectangle>
                    </CountNews>
                    <CardColumns className="list" style={{marginBottom: '200px'}}>
                        {this.state.categoryNews.map((news) => {
                            if (this.state.arrBookmarkNewId.includes(news.id)) heartImg = heartPicked;
                            else heartImg = heart;
                            return <Card style={{width: '415px', height: '415px'}} key={news.id}>
                                <Card.Body style={{ cursor: 'pointer' }} data-id={news.id} onClick={this.changeId.bind(this, news.id)}>
                                    <Card.Img variant="right" className="heartImg" src={heartImg} onClick={this.bookmark.bind(this, news.id)}/>
                                    <Card.Img variant="right" className="cardImg" src={news.image}/>

                                    <Card.Title className="cardTitle">{news.name}</Card.Title>
                                    <Card.Text className="cardText cardMinTitle">{news.content}</Card.Text>

                                    <Card.Text className="cardText">
                                        <CardCategory>{news.category.nameKR}</CardCategory>
                                        <CardCount>좋아요 <span style={{color: '#424242', fontWeight: '300'}}>{news.bookmarkedCount}</span></CardCount>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        })}
                    </CardColumns>
                </Container>
                <button id="btnShowPopup" onClick={this.togglePopup.bind(this)} data-id='0'>show popup</button>
                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        popupId={this.state.popupId}
                        bookmark={(this.state.arrBookmarkNewId.includes(this.state.popupId)) ? true : false}
                        url={this.state.url}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default category;

