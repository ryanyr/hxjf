'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async vote() {
    await this.ctx.render('vote.html',{
        title:'输入页'
    })
  }

  async votepost() {
    var request = await this.ctx.request.query;
    var body = await this.ctx.request.body;
    // var str = await this.ctx;
    console.log(request);
    console.log(body);
    // console.log(str);
    this.ctx.status = 200;

  }

  async result() {
    this.ctx.body = 'hi, result';
  }
}

module.exports = HomeController;
