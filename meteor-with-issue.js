if (Meteor.isClient) {

  Session.setDefault('rerunHelper', true);


  Template.hello.myHelper = function () {
    console.log('re-run #with helper', Session.get('rerunHelper'));
    return (Session.get('rerunHelper')) ? true : false;
  };

  Template.hello.events({
    'click input.false': function () {
      Session.set('rerunHelper', false);
    },
    'click input.rerun': function () {
      Session.set('rerunHelper', Math.random(0,99));
    }
  });
}
