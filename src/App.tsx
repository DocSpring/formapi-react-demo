import React, { Component } from 'react';
import { Button, Spin, Icon } from 'antd';

const loadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

import FormAPI from 'formapi';

import './style/AntDesign/index.less';

const config = new FormAPI.Configuration();
config.apiTokenId = 'api_test_kaGPkrf7tqy3xgF6gs';
config.apiTokenSecret = 'T0cueAKgZNGR6F_1_OI4inWm4XHStfaoxrCLIHmLYzc';
config.basePath = 'http://api.formapi.local:3000/api/v1';
const client = new FormAPI.Client(config);

class App extends Component {
  state: { generating: boolean; pdfURL: string | null };

  constructor(props: any) {
    super(props);
    this.state = {
      generating: false,
      pdfURL: null,
    };

    this.generatePDF = this.generatePDF.bind(this);
  }

  generatePDF() {
    console.log('Generating PDF');
    this.setState({ generating: true });

    const template_id = 'tpl_CP6CkXPSNsxHqh6cbp';
    const options = {
      data: {
        name: 'John Smith',
      },
    };

    client.generatePDF(template_id, options, (error: any, response: any) => {
      if (error) throw error;
      console.log(response.status);
      console.log(response.submission);
      this.setState({
        generating: false,
        pdfURL: response.submission.download_url,
      });
    });
  }

  render() {
    return (
      <div style={{ margin: '60px' }}>
        <h2>FormAPI Demo</h2>
        {this.state.generating ? (
          <Spin indicator={loadingIcon} />
        ) : (
          <Button onClick={this.generatePDF}>Generate PDF</Button>
        )}
        {this.state.pdfURL && (
          <p style={{ marginTop: '10px' }}>
            <a href={this.state.pdfURL} target="_blank">
              Download PDF
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default App;
