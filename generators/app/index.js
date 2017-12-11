"use strict";
var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var _ = require("lodash");

module.exports = yeoman.Base.extend({
  prompting_init: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      "Welcome to the rad " + chalk.red("generator-react-component-boilerplate") + " generator!"
    ));

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "What is your Package project name? (e.g., 'new-component')",
        default: "new-component"
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.props.packageName = _.kebabCase(_.deburr(this.props.projectName));
      this.props.packageDescription = "";
      this.props.componentName = this.props.packageName
        .replace(/^\s+|\s+$/g, "")
        .replace(/(^|[-_ ])+(.)/g, function (match, first, second) {
          return second.toUpperCase();
        });
    }.bind(this));
  },

  prompting_name: function () {
    const prompts = [
      {
        type: "input",
        name: "componentName",
        message: "What is the ClassName for your component?",
        default: this.props.componentName
      },
      {
        type: "input",
        name: "packageName",
        message: "What will be the npm package name?",
        default: this.props.packageName
      },
      {
        type: "input",
        name: "developerName",
        message: "What is your name? (for copyright notice, etc.)"
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props.packageName = props.packageName;
      this.props.componentName = props.componentName;
      this.props.developerName = props.developerName;
      this.destinationRoot(this.props.packageName);
    }.bind(this));
  },

  writing: {
    project: function() {
      this.fs.copy(
        this.templatePath("babelrc"),
        this.destinationPath(".babelrc")
      );
      this.fs.copy(
        this.templatePath("eslintignore"),
        this.destinationPath(".eslintignore")
      );
      this.fs.copy(
        this.templatePath("eslintrc"),
        this.destinationPath(".eslintrc"),
        this.props
      );
      this.fs.copy(
        this.templatePath("babelrc"),
        this.destinationPath(".babelrc")
      );
      this.fs.copy(
        this.templatePath("gitignore"),
        this.destinationPath(".gitignore")
      );
      this.fs.copy(
        this.templatePath("npmignore"),
        this.destinationPath(".npmignore")
      );
      this.fs.copyTpl(
        this.templatePath("_package.json"),
        this.destinationPath("package.json"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("_readme.md"),
        this.destinationPath("README.md"),
        this.props
      );
    },
    webpack: function () {
      this.fs.copy(
        this.templatePath("webpack"),
        this.destinationPath("webpack")
      );
      this.fs.copyTpl(
        this.templatePath("webpack.config.js"),
        this.destinationPath("webpack.config.js"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("karma.conf.js"),
        this.destinationPath("karma.conf.js"),
        this.props
      );
    },
    tests: function () {
      this.fs.copy(
        this.templatePath("tests/eslintrc"),
        this.destinationPath("tests/.eslintrc")
      );
      this.fs.copyTpl(
        this.templatePath("tests/_component.spec.js"),
        this.destinationPath("tests/" + this.props.packageName + ".spec.js"),
        this.props
      );
    },
    component: function () {
      this.fs.copyTpl(
        this.templatePath("src/_index.js"),
        this.destinationPath("src/index.js"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("src/styles.scss"),
        this.destinationPath("src/styles.scss"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("src/_component.js"),
        this.destinationPath("src/" + this.props.packageName + ".js"),
        this.props
      );
    },
    storybook: function () {
      this.fs.copy(
        this.templatePath(".storybook"),
        this.destinationPath(".storybook")
      );
      this.fs.copy(
        this.templatePath("stories/welcome"),
        this.destinationPath("stories/welcome")
      );
      this.fs.copyTpl(
        this.templatePath("stories/_index.js"),
        this.destinationPath("stories/index.js"),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath("stories/_component.js"),
        this.destinationPath("stories/" + this.props.packageName + ".js"),
        this.props
      );
    },
  },

  install: function () {
    this.installDependencies();
  }
});
