Meteor.subscribe('rolls');

Meteor.startup(function () {
  React.render(<App />, document.getElementById('app-container'));
});
