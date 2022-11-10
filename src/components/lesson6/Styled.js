import {React, useState} from 'react';
import ReactPlayer from 'react-player';
import {Title, Tag, Avatar, ShareButton, DislikeButton, LikeButton, SubscribeButton, SubscriberCounter, ChannelName, ChannelInfo, Flex, Container, TextVisibilityToggle} from './StyledTags';



function Styled(){

    const [subscribe, ChangeStatus] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const video = {
        name: "I Tried Using Windows 98 In 2022",
        body: "John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.",
        url: "https://www.youtube.com/watch?v=Z2dUJN1MG-o",
        channel: {
            "name": "Hallden",
            "img": "https://yt3.ggpht.com/MYrdgdgrmjsjIDDHruTxggkfi2b_cSG_9JUI0aHEQcP6EnwQ3cQhIj8KkdUbbsnHzREBlTQROEw=s48-c-k-c0x00ffffff-no-rj",
            "subscribers": "671K Subscribers"
        },
        likes: "51K",
        tags: ['windows98', 'coding', 'oldschoolgaming']
    }

    return (
        <Container>
            <ReactPlayer url={video.url} playing={true} controls={true}/>
            <Flex>
                {video.tags.map((item, index) => (
                    <Tag key={index}>{'#' + item} </Tag>
                ))}
            </Flex>
            <Title>{video.name}</Title>
            <Flex>
                <Avatar src={video.channel.img}/>
                <ChannelInfo>
                    <ChannelName>{video.channel.name}</ChannelName>
                    <SubscriberCounter>{video.channel.subscribers}</SubscriberCounter>
                </ChannelInfo>
                <SubscribeButton onClick={() => ChangeStatus(!subscribe)}>
                    {subscribe ? 'Subscribed' : 'Subscribe'}
                </SubscribeButton>
                <LikeButton>
                    51K
                </LikeButton>
                <DislikeButton>
                    Dis
                </DislikeButton>
                <ShareButton>
                    SHARE
                </ShareButton>
            </Flex>
            <Flex>
                <ChannelName>
                {showMore ? video.body : video.body.substring(0, 100)}
                <TextVisibilityToggle onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</TextVisibilityToggle>
                </ChannelName>
            </Flex>
        </Container>
    );
}

export default Styled;