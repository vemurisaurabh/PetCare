App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../caretakers.json', function(data) {
      var caretakersRow = $('#caretakersRow');
      var caretakerTemplate = $('#caretakerTemplate');

      for (i = 0; i < data.length; i ++) {
        caretakerTemplate.find('.panel-title').text(data[i].name);
        caretakerTemplate.find('img').attr('src', data[i].picture);
        caretakerTemplate.find('.experience').text(data[i].experience);
        caretakerTemplate.find('.age').text(data[i].age);
        caretakerTemplate.find('.location').text(data[i].location);
        caretakerTemplate.find('.btn-contact').attr('data-id', data[i].id);

        caretakersRow.append(caretakerTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-contact', App.handleAdopt);
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
