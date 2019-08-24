import React from 'react';
import styled from 'styled-components';
import video from "../../video/about.mp4";
import group from "../../img/group-8.png";
import oval1 from "../../img/oval-1.png";
import oval2 from "../../img/oval-2.png";
import soon from "../../img/soon-2.png";
import jQuery from "jquery";

let play = false;

const $ = jQuery;

const WWA = styled.div`
    margin-top: 80px;
`;

const OM = styled.div`
    width: 100%;
    height: 1024px;  
    background-color: rgba(32, 36, 53, 0.02);
`;

const Title = styled.div`
    padding-top: 80px;
    margin-left: 320px;
    width: 1280px;
    height: 26px;
    font-family: Baskerville;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    font-stretch: normal;
    line-height: 1.3;
    letter-spacing: normal;
    color: #3bd277;
`;

const Text1 = styled.div`
    padding-top: 226px;
    padding-bottom: 222px;
    object-fit: contain;
    float:left;
    font-family: Montserrat;
    font-size: 80px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: rgba(32, 36, 53, 0.1);
`;

const Bold1 = styled.span`
    color: #202435;
`;

const Text2 = styled.div`
    padding-top: 412px;
    margin-left: 86px;  
    object-fit: contain;
    float:left;
    font-family: NotoSansCJKkr;
    font-size: 56px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #202435;
`;

const Bold2 = styled.span`
    font-weight: bold;
`;

const WWD = styled.div`
    width: 100%;
    height: 1024px;  
    background-color: #202435;
    clear: both;
`;

const Collect = styled.div`
    padding-top: 246px;
    margin-bottom: 352px;
    width: 300px;
    height: 320px;
    float:left;
`;

const Editor = styled.div`
    padding-top: 246px;
    margin-left: 100px;
    width: 300px;
    height: 320px;
    float:left;
`;

const Subscribe = styled.div`
    padding-top: 246px;
    margin-left: 100px;
    width: 300px;
    height: 320px;
    float:left;
`;

const Main = styled.div`
    width: 181px;
    height: 52px;
    margin-top: 32px;
    margin-bottom: 22px;
    font-family: Roboto;
    font-size: 28px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.93;
    letter-spacing: normal;
    color: #ffffff;
`;

const Sub = styled.div`
    width: 300px;
    height: 72px;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ffffff;
`;

const CS = styled.div`
    width: 100%;
    background-color: #ffffff;
    clear: both;
`;

const Input = styled.input`
    padding-left: 20px;
    margin-bottom: 12px;
    display: block;
    width: 560px;
    height: 64px;
    border: solid 1px #e7e7e7;
    background-color: #ffffff;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.63;
    letter-spacing: normal;
    color: #b8b8b8;
`;

const Button = styled.button`
    display: block;
    width: 560px;
    height: 72px;
    background-color: #3bd277;
    border: 0px;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.63;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`;

const CsContainer = styled.div`
    margin: 232px; 
    width: fit-content; 
    margin-left: auto; 
    margin-right: auto;
`;

const CsTitle = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 38px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.26;
    letter-spacing: normal;
    text-align: center;
    color: #121212; 
    margin-bottom: 12px;
`;

const CsSub = styled.div `
    font-family: NotoSansCJKkr; 
    font-size: 23px; 
    font-weight: 300; 
    font-style: normal;
    font-stretch: normal; 
    line-height: 1.43; 
    letter-spacing: normal; 
    text-align: center;
    color: #686868;  
    margin-bottom: 48px;
`;

const MI = styled.div`
    display: flex;
`;

const Soon = styled.img`
    width: 57px;
    height: 26px;    
    margin-top: 58px;
    margin-left: 8px;
`;

const Select = styled.select`
    width: 560px;
    height: 64px;
    border: solid 1px #e7e7e7;
    background-color: #ffffff;
    padding-left: 20px;
    margin-bottom: 12px;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.63;
    letter-spacing: normal;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 20px;
`

class about extends React.Component {
    playVideo() {
        if(play)    this.refs.vidRef.play();
        else    this.refs.vidRef.pause();
        play = !play;
    }

    register() {
        if (!$('#title').val()) {
            $('#title').focus();
            alert('제목을 입력해주세요.');
        } else if (!$('#content').val()) {
            $('#content').focus();
            alert('내용을 입력해주세요.');
        } else {
            alert('문의해주셔서 감사합니다.\n빠른 시일 내에 답변드리겠습니다.');
        }
    }

    render() {
        return (
            <div>
            <WWA>
                <video ref="vidRef" src={video} type="video/mp4" autoPlay="autoplay" loop="loop" width="100%" onClick={this.playVideo.bind(this)} />
            </WWA>
            <OM>
                <Title>our mission</Title>
                <div style={{width: '1120px', margin:'0 auto'}}>
                    <Text1>
                        <Bold1>Colle</Bold1>ct<br />
                        newsle<Bold1>tter</Bold1><br />
                        for<br/>broad and<br/>deeper<br/>knowledge.
                    </Text1>
                    <Text2>
                        <Bold2>넓고 깊은<br />
                        지식 전달</Bold2>을 위해<br />
                        세상의 모든 <Bold2>뉴스레터</Bold2>를<br />
                        <Bold2>모아</Bold2>드립니다.
                    </Text2>
                </div>
            </OM>
            <WWD>
                <Title>What we do,</Title>
                <div style={{width: '1120px', margin:'0 auto'}}>
                    <Collect>
                        <img src={group} />
                        <Main>Collect<br/>newsletter</Main>
                        <Sub>뉴스레터는 더 깊고 알찬 지식을 전달합니다.<br/>
                        콜레터는 세상에 흩어져 있는 모든 뉴스레터를<br/>모아서 보여드립니다. </Sub>
                    </Collect>
                    <Editor>
                        <img src={oval1} />
                        <Main>Editor’s<br/>picky pick</Main>
                        <Sub>콜레티언은 어떤 뉴스레터를 받아볼까요?<br/>
                        매주 일요일, 입맛 까다로운 에디터가 선정한<br/>뉴스레터를 추천받을 수 있습니다.</Sub>
                    </Editor>
                    <Subscribe>
                        <img src={oval2} />
                        <MI><Main>Subscribe<br/>& unsubscribe</Main><Soon src={soon} style={{cursor: 'default'}}/></MI>
                        <Sub>그만 보고 싶은 뉴스레터를 해지하기 위해<br/>일일이 돌아다니지 마세요.<br/>
                        콜레터에서는 구독과 해지가 간편해집니다.</Sub>
                    </Subscribe>
                </div>
            </WWD>
            <CS>
                <CsContainer>
                    <CsTitle> 문의하기</CsTitle> 
                    <CsSub> 콜레터에 궁금한 것들을 자유롭게 문의해주세요!</CsSub>
                    <Select>
                        <option>이용 관련</option>
                        <option>회원정보 관련</option>
                    </Select>
                    <Input type="text" className="inputName" id="title" placeholder="제목을 입력해주세요."/>
                    <Input type="text" className="inputText" id="content" placeholder="내용을 입력해주세요." style={{height: '150px'}}/>
                    <Button onClick={this.register}>문의 등록하기</Button>
                </CsContainer>
            </CS>
            </div>
        );
    }
}

export default about;

