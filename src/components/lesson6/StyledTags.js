import styled from 'styled-components';

const Container = styled.div`
    background-color: rgb(24, 23, 23);
    height: fit-content;
    width: fit-content;
    padding: 25px 25px;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
`

const ChannelInfo = styled.div`
    padding-left: 10px;
`

const ChannelName = styled.p`
    color: white;
    font-size: 15px;
    font-weight: 600;
`

const SubscriberCounter = styled.p`
    color: #aaa;
    font-size: 10px;
    font-weight: 600;
`

const SubscribeButton = styled.button`
    margin-left: 26px;
    margin-top: 15px;
    height: 40px;
    width: 96px;
    text-align: center;
    font-weight: 600;
    color: #646665;
    border-radius: 48px;
    transition: 0.5;
    &:hover {
        opacity: 0.5;
        background-color: #9da8a8;
    }
    &:active{
        opacity: 0.7;
        background-color: #9da8a8;
    }
`

const LikeButton = styled.button`
    background-color: #9da8a8;
    margin-left: 100px;
    margin-top: 15px;
    height: 40px;
    width: 100px;
    color: white;
    border-radius: 20px 0px 0px 20px;
    transition: 0.3s;
    &:hover {
        opacity: 0.5
    }
`

const DislikeButton = styled.button`
    background-color: #9da8a8;
    margin-left: 0px;
    margin-top: 15px;
    height: 40px;
    width: 40px;
    color:white;
    border-radius: 0px 20px 20px 0px;
    transition: 0.3s;
    &:hover {
        opacity: 0.5
    }
`

const ShareButton = styled.button`
    background-color: #9da8a8;
    margin-top: 15px;
    height: 40px;
    width: 140px;
    color: white;
    border-radius: 20px;
    transition: 0.3s;
    &:hover {
        opacity: 0.5
    }
`

const Avatar = styled.img`
    border-radius: 50%;
`

const Tag = styled.p`
    padding-top: 10px;
    color: #3ea6ff;
`

const Title = styled.h1`
    color: white;
    font-size: 25px;
    font-weight: 600;
`
const TextVisibilityToggle = styled.span`
    color: blue;
    font:weight: 600;
`

export {Title, Tag, Avatar, ShareButton, DislikeButton, LikeButton, SubscribeButton, SubscriberCounter, ChannelName, ChannelInfo, Flex, Container, TextVisibilityToggle}