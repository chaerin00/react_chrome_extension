import React from 'react';
import {Card} from 'antd';
import 'antd/dist/antd.css';
import cardImg from '../images/card.jpg';
import styled from 'styled-components';

const Panel = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 80px 80px;
    margin-left:100px;
    margin-right:100px;
`;

const { Meta } = Card;

/**
 * @return {null}
 */
function CardPanel() {
    return (
        <Panel>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example1" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example2" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example3" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example4" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example4" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example4" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example4" description="www.instagram.com" />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cardImg} />}
            >
                <Meta title="Example4" description="www.instagram.com" />
            </Card>
        </Panel>
    );
}

export default CardPanel;