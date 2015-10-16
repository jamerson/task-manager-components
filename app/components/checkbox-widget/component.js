import Ember from 'ember';

export default Ember.Component.extend({

    change: function() {
        if (!this.get('inputCheckbox.checked')) {
            if(!confirm('Are you sure that you want to uncheck this?')) {
                this.set('inputCheckbox.checked', true);
            }
        }
        return false;
    }
});
