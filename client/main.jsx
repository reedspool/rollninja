Meteor.subscribe('rolls');

FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <RollForm />});
  }
});

FlowRouter.route('/:rollId', {
  action(params) {
    ReactLayout.render(App, {content: <Roll {...params} />});
  }
});
