'use strict';
//Require dependencies
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var uuid = require('uuid');
var mkdirp = require('mkdirp');

module.exports = Generator.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function () {
    var that = this;
    this.log(yosay('Welcome to the BizTalk generator!'));
    return this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What type of application do you want to create?',
        choices: [
          {
            name: 'BizTalk',
            value: 'biztalk'
          }/*, {
            name: 'BizTalk PipelineComponent',
            value: 'pipelinecomponent'
          }*/
        ]
      },
      {
        type: 'list',
        name: 'biztalkversion',
        message: 'Which BizTalk version?',
        default: 'biztalk2016',
        choices: [
          {
            name: 'BizTalk2016',
            value: 'biztalk2016'
          },
          {
            name: 'BizTalk2013R2',
            value: 'biztalk2013r2'
          },
          {
            name: 'BizTalk2013',
            value: 'biztalk2013'
          }
        ],
        when: function (answers) {
          return answers.type === 'biztalk';
        }

      },
      {
        type: 'input',
        name: 'name',
        message: 'Your integration name',
        default: this.appname // default to current folder name
      }

    ]).then(function (answers) {
      that.props = answers;
    });
  },
  writing: function () {
    var name = this.props.name;
    var dotnetversion = "";
    console.info(this.props.biztalkversion);
    switch (this.props.biztalkversion) {
      case "biztalk2016":
        dotnetversion = "v4.6";
        break;
      case "biztalk2013r2":
      case "biztalk2013":
        dotnetversion = "v4.5";
        break;
    }
    var options = {
      name: name,
      cliUUID: uuid.v1().toUpperCase(),
      dotnetversion: dotnetversion

    };
    switch (this.props.type) {
      case 'biztalk':
        this.fs.copy(
          this.templatePath('_gitignore'),
          this.destinationPath('.gitignore')
        );

        this.fs.copyTpl(
          this.templatePath('Integration.sln'),
          this.destinationPath(this.props.name + '.sln'),
          options
        );

        this.fs.copy(
          this.templatePath('nuget.config'),
          this.destinationPath('nuget.config')
        );

        this.fs.copyTpl(
          this.templatePath('Src/Integration.btproj'),
          this.destinationPath('Src/' + this.props.name + '.btproj'),
          options
        );
        this.fs.copy(
          this.templatePath('Src/Properties/AssemblyInfo.cs'),
          this.destinationPath('Src/Properties/AssemblyInfo.cs')
        );

        this.fs.copyTpl(
          this.templatePath('Build/Integration.proj'),
          this.destinationPath('Build/' + name + '.proj'),
          options
        );

        mkdirp.sync('Bindings');
        mkdirp.sync('Tests/TestData');
        mkdirp.sync('Src/Transforms');
        mkdirp.sync('Src/Pipelines');
        mkdirp.sync('Src/Schemas');
        mkdirp.sync('Src/Orchestrations');
        break;
    }

  },

});