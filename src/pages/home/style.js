import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 100%;
        height: 270px;
        background-color: hsla(0,0%,71%,.2);
        vertical-align: middle;
        border: 0;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`