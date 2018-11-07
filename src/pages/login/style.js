import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    z-index: 0;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 200px;
    padding: 50px 50px 30px;
    border-radius: 4px;
    vertical-middle: middle;
    margin: 60px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0..1);
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #777;
    margin: 10px auto;
`;

export const Button = styled.div`
    margin-top: 20px;
    width: 220px;
    height: 30px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    margin: 10px auto;
    text-align: center;
    line-height:30px;
`;