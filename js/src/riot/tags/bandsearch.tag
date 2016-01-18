
<bandsearch>

  <h1>Search for a band!</h1>

  <form onsubmit={ add }>
    <!-- <input name="input" onkeyup={ edit }> -->
    <rg-select select="{ select_band }"></rg-select>
    <rg-select select="{ select_location }"></rg-select>
    <button disabled={ !text }>Search</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    var self = this;
    self.items = opts.items

    self.select_band = new RgSelect({
      autocomplete: true,
      placeholder: 'Please select a band',
      filteron: 'text',
      onselect: function () { RiotControl.trigger('gigwave_selected', this.filtereditems); },
      //options will be added later
    })

    self.select_location = new RgSelect({
      autocomplete: true,
      placeholder: 'Please select a location',
      filteron: 'text',
      onselect: function () { RiotControl.trigger('gigwave_selected', this.filtereditems); },
      //options will be added later
    })   

    edit(e) {
      this.text = e.target.value
    }

    add(e) {
      if (this.text) {
        this.items.push({ title: this.text })
        this.text = this.input.value = ''
      }
    }

    // Register a listener for store change events.
    RiotControl.on('gigwave_changed', function(items) {
      self.items = items;
      self.update();
    })

    RiotControl.on('gigwave_loaded_bands', function(items) {
      self.select_band.options = items; // adding options now that bands have loaded
    })

    RiotControl.on('gigwave_loaded_locations', function(items) {
      self.select_location.options = items; // adding options now that bands have loaded
    })

    self.on('mount', function() {
      RiotControl.trigger('gigwave_init');
    })
  </script>

</bandsearch>
