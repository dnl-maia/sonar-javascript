define([
  './base-facet',
  '../templates'
], function (BaseFacet) {

  return BaseFacet.extend({
    template: Templates['issues-status-facet'],

    sortValues: function (values) {
      var order = ['OPEN', 'RESOLVED', 'REOPENED', 'CLOSED', 'CONFIRMED'];
      return _.sortBy(values, function (v) {
        return order.indexOf(v.val);
      });
    }
  });

});
