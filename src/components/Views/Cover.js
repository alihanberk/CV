import React, { Component } from 'react';
import { cover } from '../../datas';
import i18n from '../../plugins/i18n/i18n';
import { Row, Col } from 'antd'

class Cover extends Component {

  render() {
    return (
      <header className="cover">
        <div className="cover__image">
          <Row className="cover__content" type="flex" justify="space-around" align="middle">
            <Col xs={{ span: 10 }} lg={{ span: 8 }}>
              <h1>
                {cover.fullName}
              </h1>
              <h6>
                {cover.title}
              </h6>
            </Col >
            <Col xs={{ span: 10 }} lg={{ span: 8 }}>
              <h2>
                {cover.secondaryTitle}
              </h2>
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}

export default Cover
