
<bandsearch>

  <h1>Search for a band!</h1>

  <form onsubmit={ add }>
    <!-- <input name="input" onkeyup={ edit }> -->
    <rg-select select="{ select }"></rg-select>
    <button disabled={ !text }>Search</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    var self = this;
    self.items = opts.items

    self.select = new RgSelect({
      autocomplete: true,
      placeholder: 'Please select a card',
      filteron: 'text',
      onopen: function () {console.log(this)},
      onclose: function () {},
      onfilter: function () {},
      onselect: function () {},
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
      self.select.options = items; // adding options now that bands have loaded
      console.log(self.select)
    })

    self.on('mount', function() {
      RiotControl.trigger('gigwave_init');
    })
  </script>

</bandsearch>
