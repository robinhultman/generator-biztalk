'use strict';
//Require dependencies
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var uuid = require('uuid');

module.exports = Generator.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function () {
    var that = this;
    return this.prompt([
      {
        type: 'input',
        name: 'from',
        message: 'From which system?',
      },
      {
        type: 'input',
        name: 'fromtype',
        message: 'From what message type?',
      },
      {
        type: 'input',
        name: 'to',
        message: 'To what system?',
      },
      {
        type: 'input',
        name: 'totype',
        message: 'To what message type?',
      },

    ]).then(function (answers) {
      that.props = answers;
    });
  },
  writing: function () {
    this.log('test');
    
    var options = {
      from: this.props.from,
      fromtype: this.props.fromtype,
      to: this.props.to,
      totype: this.props.totype,
      mapname: this.props.from + "." + this.props.fromtype + "_To_" + this.props.to + "." + this.props.totype
    };

    this.fs.copyTpl(
      this.templatePath('Map1.btm'),
      this.destinationPath("Src/Transforms/" + this.props.from + "." + this.props.fromtype + "_To_" + this.props.to + "." + this.props.totype + ".btm"),
      options
    );

    this.fs.copy(
      this.templatePath('Map1.xsl'),
      this.destinationPath("Src/Transforms/" + this.props.from + "." + this.props.fromtype + "_To_" + this.props.to + "." + this.props.totype + ".xsl")
    );

  },

});