import Ember from 'ember';

export default Ember.Component.extend({

    checkedValue: false,

    change: function(event) {
        console.log('onChange JS Event');
        this.set('inputCheckbox.checked', false);
        return false;
    }
});
