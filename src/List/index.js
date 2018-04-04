import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  list-style-type: none;
  background: #ececec;
  color: black;
  > ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;

  }
`;
const Item = styled.div`
  display: flex;
  padding: 8px 16px;
  margin: 0;
  align-items: center;
  text-decoration: none;
  position: relative;
  user-select: none;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 56px;
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const Header = Title.extend`
  height:  24px;
  line-height: 24px;
  position: relative;
  text-align: left;
  font-weight: bold;
`;

const Description = Title.extend`
  font-size: 14px;
  > img {
    width: 20px;
    height: 20px;
    padding: 4px;
    background-color: white;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 6px;

  }
`;

List.Item = Item;
List.Avatar = Avatar;
List.Content = Content;
List.Header = Header;
List.Description = Description;

export default List;
