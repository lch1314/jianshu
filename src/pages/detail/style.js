import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;
`

export const Header = styled.div`
    margin: 50px 0 20px 0;
    font-size: 34px;
    line-height: 44px;
    color: #333;
    font-weight: 700;
    word-break: break-word;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
`

export const Content = styled.div`
    color: #2f2f2f;
    p {
        margin: 0 0 25px;
        b {
            font-weight: 700;
        }
    }
    .image-container{
        max-width: 516px;
        max-height: 311px;
        background-color: transparent;
        margin: 0 auto;
        padding-bottom: 25px;
        text-align: center;
        img{
            max-width: 100%;
            height: auto;
            vertical-align: middle;
        }
    }

`