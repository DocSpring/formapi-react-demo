import React, { Component } from 'react';
import { Button } from 'antd';
import FormAPI from 'formapi';

import './style/AntDesign/index.less';

const config = new FormAPI.Configuration();
config.apiTokenId = 'api_test_kaGPkrf7tqy3xgF6gs';
config.apiTokenSecret = 'T0cueAKgZNGR6F_1_OI4inWm4XHStfaoxrCLIHmLYzc';
config.basePath = 'http://api.formapi.local:3000/api/v1';
const client = new FormAPI.Client(config);

class App extends Component {
  state: { pdfURL: string | null };

  constructor(props: any) {
    super(props);
    this.state = {
      pdfURL: null,
    };
  }

  generatePDF() {
    console.log('Generating PDF');

    const template_id = 'tpl_CP6CkXPSNsxHqh6cbp';
    const options = {
      data: {
        name: 'John Smith',
      },
    };

    client.generatePDF(template_id, options, function(
      error: any,
      response: any
    ) {
      if (error) throw error;
      console.log(response);
      console.log(response.status);
      console.log(response.submission);
    });
  }

  render() {
    return (
      <div style={{ margin: '60px' }}>
        <h2>FormAPI Demo</h2>
        <Button onClick={this.generatePDF}>Generate PDF</Button>
        {this.state.pdfURL && (
          <p>
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
