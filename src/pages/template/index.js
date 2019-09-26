import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import nameSpaces from '@/libs/nameSpaces';
import { Skeleton, List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }}/>
    {text}
  </span>
);

class Template extends React.Component {


  render() {
    const { dataReady } = this.props;

    return (
      <div className={`${styles.container}`}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                dataReady && [
                  <IconText type="star-o" text="156"/>,
                  <IconText type="like-o" text="156"/>,
                  <IconText type="message" text="2"/>,
                ]
              }
              extra={
                dataReady && (
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={!dataReady} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar}/>}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default connect((state, dispatch) => {
  return {
    ...state[nameSpaces.global],
    ...state[nameSpaces.template],
    dispatch,
  };
})(Template);
