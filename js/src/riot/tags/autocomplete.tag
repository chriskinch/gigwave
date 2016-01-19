
<autocomplete>
  <rg-select select="{ select }"></rg-select>

  <script>
    var self = this;
    self.items = opts.items

    self.select = new RgSelect({
      autocomplete: true,
      placeholder: 'Please select a ' + self.type,
      filteron: 'text',
      onselect: function () { RiotControl.trigger('gigwave_selected', this.filtereditems); },
      //options will be added later
    })

    // Register a listener for store change events.
    RiotControl.on('gigwave_changed', function(items) {
      self.items = items;
      self.update();
    })

    RiotControl.on('gigwave_loaded', function(items) {
      self.select.options = items[self.type]; // adding options now that bands have loaded
    })
  </script>

</autocomplete>
