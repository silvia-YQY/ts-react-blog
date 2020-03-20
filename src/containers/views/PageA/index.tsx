import React from 'react';
import { Button } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import http from '@services/http';
import api from '@services/api';

const a = 1;

const PageA = ({ history }: RouteComponentProps) => {
  // const getList = async () => {
  //   try {
  //     // const res = await http.get(api.artList);
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div>
      <div>PageA</div>
      <Button onClick={() => history.push('/page-b')}>转跳到B</Button>
    </div>
  );
};

export default withRouter(PageA);
