
<autocomplete>
  <rg-select select="{ select }"></rg-select>

  <script>
    var self = this;
    self.items = opts.items

    //console.log(self);

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

    RiotControl.on('gigwave_loaded_' + self.type, function(items) {
      console.log(self);
      self.select.options = items; // adding options now that bands have loaded
    })
  </script>

</autocomplete>
